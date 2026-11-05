import type { Metadata } from "next";
import { PageContainer, PageHeader } from "@/components/shared/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = { title: "Integrations" };

export default function Page() {
  return (
    <PageContainer>
      <PageHeader title="Integrations" />
      <Skeleton className="h-64 w-full rounded-xl" />
    </PageContainer>
  );
}
