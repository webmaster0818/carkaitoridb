import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { CHECKED_LABEL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "車買取のトラブル対処法｜契約後キャンセル・二重査定への備えと相談窓口",
  description:
    "車買取で起きやすいトラブル（契約後の減額請求＝二重査定、契約後キャンセルの費用）の一般知識と予防策を解説。訪問購入のクーリングオフの考え方、消費者ホットライン188・国民生活センター・JPUC車売却消費者相談室という相談窓口、掲載社のキャンセル規定の一次確認値もまとめます。",
  alternates: { canonical: "/guide/trouble/" },
};

const PATH = "/guide/trouble/";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車買取のトラブル対処法（契約後キャンセル・二重査定）",
  description:
    "車買取で起きやすい二重査定・契約後キャンセルのトラブルの一般知識と予防策、公的な相談窓口を解説する記事。",
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  author: { "@type": "Organization", name: SITE_NAME },
  publisher: { "@type": "Organization", name: "株式会社MediaX" },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const faqs = [
  {
    q: "車を引き渡した後に「傷が見つかったので減額する」と言われました。応じるしかないのですか？",
    a: "即答で応じる必要はありません。契約時に申告した状態と契約書の内容を確認し、減額の根拠（どの箇所か・契約時に確認できなかった理由）の説明を書面で求めましょう。納得できない場合は、消費者ホットライン188や、業界団体JPUCの車売却消費者相談室に相談できます。対応は個別の契約内容と事実関係によるため、一人で判断せず相談窓口の助言を得ることをおすすめします。",
  },
  {
    q: "契約した後にキャンセルはできますか？",
    a: "できるかどうか、費用がかかるかどうかは契約内容と業者の規定によります。掲載社の一次確認値では、ハイシャルは成約後のキャンセルにキャンセル料30,000円、外車王は引渡し当日と翌日までは負担なくキャンセル可（以降は実損額負担の場合あり）、セルカは最高入札額が希望価格に届かなければキャンセル料無料と、業者ごとに規定が大きく異なります（2026年8月7日確認）。契約前にキャンセル規定を必ず確認してください。",
  },
  {
    q: "車の売却にクーリングオフは使えますか？",
    a: "断定できません。自宅などへの訪問で物品を買い取る「訪問購入」には特定商取引法上のクーリングオフ制度がありますが、自動車（二輪のものを除く）は政令で適用除外とされており、取引の形態や勧誘の経緯など個別事情によって扱いが変わり得ます。ご自身のケースで使えるかどうかは、消費者ホットライン188から消費生活センターに相談して確認してください。",
  },
  {
    q: "トラブルを避けるために契約前に確認すべきことは何ですか？",
    a: "少なくとも、契約後のキャンセルの可否と費用、引き渡し後の減額（再査定）の有無と条件、入金の時期、名義変更完了の連絡方法の4点は書面で確認しておきましょう。口頭の説明だけで済ませず、契約書・利用規約の該当箇所を自分の目で確認することが、トラブル予防の基本です。",
  },
];

export default function GuideTroublePage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "トラブル対処法", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">TROUBLE GUIDE</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          車買取のトラブル対処法｜契約後キャンセル・二重査定への備え
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          車の買取では、「引き渡した後に減額を求められた」「キャンセルしたら高額な費用を請求された」といったトラブルが消費生活相談の場で報告されています。多くは契約前の確認で予防でき、起きてしまった場合も公的な相談窓口があります。このページでは、代表的なトラブルの一般知識と予防策、相談先を整理します。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-l-4 border-vermilion bg-chalk-card p-6">
          <h2 className="font-display text-lg text-steel-900">先に結論</h2>
          <ul className="mt-4 space-y-2 text-sm leading-loose text-steel-700">
            <li>・契約前に「キャンセル規定」と「引き渡し後の減額の有無」を書面で確認するのが予防の基本です。</li>
            <li>・引き渡し後の減額請求（二重査定）には即答せず、根拠の説明を書面で求めます。</li>
            <li>・クーリングオフの適用可否は個別事情によるため断定せず、消費生活センターに確認します。</li>
            <li>・困ったら消費者ホットライン<strong>188</strong>。車売却に特化した窓口としてJPUC車売却消費者相談室もあります。</li>
          </ul>
        </section>

        {/* 二重査定 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">二重査定とは何か（契約後の減額請求）</h2>
          <p className="text-sm leading-loose text-steel-700">
            二重査定とは、査定に基づいて契約した後、車の引き渡し後などに業者が再度査定を行い、「修復歴が見つかった」「傷があった」などの理由で減額を求める行為を指す言葉です。売り手が事実を隠していた場合の再交渉と、業者側の確認不足を売り手に転嫁するようなケースが混在しやすく、車買取のトラブルの典型例として消費者向けの注意喚起でも取り上げられています。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            予防の要点は2つあります。第一に、売り手側は事故歴・修復歴・不具合を契約前に正確に申告すること。申告が正確であれば、後から「聞いていなかった」と言われる余地を小さくできます。第二に、契約前に「引き渡し後の再査定・減額があり得るか」を規定として確認することです。業界団体のJPUC（日本自動車購入協会）は適正買取に関する行動基準を設けており、掲載社では旧車王が二重査定なし（JPUC適正買取店）を、ハイシャルが見積後の減額一切なしを、外車マスターが引取後の減額交渉なしを公式サイトで訴求しています（{CHECKED_LABEL}確認）。こうした規定を明示しているかどうかは、業者選びの比較材料になります。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            実際に減額を求められたら、まず契約書と申告内容を確認し、減額の根拠となる箇所・理由・契約時に確認できなかった事情の説明を書面で求めましょう。その場の電話や口頭で承諾せず、納得できなければ後述の相談窓口に相談してから対応を決めるのが安全です。
          </p>
        </section>

        {/* 契約後キャンセル */}
        <section className="mt-14">
          <h2 className="section-title mb-5">契約後キャンセルの費用は業者ごとに大きく異なる</h2>
          <p className="text-sm leading-loose text-steel-700">
            買取契約を結んだ後のキャンセルは、民法上は契約の解除にあたるため、無条件でできるとは限りません。キャンセルの可否・期限・費用は各社の契約条項で定められており、内容は業者によって大きく異なります。参考として、当サイト掲載社の公式サイトで一次確認できた規定を並べます（確認日: {CHECKED_LABEL}）。
          </p>
          <div className="mt-5 overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-32 md:w-40">ハイシャル</th>
                  <td>成約後のキャンセルはキャンセル料30,000円</td>
                </tr>
                <tr>
                  <th>セルカ</th>
                  <td>最高入札額が希望価格未達ならキャンセル可・キャンセル料無料</td>
                </tr>
                <tr>
                  <th>外車王</th>
                  <td>引渡し当日と翌日までは負担なくキャンセル可。以降は運搬料金等の実損額負担の場合あり</td>
                </tr>
                <tr>
                  <th>外車マスター</th>
                  <td>「不当なキャンセル料一切ありません」（詳細規定は公式では確認できず）</td>
                </tr>
                <tr>
                  <th>旧車王</th>
                  <td>契約後のキャンセル規定は公式では確認できず</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            このように、同じ「契約後キャンセル」でも無料の条件を明示する業者、定額の料金を定める業者、実損額の負担を求める業者、公式サイトでは規定を確認できない業者まで幅があります。規定が確認できない場合は、契約前に直接質問し、回答を書面やメールで残しておくことをおすすめします。
          </p>
        </section>

        {/* クーリングオフ */}
        <section className="mt-14">
          <h2 className="section-title mb-5">クーリングオフは使える？（断定できない理由）</h2>
          <p className="text-sm leading-loose text-steel-700">
            自宅などを業者が訪れて物品を買い取る取引は、特定商取引法の「訪問購入」として規制されており、原則として契約書面を受け取った日から8日間はクーリングオフ（無条件解除）ができる制度があります。訪問査定で車を売る場面はこの訪問購入に形の上では似ています。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            ただし注意が必要なのは、自動車（二輪のものを除く）は政令で訪問購入の規制の適用除外物品と定められている点です。一方で、適用除外の当てはまり方は取引の形態や勧誘の経緯といった個別事情に左右され得るため、「車だから絶対に使えない」「訪問だったから必ず使える」のどちらの断定もできません。当サイトも可否の判断は行いません。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            契約を解消したい事情がある場合は、自分で判断して放置せず、できるだけ早く消費者ホットライン188に電話して、お住まいの地域の消費生活センターに状況を伝えてください。契約日・書面の有無・勧誘の経緯が分かる資料を手元に用意しておくと相談がスムーズです。
          </p>
        </section>

        {/* 相談窓口 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">困ったときの相談窓口</h2>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">消費者ホットライン<strong className="text-vermilion">188</strong>（いやや）</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                局番なしの188に電話すると、最寄りの消費生活センター・相談窓口を案内してもらえる全国共通の窓口です。車買取の減額請求・キャンセル・強引な勧誘など、契約トラブル全般を相談できます。まずここに電話するのが基本の動きです。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">国民生活センター</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                消費者トラブルの相談・注意喚起を行う独立行政法人です。公式サイトでは車の売却に関するトラブル事例や注意喚起の情報も公開されており、自分のケースと似た事例を確認するのに役立ちます。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">JPUC車売却消費者相談室</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                一般社団法人日本自動車購入協会（JPUC）が設けている、車の売却に特化した消費者向け相談窓口です。買取業界の団体が運営しているため、二重査定やキャンセルなど売却特有の相談に対応しています。受付時間などの詳細はJPUC公式サイトで確認してください。
              </p>
            </div>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">トラブルを防ぐための注意点</h2>
          <ul className="space-y-3">
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              その場で即決を迫られても、契約書のキャンセル条項と減額条項を読むまで署名しない。持ち帰って検討する選択肢は常にあります。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              事故歴・修復歴・不具合は正確に申告する。申告の正確さが、後の減額請求から自分を守る根拠になります。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              重要なやり取りは書面・メールで残す。口頭の約束は後から証明が難しくなります。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              名義変更の完了連絡と入金日を確認する。引き渡し後の放置は税金や事故時の責任の面でリスクになります。
            </li>
          </ul>
        </section>

        {/* 業者選び */}
        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">規定を確認してから業者を選ぶ</h2>
          <p className="mt-3 text-sm leading-loose text-steel-700">
            トラブル予防の第一歩は、キャンセル規定・減額規定を公開している業者を選び、契約前に内容を確認することです。当サイトでは掲載8社のキャンセル規定・入金タイミング・査定料を公式サイトで一次確認し、確認できなかった項目は「公式では確認できず」と正直に記載しています。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">
              8社比較表でキャンセル規定を見る
            </Link>
            <Link href="/shindan/" className="btn-ghost">
              売り方診断（4問）を試す
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-5">買取トラブルのよくある疑問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">正確な申告が二重査定の予防になる</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/zeikin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車を売ったときの自動車税・還付の仕組み</span>
                <span className="mt-1 block text-xs text-steel-500">売却後の税金の扱いも契約前に確認</span>
              </Link>
            </li>
            <li>
              <Link href="/gyosha/haishar/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">ハイシャルの買取サービスまとめ</span>
                <span className="mt-1 block text-xs text-steel-500">キャンセル料30,000円など規定の一次確認値</span>
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
