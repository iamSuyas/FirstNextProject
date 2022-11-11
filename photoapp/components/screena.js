import Button from "./button";

export default function Screena() {
    return (
        <>
            <section className="
                w-full
                h-
                bg-neutral-800
                px-12
                ">
                <div>
                    <h2 className="
                font-bold 
                text-center 
                text-2xl 
                pt-60
                text-slate-50
                md:text-4xl">Hi! Welcome to the Next Restaurant's Official Site</h2>
                    <p className="
                text-center
                pt-16
                text-sm
                text-slate-50
                md:text-base">Lorem ipsum dolor sit amet consectetur, Hallow adipisicing elit. Perferendis dolorum numquam minus  </p>
                    <p className="
                text-center
                pb-16
                text-sm
                text-slate-50
                md:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <div className="
                            flex 
                            justify-center
                            pb-96">
                        <Button />
                    </div>
                </div>
            </section>
        </>
    )
}
