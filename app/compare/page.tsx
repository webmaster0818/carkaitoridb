import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  companies,
  ctaFor,
  feeSummary,
  fmt,
  pickupSummary,
  serviceTypeOf,
} from "@/lib/companies";
import { CHECKED_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "車買取8社の比較表【査定料・入金・キャンセル規定を公式確認】",
  description:
    "外車マスター・外車王・旧車王・ハイシャル・トラック王国・BeeTruck・セルカ・ストリマの8社を統一フォーマットで比較。査定料・手数料・引取・書類・受付時間・入金・キャンセル規定・運営会社と古物商許可を各社公式サイトで一次確認し、確認日を明記しています。",
  alternates: { canonical: "/compare/" },
};

export default function ComparePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "8社比較表", path: "/compare/" },
        ]}
      />
      <div className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">COMPARISON TABLE</p>
        <h1 className="font-display text-2xl leading-snug text-steel-900 md:text-4xl">
          車買取8社の統一比較表
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          掲載8社のサービス条件を、各社公式サイトの一次確認に基づいて同じ物差しで並べています。
          <strong className="text-steel-800">確認日: {CHECKED_LABEL}</strong>
          。公式サイトで確認できなかった項目は「公式では確認できず」とそのまま表示しています。最新の条件・詳細な規定は必ず各社公式サイトでご確認ください。
        </p>

        <div className="mt-10 overflow-x-auto border border-chalk-line">
          <table className="spec-table min-w-[1080px]">
            <thead>
              <tr>
                <th className="min-w-[8rem]">名称</th>
                <th className="min-w-[11rem]">サービス形態</th>
                <th className="min-w-[12rem]">査定料・手数料</th>
                <th className="min-w-[12rem]">引取・書類</th>
                <th className="min-w-[10rem]">受付</th>
                <th className="min-w-[12rem]">入金</th>
                <th className="min-w-[12rem]">キャンセル規定</th>
                <th className="min-w-[14rem]">運営会社・古物商許可</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c) => {
                const cta = ctaFor(c);
                return (
                  <tr key={c.slug}>
                    <td>
                      <Link
                        href={`/gyosha/${c.slug}/`}
                        className="font-display text-base text-vermilion underline underline-offset-4 hover:text-vermilion-deep"
                      >
                        {c.name}
                      </Link>
                      <a
                        href={cta.href}
                        rel={cta.rel}
                        target="_blank"
                        className="mt-2 block text-[11px] text-steel-500 hover:text-vermilion"
                      >
                        公式サイト ↗
                      </a>
                    </td>
                    <td>{serviceTypeOf(c)}</td>
                    <td>{feeSummary(c)}</td>
                    <td>{pickupSummary(c)}</td>
                    <td>{fmt(c.uketsuke)}</td>
                    <td>{fmt(c.nyukin)}</td>
                    <td>{fmt(c.cancel)}</td>
                    <td>
                      {c.operator.name}
                      <br />
                      <span className="text-xs text-steel-500">
                        古物商: {fmt(c.operator.kobutsu)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-steel-500">
          ※ 横にスクロールできます。表中の「公式では確認できず」は、{CHECKED_LABEL}
          時点の当サイト調査で公式サイト上に記載を発見できなかったことを意味します（サービスが存在しないという意味ではありません）。
        </p>

        <section className="mt-14 grid gap-4 md:grid-cols-2">
          <div className="border border-chalk-line bg-chalk-card p-6">
            <h2 className="font-display text-lg text-steel-900">
              カテゴリから絞り込む
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link className="text-vermilion underline underline-offset-4" href="/gaisha/">外車・輸入車の買取</Link></li>
              <li><Link className="text-vermilion underline underline-offset-4" href="/truck/">トラック・重機の買取</Link></li>
              <li><Link className="text-vermilion underline underline-offset-4" href="/haisha/">廃車・事故車・不動車の買取</Link></li>
              <li><Link className="text-vermilion underline underline-offset-4" href="/kyusha/">旧車・クラシックカーの買取</Link></li>
              <li><Link className="text-vermilion underline underline-offset-4" href="/auction/">オークション型・電話なしで売る</Link></li>
            </ul>
          </div>
          <div className="flex flex-col justify-center border border-chalk-line bg-steel-800 p-6 text-chalk">
            <h2 className="font-display text-lg">迷ったら4問診断</h2>
            <p className="mt-3 text-[13px] leading-relaxed text-steel-200">
              車の種類・状態・重視することに答えると、ルールベースで合うカテゴリと業者を提示します。
            </p>
            <Link href="/shindan/" className="btn-primary mt-5 self-start text-sm">
              売り方診断へ
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
