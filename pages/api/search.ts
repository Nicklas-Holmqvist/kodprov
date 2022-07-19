import parse from 'parse-link-header';
import type { NextApiRequest, NextApiResponse } from 'next';

import { IError, IExportData, IHouses, IPagination } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IExportData | IError>
) {
  const searchValue = req.body.searchValue.toLowerCase();

  const errorMsg: IError = {
    msg: 'No thrones to be found',
    status: false,
  };

  try {
    const response = await fetch(
      `https://www.anapioficeandfire.com/api/houses?name=house%20${searchValue}`
    );
    const data = await response.json();
    const pagination = parse(response.headers.get('Link'));
    const exportData: IExportData = {
      houses: data,
      status: true,
      links: pagination,
    };
    res.status(200).json(exportData);
  } catch (error) {
    res.status(400).json(errorMsg);
  }
}
