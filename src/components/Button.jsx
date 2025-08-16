import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-lg transform transition-transform duration-300 ease=in-out hover:scale-110`}>
      Get Started
    </button>
  )
}

export default Button
