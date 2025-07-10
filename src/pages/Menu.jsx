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
            <section className="flex flex-col justify-center items-center bg-slate-800 min-h-dvh gap-20">
                <h2 className="text-3xl text-center font-inter tracking-widest font-extralight">What make us different?</h2>
                <div className="flex gap-3 w-2/3">
                    <InfoContainer border='border-blue-200' shadow='shadow-blue-400' background='bg-blue-100' icon={<CreditCard color="#3B82F6"/>} text='Manage your expanses.'/>
                    <InfoContainer border='border-fuchsia-200' shadow='shadow-fuchsia-400' background='bg-fuchsia-100' icon={<CreditCard color="#D946EF"/>} text='Manage your expanses.'/>
                    <InfoContainer border='border-red-200' shadow='shadow-red-400' background='bg-red-100' icon={<CreditCard color="#F87171"/>} text='Manage your expanses.'/>
                    <InfoContainer border='border-emerald-200' shadow='shadow-emerald-400' background='bg-emerald-100' icon={<CreditCard color="#34D399"/>} text='Manage your expanses.'/>
                </div>
            </section>
        </section>
    )
}

export default Menu;