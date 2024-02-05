'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { Textarea, Button } from '@nextui-org/react';
import * as actions from '@/actions';
import LoadingButton from '@components/common/LoadingButton';

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen,
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    actions.CreateComment.bind(null, { postId, parentId }),
    { errors: {} },
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form action={action} ref={ref}>
      <div className="space-y-2 px-1">
        <Textarea
          name="content"
          placeholder="Enter your comment"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(', ')}
        />

        {formState.errors.formErr ? (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors.formErr?.join(', ')}
          </div>
        ) : null}

        <LoadingButton color="default">Create Comment</LoadingButton>
      </div>
    </form>
  );

  return (
    <div>
      <Button
        size="sm"
        variant="light"
        className="text-blue-500 hover:bg-white "
        onClick={() => setOpen(!open)}
      >
        Reply
      </Button>
      {open && form}
    </div>
  );
}
