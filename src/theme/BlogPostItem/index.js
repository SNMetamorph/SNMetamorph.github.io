import React, { useEffect, useRef } from "react";
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from "@docusaurus/theme-common/internal";
import { useColorMode } from "@docusaurus/theme-common";

export default function BlogPostItemWrapper(props) {
  const { colorMode } = useColorMode();
  const { isBlogPostPage } = useBlogPost();
  const utterancesTheme = colorMode === "dark" ? "github-dark" : "github-light";
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isBlogPostPage) 
      return;

    const utterancesSelector = "iframe.utterances-frame";
    const utterancesEl = containerRef.current.querySelector(utterancesSelector);
    const createUtterancesEl = () => {
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "SNMetamorph/SNMetamorph.github.io");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("label", "utterances-comments");
      script.setAttribute("theme", utterancesTheme);
      script.crossOrigin = "anonymous";
      script.async = true;

      containerRef.current.appendChild(script);
    };

    const postThemeMessage = () => {
      const message = {
        type: "set-theme",
        theme: utterancesTheme,
      };
      utterancesEl.contentWindow.postMessage(message, "https://utteranc.es");
    };

    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [utterancesTheme]);

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <div ref={containerRef} />}
    </>
  );
}
