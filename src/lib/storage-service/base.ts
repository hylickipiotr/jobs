/* eslint-disable class-methods-use-this */
import { Connection } from "jsstore";
import { idbCon } from "./idb";

export class BaseService {
  get connection(): Connection {
    return idbCon;
  }
}
