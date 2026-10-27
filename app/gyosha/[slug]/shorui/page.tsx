import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { companies, ctaFor, fmt, getCompany, isNA } from "@/lib/companies";
import { PROCEDURE_CHECKED_ON, getProcedure, procedureSlugs } from "@/lib/procedures";

/** 名義変更の手続きで公的機関が定める書類（2026年10月25日確認） */
const PUBLIC_CHECKED_ON = "2026年10月25日";
const PUBLIC_RULES = [
  {
    label: "普通自動車（運輸支局での移転登録）",
    source: "国土交通省 東北運輸局「自動車の登録（移転登録）」",
    url: "https://wwwtb.mlit.go.jp/tohoku/am/am-sub02-003.html",
    body: "旧所有者（車検証の所有者欄に記載されている人）が用意するものとして、印鑑証明書（発行日から3か月以内）、実印（代理人が申請する場合は実印を押印した委任状）、譲渡証明書（所定の用紙に実印を押印したもの）を挙げています。車検証の所有者の氏名・住所と印鑑証明書の氏名・住所が一致しない場合は、変更の経緯がわかる住民票・戸籍謄本・抄本が必要で、現在の住民票で車検証の住所からのつながりがわからない場合は、住民票（除票）または戸籍の附票も必要とされています。姓名の変更が住民票で確認できない場合は戸籍の謄本（抄本）も必要です。基本的な例であり、申請の内容により必要書類が異なる場合があると記載されています。",
  },
  {
    label: "軽自動車（軽自動車検査協会での名義変更）",
    source: "軽自動車検査協会「名義変更」",
    url: "https://www.keikenkyo.or.jp/procedures/change_name.html",
    body: "車検証の原本、新しい使用者の住所を証する書面（発行から3か月以内の住民票の写しまたは印鑑（登録）証明書のいずれか1点）、自動車検査証変更記録申請書（軽第1号様式）などを挙げています。手続きをする人が新しい使用者以外の場合は申請依頼書、改姓の場合は戸籍謄（抄）本等（住民票の写しに旧姓の記載があれば住民票の写しでも可）、相続の場合は戸籍謄本等または法務局が交付する法定相続情報一覧図が必要です。車検証の使用者と所有者が異なる場合は、所有者（販売店やローン会社など）の同意を得たうえで手続きを行う必要があるとされています。申請手数料は無料です。",
  },
];

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
  const checked = p.docsCheckedOn ?? PROCEDURE_CHECKED_ON;
  if (p.docsExtra) {
    return {
      title: `${c.name}の車買取に必要な書類｜普通車${p.docsNormal.length}点・軽自動車${p.docsKei.length}点と住所変更・ローン・紛失時【公式確認】`,
      description: `${c.name}で車を売却する際の必要書類を、公式サイトの記載にもとづき普通自動車と軽自動車に分けて整理しています（${checked}確認）。印鑑証明書の通数と期限、住所・氏名が変わった場合、ローンが残っている場合、相続・代理人の場合の追加書類、紛失時の再発行窓口、運輸支局・軽自動車検査協会の案内もまとめています。`,
      alternates: { canonical: `/gyosha/${c.slug}/shorui/` },
    };
  }
  return {
    title: `${c.name}の車買取に必要な書類｜普通車${p.docsNormal.length}点・軽自動車${p.docsKei.length}点【公式確認】`,
    description: `${c.name}で車を売却する際の必要書類を、公式サイトの記載にもとづき普通自動車と軽自動車に分けて整理しています（${checked}確認）。紛失時の再発行窓口もあわせてご案内します。`,
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
  const checked = p.docsCheckedOn ?? PROCEDURE_CHECKED_ON;
  const ex = p.docsExtra;

  const onlyNormal = p.docsNormal.filter((d) => !p.docsKei.some((k) => k.replace(/軽自動車/, "自動車") === d || k === d));

  const faqs = [
    {
      q: `${c.name}で車を売却する際、必要な書類は何点ですか？`,
      a: `公式サイトの記載では、普通自動車が${p.docsNormal.length}点、軽自動車が${p.docsKei.length}点です（${checked}確認）。売却の状況によって追加で求められる場合があります。`,
    },
    {
      q: `軽自動車でも実印と印鑑登録証明書は必要ですか？`,
      a: p.docsKei.some((d) => d.includes("実印"))
        ? `${c.name}の公式一覧には軽自動車にも実印の記載があります。`
        : `${c.name}の公式一覧では、軽自動車に実印の記載はありません${p.docsKei.some((d) => d.includes("認印")) ? "（認印の記載があります）" : ""}。${p.docsKeiNote && !p.docsKeiNote.includes("実印の記載") ? p.docsKeiNote : ""}詳細はお申し込み時にご確認ください。`,
    },
    {
      q: `書類が揃っていないと売れませんか？`,
      a: `書類が不足していると、その場で署名・押印ができず、手続きが進みません。${isNA(c.nyukin) ? "" : `入金時期（公式サイトの記載: ${fmt(c.nyukin)}）も遅れるため、`}査定の前に書類を揃えておくことをおすすめします。`,
    },
    ...(ex?.faqs ?? []),
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
          {c.name}の公式サイトに記載されている必要書類を、普通自動車と軽自動車に分けて整理しています（確認日: {checked}）。
          公式サイトに記載のない書類は追加していません。
          {ex && "住所・氏名が変わっている場合やローンが残っている場合の追加書類、紛失時の再発行窓口も、公式サイトの記載と公的機関の案内にもとづいてまとめています。"}
        </p>

        {p.docsLead && (
          <section className="mt-8 max-w-3xl border-2 border-vermilion bg-white px-5 py-5">
            <h2 className="text-base font-bold text-steel-900">結論：{c.name}で車を売るときの必要書類と納税証明書の扱い</h2>
            <dl className="mt-4 space-y-3">
              {p.docsLead.points.map((pt) => (
                <div key={pt.label}>
                  <dt className="text-sm font-bold text-steel-900">{pt.label}</dt>
                  <dd className="mt-1 text-sm leading-loose text-steel-700">{pt.body}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-steel-500">
              出典:{" "}
              {p.docsLead.sources.map((src, i) => (
                <span key={src.url}>
                  {i > 0 && "／"}
                  <a href={src.url} rel="nofollow noopener noreferrer" target="_blank" className="underline">
                    {src.label}
                  </a>
                </span>
              ))}
              （{p.docsLead.checkedOn}確認）
            </p>
          </section>
        )}

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
          （{checked}確認）。必要書類は売却の状況により異なる場合があるため、ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        {ex && (
          <section className="mt-14">
            <h2 className="section-title mb-5">{c.name}の公式サイトに記載のある書類の注意点</h2>
            <dl className="space-y-4">
              {ex.points.map((x) => (
                <div key={x.label} className="border border-chalk-line bg-white px-5 py-4">
                  <dt className="text-sm font-bold text-steel-900">{x.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-steel-700">{x.body}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {onlyNormal.length > 0 && (
          <section className="mt-14">
            <h2 className="section-title mb-5">普通自動車のみに必要な書類</h2>
            <p className="max-w-3xl text-sm leading-loose text-steel-700">
              {c.name}の公式一覧のうち、普通自動車のみに記載されている書類は
              <strong>{onlyNormal.join("・")}</strong>
              です。軽自動車は名義変更の手続きが異なるため、求められる書類が少なくなっています。
            </p>
          </section>
        )}

        {ex && (
          <section className="mt-14">
            <h2 className="section-title mb-5">住所・氏名の変更、ローン、相続などで追加になる書類</h2>
            <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-700">
              {c.name}の公式サイトに記載のあるケースです（{checked}確認）。状況により必要書類は異なるため、該当する場合は査定の申し込み時に伝えてください。
            </p>
            <dl className="space-y-4">
              {ex.cases.map((x) => (
                <div key={x.label} className="border-l-2 border-vermilion bg-chalk-card px-5 py-4">
                  <dt className="text-sm font-bold text-steel-900">{x.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-steel-700">{x.body}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm leading-loose text-steel-700">
              ローンが残っている車と相続した車の売り方は、
              <Link href="/situation/loan/" className="text-vermilion underline underline-offset-4">ローン中の車の売却</Link>
              と
              <Link href="/situation/souzoku/" className="text-vermilion underline underline-offset-4">相続した車の売却</Link>
              のページでも整理しています。
            </p>
          </section>
        )}

        {ex && (
          <section className="mt-14">
            <h2 className="section-title mb-5">書類をなくした場合（{c.name}の公式サイトの記載）</h2>
            <dl className="space-y-4">
              {ex.lost.map((x) => (
                <div key={x.label} className="border border-chalk-line bg-white px-5 py-4">
                  <dt className="text-sm font-bold text-steel-900">{x.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-steel-700">{x.body}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {ex && (
          <section className="mt-14">
            <h2 className="section-title mb-5">名義変更で公的機関が定める書類</h2>
            <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-700">
              買取店に売却すると、名義変更の手続きは通常買取店が行いますが、求められる書類はこの手続きにもとづいています（{PUBLIC_CHECKED_ON}確認）。
            </p>
            <div className="space-y-4">
              {PUBLIC_RULES.map((r) => (
                <div key={r.label} className="border border-chalk-line bg-white px-5 py-4">
                  <p className="text-sm font-bold text-steel-900">{r.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-steel-700">{r.body}</p>
                  <p className="mt-2 text-xs leading-relaxed text-steel-500">
                    出典:{" "}
                    <a href={r.url} rel="nofollow noopener noreferrer" target="_blank" className="underline">
                      {r.source}
                    </a>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs leading-relaxed text-steel-500">
              <p>{c.name}の公式サイトの出典（{checked}確認）:</p>
              <ul className="mt-1 list-disc pl-5">
                {ex.sources.map((x) => (
                  <li key={x.url}>
                    <a href={x.url} rel="nofollow noopener noreferrer" target="_blank" className="underline">
                      {x.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="mt-14">
          <h2 className="section-title mb-5">紛失時の再発行窓口</h2>
          <p className="max-w-3xl text-sm leading-loose text-steel-700">
            書類を紛失している場合は、再発行に日数を要します。窓口は書類ごとに異なり、普通自動車と軽自動車でも異なります。
            再発行の窓口は、当サイトの必要書類ガイドにまとめています。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/shorui/" className="btn-primary">
              必要書類と再発行窓口のガイド
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
