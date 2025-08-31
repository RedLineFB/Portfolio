'use client'

import { useState } from "react";
import {Link as LinkScroll} from "react-scroll";
import {AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"; 

export default function Navbar(){

    const [menu, setMenu] = useState(false);
    
    const handleNavigation = () => {
        setMenu(!menu);
    }

    return(
        <header className='bg-gradient-to-r from-blue-700 to-blue-400  text-[#FFFFFF]  w-full ease-in duration-300  z-10 sticky top-0'>
            <nav className='uppercase max-w-[1300px] mx-auto h-[100px] flex items-center justify-between p-4 '>
                
                <div>
                    <LinkScroll to='INICIO' spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavigation}>
                    <span className=' font-extrabold text-2xl md:text-xl cursor-pointer '> Betancur Facundo </span>
                    </LinkScroll>
                </div>

                <ul className='hidden md:flex uppercase font-semibold text-2xl md:text-xl lg:text-[20px] cursor-pointer space-x-10'>
                    <li className="hover:text-[#000000]">
                        <LinkScroll to='INICIO' activeClass="estilo" spy={true} smooth={true} offset={-150} duration={500}>INICIO</LinkScroll>
                    </li>
                    <li className="hover:text-[#000000]" >
                        <LinkScroll to='PORTFOLIO' activeClass="estilo" spy={true} smooth={true} offset={-150} duration={500}>PORTFOLIO</LinkScroll>
                    </li>
                    
                    <li className="hover:text-[#000000]" >
                        <LinkScroll to='CONTACTO' activeClass="estilo" spy={true} smooth={true} offset={-150} duration={500}>CONTACTO</LinkScroll>
                    </li>
                     
                </ul>

                <div onClick={handleNavigation} className='flex md:hidden cursor-pointer'>
                     {menu ?(<AiOutlineCloseCircle size={25} />) 
                           : 
                            (<AiOutlineMenu size={25} />) }
                </div>

                <div className= {menu ?
                    'md:hidden absolute top-[100px]  right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen text-center bg-gradient-to-r from-blue-700 to-blue-400 text-white ease-in duration-300 ' 
                   : 
                    'md:hidden absolute top-[100px] right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen text-center bg-gradient-to-r from-blue-700 to-blue-400 text-white ease-in duration-300'
                   }>
                    
                    <div className="w-full">
                        <ul className='mb-14  uppercase font-semibold text-2xl  cursor-pointer space-y-14'>
                           <li className="hover:text-[#000000]">
                                <LinkScroll to='INICIO' activeClass="estilo" spy={true} smooth={true} offset={-150} duration={500}>INICIO</LinkScroll>
                            </li>
                            <li className="hover:text-[#000000]" >
                                <LinkScroll to='PORTFOLIO' activeClass="estilo" spy={true} smooth={true} offset={-150} duration={500}>PORTFOLIO</LinkScroll>
                            </li>
                            
                            <li className="hover:text-[#000000]" >
                                <LinkScroll to='CONTACTO' activeClass="estilo" spy={true} smooth={true} offset={-150} duration={500}>CONTACTO</LinkScroll>
                            </li>
                     
                        </ul>

                    </div>
                
                </div>
                
            </nav>
        </header>
    )
}