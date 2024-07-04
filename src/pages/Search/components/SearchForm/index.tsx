import { Button, Form, Input, Select } from "antd";

interface SearchFormProps {
  onSearch: (values: any) => void; // 查询回调函数
}

const SearchForm = (props: SearchFormProps): JSX.Element => {
  const { onSearch } = props;
  const [form] = Form.useForm();
  const sexOptions = [
    { value: "male", label: "男" },
    { value: "female", label: "女" },
  ];

  return (
    <Form form={form} layout="inline" onFinish={onSearch}>
      <Form.Item label="姓名" name="name">
        <Input placeholder="请输入..." />
      </Form.Item>
      <Form.Item label="班级" name="grade">
        <Input placeholder="请输入..." />
      </Form.Item>
      <Form.Item label="地址" name="address">
        <Input placeholder="请输入..." />
      </Form.Item>
      <Form.Item label="性别" name="sex">
        <Select style={{ width: 120 }} allowClear options={sexOptions} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
