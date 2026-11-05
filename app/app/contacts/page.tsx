import type { Metadata } from "next";
import { PageContainer, PageHeader } from "@/components/shared/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = { title: "Contacts" };

export default function Page() {
  return (
    <PageContainer>
      <PageHeader title="Contacts" />
      <Skeleton className="h-64 w-full rounded-xl" />
    </PageContainer>
  );
}
