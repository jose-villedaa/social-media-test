'use server';

import * as auth from '@/auth';

async function signOut() {
  return auth.signOut();
}

export default signOut;
