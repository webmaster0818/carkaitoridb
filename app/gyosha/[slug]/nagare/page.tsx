import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { companies, ctaFor, fmt, getCompany, isNA } from "@/lib/companies";
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
  if (p.seoTitle) {
    return {
      title: p.seoTitle,
      description: p.seoDescription,
      alternates: { canonical: `/gyosha/${c.slug}/nagare/` },
    };
  }
  if (p.flowAfter?.length) {
    const n = p.flow.length + p.flowAfter.length;
    return {
      title: `${c.name}の車買取の流れ｜申し込みから入金・名義変更までの${n}ステップと査定当日の所要時間【公式確認】`,
      description: `${c.name}で車を売却する流れを、申し込みから契約・引き渡し・入金・名義変更まで${n}ステップで整理しています。査定当日の所要時間（おおよそ40分前後）、契約後の減額・キャンセルの規定も公式サイトで確認しました（${p.flowAfterCheckedOn}確認）。`,
      alternates: { canonical: `/gyosha/${c.slug}/nagare/` },
    };
  }
  return {
    title: `${c.name}の車買取の流れ｜申し込みから入金までの${p.flow.length}ステップ【公式確認】`,
    description: `${c.name}で車を売却する際の流れを、公式サイトの記載にもとづき${p.flow.length}ステップに整理しています（${PROCEDURE_CHECKED_ON}確認）。入金までの期間と、各段階で決める事項もご説明します。`,
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
  const after = p.flowAfter ?? [];
  const total = p.flow.length + after.length;
  const flowChecked = p.flowCheckedOn ?? PROCEDURE_CHECKED_ON;
  const sections = p.sections ?? [];
  const others = companies.filter((o) => o.slug !== c.slug && procedureSlugs.includes(o.slug));

  const faqs = [
    {
      q: `${c.name}の買取は何ステップですか？`,
      a: after.length
        ? `公式サイトの査定申込みの流れは${p.flow.length}ステップ（${p.flow.map((f) => f.step).join("→")}）です。公式FAQに記載のある査定後の手続き（${after.map((f) => f.step).join("→")}）を含めると、全体で${total}ステップです（${p.flowAfterCheckedOn}確認）。`
        : `公式サイトに記載されている流れは${p.flow.length}ステップです（${p.flow.map((f) => f.step).join("→")}）。${flowChecked}時点の記載にもとづきます。`,
    },
    {
      q: `${c.name}は入金までどれくらいかかりますか？`,
      a: isNA(c.nyukin)
        ? `入金時期は、${flowChecked}時点で公式サイト上に記載を確認できませんでした。書類に不備があると入金が遅れる場合があるため、査定を受ける前に書類を揃えておくことをおすすめします。`
        : `公式サイトの記載にもとづく入金時期は「${fmt(c.nyukin)}」です。書類に不備があると入金が遅れる場合があるため、査定を受ける前に書類を揃えておくことをおすすめします。`,
    },
    {
      q: `${c.name}で契約した後にキャンセルできますか？`,
      a: isNA(c.cancel)
        ? `キャンセルの扱いは、${flowChecked}時点で公式サイト上に記載を確認できませんでした。ご契約前に、公式サイトにて最新の規定をご確認ください。`
        : `公式サイトの記載にもとづくキャンセルの扱いは「${fmt(c.cancel)}」です。ご契約前に、公式サイトにて最新の規定をご確認ください。`,
    },
    ...(p.extraFaqs ?? []),
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
          {p.h1
            ? p.h1
            : after.length
            ? `${c.name}の車買取の流れ｜申し込みから入金・名義変更までの${total}ステップ`
            : `${c.name}の車買取の流れ｜申し込みから入金までの${p.flow.length}ステップ`}
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          {c.name}で車を売却する際の流れを、公式サイトの記載にもとづき整理しています（確認日: {flowChecked}）。
          各ステップで決める事項と、手続きが滞りやすい点もあわせて記載しています。公式サイトに記載のない内容は、推測で補っていません。
        </p>

        {p.leadAnswer && (
          <section className="mt-8 max-w-3xl border-2 border-vermilion bg-white px-5 py-5">
            <h2 className="text-base font-bold text-steel-900">結論：{c.name}で車を売る流れ・入金・キャンセル</h2>
            <dl className="mt-3 space-y-3">
              {p.leadAnswer.points.map((pt) => (
                <div key={pt.label}>
                  <dt className="text-sm font-bold text-steel-900">{pt.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-steel-700">{pt.body}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs leading-relaxed text-steel-500">
              出典:{" "}
              {p.leadAnswer.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && "、"}
                  <a href={s.url} rel="nofollow noopener noreferrer" target="_blank" className="underline">
                    {s.label}
                  </a>
                </span>
              ))}
              （{flowChecked}確認）
            </p>
          </section>
        )}

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
            （{flowChecked}確認）
          </p>
        </section>

        {sections.map((sec) => (
          <section key={sec.title} className="mt-14">
            <h2 className="section-title mb-5">{sec.title}</h2>
            {sec.intro && <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-700">{sec.intro}</p>}
            {sec.steps && (
              <ol className="space-y-4">
                {sec.steps.map((f, i) => (
                  <li key={f.step} className="border-l-2 border-vermilion bg-chalk-card px-5 py-4">
                    <p className="text-sm font-bold text-steel-900">
                      STEP {i + 1}　{f.step}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-steel-700">{f.body}</p>
                  </li>
                ))}
              </ol>
            )}
            {sec.rows && (
              <div className="overflow-x-auto border border-chalk-line">
                <table className="spec-table">
                  <tbody>
                    {sec.rows.map((r) => (
                      <tr key={r.label}>
                        <th className="w-36 md:w-56">{r.label}</th>
                        <td>{r.body}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {sec.note && (
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-steel-700">{sec.note}</p>
            )}
            <p className="mt-3 text-xs leading-relaxed text-steel-500">
              出典:{" "}
              {sec.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && "、"}
                  <a href={s.url} rel="nofollow noopener noreferrer" target="_blank" className="underline">
                    {s.label}
                  </a>
                </span>
              ))}
              （{flowChecked}確認）
            </p>
          </section>
        ))}

        {after.length > 0 && (
          <section className="mt-14">
            <h2 className="section-title mb-5">査定後の流れ：契約から入金・名義変更まで</h2>
            <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-700">
              公式サイトの査定申込みの流れは実車査定までです。その後の契約・引き渡し・入金・名義変更は、公式FAQの記載にもとづき整理しています。
            </p>
            <ol className="space-y-4">
              {after.map((f, i) => (
                <li key={f.step} className="border-l-2 border-vermilion bg-chalk-card px-5 py-4">
                  <p className="text-sm font-bold text-steel-900">
                    STEP {p.flow.length + i + 1}　{f.step}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-steel-700">{f.body}</p>
                </li>
              ))}
            </ol>
            {p.contractNote && (
              <p className="mt-5 max-w-3xl border border-chalk-line bg-white px-5 py-4 text-sm leading-relaxed text-steel-700">
                {p.contractNote}
              </p>
            )}
            <p className="mt-3 text-xs leading-relaxed text-steel-500">
              出典:{" "}
              {(p.flowAfterSources ?? []).map((s, i) => (
                <span key={s.url}>
                  {i > 0 && "、"}
                  <a href={s.url} rel="nofollow noopener noreferrer" target="_blank" className="underline">
                    {s.label}
                  </a>
                </span>
              ))}
              （{p.flowAfterCheckedOn}確認）
            </p>
          </section>
        )}

        {p.dayOf && (
          <section className="mt-14">
            <h2 className="section-title mb-5">査定当日の所要時間</h2>
            <p className="max-w-3xl text-sm leading-loose text-steel-700">{p.dayOf}</p>
          </section>
        )}

        {p.voices && p.voices.length > 0 && (
          <section className="mt-14">
            <h2 className="section-title mb-5">公式サイトに掲載されている利用者の声（手続きの速さ・名義変更）</h2>
            <ul className="space-y-3">
              {p.voices.map((v) => (
                <li key={v.store + v.date} className="border border-chalk-line bg-white px-5 py-4 text-sm leading-relaxed text-steel-700">
                  「{v.text}」
                  <span className="mt-1 block text-xs text-steel-500">
                    {v.store}・{v.car}・記入日 {v.date}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-steel-500">
              {c.name}の公式FAQページに掲載されている声から、売却の流れに関するものを原文のまま引用しています（店舗名・車種・記入日は公式の掲載どおり）。掲載する声は{c.name}が選んだもので、当サイトでは投稿者に確認していません。
              {p.voicesSourceUrl && (
                <>
                  {" "}出典:{" "}
                  <a href={p.voicesSourceUrl} rel="nofollow noopener noreferrer" target="_blank" className="underline">
                    {c.name}公式「車の売り方に関するよくあるご質問」
                  </a>
                  （{p.flowAfterCheckedOn}確認）
                </>
              )}
            </p>
          </section>
        )}

        <section className="mt-14">
          <h2 className="section-title mb-5">事前に確認しておきたい条件</h2>
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
          <h2 className="section-title mb-5">必要書類の事前準備について</h2>
          <p className="max-w-3xl text-sm leading-loose text-steel-700">
            {c.name}の公式サイトでも、書類の準備は査定より前の段階に位置付けられています。
            当日に書類が不足していると、その場で署名・押印ができず、入金も遅れます。
            必要書類は普通自動車と軽自動車で異なるため、事前にご確認ください。
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

        {others.length > 0 && (
          <section className="mt-14">
            <h2 className="section-title mb-5">他社の車買取の流れ</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/gyosha/${o.slug}/nagare/`} className="text-sm text-vermilion underline underline-offset-4">
                    {o.name}の車買取の流れ
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/gyosha/${c.slug}/shorui/`} className="text-sm text-vermilion underline underline-offset-4">
                  {c.name}の車売却に必要な書類
                </Link>
              </li>
              <li>
                <Link href="/guide/kaitori-vs-shitadori/" className="text-sm text-vermilion underline underline-offset-4">
                  買取と下取りの違い
                </Link>
              </li>
              <li>
                <Link href="/guide/shorui/" className="text-sm text-vermilion underline underline-offset-4">
                  車売却の必要書類（普通車・軽自動車）
                </Link>
              </li>
            </ul>
          </section>
        )}

        <section className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={cta.href} rel={cta.rel} target="_blank" className="btn-primary">
              {c.name}の公式サイトを見る
            </a>
            <Link href="/compare/" className="btn-ghost">
              他社と条件を比較する
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
