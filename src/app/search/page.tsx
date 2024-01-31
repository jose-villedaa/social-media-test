import { redirect } from 'next/navigation';
import PostList from '@/components/Posts/ListPosts';
import { fetchPostsBySearchTerm } from '@/db/queries/post';
import React from 'react';

export interface SearchPageProps {
  searchParams:{
    term: string
  }
}

export default function SearchPage({ searchParams }: SearchPageProps): React.JSX.Element {
  const { term } = searchParams;

  if (!term) {
    redirect('/');
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
