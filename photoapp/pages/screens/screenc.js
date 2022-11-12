import Image from "next/image";
import Link from 'next/link'
export default function Screenc() {
    return (
        <>
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
            flex-wrap
            ">
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
            <section id="Connect With Us" className="
        w-full
        h-full
        bg-neutral-800
        ">
                <div className="">
                    <h1 className="
        text-slate-50
        font-bold 
        text-center 
        text-2xl        
        md:text-3xl 
        pb-6
        pt-20
        ">Contact Us</h1>
                    <ul className="
            flex
            justify-center
            gap-10
            text-center
            pt-20
            pb-24
            ">
                        <Link href="https://www.facebook.com/" ><Image src="/facebook.jpg" width={30} height={5} /></Link>
                        <Link href="https://www.instagram.com/" ><Image src="/instagram.jpg" width={30} height={5} /></Link>
                        <Link href="https://twitter.com/" ><Image src="/twitter.jpg" width={30} height={5} /></Link>
                        <Link href="https://www.youtube.com/" ><Image src="/youtube.jpg" width={30} height={5} /></Link>
                    </ul>
                </div>
            </section>
        </>
    )
}