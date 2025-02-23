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

export function decodeVinYear(vin: string): number {
  // Tesla VIN year coding (position 10):
  const yearCodes: { [key: string]: number } = {
    A: 2010, B: 2011, C: 2012, D: 2013, E: 2014,
    F: 2015, G: 2016, H: 2017, J: 2018, K: 2019,
    L: 2020, M: 2021, N: 2022, P: 2023, R: 2024,
    S: 2025, T: 2026, V: 2027, W: 2028, X: 2029,
    Y: 2030
  };

  const yearCode = vin.charAt(9);
  return yearCodes[yearCode] || new Date().getFullYear();
}
