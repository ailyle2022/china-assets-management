import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const VenderShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />
      <Title level={5}>{"Address"}</Title>
      <TextField value={record?.address} />
      <Title level={5}>{"Contact"}</Title>
      <TextField value={record?.contact} />
      <Title level={5}>{"Email"}</Title>
      <TextField value={record?.email} />
    </Show>
  );
};
