import Image from 'next/image'
import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { FaGlobeAfrica } from 'react-icons/fa'
import { MdDirections } from 'react-icons/md'
import { BsShareFill } from 'react-icons/bs'

const VehicleDetails = ({carMake, VIN, startDate, completeDate, plan, status, repairShop, repairPhone, repairAddress, repairs, vehicleImage}) => {

    const [isCarDetailsOpen, setCarDetailsOpen] = useState(false)

    const handleOpenCarDetailsModal = () => {
        setCarDetailsOpen(!isCarDetailsOpen)
    }

    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, label: "Step 1", icon: "👣" },
        { id: 2, label: "Step 2", icon: "🔍" },
        { id: 3, label: "Step 3", icon: "💡" },
        { id: 4, label: "Step 4", icon: "📝" },
        { id: 5, label: "Step 5", icon: "✅" },
    ];

    const handleClick = (stepId) => {
        setCurrentStep(stepId);
    };

    return (
        <div className="bg-white border border-stroke rounded-lg m-5 shadow-main md:hidden">
            <div className="mb-5 flex items-center p-7">
                <Image src={vehicleImage} alt="Car logo" className='w-20 h-20 p-4 bg-grayBg rounded-full' />
                <div className="px-2">
                    <p className='text-primary font-semibold'>{carMake}</p>
                    <p className='text-secondaryText font-medium text-sm'>{VIN}</p>
                </div>
                <div className="flex justify-end flex-1 px-3">
                    {isCarDetailsOpen ? <BiChevronUp className='h-8 w-8 text-brand cursor-pointer' onClick={handleOpenCarDetailsModal} /> : <BiChevronDown className='h-8 w-8 text-brand cursor-pointer' onClick={handleOpenCarDetailsModal} />}
                </div>
            </div>
            <div className="mb-8 px-7">
                <h5 className='text-grayTable text-xs mb-2'>Start date</h5>
                <p className='text-primary text-sm'>{startDate}</p>
            </div>
            <div className="mb-8 px-7">
                <h5 className='text-grayTable text-xs mb-2'>Completed date</h5>
                <p className='text-primary text-sm'>{completeDate}</p>
            </div>
            <div className="mb-8 px-7">
                <h5 className='text-grayTable text-xs mb-2'>Plan</h5>
                <p className='text-primary text-sm'>{plan}</p>
            </div>
            <div className="mb-8 px-7">
                <h5 className='text-grayTable text-xs mb-2'>Status</h5>
                <button className='text-sm text-secondaryText bg-grayBg px-3 py-1 rounded-2xl'>{status}</button>
            </div>
            {isCarDetailsOpen && (
                <>
                    <div className="border-t border-stroke md:hidden p-7">
                        <h2 className='text-grayTable text-xs font-semibold mb-6'>VEHICLE REPAIR SHOP</h2>
                        <div className="flex justify-between items-start">
                            <div className="bg-orangeOverlay rounded-full px-4 py-3 flex items-center justify-center">
                                <p className='text-orange text-center font-semibold text-4xl'>M</p>
                            </div>
                            <div className="px-4">
                                <p className='text-start text-primary text-base font-normal mb-5'>{repairShop}</p>
                                <div className="flex items-center space-x-2 mb-4">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3333 8.33334C10.5033 8.33334 9.7 8.2 8.95334 7.95334C8.72334 7.88 8.46 7.93334 8.27669 8.11669L6.81003 9.58669C4.92003 8.62669 3.37669 7.08334 2.41669 5.19669L3.88334 3.72334C4.06669 3.54 4.12 3.27669 4.04669 3.04669C3.80003 2.30003 3.66669 1.49669 3.66669 0.666687C3.66666 0.296656 3.37 0 3 0H0.666656C0.3 0 0 0.296656 0 0.666656C0 6.92666 5.07334 12 11.3333 12C11.7033 12 12 11.7033 12 11.3333V9C12 8.63 11.7033 8.33334 11.3333 8.33334Z" fill="#8E44AD" />
                                    </svg>
                                    <p className='text-secondaryText text-xs font-normal'>{repairPhone}</p>
                                </div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.99999 0C2.24316 0 0 2.24292 0 4.99999C0 6.34202 0.525398 7.60254 1.47755 8.54735L4.82227 11.9258C4.86914 11.9734 4.9331 12 4.99999 12C5.06688 12 5.13084 11.9734 5.17772 11.9258L8.52098 8.54906C9.47461 7.60254 9.99998 6.34202 9.99998 4.99999C9.99998 2.24292 7.75683 0 4.99999 0ZM4.99999 7.00001C3.89695 7.00001 3 6.1028 3 5.00002C3 3.89721 3.89695 3 4.99999 3C6.10303 3 6.99998 3.89721 6.99998 4.99999C6.99998 6.10277 6.10303 7.00001 4.99999 7.00001Z" fill="#8E44AD" />
                                    </svg>
                                    <p className='text-secondaryText text-xs font-normal'>{repairAddress}</p>
                                </div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="border border-stroke py-2 px-4 rounded-lg cursor-pointer">
                                        <FaGlobeAfrica className='text-brand ' />
                                    </div>
                                    <div className="border border-stroke py-2 px-4 rounded-lg cursor-pointer">
                                        <MdDirections className='text-brand ' />
                                    </div>
                                    <div className="border border-stroke py-2 px-4 rounded-lg cursor-pointer">
                                        <BsShareFill className='text-brand ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stroke md:hidden p-7">
                        <div className="flex items-center space-x-2 text-xs mb-6">
                            <h2 className='text-grayTable font-semibold'>VEHICLE REPAIR SHOP</h2>
                            <span className='text-blue bg-blueOverlay rounded-full p-1 px-2'>2</span>
                        </div>
                        <p className='text-primary text-sm'>{repairs}</p>
                    </div>

                    <div className="border-t border-stroke md:hidden px-7 py-5">
                        <h2 className='text-primary font-semibold text-base mb-4'>Maintenance history</h2>
                        <div className="flex flex-col space-y-5">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className={`flex items-center ${currentStep >= step.id ? "text-brand" : "text-primary"
                                        }`}
                                    onClick={() => handleClick(step.id)}
                                >
                                    <div
                                        className={`h-6 w-6 rounded-full flex justify-center items-center ${currentStep >= step.id ? "bg-brand" : "bg-primary"
                                            }`}
                                    >
                                        {step.icon}
                                    </div>
                                    <span className="ml-2">{step.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default VehicleDetails