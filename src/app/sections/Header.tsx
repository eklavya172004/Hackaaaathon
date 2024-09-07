import LogoIcon from '../assets/logo.svg'

export const Header = () => {
    return <header className="py-4 fixed  z-[100] w-full top-0 border-b border-white/15 md:border-none ">
        <div className="container">
                <div className="flex justify-between items-center border border-white/15 p-2.5  rounded-xl max-w-3xl mx-auto backdrop-blur-md ">
                <div>
                    <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/25'>
                           <LogoIcon className="h-8 w-8" />
                    </div>
                        </div>
                    <div className='md:block hidden '>
                        <nav className='flex gap-8 text-sm '>
                            <a href="#" className=' text-white/70 hover:text-white transition'>How it Works</a>
                            <a href="#" className=' text-white/70 hover:text-white transition'>Features</a>
                            <a href="#" className=' text-white/70 hover:text-white transition'>Contact Us</a>
                        </nav>
                    </div>
                <div className='flex gap-4 items-center'>
                <button className='relative py-2 px-3 rounded-lg font-medium text-base bg-gradient-to-b from-[#2e120d] to-[#801d05] shadow-[0px_0px_12px_#ff8c00]'>
    <div className='absolute inset-0'>
        <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
        <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
        <div className='absolute inset-0 shadow-[0_0_10px_rgb(255,140,0,.7)_inset] rounded-lg'></div>
    </div>
    <span className='font-normal'>Search for Colleges</span>
</button>
                </div>

                </div>
            </div> 
    </header>
}