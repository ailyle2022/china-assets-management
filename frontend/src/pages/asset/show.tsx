import { Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const AssetShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: locationData, isLoading: locationIsLoading } = useOne({
      resource: "locations",
      id: record?.location?.id || "",
      queryOptions: {
        enabled: !!record,
      },
    });

    const { data: purchaseOrderData, isLoading: purchaseOrderIsLoading } = useOne({
      resource: "purchase-orders",
      id: record?.purchaseOrder?.id || "",
      queryOptions: {
        enabled: !!record,
      },
    });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"PurchaseOrder"}</Title>
      <TextField
        value={
          purchaseOrderIsLoading ? <>Loading...</> : <>{purchaseOrderData?.data?.orderNumber
          }</>
        }
      />
      <Title level={5}>{"Location"}</Title>
      <TextField
        value={
          locationIsLoading ? <>Loading...</> : <>{locationData?.data?.name
          }</>
        }
      />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />
      <Title level={5}>{"SerialNumber"}</Title>
      <TextField value={record?.serialNumber} />
      <Title level={5}>{"AssetNumber"}</Title>
      <TextField value={record?.assetNumber} />
      <Title level={5}>{"Description"}</Title>
      <TextField value={record?.description} />
      <Title level={5}>{"WarrantyExpiry"}</Title>
      <TextField value={record?.warrantyExpiry} />
      <Title level={5}>{"LocalPrice"}</Title>
      <TextField value={record?.localPrice} />
      <Title level={5}>{"LocalCurrency"}</Title>
      <TextField value={record?.localCurrency} />
      <Title level={5}>{"GlobalPrice"}</Title>
      <TextField value={record?.globalPrice} />
      
    </Show>
  );
};
