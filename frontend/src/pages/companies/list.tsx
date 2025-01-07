import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { useMany, type BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const CompanyList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: venderData, isLoading: venderIsLoading } = useMany({
      resource: "venders",
      ids:
        tableProps?.dataSource
          ?.map((item) => item?.vender?.id)
          .filter(Boolean) ?? [],
      queryOptions: {
        enabled: !!tableProps?.dataSource,
      },
    });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column dataIndex="address" title={"Address"} />
        <Table.Column dataIndex="contact" title={"Contact"} />
        <Table.Column dataIndex="email" title={"Email"} />
        <Table.Column
          dataIndex={"vender"}
          title={"Vender"}
          render={(value) =>
            venderIsLoading ? (
              <>Loading...</>
            ) : (
              venderData?.data?.find((item) => item.id === value?.id)?.title
            )
          }
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
