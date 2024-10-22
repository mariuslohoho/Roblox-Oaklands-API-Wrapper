import { useMouse } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useSettings } from "../hooks/useSettings";
import { OaklandsItemType } from "../Oaklands/DataTypes";
import { FormatCurrency } from "../Oaklands/FormatCost";
import ItemInspectionPopup from "./ItemInspection";
import Keybind from "./Keybind";

interface ClassicShopItemTooltipProps {
  ItemData: OaklandsItemType;
  className?: string;
  visible?: boolean;
  mousePosition?: object;
}

export default function ClassicShopItemTooltip(
  props: ClassicShopItemTooltipProps
) {
  const [mouseState] = useMouse();
  const { data } = useSettings();
  const [itemInspectionVisible, setItemInspectionVisible] =
    useState<boolean>(false);

  useEffect(() => {
    if (!props.visible || data.ClassicShop.TooltipStyle !== "Oaklands") {
      return;
    } else {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "e") {
          setItemInspectionVisible(true);
          console.log("e");
        }
      };

      document.body.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.removeEventListener("keydown", handleKeyDown);
      };
    }
  });

  if (!props.visible) return null;

  if (
    data.ClassicShop.TooltipStyle === "Default" ||
    data.ClassicShop.TooltipStyle === "Custom"
  ) {
    return (
      <div
        className={`z-50 bg-tooltip border-border border-2 rounded-md h-fit py-2 w-40 
            flex flex-col justify-center
            items-center`}
        style={{
          position: "fixed",
          left: `${mouseState.x - window.scrollX + 15}px`,
          top: `${mouseState.y - window.scrollY + 10}px`,
        }}
      >
        <span className="block">{props.ItemData.name}</span>
        <span className="block">
          {FormatCurrency(props.ItemData.Cost)}
        </span>
        {props.ItemData.Limited && !props.ItemData.Limited?.Obtainable && (
          <span className="block text-red-700 font-medium text-sm">
            Unobtainable
          </span>
        )}
      </div>
    );
  } else if (data.ClassicShop.TooltipStyle === "Oaklands") {
    return (
      <>
        <div>
          <div
            className={`z-50 bg-tooltip border-border border-2 rounded-md h-fit py-2 w-40 
            flex flex-col justify-center
            items-center`}
            style={{
              position: "fixed",
              left: `${mouseState.x - window.scrollX + 15}px`,
              top: `${mouseState.y - window.scrollY + 10}px`,
            }}
          >
            <span className="block">{props.ItemData.name}</span>
          </div>
          <div
            className={`z-50 bg-tooltip border-border border-2 rounded-md h-fit py-2 w-40 
            flex justify-center
            items-center gap-2 px-2`}
            style={{
              position: "fixed",
              left: `${mouseState.x - window.scrollX + 15}px`,
              top: `${mouseState.y - window.scrollY + 58}px`,
            }}
            onMouseDown={() => setItemInspectionVisible(true)}
          >
            <Keybind char="E" className="inline-block" />
            <span className="inline-flex flex-1">Inspect</span>
          </div>
        </div>
        <ItemInspectionPopup
          Item={props.ItemData}
          visible={itemInspectionVisible}
        />
      </>
    );
  }
}
