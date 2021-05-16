import { NextApiRequest, NextApiResponse } from "next";
import { Document } from "@prismicio/client/types/documents";
import { getPrismicClient } from "../../services/prismic";

function linkResolver(document: Document) {
  if (document.type === "post") {
    return `/posts/${document.uid}`;
  }

  return "/";
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { token, documentId } = request.query;
  const prismic = getPrismicClient(request);

  const redirectURL = await prismic
    .getPreviewResolver(String(token), String(documentId))
    .resolve(linkResolver, "/");

  if (!redirectURL) {
    return response.status(401).json({ message: "Invalid token" });
  }

  response.setPreviewData({ ref: token });

  response.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectURL}" />
    <script>window.location.href = '${redirectURL}'</script>
    </head>`
  );
  return response.end();
};
