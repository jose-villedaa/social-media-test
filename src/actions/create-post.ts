'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { auth } from '@/auth';
import db from '@/db';
import paths from '@/paths';
import type { Post } from '@prisma/client';

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

export interface CreatePostFormState {
  errors: {
    title?: string[],
    content?: string[],
    formErr?: string[];
  },
}

let post: Post;

async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData,
): Promise<CreatePostFormState> {
  const res = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  const topic = await db.topic.findFirst({
    where: {
      slug,
    },
  });

  console.log('slug:', slug);

  console.log(topic);

  if (!topic) {
    return {
      errors: {
        formErr: ['Topic not found'],
      },
    };
  }

  if (!res.success) {
    return {
      errors: res.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        formErr: ['You must be logged in to create a post'],
      },
    };
  }

  try {
    post = await db.post.create({
      data: {
        title: res.data.title,
        content: res.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      return {
        errors: {
          formErr: [err.message],
        },
      };
    }
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));

  return {
    errors: {},
  };
}

export default createPost;
