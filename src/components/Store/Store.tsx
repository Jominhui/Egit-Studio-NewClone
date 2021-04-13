import React from "react";
import "./Store.scss";
import StoreNeo from "../StoreNeo";
import StoreBooks from "../StoreBooks";

interface StoreProps {}

const Store = ({}: StoreProps) => {
  return (
    <>
      <div className="store">
        <StoreNeo />
        <StoreBooks />
      </div>
    </>
  );
};

export default Store;
