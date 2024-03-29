'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import HeaderAuth from '@/components/HeaderAuth';
import SearchInput from '@/components/SearchInput';

export default function Header(): React.JSX.Element {
  return (
    <Navbar className="mb-6 bg-blue-950">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          <Image src="/jeddit-white.png" alt="Jeddit Logo" width={120} height={120} />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <div className="">
            <Suspense fallback>
              <SearchInput />
            </Suspense>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
