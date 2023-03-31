import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VehicleCard = ({ VIN, status, vehicleImage, id }) => {
    return (

        <div class='bg-white border border-stroke rounded-lg m-6 md:m-0 relative'>
            <div className=" flex flex-col justify-center items-center">
                <Link href={`/vehicle/${id}`} className='absolute right-0 top-0 p-5'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#F9FAFB" />
                        <g clip-path="url(#clip0_3744_86615)">
                            <path d="M23.6596 20.2782C23.3536 20.4349 22.9769 20.3151 22.819 20.0075H22.8189C21.8606 18.14 19.3163 15.4626 16 15.4626C13.0258 15.4626 10.3828 17.6655 9.181 20.0075C9.02291 20.314 8.64641 20.435 8.33969 20.2774C8.033 20.1198 7.91163 19.7441 8.06872 19.4372C9.44953 16.7409 12.4861 14.2126 16 14.2126C20.0075 14.2126 22.8777 17.3799 23.9312 19.4372C24.0885 19.7444 23.9669 20.121 23.6596 20.2782ZM8.24285 13.5658L9.63485 14.8215C9.89266 15.0541 10.2877 15.0308 10.5176 14.7761C10.7488 14.5198 10.7284 14.1246 10.4721 13.8933L9.08013 12.6376C8.82391 12.4064 8.42872 12.4267 8.19741 12.683C7.96622 12.9393 7.98653 13.3345 8.24285 13.5658ZM22.3651 14.8215L23.757 13.5658C24.0133 13.3345 24.0337 12.9393 23.8025 12.683C23.5713 12.4267 23.1761 12.4064 22.9198 12.6376L21.5278 13.8933C21.2715 14.1245 21.2512 14.5198 21.4823 14.7761C21.7124 15.0311 22.1076 15.0538 22.3651 14.8215ZM15.9999 12.3298C16.3451 12.3298 16.6249 12.05 16.6249 11.7048V9.82812C16.6249 9.48297 16.3451 9.20312 15.9999 9.20312C15.6548 9.20312 15.3749 9.48297 15.3749 9.82812V11.7048C15.375 12.05 15.6548 12.3298 15.9999 12.3298ZM19.0703 19.7219C19.0703 21.4174 17.6929 22.7969 16 22.7969C14.307 22.7969 12.9297 21.4174 12.9297 19.7219C12.9297 18.0264 14.307 16.6469 16 16.6469C17.6929 16.6469 19.0703 18.0264 19.0703 19.7219ZM17.8203 19.7219C17.8203 18.7156 17.0037 17.8969 16 17.8969C14.9963 17.8969 14.1797 18.7156 14.1797 19.7219C14.1797 20.7282 14.9963 21.5469 16 21.5469C17.0037 21.5469 17.8203 20.7282 17.8203 19.7219Z" fill="#8593AF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3744_86615">
                                <rect width="16" height="16" fill="white" transform="translate(8 8)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
                <Image src={vehicleImage} alt="Car logo" className='w-20 h-20 p-4 bg-grayBg rounded-full mt-10 mb-5' />
                <p className='my-3 text-primary text-xl font-medium'>{`CAR ${id}`}</p>
                <p className='text-center text-xs text-grayTable my-3'>VIN / CHASIS NUMBER: <br /><span className='font-bold text-primary text-xl'>{VIN}</span></p>
                <button className='text-sm text-secondaryText bg-grayBg px-3 py-1 rounded-2xl mb-10 mt-4'>{status}</button>
            </div>
        </div>
    )
}

export default VehicleCard