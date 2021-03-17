import { DATA_TYPE, ITable } from "jsstore";

export const offersTable: ITable = {
  name: "offers",
  columns: {
    commonOfferId: {
      dataType: DATA_TYPE.String,
      primaryKey: true,
    },
    jobTitle: {
      dataType: DATA_TYPE.String,
    },
    employer: {
      dataType: DATA_TYPE.String,
    },
    companyProfileUrl: {
      dataType: DATA_TYPE.String,
    },
    companyId: {
      dataType: DATA_TYPE.Number,
    },
    logo: {
      dataType: DATA_TYPE.String,
    },
    lastPublicated: {
      dataType: DATA_TYPE.DateTime,
    },
    expirationDate: {
      dataType: DATA_TYPE.DateTime,
    },
    salary: {
      dataType: DATA_TYPE.String,
    },
    employmentLevel: {
      dataType: DATA_TYPE.String,
    },
    jobDescription: {
      dataType: DATA_TYPE.String,
    },
    offerType: {
      dataType: DATA_TYPE.Array,
    },
    optionalCv: {
      dataType: DATA_TYPE.Boolean,
    },
    countryName: {
      dataType: DATA_TYPE.String,
    },
    mainCategoriesIds: {
      dataType: DATA_TYPE.Array,
    },
    offers: {
      dataType: DATA_TYPE.Array,
    },
    typesOfContract: {
      dataType: DATA_TYPE.Array,
    },
    workSchedules: {
      dataType: DATA_TYPE.Array,
    },
    remoteWork: {
      dataType: DATA_TYPE.Boolean,
    },
    isRead: {
      dataType: DATA_TYPE.Boolean,
      default: false,
    },
    isSaved: {
      dataType: DATA_TYPE.Boolean,
      default: false,
    },
    rating: {
      dataType: DATA_TYPE.Number,
      default: 0,
    },
  },
};
