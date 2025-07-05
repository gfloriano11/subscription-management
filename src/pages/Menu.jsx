import LandingPageButton from "../components/LandingPageButton";

function Menu(){

    return(
        <div className="flex justify-center items-center h-dvh bg-slate-950 text-blue-50">
            <div className="flex flex-col gap-2">
                <div className="max-w-100 text-5xl font-wf-sans font-semibold">
                    <p className="text-violet-400">Control your accounts.</p>
                    <p>Manage your expanses!</p>
                </div>
                <div className="max-w-90 text-base font-wf-sans font-normal">
                    <p>Create your account now, and discover where you are spenting your money.</p>
                    <p>Remember when your accounts are due.</p>
                </div>
            </div>
            <div className="flex gap-2">
                <LandingPageButton link='/login' text='Login' color='text-white' background='bg-violet-700' border='border-zinc-900'/>
                <LandingPageButton link='/register' text='Register' color='text-black' background='bg-slate-300' border='border-black'/>
            </div>
        </div>
    )
}

export default Menu;