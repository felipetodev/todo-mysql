import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <nav className="h-[80px] bg-primary px-6 flex justify-between items-center">
      <h1 className="text-white text-4xl font-bold">
        To Do List
      </h1>
      <a
        rel="noreferrer noopener"
        href="https://github.com/felipetodev/transvip-chall"
        target="_blank"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        GitHub
      </a>
    </nav>
  )
}