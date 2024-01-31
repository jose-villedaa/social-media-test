import db from '@/db';

export type PostWithData = Awaited<
ReturnType<typeof fetchPostsByTopicSlug>
>[number];

export const fetchPostsByTopicSlug = (slug: string) => db.post.findMany({
  where: { topic: { slug } },
  include: {
    topic: { select: { slug: true } },
    user: { select: { name: true } },
    _count: { select: { comments: true } },
  },
});

export const fetchPostsBySearchTerm = (term: string): Promise<PostWithData[]> => db.post.findMany({
  include: {
    topic: { select: { slug: true } },
    user: { select: { name: true, image: true } },
    _count: { select: { comments: true } },
  },
  where: {
    OR: [
      { title: { contains: term } },
      { content: { contains: term } },
    ],
  },
});

export const fetchTopPosts = (): Promise<PostWithData[]> => db.post.findMany({
  orderBy: [
    {
      comments: {
        _count: 'desc',
      },
    },
  ],
  include: {
    topic: { select: { slug: true } },
    user: { select: { name: true, image: true } },
    _count: { select: { comments: true } },
  },
  take: 5,
});
