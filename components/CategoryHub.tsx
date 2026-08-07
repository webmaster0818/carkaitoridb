import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CompanyCard from "@/components/CompanyCard";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { Category, categories, getCompany } from "@/lib/companies";
import { CHECKED_LABEL } from "@/lib/site";

export interface HubSectionItem {
  t: string;
  d: string;
}

export interface HubProps {
  cat: Category;
  h1: string;
  intro: string;
  kicker: string;
  /** そのカテゴリで売るときの判断ポイント（一般知識のみ・金額なし） */
  points: HubSectionItem[];
  /** 状況別の注意（一般知識のみ） */
  cautions: HubSectionItem[];
  faqs: { q: string; a: string }[];
}

export default function CategoryHub({
  cat,
  h1,
  intro,
  kicker,
  points,
  cautions,
  faqs,
}: HubProps) {
  const hubCompanies = cat.companySlugs.map((s) => getCompany(s));
  const otherCats = categories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: cat.name, path: cat.path },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">{kicker}</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-4xl md:leading-relaxed">
          {h1}
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">{intro}</p>

        {/* 判断ポイント（一般知識） */}
        <section className="mt-12">
          <h2 className="section-title mb-6">売る前に押さえる判断ポイント</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {points.map((p, i) => (
              <div key={p.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ ここに挙げたのは車の売却に関する一般的な知識です。個別の買取条件・金額はここでは扱いません。
          </p>
        </section>

        {/* 業者比較カード */}
        <section className="mt-14">
          <h2 className="section-title mb-2">このカテゴリで掲載中の業者</h2>
          <p className="mb-6 text-sm leading-loose text-steel-600">
            各社の条件は公式サイトを一次確認したものです（確認日: {CHECKED_LABEL}）。「公式では確認できず」の項目は、公式サイト上に記載を発見できなかったことを意味します。
          </p>
          <div className="grid gap-5 lg:grid-cols-2">
            {hubCompanies.map((c) => (
              <CompanyCard key={c.slug} company={c} />
            ))}
          </div>
        </section>

        {/* 状況別の注意（一般知識） */}
        <section className="mt-14">
          <h2 className="section-title mb-6">状況別の注意点</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">よくある質問</h2>
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
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取8社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">全カテゴリの掲載業者を同じ物差しで比較</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断（4問）</span>
                <span className="mt-1 block text-xs text-steel-500">状況に合うカテゴリをルールベースで判定</span>
              </Link>
            </li>
            {hubCompanies.map((c) => (
              <li key={c.slug}>
                <Link href={`/gyosha/${c.slug}/`} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{c.name}の一次確認まとめ</span>
                  <span className="mt-1 block text-xs text-steel-500">手数料・入金・キャンセル規定の詳細</span>
                </Link>
              </li>
            ))}
            {otherCats.map((c) => (
              <li key={c.slug}>
                <Link href={c.path} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{c.name}</span>
                  <span className="mt-1 block text-xs text-steel-500">別カテゴリの判断ポイントを見る</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
