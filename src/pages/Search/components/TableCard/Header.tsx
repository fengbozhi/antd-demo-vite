/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-07-03 17:09:13
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-03 17:09:25
 * @FilePath: \antd-demo-vite\src\pages\Search\components\TableCard\Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Row, Col, Button } from "antd";
import "./index.css";

interface SearchHeaderProps {
  onOpen: () => void;
}

const SearchHeader = (props: SearchHeaderProps): JSX.Element => {
  const { onOpen } = props;

  return (
    <Row justify="space-between" align="middle">
      <Col span={5} className="header-left">
        查询表格
      </Col>
      <Col span={12} className="header-right" style={{ textAlign: "right" }}>
        <Button>刷新</Button>
        <Button type="primary" onClick={onOpen}>
          新建
        </Button>
      </Col>
    </Row>
  );
};

export default SearchHeader;
