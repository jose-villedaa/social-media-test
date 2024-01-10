'use client';

import React from 'react';

import { NextUIProvider } from '@nextui-org/react';

export type UIProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children } : UIProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
