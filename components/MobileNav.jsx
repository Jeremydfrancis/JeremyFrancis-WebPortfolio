'use client';

import React, { memo, useRef, useEffect } from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

function MobileNav() {
  const pathName = usePathname();
  const firstMenuItemRef = useRef(null);

  // Handle focus when the menu opens
  useEffect(() => {
    if (firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, []);

  return (
    <Sheet>
      <SheetTrigger
        id='mobile-menu-button'
        aria-label='Open mobile menu'
        className='flex justify-center items-center'
        aria-expanded={false} // Update dynamically
      >
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col' role='dialog' aria-labelledby='mobile-menu-title'>
        {/* LOGO */}
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/' aria-label='Homepage'>
            <h1 id='mobile-menu-title' className='text-4xl font-semibold'>
              Jeremy<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        {/* LINKS */}
        <nav className='flex flex-col justify-center items-center gap-8' role='navigation'>
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`${
                  link.path === pathName
                    ? 'text-accent border-b-2 border-accent'
                    : ''
                } text-xl capitalize hover:text-accent transition-all`}
                ref={index === 0 ? firstMenuItemRef : null} // Set focus to the first item
                aria-current={link.path === pathName ? 'page' : undefined}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default memo(MobileNav);
