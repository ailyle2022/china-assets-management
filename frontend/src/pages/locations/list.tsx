import {
  DeleteButton,
  EditButton,
  FilterDropdown,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Input, Space, Table } from "antd";

export const LocationList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    filters: {},
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="name" title={"Name"}
        filterDropdown={(props) => (
          <FilterDropdown {...props}>
            <Input />
          </FilterDropdown>
        )}
        />
        <Table.Column dataIndex="type" title={"Type"}
        filterDropdown={(props) => (
          <FilterDropdown {...props}>
            <Input />
          </FilterDropdown>
        )}
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
