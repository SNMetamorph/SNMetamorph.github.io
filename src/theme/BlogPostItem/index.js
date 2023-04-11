import React from "react";
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from "@docusaurus/theme-common/internal";
import UtterancesComments from "../../components/UtterancesComments";

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();
  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <UtterancesComments />}
    </>
  );
}
