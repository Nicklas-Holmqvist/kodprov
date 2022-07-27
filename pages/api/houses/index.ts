import parse from 'parse-link-header';
import type { NextApiRequest, NextApiResponse } from 'next';

import { Error, ExportData } from '../../../types/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExportData | Error>
) {
  const page = req.body.page;
  const pageSize = req.body.pageSize;

  const errorMsg: Error = {
    msg: 'No thrones to be found',
    status: false,
  };

  try {
    const response = await fetch(
      `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`
    );
    const data = await response.json();
    const pagination: parse.Links | null = parse(response.headers.get('Link'));
    const exportData: ExportData = {
      houses: data,
      status: true,
      links: pagination,
    };
    res.status(200).json(exportData);
  } catch (error) {
    res.status(500).json(errorMsg);
  }
}
