import InfoContainer from "../components/InfoContainer";
import LandingPageButton from "../components/LandingPageButton";
import { CreditCard } from "lucide-react";

function Menu(){

    return(
        <section className="bg-slate-950 text-blue-50">
            <section className="flex flex-col md:items-center md:flex-row min-h-dvh justify-center px-6 py-20 gap-6 max-w-7xl mx-auto">
                <div className="flex flex-col gap-3 max-w-xl">
                    <div className="max-w-100 text-5xl font-wf-sans font-semibold">
                        <p className="text-violet-400">Control your accounts.</p>
                        <p>Manage your expanses!</p>
                    </div>
                    <div className="text-lg max-w-100 text-slate-300 font-wf-sans">
                        <p>Create your account now, and discover where your money goes.</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-2xs sm:flex-row gap-5">
                    <LandingPageButton link='/login' text='Login' color='text-white' background='bg-violet-700' border='border-zinc-900'/>
                    <LandingPageButton link='/register' text='Register' color='text-black' background='bg-slate-300' border='border-black'/>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center bg-slate-900 min-h-dvh">
                <h2 className="text-3xl text-center font-inter tracking-widest font-extralight">What make us different?</h2>
                <div>
                    <InfoContainer border='border-blue-200' shadow='shadow-blue-400' background='bg-blue-100' icon={<CreditCard color="#3B82F6"/>} text='Manage your expanses.'/>
                    <p>Management your money</p>
                    <p>See where you are spanding money with graphics</p>
                </div>
            </section>
        </section>
    )
}

export default Menu;