import React from 'react'
import Logo from '../Header/Logo'
import Image from 'next/image'
import { Icon } from "@iconify/react/dist/iconify.js";
import { footerData } from "./data";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black dark:border-white dark:border-opacity-10 border-opacity-10'>
          <div className='flex flex-col gap-6 max-w-md'>
            <Logo />
            <p className='opacity-60'>{footerData.brand.tagline}</p>
            <div className='flex gap-4'>
              {footerData.brand.socialLinks.map((item, index) => {
                return (
                  <Link key={index} href={item.link} target="_blank" className='hover:opacity-60'>
                    <Image key={index} src={item.icon} className='dark:hidden' alt='social-icon' height={20} width={20} />
                    <Image src={item.dark_icon} className='dark:block hidden' alt='social-icon' height={20} width={20} />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='grid sm:grid-cols-3 gap-6'>
            <div className='flex flex-col gap-4'>
              <p className='text-dark_black font-medium'>{footerData.sitemap.name}</p>
              <ul className='flex flex-col gap-3'>
                {footerData.sitemap.links.map((item, index) => {
                  return (
                    <li key={index} className='text-dark_black opacity-60 hover:text-black hover:opacity-100 dark:text-white'>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-dark_black font-medium'>{footerData.otherPages.name}</p>
              <ul className='flex flex-col gap-3'>
                {footerData.otherPages.links.map((item, index) => {
                  return (
                    <li key={index} className='text-dark_black opacity-60 hover:text-black hover:opacity-100 dark:text-white'>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-dark_black font-medium dark:text-white'>{footerData.contactDetails.name}</p>
              <ul className='flex flex-col gap-4'>
                {footerData.contactDetails.rows.map((row, index) => (
                  <li key={index} className='flex gap-3'>
                    <span
                      className='mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-dark_black/[0.08] bg-dark_black/[0.03] text-dark_black/70 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/70'
                      aria-hidden
                    >
                      <Icon icon={row.icon} width={20} height={20} className='shrink-0' />
                    </span>
                    <div className='min-w-0 flex-1'>
                      <p className='text-[11px] font-semibold uppercase tracking-[0.14em] text-dark_black/45 dark:text-white/45'>
                        {row.label}
                      </p>
                      {row.href ? (
                        <Link
                          href={row.href}
                          className='mt-1 block text-sm leading-relaxed text-dark_black/70 transition-colors hover:text-dark_black hover:opacity-100 dark:text-white/70 dark:hover:text-white'
                        >
                          {row.text}
                        </Link>
                      ) : (
                        <p className='mt-1 text-sm leading-relaxed text-dark_black/70 dark:text-white/70'>
                          {row.text}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='opacity-60'>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
  