import Link from "next/link"
import { useRouter } from 'next/router';

const Footer = () => {

    const router = useRouter();

    return (
        <div className='fixed bottom-0 w-full bg-white md:hidden'>
            <div className="flex items-center justify-between px-8 py-3 border-t border-stroke">
                <Link href="/" className="flex flex-col items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill={` ${router.pathname === '/' ? '#8E44AD' : 'none'}`} xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 16.4714C8.84906 16.4714 7.91675 15.5391 7.91675 14.388C7.91675 13.237 8.84906 12.3047 10 12.3047C11.151 12.3047 12.0833 13.237 12.0833 14.388C12.0833 15.5391 11.151 16.4714 10 16.4714ZM10 13.138C9.31247 13.138 8.75003 13.7006 8.75003 14.388C8.75003 15.0755 9.31247 15.638 10 15.638C10.6876 15.638 11.25 15.0755 11.25 14.388C11.25 13.7006 10.6876 13.138 10 13.138Z" fill={` ${router.pathname === '/' ? '#8E44AD' : '#8593AF'}`} />
                        <path d="M15.3763 8.42578L15.9655 9.01508L11.4726 13.508L10.8833 12.9189L15.3763 8.42578Z" fill={` ${router.pathname === '/' ? '#8E44AD' : '#8593AF'}`} />
                        <path d="M20 14.8047H15.4167V13.5547C15.4167 12.7786 15.2553 12.0235 14.9374 11.3203L15.6979 10.9766C16.0677 11.7891 16.25 12.6537 16.25 13.5547V13.9714H19.1667V13.5547C19.1667 8.50266 15.052 4.38797 10 4.38797C4.94797 4.38797 0.833282 8.50266 0.833282 13.5547V13.9714H3.75V13.5547C3.75 10.1068 6.55212 7.30469 10 7.30469C11.2291 7.30469 12.4167 7.65884 13.4375 8.33588L12.9791 9.03381C12.0938 8.45047 11.0677 8.14316 10 8.14316C7.01569 8.14316 4.58328 10.5756 4.58328 13.5599V14.8099H0V13.5599C0 8.03909 4.48441 3.55469 10 3.55469C15.5156 3.55469 20 8.03909 20 13.5547V14.8047Z" fill={` ${router.pathname === '/' ? '#8E44AD' : '#8593AF'}`} />
                    </svg>
                    <p className={` ${router.pathname === '/' ? 'text-brand' : 'text-icons'} text-sm font-normal`}>Dashboard</p>
                </Link>
                <Link href="/vehic" className="flex flex-col items-center justify-center cursor-pointer">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill={` ${router.pathname === '/' ? '#8E44AD' : 'none'}`} xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.60263 4.436C8.78952 5.24575 8.33209 6.3458 8.3313 7.49334V7.5V7.50567C8.33075 8.40466 8.61231 9.28117 9.1363 10.0117C9.2048 10.111 9.32168 10.1656 9.44185 10.1544C9.56203 10.1431 9.66672 10.0678 9.71557 9.95739C9.76442 9.84701 9.74978 9.71885 9.6773 9.62234C9.64997 9.584 9.62563 9.54367 9.59963 9.50434L15.3333 9.51667C15.5174 9.51667 15.6666 9.36743 15.6666 9.18334C15.6666 8.99924 15.5174 8.85 15.3333 8.85L13.64 8.84634C13.9756 8.60497 14.2095 8.24749 14.2963 7.84334H14.3226C15.0644 7.84279 15.6657 7.24178 15.6666 6.5V6.16667C15.6666 5.98257 15.5174 5.83334 15.3333 5.83334C15.1492 5.83334 15 5.98257 15 6.16667V6.5C14.9994 6.87349 14.6968 7.17612 14.3233 7.17667H14.3C14.1446 6.3994 13.4634 5.83906 12.6707 5.83663C11.8781 5.83421 11.1934 6.39036 11.0333 7.16667H9.01463C9.1341 5.8604 9.94226 4.71744 11.134 4.16936C12.3257 3.62127 13.7195 3.75155 14.789 4.511C14.9385 4.61851 15.1468 4.58449 15.2543 4.435C15.3618 4.28552 15.3278 4.07718 15.1783 3.96967C13.4551 2.74288 11.0979 2.94018 9.60263 4.43634V4.436ZM9.2513 8.836C9.12533 8.51467 9.04565 8.17708 9.01463 7.83334H11.0333C11.1182 8.23933 11.3513 8.5991 11.6873 8.84234L9.2513 8.836ZM12.6666 6.5C13.2189 6.5 13.6666 6.94772 13.6666 7.5C13.6666 8.05229 13.2189 8.5 12.6666 8.5C12.1144 8.5 11.6666 8.05229 11.6666 7.5C11.6666 6.94772 12.1144 6.5 12.6666 6.5Z" fill={` ${router.pathname === '/' ? '#8E44AD' : '#8593AF'}`} />
                        <path d="M16.3358 7.49982C16.3334 9.52387 14.6931 11.1641 12.6691 11.1665C11.9071 11.1703 11.1635 10.9331 10.5444 10.4888C10.4477 10.4193 10.3213 10.4066 10.2127 10.4556C10.1041 10.5045 10.0299 10.6077 10.018 10.7262C10.0061 10.8447 10.0584 10.9606 10.1551 11.0302C11.8785 12.2538 14.2333 12.0556 15.7279 10.561C17.2225 9.0664 17.4208 6.71158 16.1971 4.98815C16.1286 4.88878 16.0117 4.83419 15.8915 4.84545C15.7714 4.85671 15.6667 4.93206 15.6178 5.04244C15.569 5.15281 15.5836 5.28097 15.6561 5.37749C16.0996 5.99615 16.3374 6.7386 16.3358 7.49982Z" fill={` ${router.pathname === '/' ? '#8E44AD' : '#8593AF'}`} />
                        <path d="M12.6666 7.83317C12.8507 7.83317 12.9999 7.68393 12.9999 7.49984C12.9999 7.31574 12.8507 7.1665 12.6666 7.1665C12.4825 7.1665 12.3333 7.31574 12.3333 7.49984C12.3333 7.68393 12.4825 7.83317 12.6666 7.83317Z" fill={` ${router.pathname === '/' ? '#8E44AD' : '#8593AF'}`} />
                        <path d="M3.66659 7.83317C3.85068 7.83317 3.99992 7.68393 3.99992 7.49984C3.99992 7.31574 3.85068 7.1665 3.66659 7.1665C3.48249 7.1665 3.33325 7.31574 3.33325 7.49984C3.33325 7.68393 3.48249 7.83317 3.66659 7.83317Z" fill={` ${router.pathname === '/' ? '#8E44AD' : '#8593AF'}`} />
                        <path d="M0.333344 8.81659C0.149249 8.81659 1.02824e-05 8.96583 1.02824e-05 9.14992C1.02824e-05 9.33402 0.149249 9.48326 0.333344 9.48326L7.36668 9.49992C7.94304 11.0284 9.15094 12.2338 10.6806 12.8069C12.2102 13.3801 13.9128 13.2653 15.3517 12.4919L17.6184 14.7606C18.1639 15.3057 19.0481 15.3053 19.5932 14.7598C20.1383 14.2142 20.1379 13.33 19.5924 12.7849L17.408 10.6036C18.4541 9.00869 18.6267 6.99421 17.8671 5.24462C17.1075 3.49504 15.5179 2.24563 13.6384 1.92092C13.405 1.78425 13.1584 1.64992 12.905 1.52092C12.0092 1.06929 11.02 0.833775 10.0167 0.833253H7.76668C6.97017 0.832757 6.19928 1.11468 5.59101 1.62892L3.21801 3.63892C3.20301 3.65163 3.18614 3.66197 3.16801 3.66959C1.96301 4.14392 0.792344 4.47225 0.773677 4.47759C0.313 4.61477 -0.00207434 5.03926 1.02824e-05 5.51992V6.49992C0.000928576 7.24144 0.601822 7.84234 1.34334 7.84326H2.03635C2.12092 8.23424 2.3435 8.58167 2.66335 8.82192L0.333344 8.81659ZM19.12 13.2546C19.4054 13.5392 19.406 14.0012 19.1214 14.2866C18.8367 14.5719 18.3747 14.5725 18.0894 14.2879L15.931 12.1266C16.1956 11.9413 16.444 11.734 16.6737 11.5069C16.7904 11.3899 16.899 11.2673 17.0044 11.1423L19.12 13.2546ZM17.6667 7.49992C17.6669 9.88531 15.982 11.9386 13.6425 12.4042C11.303 12.8697 8.96041 11.6178 8.04741 9.41406C7.13442 7.21031 7.90528 4.66852 9.88857 3.34315C11.8719 2.01778 14.5152 2.27796 16.202 3.96459C17.1429 4.9001 17.6703 6.17315 17.6667 7.49992ZM8.65968 3.49292C8.55068 3.60225 8.45035 3.71725 8.35135 3.83325H6.07968L6.87968 3.15559C7.12838 2.94741 7.44236 2.83332 7.76668 2.83325H9.45568C9.17103 3.02872 8.90461 3.24951 8.65968 3.49292ZM0.666677 6.49992V6.16659H1.33334C1.51744 6.16659 1.66668 6.01735 1.66668 5.83325C1.66668 5.64916 1.51744 5.49992 1.33334 5.49992H0.670011C0.675718 5.32402 0.79184 5.17088 0.959677 5.11792C1.00868 5.10425 2.17368 4.77759 3.41435 4.28925C3.49906 4.25453 3.57779 4.20673 3.64768 4.14759L6.02101 2.13759C6.50911 1.72515 7.12767 1.4992 7.76668 1.49992H10.0167C10.707 1.50114 11.3915 1.6267 12.0373 1.87059C11.5594 1.92366 11.0902 2.03781 10.6413 2.21025C10.4343 2.18207 10.2256 2.16748 10.0167 2.16659H7.76668C7.28563 2.16706 6.82005 2.33661 6.45135 2.64559L4.95468 3.91225C4.848 4.00263 4.80906 4.14999 4.85716 4.28127C4.90527 4.41256 5.03019 4.49987 5.17001 4.49992H7.86368C7.36042 5.30292 7.0689 6.22038 7.01635 7.16659H5.30001C5.13992 6.39028 4.45523 5.83413 3.66259 5.83655C2.86995 5.83898 2.18868 6.39932 2.03334 7.17659H1.34334C0.96986 7.17604 0.667228 6.87341 0.666677 6.49992ZM4.66668 7.49992C4.66668 8.05221 4.21896 8.49992 3.66668 8.49992C3.11439 8.49992 2.66668 8.05221 2.66668 7.49992C2.66668 6.94764 3.11439 6.49992 3.66668 6.49992C4.21896 6.49992 4.66668 6.94764 4.66668 7.49992ZM5.30001 7.83326H7.01668C7.03578 8.1703 7.08498 8.50497 7.16368 8.83326L4.66368 8.82759C4.99018 8.58505 5.21655 8.23133 5.30001 7.83326Z" fill={` ${router.pathname === '/' ? '#8E44AD' : '#8593AF'}`} />
                    </svg>
                    <p className={` ${router.pathname === '/vehic' ? 'text-brand' : 'text-icons'} text-sm font-normal`}>Verify</p>
                </Link>
                <Link href="/maintainance" className="flex flex-col items-center justify-center cursor-pointer active:text-brand">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill={` ${router.pathname === '/maintainance' ? '#8E44AD' : 'none'}`} xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4787_442)">
                            <path d="M19.7812 11.6875L18.8125 11.375C18.75 11.1875 18.6562 11 18.5625 10.8125L19.0312 9.90625C19.0938 9.78125 19.0625 9.65625 18.9688 9.5625L18.0625 8.65625C17.9688 8.5625 17.8125 8.53125 17.7188 8.59375L17.4062 8.75L17.4375 8.25C17.4688 7.9375 17.3438 7.625 17.125 7.375L17.6875 7.3125C18.3125 7.25 18.8125 6.6875 18.75 6C18.6875 5.4375 18.1875 4.96875 17.5938 4.96875L16.5312 4.9375C16.1562 4.9375 15.8125 5.09375 15.5938 5.40625C15.3125 4.71875 14.9375 4.09375 14.5 3.375C14.125 2.78125 13.4688 2.375 12.75 2.375H5.96875C5.25 2.375 4.59375 2.75 4.21875 3.375C3.78125 4.09375 3.4375 4.6875 3.15625 5.375C2.90625 5.0625 2.59375 4.9375 2.25 4.9375L1.1875 4.96875C0.53125 5 0 5.53125 0 6.125C0 6.71875 0.46875 7.21875 1.09375 7.3125L1.625 7.375C1.40625 7.59375 1.28125 7.90625 1.3125 8.25L1.5625 12.3438C1.59375 12.7188 1.8125 13.0313 2.125 13.1875V13.9375C2.125 14.4688 2.5625 14.875 3.09375 14.875H4.875C5.40625 14.875 5.8125 14.4375 5.8125 13.9375V13.3125H10.0938C10.125 13.4063 10.1875 13.5 10.2812 13.5313L11.25 13.8438C11.3125 14.0313 11.4062 14.2188 11.5 14.4063L11 15.3125C10.9375 15.4375 10.9688 15.5625 11.0625 15.6563L11.9688 16.5625C12.0625 16.6563 12.2188 16.6875 12.3125 16.625L13.2188 16.1563C13.4062 16.25 13.5937 16.3438 13.7812 16.4063L14.0938 17.375C14.125 17.5 14.25 17.5938 14.375 17.5938H15.6562C15.7812 17.5938 15.9062 17.5 15.9375 17.375L16.25 16.4063C16.4375 16.3438 16.625 16.25 16.8125 16.1563L17.7188 16.625C17.8438 16.6875 17.9688 16.6563 18.0625 16.5625L18.9688 15.6563C19.0625 15.5625 19.0938 15.4063 19.0312 15.3125L18.5625 14.4063C18.6562 14.2188 18.75 14.0313 18.8125 13.8438L19.7812 13.5313C19.9062 13.5 20 13.375 20 13.25V11.9688C20 11.8438 19.9062 11.7188 19.7812 11.6875ZM11.2188 11.375L11.0938 11.4063H7.625C7.46875 11.4063 7.3125 11.5313 7.3125 11.7188C7.3125 11.9063 7.4375 12.0313 7.625 12.0313H10.0312V12.7188C4.625 12.7188 8 12.7188 2.59375 12.7188C2.375 12.7188 2.15625 12.5313 2.15625 12.3125L2.03125 10C2.1875 10.0313 4 11.0938 5.15625 9.5L5.34375 9.6875C5.78125 10.2188 6.375 10.5313 7.03125 10.5313H11.3438L11.4688 10.7813C11.375 10.9688 11.2813 11.1875 11.2188 11.375ZM1.90625 8.1875C1.90625 8.15625 1.90625 8.09375 1.90625 8.0625C3.1875 8.125 4.09375 8.59375 4.6875 9.09375C3.8125 10.4375 2.25 9.375 1.9375 9.34375L1.90625 8.1875ZM11.0312 9.53125C10.9375 9.625 10.9062 9.78125 10.9688 9.875L11 9.9375H7C6.53125 9.9375 6.09375 9.71875 5.78125 9.34375C5 8.34375 3.875 7.6875 2.46875 7.5C2.6875 7.34375 2.875 7.125 3.0625 6.90625H15.75C15.9688 7.1875 16.25 7.4375 16.5625 7.65625C16.5938 7.6875 16.9062 7.8125 16.875 8.1875L16.8125 9.03125C16.625 8.9375 16.4688 8.875 16.2812 8.8125L15.9688 7.84375C15.9375 7.71875 15.8125 7.625 15.6875 7.625H14.375C14.25 7.625 14.125 7.71875 14.0938 7.84375L13.7812 8.8125C13.5937 8.875 13.4062 8.96875 13.2188 9.0625L12.3125 8.59375C12.1875 8.53125 12.0625 8.5625 11.9688 8.65625L11.0312 9.53125ZM16.5312 5.5625L17.5938 5.59375C17.9062 5.59375 18.125 5.8125 18.1562 6.09375C18.1875 6.40625 17.9375 6.6875 17.625 6.71875L16.4688 6.84375C16.3125 6.6875 16.1562 6.5 16.0312 6.3125L16 6.09375C15.9688 5.78125 16.2812 5.53125 16.5312 5.5625ZM4.75 3.71875C5 3.28125 5.46875 3.03125 5.96875 3.03125H12.75C13.25 3.03125 13.7188 3.3125 13.9688 3.71875C14.4688 4.53125 14.8125 5.15625 15.125 5.90625C15.1875 6.03125 15.25 6.1875 15.3125 6.3125H3.40625C3.46875 6.1875 3.53125 6.0625 3.59375 5.90625C3.90625 5.15625 4.25 4.53125 4.75 3.71875ZM0.625 6.125C0.625 5.84375 0.875 5.5625 1.21875 5.5625L2.28125 5.53125C2.59375 5.53125 2.84375 5.78125 2.8125 6.0625L2.75 6.25C2.625 6.46875 2.46875 6.6875 2.28125 6.84375L1.15625 6.71875C0.84375 6.6875 0.625 6.4375 0.625 6.125ZM5.15625 13.9375C5.15625 14.125 5 14.2813 4.8125 14.2813H3.0625C2.875 14.2813 2.71875 14.125 2.71875 13.9375V13.3125H5.1875V13.9375H5.15625ZM19.375 13.0313L18.4688 13.3125C18.375 13.3438 18.2812 13.4375 18.2812 13.5313C18.2188 13.7813 18.0938 14.0313 17.9688 14.2813C17.9062 14.375 17.9062 14.4688 17.9688 14.5625L18.4062 15.4063L17.8125 16L16.9688 15.5625C16.875 15.5 16.7812 15.5313 16.6875 15.5625C16.4375 15.6875 16.1875 15.8125 15.9375 15.875C15.8438 15.9063 15.75 15.9688 15.7188 16.0625L15.4375 16.9688H14.5938L14.3125 16.0625C14.2812 15.9688 14.1875 15.875 14.0938 15.875C13.8437 15.8125 13.5938 15.6875 13.3438 15.5625C13.25 15.5 13.1562 15.5 13.0625 15.5625L12.2188 16L11.625 15.4063L12.0625 14.5625C12.125 14.4688 12.0938 14.375 12.0625 14.2813C11.9375 14.0313 11.8125 13.7813 11.75 13.5313C11.7187 13.4375 11.6562 13.3438 11.5625 13.3125L10.6562 13.0313V13V12.1875L11.5625 11.9063C11.6562 11.875 11.75 11.7813 11.75 11.6875C11.8125 11.4375 11.9375 11.1875 12.0625 10.9375C12.125 10.8438 12.125 10.75 12.0625 10.6563L11.625 9.8125L12.2188 9.21875L13.0625 9.65625C13.1562 9.71875 13.25 9.6875 13.3438 9.65625C13.5938 9.53125 13.8437 9.40625 14.0938 9.34375C14.1875 9.3125 14.2812 9.25 14.3125 9.15625L14.5938 8.25H15.4375L15.7188 9.15625C15.75 9.25 15.8438 9.34375 15.9375 9.34375C16.1875 9.40625 16.4375 9.53125 16.6875 9.65625C16.7812 9.71875 16.875 9.71875 16.9688 9.65625L17.8125 9.21875L18.4062 9.8125L17.9688 10.6563C17.9062 10.75 17.9375 10.8438 17.9688 10.9375C18.0938 11.1875 18.2188 11.4375 18.2812 11.6875C18.3125 11.7813 18.375 11.875 18.4688 11.9063L19.375 12.1875V13.0313Z" fill={` ${router.pathname === '/maintainance' ? '#8E44AD' : '#8593AF'}`} />
                            <path d="M14.7812 10.5938C13.6875 10.5938 12.7812 11.5 12.7812 12.5937C12.7812 13.6875 13.6875 14.5938 14.7812 14.5938C15.875 14.5938 16.7812 13.6875 16.7812 12.5937C16.7812 11.5 15.9062 10.5938 14.7812 10.5938ZM14.7812 14C14 14 13.375 13.375 13.375 12.5937C13.375 11.8125 14 11.1875 14.7812 11.1875C15.5625 11.1875 16.1875 11.8125 16.1875 12.5937C16.1875 13.375 15.5625 14 14.7812 14Z" fill={` ${router.pathname === '/maintainance' ? '#8E44AD' : '#8593AF'}`} />
                        </g>
                        <defs>
                            <clipPath id="clip0_4787_442">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className={` ${router.pathname === '/maintainance' ? 'text-brand' : 'text-icons'} text-sm font-normal`}>Maintainance</p>
                </Link>
                <Link href="/vehicles" className="flex flex-col items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill={` ${router.pathname === '/vehicles' ? '#8E44AD' : 'none'}`} xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6667 5.07498V9.84166C19.6667 9.97427 19.6141 10.1014 19.5203 10.1952C19.4265 10.289 19.2994 10.3417 19.1667 10.3417C19.0341 10.3417 18.907 10.289 18.8132 10.1952C18.7194 10.1014 18.6667 9.97427 18.6667 9.84166V6.28332L12.4251 12.5C12.2841 12.6416 12.1166 12.754 11.9321 12.8306C11.7477 12.9073 11.5499 12.9468 11.3501 12.9468C11.1503 12.9468 10.9525 12.9073 10.768 12.8306C10.5835 12.754 10.416 12.6416 10.2751 12.5L7.50007 9.72499C7.45183 9.67709 7.39461 9.63919 7.33169 9.61345C7.26877 9.58771 7.20139 9.57464 7.13341 9.57499C7.06543 9.57464 6.99804 9.58771 6.93512 9.61345C6.8722 9.63919 6.81498 9.67709 6.76674 9.72499L1.1834 15.275C1.08947 15.3689 0.962075 15.4217 0.829237 15.4217C0.696398 15.4217 0.569001 15.3689 0.47507 15.275C0.381139 15.1811 0.328369 15.0537 0.328369 14.9208C0.328369 14.788 0.381139 14.6606 0.47507 14.5667L6.02507 9.01666C6.16587 8.87523 6.33347 8.76332 6.51806 8.68748C6.70265 8.61164 6.90052 8.5734 7.10007 8.57499C7.29956 8.57386 7.49729 8.61231 7.68182 8.68813C7.86634 8.76394 8.034 8.8756 8.17507 9.01666L10.9751 11.8167C11.0231 11.865 11.0802 11.9034 11.1432 11.9296C11.2061 11.9558 11.2736 11.9693 11.3417 11.9693C11.4099 11.9693 11.4774 11.9558 11.5403 11.9296C11.6033 11.9034 11.6604 11.865 11.7084 11.8167L17.9584 5.56665H14.4001C14.2675 5.56665 14.1403 5.51397 14.0465 5.4202C13.9528 5.32644 13.9001 5.19926 13.9001 5.06665C13.9001 4.93404 13.9528 4.80687 14.0465 4.7131C14.1403 4.61933 14.2675 4.56665 14.4001 4.56665H19.1667C19.2994 4.56665 19.4265 4.61933 19.5203 4.7131C19.6141 4.80687 19.6667 4.93404 19.6667 5.06665V5.07498Z" fill={` ${router.pathname === '/vehicles ' ? '#8E44AD' : '#8593AF'}`} />
                    </svg>
                    <p className={` ${router.pathname === '/vehicles' ? 'text-brand' : 'text-icons'} text-sm font-normal`}>Reports</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer