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
                        ">
                    <div className='text-lg
                        md:text-xl'>
                        <Link href="/screens/screena"><Image className="
                    h-8 
                    w-8 
                    rounded-xl 
                    inline
                    md:h-11
                    md:w-11"
                            src={logo} />
                        Next Restaurant</Link>
                    </div>
                </div>
                <ul className="
                flex
                justify-evenly
                md:gap-3
                ">
                    <li><Link href="/screens/screena">
                        <div className='
                        text-sm
                        sm:text-base
                hover:text-lg 
                 hover:transition 
                 duration-500 
                 ease-out
                ' >About us</div>
                    </Link></li>
                    <li>
                    <Link href="/screens/screenb"><div className='
                    text-sm
                    sm:text-base
                        hover:text-lg 
                 hover:transition 
                 duration-500 
                 ease-out'>Our Services</div></Link>
                    </li>
                    <li>
                    <Link href="/screens/screenc"> <div className='
                    text-sm
                    sm:text-base
                        hover:text-lg 
                        hover:transition 
                        duration-500 
                        ease-out'>Our Partners</div></Link>
                    </li>
                    <li>
                    <Link href="/screens/order"><div className="
                    text-sm
                    sm:text-base
                        hover:text-lg 
                        hover:transition 
                        duration-500 
                        ease-out">Order Now</div></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar