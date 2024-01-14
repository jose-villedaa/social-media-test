'use client';

import React from 'react';
import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import * as actions from '@/actions';

export default function CreateForm(): JSX.Element {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.CreateTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-xl font-bold mb-2">Create a Topic</h3>
            <Input
              name="name"
              placeholder="Name"
              label="Name"
              labelPlacement="outside"
              required
            />
            <Textarea
              placeholder="Describe your topic"
              label="Description"
              labelPlacement="outside"
              name="description"
              required
            />
            <Button type="submit">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
