import React from 'react'
import "./Modal.scss"
import { IoCloseSharp } from "react-icons/io5";

export const Modal = ({open, children, onClose, className }) => {
    if(!open) return null
  return (
    <div className={`${className} p-fix t-0 l-0 modal-overlay w-100vw h-100vh`}>
    <IoCloseSharp onClick={onClose} className='button close' color='rgb(252, 207, 207)'/>
        <div className="p-rel w-100 h-100 fl fl-c f-d-col modal-content">
            <span className='fl fl-c fl-d-col w-100 h-100'>{children}</span>
        </div>
    </div>
  )
}
