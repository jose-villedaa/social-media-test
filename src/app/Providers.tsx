'use client';

import React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

export type UIProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children } : UIProviderProps) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
