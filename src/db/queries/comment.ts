import type { Comment } from '@prisma/client';
import { cache } from 'react';
import db from '@/db';

export type CommentWithUser = (
    Comment & {
      user: {
        name: string | null;
        image: string | null;
      };
    }
);

const fetchCommentsByPostId = cache(
  (postId: string): Promise<CommentWithUser[]> => db.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  }),
);

export default fetchCommentsByPostId;
