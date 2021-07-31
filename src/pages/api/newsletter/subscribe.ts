import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).end("Method not allowed");
  }

  const { email } = request.body;

  try {
    await fauna.query(
      q.If(
        q.Not(
          q.Exists(q.Match(q.Index("subscriber_by_email"), q.Casefold(email)))
        ),
        q.Create(q.Collection("newsletter_subscribers"), {
          data: { email },
        }),
        q.Get(q.Match(q.Index("subscriber_by_email"), q.Casefold(email)))
      )
    );

    return response.status(200).json({ error: false });
  } catch (error) {
    console.error(JSON.stringify(error));
    return response.status(500).json({ error: true });
  }
};
