'use client';

import React from 'react';
import { Skeleton } from '@nextui-org/react';

export default function PostShowSkeleton(): React.JSX.Element {
  return (
    <div className="m-4">
      <div className="m-2">
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="p-4 border rounded space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
      </div>
    </div>
  );
}
