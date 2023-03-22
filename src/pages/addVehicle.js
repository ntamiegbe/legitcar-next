import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const addVehicle = () => {
    return (
        <>
            <Head>
                <title>LegitCar | Add vehicle</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="px-5">
                    <div className="flex items-center justify-end mt-4 mb-8">
                        <Link href="/vehicles" className='cursor-pointer'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#475467" />
                                <g clip-path="url(#clip0_3616_84485)">
                                    <path d="M8.41369 15.9999C8.30841 15.9999 8.20304 15.96 8.12298 15.8793C7.96226 15.7186 7.96226 15.4579 8.12298 15.2972L15.2991 8.1211C15.4599 7.96028 15.7204 7.96028 15.8812 8.1211C16.0419 8.28182 16.0419 8.54239 15.8812 8.70311L8.70499 15.8793C8.62433 15.96 8.51906 15.9999 8.41369 15.9999Z" fill="white" />
                                    <path d="M15.5904 16C15.4851 16 15.3797 15.96 15.2997 15.8793L8.12298 8.70265C7.96226 8.54183 7.96226 8.28126 8.12298 8.12054C8.2837 7.95982 8.54427 7.95982 8.70499 8.12054L15.8812 15.2972C16.0419 15.4579 16.0419 15.7186 15.8812 15.8793C15.8005 15.96 15.6952 16 15.5904 16Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3616_84485">
                                        <rect width="8" height="8" fill="white" transform="translate(8 8)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-10">
                        <h2 className='text-primary text-xl font-medium'>Add a vehicle</h2>
                        <p className='text-primary text-sm font-normal'>To add a vehicle, enter the VIN or chasis number below</p>
                    </div>
                    <div className="mt-14">
                        <h1 className='text-start mb-3 text-[#1D2939] font-medium'>VIN / Chasis number</h1>
                        <div className="border border-[#D0D5DD] rounded-[8px] bg-white mb-5">
                            <input type="text" className='px-5 py-3 rounded-[8px] focus:border-transparent focus:outline-none' placeholder='Enter 17 digits number' />
                            <button className='bg-[#8E44AD] mx-1 px-3 py-2 rounded-[8px] text-white font-medium hidden md:inline-flex'>Decode VIN</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className='bg-[#8E44AD] mx-auto px-14 py-3 rounded-lg  text-white font-medium'>Decode VIN</button>
                        </div>
                        <div className="mt-5 flex items-center justify-center space-x-2 text-[#8E44AD]">
                            <AiOutlineQuestionCircle />
                            <h1 className='text-lg'>Where to find VIN</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default addVehicle