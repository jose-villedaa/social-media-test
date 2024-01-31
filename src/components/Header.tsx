'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
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
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <div className="container mx-auto">
            <Suspense>
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
