import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { CHECKED_LABEL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "車の税金の返金について｜売却では還付なし、廃車なら月割で還付（計算例・重量税）【2026年10月確認】",
  description:
    "車を売っても自動車税は都道府県から返金されません（東京都主税局FAQ）。廃車（抹消登録）の場合、普通車は翌月以降の分が月割で還付され、軽自動車は還付されません。2.0Lの車を9月に廃車した場合の計算例（18,000円）、重量税の還付条件、還付金が届くまでの期間を、公的機関の記載にもとづいてご説明します。",
  alternates: { canonical: "/guide/zeikin/" },
};

const PATH = "/guide/zeikin/";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車の税金の返金について：売却と廃車で異なる自動車税・重量税の還付の仕組み",
  description:
    "自動車税（種別割）の課税の仕組みと、売却・廃車での還付の扱い、リサイクル料金の一般知識について解説しています。",
  datePublished: "2026-08-10",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: SITE_NAME },
  publisher: { "@type": "Organization", name: "株式会社MediaX" },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const SRC_TOKYO_FAQ = "https://www.tax.metro.tokyo.lg.jp/shitsumon/automobiles/j";
const SRC_TOKYO_RATE = "https://www.tax.metro.tokyo.lg.jp/kazei/automobiles/shubetsu";
const SRC_NTA = "https://www.nta.go.jp/taxes/shiraberu/taxanswer/inshi/7193.htm";

/** 東京都主税局「自動車税種別割」7 税率（年額）自家用乗用車の抜粋（2026-10-15確認・グリーン化特例の適用を受けない車） */
const RATES: { cc: string; after: string; before: string }[] = [
  { cc: "1リットル以下", after: "25,000", before: "29,500" },
  { cc: "1リットル超〜1.5リットル以下", after: "30,500", before: "34,500" },
  { cc: "1.5リットル超〜2リットル以下", after: "36,000", before: "39,500" },
  { cc: "2リットル超〜2.5リットル以下", after: "43,500", before: "45,000" },
  { cc: "2.5リットル超〜3リットル以下", after: "50,000", before: "51,000" },
  { cc: "3リットル超〜3.5リットル以下", after: "57,000", before: "58,000" },
  { cc: "3.5リットル超〜4リットル以下", after: "65,500", before: "66,500" },
  { cc: "4リットル超〜4.5リットル以下", after: "75,500", before: "76,500" },
  { cc: "4.5リットル超〜6リットル以下", after: "87,000", before: "88,000" },
  { cc: "6リットル超", after: "110,000", before: "111,000" },
];

const faqs = [
  {
    q: "車の税金は返金されますか？",
    a: "売却（名義変更）では、自動車税は都道府県から返金されません。東京都主税局のFAQは「年度の途中で移転登録（名義変更）された場合でも、前の所有者の方に1年分が課税され、新しい所有者の方には翌年度から課税されます」としています。返金（還付）されるのは普通車を廃車（抹消登録）した場合で、抹消登録した月の翌月以降の分が月割で戻ります。軽自動車税には月割還付がありません。解体を伴う廃車で車検が1か月以上残っていれば、自動車重量税も申請で還付されます（国税庁タックスアンサーNo.7193）。いずれも2026年10月15日確認。",
  },
  {
    q: "廃車にした自動車税の還付金はいつ、どうやって受け取れますか？",
    a: "東京都の場合、還付金が発生すると納税義務者に自動的に通知が送られ、別途の還付申請は不要です。通知が届くまでは抹消登録等の確認から1か月程度で、5万円以下はゆうちょ銀行の「振替払出証書」を郵便局等で換金、5万円超は口座振替依頼書を返送して振込で受け取ります。都税の未納がある場合は未納額に充当されます（東京都主税局「自動車と税金」FAQ Q31・2026年10月15日確認）。他の道府県の運用は各県税事務所にご確認ください。",
  },
  {
    q: "年度の途中で車を売ったら、払った自動車税は戻ってきますか？",
    a: "売却（移転登録）の場合、都道府県からの月割還付はないというのが一般的な制度の扱いです。そのかわり、残り期間に相当する額を買取価格に織り込む形で調整する商慣行が広く行われています。査定額に税金相当分が含まれているかどうかは業者・契約によって異なるため、契約前に「自動車税の未経過分の扱い」を確認されることをおすすめします。個別の課税・還付の判断は、お住まいの都道府県税事務所にご確認ください。",
  },
  {
    q: "廃車にした場合の自動車税はどうなりますか？",
    a: "普通車は、抹消登録（一時抹消・永久抹消）を行うと、翌月以降の残り期間分の自動車税（種別割）が月割で還付される制度があるのが一般的です。還付は抹消登録の手続きが完了して初めて発生するため、廃車買取ではいつ抹消手続きが行われるかが重要になります。手続きの時期と還付金の受け取り方は契約前に業者へ確認し、制度の詳細は都道府県税事務所にご確認ください。",
  },
  {
    q: "軽自動車を年度途中で手放した場合、税金は戻りますか？",
    a: "軽自動車税（種別割）には月割還付の制度がありません。4月1日時点の所有者にその年度分が課税され、年度途中に売却や廃車をしても還付されないのが制度の扱いです。このため軽自動車では手放す時期によって税負担が変わりますが、売却の時期は車の状態や相場の変動も関係するため、一概には判断できません。個別の課税については市区町村の窓口にご確認ください。",
  },
  {
    q: "リサイクル料金は売却時にどうなりますか？",
    a: "リサイクル料金を預託済みの車を売却する場合、その車を最後に廃車にする所有者が負担する仕組みのため、預託金相当額を次の所有者（買取業者）から受け取る形で精算する商慣行が一般的です。買取金額と一体で表示される場合と別枠の場合があるため、見積もりの内訳で「リサイクル預託金相当額」がどのように扱われているかをご確認ください。廃車にする場合は、預託済みの料金が解体時のリサイクルに充当されるため返金はされません。",
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
          車の税金の返金について：売却と廃車で異なる自動車税・重量税の還付の仕組み
        </h1>
        <p className="mt-3 text-xs text-steel-500">
          最終更新: <time dateTime="2026-10-15">2026年10月15日</time>（東京都主税局・国税庁の記載を確認）
        </p>
        <div className="mt-5 max-w-3xl border-l-4 border-vermilion bg-chalk-card px-5 py-4">
          <p className="text-[15px] font-bold leading-loose text-steel-900">
            要点：車を売却した（名義変更した）だけでは、納めた自動車税は都道府県から返金されません。返金（還付）されるのは普通車を廃車（抹消登録）したときで、抹消した月の翌月から3月までの分が月割で戻ります（例：年36,000円の2.0Lの車を9月に抹消→10〜3月の6か月分18,000円）。軽自動車税は廃車しても戻りません。解体して永久抹消し車検が1か月以上残っていれば、自動車重量税も申請で戻ります（出典：東京都主税局「自動車と税金」FAQ Q10・Q12・Q30、国税庁タックスアンサーNo.7193・確認日 2026-10-15）。
          </p>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          車を手放すとき、「納めた自動車税は戻るのか」は多くの方が迷われる点です。売却か廃車か、普通車か軽自動車かによって扱いが変わります。本ページでは、制度の一般的な仕組みをご説明します。なお、当サイトは税務の専門機関ではないため個別の判断は行いません。ご自身のケースの正確な取り扱いは、お住まいの都道府県税事務所（軽自動車は市区町村）にご確認ください。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-l-4 border-vermilion bg-chalk-card p-6">
          <h2 className="font-display text-lg text-steel-900">売却と廃車で異なる自動車税の還付の扱い</h2>
          <ul className="mt-4 space-y-2 text-sm leading-loose text-steel-700">
            <li>・自動車税（種別割）は、毎年4月1日時点の所有者（使用者）にその年度分が課税される仕組みです。</li>
            <li>・普通車を「廃車」（抹消登録）にすると、残り期間分の月割還付を受けられる制度があります。</li>
            <li>・「売却」（移転登録）では都道府県からの還付はなく、残り期間分を買取価格に織り込んで調整する商慣行が一般的です。</li>
            <li>・軽自動車税（種別割）には月割還付の制度がありません。</li>
            <li>・個別の課税・還付の判断は、都道府県税事務所・市区町村窓口にご確認ください。</li>
          </ul>
        </section>

        {/* 基本の仕組み */}
        <section className="mt-14">
          <h2 className="section-title mb-5">自動車税（種別割）は「4月1日の所有者」に課税される</h2>
          <p className="text-sm leading-loose text-steel-700">
            自動車税（種別割）は、毎年4月1日時点で車検証上の所有者（所有権留保の場合は使用者）となっている人に、その年度1年分が課税される都道府県の税金です。5月ごろに納税通知書が届き、一括で納めるのが基本の流れです。年度の途中で車を手放しても、課税自体は4月1日時点の名義を基準に行われます。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            このため、車を手放す際に問題となるのが「すでに納めた残り期間分の扱い」です。扱いが分かれるのは、手続きが「売却（移転登録）」と「廃車（抹消登録）」のどちらにあたるかという点です。手続きの種類によって、都道府県から還付されるかどうかが変わります。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">売却（移転登録）時の扱いと買取価格での調整</h2>
          <p className="text-sm leading-loose text-steel-700">
            買取業者への売却や個人間売買で名義を変える手続きは「移転登録」です。移転登録では車が登録されたまま次の所有者に引き継がれるため、都道府県からの自動車税の月割還付はないというのが一般的な制度の扱いです。売却しても税金が戻らない点に疑問を持たれる方もいらっしゃいますが、制度上は翌年度から新しい所有者に課税が移る形で整理されています。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            そのかわり中古車の取引実務では、納税済みの残り期間に相当する額（未経過相当額）を買取価格に織り込んで調整する商慣行が広く行われています。税金そのものが還付されるのではなく、価格の一部として受け取る形となります。ただし、この調整をどう扱うかは業者や契約によって異なり、査定額に含めて一括表示される場合もあります。売却の際は、見積もりに自動車税の未経過分がどのように反映されているかをご確認いただくことで、後の行き違いを防ぐことができます。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">廃車（抹消登録）時の普通車の月割還付</h2>
          <p className="text-sm leading-loose text-steel-700">
            一方、車の登録を抹消する「廃車」の場合は扱いが異なります。普通車は、一時抹消登録または永久抹消登録（解体を伴う抹消）を行うと、抹消した月の翌月以降の残り期間分の自動車税（種別割）が月割で還付される制度があるのが一般的です。還付は抹消登録の完了が起点になるため、廃車手続きがいつ行われるかが実際の還付額に関わります。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            廃車買取サービスを利用する場合は、抹消手続きを業者が代行するのが通例なので、「いつ抹消されるのか」「還付金を誰がどのように受け取るのか」を契約前にご確認ください。掲載社では、廃車買取のハイシャルが自動車税還付金対応（普通車）を公式サイトに記載しています（{CHECKED_LABEL}確認）。還付金の扱いは業者・契約により異なるため、具体的な段取りは各社への確認が必要です。また、還付の要件や時期の正確な判断は、お住まいの都道府県税事務所にご確認ください。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">軽自動車税（種別割）の還付の扱い</h2>
          <p className="text-sm leading-loose text-steel-700">
            軽自動車にかかる軽自動車税（種別割）は市区町村の税金で、こちらも4月1日時点の所有者に年度分が課税されますが、普通車と違って月割還付の制度がありません。年度途中に売却しても廃車にしても、その年度分の税金は戻らない扱いです。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            また、4月1日をまたいで所有していると翌年度分が課税されるため、軽自動車を手放す時期を考えるときは、この基準日が判断材料の一つとなります。ただし、税金だけを理由に売却時期を決めることが有利とは限りません。車の状態や需要の変動も関係するため、当サイトでは売却時期の損得について断定を控えます。個別の課税の取り扱いは市区町村の窓口にご確認ください。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">廃車で戻る自動車税の計算方法と計算例</h2>
          <p className="text-sm leading-loose text-steel-700">
            東京都主税局は「年度の途中に自動車を抹消登録（廃車）された場合は、抹消登録した月の翌月から月割で減額します」と説明しています。廃車した日は「業者等に自動車を引き渡した日ではなく、運輸支局や自動車検査登録事務所で実際に抹消登録した日」です（
            <a href={SRC_TOKYO_FAQ} rel="nofollow noopener" target="_blank" className="text-vermilion underline underline-offset-4">東京都主税局 FAQ Q12</a>・2026年10月15日確認）。
          </p>
          <div className="mt-5 border border-chalk-line bg-chalk-card px-5 py-4 text-sm leading-loose text-steel-800">
            <p className="font-bold">還付額の目安 ＝ 年税額 ÷ 12 × 抹消登録した月の翌月から3月までの月数</p>
            <p className="mt-2">例：令和元年10月1日以後に初回登録した自家用の2.0Lの乗用車（年36,000円）を9月に抹消登録 → 10月〜3月の6か月分 ＝ 36,000 ÷ 12 × 6 ＝ <strong>18,000円</strong></p>
            <p className="mt-2 text-xs text-steel-500">※3月に抹消した場合は翌月以降の残りがないため還付はありません。グリーン化特例・減免の適用車、端数処理、都税の未納がある場合（未納額に充当）は実額が変わります。正確な額は都道府県税事務所の通知にてご確認ください。</p>
          </div>
          <h3 className="mt-8 font-display text-base text-steel-900">自家用乗用車の自動車税（年額・東京都の税率表の抜粋）</h3>
          <div className="mt-3 overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>総排気量</th>
                  <th>令和元年10月1日以後 初回新規登録</th>
                  <th>令和元年9月30日以前 初回新規登録</th>
                </tr>
              </thead>
              <tbody>
                {RATES.map((r) => (
                  <tr key={r.cc}>
                    <th>{r.cc}</th>
                    <td>{r.after}円</td>
                    <td>{r.before}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-steel-500">
            出典：<a href={SRC_TOKYO_RATE} rel="nofollow noopener" target="_blank" className="underline underline-offset-4">東京都主税局「自動車税種別割」7 税率（年額）</a>（自家用・白ナンバー乗用車。電気自動車は1リットル以下と同額。グリーン化特例の適用を受けない車の抜粋・2026年10月15日確認）。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">還付金が届くまでの流れ（東京都の場合）</h2>
          <ul className="space-y-2 text-sm leading-loose text-steel-700">
            <li>・還付金が発生すると、納税義務者に自動的に通知が送られます。別途の還付申請は不要です。</li>
            <li>・通知が届くまでは、抹消登録等が確認されてから1か月程度かかります。</li>
            <li>・5万円以下はゆうちょ銀行の「振替払出証書」で郵便局等で換金、5万円超は口座振替依頼書を返送して振込で受け取ります。</li>
            <li>・都税の未納額がある場合は、還付金は未納額に充当されます。</li>
            <li>・廃車を業者に頼み、還付金を業者が受け取る場合は「還付委任状」を使います（廃車による還付は登録後3日目までに提出）。委任の有無は契約時にご確認ください。</li>
          </ul>
          <p className="mt-3 text-xs text-steel-500">
            出典：<a href={SRC_TOKYO_FAQ} rel="nofollow noopener" target="_blank" className="underline underline-offset-4">東京都主税局「自動車と税金」FAQ Q30〜Q32</a>（2026年10月15日確認）。他の道府県の手続きは各県税事務所にご確認ください。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">自動車重量税が還付される場合（解体かつ車検残存期間1か月以上）</h2>
          <p className="text-sm leading-loose text-steel-700">
            国税庁によると、自動車リサイクル法に基づいて使用済自動車が適正に解体された場合、申請により車検残存期間に相当する自動車重量税が還付されます。条件は、(1) 解体を事由とする永久抹消登録申請書または解体届出書を運輸支局等に出すのと同時に還付申請書を提出すること、(2) 車検残存期間が1か月以上あることです。申請書が運輸支局等に提出されてから還付金が支払われるまで、おおむね2か月半程度かかります（
            <a href={SRC_NTA} rel="nofollow noopener" target="_blank" className="text-vermilion underline underline-offset-4">国税庁タックスアンサーNo.7193</a>・2026年10月15日確認）。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            売却（名義変更）や一時抹消では重量税の還付はありません。自賠責保険は税金ではありませんが、抹消登録後に加入先の保険会社で解約すると残り期間に応じた返戻を受けられる場合があります。手続きと金額は加入先の保険会社にご確認ください。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">売却後に納税通知書が届いた場合の確認事項</h2>
          <p className="text-sm leading-loose text-steel-700">
            東京都主税局は、車を売却した場合は買い取った側が移転登録（名義変更）し自動車税事務所に申告しなければならず、「これらの登録・申告をしませんと、自動車を譲った方（売却した方）に引き続き自動車税が課税されます」と注意しています（FAQ Q10）。3月に売った車の納税通知が5月に届いた場合は、3月31日までに名義変更が完了したかを、依頼した業者にご確認ください。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">リサイクル料金の扱い</h2>
          <p className="text-sm leading-loose text-steel-700">
            自動車リサイクル法に基づき、多くの車では購入時などにリサイクル料金が預託されています。この料金は、その車を最終的に解体（廃車）するときのリサイクル費用に充てられるもので、負担するのは最後の所有者という仕組みです。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            したがって、車を売却する場合は、預託済みのリサイクル料金に相当する額（リサイクル預託金相当額）を次の所有者側から受け取る形で精算する商慣行が一般的です。見積もりでは買取金額と一体になっている場合と別枠表示の場合があるため、内訳をご確認ください。一方、ご自身の車をそのまま廃車（解体）にする場合は、預託済みの料金が解体時のリサイクルに使われるため返金はされません。預託状況はリサイクル券や自動車リサイクルシステムの照会で確認できます。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">確認するときの注意点</h2>
          <ul className="space-y-3">
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              「還付」と「買取価格への織り込み」は区別してお考えください。売却で受け取れるのは価格の一部であり、税の還付そのものではありません。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              廃車の場合は、抹消登録の完了時期と還付金の受け取り方を契約前にご確認ください。名義変更や抹消が遅れると、翌年度の課税に影響する可能性があります。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              見積もりの内訳（自動車税未経過分・リサイクル預託金相当額）の扱いを確認し、書面で残しておくことをおすすめします。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              本ページは一般的な制度の解説であり、個別の税務判断は行いません。正確な取り扱いは都道府県税事務所（軽自動車は市区町村）にご確認ください。
            </li>
          </ul>
        </section>

        {/* 業者選び */}
        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">税金の扱いを含めた条件の比較</h2>
          <p className="mt-3 text-sm leading-loose text-steel-700">
            自動車税や還付金の扱いは、査定料・入金タイミング・キャンセル規定と同じく契約前に確認すべき条件の1つです。当サイトでは掲載27社の条件を公式サイトで一次確認し、確認日を明記して比較しています。廃車をご検討の場合は廃車買取カテゴリもご覧ください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">
              27社比較表を見る
            </Link>
            <Link href="/shindan/" className="btn-ghost">
              売り方診断（4問）を試す
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-5">自動車税と還付に関するよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">抹消登録を伴う手放し方の判断材料</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/kaitori-vs-shitadori/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取と下取りの比較</span>
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
