import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// This is mock data - replace with your actual data source
const cars = [
  {
    id: 1,
    name: "Model 3",
    manufacturer: "Tesla",
    plateNumber: "ABC 123",
    odometer: 45678,
  },
  {
    id: 2,
    name: "Tucson",
    manufacturer: "Hyundai",
    plateNumber: "XYZ 789",
    odometer: 12345,
  },
  {
    id: 3,
    name: "Mustang",
    manufacturer: "Ford",
    plateNumber: "DEF 456",
    odometer: 89012,
  },
  {
    id: 4,
    name: "Civic",
    manufacturer: "Honda",
    plateNumber: "GHI 789",
    odometer: 34567,
  },
];

export function CarList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Manufacturer</TableHead>
          <TableHead>Plate Number</TableHead>
          <TableHead className="text-right">Odometer (km)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((car) => (
          <TableRow key={car.id}>
            <TableCell className="font-medium">{car.name}</TableCell>
            <TableCell>{car.manufacturer}</TableCell>
            <TableCell>{car.plateNumber}</TableCell>
            <TableCell className="text-right">
              {car.odometer.toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
} 