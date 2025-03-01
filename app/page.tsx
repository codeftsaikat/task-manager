import BentoGrid from "@/components/kokonutui/bento-grid";
import Card08 from "@/components/kokonutui/card-08";
import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Hello</Button>
      <Button>
        <MailOpen /> Login with Email
      </Button>
      <Card08 />
      <BentoGrid />
    </div>
  );
}
