import { Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const PurchaseOrderShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: companyData, isLoading: companyIsLoading } = useOne({
      resource: "companies",
      id: record?.company?.id || "",
      queryOptions: {
        enabled: !!record,
      },
    });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"OrderNumber"}</Title>
      <TextField value={record?.orderNumber} />
      <Title level={5}>{"Date"}</Title>
      <TextField value={record?.date} />
      <TextField
        value={
          companyIsLoading ? <>Loading...</> : <>{companyData?.data?.title}</>
        }
      />
    </Show>
  );
};
