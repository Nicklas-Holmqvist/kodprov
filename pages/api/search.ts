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
    const exportData: IExportData = {
      houses: data,
      status: response.ok,
    };
    res.status(200).json(exportData);
  } catch (error) {
    res.status(400).json(errorMsg);
  }
}
