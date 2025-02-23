import { Car } from "@/types/car";

const TESSIE_API_KEY = process.env.NEXT_PUBLIC_TESSIE_API_KEY;
const TESSIE_API_URL = "https://api.tessie.com";

export async function getCars(): Promise<Car[]> {
  if (!TESSIE_API_KEY) {
    throw new Error("TESSIE_API_KEY is not defined");
  }

  const response = await fetch(
    `${TESSIE_API_URL}/vehicles?access_token=${TESSIE_API_KEY}&only_active=true`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }

  const data = await response.json();

  return data.results;
}
