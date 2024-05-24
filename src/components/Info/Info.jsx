import React from 'react'

export default function Info() {

    
  return (
      <>
          <div className="information bg-infobg py-[100px]">
            <div className="container mx-auto">
                <div className="flex  justify-between items-center ">
                    <div className="w-1/3">
                        <div className="inner text-white text-center ">
                            <h4 className='text-3xl mb-2 font-semibold'>LOCATION</h4>
                            <p className='mb-3'>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>

                            
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="inner text-white text-center">
                            <h4 className='text-3xl mb-2 font-semibold'>AROUND THE WEB</h4>
                            <ul className= {`social-list flex justify-center items-center gap-5`}>
                                <li className='rounded-full w-[40px] h-[40px] border border-white flex justify-center items-center'>
                                <i class="fa-brands fa-facebook "></i>
                                </li>
                                <li className='rounded-full w-[40px] h-[40px] border border-white flex justify-center items-center'>
                                <i class="fa-brands fa-twitter"></i>
                                </li>
                                <li className='rounded-full w-[40px] h-[40px] border border-white flex justify-center items-center'>
                                <i class="fa-brands fa-linkedin"></i>
                                </li>
                                <li className='rounded-full w-[40px] h-[40px] border border-white flex justify-center items-center'>
                                <i class="fa-solid fa-globe"></i>
                                </li>
                            </ul>
                           

                            
                        </div>
                    </div>


                    <div className="w-1/3">
                        <div className="inner text-white text-center">
                            <h4 className='text-3xl mb-2 font-semibold'>ABOUT FREELANCER</h4>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                           

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}
