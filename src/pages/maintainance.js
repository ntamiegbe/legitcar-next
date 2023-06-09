import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import VehicleDetails from '@/components/VehicleDetails';
import vehicles from './vehicles';
import HondaLogo from '../assets/Honda.png'
import VehicleCard from '@/components/VehicleCard';
import NoVehicle from '@/components/NoVehicle';
import CarDetails from '@/components/modals/CarDetails';

const vehiclesData = [
  {
    id: 1,
    carMake: 'Honda',
    VIN: "JHLRE4859C401526Z",
    vehicleImage: HondaLogo,
    startDate: "N / A",
    completeDate: "N / A",
    plan: "6-months Plan",
    status: "No maintenance",
    repairShop: "Monic’s Auto Center",
    repairPhone: "0908 802 1497",
    repairAddress: "2, Agbaoku Street, Opebi, Ikeja, Lagos, Nigeria Lagos, 100242, Ikeja",
    repairs: "Vehicle brake repair, Vehicle engine diagnostic, Oil change, Gearbox repair, Battery replacement, Fuel system",
  },
  // {
  //   id: 2,
  //   carMake: 'Honda',
  //   VIN: "JHLRE4859C401526Z",
  //   vehicleImage: HondaLogo,
  //   startDate: "N / A",
  //   completeDate: "N / A",
  //   plan: "6-months Plan",
  //   status: "No maintenance",
  //   repairShop: "Monic’s Auto Center",
  //   repairPhone: "0908 802 1497",
  //   repairAddress: "250, Agbaoku Street, Opebi, Ikeja, Lagos, Nigeria Lagos, 100242, Ikeja",
  //   repairs: "Vehicle brake repair, Vehicle engine diagnostic, Oil change, Gearbox repair, Battery replacement, Fuel system",
  // },
]

const maintainance = () => {

  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false)
  // Remeber to set the initial state back to false
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false)
  const [isVehicleDetailsModalOpen, setIsVehicleDetailsModalOpen] = useState(false)


  const handleOpenServicesModal = () => {
    setIsServicesModalOpen(true)
  }

  const handleCloseServicesModal = () => {
    setIsServicesModalOpen(false)
  }

  const handleVehicleOpenModal = () => {
    setIsVehicleModalOpen(true)
  }

  const handleVehicleCloseModal = () => {
    setIsVehicleModalOpen(false)
  }

  const handleVehicleDetailsOpenModal = () => {
    setIsVehicleDetailsModalOpen(true)
  }

  const handleVehicleDetailsCloseModal = () => {
    setIsVehicleDetailsModalOpen(false)
  }


  const services = [
    { id: 1, name: 'Oil change' },
    { id: 2, name: 'Car wash' },
    { id: 3, name: 'Tyre puncture & alignment' },
    { id: 4, name: 'Battery replacement' },
    { id: 5, name: 'Cooling fan repair' },
    { id: 6, name: 'Other' }
  ]

  const [selectedServices, setSelectedServices] = useState([])

  function handleServiceClick(serviceId) {
    const isSelected = selectedServices.includes(serviceId)
    if (isSelected) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId))
    } else {
      setSelectedServices([...selectedServices, serviceId])
    }
  }

  return (
    <>
      <Head>
        <title>LegitCar | Maintainance</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-between">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-grayBg">
          <Navbar page={"Maintainance"} />
          {vehiclesData.length === 0 ? (
            <NoVehicle />
          ) : (
            <div className="px-5 max-w-7xl mx-auto">
              <div className="flex items-center justify-center md:justify-end mx-6 mt-4 mb-8 space-x-5">
                <button onClick={handleVehicleOpenModal} className='bg-white border border-stroke py-4 px-6 rounded-lg text-secondaryText text-base cursor-pointer'>Add a vehicle</button>
                <Modal isOpen={isVehicleModalOpen} onClose={handleVehicleCloseModal}>
                  <div className="max-h-screen bg-white">
                    <div className="flex flex-col items-center justify-center space-y-10">
                      <h2 className='text-primary text-xl font-medium text-center'>Add a vehicle</h2>
                      <p className='text-primary text-sm font-normal text-center px-14'>To add a vehicle, enter the VIN or chasis number below</p>
                    </div>
                    <div className="mt-14 md:max-w-[468px] mx-auto">
                      <h1 className='text-start mb-3 text-primary font-medium'>VIN / Chasis number</h1>
                      <div className="border border-stroke rounded-lg bg-white mb-5">
                        <input type="text" className='px-5 py-3 rounded-lg focus:border-transparent focus:outline-none w-full' placeholder='Enter 17 digits number' />
                      </div>
                      <div className="flex items-center justify-center">
                        <button onClick={handleVehicleDetailsOpenModal} className='bg-brand mx-auto px-14 py-3 rounded-lg w-auto text-white font-medium'>Decode VIN</button>
                      </div>
                      <div className="mt-5 flex items-center justify-center space-x-2 text-brand">
                        <AiOutlineQuestionCircle />
                        <h1 className='text-lg'>Where to find VIN</h1>
                      </div>
                    </div>
                  </div>
                </Modal>
                <Modal isOpen={isVehicleDetailsModalOpen} onClose={handleVehicleDetailsCloseModal}>
                  <CarDetails />
                </Modal>

                <button onClick={handleOpenServicesModal} className='bg-brand py-4 px-6 rounded-lg text-white text-base cursor-pointer'>Book Service</button>
                <Modal isOpen={isServicesModalOpen} onClose={handleCloseServicesModal}>
                  <div className="flex flex-col items-center justify-center space-y-10">
                    <h2 className='text-primary text-xl font-medium text-center'>What service(s) do you want to book?</h2>
                    <p className='text-primary text-sm font-normal text-center px-14'>Choose the maintenance service(s) you want from below. Select as many as your vehicle requires.</p>
                  </div>
                  <div className="py-14 md:max-w-[468px] mx-auto">
                    <div className="flex flex-wrap gap-4 mb-8 mx-8">
                      {services.map(service => (
                        <div
                          key={service.id}
                          className={`py-2 px-4 rounded-lg border font-normal ${selectedServices.includes(service.id) ? 'bg-overlay text-brand border-brand' : 'bg-white text-primary border-stroke'
                            }`}
                          onClick={() => handleServiceClick(service.id)}
                        >
                          <div className="flex items-center space-x-2">
                            {selectedServices.includes(service.id) && (
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7422 3.76606C14.0221 4.01101 14.0475 4.43773 13.7985 4.71409L6.78928 12.4939C6.53898 12.7717 6.10923 12.7894 5.83699 12.5331L1.78097 8.71475C1.52802 8.47661 1.50381 8.07981 1.72083 7.80855C1.96029 7.50921 2.40623 7.46801 2.69123 7.72435L5.83815 10.5549C6.11163 10.8009 6.53268 10.7789 6.77907 10.5058L12.8081 3.82121C13.052 3.5507 13.4681 3.52618 13.7422 3.76606Z" fill="#8E44AD" />
                              </svg>
                            )}
                            <p>{service.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center mt-10">
                      <Link className='bg-brand px-14 py-3 rounded-lg w-auto text-white font-medium' href="/kudos">Submit</Link>
                    </div>
                  </div>
                </Modal>
              </div>
              <div className=" bg-white md:bg-transparent md:border-none border border-dashboardBorders rounded-lg opacity-[90%] mb-20">

                <table className='w-full hidden pb-14'>
                  <thead>
                    <tr className="bg-grayBg">
                      <th className="px-6 py-3 text-start text-grayTable text-xs font-medium">VIN / Chasis number</th>
                      <th className="px-6 py-3 text-start text-grayTable text-xs font-medium">Model</th>
                      <th className="px-6 py-3 text-start text-grayTable text-xs font-medium">Date created</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-dashboardBorders">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        5TDZK23C78S210350
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        TOYOTA Camry 2009
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary text-sm">
                        Fri 30th May, 2022 05:31PM
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className={`${vehiclesData.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7' : 'd-block'}`}>
                  {/* Conditional rendering for when vehiclesData has more than one element */}
                  {vehiclesData.length > 1 ? (
                    <>
                      {vehiclesData.map((vehicle) => (
                        <VehicleCard
                          key={vehicle.id}
                          id={vehicle.id}
                          carMake={vehicle.carMake}
                          vehicleImage={vehicle.vehicleImage}
                          VIN={vehicle.VIN}
                          startDate={vehicle.startDate}
                          completeDate={vehicle.completeDate}
                          plan={vehicle.plan}
                          status={vehicle.status}
                          repairShop={vehicle.repairShop}
                          repairPhone={vehicle.repairPhone}
                          repairAddress={vehicle.repairAddress}
                          repairs={vehicle.repairs}
                        />
                      ))}
                    </>
                  ) : (
                    /* Conditional rendering for when vehiclesData has one or zero elements */
                    <>
                      {vehiclesData.map((vehicle) => (
                        <VehicleDetails
                          key={vehicle.id}
                          carMake={vehicle.carMake}
                          vehicleImage={vehicle.vehicleImage}
                          VIN={vehicle.VIN}
                          startDate={vehicle.startDate}
                          completeDate={vehicle.completeDate}
                          plan={vehicle.plan}
                          status={vehicle.status}
                          repairShop={vehicle.repairShop}
                          repairPhone={vehicle.repairPhone}
                          repairAddress={vehicle.repairAddress}
                          repairs={vehicle.repairs}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default maintainance