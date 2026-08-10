import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, CHECKED_LABEL } from "@/lib/site";

const TITLE = "車検切れの車を売る方法｜公道を走れなくても売却できる手順と注意点";
const DESC =
  "車検が切れた車も売却できます。ただし公道を自走できないため、レッカー・積載車での引き取りが前提です。仮ナンバー（市区町村で取得）の一般知識、車検を通してから売るべきかの考え方、引取無料の業者の確認ポイントを中立の視点で整理します。";
const PATH = "/situation/shakenkire/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function ShakenkirePage() {
  const conclusions = [
    "車検が切れていても車は売却できます。車検の有無は「売れるかどうか」ではなく「どう運ぶか」の問題です。",
    "車検切れの車で公道を走ることは原則できません。売却はレッカー車・積載車による引き取りを前提に段取りするのが基本です。",
    "引き取り費用が有料か無料かで手取りが変わります。当サイト掲載のハイシャルはレッカー引取無料（全国47都道府県・一部島しょ部除く）と公式サイトに記載しています（2026年8月7日確認）。",
    "売却のためだけに車検を取り直す必要は通常ありません。車検費用をかけても、その分が査定に反映されるとは限らないためです。",
  ];

  const steps = [
    {
      t: "車検証で満了日と車の状態を確認する",
      d: "まず車検証（自動車検査証）で車検の満了日を確認し、あわせてエンジンがかかるか、自走できる状態かを把握します。車検切れの車は法律上公道を走れないだけで、車としての価値がなくなったわけではありません。動く・動かない、外装や機関の状態といった情報は、査定申し込み時に正確に伝える材料になります。",
    },
    {
      t: "「引き取りに来てもらう」前提で売り先を探す",
      d: "車検切れの車を売る場合の大前提は、自分で店舗に持ち込めないことです。そのため、出張査定とレッカー車・積載車での引き取りに対応している業者を選ぶことになります。引き取りの対応エリアと費用負担（無料か有料か）は業者によって異なるため、査定額だけでなく引き取り条件まで含めて比較するのが実務のポイントです。",
    },
    {
      t: "査定時に「車検切れ」を正確に伝える",
      d: "査定を申し込む際は、車検が切れていること、切れてからどのくらい経っているか、保管場所（自宅の車庫・月極駐車場など）を伝えましょう。この情報が引き取りの段取りと費用に直結します。伝え忘れると、当日の引き取り方法が変わったり、条件の再調整が必要になったりすることがあります。",
    },
    {
      t: "引き取り日と必要書類を確認して契約する",
      d: "条件に納得したら、引き取り日時と必要書類を確認して契約します。車検切れの車は長期間動かしていないケースが多く、書類の紛失や自賠責保険の期限切れも起こりがちです。書類が欠けている場合の再発行の段取りや、業者側でどこまで代行してもらえるかを契約前に確認しておくと安心です。",
    },
    {
      t: "引き渡しと名義変更・抹消手続きを完了させる",
      d: "引き渡し後は、名義変更または抹消登録が完了したことを必ず確認します。手続きが宙に浮いたままだと、自動車税（種別割）の納税通知が翌年度も自分に届くといった不都合が起こり得ます。手続き完了の連絡方法・時期を契約時に確認しておきましょう。",
    },
  ];

  const cautions = [
    {
      t: "車検切れのまま公道を走らせない",
      d: "車検切れの車を公道で運転すると、無車検運行として法律上の処分の対象になります。自賠責保険も切れていれば、その分の違反も重なります。「近所だから」「査定場所までだけ」といった理由でも運転してはいけません。移動は必ずレッカー・積載車か、後述の仮ナンバーの正規手続きによってください。",
    },
    {
      t: "仮ナンバーは「臨時運行のための例外」",
      d: "どうしても自走させる必要がある場合は、市区町村の窓口で仮ナンバー（臨時運行許可）を取得する方法があります。取得には有効な自賠責保険への加入が前提で、運行の目的・経路・期間を限定して許可される一般的な制度です。手数料や必要書類は市区町村によって異なるため、事前に窓口へ確認してください。売却目的であれば、業者の引き取りに任せるほうが手間は少なくなります。",
    },
    {
      t: "売却のために車検を取り直すのは慎重に",
      d: "「車検を通してから売ったほうが有利では」と考えがちですが、車検取得には検査費用や整備費用がかかる一方、その支出がそのまま査定に上乗せされるとは限らないと一般に言われています。売却が目的なら、まず車検切れのまま査定を受けて判断するのが合理的です。",
    },
    {
      t: "放置期間が長い車は書類と保険も点検",
      d: "長く放置していた車は、自賠責保険の期限切れ、納税の状況、書類の紛失といった付随の問題を抱えていることがあります。売却を決めたタイミングで、車検証・自賠責保険証明書・納税の状況をまとめて確認し、足りないものは再発行の段取りを進めましょう。",
    },
  ];

  const faqs = [
    {
      q: "車検が切れた車でも本当に売れますか？",
      a: "売却できます。車検切れは公道を自走できないという制約であり、車の価値そのものがなくなるわけではありません。当サイト掲載のハイシャルは、車検切れを含む「どんな車でも対応」とし、レッカー引取無料（全国47都道府県・一部島しょ部除く）と公式サイトに記載しています（2026年8月7日確認）。",
    },
    {
      q: "車検切れの車はどうやって業者に渡すのですか？",
      a: "レッカー車や積載車による引き取りが基本です。自分で運転して持ち込むことは原則できないため、出張査定と引き取りに対応した業者を選び、保管場所と車の状態を伝えて引き取り日を調整します。引き取り費用の有無は業者によって異なるので契約前に確認してください。",
    },
    {
      q: "仮ナンバーを取れば自分で運転できますか？",
      a: "市区町村で仮ナンバー（臨時運行許可）を取得し、有効な自賠責保険に加入していれば、許可された目的・経路・期間に限って運行できる一般的な制度があります。ただし手続きの手間がかかるため、売却が目的なら業者の引き取りを利用するほうが現実的な場合が多いでしょう。詳細はお住まいの市区町村の窓口にご確認ください。",
    },
    {
      q: "車検を通してから売ったほうがよいですか？",
      a: "通常はそのまま売却して問題ありません。車検取得の費用がそのまま査定額に反映されるとは限らないと一般に言われており、売却目的での車検取得は費用倒れになる可能性があります。迷う場合は、車検切れのまま査定を受けてから判断することをおすすめします。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "車検切れの車を売る方法", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">EXPIRED INSPECTION</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          車検切れの車を売る方法｜公道を走れなくても売却できる手順と注意点
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          「車検が切れているから、もう処分するしかない」と考える必要はありません。車検切れの車も売却は可能で、問題になるのは価値の有無ではなく「公道を走れない車をどう運ぶか」です。このページでは、車検切れの車を売る一般的な手順、仮ナンバーの基礎知識、引き取り条件の確認ポイントを整理します。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">先に結論</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 放置リスクの解説 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">車検切れのまま放置しないほうがよい理由</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              車検が切れた車を「そのうち考えよう」と置いたままにすると、負担だけが積み上がっていきます。登録が残っている限り自動車税（種別割）の課税対象であり続けるのが一般的な扱いで、乗っていない車の税負担が毎年発生します。また、屋外で放置された車は劣化が進み、動かせる状態からどんどん遠ざかっていきます。
            </p>
            <p>
              売る・廃車にする・車検を取って乗り続ける、のどれを選ぶにしても、判断を先送りしないことが負担を減らす近道です。売却や廃車で登録を整理すれば、税や保険の負担も含めて区切りをつけられます。このページでは「売る」を選ぶ場合の段取りを順に見ていきます。
            </p>
          </div>
        </section>

        {/* 手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">車検切れの車を売る5ステップ</h2>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ ここに挙げたのは車検切れ車の売却に関する一般的な知識です。仮ナンバーなどの行政手続きの詳細は各窓口にご確認ください。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">車検切れの車で気をつけたいこと</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 業者選び */}
        <section className="mt-14">
          <h2 className="section-title mb-2">車検切れの車の売り先の選び方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            車検切れの車は引き取りが必須になるため、引き取り費用が無料の業者を選べるかどうかが手取りに直結します。以下は当サイト掲載社の公式確認済み条件です（確認日: {CHECKED_LABEL}）。
          </p>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">引取無料のハイシャル（廃車買取）</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                掲載している<Link href="/gyosha/haishar/" className="text-vermilion underline underline-offset-4">ハイシャル</Link>は、事故車・不動車を含む「どんな車でも対応」とし、レッカー引取無料（全国47都道府県・一部島しょ部除く）、廃車手続きの書類代行無料、最短当日引き取りと公式サイトに記載しています（{CHECKED_LABEL}確認）。一方、成約後のキャンセルにはキャンセル料30,000円の記載もあるため（同日確認）、契約前に条件を必ず確認してください。廃車買取の全体像は<Link href="/haisha/" className="text-vermilion underline underline-offset-4">廃車・事故車・不動車の買取</Link>にまとめています。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">値がつきそうな車は出張査定で比較する</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                車検が切れていても年式が新しい車や輸入車・旧車は、専門業者の出張査定で評価される可能性があります。掲載社では旧車王が離島含む全国無料出張査定・車輌引き上げ料金を含む引取無料と公式サイトに記載しています（{CHECKED_LABEL}確認）。カテゴリ別の考え方は<Link href="/kyusha/" className="text-vermilion underline underline-offset-4">旧車・クラシックカー</Link>や<Link href="/gaisha/" className="text-vermilion underline underline-offset-4">外車・輸入車</Link>のページをご覧ください。
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/haisha/" className="btn-primary">廃車・事故車買取のページを見る</Link>
            <Link href="/compare/" className="btn-ghost">掲載8社の比較表を見る</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">車検切れの車の売却でよくある質問</h2>
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
              <Link href="/haisha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">廃車・事故車・不動車の買取</span>
                <span className="mt-1 block text-xs text-steel-500">処分の前に知っておく判断ポイント</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shorui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車売却の必要書類 完全ガイド</span>
                <span className="mt-1 block text-xs text-steel-500">紛失時の再発行窓口もまとめて解説</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/souzoku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">相続した車を売る手続きと注意点</span>
                <span className="mt-1 block text-xs text-steel-500">放置されがちな実家の車の売り方</span>
              </Link>
            </li>
            <li>
              <Link href="/gyosha/haishar/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">ハイシャルの一次確認まとめ</span>
                <span className="mt-1 block text-xs text-steel-500">引取・書類代行・キャンセル規定の詳細</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取8社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">引取条件を同じ物差しで比較</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断（4問）</span>
                <span className="mt-1 block text-xs text-steel-500">状況に合うカテゴリをルールベースで判定</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
