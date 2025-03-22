import { Footer } from '../component/footer';
import { Navbar } from '../component/navbar';
import { RegisterComponent } from '../component/register-component';
import { MainLayout } from '../layout/main-layout';

export function Register() {
    return (
        <>
            <Navbar />
            <MainLayout color='bg-[#f3f5f7]'>
                <RegisterComponent />
            </MainLayout>
            <Footer />
        </>
    );
}
