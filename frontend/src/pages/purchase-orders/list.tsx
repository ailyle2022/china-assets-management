import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { useMany, type BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const PurchaseOrderList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: companyData, isLoading: companyIsLoading } = useMany({
      resource: "companies",
      ids:
        tableProps?.dataSource
          ?.map((item) => item?.company?.id)
          .filter(Boolean) ?? [],
      queryOptions: {
        enabled: !!tableProps?.dataSource,
      },
    });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column
          dataIndex={"company"}
          title={"Company"}
          render={(value) =>
            companyIsLoading ? (
              <>Loading...</>
            ) : (
              companyData?.data?.find((item) => item.id === value?.id)?.name
            )
          }
        />
        <Table.Column dataIndex="orderNumber" title={"OrderNumber"} />
        <Table.Column dataIndex="date" title={"Date"} />
        
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
