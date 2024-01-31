import React, { Suspense } from 'react';
import Link from 'next/link';
import paths from '@/paths';
import PostShowSkeleton from '@/components/Posts/PostShowSkeleton';
import PostShow from '@/components/Posts/ShowPost';
import CommentList from '@/components/comments/ListComments';
import CommentCreateForm from '@/components/comments/CreateComment';

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'<- '}
        Back to
        {' '}
        {slug}
      </Link>
      <Suspense fallback={<PostShowSkeleton />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
