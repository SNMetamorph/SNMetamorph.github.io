import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import UtterancesComments from "../../components/UtterancesComments";

export default function BlogPostItemWrapper(props) {
  const { metadata } = useBlogPost();
  const { comments = true } = metadata;
  return (
    <>
      <BlogPostItem {...props} />
      { metadata && comments && <UtterancesComments className="blog-post-comments"/> }
    </>
  );
}
