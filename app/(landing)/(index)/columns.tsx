"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown } from "lucide-react";
import type { ReactNode } from "react";

export type LeaderStock = {
  symbol: string;
  currentPrice: string;
  recommendedDate: string;
  marketCap: string;
  recommendedPrice: string;
  returnSinceRec: string;
  returnVsSp500: string;
  risk: string;
  sP500ReturnsSince: string;
  closeOpen: string;
  closingPrice: string;
  closedDate: string;
};

export const columns: ColumnDef<LeaderStock>[] = [
  {
    accessorKey: "symbol",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1 lg:gap-[1px]">
          <span className="block text-left">Symbol</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const symbol: ReactNode = row.getValue("symbol");
      return <div className="text-accent uppercase">{symbol}</div>;
    },
  },
  {
    accessorKey: "currentPrice",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Current Price</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "recommendedDate",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Recommended Date</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const date: ReactNode = row.getValue("recommendedDate");
      return <div className="text-secondary-foreground">{date}</div>;
    },
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Market Cap</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const date: ReactNode = row.getValue("recommendedDate");
      return <div className="text-secondary-foreground">{date}</div>;
    },
  },
  {
    accessorKey: "recommendedPrice",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Recommended Price</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "returnSinceRec",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Return Since Rec</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "returnVsSp500",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Return vs S&P 500</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "risk",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Risk</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const risk: ReactNode = row.getValue("risk");
      return <div className="text-secondary-foreground">{risk}</div>;
    },
  },
  {
    accessorKey: "sP500ReturnsSince",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">S&P 500 returns since</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "closeOpen",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Close/ Open</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "closingPrice",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Closing Price</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "closedDate",
    header: ({ column }) => {
      return (
        <div className="flex gap-[1px] lg:gap-1">
          <span className="block text-left">Closed date</span>
          <button
            className="size-1 lg:size-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            type="button"
          >
            <ChevronsUpDown className="m-auto size-[5px] lg:h-4 lg:w-3" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const closedDate: ReactNode = row.getValue("closedDate");
      return <div className="text-secondary-foreground">{closedDate}</div>;
    },
  },
];
