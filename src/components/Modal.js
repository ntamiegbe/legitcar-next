import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, onClose, children }) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleCloseClick = (e) => {
        e.preventDefault()
        onClose()
    }

    const modalContent = isOpen ? (
        <div className="fixed z-50 top-0 left-0 h-full bg-white mx-auto w-full" style={{ overflowY: "auto" }}>
            <div className="p-4">
                <div className="flex items-center justify-end mt-4 mb-8">
                    <button className="p-1 ml-auto" onClick={handleCloseClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#475467" />
                            <g clipPath="url(#clip0_3616_84485)">
                                <path d="M8.41369 15.9999C8.30841 15.9999 8.20304 15.96 8.12298 15.8793C7.96226 15.7186 7.96226 15.4579 8.12298 15.2972L15.2991 8.1211C15.4599 7.96028 15.7204 7.96028 15.8812 8.1211C16.0419 8.28182 16.0419 8.54239 15.8812 8.70311L8.70499 15.8793C8.62433 15.96 8.51906 15.9999 8.41369 15.9999Z" fill="white" />
                                <path d="M15.5904 16C15.4851 16 15.3797 15.96 15.2997 15.8793L8.12298 8.70265C7.96226 8.54183 7.96226 8.28126 8.12298 8.12054C8.2837 7.95982 8.54427 7.95982 8.70499 8.12054L15.8812 15.2972C16.0419 15.4579 16.0419 15.7186 15.8812 15.8793C15.8005 15.96 15.6952 16 15.5904 16Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3616_84485">
                                    <rect width="8" height="8" fill="white" transform="translate(8 8)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(modalContent, document.body);
    } else {
        return null;
    }

}

export default Modal
