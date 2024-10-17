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
          <th className="border border-slate-400 px-5 py-1">Name</th>
          <th className="border border-slate-400 px-5 py-1">Price</th>
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
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    FetchShopData();
  }, []);

  return (
    <div>
      <Title />
      <div className="mb-10">
        <span className="font-extrabold text-3xl ">Classic Shop</span>
      </div>
      {classicShopData && classicShopDisplayType === "Table" && (
        <ClassicShopTable data={classicShopData} />
      )}
      {classicShopDisplayType === "Grid" && null}
    </div>
  );
}
