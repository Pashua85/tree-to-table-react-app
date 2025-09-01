import { TreeAsTableComponent } from "./components/TreeAsTableComponent";
import { useEffect, useState } from "react";
import type { ITreeNode } from "./interfaces";
import classes from './App.module.scss';
import { Select } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import { mockData } from "./data/tree-data";


function App() {
  const [selectedTree, setSelectedTree] = useState<ITreeNode | null>(null);
  const [treeTitle, setTreeTitle] = useState<string>('');
  const [options, setOptions] = useState<DefaultOptionType[]>([]);
  const [selectedDataId, setSelectedDataId] = useState<string | undefined>();


  useEffect(() => {
    setOptions(mockData.map(item => ({
      value: item.id,
      label: item.title
    })))
    setSelectedTree(mockData[0].tree);
    setTreeTitle(mockData[0].title);
    setSelectedDataId(mockData[0].id);
  }, [])

  const handleChange = (value: string) => {
    const found = mockData.find(item => item.id === value);
    if (found) {
      setTreeTitle(found.title);
      setSelectedTree(found.tree);
      setSelectedDataId(found.id)
    }
  }

  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <div className={classes.selectWrapper}>
            <Select 
              className={classes.select} 
              options={options}
              value={selectedDataId}
              optionLabelProp="label"
              optionFilterProp="label"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <TreeAsTableComponent
        title={treeTitle}
        tree={selectedTree}
       />

    </>
  )
}

export default App
