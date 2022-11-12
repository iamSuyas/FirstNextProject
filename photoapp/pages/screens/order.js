import Link from "next/link"
import Image from 'next/image'
import logo from '/public/nextlogo.jpg'

export default function Order() {
    return (
        <>
            <section className="
                w-full
                h-screen
                bg-neutral-800
                px-12
                flex
                flex-row
                items-center
                justify-center
                ">
                <div className="
                flex
                flex-col
                justify-center
                items-center
                gap-5
                ">
                    <Image className="
                    h-20
                    w-20
                    rounded-xl 
                    inline
                    mb-3
                    md:h-32
                    md:w-32"
                        src={logo} />
                    <h2 className="
                font-bold 
                text-center 
                text-2xl 
                text-slate-50
                sm:text-4xl
                ">Enter Your Email
                    </h2>
                    <input type="email" className="
                    w-64
                    sm:w-96 
                    sm:h-6 
                    rounded-xl
                    "/>
                    <Link href="/screens/submitted">
                        <button className="
                        border-opacity-10
                        bg-sky-500
                        text-slate-50
                        hover:bg-sky-700
                 hover:transition 
                 duration-500 
                 ease-out
                        w-28
                        h-7
                        text-sm
                        sm:w-36
                        sm:h-9
                        sm:text-base
                        rounded-3xl
                            ">Submit
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}