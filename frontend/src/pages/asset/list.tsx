import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { useMany, type BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const AssetList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: locationData, isLoading: locationIsLoading } = useMany({
      resource: "locations",
      ids:
        tableProps?.dataSource
          ?.map((item) => item?.location?.id)
          .filter(Boolean) ?? [],
      queryOptions: {
        enabled: !!tableProps?.dataSource,
      },
    });

    const { data: purchaseOrderData, isLoading: purchaseOrderIsLoading } = useMany({
      resource: "purchase-orders",
      ids:
        tableProps?.dataSource
          ?.map((item) => item?.purchaseOrder?.id)
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
          dataIndex={"purchaseOrder"}
          title={"PurchaseOrder"}
          render={(value) =>
            purchaseOrderIsLoading ? (
              <>Loading...</>
            ) : (
              purchaseOrderData?.data?.find((item) => item.id === value?.id)?.orderNumber
            )
          }
        />
        <Table.Column
          dataIndex={"location"}
          title={"Location"}
          render={(value) =>
            locationIsLoading ? (
              <>Loading...</>
            ) : (
              locationData?.data?.find((item) => item.id === value?.id)?.name
            )
          }
        />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column dataIndex="localPrice" title={"LocalPrice"} />
        <Table.Column dataIndex="localCurrency" title={"LocalCurrency"} />
        <Table.Column dataIndex="serialNumber" title={"SerialNumber"} />
        <Table.Column dataIndex="assetNumber" title={"AssetNumber"} />
        <Table.Column dataIndex="description" title={"Description"} />
        <Table.Column dataIndex="status" title={"Status"} />
        <Table.Column dataIndex="warrantyExpiry" title={"WarrantyExpiry"} render={(value) => <DateField value={value} format="YYYY-MM-DD HH:mm:ss" />} />
        
        
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
