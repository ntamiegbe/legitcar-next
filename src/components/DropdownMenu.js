import { BiChevronDown, BiLogOut } from 'react-icons/bi'
import { RiUserLine } from 'react-icons/ri'
import { TbSteeringWheel } from 'react-icons/tb'
import Logo from '../assets/person.png'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Link from 'next/link'


const DropdownMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="z-50">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex items-center w-full space-x-3 text-sm font-medium text-gray-700 bg-white rounded-md focus:outline-none">
                        <Image src={Logo} alt='profile image' className='object-contain rounded-full w-10 h-10' />
                        <BiChevronDown className='hidden md:inline-flex h-5 w-5 text-icons' />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow focus:outline-none">
                        <div className="px-2 py-4">
                            <Menu.Item>
                                <Link href="/userProfile"
                                    className="w-full flex items-center space-x-2 px-4 py-2 text-secondaryText hover:bg-overlay hover:text-brand hover:font-medium rounded-lg"
                                >
                                    <RiUserLine />
                                    <p className="text-base">Profile</p>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href="/vehicles"
                                    className="w-full flex items-center space-x-2 px-4 py-2 text-secondaryText hover:bg-overlay hover:text-brand hover:font-medium rounded-lg"
                                >
                                    <TbSteeringWheel />
                                    <p className="text-base">My vehicles</p>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href="/"
                                    className="w-full flex items-center space-x-2 px-4 py-2 text-secondaryText hover:bg-overlay hover:text-brand hover:font-medium rounded-lg"
                                >
                                    <BiLogOut />
                                    <p className="text-base">Log out</p>
                                </Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
};

export default DropdownMenu;


