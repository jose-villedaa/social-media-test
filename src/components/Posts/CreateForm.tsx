'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import {
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Textarea,
} from '@nextui-org/react';

import * as actions from '@/actions';
import LoadingButton from '@components/common/LoadingButton';

interface PostCProps {
  slug: string;
}

export default function CreateForm({ slug }: PostCProps): React.JSX.Element {
  const [formState, action] = useFormState(
    actions.CreatePost.bind(null, slug),
    {
      errors: {},
    },
  );

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(', ')}
              name="title"
              title="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(', ')}
              name="content"
              title="Content"
              labelPlacement="outside"
              placeholder="Content"
            />

            {
              formState.errors.formErr
                ? (
                  <div className="mt-2 border-l-4 border-red-400 text-red-900 bg-red-100 p-3">
                    {formState.errors.formErr.join(', ')}
                  </div>
                )
                : null
            }

            <LoadingButton>Create Post</LoadingButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
