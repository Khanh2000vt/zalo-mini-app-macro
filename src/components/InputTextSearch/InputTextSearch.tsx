import React from "react";
import { Box, Card, Icon, List, ListInput } from "zmp-framework/react";
import "../../css/home.scss";
function InputTextSearch() {
  const handleOnSubmitForm = (e) => {};
  return (
    <Box>
      <div className="search">
        <List
          style={{ listStyle: "none" }}
          form
          id="my-form"
          onSubmit={handleOnSubmitForm}
          noHairlines
        >
          <Card className="list-input">
            <ListInput
              clearButton
              placeholder="Tìm tên quán?"
              inputStyle={{ paddingLeft: 40 }}
              wrap={false}
            ></ListInput>
            <div className="icon">
              <Icon zmp="zi-search" id="icon-search" />
            </div>
          </Card>
        </List>
      </div>
    </Box>
  );
}

export default InputTextSearch;
