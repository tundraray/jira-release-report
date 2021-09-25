// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import JiraService from "../../../services/jira";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;
  const versions = await JiraService.lookupTasksByVersions(id as string);
  res.status(200).json(versions);
}
