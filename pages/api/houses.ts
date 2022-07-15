import type { NextApiRequest, NextApiResponse } from 'next';

import { IHouses } from '../../types';

interface IError {
  msg: string;
  status: boolean;
}

interface IExportData {
  houses: IHouses[];
  status: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IExportData | IError>
) {
  const page = req.body.page;
  const displayCount = req.body.displayCount;

  const errorMsg: IError = {
    msg: 'No thrones to be found',
    status: false,
  };

  try {
    const response = await fetch(
      `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${displayCount}`
    );
    const data = await response.json();
    const exportData: IExportData = {
      houses: data,
      status: true,
    };
    res.status(200).json(exportData);
  } catch (error) {
    res.status(400).json(errorMsg);
  }
}
