import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const nav = [
  { href: "/compare/", label: "8社比較表" },
  { href: "/gaisha/", label: "外車" },
  { href: "/truck/", label: "トラック" },
  { href: "/haisha/", label: "廃車・事故車" },
  { href: "/kyusha/", label: "旧車" },
  { href: "/auction/", label: "電話なし" },
  { href: "/shindan/", label: "売り方診断" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-chalk-line bg-chalk-card">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-4 w-4 bg-vermilion" />
          <span className="font-display text-xl tracking-widest text-steel-900">
            {SITE_NAME}
          </span>
        </Link>
        <nav aria-label="グローバルナビゲーション">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-steel-700 transition-colors hover:text-vermilion"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
