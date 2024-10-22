import React from "react";
import { OaklandsItemType } from "../Oaklands/DataTypes";

interface props {
  Item: OaklandsItemType;
  visible?: boolean;
}
export default function ItemInspectionPopup(props: props) {
  if (!props.visible) return null;

  return <div className="hidden">{props.Item.name}</div>;
}
