import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useState } from "react";
import Logo from '../assets/person.png'
import Image from 'next/image'
import { HiOutlineCamera } from 'react-icons/hi'
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

const userProfile = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Head>
                <title>LegitCar | User Profile</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex justify-between">
                <Sidebar />
                <div className="flex-1 min-h-screen bg-grayBg">
                    <Navbar page={"Profile"} />
                    <div className="pt-10 pb-20">
                        <div className="max-w-5xl bg-white m-5 md:mx-10 lg:mx-auto border border-dashboardBorders rounded-lg opacity-[90%]">
                            <div className="flex flex-col">
                                <div className="flex items-center justify-start border-b w-full">
                                    <button
                                        className={`pt-5 text-start px-5 w-full md:w-auto pb-3 text-md font-normal ${activeTab === "tab1"
                                            ? "border-b border-brand text-brand font-semibold"
                                            : "text-secondaryText"
                                            }`}
                                        onClick={() => handleTabClick("tab1")}
                                    >
                                        Basic Information
                                    </button>
                                    <button
                                        className={`pt-5 text-start px-5 w-full md:w-auto pb-3 text-md font-normal ${activeTab === "tab2"
                                            ? "border-b border-brand text-brand font-semibold"
                                            : "text-secondaryText"
                                            }`}
                                        onClick={() => handleTabClick("tab2")}
                                    >
                                        Security
                                    </button>
                                </div>

                                <div id="tab1" className={`px-5 py-10 ${activeTab === "tab1" ? "" : "hidden"}`}>
                                    <h2 className='text-icons text-sm mb-3'>PERSONAL DATA</h2>
                                    <div className="relative">
                                        <Image src={Logo} className='w-20 h-20 rounded-full' />
                                        <HiOutlineCamera className='text-brand h-8 w-8 p-1 bg-overlay rounded-full absolute -bottom-2 left-12' />
                                    </div>
                                    <form className="bg-white py-6 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                                        <div className="mb-4">
                                            <label className="block text-primary text-sm font-medium mb-1" for="first_name">
                                                First Name
                                            </label>
                                            <input
                                                className="appearance-none border border-stroke rounded-lg w-full p-4 text-base text-primary focus:outline-none"
                                                id="first_name" type="text" placeholder="Enter your first name" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-primary text-sm font-medium mb-1" for="last_name">
                                                Last Name
                                            </label>
                                            <input
                                                className="appearance-none border border-stroke rounded-lg w-full p-4 text-base text-primary focus:outline-none"
                                                id="last_name" type="text" placeholder="Enter your last name" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-primary text-sm font-medium mb-1" for="email">
                                                Email Address
                                            </label>
                                            <input
                                                className="appearance-none border border-stroke bg-grayBg rounded-lg w-full p-4 text-base text-primary focus:outline-none"
                                                id="email" type="email" placeholder="Enter your email address" value="test@mail.com" disabled />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-primary text-sm font-medium mb-1" for="phone_number">
                                                Phone Number
                                            </label>
                                            <input
                                                className="appearance-none border border-stroke rounded-lg w-full p-4 text-base text-primary focus:outline-none"
                                                id="phone_number" type="text" placeholder="Enter your phone number" />
                                        </div>
                                    </form>
                                    <button className='my-4 bg-brand py-4 px-6 rounded-lg text-white text-base'>Save changes</button>
                                </div>

                                <div id="tab2" className={`px-5 py-10 ${activeTab === "tab2" ? "" : "hidden"}`}>
                                    <h2 className='text-icons text-sm mb-8'>SECURITY</h2>
                                    <h3 className='text-primary text-base my-2 font-medium'>Update Password</h3>
                                    <p className='text-sm text-secondaryText mb-8'>Change your old password to a new one</p>
                                    <form className="bg-white py-6 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                                        <div className="mb-7">
                                            <label className="block text-primary text-sm font-medium mb-1" for="first_name">
                                                Old passowrd
                                            </label>
                                            <input
                                                className="appearance-none border border-stroke rounded-lg w-full p-4 text-base text-primary focus:outline-none"
                                                id="first_name" type="password" placeholder="Enter password" />
                                        </div>
                                        <div className="mb-7">
                                            <label className="block text-primary text-sm font-medium mb-1" for="last_name">
                                                New password
                                            </label>
                                            <input
                                                className="appearance-none border border-stroke rounded-lg w-full p-4 text-base text-primary focus:outline-none"
                                                id="last_name" type="password" placeholder="Enter password" />
                                        </div>
                                    </form>
                                    <button className='my-4 bg-brand py-4 px-6 rounded-lg text-white text-base'>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default userProfile