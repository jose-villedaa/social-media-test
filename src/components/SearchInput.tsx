'use client';

import React from 'react';
import * as actions from '@/actions';
import CustomInput from '@components/variants/CustomInput';
import { useSearchParams } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput(): React.JSX.Element {
  const searchParams = useSearchParams();

  return (
    <div>
      <form action={actions.search}>
        <CustomInput
          name="term"
          defaultValue={searchParams.get('term') || ''}
          placeholder="Search a post..."
          radius="md"
          size="md"
          startContent={<SearchIcon color="disabled" />}
        />
      </form>
    </div>
  );
}
