import Image from "next/image";
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
                <Image src="/esewa.jpg" width={131} height={80} />
                <Image src="/foodmandu.jpg" width={128} height={77} className="rounded-full" />
                <Image src="/bhoj.jpg" width={128} height={77} className="rounded-full" />
                <Image src="/pathao.jpg" width={139} height={77} className="rounded-full" />
                <Image src="/khalti.jpg" width={128} height={77} />
            </ul>
        </section >
    )
}