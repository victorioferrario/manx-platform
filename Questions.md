


### [ HUBX-2638 ] Create endpoint to get a list of items pending for Purchase Orders
- Optional GUID parameter => VendorId
```[json]
{
        Date: DateTime,
        ItemCode: string,
        UnitsSold: int,
        Cost: decimal,
        Price: decimal,
        TotalRevenue: decimal,
        GrossProfit: decimal
}
```
Questions: 
1) If i am looking for items, pending for a purchase order, do i need the purchase order?

### [HUBX-2632 ] Create an endpoint in portal to get a summary of Purchase Orders pending:
- Pull data from HubxB1WebApiClient.
- Optional GUID parameter, VendorId and returns following JSON.
```[json]
{
    NumOfOrders: int,
    TotalAmmount: decimal
}
```

### [ HUBX-2669 ] Call ERP Service to get Pending Orders Ending Items Per Vendor

- Send a request to B1Web API to get PO pending Items per Vendor.
- Request will include vendor code
- Response will include
---[json]
{
    VendorCode,
    VendorItemCode
    Quanity
}
Questions:
1) Will the Response also include the PO those items are pending for?

- Search for VendorItem by Vendor Code(Translated from BP Code), Vendor Item Code and Fullfillment Type(MarketPlace?)
- Response will include :
```[json]
{
    Vendor Code,
    Vendor Item Code,
    Quanity
}
```

### [ HUBX-2629 ] Create an endpoint to provide summary of open Sales Orders:
Provide Summary of open SOs.
```[json]
{
    NumOfOrders: int,
    TotalAmmount: decimal
}
```

Questions:
1) What consitutes a sales order being open?



# Updates

HUBX-2638 #time 0d 0h Message goes here.

In order to complete the task assigned to me, I did the following:

I updated ItemDTO, specifically I added a new property called 
```csharp
bool DescriptionCanEdit?
```
So now, when the front end call the endpoint:```https://vendor.hubx.com/Item/{itemId}```, the result will look as follows:
```json 
{
    "vendorItemId": "39eb7891-ec9c-4790-aa9e-00d251f671b8",
    "version": 27,
    "name": "HP 14-AK040WM-S Chromebook Core™ i7-6700HQ 2.6GHz 1TB+8GB SSD 8GB 15.6\" (1920x1080) BT WIN10 Webcam ",
    "description": "HP 14-AK040WM-S Chromebook Core™ i7-6700HQ 2.6GHz 1TB+8GB SSD 8GB 15.6\" (1920x1080) BT WIN10 Webcam NVIDIA® GTX 960M 4096MB GRAY Backlit Keyboard",
    "descriptionCanEdit": true,
    //...
}
```

I updated  ```hubx.application.Item.Services.ItemService``` with two methods:
```csharp
private Guid PreferredVendorGuid();
private Task<bool> CheckIfPreferredVendorOwnsDescription(Guid itemId)
```

I updated  ```hubx.application.Item.Services.VendorItemService``` with two methods:
```csharp
public Guid PreferredVendorGuid();
public Task<bool> CheckIfPreferredVendorOwnsDescription(string vendorItemCode)
```
I also implemented the logic in the VendorItemController.


