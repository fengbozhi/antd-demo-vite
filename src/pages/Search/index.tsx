import { useState } from "react";
import { Card } from "antd";
import SearchForm from "./components/SearchForm";
import TableCard from "./components/TableCard";
import { StudentInfo } from "./type";
import "./index.css";

const Search = () => {
  const [params, setParams] = useState<StudentInfo>();

  return (
    <div>
      <Card className="search-card">
        <SearchForm onSearch={setParams} />
      </Card>
      <TableCard params={params} />
    </div>
  );
};

export default Search;
