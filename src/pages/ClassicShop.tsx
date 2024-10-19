import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { API_URLS } from "../Oaklands/API_URLS";
import {
  ClassicShopItems,
  ClassicStoreAPIResponseBody,
} from "../Oaklands/ClassicStore";
import { FormatCurrency } from "../Oaklands/FormatCost";

function ClassicShopTable(props: { data: ClassicStoreAPIResponseBody }) {
  return (
    <table className="table-auto border-collapse w-[45vw]">
      <thead>
        <tr>
          <th className="border border-slate-400 px-5 py-1 font-bold text-lg">
            Name
          </th>
          <th className="border border-slate-400 px-5 py-1 font-bold text-lg">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.items.map((ItemName) => {
          const item = ClassicShopItems[ItemName];

          if (!item) return;

          return (
            <tr>
              <td className="border border-slate-400 px-5 py-1">
                {item.name}
              </td>
              <td className="border border-slate-400 px-5 py-1">
                {FormatCurrency(item?.Cost)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function ClassicShop() {
  const [classicShopData, setClassicShopData] =
    useState<ClassicStoreAPIResponseBody | null>(null);
  const [classicShopDisplayType, setClassicShopDispalyType] = useState<
    "Table" | "Grid"
  >("Table");

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

  return (
    <>
      <div>
        <Title />
        <div className="mb-10">
          <span className="font-extrabold text-3xl ">Classic Shop</span>
        </div>
        <div className="flex gap-2 justify-end items-center">
          <span>
            Products refreshing on{" "}
            {classicShopData?.reset_time &&
              new Date(classicShopData?.reset_time).toLocaleString()}
          </span>
          <div
            className="flex bg-gray-800 px-3 py-1 mb-2 rounded-md cursor-pointer"
            onClick={() => setClassicShopDispalyType("Table")}
          >
            <span className="material-symbols-outlined">table</span>
            <span className="font-medium">Table</span>
          </div>
          <div
            className="flex bg-gray-800 px-3 py-1 mb-1 rounded-md cursor-pointer"
            onClick={() => setClassicShopDispalyType("Grid")}
          >
            <span className="material-symbols-outlined">grid_view</span>
            <span className="font-medium">Grid</span>
          </div>
        </div>
        {classicShopData && classicShopDisplayType === "Table" && (
          <ClassicShopTable data={classicShopData} />
        )}
        {classicShopDisplayType === "Grid" && null}
      </div>
      <footer className="sticky bottom-0 flex justify-center items-center bg-gray-900 py-2 mt-12">
        <span className="text-center">Back to home</span>
      </footer>
    </>
  );
}
