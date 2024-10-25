import React, { useCallback, useEffect, useState } from "react";
import ActionButton from "../../components/ActionButton.tsx";
import Dropdown from "../../components/Dropdown.tsx";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Table from "../../components/Table";
import { TableData } from "../../constants/Datatypes";
import { API_URLS } from "../../Oaklands/API_URLS";
import { Currency } from "../../Oaklands/DataTypes";

export default function TopPlayers() {
  const [tableData, setTableData] = useState<TableData | null>(null);
  const [currencyType, setCurrencyType] = useState<Currency>("Cash");

  const LoadData = useCallback(async () => {
    const result = await fetch(
      `${API_URLS.top_players_monthly}?currencyType=${currencyType}`
    );
    const obj = await result.json();

    if (!result.ok) {
      alert(obj.message);
    }
    console.log(obj);

    if (!obj.leaderboard) {
      return;
    } //else:
    setTableData({
      header: {
        position: {
          DisplayName: "Rank",
        },
        user_id: {
          DisplayName: "UserId",
        },
        cash_amount: {
          DisplayName: "cash_amount",
        },
      },
      body: obj.leaderboard,
    });
  }, [currencyType]);

  useEffect(() => {
    LoadData();
  }, [LoadData]);

  if (tableData === null) {
    return <Loading />;
  } //else:

  return (
    <>
      <div>TopPlayers</div>
      <div className="flex flex-row gap-2 p-2">
        <Dropdown
          dropdownOptions={["Cash", "Candy2024"]}
          onChange={(NewCurrency) => {
            setCurrencyType(NewCurrency as Currency);
          }}
        />
      </div>
      <Table data={tableData} className="animate-fade-in mb-20" />
      <Footer />
    </>
  );
}
