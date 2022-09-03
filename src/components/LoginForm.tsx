import { Button, Checkbox, Form, Input, Modal } from "antd";

export const LoginForm = ({
  isLoginFormModalVisible,
  handleOk,
  handleCancel,
}: any) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    handleOk(values);
    clearForm();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const clearForm = () => {
    form.setFieldsValue({
      username: "",
      password: "",
      remember: false,
    });
  };

  return (
    <Modal
      title="Đăng nhập"
      visible={isLoginFormModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="basic"
        // labelCol={{ span: "100%" }}
        // wrapperCol={{ span: "100%" }}
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
        style={{
          width: "100%",
        }}
      >
        <Form.Item
          label="Tài khoản"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ span: 16 }}
        >
          <Checkbox>Lưu đăng nhập</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
