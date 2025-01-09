import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const LocationCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
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
              { value: "On Office", label: "On Office" },
              { value: "On Store", label: "On Store" },
              { value: "Third Party", label: "Third Party" },
            ]}
            style={{ width: 200 }}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
