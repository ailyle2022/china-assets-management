import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const CompanyEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: venderSelectProps } = useSelect({
      resource: "venders",
      optionLabel: "name",
      optionValue: "id"
    });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Name"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Address"}
          name={["address"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Contact"}
          name={["contatct"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Email"}
          name={["email"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Vender"}
          name={["vender", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...venderSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
