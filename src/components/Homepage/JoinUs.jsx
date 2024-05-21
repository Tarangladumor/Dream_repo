import React from 'react'
import JOIN_US from "../../assets/join_us_image.png"

const JoinUs = () => {
    return (
        <div className='lg:w-4/5 mx-auto'>
            <div className='flex justify-between items-center gap-8'>
                {/* box-1 */}
                <div className=' text-center '>
                    <div className='p-1 text-section-rgba'>
                        <p className='p-1 text-4xl font-bold'>Join us now!</p>
                        <div className=' p-1flex flex-col text-lg p-2 text-section-rgba'>
                            <p>Join us now to enjoy special offers and </p>
                            <p>free subscription for a month.</p>
                        </div>
                    </div>
                    <div>
                        <input className=' bg-input-rgba transition-all duration-200 hover:scale-105' type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <div class="max-w-sm space-y-3 transition-all duration-200 hover:scale-105">
                        <textarea class="py-3 px-4 block w-full border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:border-transparent bg-input-rgba" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div>
                        <button className=' mt-3 bg-register-rgba m-auto p-4 rounded-3xl tracking-widest w-[40%] transition-all duration-200 hover:scale-105 text-white '>Submit</button>
                    </div>
                </div>
                {/* box-2 */}
                <div>
                    <img src={JOIN_US} alt="" />
                </div>
            </div>
        </div>
    )
}

export default JoinUs
