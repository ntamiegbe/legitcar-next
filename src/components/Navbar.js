import { BiChevronDown } from 'react-icons/bi'
import Logo from '../assets/person.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='w-full bg-white border-b border-dashboardBorders'>
            <div className="flex justify-between items-center p-5">
                <h2 className='text-primary text-lg font-medium'>Profile</h2>
                <div className="flex items-center space-x-6">
                    <svg width="19" height="15" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4417 17.5C10.2952 17.7525 10.0849 17.9622 9.83185 18.1079C9.57884 18.2536 9.29198 18.3303 9 18.3303C8.70802 18.3303 8.42116 18.2536 8.16814 18.1079C7.91513 17.9622 7.70484 17.7525 7.55833 17.5M14 6.66663C14 5.34054 13.4732 4.06877 12.5355 3.13109C11.5979 2.19341 10.3261 1.66663 9 1.66663C7.67392 1.66663 6.40215 2.19341 5.46447 3.13109C4.52678 4.06877 4 5.34054 4 6.66663C4 12.5 1.5 14.1666 1.5 14.1666H16.5C16.5 14.1666 14 12.5 14 6.66663Z" stroke="#8593AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="w-10 h-10">
                        <Image src={Logo} alt='profile image' className='object-contain rounded-full'/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar