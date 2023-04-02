import React from 'react'

const CarDetails = () => {
  return (
    <div>
          <h2 className='text-[#1D2939] text-center text-4xl mb-10'>Vehicle details</h2>
          <div className="md:flex justify-center items-center md:space-x-8">
              <div className="border w-full md:w-[320px] md:h-[308px] px-20 py-10 bg-white text-center mb-10 rounded-lg">
                  <div className="bg-[#F2F4F7] rounded-full mx-auto mb-8 p-5 h-28 w-28">
                      <img src="" className='object-contain' alt='car icon' />
                  </div>
                  <h3 className='text-2xl font-bold text-[#1D2939] mb-8'>TOYOTA</h3>
                  <p className='text-[#667085] text-xs font-normal'>VIN / CHASIS NUMBER:</p>
                  <p className='font-bold text-2xl'>JHLRE4859C401526Z</p>
              </div>
              <div className="border w-full md:w-[670px] md:h-[308px] px-10 py-10 bg-white mb-10 rounded-lg md:flex md:flex-wrap">
                  <div className="mb-8 w-full md:w-1/2">
                      <p className='text-[#667085] text-xs font-normal mb-3'>Make</p>
                      <p className='text-base text-[#1D2939] font-semibold uppercase'>TOYOTA</p>
                  </div>
                  <div className="mb-8 w-full md:w-1/2">
                      <p className='text-[#667085] text-xs font-normal mb-3'>Model</p>
                      <p className='text-base text-[#1D2939] font-semibold uppercase'>SIENNA</p>
                  </div>
                  <div className="mb-8 w-full md:w-1/2">
                      <p className='text-[#667085] text-xs font-normal mb-3'>Year</p>
                      <p className='text-base text-[#1D2939] font-semibold uppercase'>2008</p>
                  </div>
                  <div className="mb-8 w-full md:w-1/2">
                      <p className='text-[#667085] text-xs font-normal mb-3'>Body class</p>
                      <p className='text-base text-[#1D2939] font-semibold uppercase'>WAGON</p>
                  </div>
                  <div className="mb-8 w-full md:w-1/2">
                      <p className='text-[#667085] text-xs font-normal mb-3'>Vehicle type</p>
                      <p className='text-base text-[#1D2939] font-semibold uppercase'>MULTIPURPOSE PASSENGER VEHICLE (MPV)</p>
                  </div>
                  <div className="mb-8 w-full md:w-1/2">
                      <p className='text-[#667085] text-xs font-normal mb-3'>Manufacturer</p>
                      <p className='text-base text-[#1D2939] font-semibold uppercase'>TOYOTA MOTOR MANUFACTURING, INDIANA, INC.</p>
                  </div>
              </div>
          </div>
          <div className="flex items-start justify-center">
              <button className='bg-[#8E44AD] px-7 w-[239px] md:w-[197px] py-2 rounded-lg text-white font-medium' onClick={() => navigate("/MaintainancePlans")}>Choose a plan</button>
          </div>
    </div>
  )
}

export default CarDetails