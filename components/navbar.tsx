"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex  h-16 items-center justify-between ">
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">احجز الآن</Link>
          </Button>
        </div>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            Mr Proper Clean
          </span>
        </Link>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                احجز الآن
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
