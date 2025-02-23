import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function milesToKilometers(miles: number): number {
  return miles * 1.60934;
}

export function formatDistance(miles: number, decimals: number = 0): string {
  const km = milesToKilometers(miles);
  return km.toFixed(decimals);
}
