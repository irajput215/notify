import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 p-8">
      <Logo />
      <h1 className="text-4xl font-semibold tracking-tight">Your front desk, on WhatsApp.</h1>
      <Button asChild><Link href="/app/inbox">View live demo</Link></Button>
    </main>
  );
}
