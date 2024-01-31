import React from 'react';
import CommentShow from '@/components/comments/ShowComment';
import fetchCommentsByPostId from '@/db/queries/comment';

interface CommentListProps {
  postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null,
  );
  const renderedComments = topLevelComments.map((comment) => (
    <CommentShow
      key={comment.id}
      commentId={comment.id}
      postId={postId}
    />
  ));

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">
        All
        {comments.length}
        {' '}
        comments
      </h1>
      {renderedComments}
    </div>
  );
}
