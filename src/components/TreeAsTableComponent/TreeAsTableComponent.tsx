import { Table } from "antd";
import { useState, type FC } from "react";
import type { ITreeNode } from "../../interfaces";
import classes from './TreeAsTableComponent.module.scss';
import type { IDataItem } from "../../interfaces/data-item.interface";
import type { ColumnsType } from "antd/es/table";

interface Props {
  title: string;
  tree: ITreeNode | null;
}

export const TreeAsTableComponent: FC<Props> = ({title, tree }) => {
  const [dataSource, setDataSource] = useState<IDataItem[]>([])
  const [columns, setColumns] = useState<ColumnsType<IDataItem>>([])

  return (
    <div className={classes.container}>
        <Table 
          dataSource={dataSource} 
          columns={columns}
          pagination={false}
          showHeader={false}
          title={() => (
            <div style={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
              {title}
            </div>
          )}
          bordered
          className={classes.table}
        />
    </div>
  )
}
