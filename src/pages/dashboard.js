import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar';

const dashboard = () => {
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
                    <Navbar page={"Dashboard"} />
                    <div className="p-5 max-w-7xl mx-auto">
                        <div className='min-h-screen mx-auto max-w-6xl'>
                            <h2 className='text-4xl font-medium text-center text-primary my-10'>Vehicle Details</h2>
                            <div className="md:flex items-center md:space-x-8">
                                <div className="border border-stroke p-14 bg-white text-center mb-10 md:mb-0 rounded-lg">
                                    <div className="mx-auto mb-8 h-28 w-28 bg-grayBg rounded-full flex items-center justify-center">
                                        {/* <Image src={HondaLogo} className='object-contain w-16 h-16' alt='car icon' /> */}
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
                            <div className="flex items-center justify-center mt-10">
                                <button className='bg-brand mx-auto px-14 py-3 rounded-lg w-auto text-white font-medium'>Subscribe to a plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default dashboard