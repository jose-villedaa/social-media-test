'use client';

import React from 'react';
import {
  NavbarItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  CircularProgress,
  User,
} from '@nextui-org/react';

import { useSession } from 'next-auth/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as actions from '@/actions';

export default function HeaderAuth(): JSX.Element {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === 'loading') {
    authContent = <CircularProgress color="primary" />;
  } else if (session?.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <div className="cursor-pointer hover:opacity-80">
            <User
              name={session.data.user.name}
              description={session.data.user.email}
              avatarProps={{
                src: session.data.user.image || '',
              }}
            />
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
            <Button type="submit" variant="flat" endContent={<GitHubIcon />}>
              Sign in with GitHub
            </Button>
          </form>
        </NavbarItem>
      </div>
    );
  }

  return authContent;
}
