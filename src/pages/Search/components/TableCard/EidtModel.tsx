/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-07-03 17:09:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-04 17:01:08
 * @FilePath: \antd-demo-vite\src\pages\Search\components\TableCard\EidtModel.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect } from "react";
import { Modal, Button, Form, Input, InputNumber, Select } from "antd";
import { StudentInfo } from "../../type";

interface EidtModelProps {
  open: boolean;
  onClose: () => void;
  params?: StudentInfo;
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EidtModel = (props: EidtModelProps): JSX.Element => {
  const { open, onClose, params } = props;
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const sexOptions = [
    { value: "male", label: "男" },
    { value: "female", label: "女" },
  ];

  const onSave = (values: StudentInfo) => {
    console.log("firstName", values);
    onClose();
  };

  const onCancel = () => {
    setFieldsValue({});
    onClose();
  };

  console.log("params", params);

  //   useEffect(() => {
  //     setFieldsValue(params);
  //   }, [params]);

  return (
    <Modal
      title="编辑"
      open={open}
      footer={null}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form form={form} onFinish={onSave}>
        <Form.Item label="姓名" name="name" required>
          <Input placeholder="请输入..." />
        </Form.Item>
        <Form.Item label="班级" name="grade" required>
          <Input placeholder="请输入..." />
        </Form.Item>
        <Form.Item label="地址" name="address">
          <Input placeholder="请输入..." />
        </Form.Item>
        <Form.Item label="性别" name="sex">
          <Select
            style={{ width: "100%" }}
            allowClear
            options={sexOptions}
            placeholder="请选择..."
          />
        </Form.Item>
        <Form.Item label="分数 " name="score" required>
          <InputNumber style={{ width: "100%" }} placeholder="请输入..." />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
          <Button
            htmlType="button"
            onClick={onCancel}
            style={{ margin: "0 8px" }}
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EidtModel;
