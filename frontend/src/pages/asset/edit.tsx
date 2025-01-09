import { Edit, useForm, useSelect } from "@refinedev/antd";
import { DatePicker, Form, Input, InputNumber, Select } from "antd";
import dayjs from "dayjs";

export const AssetEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: locationSelectProps } = useSelect({
    resource: "locations",
    optionLabel: "name",
    optionValue: "id"
  });

  const { selectProps: purchaseOrderSelectProps } = useSelect({
    resource: "purchase-orders",
    optionLabel: "orderNumber",
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
          label={"PurchaseOrder"}
          name={["purchaseOrder", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...purchaseOrderSelectProps} />
        </Form.Item>
        <Form.Item
          label={"LocalPrice"}
          name={["localPrice"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label={"LocalCurrency"}
          name={["localCurrency"]}
          initialValue={"CNY"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={"CNY"}
            options={[
              { value: "CNY", label: "CNY" },
              { value: "JPY", label: "JPY" },
              { value: "HKD", label: "HKD" },
              { value: "KRW", label: "KRW" },
              { value: "AUD", label: "AUD" },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>
        <Form.Item
          label={"SerialNumber"}
          name={["serialNumber"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"AssetNumber"}
          name={["assetNumber"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Description"}
          name={["description"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"WarrantyExpiry"}
          name={["warrantyExpiry"]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <DatePicker format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
      </Form>

    </Edit>
  );
};
