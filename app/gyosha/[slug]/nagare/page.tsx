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
    title: `${c.name}の車買取の流れ｜申し込みから入金までの${p.flow.length}ステップ【公式確認】`,
    description: `${c.name}で車を売るときの流れを、公式サイトの記載どおりに${p.flow.length}ステップで整理しました（${PROCEDURE_CHECKED_ON}確認）。入金までにかかる期間と、各段階で決めることをまとめています。`,
    alternates: { canonical: `/gyosha/${c.slug}/nagare/` },
  };
}

export default async function NagarePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompany(slug);
  const p = getProcedure(slug);
  if (!p) notFound();
  const cta = ctaFor(c);

  const faqs = [
    {
      q: `${c.name}の買取は何ステップですか？`,
      a: `公式サイトに記載されている流れは${p.flow.length}ステップです（${p.flow.map((f) => f.step).join("→")}）。${PROCEDURE_CHECKED_ON}時点の記載にもとづきます。`,
    },
    {
      q: `${c.name}は入金までどれくらいかかりますか？`,
      a: `公式の記載は「${fmt(c.nyukin)}」です。書類の不備があると遅れることがあるため、査定を受ける前に書類を揃えておくと確実です。`,
    },
    {
      q: `査定額に納得できなかった場合はどうなりますか？`,
      a: `キャンセルの扱いは「${fmt(c.cancel)}」と公式に記載されています。契約前に規定を確認してください。`,
    },
  ];

  return (
    <>
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: c.name, path: `/gyosha/${c.slug}/` },
          { name: "買取の流れ", path: `/gyosha/${c.slug}/nagare/` },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">BUYING FLOW</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          {c.name}の車買取の流れ｜申し込みから入金までの{p.flow.length}ステップ
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          {c.name}で車を売るときの流れを、公式サイトの記載どおりに整理しました（確認日: {PROCEDURE_CHECKED_ON}）。
          各ステップで何を決めるのか、どこで止まりやすいのかを添えています。記載のない内容は推測で補っていません。
        </p>

        <section className="mt-10">
          <h2 className="section-title mb-5">公式サイトに記載されている{p.flow.length}ステップ</h2>
          <ol className="space-y-4">
            {p.flow.map((f, i) => (
              <li key={f.step} className="border-l-2 border-vermilion bg-chalk-card px-5 py-4">
                <p className="text-sm font-bold text-steel-900">
                  STEP {i + 1}　{f.step}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-steel-700">{f.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs leading-relaxed text-steel-500">
            出典:{" "}
            <a href={p.flowSourceUrl} rel="nofollow noopener noreferrer" target="_blank" className="underline">
              {c.name}公式サイト
            </a>
            （{PROCEDURE_CHECKED_ON}確認）
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">流れの中で先に決めておくこと</h2>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-32 md:w-40">受付</th>
                  <td>{fmt(c.uketsuke)}</td>
                </tr>
                <tr>
                  <th>査定料</th>
                  <td>{fmt(c.hiyou.satei)}</td>
                </tr>
                <tr>
                  <th>引取</th>
                  <td>{fmt(c.hiyou.hikitori)}</td>
                </tr>
                <tr>
                  <th>入金</th>
                  <td>{fmt(c.nyukin)}</td>
                </tr>
                <tr>
                  <th>キャンセル</th>
                  <td>{fmt(c.cancel)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-steel-500">
            いずれも公式サイトの記載にもとづく一次確認値です。「公式では確認できず」と表示されている項目は、公式サイト上で確認できなかったものです。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">書類が揃っていないと流れが止まります</h2>
          <p className="max-w-3xl text-sm leading-loose text-steel-700">
            {c.name}の公式サイトでも、書類の準備は査定より前の段階に置かれています。
            当日に書類が足りないと、署名・押印がその場でできず、入金も後ろにずれます。
            必要書類は普通自動車と軽自動車で異なるため、先に確認しておいてください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={`/gyosha/${c.slug}/shorui/`} className="btn-primary">
              {c.name}の必要書類を確認する
            </Link>
            <Link href={`/gyosha/${c.slug}/`} className="btn-ghost">
              {c.name}の手数料・入金・キャンセル規定
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
            <Link href="/compare/" className="btn-ghost">
              他社と条件を並べて比べる
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
