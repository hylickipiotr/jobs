import * as JsStore from "jsstore";
import { IDataBase } from "jsstore";
import { offersTable } from "./Offers/offers.table";

const getWorkerPath = () =>
  require("worker-loader!jsstore/dist/jsstore.worker.js");

const workerPath = getWorkerPath();

export const idbCon = new JsStore.Connection(new Worker(workerPath));
export const dbname = "jobs";

export const getDatabase = (): IDataBase => ({
  name: dbname,
  tables: [offersTable],
});

export const initJsStore = () => {
  try {
    const dataBase = getDatabase();
    idbCon.initDb(dataBase);
  } catch (err) {
    console.error(err);
  }
};
