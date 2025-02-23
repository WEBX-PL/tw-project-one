import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">FIRST PROJECT</h1>
      <p className="text-lg text-muted-foreground mt-2 mb-6">
        Welcome to my first Next.js project with shadcn/ui
      </p>
      <Link href="/dashboard">
        <Button>Open Dashboard</Button>
      </Link>
    </main>
  );
}
