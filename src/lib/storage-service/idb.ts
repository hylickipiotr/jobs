import * as JsStore from "jsstore";
import { IDataBase } from "jsstore";
import { offersTable } from "./Offers/offers.table";

const getWorkerPath = () => {
  if (process.env.NODE_ENV === "development") {
    return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
  } else {
    return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
  }
};

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
