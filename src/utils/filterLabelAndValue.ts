import { LegacyDataNode } from "rc-tree-select/lib/interface";

export type FilterLabelAndValue = (
  input: string,
  child: LegacyDataNode | undefined
) => boolean;

export const filterLabelAndValue: FilterLabelAndValue = (input, child) =>
  !!String(child?.label).match(new RegExp(input, "i")) ||
  !!String(child?.value).match(new RegExp(input, "i"));
