import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import {
  categoriesOf,
  companies,
  companyFaq,
  ctaFor,
  fmt,
  getCompany,
  serviceTypeOf,
} from "@/lib/companies";
import { CHECKED_LABEL } from "@/lib/site";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompany(slug);
  return {
    title: `${c.name}の買取サービスまとめ｜手数料・入金・キャンセル規定【2026年8月公式確認】`,
    description: `${c.name}（運営: ${c.operator.name}）の査定料・引取・必要書類・入金タイミング・キャンセル規定を公式サイトで一次確認（${CHECKED_LABEL}）。確認できなかった項目は「公式では確認できず」と正直に記載しています。`,
    alternates: { canonical: `/gyosha/${c.slug}/` },
  };
}

export default async function GyoshaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompany(slug);
  const cta = ctaFor(c);
  const faqs = companyFaq(c);
  const cats = categoriesOf(c);

  const quickRows: { label: string; value: string }[] = [
    { label: "受付", value: fmt(c.uketsuke) },
    { label: "査定料", value: fmt(c.hiyou.satei) },
    ...(c.hiyou.tesuryo !== undefined
      ? [{ label: "手数料", value: fmt(c.hiyou.tesuryo) }]
      : []),
    { label: "引取", value: fmt(c.hiyou.hikitori) },
    { label: "書類", value: fmt(c.hiyou.shorui) },
    { label: "入金", value: fmt(c.nyukin) },
    { label: "キャンセル", value: fmt(c.cancel) },
  ];

  return (
    <>
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "8社比較表", path: "/compare/" },
          { name: c.name, path: `/gyosha/${c.slug}/` },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">COMPANY FACT SHEET</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          {c.name}の買取サービスまとめ｜手数料・入金・キャンセル規定【2026年8月公式確認】
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          {c.name}のサービス条件を、公式サイトの記載に基づいて一次確認しました（確認日: {CHECKED_LABEL}）。
          サービス形態: {serviceTypeOf(c)}。対象: {fmt(c.target)}。対応エリア: {fmt(c.area)}。
        </p>

        {/* 実務即答テーブル */}
        <section className="mt-10">
          <h2 className="section-title mb-5">実務のポイント即答表</h2>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {quickRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-40">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {c.note && (
            <p className="mt-3 text-xs leading-relaxed text-steel-500">
              補足: {c.note}
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={cta.href} rel={cta.rel} target="_blank" className="btn-primary">
              {c.name}の公式サイトを見る
            </a>
            <Link href="/compare/" className="btn-ghost">
              8社比較表で他社と並べる
            </Link>
          </div>
        </section>

        {/* 特徴 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">公式サイトが掲げる特徴</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {c.features.map((f) => (
              <li
                key={f}
                className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-relaxed text-steel-800"
              >
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-steel-500">
            ※ いずれも{c.name}公式サイトの記載に基づきます（{CHECKED_LABEL}確認）。当サイト独自の評価ではありません。
          </p>
        </section>

        {/* 運営会社 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">運営会社情報</h2>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-32 md:w-40">運営会社</th>
                  <td>{c.operator.name}</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>{c.operator.address}</td>
                </tr>
                <tr>
                  <th>古物商許可</th>
                  <td>{fmt(c.operator.kobutsu)}</td>
                </tr>
                <tr>
                  <th>確認元</th>
                  <td>
                    <a
                      href={c.operator.source}
                      rel="nofollow noopener"
                      target="_blank"
                      className="text-vermilion underline underline-offset-4 hover:text-vermilion-deep"
                    >
                      {c.operator.source}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-5">{c.name}のよくある疑問</h2>
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

        {/* 情報の検証欄 */}
        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">この情報の検証について</h2>
          <ul className="mt-4 space-y-2 text-[13px] leading-loose text-steel-700">
            <li>・本ページの条件は、{c.name}公式サイト（{c.official_url}）および運営会社ページを{CHECKED_LABEL}に確認して作成しています。</li>
            <li>・公式サイトで確認できなかった項目は「公式では確認できず」と表示し、推測で補完していません。</li>
            <li>・口コミ・体験談の創作、架空の買取金額・実績の掲載は行いません。</li>
            <li>・条件は変更される場合があります。契約前に必ず公式サイト・契約書面で最新の内容をご確認ください。</li>
          </ul>
          <p className="mt-4 text-xs text-steel-500">
            詳細は<Link href="/content-policy/" className="text-vermilion underline underline-offset-4">コンテンツ制作ポリシー</Link>をご覧ください。
          </p>
        </section>

        {/* 導線 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">あわせて読む</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取8社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">同じ物差しで8社の条件を並べる</span>
              </Link>
            </li>
            {cats.map((cat) => (
              <li key={cat.slug}>
                <Link href={cat.path} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{cat.name}</span>
                  <span className="mt-1 block text-xs text-steel-500">カテゴリ別の判断ポイントと業者比較</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断（4問）</span>
                <span className="mt-1 block text-xs text-steel-500">自分の状況に合う売り方をルールベースで判定</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
