import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "買取と下取りはどっちが得？仕組みの違いと使い分けの判断軸",
  description:
    "車の買取と下取りの仕組みの違いを整理し、下取りが値引きと一体で不透明になりやすい理由、買取に競争原理が働きやすい理由を一般論として解説。手間・時期・車の状態という3つの判断軸で、自分に合う手放し方を選ぶための考え方をまとめます。",
  alternates: { canonical: "/guide/kaitori-vs-shitadori/" },
};

const PATH = "/guide/kaitori-vs-shitadori/";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "買取と下取りはどっちが得？仕組みの違いと使い分けの判断軸",
  description:
    "車の買取と下取りの仕組みの違いと、手間・時期・車の状態という3つの判断軸を一般論として解説する記事。",
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  author: { "@type": "Organization", name: SITE_NAME },
  publisher: { "@type": "Organization", name: "株式会社MediaX" },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const faqs = [
  {
    q: "買取と下取りは、結局どちらが高く売れますか？",
    a: "一概には言えません。車種・年式・状態・時期・購入する車の値引き条件によって結果は変わるため、当サイトでは金額の断定をしていません。判断材料をそろえる方法としては、下取り額の内訳（車両値引きと下取り額の区分）を販売店に確認したうえで、買取業者の査定額と「乗り換えにかかる総額」で比べる考え方が一般的です。",
  },
  {
    q: "下取りに出すメリットはありますか？",
    a: "あります。購入と売却の窓口が一本化されるため手続きの手間が少なく、納車まで今の車に乗り続けられる調整がしやすい点は、下取りの実務上の利点として広く知られています。手間の少なさを重視する場合は、下取りが合理的な選択になる場合があります。",
  },
  {
    q: "下取り額が0円と言われた車でも、買取で値が付くことはありますか？",
    a: "可能性はあります。一般的な下取り査定は年式・走行距離を軸に減点する仕組みのため、古い車や過走行車は低く評価されがちですが、旧車・輸入車・トラック・廃車予定車などには専門の買取業態があり、評価軸が異なります。決めつける前に、該当する専門業態への相談を検討する価値はあります。",
  },
  {
    q: "買取と下取りを比較するとき、何に注意すればよいですか？",
    a: "「下取り額＋値引き額」と「買取額＋購入時の値引き額」を分けて把握し、乗り換え全体の総支払額で比べることが基本です。また、契約後のキャンセル規定や減額条件は業者ごとに異なるため、金額だけでなく契約条件も事前に確認しておくことをおすすめします。",
  },
];

export default function GuideKaitoriVsShitadoriPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "買取と下取りの違い", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">SELL OR TRADE-IN</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          買取と下取りはどっちが得？仕組みの違いと使い分けの判断軸
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          車を手放す方法は、大きく「買取業者に売る」か「次の車の購入先に下取りに出す」かに分かれます。どちらが得かは車と状況によって変わるため金額の断定はできませんが、両者は仕組みそのものが異なるため、違いを知っておくと判断がぶれにくくなります。このページでは、仕組みの違いと使い分けの判断軸を一般論として整理します。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-l-4 border-vermilion bg-chalk-card p-6">
          <h2 className="font-display text-lg text-steel-900">先に結論</h2>
          <ul className="mt-4 space-y-2 text-sm leading-loose text-steel-700">
            <li>・買取は「車を売る取引」、下取りは「次の車の購入に付随する取引」で、仕組みが根本的に異なります。</li>
            <li>・下取りは値引きと一体で提示されるため、車そのものの評価額が見えにくくなりがちです。</li>
            <li>・買取は複数業者を比べられるため、競争原理が働きやすい構造です。</li>
            <li>・使い分けの判断軸は「手間」「時期」「車の状態」の3つ。金額はこの3軸を踏まえたうえで総額比較します。</li>
          </ul>
        </section>

        {/* 解説 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">買取と下取りは「取引の構造」が違う</h2>
          <p className="text-sm leading-loose text-steel-700">
            買取は、買取業者が車を仕入れて再販売・オークション出品などで流通させることを前提に、車そのものを商品として評価して買い取る取引です。取引の対象は車1台だけであり、査定額はそのまま「この車をいくらで仕入れるか」という金額になります。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            一方の下取りは、新しい車を購入する契約に付随して、今の車を販売店が引き取る取引です。売却と購入が1つの商談の中で同時に進むため、窓口が一本化されて手続きが楽になる半面、下取り額は購入契約全体の一部として扱われます。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            この構造の違いが、後述する「不透明になりやすい」「競争が働きやすい」という両者の性質の違いにつながります。どちらかが常に優れているという話ではなく、構造上の得意・不得意がある、と理解するのが正確です。実際には、下取りの提示を受けたうえで買取の査定も取り、両方の条件を見てから決める人も多く、二者択一で先に決めてしまう必要はありません。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">下取りが不透明になりやすい理由</h2>
          <p className="text-sm leading-loose text-steel-700">
            下取りでは、「車両本体の値引き」と「下取り額」が合算された総額で商談が進むことが少なくありません。たとえば「下取りを頑張って上乗せしました」という提示が、実際には車両値引きの一部を下取り額に振り替えただけ、というケースは一般論としてあり得ます。逆に、下取り額を低く見せて値引きを大きく見せることも構造上は可能です。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            つまり下取りでは、「今の車が単体でいくらと評価されたのか」が外から検証しにくいのです。これは販売店が不誠実だという意味ではなく、売却と購入が一体の商談である以上、内訳の線引きが曖昧になりやすいという構造上の性質です。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            対策としては、商談の際に「車両値引き」と「下取り額」を分けて書面で提示してもらうこと、そして下取りとは別に買取業者の査定額を取っておき、比較の物差しを持つことが挙げられます。物差しがあるだけで、提示された下取り額が妥当な水準かどうかを自分で考えられるようになります。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">買取に競争原理が働きやすい理由</h2>
          <p className="text-sm leading-loose text-steel-700">
            買取は車1台を単体で評価する取引なので、複数の業者に同じ車を査定してもらい、条件を横に並べて比べることができます。業者側も他社と比較されていることを前提に金額を提示するため、構造として競争原理が働きやすいのが特徴です。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            また、買取業界には輸入車専門・旧車専門・トラック専門・廃車買取・オークション形式など、評価軸の異なる業態が存在します。一般的な下取り査定では年式や走行距離で減点されてしまう車でも、専門業態では別の物差しで評価される場合があります。車の性格に合った売り先を選べること自体が、買取という方法の強みです。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            なお、買取と一口に言っても取引の形式は1つではありません。業者が直接買い取って自社で再販する直販型のほか、複数の登録バイヤーが1台の車に入札するオークション型、複数業者へ同時に査定を依頼する一括査定型など、競争のさせ方が異なる形式があります。形式によって連絡の来かたや手数料の有無も変わるため、金額だけでなく取引の進み方も含めて自分に合う形式を選ぶことが大切です。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            ただし、競争が働きやすいことと、必ず下取りより高くなることは別の話です。時期や車種によっては下取り条件のほうが総額で有利になる場合もあるため、当サイトでは「買取なら必ず得」という断定はしません。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">使い分けの判断軸は「手間・時期・車の状態」</h2>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">判断軸1: 手間をどこまでかけられるか</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                下取りは購入と売却の窓口が1つで済み、名義変更などの段取りも商談の流れの中で進みます。複数の買取業者とやり取りする時間が取れない人、手続きの手間を減らしたい人には下取りの合理性があります。逆に、比較の手間をかけられるなら、買取で複数社の条件を並べる価値があります。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">判断軸2: 乗り換えの時期・タイミング</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                下取りは納車と引き渡しを同じ日に合わせやすく、車のない期間が生じにくいのが利点です。買取で先に売ると、納車までの移動手段を自分で確保する必要が出る場合があります。一方、次の車が決まっていない・購入を急がない場合は、下取りという選択肢自体がないため買取が基本になります。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">判断軸3: 車の状態・性格</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                年式の新しい一般的な車は下取り・買取のどちらでも評価されやすい一方、年式の古い車・輸入車・トラック・不動車などは、一般的な下取り査定だと減点が先行しがちです。こうした車は、評価軸の異なる専門買取業態に相談してから判断するほうが、選択肢を狭めずに済みます。
              </p>
            </div>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">比較するときの注意点</h2>
          <ul className="space-y-3">
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              金額は「乗り換え全体の総支払額」で比べる。下取り額単体・買取額単体の大小だけで判断すると、値引きとの振り替えを見落とします。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              下取り0円の提示を最終結論にしない。専門業態では別の評価軸で値が付く場合があり、確認のコストは査定無料の業者なら基本かかりません。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              契約条件も比較対象に入れる。契約後のキャンセル規定・減額の有無・入金タイミングは業者ごとに異なり、金額と同じくらい重要です。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              査定額には有効期限があるのが一般的。中古車相場は変動するため、提示額を長く持ち歩いての比較はできません。比較するなら短い期間に条件を集めるのが実務的です。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              ローン残債がある車は、所有者名義（所有権留保）の確認が先。残債の清算方法によって、下取り・買取どちらでも段取りが変わります。
            </li>
          </ul>
        </section>

        {/* 業者選び */}
        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">買取を検討するなら、条件を同じ物差しで</h2>
          <p className="mt-3 text-sm leading-loose text-steel-700">
            当サイトでは、掲載8社の査定料・引取費用・入金タイミング・キャンセル規定を公式サイトで一次確認し、確認日つきの統一フォーマットで比較しています。買取という選択肢を検討する際の物差しとしてご利用ください。
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
          <h2 className="section-title mb-5">買取と下取りのよくある疑問</h2>
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
              <Link href="/guide/genka-point/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">査定で減額されやすい箇所と事前にできる準備</span>
                <span className="mt-1 block text-xs text-steel-500">売る前に無料でできる準備を整理</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取のトラブル対処法</span>
                <span className="mt-1 block text-xs text-steel-500">契約後キャンセル・二重査定への備え</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/zeikin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車を売ったときの自動車税・還付の仕組み</span>
                <span className="mt-1 block text-xs text-steel-500">売却と廃車で扱いが変わる税金の一般知識</span>
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
