'use server';

import { z } from 'zod';
import { auth } from '@/auth';
import type { Topic } from '@prisma/client';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import db from '@/db';
import paths from '@/paths';

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: 'Must be lowercase letters or dashes without spaces' })
    .max(20),
  description: z.string().min(10).max(100),
});

type CreateTopicState = {
  errors: {
    name?: string[];
    description?: string[];
    formErr?: string[];
  };
};

export default async function createTopic(
  formState: CreateTopicState,
  formData: FormData,
): Promise<CreateTopicState> {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        formErr: ['You must be logged in to create a topic'],
      },
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          formErr: [err.message],
        },
      };
    }
    return {
      errors: {
        formErr: ['An unknown error occurred'],
      },
    };
  }

  revalidatePath(paths.home());
  redirect(paths.topicShow(topic.slug));

  return {
    errors: {},
  };
}
