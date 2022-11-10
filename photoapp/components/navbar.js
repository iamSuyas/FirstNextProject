import Image from 'next/image'
import logo from '../public/nextlogo.jpg'
import Link from 'next/link'
const Navbar = () =>{
    return(
        <>
            <nav className="
            bg-neutral-500
            flex
            justify-between
            items-center
            cursor-pointer
            fixed
            z-50
            w-screen
            ">
                 <span>
                            <div className="
                        text-xl
                        flex
                        p-1
                        items-center
                        ">
                                <Image className="h-10 w-10 rounded-xl" src={logo} />
                                Next Restaurant
                            </div>
                        </span>

                        <ul className="
                    flex
                    justify-evenly
                    gap-2
                    p-3
                    cursor-pointer
                    
                    ">

                            <li>
                                <a href="#" >About us</a>
                            </li>
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            <li>
                                <a href="#">Our Partners</a>
                            </li>
                            <li className='mr-5'>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
        </>
    )
}
export default Navbar