"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Car } from "@/types/car";
import { getCars } from "@/lib/api/tessie";
import { Battery, Car as CarIcon } from "lucide-react";
import { formatDistance } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function CarList() {
  const router = useRouter();
  const cars: Car[] = [];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>VIN / Plate</TableHead>
          <TableHead className="text-right">Odometer (km)</TableHead>
          <TableHead className="text-right">Battery</TableHead>
          <TableHead className="text-right">Range (km)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((car) => (
          <TableRow
            key={car.vin}
            className="cursor-pointer hover:bg-muted/50"
            onClick={() => router.push(`/dashboard/cars/${car.vin}`)}
          >
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <CarIcon className="h-4 w-4" />
                {car.last_state.vehicle_state.vehicle_name || "Unnamed Vehicle"}
              </div>
            </TableCell>
            <TableCell>{car.last_state.vehicle_config.car_type}</TableCell>
            <TableCell>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm">{car.vin}</span>
                <span className="text-xs text-muted-foreground">
                  {car.plate}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-right">
              {parseInt(
                formatDistance(car.last_state.vehicle_state.odometer)
              ).toLocaleString()}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Battery className="h-4 w-4" />
                {car.last_state.charge_state.battery_level}%
              </div>
            </TableCell>
            <TableCell className="text-right">
              {parseInt(
                formatDistance(car.last_state.charge_state.battery_range)
              ).toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
