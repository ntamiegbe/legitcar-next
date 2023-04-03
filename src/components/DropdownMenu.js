import { useState } from "react";
import { BiChevronDown, BiLogOut } from 'react-icons/bi'
import { RiUserLine } from 'react-icons/ri'
import { TbSteeringWheel } from 'react-icons/tb'
import Logo from '../assets/person.png'
import Image from 'next/image'

const DropdownMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative">
            <button className="flex items-center space-x-3 px-14 py-2 text-sm font-medium text-gray-700 bg-white rounded-md focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Image src={Logo} alt='profile image' className='object-contain rounded-full w-10 h-10' />
                <BiChevronDown className='hidden md:inline-flex h-5 w-5 text-icons' />
            </button>

            {isMenuOpen && (
                <div className="absolute z-10 mt-5 origin-top-right rounded-md shadow-lg bg-white w-auto">
                    <div className="py-5 rounded-md shadow-xs">
                        <a
                            href="/userProfile"
                            className="flex items-center space-x-2 px-4 py-2 text-secondaryText hover:bg-overlay hover:text-brand hover:font-medium rounded-lg mx-2"
                        >
                            <RiUserLine />
                            <p className="text-base">Profile</p>
                        </a>
                        <a
                            href="/vehicles"
                            className="flex items-center space-x-2 px-4 py-2 text-secondaryText hover:bg-overlay hover:text-brand hover:font-medium rounded-lg mx-2"
                        >
                            <TbSteeringWheel />
                            <p className="text-base">My vehicles</p>
                        </a>
                        <a
                            href="/"
                            className="flex items-center space-x-2 px-4 py-2 text-secondaryText hover:bg-overlay hover:text-brand hover:font-medium rounded-lg mx-2"
                        >
                            <BiLogOut />
                            <p className="text-base">Log out</p>
                        </a>        
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;