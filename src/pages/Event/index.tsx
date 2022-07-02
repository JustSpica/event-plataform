import { useParams, Navigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { gql, useQuery } from "@apollo/client";

import { Header, Sidebar, Video } from 'components';
import { useLayoutEffect } from "react";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    } 
  }
`

export interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[];
}

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return(
    <div className='flex flex-col min-h-screen'>
      {!data ? (
        <div className="flex h-screen items-center justify-center">
          <TailSpin color="#81D8F7"/>
        </div>
      ) : (
        <>
          <Header />
          <main className='flex flex-1'>
            {!slug 
              ? <Navigate to={`/event/lesson/${data.lessons[0].slug}`}/>
              : <Video slug={slug}/>
            }
            <Sidebar data={data}/>
          </main>
        </>
      )}
    </div>
  );
}