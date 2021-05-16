import { useEffect } from "react";

export function Comments() {
  useEffect(() => {
    let script = document.createElement("script");
    let anchor = document.getElementById("inject-comments-for-utterances");

    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("repo", "joaopcm/website-comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "utterances");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");

    anchor.appendChild(script);
  }, []);

  return <div id="inject-comments-for-utterances"></div>;
}
