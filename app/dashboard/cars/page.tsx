import { CarList } from "@/components/cars/car-list";

export default function CarsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cars</h1>
      </div>
      <CarList />
    </div>
  );
}
