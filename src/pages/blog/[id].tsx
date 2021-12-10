import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'

import { Content } from "type/fetchData"
import client from "lib/client"
import { ParsedUrlQuery } from 'querystring'

type Props = {
  blog: Content
}

interface Params extends ParsedUrlQuery {
  id: string,
}


const BlogId: React.VFC<Props> = ({ blog }) => {
  return (
    <>
      <main>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
    </>
  )
}

export default BlogId

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "myblog" });

  const paths = data.contents.map((content: Content) => `/blog/${content.id}`);
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params!.id;
  const blog = await client.get({ endpoint: "myblog", contentId: id });

  return {
    props: { blog },
  }
}