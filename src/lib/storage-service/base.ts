import { idbCon } from "./idb";
import { Connection } from "jsstore";

export class BaseService {
  get connection(): Connection {
    return idbCon;
  }
}
