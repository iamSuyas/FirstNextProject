import Image from "next/image";
import Link from 'next/link'
export default function Screend(){
    return(
        <section id="Connect With Us" className="
        w-full
        h-96
        bg-neutral-800
        ">

        <div className="">
        <h1 className="
        text-slate-50
        font-bold 
        text-center 
        text-3xl 
        pb-6
        pt-10
        ">Contact Us</h1>
                         <ul className="
            flex
            justify-center
            gap-10
            text-center
            pt-20">
                <Link href="https://www.facebook.com/" ><Image src="/facebook.jpg" width={30} height={5} /></Link>
                <Link href="https://www.instagram.com/" ><Image src="/instagram.jpg" width={30} height={5} /></Link>
                <Link href="https://twitter.com/" ><Image src="/twitter.jpg" width={30} height={5} /></Link>
                <Link href="https://www.youtube.com/" ><Image src="/youtube.jpg" width={30} height={5} /></Link>
            </ul>
                    </div>
                        </section>
    )
}