'use client';

import { useFormState } from 'react-dom';
import React from 'react';
import {
  Input,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import * as actions from '@/actions';
import LoadingButton from '@/components/common/LoadingButton';
import { Add } from '@mui/icons-material';

export default function CreateForm(): React.JSX.Element {
  const [formState, action] = useFormState(actions.CreateTopic, { errors: {} });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button onPress={onOpen} isIconOnly>
        <Add />
      </Button>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: 'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent className="flex flex-col items-center justify-center">
          {(onClose) => (
            <div className="flex flex-col items-center">
              <ModalHeader className="flex flex-col">Create a topic</ModalHeader>
              <ModalBody>
                <form action={action}>
                  <div className="flex flex-col gap-4 p-4 w-80">
                    <Input
                      name="name"
                      placeholder="Name the topic"
                      className="text-center"
                      labelPlacement="outside"
                      isInvalid={!!formState.errors.name}
                      errorMessage={formState.errors.name?.join(', ')}
                      required
                    />
                    <Textarea
                      placeholder="Describe your topic"
                      labelPlacement="outside"
                      name="description"
                      isInvalid={!!formState.errors.description}
                      errorMessage={formState.errors.description?.join(', ')}
                      required
                    />
                    {formState.errors.formErr ? (
                      <div
                        className="mt-2 border-l-4 border-red-400 text-red-900 bg-red-100 p-3"
                        role="alert"
                      >
                        {formState.errors.formErr?.join(', ')}
                      </div>
                    ) : null}
                    <LoadingButton color="primary" size="sm">
                      Create
                    </LoadingButton>
                    <Button color="danger" variant="ghost" onPress={onClose} size="sm">
                      Close
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
