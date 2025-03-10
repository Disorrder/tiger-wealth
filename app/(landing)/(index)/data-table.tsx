"use client";

import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Button } from "~/components/ui/button";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { cn } from "~/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string | undefined;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [isOpen, setIsOpen] = React.useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });

  return (
    <>
      <div className={cn(className)}>
        <h2 className="b2-bold lg:t1-bold mb-6 lg:mb-12">
          Tiger&apos;s Stock Leaderboard
        </h2>
        <ScrollArea className="max-w-1440px whitespace-nowrap">
          <Table className="border-separate xl:border-spacing-x-[9px]">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        className="b2-mobile-regular lg:b2-regular align-top text-traffic-white"
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        className="py-[2px] lg:py-[11px]"
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <TableRow>
                      <TableCell colSpan={columns.length}>
                        Additional details here
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Button
          variant="outline"
          onClick={() => {
            setIsOpen((prev) => !prev);
            if (table.getState().pagination.pageSize === 10) {
              table.setPageSize(data.length);
            } else {
              table.setPageSize(10);
            }
          }}
          className="mx-auto mt-2 flex h-8 w-full max-w-100 lg:h-12"
        >
          <span>{isOpen ? "SHOW LESS" : "SHOW MORE"}</span>
        </Button>
      </div>
      {/* <div className="absolute bottom-0 z-[-10] mb-[10px] flex h-[39px] w-full max-w-[250px] justify-center bg-gradient-to-r from-gradient-paradise-red-from to-gradient-light-green-to blur-[20px] lg:mb-0 lg:h-[153px] lg:max-w-[1176px] lg:rounded-[38px]" /> */}
    </>
  );
}
