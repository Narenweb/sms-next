import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <nav className="container mx-auto flex items-center justify-between">
                <div>
                    <Link href="/" className="text-white text-xl font-bold hover:text-customGreen hover:transition-color hover:delay-100 hover:ease-out cursor-pointer">
                        Event Management
                    </Link>
                </div>
                <div className='flex w-48 justify-between'>
                    <Link href="/space" className="text-white text-lg  after:mx-auto after:bg-customGreen after:w-0 after:h-[2px] after:transition-all after:duration-700 after:ease-in-out after:block hover:after:w-full cursor-pointer">
                        Space
                    </Link>
                    <Link href="/celebration" className="text-white text-lg  after:mx-auto after:bg-customGreen after:w-0 after:h-[2px] after:transition-all after:duration-700 after:ease-in-out after:block hover:after:w-full cursor-pointer">
                        Celebration
                    </Link>
                </div>
                <div className="flex justify-between items-center">
                <Link href="/login" className="text-white text-lg mr-10 after:mx-auto after:bg-customGreen after:w-0 after:h-[2px] after:transition-all after:duration-700 after:ease-in-out after:block hover:after:w-full cursor-pointer">
                        Login
                    </Link>
                    <Link href="/signup">
                       <button className='btn px-6 py-1'>Register</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
