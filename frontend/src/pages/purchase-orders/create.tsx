import { Create, useForm, useSelect } from "@refinedev/antd";
import { DatePicker, Form, Input, Select } from "antd";

export const PurchaseOrderCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: companySelectProps } = useSelect({
    resource: "companies",
    optionLabel: "name",
    optionValue: "id"
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"OrderNumber"}
          name={["orderNumber"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Date"}
          name={["date"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Company"}
          name={["company", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...companySelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
