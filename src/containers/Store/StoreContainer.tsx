import React from "react";
import { observer } from "mobx-react";
import Store from "../../components/Store";

const StoreContainer = ({}) => {
  return (
    <>
      <Store />
    </>
  );
};

export default observer(StoreContainer);
