'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Icons
import { IoLogoVercel, IoLogoJavascript } from 'react-icons/io5'
import { FaReact, FaNode, FaCss3Alt, FaHtml5, FaPython } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandSocketIo } from 'react-icons/tb'

// Images
import Signore from '@/images/Signore.png'
import PVC from '@/images/PVC.PNG'
import TrabajofinalPP2 from '@/images/Trabajo-final-PP2.png'
import GeoIp from '@/images/Geo-IP.png'
import PhoneOSINT from '@/images/PhoneOSINT.png'

function TechPill({ icon: Icon, label }) {
  return (
    <li className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
      <Icon className="text-base" aria-hidden />
      <span>{label}</span>
    </li>
  )
}

function ProjectCard({ title, desc, tech = [], image, href, links = [] }) {
  return (
    <article className="group rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      {image && (
        <Link href={href ?? '#'} target={href ? '_blank' : undefined} rel="noopener noreferrer" aria-label={title}>
          <Image
            src={image}
            alt={title}
            className="h-56 w-full rounded-t-2xl object-cover transition group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </Link>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{desc}</p>

        {!!tech.length && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <TechPill key={t.label} icon={t.icon} label={t.label} />
            ))}
          </ul>
        )}

        {!!links.length && (
          <div className="mt-5 flex flex-wrap gap-3">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
                aria-label={l.label}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Portfolio() {
  return (
    <section id="PORTFOLIO" className="font-serif">
      <div className="mx-auto max-w-6xl px-4 py-10">
       
       <h2 className='flex items-center justify-center text-3xl '>PORTFOLIO</h2>

        {/* Proyectos */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          
           <ProjectCard
            title="Sitio de publicidad de Machimbre de PVC"
            desc="Sitio web que desarrollé para publicitar PVC de un negocio."
            tech={[
              { icon: IoLogoVercel, label: 'Next.js 15' },
              { icon: FaReact, label: 'React 19' },
              { icon: SiTailwindcss, label: 'Tailwind CSS' },
              
            ]}
            image={PVC}
            href="https://github.com/RedLineFB/Porfolio-NextJS"
            links={[
              { label: 'Sitio web', href: 'https://elyaguarete-opal.vercel.app/' },
            ]}
          />

          <ProjectCard
          title="TimbreWeb"
          desc="Timbre digital diseñado para edificios. En mi LinkedIn muestro el video de cómo funciona."
          tech={[
            { icon: FaReact, label: 'React 18' },
            { icon: SiTailwindcss, label: 'Tailwind CSS' },
            { icon: FaNode, label: 'Node.js' },
            { icon: TbBrandSocketIo, label: 'Socket.io' },
          ]}
          links={[
            { 
              label: 'Ver video en LinkedIn', 
              href: 'https://www.linkedin.com/feed/update/urn:li:activity:7297370305231032320/' 
            },
          ]}
        />
       
          <ProjectCard
            title="Portfolio (Next.js 14)"
            desc="Desarrollo Front-end centrado en simplicidad, UX y diseño responsivo."
            tech={[
              { icon: IoLogoVercel, label: 'Next.js 14' },
              { icon: FaReact, label: 'React 18' },
              { icon: SiTailwindcss, label: 'Tailwind CSS' },
              
            ]}
            
            href="https://github.com/RedLineFB/Porfolio-NextJS"
            links={[
              { label: 'Portfolio(GitHub)', href: 'https://github.com/RedLineFB/Portfolio' },
            ]}
          />

          <ProjectCard
            title="Signore (Demo) + Web Scraper"
            desc="Front-end en React 18 y un scraper propio en Python para comparar precios."
            tech={[
              { icon: FaReact, label: 'React 18' },
              { icon: FaPython, label: 'Python 3' },
              { icon: FaCss3Alt, label: 'CSS3' },
            ]}
            image={Signore}
            href="https://signore.netlify.app/"
            links={[
              { label: 'Sitio Demo', href: 'https://signore.netlify.app/' },
              { label: 'WebScraper (GitHub)', href: 'https://github.com/RedLineFB/WebScraping-Precios' },
            ]}
          />

          <ProjectCard
            title="Trabajo Final Front-end (Teclab)"
            desc="Práctica profesionalizante para recibirme de Técnico Superior en Programación."
            tech={[
              { icon: FaHtml5, label: 'HTML5' },
              { icon: FaCss3Alt, label: 'CSS3' },
              { icon: IoLogoJavascript, label: 'JavaScript' },
            ]}
            image={TrabajofinalPP2}
            href="https://rpropiedades.netlify.app/"
            links={[{ label: 'Ver proyecto', href: 'https://rpropiedades.netlify.app/' }]}
          />
           <ProjectCard
            title="OSINT: PhoneOSINT"
            desc="Script de OSINT para geolocalizar un número de teléfono."
            tech={[{ icon: FaPython, label: 'Python 3' }]}
            image={PhoneOSINT}
            links={[
              { label: 'PhoneOSINT (GitHub)', href: 'https://github.com/RedLineFB/PhoneOSINT' }
,
            ]}
          />
          <ProjectCard
            title="OSINT: Geo-IP"
            desc="Script para geolocalizar una IP."
            tech={[{ icon: FaPython, label: 'Python 3' }]}
            image={GeoIp}
            links={[
              { label: 'Geo-IP (GitHub)', href: 'https://github.com/RedLineFB/Geo-IP' }
,
            ]}
          />
        </div>

        
        
      </div>
    </section>
  )
}
