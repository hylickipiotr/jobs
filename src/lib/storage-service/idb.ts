import * as JsStore from "jsstore";
import { IDataBase } from "jsstore";
import { offersTable } from "./Offers/offers.table";

const workerPath = "jsstore.worker.js"
export let idbCon;
export const dbname = "jobs";

export const getDatabase = (): IDataBase => ({
  name: dbname,
  tables: [offersTable],
});

export const initJsStore = () => {
  try {
    const dataBase = getDatabase();
    idbCon = new JsStore.Connection(new Worker(workerPath));
    idbCon.initDb(dataBase);
  } catch (err) {
    console.error(err);
  }
};
