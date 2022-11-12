
import Link from "next/link"

export default function Screena() {
    return (
        <>
            <section className="
                w-full
                h-screen
                bg-neutral-800
                px-12
                flex
                items-center
                justify-center
                ">
                <div>
                    <h2 className="
                font-bold 
                text-center 
                text-2xl 
                text-slate-50
                md:text-4xl
                ">Hi! Welcome to the Next Restaurant's Official Site.
                    </h2>
                    <p className="
                text-center
                pt-16
                text-sm
                text-slate-50
                md:text-base
                ">Lorem ipsum dolor sit amet consectetur, Hallow adipisicing elit. Perferendis dolorum numquam minus
                    </p>
                    <p className="
                text-center
                text-sm
                text-slate-50
                md:text-base
                ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <div className="
                            flex 
                            justify-center
                            mt-16
                            ">
                        <Link href="/screens/order"><button className="
                        border-opacity-10
                        bg-sky-500
                        text-slate-50
                        hover:bg-sky-700
                        hover:w-40
                        hover:h-12
                        hover:text-xl
                 hover:transition 
                 duration-500 
                 ease-out
                        w-28
                        h-7
                        text-sm
                        md:w-36
                        md:h-9
                        md:text-base
                        rounded-3xl
                        ">Order Now
                        </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
