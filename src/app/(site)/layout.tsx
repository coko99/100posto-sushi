import { ContactFab } from "@/components/ContactFab";
import { Preloader } from "@/components/Preloader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-ink">
      <Preloader />
      <SiteHeader />
      <main className="relative flex-1">{children}</main>
      <SiteFooter />
      <ContactFab />
    </div>
  );
}
