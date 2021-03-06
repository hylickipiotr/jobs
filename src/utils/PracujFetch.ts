import axios from "axios";
import { stringify } from "querystring";

export type PracujScrapperParams = {
  category?: string[];
  region?: string[];
  rangeDistance?: number;
};

export type PracujScrapperOptions = {
  params: PracujScrapperParams;
};

const paramsSchema: Record<keyof PracujScrapperParams, string> = {
  category: "cc",
  region: "r",
  rangeDistance: "rd",
};

export class PracujScrapper {
  API_URL = "/api/praca";

  params: PracujScrapperParams = {};

  constructor(options?: PracujScrapperOptions) {
    if (options && options.params) {
      this.params = options.params;
    }
  }

  private static mapPracujParams(
    params: PracujScrapperParams
  ): Record<string, URLSearchParams> {
    return Object.keys(params).reduce(
      (result, key) => ({
        ...result,
        [paramsSchema[key as keyof PracujScrapperParams]]:
          params[key as keyof PracujScrapperParams],
      }),
      {}
    );
  }

  static cacheResponse() {
    // TODO: Caching respone in localstorage for specific time 5 minutes;
  }

  async scrapePage(page?: number): Promise<Pracuj.Resonse | null> {
    const params = stringify({
      ...PracujScrapper.mapPracujParams(this.params),
      pn: page || 1,
    });
    const url = `${this.API_URL}?${params}`;
    const response = await axios.get(url);
    return response.data;
  }
}
