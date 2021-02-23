import { DataNode } from "rc-tree-select/lib/interface";

export const categories: DataNode[] = [
  {
    label: "Administracja biurowa",
    value: "5001",
    key: "5001",
    children: [
      {
        label: "Sekretariat / Recepcja",
        value: "5001001",
        key: "5001001",
      },
      {
        label: "Stanowiska asystenckie",
        value: "5001002",
        key: "5001002",
      },
      {
        label: "Tłumaczenia / Korekta",
        value: "5001003",
        key: "5001003",
      },
      {
        label: "Wprowadzanie / Przetwarzanie danych",
        value: "5001004",
        key: "5001004",
      },
      {
        label: "Wsparcie administracyjne",
        value: "5001005",
        key: "5001005",
      },
      {
        label: "Zarządzanie biurem i administracją",
        value: "5001006",
        key: "5001006",
      },
    ],
  },
  {
    label: "Badania i rozwój",
    value: "5002",
    key: "5002",
    children: [
      {
        label: "Business Intelligence / Data Warehouse",
        value: "5002001",
        key: "5002001",
      },
      {
        label: "Chemia przemysłowa",
        value: "5002002",
        key: "5002002",
      },
      {
        label: "Farmaceutyka / Biotechnologia",
        value: "5002003",
        key: "5002003",
      },
      {
        label: "FMCG",
        value: "5002004",
        key: "5002004",
      },
      {
        label: "Tworzywa sztuczne",
        value: "5002006",
        key: "5002006",
      },
    ],
  },
  {
    label: "Bankowość",
    value: "5003",
    key: "5003",
    children: [
      {
        label: "Analiza / Ryzyko",
        value: "5003001",
        key: "5003001",
      },
      {
        label: "Bankowość detaliczna",
        value: "5003002",
        key: "5003002",
      },
      {
        label: "Bankowość inwestycyjna",
        value: "5003003",
        key: "5003003",
      },
      {
        label: "Bankowość korporacyjna / SME",
        value: "5003004",
        key: "5003004",
      },
      {
        label: "Pośrednictwo finansowe",
        value: "5003005",
        key: "5003005",
      },
    ],
  },
];
