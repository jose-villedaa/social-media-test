'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

export type LoadingButtonProps = {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default' | undefined;
  size?: 'md' | 'sm' | 'lg' | undefined;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
};

export default function LoadingButton({
  children,
  color,
  startContent,
  endContent,
  size,
}: LoadingButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isLoading={pending}
      color={color}
      startContent={startContent}
      endContent={endContent}
      size={size}
    >
      {children}
    </Button>
  );
}
