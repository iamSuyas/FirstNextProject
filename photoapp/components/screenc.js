import Image from "next/image";
import Link from 'next/link'
export default function Screenc() {
    return (
        <section id="partners" className="
        w-full 
        h-full
        px-10
        ">
            <h1 className="
            font-bold 
            text-center 
            text-2xl
            md:text-3xl 
            pt-20
            ">
                Our Partners
            </h1>
            <ul className="
            flex
            justify-around
            text-center
            pt-20
            pb-20
            flex-wrap">
                <Link href="https://esewa.com.np/#/home" ><Image src="/esewa.jpg" width="90" height="90" className='
                        md:w-36
                        ' /></Link>
                <Link href="https://foodmandu.com/" ><Image src="/foodmandu.jpg" width="90" height="90" className='
                        md:w-36
                        rounded-full' /></Link>
                <Link href="https://www.bhojdeals.com/" ><Image src="/bhoj.jpg" width="90" height="90" className='
                        md:w-36
                        rounded-full' /></Link>
                <Link href="https://pathao.com/np/" ><Image src="/pathao.jpg" width="90" height="90" className='
                        md:w-36
                        rounded-full' /></Link>
                <Link href="https://khalti.com/" ><Image src="/khalti.jpg" width="90" height="90" className='
                        md:w-36
                        ' /></Link>
            </ul>
        </section >
    )
}