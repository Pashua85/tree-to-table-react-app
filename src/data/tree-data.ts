import type { ITreeData } from "../interfaces";
import { animalsData } from "./animalsTree";
import { breedsData } from "./breedsTree";
import { numbersTreeData } from "./numbersTreeData";
import { simpleTreeData } from "./simpleTreeData";
import { sportsData } from "./sportsTree";
import { unbalancedTree } from "./unbalancedTree";


export const mockData: ITreeData[] = [
  simpleTreeData,
  numbersTreeData,
  breedsData,
  animalsData,
  sportsData,
  unbalancedTree,
];