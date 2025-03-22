import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/landing-pages'
import "./style.css"
import { Register } from './pages/register'
import { Login } from './pages/login'
import { Admin } from './pages/admin'
import { Formulir } from './component/formulir'

// eslint-disable-next-line react-refresh/only-export-components
function Dashboard() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const t = localStorage.getItem("token")
    if(t == null){
      setIsLogin(false)
      return
    }
    console.log(t)

    setIsLogin(true)
  }, [])

  return (
    <>
      {
        isLogin ?  (<Admin/>) : (<Login/>)
      }
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={(<LandingPage />)}/>
        <Route path='/register' element={(<Register />)}/>
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/formulir' element={<Formulir/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
