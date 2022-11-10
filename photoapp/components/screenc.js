import Image from "next/image";
import Link from 'next/link'
export default function Screenc(){
    return(
        <section id="partners" className="
        w-screen 
        h-96
       
        ">
            <h1 className="
            font-bold 
            text-center 
            text-3xl 
            pt-20
            
            ">Our Partners</h1>


            <ul className="
            flex
            justify-around
            text-center
            pt-20">
                <Link href="https://esewa.com.np/#/home" ><Image src="/esewa.jpg" width={131} height={80} /></Link>
                <Link href="https://foodmandu.com/" ><Image src="/foodmandu.jpg" width={128} height={77} className="rounded-full" /></Link>
                <Link href="https://www.bhojdeals.com/" ><Image src="/bhoj.jpg" width={128} height={77} className="rounded-full" /></Link>
                <Link href="https://pathao.com/np/" ><Image src="/pathao.jpg" width={139} height={77} className="rounded-full" /></Link>
                <Link href="https://khalti.com/" ><Image src="/khalti.jpg" width={128} height={77} /></Link>
            </ul>
        </section >
    )
}