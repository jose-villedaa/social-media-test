'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

export type LoadingButtonProps = {
  children: React.ReactNode;
};

export default function LoadingButton({ children }: LoadingButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
