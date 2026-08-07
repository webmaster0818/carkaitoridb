import type { Metadata } from "next";
import Link from "next/link";
import { categories, companies } from "@/lib/companies";
import { CHECKED_LABEL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME}｜${SITE_TAGLINE}`,
  description:
    "車買取8社を公式サイトで一次確認し、査定料・入金・キャンセル規定・古物商許可を確認日つきで比較。外車・トラック重機・廃車事故車・旧車・オークション型のカテゴリ別に、中立の視点で「どう売るか」を先に整理できます。",
  alternates: { canonical: "/" },
};

const catNumbers = ["01", "02", "03", "04", "05"];

export default function HomePage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-steel-900 text-chalk">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 items-center justify-center border-l border-steel-700 md:flex"
        >
          <p className="tate font-display text-sm text-steel-400">
            一次確認・確認日明記・口コミ非創作
          </p>
        </div>
        <div className="mx-auto max-w-site px-4 py-20 md:py-28">
          <p className="kicker mb-6 !text-vermilion">CAR SELLING GUIDE</p>
          <h1 className="font-display text-3xl leading-relaxed md:text-5xl md:leading-relaxed">
            売る前の5分で読む、
            <br />
            <span className="text-vermilion">中立</span>の車買取ナビ。
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-loose text-steel-200 md:text-base">
            一括査定に丸投げする前に、あなたの車は「どこで・どう売るのが合うか」を先に整理しませんか。掲載8社のサービス条件は、すべて各社公式サイトを一次確認し、確認日（{CHECKED_LABEL}）を明記。確認できなかった項目は「公式では確認できず」と正直に書きます。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/shindan/" className="btn-primary">
              4問で売り方診断をする
            </Link>
            <Link
              href="/compare/"
              className="btn-ghost !border-steel-500 !bg-transparent !text-chalk hover:!border-vermilion hover:!text-vermilion"
            >
              8社の比較表を見る
            </Link>
          </div>
        </div>
      </section>

      {/* カテゴリ導線 */}
      <section className="mx-auto max-w-site px-4 py-16 md:py-24">
        <p className="kicker mb-3">CATEGORY</p>
        <h2 className="section-title mb-4">車のタイプ別に、売り方から考える</h2>
        <p className="mb-10 max-w-2xl text-sm leading-loose text-steel-600">
          車買取は「どの業者が良いか」の前に「どの売り方が合うか」で結果が変わります。輸入車・トラック・廃車・旧車には、それぞれ専門の買取サービスがあります。
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
              どれに当てはまるか分からない？
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
              車の種類・状態・重視することの4問に答えると、ルールベースで合うカテゴリと業者を提示します。判定ロジックは全て開示しています。
            </p>
            <Link href="/shindan/" className="btn-primary mt-5 text-sm">
              売り方診断へ
            </Link>
          </div>
        </div>
      </section>

      {/* 比較表導線 */}
      <section className="bg-steel-800 text-chalk">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <div className="md:flex md:items-end md:justify-between md:gap-8">
            <div>
              <p className="kicker mb-3">COMPARISON</p>
              <h2 className="font-display text-2xl leading-snug md:text-3xl">
                掲載8社を、同じ物差しで並べる
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-steel-200">
                査定料・手数料・引取と書類・受付時間・入金タイミング・キャンセル規定・運営会社と古物商許可番号。8社すべてを統一フォーマットで比較しています（{CHECKED_LABEL}公式確認）。
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
        <h2 className="section-title mb-8">このサイトの約束</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "公式サイトの一次確認",
              d: `掲載する条件はすべて各社公式サイトで確認し、確認日を明記します。今回の確認日は${CHECKED_LABEL}です。`,
            },
            {
              t: "確認できないことは書かない",
              d: "公式で確認できなかった項目は「公式では確認できず」と表示します。架空の買取金額・実績・口コミは一切掲載しません。",
            },
            {
              t: "評価を装飾しない",
              d: "自前の星評価やAggregateRatingの構造化データは使いません。判断材料は条件の事実比較で提供します。",
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
            コンテンツ制作ポリシーの全文を読む
          </Link>
        </p>
      </section>
    </>
  );
}
