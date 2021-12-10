// pages/index.js
import { GetStaticProps } from 'next'
import Link from "next/link"
import React from 'react'

import client from "lib/client"
import { Content } from "type/fetchData";

type Props = {
  blogs: Array<Content>
}

const Home:React.VFC<Props> = ({blogs}) => {

  return (
    <>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.get({ endpoint: "myblog" })

  return {
    props: {
      blogs: blogData.contents,
    }
  }
}