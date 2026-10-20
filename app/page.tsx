import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { categories, companies } from "@/lib/companies";
import { CHECKED_RANGE_LABEL, SITE_NAME, SITE_TAGLINE, SITE_URL, OPERATOR } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME}｜${SITE_TAGLINE}`,
  description:
    "車買取27社を公式サイトで一次確認し、査定料・入金・キャンセル規定・古物商許可を確認日を明記して比較しています。外車・トラック重機・廃車事故車・旧車・オークション型のカテゴリ別に、中立の立場で売り方の整理を支援します。",
  alternates: { canonical: "/" },
};

const catNumbers = ["01", "02", "03", "04", "05"];

const homeLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: OPERATOR.name,
      address: OPERATOR.address,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeLd} />
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-steel-900 text-chalk">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 items-center justify-center border-l border-steel-700 md:flex"
        >
          <p className="tate font-display text-sm text-steel-400">
            公式一次確認・確認日明記・口コミ創作なし
          </p>
        </div>
        <div className="mx-auto max-w-site px-4 py-20 md:py-28">
          <p className="kicker mb-6 !text-vermilion">CAR SELLING GUIDE</p>
          <h1 className="font-display text-3xl leading-relaxed md:text-5xl md:leading-relaxed">
            公式情報にもとづく
            <br />
            <span className="text-vermilion">中立</span>の車買取比較
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-loose text-steel-200 md:text-base">
            一括査定を申し込む前に、お持ちの車を「どこで・どのように売るのが適しているか」を整理するための情報を提供しています。掲載27社のサービス条件は、すべて各社公式サイトで一次確認し、確認日（{CHECKED_RANGE_LABEL}）を各社ごとに明記しています。確認できなかった項目は「公式では確認できず」と記載します。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/shindan/" className="btn-primary">
              4問の売り方診断を受ける
            </Link>
            <Link
              href="/compare/"
              className="btn-ghost !border-steel-500 !bg-transparent !text-chalk hover:!border-vermilion hover:!text-vermilion"
            >
              27社の比較表を見る
            </Link>
          </div>
        </div>
      </section>

      {/* カテゴリ導線 */}
      <section className="mx-auto max-w-site px-4 py-16 md:py-24">
        <p className="kicker mb-3">CATEGORY</p>
        <h2 className="section-title mb-4">車のタイプ別の売り方</h2>
        <p className="mb-10 max-w-2xl text-sm leading-loose text-steel-600">
          車買取の結果は、業者選びの前に、どの売り方を選ぶかによって変わります。輸入車・トラック・廃車・旧車には、それぞれ専門の買取サービスがあります。
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={cat.path}
              className="group relative border border-chalk-line bg-chalk-card p-6 transition-colors hover:border-vermilion"
            >
              <span className="font-display text-sm tracking-widest2 text-vermilion">
                {catNumbers[i]}
              </span>
              <h3 className="mt-3 font-display text-xl text-steel-900 group-hover:text-vermilion">
                {cat.name}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
                {cat.lead}
              </p>
              <p className="mt-4 text-xs text-steel-500">
                掲載:{" "}
                {cat.companySlugs
                  .map((s) => companies.find((c) => c.slug === s)?.name)
                  .filter(Boolean)
                  .join("・")}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 font-display text-vermilion opacity-0 transition-opacity group-hover:opacity-100"
              >
                →
              </span>
            </Link>
          ))}
          <div className="flex flex-col justify-center border border-dashed border-steel-300 bg-chalk p-6">
            <h3 className="font-display text-xl text-steel-900">
              該当するカテゴリがわからない場合
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
              車の種類・状態・重視すること・売却時期の4問に答えると、あらかじめ定めた判定ルールにもとづき、適したカテゴリと業者を提示します。判定ロジックはすべて開示しています。
            </p>
            <Link href="/shindan/" className="btn-primary mt-5 text-sm">
              売り方診断へ
            </Link>
          </div>
        </div>
      </section>

      {/* 軽自動車・メーカー別導線 */}
      <section className="border-y border-chalk-line bg-chalk-warm">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <p className="kicker mb-3">KEI CARS &amp; MAKERS</p>
          <h2 className="section-title mb-4">軽自動車・メーカー別の確認事項</h2>
          <p className="mb-10 max-w-2xl text-sm leading-loose text-steel-600">
            軽自動車は普通車と制度が異なり、手続きの窓口や必要な印鑑も異なります。メーカー別のページでは、車検証で確認する項目と査定前の準備を整理しています。車種名・スペック・買取価格の目安は掲載しておりません。
          </p>
          <ul className="grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/kei/", title: "軽自動車の買取", desc: "売却前の全体像と売却先の選び方" },
              { href: "/guide/keijidousha-shorui/", title: "軽自動車の売却に必要な書類", desc: "実印・印鑑証明書が要らない理由と再発行窓口" },
              { href: "/maker/suzuki/", title: "スズキ車の買取", desc: "軽自動車として売るときの確認事項" },
              { href: "/maker/daihatsu/", title: "ダイハツ車の買取", desc: "乗用・貨物の登録区分の確認" },
              { href: "/maker/toyota/", title: "トヨタ車の買取", desc: "普通車の書類と下取りとの違い" },
              { href: "/maker/honda/", title: "ホンダ車の買取", desc: "軽自動車と普通車の両方を想定した準備" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block border border-chalk-line bg-chalk-card px-4 py-4 transition-colors hover:border-vermilion"
                >
                  <span className="font-display text-steel-900">{l.title}</span>
                  <span className="mt-1 block text-xs text-steel-500">{l.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 比較表導線 */}
      <section className="bg-steel-800 text-chalk">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <div className="md:flex md:items-end md:justify-between md:gap-8">
            <div>
              <p className="kicker mb-3">COMPARISON</p>
              <h2 className="font-display text-2xl leading-snug md:text-3xl">
                掲載27社の統一基準による比較
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-steel-200">
                査定料・手数料・引取と書類・受付時間・入金タイミング・キャンセル規定・運営会社と古物商許可番号について、27社すべてを統一フォーマットで比較しています（{CHECKED_RANGE_LABEL}公式確認）。
              </p>
            </div>
            <Link href="/compare/" className="btn-primary mt-8 shrink-0 md:mt-0">
              比較表を見る
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-px border border-steel-700 bg-steel-700 sm:grid-cols-4">
            {companies.map((c) => (
              <li key={c.slug} className="bg-steel-800">
                <Link
                  href={`/gyosha/${c.slug}/`}
                  className="block px-4 py-4 text-center font-display text-sm tracking-wider text-chalk transition-colors hover:bg-steel-700 hover:text-vermilion"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 編集方針 */}
      <section className="mx-auto max-w-site px-4 py-16 md:py-24">
        <p className="kicker mb-3">POLICY</p>
        <h2 className="section-title mb-8">当サイトの編集方針</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "公式情報にもとづく正確な情報提供に努めます",
              d: `掲載する条件はすべて各社公式サイトで確認し、確認日を明記します。現在の掲載社は${CHECKED_RANGE_LABEL}に確認しています。`,
            },
            {
              t: "未確認の情報は掲載しません",
              d: "公式で確認できなかった項目は「公式では確認できず」と表示します。架空の買取金額・実績・口コミは一切掲載しません。",
            },
            {
              t: "独自の評価付けは行いません",
              d: "当サイト独自の星評価やAggregateRatingの構造化データは使用しません。判断材料は、条件の事実比較として提供します。",
            },
          ].map((x) => (
            <div key={x.t} className="border-t-2 border-vermilion pt-4">
              <h3 className="font-display text-lg text-steel-900">{x.t}</h3>
              <p className="mt-3 text-[13px] leading-loose text-steel-600">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm">
          <Link href="/content-policy/" className="text-vermilion underline underline-offset-4 hover:text-vermilion-deep">
            コンテンツ制作ポリシーの全文
          </Link>
        </p>
      </section>
    </>
  );
}
