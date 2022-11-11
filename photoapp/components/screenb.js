import Image from 'next/image'


export default function Screenb() {
    return (
        <section id="Sevices" className="
                w-full
                h-full
                px-10">
            <h1 className="
        text-black-700 
        font-bold 
        text-center
        text-2xl
        md:text-3xl 
        pt-10
        md:pt-20
        ">Our Services</h1>
            <div className="
        flex
        flex-row
        justify-center">
                <div className="
        md:flex 
        md:flex-row
        md:justify-around
        gap-5
        w-5/6
        pt-10
        md:pt-20
        ">
                    <div ><div className='
                flex 
                justify-center
                pt-1
                '>
                        <Image src="/catering.jpg" width="90" height="90" className='
                        md:w-36' /></div>
                        <h2 className="
                text-black-700 
                font-bold 
                text-center 
                text-xl
                pb-5
                md:pt-10
                md:2xl
                ">Food Catering</h2>
                        <p className='
                    text-sm
                    md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et qui, repudiandae similique nam, recusandae quidem ab asperiores ex, aut fugit labore veritatis facere?
                            sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                            voluptas beatae facilis labore, omnis sint quae eum.</p>
                    </div>
                    <div><div className='flex justify-center pt-2'>
                        <Image src="/bulk.jpg" width="90" height="90" className='
                        md:w-36' /></div>
                        <h2 className="
                text-black-700 
                font-bold 
                text-center 
                text-xl
                pb-5
                md:pt-10
                md:2xl
                ">Bulk Ordering</h2>
                        <p className='
                    text-sm
                    md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium a incidunt animi ad, ab dignissimos vero? Unde numquam odit repudiandae perferendis nisi.
                            sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                            voluptas beatae facilis labore, omnis sint quae eum.</p>
                    </div>
                    <div><div className='flex justify-center pt-2'>
                        <Image src="/delivery.jpg" width="90" height="90" className='
                        md:w-36
                        ' /></div>
                        <h2 className="
                text-black-700 
                font-bold 
                text-center 
                text-xl
                pb-5
                md:pt-10
                md:2xl
                " >Food Ordering</h2>
                        <p className='
                    text-sm
                    md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident fugiat aliquam minima at explicabo. Earum eveniet quaerat, sunt molestias nesciunt quas! Quis.
                            sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                            voluptas beatae facilis labore, omnis sint quae eum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 