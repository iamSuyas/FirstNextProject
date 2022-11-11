import Image from 'next/image'
import logo from '../public/nextlogo.jpg'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <nav className="
            bg-neutral-500
            fixed
            p-2
            w-full
            md:flex
            justify-between
            items-center
            font-semibold
            h-16
            ">
                <div className="
                        flex
                        justify-center
                        items-center
                        text-lg
                        md:text-xl
                        ">
                    <div className=''>
                        <Image className="
                    h-8 
                    w-8 
                    rounded-xl 
                    inline
                    md:h-11
                    md:w-11"
                            src={logo} />
                        Next Restaurant
                    </div>
                </div>
                <ul className="
                flex
                justify-evenly
                md:gap-3
                ">
                    <li>
                        <a href="#" className='
                hover:text-lg 
                 hover:transition 
                 duration-500 
                 ease-ou ' >About us</a>
                    </li>
                    <li>
                        <a href="#" className='
                        hover:text-lg 
                 hover:transition 
                 duration-500 
                 ease-out'>Our Services</a>
                    </li>
                    <li>
                        <a href="#" className='
                        hover:text-lg 
                        hover:transition 
                        duration-500 
                        ease-out'>Our Partners</a>
                    </li>
                    <li>
                        <a href="#" className="
                        hover:text-lg 
                        hover:transition 
                        duration-500 
                        ease-out">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar