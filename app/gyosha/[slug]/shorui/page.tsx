import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { companies, ctaFor, fmt, getCompany } from "@/lib/companies";
import { PROCEDURE_CHECKED_ON, getProcedure, procedureSlugs } from "@/lib/procedures";

export function generateStaticParams() {
  return companies
    .filter((c) => procedureSlugs.includes(c.slug))
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompany(slug);
  const p = getProcedure(slug);
  if (!p) return {};
  return {
    title: `${c.name}の車買取に必要な書類｜普通車${p.docsNormal.length}点・軽自動車${p.docsKei.length}点【公式確認】`,
    description: `${c.name}で車を売るときの必要書類を、公式サイトの記載どおりに普通自動車と軽自動車に分けて整理しました（${PROCEDURE_CHECKED_ON}確認）。紛失したときの再発行窓口もあわせて案内します。`,
    alternates: { canonical: `/gyosha/${c.slug}/shorui/` },
  };
}

export default async function ShoruiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompany(slug);
  const p = getProcedure(slug);
  if (!p) notFound();
  const cta = ctaFor(c);

  const onlyNormal = p.docsNormal.filter((d) => !p.docsKei.some((k) => k.replace(/軽自動車/, "自動車") === d || k === d));

  const faqs = [
    {
      q: `${c.name}で車を売るとき、必要な書類は何点ですか？`,
      a: `公式サイトの記載では、普通自動車が${p.docsNormal.length}点、軽自動車が${p.docsKei.length}点です（${PROCEDURE_CHECKED_ON}確認）。売却の状況によって追加で求められる場合があります。`,
    },
    {
      q: `軽自動車でも実印と印鑑登録証明書は必要ですか？`,
      a: p.docsKei.some((d) => d.includes("実印"))
        ? `${c.name}の公式一覧には軽自動車にも実印の記載があります。`
        : `${c.name}の公式一覧では、軽自動車に実印の記載はありません${p.docsKei.some((d) => d.includes("認印")) ? "（認印の記載があります）" : ""}。${p.docsKeiNote ?? ""}詳細は申し込み時にご確認ください。`,
    },
    {
      q: `書類が揃っていないと売れませんか？`,
      a: `書類が不足していると、その場で署名・押印ができず手続きが止まります。入金のタイミング（公式記載: ${fmt(c.nyukin)}）も後ろにずれるため、査定の前に揃えておくのが確実です。`,
    },
  ];

  return (
    <>
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: c.name, path: `/gyosha/${c.slug}/` },
          { name: "必要書類", path: `/gyosha/${c.slug}/shorui/` },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">REQUIRED DOCUMENTS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          {c.name}の車買取に必要な書類｜普通車{p.docsNormal.length}点・軽自動車{p.docsKei.length}点
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          {c.name}の公式サイトに記載されている必要書類を、普通自動車と軽自動車に分けてそのまま整理しました（確認日: {PROCEDURE_CHECKED_ON}）。
          公式に記載のない書類は足していません。
        </p>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="section-title mb-5">普通自動車（{p.docsNormal.length}点）</h2>
            <ul className="space-y-2">
              {p.docsNormal.map((d) => (
                <li key={d} className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-relaxed text-steel-800">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title mb-5">軽自動車（{p.docsKei.length}点）</h2>
            <ul className="space-y-2">
              {p.docsKei.map((d) => (
                <li key={d} className="border-l-2 border-steel-300 bg-chalk-card px-4 py-3 text-sm leading-relaxed text-steel-800">
                  {d}
                </li>
              ))}
            </ul>
            {p.docsKeiNote && (
              <p className="mt-3 text-xs leading-relaxed text-steel-500">{p.docsKeiNote}</p>
            )}
          </div>
        </section>
        <p className="mt-4 text-xs leading-relaxed text-steel-500">
          出典:{" "}
          <a href={p.docsSourceUrl} rel="nofollow noopener noreferrer" target="_blank" className="underline">
            {c.name}公式サイト
          </a>
          （{PROCEDURE_CHECKED_ON}確認）。必要書類は売却の状況により変わることがあるため、最新の案内は公式サイトでご確認ください。
        </p>

        {onlyNormal.length > 0 && (
          <section className="mt-14">
            <h2 className="section-title mb-5">普通自動車だけに必要な書類</h2>
            <p className="max-w-3xl text-sm leading-loose text-steel-700">
              {c.name}の公式一覧を並べると、普通自動車にだけ挙がっているのは
              <strong>{onlyNormal.join("・")}</strong>
              です。軽自動車は名義変更の手続きが異なるため、求められる書類が少なくなっています。
            </p>
          </section>
        )}

        <section className="mt-14">
          <h2 className="section-title mb-5">紛失したときの再発行窓口</h2>
          <p className="max-w-3xl text-sm leading-loose text-steel-700">
            書類を紛失している場合は、再発行に日数がかかります。窓口は書類ごとに異なり、普通自動車と軽自動車でも違います。
            当サイトの必要書類ガイドに、再発行の窓口をまとめています。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/shorui/" className="btn-primary">
              必要書類と再発行窓口のガイドを見る
            </Link>
            <Link href={`/gyosha/${c.slug}/nagare/`} className="btn-ghost">
              {c.name}の買取の流れを見る
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-chalk-line bg-white px-5 py-4">
                <p className="text-sm font-bold text-steel-900">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={cta.href} rel={cta.rel} target="_blank" className="btn-primary">
              {c.name}の公式サイトを見る
            </a>
            <Link href={`/gyosha/${c.slug}/`} className="btn-ghost">
              {c.name}の手数料・入金・キャンセル規定
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
