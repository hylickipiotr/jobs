declare module Pracuj {
  export interface RegionOffer {
    offerId: number;
    offerUrl: string;
    regionName: string;
    cities: string[];
    label: string;
  }

  export interface Offer {
    commonOfferId: string;
    jobTitle: string;
    employer: string;
    companyProfileUrl: string;
    companyId: number;
    logo: string;
    lastPublicated: Date;
    expirationDate: Date;
    salary: string;
    employmentLevel: string;
    jobDescription: string;
    offerType: string[];
    optionalCv: boolean;
    countryName: string;
    mainCategoriesIds: number[];
    offers: RegionOffer[];
    typesOfContract: string[];
    workSchedules: string[];
    remoteWork: boolean | string;
  }

  export interface OffersCounts {
    offersTotalCount: number;
    commonOffersTotalCount: number;
    offersPageCount: number;
    commonOffersPageCount: number;
  }

  export interface SearchParams {
    workplace: any[];
    keyword: any[];
    radius: number;
    categories: number[];
    categoriesNames: string[];
    regions: any[];
    regionsNames: any[];
    countries: any[];
    countriesNames: any[];
    employers: any[];
    employmentTypes: number[];
    fromAdp: string;
    contractTypes: number[];
    remoteWork: string;
    isRemoteRecruitment: string;
  }

  export interface Child {
    link: string;
    label: string;
  }

  export interface Breadcrumb {
    link: string;
    label: string;
    childs: Child[];
  }

  export interface Event {}

  export interface Page {
    pageNumber: number;
    isCurrent: boolean;
    isDotSeparator: boolean;
    pageUrl: string;
  }

  export interface Pagination {
    previousPageLinkVisible: boolean;
    previousPageUrl: string;
    pages: Page[];
    currentPageNumber: number;
    maxPages: number;
    nextPageLinkVisible: boolean;
    nextPageUrl: string;
    showPagination: boolean;
  }

  export interface Category {
    key: number;
    value: string;
  }

  export interface Country {
    key: number;
    value: string;
  }

  export interface EmploymentType {
    key: number;
    value: string;
  }

  export interface Region {
    key: number;
    value: string;
  }

  export interface Period {
    key: number;
    value: string;
  }

  export interface TypesOfContract {
    key: number;
    value: string;
  }

  export interface WorkSchedule {
    key: number;
    value: string;
  }

  export interface Dictionaries {
    categories: Category[];
    countries: Country[];
    employmentTypes: EmploymentType[];
    regions: Region[];
    periods: Period[];
    typesOfContract: TypesOfContract[];
    workSchedules: WorkSchedule[];
  }

  export interface User {
    isLogged: boolean;
    userId: string;
    identity: string;
    isMobile: boolean;
    sysMobile: string;
    isFromCriteo: boolean;
  }

  export interface ResultsHeaderModel {
    offersTotalCount: number;
    showHeader: boolean;
    viewType: number;
    showKeywords: boolean;
    fullKeywordText: string;
    preHeadText: string;
  }

  export interface MetaTags {
    title: string;
    description: string;
    shouldBeIndexed: boolean;
    canonicalUrl: string;
    headText: string;
    preHeadText: string;
    showHeadText: boolean;
  }

  export interface HiringOrganization {
    "@type": string;
    name: string;
  }

  export interface Address {
    "@type": string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  }

  export interface JobLocation {
    "@type": string;
    address: Address;
  }

  export interface Value {
    "@type": string;
    unitText: string;
    minValue: number;
    maxValue: number;
  }

  export interface BaseSalary {
    "@type": string;
    currency: string;
    value: Value;
  }

  export interface SeoOffer {
    "@context": string;
    "@type": string;
    title: string;
    description: string;
    datePosted: string;
    validThrough: string;
    hiringOrganization: HiringOrganization;
    jobLocation: JobLocation;
    baseSalary: BaseSalary;
  }

  export interface SmartFilterItem {
    label: string;
    url: string;
  }

  export interface Resonse {
    offers: Offer[];
    recommendedOffers: any[];
    offersTotalCount: number;
    commonOffersTotalCount: number;
    offersCounts: OffersCounts;
    searchParams: SearchParams;
    breadcrumbs: Breadcrumb[];
    event: Event;
    positionedOffers: any[];
    pagination: Pagination;
    dictionaries: Dictionaries;
    user: User;
    resultsHeaderModel: ResultsHeaderModel;
    metaTags: MetaTags;
    seoOffers: SeoOffer[];
    smartFilterItems: SmartFilterItem[];
    isAppBannerModificator: boolean;
  }
}
