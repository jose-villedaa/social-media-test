'use server';

import React from 'react';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';
import paths from '@/paths';
import db from '@/db';

export default async function ListTopics() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => (
    <div key={topic.id}>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color="primary" variant="dot">
          {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1).toLowerCase()}
        </Chip>
      </Link>
    </div>
  ));

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {renderedTopics}
    </div>
  );
}
