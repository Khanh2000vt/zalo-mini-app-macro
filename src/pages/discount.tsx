import React, { useState } from "react";
import { View } from "zmp-framework/react";
// import { Page, Button, Sheet } from "zmp-ui";
import { Button, Page, Sheet } from "zmp-framework/react";
function DiscountPage() {
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  return (
    <Page>
      <Button
        onClick={() => {
          setSheetVisible(!sheetVisible);
        }}
      >
        Open Sheet
      </Button>
      <Sheet
        className="has-fixed-action"
        opened={sheetVisible}
        title="Xác nhận đơn hàng"
        closeButton
        backdrop
        swipeToStep
        swipeToClose
      >
        {/* <div className="container">
          <p>Sheet content</p>
        </div> */}
        {/* <View style={{ backgroundColor: "red" }}>122444</View> */}
        Sheet content
      </Sheet>
    </Page>
  );
}

export default DiscountPage;
