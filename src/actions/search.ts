'use server';

import { redirect } from 'next/navigation';

async function search(formData: FormData) {
  const term = formData.get('term') as string;

  if (typeof term !== 'string' || !term) {
    redirect('/');
  }

  redirect(`/search?term=${term}`);
}

export default search;
