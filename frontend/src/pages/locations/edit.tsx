import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const LocationEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

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
          label={"Type"}
          name={["type"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={"On"}
            options={[
              { value: "On", label: "On" },
              { value: "Third party", label: "Third party" },
            ]}
            style={{ width: 200 }}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
