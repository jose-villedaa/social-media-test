'use client';

import React from 'react';
import * as actions from '@/actions';
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

export default function SearchInput(): React.JSX.Element {
  const searchParams = useSearchParams();
  return (
    <div>
      <form action={actions.search}>
        <Input name="term" defaultValue={searchParams.get('term') || ''} />
      </form>
    </div>
  );
}
