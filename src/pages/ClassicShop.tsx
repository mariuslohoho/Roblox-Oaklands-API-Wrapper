import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Title from "../components/Title";
import ClassicShopItemTooltip from "../components/Tooltip";
import UIBase from "../components/UIBase";
import { API_URLS } from "../Oaklands/API_URLS";
import {
  ClassicShopItems,
  ClassicStoreAPIResponseBody,
  ClassicStoreItemsName,
} from "../Oaklands/ClassicStore";
import { FormatCurrency } from "../Oaklands/FormatCost";

function ClassicShopGrid(props: { data: ClassicStoreAPIResponseBody }) {
  const [hoveringItemName, setHoveringItemName] =
    useState<ClassicStoreItemsName | null>(null);
  return (
    <div className="max-w-2xl *:m-2 fade-in-parent">
      {props.data.items.map((ItemName: ClassicStoreItemsName, i) => {
        const ItemData = ClassicShopItems[ItemName];
        if (!ItemData) return null;
        return (
          <div className="relative inline-block" key={i}>
            <main
              className="w-32 h-32 sm:w-28 sm:h-28 border-border border-2 rounded-lg  bg-red-500"
              onMouseEnter={() => setHoveringItemName(ItemName)}
              onMouseLeave={() => setHoveringItemName(null)}
            >
              <div className="absolute h-full w-full -translate-x-[2px] -translate-y-[2px]">
                <img
                  className="h-full w-full object-contain scale-90 select-none"
                  src={ItemData.ImageUrl}
                  draggable="false"
                />
              </div>
              <span className="absolute bottom-2 font-medium -translate-x-[50%] w-24 drop-shadow">
                {ItemData?.name}
              </span>
            </main>
            <ClassicShopItemTooltip
              ItemData={ItemData}
              visible={hoveringItemName === ItemName}
            />
          </div>
        );
      })}
    </div>
  );
}

function ClassicShopTable(props: { data: ClassicStoreAPIResponseBody }) {
  return (
    <div className=" rounded-xl overflow-hidden bg-slate-400 border-2 border-border w-[100%] mt-2">
      <table className="animate-fade-in border-collapse table-auto rounded-thead w-[100%] overflow-hidden">
        <thead className="relative z-2 thead-shadow">
          <tr className="*:bg-red-800 *:h-10">
            <th className="animate-fade-in px-5 py-1 font-bold text-lg">
              Name
            </th>
            <th className="animate-fade-in px-5 py-1 font-bold text-lg">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.items.map((ItemName, i) => {
            const item = ClassicShopItems[ItemName];
            if (!item) return;
            return (
              <tr
                key={i}
                className="animate-fade-in odd:bg-slate-400 even:bg-slate-500"
              >
                <td className="animate-fade-in px-5 py-1">{item.name}</td>
                <td className="animate-fade-in px-5 py-1">
                  {FormatCurrency(item?.Cost)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function ClassicShop() {
  const [classicShopData, setClassicShopData] =
    useState<ClassicStoreAPIResponseBody | null>(null);
  const [classicShopDisplayType, setClassicShopDispalyType] =
    useLocalStorage<"Table" | "Grid">(
      "Roblox-Oaklands-API-Wrapper/ClassicShopDisplayType",
      "Table"
    );

  const FetchShopData = async () => {
    try {
      const response = await fetch(API_URLS.classic_store);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json: ClassicStoreAPIResponseBody = await response.json();
      setClassicShopData(json);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(`Unknown error, ${err}`);
      }
    }
  };

  useEffect(() => {
    FetchShopData();
  }, []);

  if (classicShopData === null) return <Loading />;

  return (
    <>
      <Title fade_in />
      <div className="animate-fade-in mb-10">
        <span className="font-extrabold text-3xl ">Classic Shop</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <UIBase className="flex flex-col md:inline-block m-2">
          <span className="inline-block select-none">
            Products refreshing on
          </span>
          <span className="inline-block">
            {classicShopData?.reset_time &&
              new Date(classicShopData?.reset_time).toLocaleString()}
          </span>
        </UIBase>
        <div className="animate-fade-in inline-flex gap-2 justify-end items-center">
          <ActionButton
            Text="Refresh"
            IconName="refresh"
            onMouseDown={FetchShopData}
          />
          <ActionButton
            Text="Table"
            IconName="table"
            onMouseDown={() => setClassicShopDispalyType("Table")}
          />
          <ActionButton
            Text="Grid"
            IconName="grid_view"
            onMouseDown={() => setClassicShopDispalyType("Grid")}
          />
        </div>
      </div>
      {classicShopData && classicShopDisplayType === "Table" && (
        <ClassicShopTable data={classicShopData} />
      )}
      {classicShopData && classicShopDisplayType === "Grid" && (
        <ClassicShopGrid data={classicShopData} />
      )}
      <Footer />
      <div className="mb-20" />
    </>
  );
}
