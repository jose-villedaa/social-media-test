import React from 'react';

interface PostShowProps {
  post: {
    title: string;
    content: string;
  };
}

export default function PostShow({ post }: PostShowProps) {
  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold my-2">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
}
