import { Button } from "@/components/ui/button";
import { Car, BarChart, LogOut, Building2 } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-background h-screen">
      <div className="flex flex-col h-full">
        <div className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Car Management</h2>

          <Select defaultValue="org1">
            <SelectTrigger className="w-full">
              <Building2 className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select organization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="org1">Organization 1</SelectItem>
              <SelectItem value="org2">Organization 2</SelectItem>
              <SelectItem value="org3">Organization 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 px-3">
          <div className="space-y-1">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                <BarChart className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/cars">
              <Button variant="ghost" className="w-full justify-start">
                <Car className="mr-2 h-4 w-4" />
                Cars
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
