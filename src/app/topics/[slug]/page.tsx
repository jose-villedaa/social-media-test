import React from 'react';
import CreateForm from '@/components/Posts/CreateForm';
import PostList from '@/components/Posts/ListPosts';
import fetchPostsByTopicSlug from '@/db/queries/post';

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) : React.JSX.Element {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">
          {slug}
        </h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div>
        <CreateForm slug={slug} />
      </div>
      <div />
    </div>
  );
}
