import type { ITreeData } from "../interfaces";


export const simpleTreeData: ITreeData =   {
  title: 'Пример дерева',
  id: 'ca8a8612-e0eb-4428-ac07-e2e9386984738597',
  tree: {
    val: 1,
    id: '84b70dd1-376d-4795-b3d4-0a0a32663008',
    children: [
      {
        val: 2,
        id: '5d8a7729-728c-455c-a576-ddab5bb32908',
        children: [
          {
            val: 4,
            id: '517eb8fb-8e8f-4e4f-9c2b-748a03a7bbed'
          }
        ]
      },
      {
        val: 3,
        id: '54cad34d-de38-4e98-b2f3-b2f68ce32c1a'
      },
    ]
  }
}