export interface ITreeNode {
  val: string | number;
  id: string;
  children?: ITreeNode[]
}

export interface ITreeData {
  id: string;
  title: string;
  tree: ITreeNode;
}