import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { CHECKED_LABEL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "査定で減額されやすい箇所と事前にできる準備｜洗車・記録簿・申告のポイント",
  description:
    "車の査定で減額されやすい箇所（外装の傷・内装の臭い・改造・修復歴・整備記録の有無）を一般知識として整理。不利な点を隠すことが後の減額トラブルの元になる理由と、洗車や記録簿の準備など売る前に無料でできる準備、修理してから売るのが基本非推奨とされる理由を解説します。",
  alternates: { canonical: "/guide/genka-point/" },
};

const PATH = "/guide/genka-point/";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "査定で減額されやすい箇所と事前にできる準備",
  description:
    "車の査定で確認されやすい減点箇所と、売る前に無料でできる準備、正直な申告が重要な理由を一般論として解説する記事。",
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  author: { "@type": "Organization", name: SITE_NAME },
  publisher: { "@type": "Organization", name: "株式会社MediaX" },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const faqs = [
  {
    q: "査定の前に洗車をすると査定額は上がりますか？",
    a: "洗車そのものが評価額を直接引き上げるという根拠はなく、当サイトでも金額への効果は断定しません。ただし、汚れで傷の状態が確認しにくい車より、手入れされた状態の車のほうが査定士が状態を正確に把握しやすく、大切に扱われてきた印象にもつながるため、無料でできる準備として洗車・車内清掃は一般的に推奨されています。",
  },
  {
    q: "傷やへこみを修理してから売ったほうがよいですか？",
    a: "基本的には修理せずそのまま査定に出すのが一般的な考え方です。修理費用がその分の評価上昇を上回るケースが多いとされているためです。買取業者は自社や提携先で安く補修できる体制を持っていることが多く、個人が事前に修理代を負担する合理性は低いとされます。判断に迷う場合は、修理前の状態で一度査定を受けてから考えても遅くありません。",
  },
  {
    q: "事故歴や故障箇所を黙っていたらどうなりますか？",
    a: "契約時の申告と実際の状態が異なると、引き渡し後に減額を求められる、いわゆる二重査定のトラブルに発展するおそれがあります。修復歴などは業者の再検査で判明することが多く、隠して得をする構造にはなっていません。不利に思える点も先に申告し、その状態を織り込んだ金額で契約するほうが、結果として安全です。",
  },
  {
    q: "整備記録簿が見つからない場合、売れなくなりますか？",
    a: "記録簿がなくても売却自体は一般に可能です。ただし、整備履歴を証明できる車のほうが状態の評価がしやすいとされるため、記録簿・点検整備手帳・取扱説明書・スペアキーなどは、見つかる範囲で揃えておくことが推奨されます。ディーラーや整備工場に整備履歴の記録が残っている場合もあるため、問い合わせてみる方法もあります。",
  },
];

export default function GuideGenkaPointPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "減額されやすい箇所と準備", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">ASSESSMENT PREP</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          査定で減額されやすい箇所と事前にできる準備
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          車の査定では、外装・内装・機関・履歴といった項目が一定の基準で確認されます。どこが見られるのかを知っておくと、売る前に無駄なお金をかけず、必要な準備だけを整えられます。このページでは、減額の対象になりやすい箇所の一般知識と、無料でできる準備、そして「隠さず申告する」ことがなぜ重要かを整理します。査定額そのものは車と状態によって変わるため、金額の断定はしません。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-l-4 border-vermilion bg-chalk-card p-6">
          <h2 className="font-display text-lg text-steel-900">先に結論</h2>
          <ul className="mt-4 space-y-2 text-sm leading-loose text-steel-700">
            <li>・確認されやすいのは、外装の傷・内装の臭いと汚れ・改造の有無・修復歴・整備記録の有無です。</li>
            <li>・不利な点を隠すのはNG。引き渡し後の減額トラブル（二重査定）の元になります。</li>
            <li>・無料でできる準備は、洗車・車内清掃・消臭、記録簿や純正パーツを揃えることです。</li>
            <li>・傷やへこみを修理してから売るのは基本非推奨。修理費が評価の上昇を上回りやすいとされています。</li>
          </ul>
        </section>

        {/* 解説 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">査定で減額の対象になりやすい箇所</h2>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">外装: 傷・へこみ・塗装の状態</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                ボディの傷やへこみ、再塗装の跡、色あせなどは、査定でまず確認される代表的な項目です。中古車査定では傷の大きさや深さに応じて減点する基準が用いられるのが一般的で、パネルをまたぐ大きな損傷ほど影響が出やすいとされます。小さな擦り傷を気にしすぎる必要はありませんが、状態は正確に伝えられるようにしておきましょう。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">内装: 臭い・汚れ・シートの傷み</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                タバコやペットの臭い、シートの焦げ跡やシミ、天井の汚れなどは、次の買い手が敬遠しやすいため査定でも確認されやすい項目です。臭いは自分では気づきにくいのが厄介な点で、消臭・清掃である程度軽減できる余地があります。完全に消えなくても、車内を清潔に整えておくことは無料でできる有効な準備です。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">改造・社外パーツ</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                車高調整やマフラー交換などの改造は、好みが分かれるため一般的な査定ではマイナスに働きやすいとされます。純正パーツを保管している場合は、査定時にその旨を伝えましょう。純正に戻せる状態であることは評価の判断材料になります。なお、車種やパーツによっては専門業態で別の評価を受けられる場合もあるため、決めつけずに相談するのが安全です。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">修復歴（骨格部位の修理・交換）</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                修復歴とは、単なる外板の傷ではなく、車の骨格（フレーム）部位を修理・交換した履歴を指すのが業界の一般的な定義です。修復歴の有無は評価に大きく影響し、査定士の検査やオークション出品時の検査で判明することが多い項目です。だからこそ、後述するとおり最初から正直に申告することが重要になります。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">整備記録の有無・機関の状態</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                定期点検整備記録簿が残っている車は、整備の履歴を客観的に確認できるため状態の評価がしやすいとされます。逆に記録が何もないと、実際にはきちんと整備されていた車でもそれを証明できません。エンジン警告灯の点灯や異音など機関系の症状も確認対象なので、把握している症状はメモしておきましょう。オイル交換などの消耗品管理の履歴も、日頃の扱いを示す材料になります。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">隠すのはNG。申告すべきことを先に伝える理由</h2>
          <p className="text-sm leading-loose text-steel-700">
            事故歴・修復歴・故障箇所・冠水歴など、申告を求められた事項を隠したり曖昧にしたりするのは避けるべきです。契約時の申告内容と実際の状態が食い違うと、車の引き渡し後に「再査定の結果、減額します」と求められる、いわゆる二重査定のトラブルに発展するおそれがあります。減額の責任がどちらにあるかで揉める事態は、最初の申告が正確であれば大部分を避けられます。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            修復歴などは業者側の検査や流通過程の検査で判明することが多く、隠して得をする構造にはなっていません。不利に見える情報も先に伝え、それを織り込んだ金額で契約するほうが、後から覆されない分だけ確実です。なお、業界には契約後の減額をしない方針を掲げる業者もあり、掲載社では旧車王が二重査定なし（JPUC適正買取店）を、ハイシャルが見積後の減額一切なしを公式サイトで訴求しています（{CHECKED_LABEL}確認）。こうした規定の有無は業者選びの比較材料になります。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">売る前に無料でできる準備</h2>
          <ul className="space-y-3">
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              洗車と車内清掃をする。金額への直接の効果は断定できませんが、状態を正確に見てもらいやすくなり、車の扱われ方の印象にもつながります。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              書類と付属品を揃える。定期点検整備記録簿・取扱説明書・スペアキー・保証書などは、見つかる範囲でひとまとめにしておきます。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              純正パーツを用意する。社外パーツに交換している場合、保管してある純正部品があることを査定時に伝えられるようにします。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              申告事項をメモにする。事故・修理の履歴、気になる症状、装備の不具合などを書き出しておくと、査定時の伝え漏れを防げます。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              車内の私物を片付ける。査定の妨げになるほか、売却決定後の引き渡しでの回収漏れ防止にもなります。駐車券やETCカード、車検証入れの中身も忘れずに確認しておきましょう。
            </li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">修理してから売るのは基本非推奨</h2>
          <p className="text-sm leading-loose text-steel-700">
            「傷を直してから売ったほうが高くなるのでは」と考えたくなりますが、一般論としては非推奨です。修理にかかる費用が、修理による評価の上昇分を上回るケースが多いとされているためです。買取業者は自社工場や提携先で一般の板金価格より安く補修できる体制を持っていることが多く、傷のある状態を前提に値付けをします。個人が先に修理代を負担しても、その分がそのまま査定額に反映されるとは限りません。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            また、年式の古い車では、再塗装や部品交換がかえってオリジナル性を損なう場合もあります。手を入れるかどうか迷う車は、まず現状のまま査定を受け、必要なら専門業態に相談してから判断するのが安全な順序です。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            同じ理由で、査定直前の車検取得やタイヤ交換など、まとまった出費を伴う準備も慎重に判断すべきです。かけた費用が評価にそのまま上乗せされるとは限らないため、迷ったら「お金のかかる準備は査定を受けてから考える」を原則にすると、無駄な出費を避けやすくなります。
          </p>
        </section>

        {/* 業者選び */}
        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">準備ができたら、条件を同じ物差しで比べる</h2>
          <p className="mt-3 text-sm leading-loose text-steel-700">
            減額に関わるのは車の状態だけではありません。契約後の減額（二重査定）やキャンセルに関する規定は業者ごとに異なります。当サイトでは掲載8社の査定料・引取費用・入金タイミング・キャンセル規定を公式サイトで一次確認し、確認日つきで比較しています。
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
          <h2 className="section-title mb-5">査定前の準備のよくある疑問</h2>
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
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取のトラブル対処法</span>
                <span className="mt-1 block text-xs text-steel-500">二重査定・契約後キャンセルへの備え</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/kaitori-vs-shitadori/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取と下取りはどっちが得？</span>
                <span className="mt-1 block text-xs text-steel-500">仕組みの違いと使い分けの判断軸</span>
              </Link>
            </li>
            <li>
              <Link href="/kyusha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">旧車・クラシックカーの買取</span>
                <span className="mt-1 block text-xs text-steel-500">年式の古い車は評価軸の異なる専門業態へ</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取8社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">同じ物差しで8社の条件を並べる</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
