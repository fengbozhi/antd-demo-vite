/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-07-03 13:47:56
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-04 16:50:45
 * @FilePath: \antd-demo-vite\src\pages\Search\components\TableList\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Table, Card } from "antd";
import { useState, useEffect } from "react";
import { getList } from "@/services";
import Header from "./Header";
import EidtModel from "./EidtModel";
import { StudentInfo } from "../../type";

interface SearchFormProps {
  params?: StudentInfo;
}

const SearchForm = (props: SearchFormProps): JSX.Element => {
  const { params = {} } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [editObj, setEditObj] = useState<StudentInfo | {}>();

  const onOpen = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
    setEditObj({});
  };

  const onEdit = (obj: StudentInfo): void => {
    setEditObj(obj);
    setOpen(true);
  };

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
    },
    {
      title: "班级",
      dataIndex: "grade",
    },
    {
      title: "性别",
      dataIndex: "sex",
    },
    {
      title: "分数",
      dataIndex: "score",
    },
    {
      title: "地址",
      dataIndex: "address",
    },
    {
      title: "更新时间",
      dataIndex: "updateTime",
    },
    {
      title: "操作",
      dataIndex: "operation",
      render: (_: any, record: StudentInfo) => (
        <a onClick={(): void => onEdit(record)}>编辑</a>
      ),
    },
  ];

  const getData = async () => {
    const res = await getList(params);

    setData(res);
  };

  useEffect(() => {
    getData();
  }, [params]);

  return (
    <Card className="search-table">
      <Header onOpen={onOpen} />
      <Table dataSource={data} columns={columns} />
      <EidtModel
        open={open}
        onClose={onClose}
        params={editObj as StudentInfo}
      />
    </Card>
  );
};

export default SearchForm;
