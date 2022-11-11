import Button from "./button";

export default function Screena() {
    return (
        <>
            <section className="
                w-full
                h-screen
                bg-neutral-800
                ">

                <div>
                    <h2 className="
                font-bold 
                text-center 
                text-4xl 
                pt-60
                text-slate-50">Hi! Welcome to the Next Restaurant's Official Site</h2>
                    <p className="
                text-center
                pt-16
                text-slate-50">Lorem ipsum dolor sit amet consectetur, Hallow adipisicing elit. Perferendis dolorum numquam minus  </p>
                    <p className="
                text-center
                pb-16
                text-slate-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <div className="
                            flex 
                            justify-center">
                        <Button />
                    </div>
                </div>
            </section>
        </>
    )
}
