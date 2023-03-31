import VehicleDetails from '@/components/VehicleDetails'
import { useRouter } from 'next/router'
import HondaLogo from '../../assets/Honda.png'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar';
import { BsArrowLeftShort } from 'react-icons/bs'
import Link from 'next/link'

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
    {
        id: 2,
        carMake: 'Honda',
        VIN: "JHLRE4859C401526Z",
        vehicleImage: HondaLogo,
        startDate: "N / A",
        completeDate: "N / A",
        plan: "16-months Plan",
        status: "No maintenance",
        repairShop: "Monic’s Auto Center",
        repairPhone: "0908 802 1497",
        repairAddress: "250, Agbaoku Street, Opebi, Ikeja, Lagos, Nigeria Lagos, 100242, Ikeja",
        repairs: "Vehicle brake repair, Vehicle engine diagnostic, Oil change, Gearbox repair, Battery replacement, Fuel system",
    },
]

const VehicleDetailsPage = () => {
    const router = useRouter()
    const { id } = router.query

    // Fetch the full details of the vehicle with id from your data source
    const vehicle = vehiclesData.find((vehicle) => vehicle.id === Number(id))

    if (!vehicle) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex justify-between">
            <Sidebar />
            <div className="flex-1 min-h-screen bg-grayBg">
                <Navbar page={"Maintainance"} />
                <div className="p-5">
                    <Link href="/maintainance" className='flex items-center'>
                        <BsArrowLeftShort className="w-8 h-8 mx-2 text-grayTable" />
                        <span className='hidden lg:inline text-secondaryText'>Back</span>
                    </Link>
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
                </div>
            </div>
        </div>
    )
}

export default VehicleDetailsPage
