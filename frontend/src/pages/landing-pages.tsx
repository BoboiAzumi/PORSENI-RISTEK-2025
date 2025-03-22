import { About } from "../component/about";
import { Banner } from "../component/banner";
import { Footer } from "../component/footer";
import { Pertandingan } from "../component/pertandingan";
import { Navbar } from "../component/navbar";
import { MainLayout } from "../layout/main-layout";
import { RegisterNow } from "../component/register-now";
import { Contact } from "../component/contact";

export function LandingPage() {
    return (
        <>
            <Navbar />
            <MainLayout color='bg-[#202344]'>
                <Banner />
            </MainLayout>
            <MainLayout color="bg-[#ffffff]">
                <About />
            </MainLayout>
            <MainLayout color="bg-[#f3f5f7]">
                <Pertandingan />
            </MainLayout>
            <MainLayout color="bg-[#ffffff]">
                <RegisterNow />
            </MainLayout>
            <MainLayout color="bg-[#f3f5f7]">
                <Contact />
            </MainLayout>
            <Footer />
        </>
    );
}
