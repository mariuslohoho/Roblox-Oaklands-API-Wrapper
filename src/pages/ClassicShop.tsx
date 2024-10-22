import React, { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton";
import Loading from "../components/Loading";
import ReturnToHome from "../components/ReturnToHome";
import Title from "../components/Title";
import { API_URLS } from "../Oaklands/API_URLS";
import {
  ClassicShopItems,
  ClassicStoreAPIResponseBody,
} from "../Oaklands/ClassicStore";
import { FormatCurrency } from "../Oaklands/FormatCost";

function ClassicShopGrid(props: { data: ClassicStoreAPIResponseBody }) {
  return (
    <div className="max-w-2xl *:m-2">
      {props.data.items.map((ItemName) => {
        const ItemData = ClassicShopItems[ItemName];
        return (
          <div className="relative w-28 h-28 border-border border-2 rounded-lg  bg-red-500 inline-block">
            <span className="absolute bottom-2 font-medium -translate-x-[50%] w-24">
              {ItemData?.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ClassicShopTable(props: { data: ClassicStoreAPIResponseBody }) {
  return (
    <div className=" rounded-xl overflow-hidden bg-slate-400 border-2 border-border">
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
          {props.data.items.map((ItemName) => {
            const item = ClassicShopItems[ItemName];
            if (!item) return;
            return (
              <tr className="animate-fade-in odd:bg-slate-400 even:bg-slate-500">
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

  if (classicShopData === null) return <Loading />;

  return (
    <>
      <Title fade_in />
      <div className="animate-fade-in mb-10">
        <span className="font-extrabold text-3xl ">Classic Shop</span>
      </div>
      <div className="animate-fade-in flex gap-2 justify-end items-center">
        <div>
          <span className="inline-block px-0.5">
            Products refreshing on
          </span>
          <span className="inline-block px-0.5">
            {classicShopData?.reset_time &&
              new Date(classicShopData?.reset_time).toLocaleString()}
          </span>
        </div>
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
      {classicShopData && classicShopDisplayType === "Table" && (
        <ClassicShopTable data={classicShopData} />
      )}
      {classicShopData && classicShopDisplayType === "Grid" && (
        <ClassicShopGrid data={classicShopData} />
      )}
      <ReturnToHome />
    </>
  );
}
