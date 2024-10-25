import React from "react";
import { twMerge } from "tailwind-merge";
import { TableData } from "../constants/Datatypes";

interface TableProps {
  data: TableData;
  className?: string;
}
export default function Table(props: TableProps) {
  return (
    <div className={twMerge("TableContainer", props.className)}>
      <table>
        <thead>
          <tr>
            {Object.entries(props.data.header).map(
              ([columnId, column]) => {
                return <th key={columnId}>{column.DisplayName}</th>;
              }
            )}
          </tr>
        </thead>
        <tbody>
          {props.data.body.map((v, i) => (
            <tr key={i}>
              {Object.entries(v).map(([columnId, cellData]) => (
                <td key={columnId}>
                  {typeof cellData === "number"
                    ? cellData.toLocaleString()
                    : cellData}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
