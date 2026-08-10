import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { CHECKED_LABEL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "車を売ったときの自動車税・還付の仕組み｜売却と廃車で扱いが変わる理由",
  description:
    "自動車税（種別割）は4月1日時点の所有者に課税される仕組みと、売却（移転登録）では還付されず抹消登録（廃車）なら普通車は月割還付がある一般知識を解説。軽自動車税に月割還付がないこと、リサイクル料金の扱いも整理し、個別の税務は都道府県税事務所への確認を案内します。",
  alternates: { canonical: "/guide/zeikin/" },
};

const PATH = "/guide/zeikin/";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車を売ったときの自動車税・還付の仕組み",
  description:
    "自動車税（種別割）の課税の仕組みと、売却・廃車での還付の扱い、リサイクル料金の一般知識を解説する記事。",
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  author: { "@type": "Organization", name: SITE_NAME },
  publisher: { "@type": "Organization", name: "株式会社MediaX" },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const faqs = [
  {
    q: "年度の途中で車を売ったら、払った自動車税は戻ってきますか？",
    a: "売却（移転登録）の場合、都道府県からの月割還付はないというのが一般的な制度の扱いです。そのかわり、残り期間に相当する額を買取価格に織り込む形で調整する商慣行が広く行われています。査定額に税金相当分が含まれているかどうかは業者・契約によって異なるため、契約前に「自動車税の未経過分の扱い」を確認しておきましょう。個別の課税・還付の判断は、お住まいの都道府県税事務所にご確認ください。",
  },
  {
    q: "廃車にした場合の自動車税はどうなりますか？",
    a: "普通車は、抹消登録（一時抹消・永久抹消）を行うと、翌月以降の残り期間分の自動車税（種別割）が月割で還付される制度があるのが一般的です。還付は抹消登録の手続きが完了して初めて発生するため、廃車買取ではいつ抹消手続きが行われるかが重要になります。手続きの時期と還付金の受け取り方は契約前に業者へ確認し、制度の詳細は都道府県税事務所にご確認ください。",
  },
  {
    q: "軽自動車を年度途中で手放した場合、税金は戻りますか？",
    a: "軽自動車税（種別割）には月割還付の制度がありません。4月1日時点の所有者にその年度分が課税され、年度途中に売却や廃車をしても還付されないのが制度の扱いです。このため軽自動車では、手放す時期によって税負担の感じ方が変わりますが、いつ売るべきかは車の状態や相場変動もからむため一概には言えません。個別の課税については市区町村の窓口にご確認ください。",
  },
  {
    q: "リサイクル料金は売却時にどうなりますか？",
    a: "リサイクル料金を預託済みの車を売却する場合、その車を最後に廃車にする所有者が負担する仕組みのため、預託金相当額を次の所有者（買取業者）から受け取る形で精算する商慣行が一般的です。買取金額と一体で表示される場合と別枠の場合があるため、見積もりの内訳で「リサイクル預託金相当額」がどう扱われているかを確認しましょう。廃車にする場合は、預託済みの料金が解体時のリサイクルに充当されるため返金はされません。",
  },
];

export default function GuideZeikinPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "自動車税・還付の仕組み", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">TAX AND REFUND</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          車を売ったときの自動車税・還付の仕組み
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          車を手放すとき、「払った自動車税は戻るのか」は多くの人が迷うポイントです。結論から言うと、売却か廃車か、普通車か軽自動車かで扱いが変わります。このページでは制度の一般的な仕組みを整理します。なお、当サイトは税務の専門機関ではないため個別の判断は行いません。ご自身のケースの正確な取り扱いは、お住まいの都道府県税事務所（軽自動車は市区町村）にご確認ください。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-l-4 border-vermilion bg-chalk-card p-6">
          <h2 className="font-display text-lg text-steel-900">先に結論</h2>
          <ul className="mt-4 space-y-2 text-sm leading-loose text-steel-700">
            <li>・自動車税（種別割）は、毎年4月1日時点の所有者（使用者）にその年度分が課税される仕組みです。</li>
            <li>・普通車を「廃車」（抹消登録）にすると、残り期間分の月割還付を受けられる制度があります。</li>
            <li>・「売却」（移転登録）では都道府県からの還付はなく、残り期間分を買取価格に織り込んで調整する商慣行が一般的です。</li>
            <li>・軽自動車税（種別割）には月割還付の制度がありません。</li>
            <li>・個別の課税・還付の判断は、都道府県税事務所・市区町村窓口に確認してください。</li>
          </ul>
        </section>

        {/* 基本の仕組み */}
        <section className="mt-14">
          <h2 className="section-title mb-5">自動車税（種別割）は「4月1日の所有者」に課税される</h2>
          <p className="text-sm leading-loose text-steel-700">
            自動車税（種別割）は、毎年4月1日時点で車検証上の所有者（所有権留保の場合は使用者）となっている人に、その年度1年分が課税される都道府県の税金です。5月ごろに納税通知書が届き、一括で納めるのが基本の流れです。年度の途中で車を手放しても、課税自体は4月1日時点の名義を基準に行われます。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            このため、車を手放すときに問題になるのが「すでに納めた残り期間分はどうなるのか」です。ここで扱いが分かれるのが、「売却＝移転登録」と「廃車＝抹消登録」の違いです。手続きの種類によって、都道府県から還付されるかどうかが変わります。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">売却（移転登録）では還付されない。調整は買取価格の中で</h2>
          <p className="text-sm leading-loose text-steel-700">
            買取業者への売却や個人間売買で名義を変える手続きは「移転登録」です。移転登録では車が登録されたまま次の所有者に引き継がれるため、都道府県からの自動車税の月割還付はないというのが一般的な制度の扱いです。「売ったのに税金が戻らないのはおかしい」と感じるかもしれませんが、制度上は翌年度から新しい所有者に課税が移る形で整理されています。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            そのかわり中古車の取引実務では、納税済みの残り期間に相当する額（未経過相当額）を買取価格に織り込んで調整する商慣行が広く行われています。つまり、税金そのものが戻るのではなく、価格の一部として受け取る形です。ただし、この調整をどう扱うかは業者や契約によって異なり、査定額に含めて一括表示される場合もあります。売却の際は、見積もりに自動車税の未経過分がどう反映されているかを確認しておくと、後の行き違いを防げます。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">廃車（抹消登録）なら普通車は月割還付の制度がある</h2>
          <p className="text-sm leading-loose text-steel-700">
            一方、車の登録を抹消する「廃車」の場合は扱いが異なります。普通車は、一時抹消登録または永久抹消登録（解体を伴う抹消）を行うと、抹消した月の翌月以降の残り期間分の自動車税（種別割）が月割で還付される制度があるのが一般的です。還付は抹消登録の完了が起点になるため、廃車手続きがいつ行われるかが実際の還付額に関わります。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            廃車買取サービスを利用する場合は、抹消手続きを業者が代行するのが通例なので、「いつ抹消されるのか」「還付金は誰がどう受け取るのか」を契約前に確認しておくことが大切です。掲載社では、廃車買取のハイシャルが自動車税還付金対応（普通車）を公式サイトに記載しています（{CHECKED_LABEL}確認）。還付金の扱いは業者・契約により異なるため、具体的な段取りは各社への確認が必要です。また、還付の要件や時期の正確な判断は、お住まいの都道府県税事務所にご確認ください。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">軽自動車税（種別割）には月割還付がない</h2>
          <p className="text-sm leading-loose text-steel-700">
            軽自動車にかかる軽自動車税（種別割）は市区町村の税金で、こちらも4月1日時点の所有者に年度分が課税されますが、普通車と違って月割還付の制度がありません。年度途中に売却しても廃車にしても、その年度分の税金は戻らない扱いです。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            また、4月1日をまたいで所有していると翌年度分が課税されるため、軽自動車を手放す時期を考えるときは、この基準日の存在を知っておくと判断材料になります。ただし、税金だけを理由に売却時期を決めるのが有利とは限りません。車の状態や需要の変動もからむため、当サイトでは時期の損得の断定はしません。個別の課税の取り扱いは市区町村の窓口にご確認ください。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">リサイクル料金の扱い</h2>
          <p className="text-sm leading-loose text-steel-700">
            自動車リサイクル法に基づき、多くの車では購入時などにリサイクル料金が預託されています。この料金は、その車を最終的に解体（廃車）するときのリサイクル費用に充てられるもので、負担するのは最後の所有者という仕組みです。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            したがって、車を売却する場合は、預託済みのリサイクル料金に相当する額（リサイクル預託金相当額）を次の所有者側から受け取る形で精算する商慣行が一般的です。見積もりでは買取金額と一体になっている場合と別枠表示の場合があるため、内訳を確認しましょう。逆に、自分の車をそのまま廃車（解体）にする場合は、預託済みの料金が解体時のリサイクルに使われるため返金はされません。預託状況はリサイクル券や自動車リサイクルシステムの照会で確認できます。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">確認するときの注意点</h2>
          <ul className="space-y-3">
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              「還付」と「買取価格への織り込み」を区別する。売却で受け取れるのは価格の一部であり、税の還付そのものではありません。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              廃車では抹消登録の完了時期と還付金の受け取り方を契約前に確認する。名義変更や抹消が遅れると翌年度の課税に影響し得ます。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              見積もりの内訳（自動車税未経過分・リサイクル預託金相当額）の扱いを確認し、書面で残す。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              本ページは一般的な制度の解説であり、個別の税務判断は行いません。正確な取り扱いは都道府県税事務所（軽自動車は市区町村）に確認してください。
            </li>
          </ul>
        </section>

        {/* 業者選び */}
        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">税金の扱いも含めて、条件を同じ物差しで</h2>
          <p className="mt-3 text-sm leading-loose text-steel-700">
            自動車税や還付金の扱いは、査定料・入金タイミング・キャンセル規定と同じく契約前に確認すべき条件の1つです。当サイトでは掲載8社の条件を公式サイトで一次確認し、確認日つきで比較しています。廃車を検討している場合は廃車買取カテゴリもご覧ください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">
              8社比較表を見る
            </Link>
            <Link href="/shindan/" className="btn-ghost">
              売り方診断（4問）を試す
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-5">自動車税と還付のよくある疑問</h2>
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
          <h2 className="section-title mb-5">あわせて読む</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/haisha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">廃車・不動車の買取</span>
                <span className="mt-1 block text-xs text-steel-500">抹消登録を伴う手放し方の判断ポイント</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/kaitori-vs-shitadori/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取と下取りはどっちが得？</span>
                <span className="mt-1 block text-xs text-steel-500">仕組みの違いと使い分けの判断軸</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取のトラブル対処法</span>
                <span className="mt-1 block text-xs text-steel-500">契約後キャンセル・二重査定への備え</span>
              </Link>
            </li>
            <li>
              <Link href="/gyosha/haishar/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">ハイシャルの買取サービスまとめ</span>
                <span className="mt-1 block text-xs text-steel-500">自動車税還付金対応（普通車）の一次確認値</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
