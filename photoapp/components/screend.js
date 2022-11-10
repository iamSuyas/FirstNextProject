import Image from "next/image";
import Link from 'next/link'
export default function Screend(){
    return(
        <section id="Connect With Us" className="
        w-screen 
        h-96
        
        ">

        <div className="">
        <h1 className="
        text-black-700 
        font-bold 
        text-center 
        text-3xl 
        pb-6
        pt-20
        ">Contact Us</h1>
                         <ul className="
            flex
            justify-evenly
            text-center
            pt-20">
                <Link href="https://www.facebook.com/" ><Image src="/facebook.jpg" width={58} height={15} /></Link>
                <Link href="https://www.instagram.com/" ><Image src="/instagram.jpg" width={58} height={15} /></Link>
                <Link href="https://twitter.com/" ><Image src="/twitter.jpg" width={58} height={15} /></Link>
                <Link href="https://www.youtube.com/" ><Image src="/youtube.jpg" width={58} height={15} /></Link>
            </ul>
                    </div>
                        </section>
    )
}