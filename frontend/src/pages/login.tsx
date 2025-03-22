import { useState } from 'react';
import { Navbar } from '../component/navbar';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [incorrect, setIncorrect] = useState(false);

    async function login() {
        const post = await fetch('http://localhost:1000/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const json = await post.json();

        if (json.token) {
            localStorage.setItem('token', json.token);
            document.location.href = '/admin';
            return;
        }

        setIncorrect(true);
    }

    return (
        <>
            <Navbar />
            <div className='flex h-[100vh] w-full'>
                <div className='w-[70%] bg-[#202344]'>
                    <img src="/img/soccer.avif" className='w-full min-h-[100vh]' />
                </div>
                <div className='w-[30%] flex flex-col justify-center items-center p-10'>
                    <h2 className='text-2xl font-semibold'>
                        Admin panel login
                    </h2>
                    <form className='mt-7'>
                        <input
                            placeholder='Username'
                            type='text'
                            className='border-2 my-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md w-full'
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
                        />
                        <input
                            placeholder='Password'
                            type='password'
                            className='border-2 my-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md w-full'
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <p
                            className={
                                'text-red-500 text-center mb-2 ' +
                                (incorrect ? '' : 'hidden')
                            }
                        >
                            Username atau password salah
                        </p>
                        <input
                            type='submit'
                            value='Login'
                            className='bg-[#e72747] hover:bg-[#f05e36] cursor-pointer text-white w-full px-5 py-3 rounded-md text-lg text-center transition duration-300'
                            onClick={(ev) => {
                                ev.preventDefault();
                                login();
                            }}
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
