import { MouseEventHandler, useState } from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderShadow:' 10px 5px 5px black',
    borderRadius: '8px',
  },
};

type Props = {
    openCloseModal: () => void,
    modalIsOpen: boolean,
    children: JSX.Element,
};

export const Modal = ({children, modalIsOpen, openCloseModal}: Props) => {
  
  return (
    <>
        <button onClick={openCloseModal} className='shadow-2xl m-3 p-8 justify-center bg-white rounded-xl text-center hover:cursor-pointer hover:text-black flex flex-col items-center text-3xl text-gray-500'>
            +
        </button> 
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={openCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        
            <button 
                className=' absolute right-6 rounded-xl hover:text-red-800 block text-right' 
                onClick={openCloseModal}
            >
                x
            </button>
        
        {children}
      </ReactModal>
    </>
  );
}
