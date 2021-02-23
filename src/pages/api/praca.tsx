import axios from "axios";

import { NextApiHandler } from "next";
import { stringify } from "query-string";

const dataHandler: NextApiHandler = async ({ query }, res) => {
  const BASE_URL = "https://pracuj.pl/praca";
  const params = stringify(query, { arrayFormat: "comma" });
  const url = `${BASE_URL}?${params}`;

  const response = await axios.get(url);
  const html: string = response.data;
  const match = html.match(/window.__INITIAL_STATE__ = (\{.*\});/);
  if (!match) {
    res.status(202).json({});
    return;
  }

  const data = JSON.parse(match[1]);

  res.status(200).json(data);
};

export default dataHandler;
