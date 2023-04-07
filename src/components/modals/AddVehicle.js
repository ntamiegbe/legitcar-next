import React, { useState } from 'react'

const AddVehicle = () => {
    const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false)


    const handleVehicleOpenModal = () => {
        setIsVehicleModalOpen(true)
    }

    const handleVehicleCloseModal = () => {
        setIsVehicleModalOpen(false)
    }
    
    return (
        <div className="h-screen bg-white">
            <div className="flex flex-col items-center justify-center space-y-10">
                <h2 className='text-primary text-xl font-medium text-center'>Add a vehicle</h2>
                <p className='text-primary text-sm font-normal text-center px-14'>To add a vehicle, enter the VIN or chasis number below</p>
            </div>
            <div className="mt-14 md:max-w-[468px] mx-auto">
                <h1 className='text-start mb-3 text-primary font-medium'>VIN / Chasis number</h1>
                <div className="border border-stroke rounded-lg bg-white mb-5">
                    <input type="text" className='px-5 py-3 rounded-lg focus:border-transparent focus:outline-none' placeholder='Enter 17 digits number' />
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={handleVehicleDetailsOpenModal} className='bg-brand mx-auto px-14 py-3 rounded-lg w-auto text-white font-medium'>Decode VIN</button>
                    <Modal isOpen={isVehicleDetailsModalOpen} onClose={handleVehicleDetailsCloseModal}>
                        <CarDetails />
                    </Modal>
                </div>
                <div className="mt-5 flex items-center justify-center space-x-2 text-brand">
                    <AiOutlineQuestionCircle key={ } />
                    <h1 className='text-lg'>Where to find VIN</h1>
                </div>
            </div>
        </div>
    )
}

export default AddVehicle