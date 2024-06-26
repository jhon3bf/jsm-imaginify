'use client';

import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='hidden h-screen lg:flex w-72 bg-white p-5 shadow-md shadow-purple-200/50'>
      <div className='flex size-full flex-col gap-4'>
        <Link href='/'>
          <Image
            src='/assets/images/logo-text.svg'
            alt='logo'
            width={180}
            height={28}
          />
        </Link>
        <nav className='h-full flex-col justify-between md:flex md:gap-4'>
          <SignedIn>
            <ul className='hidden w-full flex-col items-start gap-2 md:flex'>
              {navLinks.slice(0, 6).map(link => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`flex justify-center items-center text-[16px] leading-[140%] font-semibold w-full whitespace-nowrap rounded-lg bg-cover transition-all hover:bg-purple-100 hover:shadow-inner group ${
                      isActive ? 'bg-purple-gradient' : 'text-gray-700'
                    }`}
                  >
                    <Link
                      className='font-semibold text-[16px] leading-[140%] flex size-full gap-4 p-4'
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt='logo'
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className='hidden w-full flex-col items-start gap-2 md:flex'>
              {navLinks.slice(6).map(link => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`flex justify-center items-center text-[16px] leading-[140%] font-semibold w-full whitespace-nowrap rounded-lg bg-cover transition-all hover:bg-purple-100 hover:shadow-inner group ${
                      isActive ? 'bg-purple-gradient' : 'text-gray-700'
                    }`}
                  >
                    <Link
                      className='font-semibold text-[16px] leading-[140%] flex size-full gap-4 p-4'
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt='logo'
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className='flex-center cursor-pointer gap-2 p-4'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
