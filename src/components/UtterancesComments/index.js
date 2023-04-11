import React, { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function UtterancesComments(props) {
  const { ...other } = props;
  const { colorMode } = useColorMode();
  const utterancesTheme = colorMode === "dark" ? "github-dark" : "github-light";
  const parentElement = React.createRef();

  useEffect(() => {
    // Ensure script is loaded with the correct params by removing cached element
    while (parentElement.current.firstChild) {
      parentElement.current.removeChild(parentElement.current.firstChild);
    }

    const utterances = document.createElement("script");
    utterances.setAttribute("src", "https://utteranc.es/client.js");
    utterances.setAttribute("repo", "SNMetamorph/SNMetamorph.github.io");
    utterances.setAttribute("issue-term", "pathname");
    utterances.setAttribute("label", "utterances-comments");
    utterances.setAttribute("theme", utterancesTheme);
    utterances.setAttribute("crossorigin", "anonymous");
    utterances.setAttribute("async", true);
    parentElement.current.appendChild(utterances);
  }, [utterancesTheme]);

  return (
    <div
      id="utterances-comments"
      ref={parentElement}
      {...other}
    />
  );
}
