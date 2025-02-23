"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { use } from "react";

export default function CarDetailsPage({
  params: paramsPromise,
}: {
  params: Promise<{ vin: string }>;
}) {
  const params = use(paramsPromise);
  const router = useRouter();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          className="gap-2"
          onClick={() => router.push("/dashboard/cars")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Cars
        </Button>
      </div>

      {/* Content */}
      <div>
        <h1 className="text-2xl font-bold">Car Details</h1>
        <p className="text-muted-foreground">VIN: {params.vin}</p>
      </div>
    </div>
  );
}
