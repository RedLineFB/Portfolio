import React from 'react'

const Footer = () => {
  
  const fecha = new Date();
  const año = fecha.getFullYear();

  return (
    <>
    <div className='mt-20'></div>

    &copy; {año} Desarrollador Facundo Betancur
    </>
  )
}

export default Footer