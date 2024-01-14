'use client';

import React from 'react';
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
} from '@nextui-org/react';

import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

export default function HeaderAuth(): JSX.Element {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === 'loading') {
    authContent = <Spinner color="secondary" />;
  } else if (session?.data?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <div className="cursor-pointer hover:opacity-80">
            <Avatar src={session.data?.user?.image || ''} />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <div className="flex space-x-4">
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="flat">
              Sign in
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <Button type="submit" color="primary" variant="flat">
            Sign up
          </Button>
        </NavbarItem>
      </div>
    );
  }

  return authContent;
}
