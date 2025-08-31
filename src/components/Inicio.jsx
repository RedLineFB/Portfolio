'use client'

import React from 'react'
import LinkedIn from '@/images/LinkedIn.png'
import GitHub from '@/images/GitHub.png'
import Instagram from '@/images/Instagram.png'

import Image from 'next/image' 
import styles from './Inicio.module.css'
import Link from 'next/link'

const Inicio = () => {
  return (
    <>
      <div id="INICIO" className="flex flex-col items-center justify-center font-serif text-center px-4">
        
        <div className="mt-5 text-center max-w-2xl">
  
  <ul className="mt-4 space-y-2 text-xl text-left inline-block text-black">
  
    <li className="flex items-center gap-2">
      <span>✅</span>
      <span className="font-semibold">Técnico Superior en Programación(2022)</span>
      <span className="text-sm ml-1"></span>
    </li>
  </ul>
</div>

        {/* Botones centrados debajo del texto */}
        <div className="flex gap-6 mt-8 flex-wrap justify-center">
          <Link href="https://www.linkedin.com/in/facundo-betancur-33659a124/" target="_blank" rel="noopener noreferrer">
            <button className="rounded-2xl text-base w-20 flex flex-col items-center">
              <Image className="hover:scale-105 transition-all" src={LinkedIn} alt="LinkedIn" />
              LinkedIn
            </button>
          </Link>  

          <Link href="https://github.com/RedLineFB/" target="_blank" rel="noopener noreferrer">
            <button className="rounded-2xl text-base w-20 flex flex-col items-center">
              <Image className="hover:scale-105 transition-all" src={GitHub} alt="GitHub" />
              GitHub
            </button>
          </Link>

          <Link href="https://www.instagram.com/facundo_betancur97/" target="_blank" rel="noopener noreferrer">
            <button className="rounded-2xl text-base w-20 flex flex-col items-center">
              <Image className="hover:scale-105 transition-all" src={Instagram} alt="Instagram" />
              Instagram
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Inicio
