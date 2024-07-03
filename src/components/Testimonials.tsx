import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What people are saying</h2>

        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, i)=>{
                return <div key={i} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className="bg-neutral-50 h-full rounded-md p-6 text-md border border-neutral-300 ">
                        <p className='text-neutral-500'>{testimonial.text}</p>
                        <div className='flex mt-8 items-start'>
                            <img src={testimonial.image} alt={testimonial.user} className='w-12 h-12 rounded-full mr-6 border border-neutral-500'/>
                            <div>
                                <h6>{testimonial.user}</h6>
                                <span className='text-sm font-normal italic text-neutral-400'>{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Testimonials
