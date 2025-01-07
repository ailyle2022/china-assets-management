import { Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const CompanyShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: venderData, isLoading: venderIsLoading } = useOne({
      resource: "venders",
      id: record?.vender?.id || "",
      queryOptions: {
        enabled: !!record,
      },
    });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />
      <Title level={5}>{"Address"}</Title>
      <TextField value={record?.adress} />
      <Title level={5}>{"Contact"}</Title>
      <TextField value={record?.contact} />
      <Title level={5}>{"Email"}</Title>
      <TextField value={record?.email} />
      <Title level={5}>{"Vender"}</Title>
      <TextField
        value={
          venderIsLoading ? <>Loading...</> : <>{venderData?.data?.name}</>
        }
      />
    </Show>
  );
};
