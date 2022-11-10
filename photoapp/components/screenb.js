import Image from 'next/image'


export default function Screenb() {
    return(
    <section id="Sevices" className="
                w-screen
                h-screen">
        <h1 className="
        text-black-700 
        font-bold 
        text-center z
        text-3xl 
        pt-20
        ">Our Services</h1>
        <div className="
        flex
        flex-row
        justify-center">
            <div className="
        flex 
        flex-row
        justify-around
        gap-5
        w-4/6
        pt-20
        ">
             
                <div ><div className='flex justify-center'>
                <Image src="/catering.jpg" width="150"height="90" /></div>
                    <h2 className="
                text-black-700 
                font-bold 
                text-center 
                text-2xl 
                pb-5
                pt-10
                ">Food Catering</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et qui, repudiandae similique nam, recusandae quidem ab asperiores ex, aut fugit labore veritatis facere?
                        sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                        voluptas beatae facilis labore, omnis sint quae eum.</p>
                </div>
                <div><div className='flex justify-center'>
                <Image src="/bulk.jpg" width="150"height="90" /></div>
                    <h2 className="
                text-black-700 
                font-bold 
                text-center 
                text-2xl 
                pb-5
                pt-10
                ">Bulk Ordering</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium a incidunt animi ad, ab dignissimos vero? Unde numquam odit repudiandae perferendis nisi.

                        sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                        voluptas beatae facilis labore, omnis sint quae eum.</p>
                </div>
                <div><div className='flex justify-center'>
                <Image src="/delivery.jpg" width="150"height="90"  /></div>
                    <h2 className="
                text-black-700 
                font-bold 
                text-center 
                text-2xl 
                pb-5
                pt-10
                " >Food Ordering</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident fugiat aliquam minima at explicabo. Earum eveniet quaerat, sunt molestias nesciunt quas! Quis.
                        sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                        voluptas beatae facilis labore, omnis sint quae eum.</p>
                </div>
            </div>
        </div>
    </section>
    )
} 