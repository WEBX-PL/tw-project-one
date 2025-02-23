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

function maskVin(vin: string) {
  return `${vin.slice(0, 5)}${"*".repeat(vin.length - 5)}`;
}

function maskPlate(plate: string | null) {
  if (!plate) return "-";
  return `**${plate.slice(-2)}`;
}

function getCarModel(carType: string) {
  const manufacturer = "Tesla";
  const model =
    carType === "modely"
      ? "Model Y"
      : carType === "model3"
      ? "Model 3"
      : carType === "models"
      ? "Model S"
      : carType === "modelx"
      ? "Model X"
      : carType;

  return `${manufacturer} ${model}`;
}

export function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCars() {
      try {
        const carsData = await getCars();
        setCars(carsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load cars");
      } finally {
        setIsLoading(false);
      }
    }

    loadCars();
  }, []);

  if (isLoading) {
    return <div>Loading cars...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

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
          <TableRow key={car.vin}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <CarIcon className="h-4 w-4" />
                {car.last_state.vehicle_state.vehicle_name || "Unnamed Vehicle"}
              </div>
            </TableCell>
            <TableCell>
              {getCarModel(car.last_state.vehicle_config.car_type)}
            </TableCell>
            <TableCell>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm">{maskVin(car.vin)}</span>
                <span className="text-xs text-muted-foreground">
                  {maskPlate(car.plate)}
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
