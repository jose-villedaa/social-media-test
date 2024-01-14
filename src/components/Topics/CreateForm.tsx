'use client';

import { useFormState } from 'react-dom';
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
import LoadingButton from '@/components/common/LoadingButton';

export default function CreateForm(): JSX.Element {
  const [formState, action] = useFormState(actions.CreateTopic, { errors: {} });

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-xl font-bold mb-2">Create a Topic</h3>
            <Input
              name="name"
              placeholder="Name"
              label="Name"
              labelPlacement="outside"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
              required
            />
            <Textarea
              placeholder="Describe your topic"
              label="Description"
              labelPlacement="outside"
              name="description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
              required
            />
            {formState.errors.formErr ? (
              <div className="mt-2 border-l-4 border-red-400 text-red-900 bg-red-100 p-3" role="alert">
                {' '}
                {formState.errors.formErr?.join(', ')}
                {' '}
              </div>
            ) : null}
            <LoadingButton>
              Create
            </LoadingButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
