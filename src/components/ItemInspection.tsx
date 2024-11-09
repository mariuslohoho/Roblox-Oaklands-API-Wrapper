import React from "react";
import { NewClassicShopAPIResponseItem } from "../Oaklands/ClassicStore";
// import { OaklandsItemType } from "../Oaklands/DataTypes";

interface props {
  Item: NewClassicShopAPIResponseItem;
  visible?: boolean;
}
export default function ItemInspectionPopup(props: props) {
  if (!props.visible) return null;

  return <div className="hidden">{props.Item.name}</div>;
}
