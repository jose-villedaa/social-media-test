import React from 'react';
import { Divider } from '@nextui-org/react';
import PostList from '@/components/Posts/ListPosts';
import CreateForm from '@/components/Topics/CreateForm';
import ListTopics from '@/components/Topics/ListTopics';
import { fetchTopPosts } from '@/db/queries/post';

export default function Home(): React.JSX.Element {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 m-4 rounded-md">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-4 px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg">Topics</h3>
          <CreateForm />
        </div>
        <Divider className="my-2" />
        <ListTopics />
      </div>
    </div>
  );
}
