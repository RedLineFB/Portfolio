import React from 'react';
import "./globals.css";
import Navbar from "@/components/Navbar";
import  Inicio  from "@/components/Inicio";
import Portfolio from '@/components/Portfolio';
import Habilidades from '@/components/Habilidades';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Betancur Facundo",
  description: "Portfolio de Facundo Betancur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
        <Navbar/>
        <main className='w-11/12  m-auto'>
        <Inicio/>
        <hr className="separator" />
        <Portfolio/>
        <hr className="separator" />
        
        <Contacto/>
        <hr className="separator" />
        <Footer/>
        </main>
        
        {children}

      </body>
    </html>
  );
}
