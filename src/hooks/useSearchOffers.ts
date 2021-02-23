import { useEffect } from "react";

export const useJobOffers = () => {
  useEffect(() => {
    const main = async () => {
      if (!url) return;
      setIsSearching(true);

      const _pagesAmount = await getPagesAmount(url);
      setPages(_pagesAmount);

      if (!pages) {
        setIsSearching(false);
        setCurrentPage(null);
        return;
      }

      for (let page = 1; page <= pages; page++) {
        const _url = currentPage === 1 ? url : `${url}&pn=${page}`;
        const _jobOffers = await getJobOffers(_url);
        setJobOffers((currentJobOffers) => [
          ...currentJobOffers,
          ..._jobOffers.map<JobOffer>(({ url, title }) => ({
            id: url,
            title,
            isReaded: false,
            isArchived: false,
          })),
        ]);
      }

      setIsSearching(false);
    };

    main();
  }, [url]);
};
