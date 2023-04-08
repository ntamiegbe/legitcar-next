import React, { useState } from 'react'
import HondaLogo from '../../assets/Honda.png'
import Image from 'next/image'
import Modal from '../Modal'

const CarDetails = () => {
    const [isVehiclePlansModalOpen, setIsVehiclePlansModalOpen] = useState(false)


    const handleOpenVehiclePlansModal = () => {
        setIsVehiclePlansModalOpen(true)
    }

    const handleCloseVehiclePlansModal = () => {
        setIsVehiclePlansModalOpen(false)
    }
    return (
        <div className='min-h-screen mx-auto max-w-6xl'>
            <h2 className='text-xl font-medium text-center text-primary my-10'>Vehicle Details</h2>
            <div className="md:flex items-center md:space-x-8">
                <div className="border border-stroke p-14 bg-white text-center mb-10 md:mb-0 rounded-lg">
                    <div className="mx-auto mb-8 h-28 w-28 bg-grayBg rounded-full flex items-center justify-center">
                        <Image src={HondaLogo} className='object-contain w-16 h-16' alt='car icon' />
                    </div>
                    <h3 className='text-2xl font-bold text-primary mb-8'>TOYOTA</h3>
                    <p className='text-xs font-medium text-secondaryText mb-2'>VIN / CHASIS NUMBER:</p>
                    <p className='text-2xl font-bold'>JHLRE4859C401526Z</p>
                </div>
                <div className="border border-stroke p-14 bg-white rounded-lg md:flex md:flex-wrap">
                    <div className="mb-8 w-full md:w-1/2">
                        <p className='text-xs font-medium text-secondaryText mb-2'>Make</p>
                        <p className='text-base font-medium text-primary uppercase'>TOYOTA</p>
                    </div>
                    <div className="mb-8 w-full md:w-1/2">
                        <p className='text-xs font-medium text-secondaryText mb-2'>Model</p>
                        <p className='text-base font-medium text-primary uppercase'>SIENNA</p>
                    </div>
                    <div className="mb-8 w-full md:w-1/2">
                        <p className='text-xs font-medium text-secondaryText mb-2'>Year</p>
                        <p className='text-base font-medium text-primary uppercase'>2008</p>
                    </div>
                    <div className="mb-8 w-full md:w-1/2">
                        <p className='text-xs font-medium text-secondaryText mb-2'>Body Class</p>
                        <p className='text-base font-medium text-primary uppercase'>WAGON</p>
                    </div>
                    <div className="mb-8 w-full md:w-1/2">
                        <p className='text-xs font-medium text-secondaryText mb-2'>Vehicle Type</p>
                        <p className='text-base font-medium text-primary uppercase md:pr-4'>MULTIPURPOSE PASSENGER VEHICLE (MPV)</p>
                    </div>
                    <div className="mb-8 w-full md:w-1/2">
                        <p className='text-xs font-medium text-secondaryText mb-2'>Manufacturer</p>
                        <p className='text-base font-medium text-primary uppercase'>TOYOTA MOTOR MANUFACTURING, INDIANA, INC.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 mb-20">
                <button onClick={handleOpenVehiclePlansModal} className='bg-brand mx-auto px-14 py-3 rounded-lg w-auto text-white font-medium'>Subscribe to a plan</button>
                <Modal isOpen={isVehiclePlansModalOpen} onClose={handleCloseVehiclePlansModal}>
                    <div className="min-h-screen lg:max-h-screen max-w-3xl mx-auto bg-white">
                        <h2 className='text-4xl font-medium text-center text-primary pt-20 pb-10'>Choose a plan</h2>
                        <div className="md:flex md:items-center md:space-x-10 md:justify-center">
                            <div className="py-5 px-10 border border-stroke rounded-lg mb-10 md:mb-0">
                                <div className="flex items-center justify-between">
                                    <h2 className='text-start text-secondaryText text-2xl font-medium mb-8'>6-Month Plan</h2>
                                </div>
                                <p className='text-4xl font-bold text-primary mb-6'>NGN 10,000</p>
                                <button className='bg-white border border-brand lg:w-[16rem] w-full py-4 px-6 rounded-lg text-brand font-medium text-base cursor-pointer mb-10'>Choose plan</button>
                                <div className="flex items-center mb-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className='p-1 rounded-full bg-overlay' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                                    </svg>
                                    <h1 className='pl-3 text-secondaryText'>Lorem ipsum dolor sit amet</h1>
                                </div>
                                <div className="flex items-center mb-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className='p-1 rounded-full bg-overlay' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                                    </svg>
                                    <h1 className='pl-3 text-secondaryText'>Lorem ipsum dolor sit amet</h1>
                                </div>
                                <div className="flex items-center mb-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className='p-1 rounded-full bg-overlay' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                                    </svg>
                                    <h1 className='pl-3 text-secondaryText'>Lorem ipsum dolor sit amet</h1>
                                </div>
                                <div className="flex items-center mb-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className='p-1 rounded-full bg-overlay' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                                    </svg>
                                    <h1 className='pl-3 text-secondaryText'>Lorem ipsum dolor sit amet</h1>
                                </div>
                            </div>

                            <div className="py-5 px-7 border border-stroke rounded-lg mb-10 md:mb-0">
                                <div className="flex items-center justify-between mb-8 space-x-4">
                                    <h2 className='text-start text-secondaryText text-2xl font-medium'>6-Month Plan</h2>
                                    <button className='text-sm text-secondaryText bg-grayBg px-3 py-1 rounded-2xl'>No maintainance</button>
                                </div>
                                <p className='text-4xl font-bold text-primary mb-6'>NGN 10,000</p>
                                <button className='bg-brand lg:w-[16rem] w-full py-4 px-6 rounded-lg text-white font-medium text-base cursor-pointer mb-10'>Choose plan</button>
                                <div className="flex items-center mb-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className='p-1 rounded-full bg-overlay' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                                    </svg>
                                    <h1 className='pl-3 text-secondaryText'>Lorem ipsum dolor sit amet</h1>
                                </div>
                                <div className="flex items-center mb-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className='p-1 rounded-full bg-overlay' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                                    </svg>
                                    <h1 className='pl-3 text-secondaryText'>Lorem ipsum dolor sit amet</h1>
                                </div>
                                <div className="flex items-center mb-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className='p-1 rounded-full bg-overlay' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                                    </svg>
                                    <h1 className='pl-3 text-secondaryText'>Lorem ipsum dolor sit amet</h1>
                                </div>
                                <div className="flex items-center mb-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className='p-1 rounded-full bg-overlay' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                                    </svg>
                                    <h1 className='pl-3 text-secondaryText'>Lorem ipsum dolor sit amet</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default CarDetails