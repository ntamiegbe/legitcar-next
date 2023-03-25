import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='hidden md:inline-flex min-h-screen bg-white border-r border-dashboardBorders z-50'>
            <div className="flex flex-col px-14 py-20 relative">
                <div className="flex items-center justify-center flex-row absolute top-4 mb-4">
                    <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.4645 39.7694C29.5565 39.6618 32.5917 36.1115 36.24 31.8697C39.8731 27.6432 42.8623 24.139 42.8623 24.1083C42.8623 24.0775 42.7703 23.9239 42.6477 23.7702C42.4944 23.5857 42.4024 23.5089 42.3258 23.5243C42.2644 23.5396 39.7658 24.9228 36.7766 26.6135C33.7874 28.3041 31.3194 29.6873 31.2734 29.6873C31.2274 29.6873 30.8288 29.1647 30.3689 28.5346C28.8973 26.5059 26.8739 23.8931 25.1723 21.8337C18.4581 13.7034 11.4373 7.09469 4.63112 2.46859C3.15951 1.4696 0.829465 0.0249023 0.660843 0.0249023C0.630184 0.0249023 0.492221 0.163225 0.369587 0.347654L0.139648 0.670406L0.415575 0.916313C2.51568 2.88356 3.28215 3.62127 4.49316 4.82006C13.1235 13.4729 19.8224 22.6482 26.1074 34.4824C26.9965 36.1423 28.8054 39.7233 28.8207 39.8462C28.836 39.9231 28.8973 39.9538 29.0813 39.9538C29.3112 39.9692 29.3419 39.9538 29.4798 39.7694H29.4645Z" fill="#8E44AD" />
                    </svg>
                    <p className='font-bold text-2xl text-[#8E44AD]'>e</p>
                    <p className='font-bold text-2xl text-[#8E44AD]'>g</p>
                    <p className='font-bold text-2xl text-[#8E44AD]'>i</p>
                    <p className='font-bold text-2xl text-[#8E44AD]'>t</p>
                    <p className='font-bold text-2xl text-[#8E44AD]'>C</p>
                    <p className='font-bold text-2xl text-[#8E44AD]'>a</p>
                    <p className='font-bold text-2xl text-[#8E44AD]'>r</p>
                </div>
                <Link href="/" className="flex items-center justify-start space-x-3 cursor-pointer mb-4 mt-10">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 16.4714C8.84906 16.4714 7.91675 15.5391 7.91675 14.388C7.91675 13.237 8.84906 12.3047 10 12.3047C11.151 12.3047 12.0833 13.237 12.0833 14.388C12.0833 15.5391 11.151 16.4714 10 16.4714ZM10 13.138C9.31247 13.138 8.75003 13.7006 8.75003 14.388C8.75003 15.0755 9.31247 15.638 10 15.638C10.6876 15.638 11.25 15.0755 11.25 14.388C11.25 13.7006 10.6876 13.138 10 13.138Z" fill="#8593AF" />
                        <path d="M15.3763 8.42578L15.9655 9.01508L11.4726 13.508L10.8833 12.9189L15.3763 8.42578Z" fill="#8593AF" />
                        <path d="M20 14.8047H15.4167V13.5547C15.4167 12.7786 15.2553 12.0235 14.9374 11.3203L15.6979 10.9766C16.0677 11.7891 16.25 12.6537 16.25 13.5547V13.9714H19.1667V13.5547C19.1667 8.50266 15.052 4.38797 10 4.38797C4.94797 4.38797 0.833282 8.50266 0.833282 13.5547V13.9714H3.75V13.5547C3.75 10.1068 6.55212 7.30469 10 7.30469C11.2291 7.30469 12.4167 7.65884 13.4375 8.33588L12.9791 9.03381C12.0938 8.45047 11.0677 8.14316 10 8.14316C7.01569 8.14316 4.58328 10.5756 4.58328 13.5599V14.8099H0V13.5599C0 8.03909 4.48441 3.55469 10 3.55469C15.5156 3.55469 20 8.03909 20 13.5547V14.8047Z" fill="#8593AF" />
                    </svg>
                    <p className='text-secondaryText text-base font-normal'>Dashboard</p>
                </Link>
                <Link href="/vehicle" className="flex items-center justify-start space-x-3 cursor-pointer my-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4787_442)">
                            <path d="M19.7812 11.6875L18.8125 11.375C18.75 11.1875 18.6562 11 18.5625 10.8125L19.0312 9.90625C19.0938 9.78125 19.0625 9.65625 18.9688 9.5625L18.0625 8.65625C17.9688 8.5625 17.8125 8.53125 17.7188 8.59375L17.4062 8.75L17.4375 8.25C17.4688 7.9375 17.3438 7.625 17.125 7.375L17.6875 7.3125C18.3125 7.25 18.8125 6.6875 18.75 6C18.6875 5.4375 18.1875 4.96875 17.5938 4.96875L16.5312 4.9375C16.1562 4.9375 15.8125 5.09375 15.5938 5.40625C15.3125 4.71875 14.9375 4.09375 14.5 3.375C14.125 2.78125 13.4688 2.375 12.75 2.375H5.96875C5.25 2.375 4.59375 2.75 4.21875 3.375C3.78125 4.09375 3.4375 4.6875 3.15625 5.375C2.90625 5.0625 2.59375 4.9375 2.25 4.9375L1.1875 4.96875C0.53125 5 0 5.53125 0 6.125C0 6.71875 0.46875 7.21875 1.09375 7.3125L1.625 7.375C1.40625 7.59375 1.28125 7.90625 1.3125 8.25L1.5625 12.3438C1.59375 12.7188 1.8125 13.0313 2.125 13.1875V13.9375C2.125 14.4688 2.5625 14.875 3.09375 14.875H4.875C5.40625 14.875 5.8125 14.4375 5.8125 13.9375V13.3125H10.0938C10.125 13.4063 10.1875 13.5 10.2812 13.5313L11.25 13.8438C11.3125 14.0313 11.4062 14.2188 11.5 14.4063L11 15.3125C10.9375 15.4375 10.9688 15.5625 11.0625 15.6563L11.9688 16.5625C12.0625 16.6563 12.2188 16.6875 12.3125 16.625L13.2188 16.1563C13.4062 16.25 13.5937 16.3438 13.7812 16.4063L14.0938 17.375C14.125 17.5 14.25 17.5938 14.375 17.5938H15.6562C15.7812 17.5938 15.9062 17.5 15.9375 17.375L16.25 16.4063C16.4375 16.3438 16.625 16.25 16.8125 16.1563L17.7188 16.625C17.8438 16.6875 17.9688 16.6563 18.0625 16.5625L18.9688 15.6563C19.0625 15.5625 19.0938 15.4063 19.0312 15.3125L18.5625 14.4063C18.6562 14.2188 18.75 14.0313 18.8125 13.8438L19.7812 13.5313C19.9062 13.5 20 13.375 20 13.25V11.9688C20 11.8438 19.9062 11.7188 19.7812 11.6875ZM11.2188 11.375L11.0938 11.4063H7.625C7.46875 11.4063 7.3125 11.5313 7.3125 11.7188C7.3125 11.9063 7.4375 12.0313 7.625 12.0313H10.0312V12.7188C4.625 12.7188 8 12.7188 2.59375 12.7188C2.375 12.7188 2.15625 12.5313 2.15625 12.3125L2.03125 10C2.1875 10.0313 4 11.0938 5.15625 9.5L5.34375 9.6875C5.78125 10.2188 6.375 10.5313 7.03125 10.5313H11.3438L11.4688 10.7813C11.375 10.9688 11.2813 11.1875 11.2188 11.375ZM1.90625 8.1875C1.90625 8.15625 1.90625 8.09375 1.90625 8.0625C3.1875 8.125 4.09375 8.59375 4.6875 9.09375C3.8125 10.4375 2.25 9.375 1.9375 9.34375L1.90625 8.1875ZM11.0312 9.53125C10.9375 9.625 10.9062 9.78125 10.9688 9.875L11 9.9375H7C6.53125 9.9375 6.09375 9.71875 5.78125 9.34375C5 8.34375 3.875 7.6875 2.46875 7.5C2.6875 7.34375 2.875 7.125 3.0625 6.90625H15.75C15.9688 7.1875 16.25 7.4375 16.5625 7.65625C16.5938 7.6875 16.9062 7.8125 16.875 8.1875L16.8125 9.03125C16.625 8.9375 16.4688 8.875 16.2812 8.8125L15.9688 7.84375C15.9375 7.71875 15.8125 7.625 15.6875 7.625H14.375C14.25 7.625 14.125 7.71875 14.0938 7.84375L13.7812 8.8125C13.5937 8.875 13.4062 8.96875 13.2188 9.0625L12.3125 8.59375C12.1875 8.53125 12.0625 8.5625 11.9688 8.65625L11.0312 9.53125ZM16.5312 5.5625L17.5938 5.59375C17.9062 5.59375 18.125 5.8125 18.1562 6.09375C18.1875 6.40625 17.9375 6.6875 17.625 6.71875L16.4688 6.84375C16.3125 6.6875 16.1562 6.5 16.0312 6.3125L16 6.09375C15.9688 5.78125 16.2812 5.53125 16.5312 5.5625ZM4.75 3.71875C5 3.28125 5.46875 3.03125 5.96875 3.03125H12.75C13.25 3.03125 13.7188 3.3125 13.9688 3.71875C14.4688 4.53125 14.8125 5.15625 15.125 5.90625C15.1875 6.03125 15.25 6.1875 15.3125 6.3125H3.40625C3.46875 6.1875 3.53125 6.0625 3.59375 5.90625C3.90625 5.15625 4.25 4.53125 4.75 3.71875ZM0.625 6.125C0.625 5.84375 0.875 5.5625 1.21875 5.5625L2.28125 5.53125C2.59375 5.53125 2.84375 5.78125 2.8125 6.0625L2.75 6.25C2.625 6.46875 2.46875 6.6875 2.28125 6.84375L1.15625 6.71875C0.84375 6.6875 0.625 6.4375 0.625 6.125ZM5.15625 13.9375C5.15625 14.125 5 14.2813 4.8125 14.2813H3.0625C2.875 14.2813 2.71875 14.125 2.71875 13.9375V13.3125H5.1875V13.9375H5.15625ZM19.375 13.0313L18.4688 13.3125C18.375 13.3438 18.2812 13.4375 18.2812 13.5313C18.2188 13.7813 18.0938 14.0313 17.9688 14.2813C17.9062 14.375 17.9062 14.4688 17.9688 14.5625L18.4062 15.4063L17.8125 16L16.9688 15.5625C16.875 15.5 16.7812 15.5313 16.6875 15.5625C16.4375 15.6875 16.1875 15.8125 15.9375 15.875C15.8438 15.9063 15.75 15.9688 15.7188 16.0625L15.4375 16.9688H14.5938L14.3125 16.0625C14.2812 15.9688 14.1875 15.875 14.0938 15.875C13.8437 15.8125 13.5938 15.6875 13.3438 15.5625C13.25 15.5 13.1562 15.5 13.0625 15.5625L12.2188 16L11.625 15.4063L12.0625 14.5625C12.125 14.4688 12.0938 14.375 12.0625 14.2813C11.9375 14.0313 11.8125 13.7813 11.75 13.5313C11.7187 13.4375 11.6562 13.3438 11.5625 13.3125L10.6562 13.0313V13V12.1875L11.5625 11.9063C11.6562 11.875 11.75 11.7813 11.75 11.6875C11.8125 11.4375 11.9375 11.1875 12.0625 10.9375C12.125 10.8438 12.125 10.75 12.0625 10.6563L11.625 9.8125L12.2188 9.21875L13.0625 9.65625C13.1562 9.71875 13.25 9.6875 13.3438 9.65625C13.5938 9.53125 13.8437 9.40625 14.0938 9.34375C14.1875 9.3125 14.2812 9.25 14.3125 9.15625L14.5938 8.25H15.4375L15.7188 9.15625C15.75 9.25 15.8438 9.34375 15.9375 9.34375C16.1875 9.40625 16.4375 9.53125 16.6875 9.65625C16.7812 9.71875 16.875 9.71875 16.9688 9.65625L17.8125 9.21875L18.4062 9.8125L17.9688 10.6563C17.9062 10.75 17.9375 10.8438 17.9688 10.9375C18.0938 11.1875 18.2188 11.4375 18.2812 11.6875C18.3125 11.7813 18.375 11.875 18.4688 11.9063L19.375 12.1875V13.0313Z" fill="#8593AF" />
                            <path d="M14.7812 10.5938C13.6875 10.5938 12.7812 11.5 12.7812 12.5937C12.7812 13.6875 13.6875 14.5938 14.7812 14.5938C15.875 14.5938 16.7812 13.6875 16.7812 12.5937C16.7812 11.5 15.9062 10.5938 14.7812 10.5938ZM14.7812 14C14 14 13.375 13.375 13.375 12.5937C13.375 11.8125 14 11.1875 14.7812 11.1875C15.5625 11.1875 16.1875 11.8125 16.1875 12.5937C16.1875 13.375 15.5625 14 14.7812 14Z" fill="#8593AF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4787_442">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='text-secondaryText text-base font-normal'>Maintainance</p>
                </Link>
                <Link href="/vehicle" className="flex items-center justify-start space-x-3 cursor-pointer my-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4826_498)">
                            <path d="M21.375 23.25H20.625C20.0048 23.25 19.5 22.7452 19.5 22.125V20.625C19.5 20.418 19.668 20.25 19.875 20.25C20.082 20.25 20.25 20.418 20.25 20.625V22.125C20.25 22.332 20.418 22.5 20.625 22.5H21.375C21.582 22.5 21.75 22.332 21.75 22.125V20.625C21.75 20.418 21.918 20.25 22.125 20.25C22.332 20.25 22.5 20.418 22.5 20.625V22.125C22.5 22.7452 21.9952 23.25 21.375 23.25Z" fill="#8593AF" />
                            <path d="M22.875 23.25H12.375C12.168 23.25 12 23.082 12 22.875C12 22.668 12.168 22.5 12.375 22.5H22.875C23.082 22.5 23.25 22.668 23.25 22.875C23.25 23.082 23.082 23.25 22.875 23.25Z" fill="#8593AF" />
                            <path d="M22.875 21H12.375C12.168 21 12 20.832 12 20.625C12 20.418 12.168 20.25 12.375 20.25H22.875C23.082 20.25 23.25 20.418 23.25 20.625C23.25 20.832 23.082 21 22.875 21Z" fill="#8593AF" />
                            <path d="M22.8751 18.891C22.6681 18.891 22.5001 18.723 22.5001 18.516V17.625C22.5001 16.4032 21.4891 15.8115 15.7441 15.7552C15.5371 15.753 15.3706 15.5835 15.3728 15.3765C15.3743 15.1695 15.5288 15.0142 15.7516 15.0052C20.9371 15.0562 23.2501 15.4462 23.2501 17.625V18.516C23.2501 18.723 23.0821 18.891 22.8751 18.891Z" fill="#8593AF" />
                            <path d="M22.875 19.5H19.875C19.668 19.5 19.5 19.332 19.5 19.125V18.375C19.5 17.7548 20.0048 17.25 20.625 17.25H22.875C23.082 17.25 23.25 17.418 23.25 17.625V19.125C23.25 19.332 23.082 19.5 22.875 19.5ZM20.25 18.75H22.5V18H20.625C20.418 18 20.25 18.168 20.25 18.375V18.75Z" fill="#8593AF" />
                            <path d="M18.375 19.5C18.168 19.5 18 19.332 18 19.125C18 18.5048 17.4952 18 16.875 18H14.25C14.043 18 13.875 17.832 13.875 17.625C13.875 17.418 14.043 17.25 14.25 17.25H16.875C17.9085 17.25 18.75 18.0915 18.75 19.125C18.75 19.332 18.582 19.5 18.375 19.5Z" fill="#8593AF" />
                            <path d="M21.4268 16.2795C21.2701 16.2795 21.1231 16.1805 21.0706 16.023L19.7588 12.081C19.6688 11.8162 19.3531 11.5515 19.0846 11.517C18.4486 11.4367 17.4158 11.3302 16.1101 11.2792C15.9031 11.271 15.7418 11.097 15.7501 10.89C15.7583 10.683 15.9451 10.521 16.1393 10.53C17.4713 10.5817 18.5273 10.6905 19.1791 10.773C19.7318 10.8435 20.2868 11.3032 20.4698 11.8417L21.7823 15.786C21.8476 15.9825 21.7411 16.1947 21.5446 16.26C21.5063 16.2735 21.4666 16.2795 21.4268 16.2795Z" fill="#8593AF" />
                            <path d="M14.5222 6.0195C14.436 6.0195 14.3497 5.9895 14.2785 5.9295C14.121 5.7945 14.1022 5.55825 14.2365 5.40075L15.219 4.251C15.3495 4.098 15.4125 3.9045 15.3975 3.705C15.3817 3.5055 15.2895 3.324 15.1372 3.19425C14.985 3.063 14.7885 3.00075 14.592 3.01575C14.3917 3.0315 14.2102 3.12375 14.0805 3.276L13.41 4.0605C13.275 4.21725 13.038 4.236 12.8812 4.10175C12.7245 3.9675 12.705 3.7305 12.84 3.573L13.5105 2.78925C13.77 2.48475 14.1337 2.2995 14.5342 2.26875C14.9355 2.2395 15.3217 2.364 15.6255 2.625C15.9292 2.8845 16.1145 3.24825 16.146 3.64725C16.1775 4.04625 16.0507 4.434 15.7897 4.73925L14.808 5.889C14.7337 5.97525 14.628 6.0195 14.5222 6.0195Z" fill="#8593AF" />
                            <path d="M11.625 18.75H7.87427C7.66727 18.75 7.49927 18.582 7.49927 18.375C7.49927 18.168 7.66727 18 7.87427 18H11.625C12.2453 18 12.75 17.4953 12.75 16.875V15.945C12.75 15.738 12.918 15.57 13.125 15.57C13.332 15.57 13.5 15.738 13.5 15.945V16.875C13.5 17.9085 12.6585 18.75 11.625 18.75Z" fill="#8593AF" />
                            <path d="M3.375 11.625C3.168 11.625 3 11.457 3 11.25V2.625C3 1.5915 3.8415 0.75 4.875 0.75H11.625C12.6585 0.75 13.5 1.5915 13.5 2.625V7.5C13.5 7.707 13.332 7.875 13.125 7.875C12.918 7.875 12.75 7.707 12.75 7.5V2.625C12.75 2.00475 12.2452 1.5 11.625 1.5H4.875C4.25475 1.5 3.75 2.00475 3.75 2.625V11.25C3.75 11.457 3.582 11.625 3.375 11.625Z" fill="#8593AF" />
                            <path d="M8.625 23.25C8.418 23.25 8.25 23.082 8.25 22.875V21.3285C8.25 21.1402 8.3895 20.9812 8.57625 20.9565C9.5385 20.8297 10.2712 20.4127 10.8825 19.6432C11.0115 19.4812 11.247 19.4527 11.409 19.5825C11.571 19.7107 11.5987 19.947 11.4697 20.109C10.8007 20.9527 10.0095 21.447 9 21.6465V22.875C9 23.082 8.832 23.25 8.625 23.25Z" fill="#8593AF" />
                            <path d="M13.3576 10.215C13.0021 10.215 12.6571 10.0868 12.3864 9.85425C12.0819 9.594 11.8966 9.231 11.8636 8.835C11.8314 8.436 11.9566 8.04825 12.2184 7.743L12.3481 7.58475C12.6084 7.275 12.9706 7.08825 13.3704 7.05525C13.7724 7.02525 14.1601 7.149 14.4646 7.40925C14.7691 7.67025 14.9529 8.03475 14.9836 8.43525C15.0136 8.83575 14.8861 9.2235 14.6251 9.528L14.5044 9.67725C14.2209 10.0208 13.8039 10.215 13.3576 10.215ZM13.4934 7.80075C13.4724 7.80075 13.4514 7.8015 13.4311 7.803C13.2324 7.81875 13.0524 7.91175 12.9249 8.06325L12.7929 8.2245C12.6579 8.382 12.5949 8.57475 12.6114 8.77275C12.6279 8.9715 12.7209 9.153 12.8746 9.28425C13.1806 9.546 13.6764 9.501 13.9246 9.2025L14.0499 9.048C14.3274 8.724 14.2914 8.2485 13.9771 7.9785C13.8406 7.863 13.6711 7.80075 13.4934 7.80075Z" fill="#8593AF" />
                            <path d="M13.1774 13.23C12.8167 13.23 12.4807 13.1048 12.2062 12.8693C11.9024 12.609 11.7164 12.246 11.6842 11.85C11.6519 11.451 11.7772 11.0633 12.0389 10.758L12.6097 10.0973C12.8617 9.79726 13.2217 9.61276 13.6199 9.57976C14.0197 9.55126 14.4119 9.67351 14.7187 9.93601C15.0239 10.1933 15.2099 10.5555 15.2429 10.9545C15.2752 11.355 15.1499 11.7435 14.8889 12.0488L14.3174 12.7095C14.0242 13.0418 13.6094 13.23 13.1774 13.23ZM13.7414 10.3253C13.7212 10.3253 13.7002 10.326 13.6792 10.3275C13.4819 10.3433 13.3049 10.4348 13.1789 10.5833L12.6059 11.247C12.4769 11.3978 12.4147 11.5905 12.4304 11.7878C12.4469 11.9865 12.5399 12.168 12.6937 12.2993C12.9974 12.5603 13.4812 12.5205 13.7512 12.2168L14.3189 11.5598C14.4479 11.409 14.5102 11.2155 14.4937 11.0153C14.4779 10.8158 14.3849 10.6365 14.2334 10.509L14.2312 10.5068C14.0924 10.389 13.9207 10.3253 13.7414 10.3253Z" fill="#8593AF" />
                            <path d="M13.1399 16.32C12.7844 16.32 12.4394 16.1925 12.1686 15.96C11.5379 15.4193 11.4629 14.469 11.9999 13.8413L12.5729 13.1858C12.8316 12.8843 13.1954 12.6983 13.5944 12.666C13.9926 12.6368 14.3842 12.7598 14.6887 13.0208C14.9932 13.2818 15.1777 13.6455 15.2077 14.0468C15.2377 14.4465 15.1102 14.8343 14.8492 15.1395L14.2769 15.795C14.0031 16.125 13.5861 16.32 13.1399 16.32ZM13.7174 13.4108C13.6971 13.4108 13.6761 13.4115 13.6551 13.413C13.4541 13.4288 13.2711 13.5225 13.1399 13.6763L12.5669 14.3317C12.3006 14.643 12.3396 15.1185 12.6561 15.3907C12.9606 15.6525 13.4586 15.6075 13.7054 15.309L14.2822 14.649C14.4104 14.499 14.4749 14.3048 14.4599 14.1038C14.4449 13.9035 14.3527 13.7213 14.2004 13.5908C14.0647 13.473 13.8952 13.4108 13.7174 13.4108Z" fill="#8593AF" />
                            <path d="M1.125 23.25C0.918 23.25 0.75 23.082 0.75 22.875V7.15275C0.75 6.94575 0.918 6.77775 1.125 6.77775L1.2315 6.7725C1.584 6.75 2.40675 6.696 3.027 7.27725C3.507 7.7265 3.75 8.4495 3.75 9.426V12.7807C4.37475 13.2442 6.4515 15.0217 6.71325 18.3465C6.729 18.5527 6.57525 18.7335 6.36825 18.75C6.162 18.7672 5.98125 18.612 5.96475 18.4057C5.69325 14.9542 3.19725 13.308 3.17175 13.2922C3.06525 13.2217 3 13.1032 3 12.9757V9.426C3 8.6655 2.8365 8.127 2.514 7.82475C2.2125 7.54125 1.80375 7.5045 1.5 7.50975V22.875C1.5 23.082 1.332 23.25 1.125 23.25Z" fill="#8593AF" />
                            <path d="M8.25006 12.75C8.14356 12.75 8.04231 12.705 7.97106 12.6255C7.86156 12.5033 5.27856 9.60825 5.27856 7.37175C5.27856 5.7885 6.61131 4.5 8.25006 4.5C9.88881 4.5 11.2216 5.7885 11.2216 7.37175C11.2216 9.60825 8.63856 12.5033 8.52906 12.6255C8.45781 12.705 8.35656 12.75 8.25006 12.75ZM8.25006 5.25C7.02531 5.25 6.02856 6.20175 6.02856 7.37175C6.02856 8.9235 7.59756 10.9995 8.25006 11.7952C8.90256 10.9995 10.4716 8.9235 10.4716 7.37175C10.4716 6.20175 9.47481 5.25 8.25006 5.25Z" fill="#8593AF" />
                            <path d="M8.25 8.58301C7.62975 8.58301 7.125 8.07826 7.125 7.45801C7.125 6.83776 7.62975 6.33301 8.25 6.33301C8.87025 6.33301 9.375 6.83776 9.375 7.45801C9.375 8.07826 8.87025 8.58301 8.25 8.58301ZM8.25 7.08301C8.043 7.08301 7.875 7.25101 7.875 7.45801C7.875 7.66501 8.043 7.83301 8.25 7.83301C8.457 7.83301 8.625 7.66501 8.625 7.45801C8.625 7.25101 8.457 7.08301 8.25 7.08301Z" fill="#8593AF" />
                            <path d="M17.625 9.75H15.75C15.543 9.75 15.375 9.582 15.375 9.375C15.375 9.168 15.543 9 15.75 9H17.625C17.832 9 18 9.168 18 9.375C18 9.582 17.832 9.75 17.625 9.75Z" fill="#8593AF" />
                            <path d="M9.37502 3H7.12427C6.91727 3 6.74927 2.832 6.74927 2.625C6.74927 2.418 6.91727 2.25 7.12427 2.25H9.37502C9.58202 2.25 9.75002 2.418 9.75002 2.625C9.75002 2.832 9.58202 3 9.37502 3Z" fill="#8593AF" />
                            <path d="M8.62502 17.25H7.87427C7.66727 17.25 7.49927 17.082 7.49927 16.875C7.49927 16.668 7.66727 16.5 7.87427 16.5H8.62502C8.83202 16.5 9.00002 16.668 9.00002 16.875C9.00002 17.082 8.83202 17.25 8.62502 17.25Z" fill="#8593AF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4826_498">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='text-secondaryText text-base font-normal'>Tracking</p>
                </Link>
                <Link href="/vehic" className="flex items-center justify-start space-x-3 cursor-pointer my-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.775 14.6344C20.5837 14.5224 20.3389 14.5864 20.2276 14.7772L15.641 22.6C15.3097 23.1733 14.5747 23.371 14.0189 23.0501L13.1255 22.4711C12.9398 22.3507 12.6921 22.4035 12.5721 22.5892C12.4516 22.7744 12.5048 23.0225 12.6901 23.1425L13.6012 23.7323C13.9153 23.914 14.259 24 14.5983 24C15.2901 24 15.9631 23.6419 16.3324 23.0025L20.9173 15.1817C21.029 14.9913 20.9655 14.746 20.775 14.6344Z" fill="#8593AF" />
                        <path d="M21.9853 0H15.5834C14.3454 0 13.4232 0.394103 12.4997 1.31758C12.3433 1.47405 12.3433 1.72693 12.4997 1.88335C12.6562 2.03982 12.909 2.03982 13.0655 1.88335C13.8449 1.10391 14.5511 0.800209 15.5834 0.800209H21.9853C22.6471 0.800209 23.1857 1.33878 23.1857 2.00057V8.40253C23.1857 9.43526 22.882 10.141 22.1022 10.9205L10.2194 22.8201C9.76563 23.273 8.97499 23.2734 8.52209 22.8201L1.16584 15.4638C0.938991 15.237 0.814126 14.9357 0.814126 14.6148C0.814126 14.2943 0.938944 13.993 1.16542 13.7665L11.9055 3.0417C12.0707 3.08371 12.2364 3.12572 12.408 3.17172C14.0357 3.60783 15.3201 4.05839 16.2776 4.46051C16.0891 4.80941 15.9835 5.20033 15.9835 5.60165C15.9835 6.92566 17.0602 8.00238 18.3842 8.00238C19.7082 8.00238 20.7849 6.92566 20.7849 5.60165C20.7849 4.27765 19.7082 3.20093 18.3842 3.20093C18.163 3.20093 17.9841 3.38019 17.9841 3.60104C17.9841 3.82188 18.163 4.00114 18.3842 4.00114C19.2669 4.00114 19.9847 4.71897 19.9847 5.60161C19.9847 6.48429 19.2669 7.20207 18.3842 7.20207C17.5016 7.20207 16.7838 6.48425 16.7838 5.60161C16.7838 5.31352 16.8626 5.03223 17.0078 4.78738C17.7009 5.11907 18.1342 5.39876 18.3055 5.57722C18.2322 5.59804 18.119 5.62125 17.9482 5.63602C17.7281 5.65562 17.5653 5.8497 17.5849 6.06975C17.6033 6.27779 17.7777 6.43506 17.983 6.43506C17.9946 6.43506 18.0066 6.43426 18.0186 6.43347C18.2647 6.41147 19.0133 6.34546 19.1573 5.80886C19.5514 4.33682 13.7765 2.70991 12.6149 2.39861C10.838 1.92245 9.1315 1.59676 7.80909 1.48155C6.1842 1.33953 5.39275 1.52436 5.24393 2.08052C5.1727 2.34741 4.98266 3.056 8.22682 4.33518C8.43211 4.41639 8.66496 4.31558 8.74579 4.10992C8.82663 3.90427 8.72577 3.67179 8.52012 3.59095C6.95285 2.97277 6.30343 2.51982 6.09539 2.30657C6.58875 2.16173 8.27606 2.20374 10.9933 2.8215L0.600077 13.2004C0.221963 13.5785 0.013916 14.0806 0.013916 14.6148C0.013916 15.1494 0.221963 15.6519 0.600077 16.0296L7.95627 23.3858C8.33359 23.7635 8.83615 23.9716 9.37031 23.9716C9.90489 23.9716 10.407 23.7635 10.7851 23.3854L22.6683 11.4862C23.5921 10.5628 23.9859 9.64049 23.9859 8.40253V2.00062C23.9859 0.897457 23.0885 0 21.9853 0Z" fill="#8593AF" />
                        <path d="M13.1007 10.5204C12.9443 10.3639 12.6914 10.3639 12.535 10.5204L12.3189 10.7364C12.0024 10.5268 11.6247 10.4031 11.2174 10.4031C10.1143 10.4031 9.21677 11.3006 9.21677 12.4038C9.21677 13 9.46284 13.4713 9.67731 13.8158C9.87739 14.1371 10.017 14.5948 10.017 14.8045C10.017 15.4663 9.47846 16.0048 8.81666 16.0048C8.15487 16.0048 7.6163 15.4663 7.6163 14.8045C7.6163 14.5616 7.6887 14.3275 7.82557 14.1275C7.95039 13.9454 7.90359 13.6962 7.72152 13.5713C7.53908 13.4469 7.29019 13.4933 7.16537 13.6754C6.93688 14.0091 6.81605 14.3996 6.81605 14.8045C6.81605 15.2119 6.93969 15.5895 7.14933 15.906L6.93327 16.1221C6.7768 16.2785 6.7768 16.5315 6.93327 16.6879C7.01129 16.7659 7.11375 16.8051 7.21615 16.8051C7.3186 16.8051 7.42101 16.7659 7.49903 16.6879L7.7151 16.4718C8.0316 16.6815 8.40929 16.8051 8.81662 16.8051C9.91973 16.8051 10.8172 15.9076 10.8172 14.8045C10.8172 14.4148 10.6236 13.821 10.3567 13.3925C10.1186 13.0104 10.017 12.7147 10.017 12.4038C10.017 11.742 10.5555 11.2034 11.2173 11.2034C11.5382 11.2034 11.8283 11.3315 12.0436 11.5375C12.0504 11.5447 12.0528 11.5543 12.0596 11.5615C12.0668 11.5683 12.0763 11.5707 12.0836 11.5775C12.2896 11.7927 12.4177 12.0829 12.4177 12.4037C12.4177 12.7246 12.2924 13.0267 12.0651 13.254C11.9087 13.41 11.9087 13.6633 12.0647 13.8197C12.2203 13.9762 12.4741 13.9758 12.6305 13.8201C13.009 13.4416 13.2179 12.9387 13.2179 12.4037C13.2179 11.9964 13.0942 11.6187 12.8846 11.3022L13.1006 11.0861C13.2572 10.9297 13.2572 10.6768 13.1007 10.5204Z" fill="#8593AF" />
                    </svg>
                    <p className='text-secondaryText text-base font-normal'>Verified listings</p>
                </Link>
                <Link href="/vehicles" className="flex items-center justify-start space-x-3 cursor-pointer my-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6667 5.07498V9.84166C19.6667 9.97427 19.6141 10.1014 19.5203 10.1952C19.4265 10.289 19.2994 10.3417 19.1667 10.3417C19.0341 10.3417 18.907 10.289 18.8132 10.1952C18.7194 10.1014 18.6667 9.97427 18.6667 9.84166V6.28332L12.4251 12.5C12.2841 12.6416 12.1166 12.754 11.9321 12.8306C11.7477 12.9073 11.5499 12.9468 11.3501 12.9468C11.1503 12.9468 10.9525 12.9073 10.768 12.8306C10.5835 12.754 10.416 12.6416 10.2751 12.5L7.50007 9.72499C7.45183 9.67709 7.39461 9.63919 7.33169 9.61345C7.26877 9.58771 7.20139 9.57464 7.13341 9.57499C7.06543 9.57464 6.99804 9.58771 6.93512 9.61345C6.8722 9.63919 6.81498 9.67709 6.76674 9.72499L1.1834 15.275C1.08947 15.3689 0.962075 15.4217 0.829237 15.4217C0.696398 15.4217 0.569001 15.3689 0.47507 15.275C0.381139 15.1811 0.328369 15.0537 0.328369 14.9208C0.328369 14.788 0.381139 14.6606 0.47507 14.5667L6.02507 9.01666C6.16587 8.87523 6.33347 8.76332 6.51806 8.68748C6.70265 8.61164 6.90052 8.5734 7.10007 8.57499C7.29956 8.57386 7.49729 8.61231 7.68182 8.68813C7.86634 8.76394 8.034 8.8756 8.17507 9.01666L10.9751 11.8167C11.0231 11.865 11.0802 11.9034 11.1432 11.9296C11.2061 11.9558 11.2736 11.9693 11.3417 11.9693C11.4099 11.9693 11.4774 11.9558 11.5403 11.9296C11.6033 11.9034 11.6604 11.865 11.7084 11.8167L17.9584 5.56665H14.4001C14.2675 5.56665 14.1403 5.51397 14.0465 5.4202C13.9528 5.32644 13.9001 5.19926 13.9001 5.06665C13.9001 4.93404 13.9528 4.80687 14.0465 4.7131C14.1403 4.61933 14.2675 4.56665 14.4001 4.56665H19.1667C19.2994 4.56665 19.4265 4.61933 19.5203 4.7131C19.6141 4.80687 19.6667 4.93404 19.6667 5.06665V5.07498Z" fill="#8593AF" />
                    </svg>
                    <p className='text-secondaryText text-base font-normal'>History reports</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar