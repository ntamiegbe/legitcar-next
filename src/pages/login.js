import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { useRouter } from 'next/router';

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const router = useRouter()

    function handleEmailChange(event) {
        setEmail(event.target.value);
        setIsButtonDisabled(event.target.value.trim() === "" || password.trim() === "");
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        setIsButtonDisabled(email.trim() === "" || event.target.value.trim() === "");
    }

    function handleSubmit(event) {
        event.preventDefault();
        // handle sign-in logic here
        router.push('/maintainance')
    }

    return (
        <>
            <Head>
                <title>LegitCar | Vehicles</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="h-screen bg-white">
                <nav className='w-full'>
                    <div className="flex justify-between items-center px-5 py-3">
                        <div className="flex items-center justify-center flex-row">
                            <svg width="33" height="30" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.4645 39.7694C29.5565 39.6618 32.5917 36.1115 36.24 31.8697C39.8731 27.6432 42.8623 24.139 42.8623 24.1083C42.8623 24.0775 42.7703 23.9239 42.6477 23.7702C42.4944 23.5857 42.4024 23.5089 42.3258 23.5243C42.2644 23.5396 39.7658 24.9228 36.7766 26.6135C33.7874 28.3041 31.3194 29.6873 31.2734 29.6873C31.2274 29.6873 30.8288 29.1647 30.3689 28.5346C28.8973 26.5059 26.8739 23.8931 25.1723 21.8337C18.4581 13.7034 11.4373 7.09469 4.63112 2.46859C3.15951 1.4696 0.829465 0.0249023 0.660843 0.0249023C0.630184 0.0249023 0.492221 0.163225 0.369587 0.347654L0.139648 0.670406L0.415575 0.916313C2.51568 2.88356 3.28215 3.62127 4.49316 4.82006C13.1235 13.4729 19.8224 22.6482 26.1074 34.4824C26.9965 36.1423 28.8054 39.7233 28.8207 39.8462C28.836 39.9231 28.8973 39.9538 29.0813 39.9538C29.3112 39.9692 29.3419 39.9538 29.4798 39.7694H29.4645Z" fill="#8E44AD" />
                            </svg>
                            <p className='font-bold text-xl text-[#8E44AD]'>e</p>
                            <p className='font-bold text-xl text-[#8E44AD]'>g</p>
                            <p className='font-bold text-xl text-[#8E44AD]'>i</p>
                            <p className='font-bold text-xl text-[#8E44AD]'>t</p>
                            <p className='font-bold text-xl text-[#8E44AD]'>C</p>
                            <p className='font-bold text-xl text-[#8E44AD]'>a</p>
                            <p className='font-bold text-xl text-[#8E44AD]'>r</p>
                        </div>
                        <div className="flex items-center space-x-6">
                            <p className='text-brand text-base font-medium md:hidden'>Create account</p>
                            <p className='text-secondaryText text-base font-medium hidden md:inline-flex'>No LegitCar account? <span className='text-brand ml-1'> Create one</span></p>
                        </div>
                    </div>
                </nav>
                <div className="m-10 max-w-3xl md:mx-auto">
                    <h1 className='text-3xl text-primary font-medium'>Sign in</h1>
                    <div className="flex justify-center items-center">
                        <div className="flex items-center space-x-5 mt-8 mx-20">
                            <button className='bg-white py-4 px-11 border border-stroke rounded-lg text-gray text-base font-medium'>
                                <div className="flex items-center space-x-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3744_84874)">
                                            <path d="M23.7663 12.2763C23.7663 11.4605 23.7001 10.6404 23.559 9.83789H12.2402V14.4589H18.722C18.453 15.9492 17.5888 17.2676 16.3233 18.1054V21.1037H20.1903C22.4611 19.0137 23.7663 15.9272 23.7663 12.2763Z" fill="#4285F4" />
                                            <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                            <path d="M5.50277 14.3002C5.00011 12.8099 5.00011 11.196 5.50277 9.70569V6.61475H1.51674C-0.185266 10.0055 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3002Z" fill="#FBBC04" />
                                            <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3744_84874">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>Google</p>
                                </div>
                            </button>
                            <button className='bg-white py-4 px-11 border border-stroke rounded-lg text-gray text-base font-medium'>
                                <div className="flex items-center space-x-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3744_84881)">
                                            <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3744_84881">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>Facebook</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <p className='mt-8 text-secondary font-medium text-sm'>Or use your email to sign in</p>
                    <form className="bg-white py-6" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block text-primary text-sm font-medium mb-1" htmlFor="email">
                                Email address
                            </label>
                            <input
                                className="appearance-none border border-stroke rounded-lg w-full p-4 text-base text-primary focus:outline-none"
                                id="email"
                                type="email"
                                placeholder="test@test.com"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-primary text-sm font-medium mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="appearance-none border border-stroke rounded-lg w-full p-4 text-base text-primary focus:outline-none"
                                id="password"
                                type="password"
                                placeholder="Minimum of 8 characters"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <p className='my-2 text-secondaryText text-sm'>Your password must be a minimum of 8 characters</p>
                        </div>
                        <button
                            className={`my-4 py-4 px-6 rounded-lg w-full text-base ${isButtonDisabled ? 'bg-grayBg text-icons cursor-not-allowed' : 'bg-brand text-white'}`}
                            type="submit"
                            disabled={isButtonDisabled}
                        >
                            Sign in
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default login