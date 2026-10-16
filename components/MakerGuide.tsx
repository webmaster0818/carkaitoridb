import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { OPERATOR, SITE_NAME, SITE_URL } from "@/lib/site";

export interface MakerRow {
  label: string;
  value: string;
}

export interface MakerItem {
  t: string;
  d: string;
}

export interface MakerLink {
  href: string;
  title: string;
  desc: string;
}

export interface MakerGuideProps {
  /** ページのパス（末尾スラッシュ付き） */
  path: string;
  /** 構造化データ用のタイトル・説明（metadataと同じ文字列を渡す） */
  ldTitle: string;
  ldDescription: string;
  kicker: string;
  h1: string;
  /** パンくず末尾の表記 */
  crumb: string;
  intro: string;
  conclusions: string[];
  checkTitle: string;
  checkLead: string;
  checkRows: MakerRow[];
  checkNote: ReactNode;
  flowTitle: string;
  flowLead: string;
  flow: MakerItem[];
  cautionsTitle: string;
  cautions: MakerItem[];
  companyTitle: string;
  /** 掲載社の公式記載セクションの本文（各社ページへのリンクを含む） */
  children: ReactNode;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  related: MakerLink[];
}

/**
 * メーカー別ページの共通レイアウト。
 * 車種名・スペック・価格は扱わず、車検証の確認と手続きの一般知識のみを扱う。
 */
export default function MakerGuide({
  path,
  ldTitle,
  ldDescription,
  kicker,
  h1,
  crumb,
  intro,
  conclusions,
  checkTitle,
  checkLead,
  checkRows,
  checkNote,
  flowTitle,
  flowLead,
  flow,
  cautionsTitle,
  cautions,
  companyTitle,
  children,
  faqTitle,
  faqs,
  related,
}: MakerGuideProps) {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ldTitle,
    description: ldDescription,
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    mainEntityOfPage: `${SITE_URL}${path}`,
    author: { "@type": "Organization", name: OPERATOR.name },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "軽自動車の買取", path: "/kei/" },
          { name: crumb, path },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">{kicker}</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          {h1}
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">{intro}</p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">要点</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 車検証で確認する項目 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">{checkTitle}</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">{checkLead}</p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {checkRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">{checkNote}</p>
        </section>

        {/* 準備の手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">{flowTitle}</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">{flowLead}</p>
          <div className="space-y-5">
            {flow.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 買取価格・相場・査定額は、年式・走行距離・状態・時期により異なります。当サイトでは金額の目安を掲載しておりません。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">{cautionsTitle}</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 掲載社の公式記載 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">{companyTitle}</h2>
          <div className="mt-5 border border-chalk-line bg-chalk-card p-5 text-[13px] leading-loose text-steel-700">
            {children}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">
              掲載社の条件を比較表で見る
            </Link>
            <Link href="/shindan/" className="btn-ghost">
              売り方診断（4問）で確認する
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">{faqTitle}</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex gap-2 font-display text-base text-steel-900">
                  <span aria-hidden="true" className="text-vermilion">Q.</span>
                  {f.q}
                </h3>
                <p className="mt-3 text-sm leading-loose text-steel-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 関連リンク */}
        <section className="mt-14">
          <h2 className="section-title mb-6">関連ページ</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            {related.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion"
                >
                  <span className="font-display text-steel-900">{l.title}</span>
                  <span className="mt-1 block text-xs text-steel-500">{l.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
