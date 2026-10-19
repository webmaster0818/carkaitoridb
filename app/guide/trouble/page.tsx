import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { GUIDE_TERMS_CHECKED_LABEL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "車査定・車買取のキャンセルについて｜契約前・契約後・引渡し後の違いとキャンセル料、トラブル対処法",
  description:
    "車査定・車買取のキャンセルは、契約前であれば可能ですが、契約後は原則として業者の規定によります。JPUCモデル約款では引渡し翌日まで負担なく解除でき、クーリング・オフは対象外です。キャンセル料、二重査定、188・JPUC相談室について公式情報にもとづきご説明します（2026年10月16日確認）。",
  alternates: { canonical: "/guide/trouble/" },
};

const PATH = "/guide/trouble/";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車査定・車買取のキャンセルについて：契約前・契約後・引渡し後の違いとトラブル対処法",
  description:
    "車買取で起きやすい二重査定・契約後キャンセルのトラブルの一般知識と予防策、公的な相談窓口について解説しています。",
  datePublished: "2026-08-10",
  dateModified: "2026-10-19",
  author: { "@type": "Organization", name: SITE_NAME },
  publisher: { "@type": "Organization", name: "株式会社MediaX" },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const faqs = [
  {
    q: "車査定を受けた後、売らずにキャンセルできますか？",
    a: "売ることに合意していなければ、査定額を聞いたうえで断ることができます。車の売買契約は基本的に契約書に署名した時点で成立し、契約書がなくても口頭で合意すれば成立します（JPUC「車売却・車買取契約の成立時期はいつ？」）。国民生活センターも「査定の場では契約せず、一度冷静に考えましょう」と注意を呼びかけています（2026年10月16日確認）。",
  },
  {
    q: "一括査定サイトの申し込みをキャンセルしたいときはどこに連絡しますか？",
    a: "申し込んだ査定サイトの運営会社にご連絡ください。業界団体JPUCの車売却消費者相談室は、車査定サイトの申し込みキャンセル依頼や個人情報削除依頼には対応できないと案内しています（2026年10月16日確認）。",
  },
  {
    q: "車を引き渡した後に「傷が見つかったので減額する」と言われました。応じるしかないのですか？",
    a: "即答で応じる必要はありません。契約時に申告した状態と契約書の内容を確認し、減額の根拠（どの箇所か・契約時に確認できなかった理由）の説明を書面でお求めください。納得できない場合は、消費者ホットライン188や、業界団体JPUCの車売却消費者相談室に相談できます。対応は個別の契約内容と事実関係によるため、一人で判断せず相談窓口の助言を得ることをおすすめします。",
  },
  {
    q: "契約した後にキャンセルはできますか？",
    a: "原則としてできず、できるかどうか・費用がかかるかどうかは契約内容と業者の規定によります。JPUCの自動車買取モデル約款（または同等の約款）を使う業者なら、車の引き渡しの翌日までは負担なく契約を解除できます（JPUC公式・2026年10月16日確認）。掲載社の一次確認値では、ハイシャルは成約後のキャンセルにキャンセル料30,000円、外車王は引渡し当日と翌日までは負担なくキャンセル可（以降は実損額負担の場合あり）、セルカは落札価格が売切価格に届かなければ無料で取りやめられる一方、売買契約の成立後にやむを得ず解除する場合は違約金（10万円または成約代金の5％のいずれか高い方）がかかると、業者ごとに規定が大きく異なります（2026年10月19日確認）。契約前にキャンセル規定を必ずご確認ください。",
  },
  {
    q: "車の売却にクーリングオフは使えますか？",
    a: "利用できないとお考えください。国民生活センターは「事業者が訪問した場合でも、車の売却は特定商取引法の規制対象外」とし、JPUCも車の売買はクーリング・オフの対象にならないと説明しています（2026年10月16日確認）。契約を解消したい事情がある場合は、契約書の解除条項を確認し、早めに業者へ連絡したうえで、消費者ホットライン188やJPUC車売却消費者相談室にご相談ください。",
  },
  {
    q: "トラブルを避けるために契約前に確認すべきことは何ですか？",
    a: "少なくとも、契約後のキャンセルの可否と費用、引き渡し後の減額（再査定）の有無と条件、入金の時期、名義変更完了の連絡方法の4点は書面でご確認ください。口頭の説明だけで済ませず、契約書・利用規約の該当箇所をご自身で確認することが、トラブル予防の基本です。",
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
          車査定・車買取のキャンセルについて｜契約前後の違いとトラブル対処法
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          車の買取では、「引き渡した後に減額を求められた」「キャンセルしたら高額な費用を請求された」といったトラブルが消費生活相談の場で報告されています。多くは契約前の確認で予防でき、発生した場合にも公的な相談窓口があります。本ページでは、代表的なトラブルの一般知識と予防策、相談先についてご説明します。
        </p>

        {/* 検索意図への即答: タイミング別のキャンセル可否（2026-10-16 追加） */}
        <section className="mt-10 border-l-4 border-vermilion bg-chalk-card p-6">
          <h2 className="font-display text-lg text-steel-900">タイミング別に見た車査定・車買取のキャンセル可否</h2>
          <p className="mt-3 text-sm leading-loose text-steel-700">
            キャンセルの可否は、キャンセルする時期によって異なります。売却に合意する前であれば断ることができますが、契約後は原則としてキャンセルできず、業者の契約解除の規定によります。業界団体JPUC（日本自動車購入協会）と国民生活センターの公式情報にもとづき、以下のとおり整理しました（2026年10月16日確認）。
          </p>
          <div className="mt-5 overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-36 md:w-48">査定だけ（契約前）</th>
                  <td>売却に合意していなければ断ることができます。契約は基本的に契約書への署名で成立しますが、口頭の合意でも成立するため、その場で「売ります」と言わないことが重要です。</td>
                </tr>
                <tr>
                  <th>契約後・引き渡し前</th>
                  <td>原則としてキャンセルできません。可否と費用は業者の契約解除条項によります。車と書類が手元にあれば、キャンセルできる可能性があります（JPUC）。</td>
                </tr>
                <tr>
                  <th>車と書類の引き渡し後</th>
                  <td>原則としてキャンセルできません。ただし、JPUCの自動車買取モデル約款（または同等の約款）を使う業者であれば、引き渡しの翌日までは負担なく契約を解除できます。</td>
                </tr>
                <tr>
                  <th>クーリング・オフ</th>
                  <td>利用できません。業者が自宅を訪問した場合でも、車の売却は特定商取引法の規制対象外です（国民生活センター）。</td>
                </tr>
                <tr>
                  <th>キャンセル料</th>
                  <td>業者の規定とタイミングによって異なります。平均的な損害を超える違約金の定めは消費者契約法第9条第1号で無効とされており、高額な場合は根拠（実費の明細）の提示をお求めください（JPUC）。</td>
                </tr>
                <tr>
                  <th>一括査定の申し込み</th>
                  <td>申し込んだ査定サイトの運営会社にご連絡ください（JPUC相談室はこの依頼に対応できないと案内しています）。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            国民生活センターによると、全国の消費生活センター等に寄せられた中古車の売却の相談は2018年度1,151件、2019年度1,229件、2020年度1,211件、2021年度1,519件で、「契約後すぐにキャンセルを申し出たら、高額なキャンセル料を提示された」といった事例が紹介されています（2023年3月22日公表）。
          </p>
          <p className="mt-3 text-xs leading-relaxed text-steel-500">
            出典: JPUC「車売却・車買取の契約後にキャンセルはできる？」「車売却・車買取契約の成立時期はいつ？」（jpuc.or.jp、いずれも2023年9月8日更新）、国民生活センター「増加する中古自動車の売却トラブル－強引な勧誘やキャンセル妨害も－」（kokusen.go.jp）。確認日 2026年10月16日。
          </p>
        </section>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-l-4 border-vermilion bg-chalk-card p-6">
          <h2 className="font-display text-lg text-steel-900">契約前の確認事項と減額請求への対応</h2>
          <ul className="mt-4 space-y-2 text-sm leading-loose text-steel-700">
            <li>・契約前に「キャンセル規定」と「引き渡し後の減額の有無」を書面で確認するのが予防の基本です。</li>
            <li>・引き渡し後の減額請求（二重査定）には即答せず、根拠の説明を書面で求めます。</li>
            <li>・車の売却はクーリング・オフの対象外です（国民生活センター・JPUC）。契約前に解除条項を確認します。</li>
            <li>・お困りの際は消費者ホットライン<strong>188</strong>にご相談ください。車売却に特化した窓口として、JPUC車売却消費者相談室もあります。</li>
          </ul>
        </section>

        {/* 二重査定 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">二重査定とは何か（契約後の減額請求）</h2>
          <p className="text-sm leading-loose text-steel-700">
            二重査定とは、査定に基づいて契約した後、車の引き渡し後などに業者が再度査定を行い、「修復歴が見つかった」「傷があった」などの理由で減額を求める行為を指す言葉です。売り手が事実を隠していた場合の再交渉と、業者側の確認不足を売り手に転嫁するようなケースが混在しやすく、車買取のトラブルの典型例として消費者向けの注意喚起でも取り上げられています。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            予防の要点は2つあります。第一に、売り手側は事故歴・修復歴・不具合を契約前に正確に申告することです。申告が正確であれば、後から「聞いていなかった」と言われる余地を小さくできます。第二に、契約前に「引き渡し後の再査定・減額があり得るか」を規定として確認することです。業界団体のJPUC（日本自動車購入協会）は適正買取に関する行動基準を設けており、掲載社では旧車王が二重査定なし（JPUC適正買取店）を、ハイシャルが見積後の減額一切なしを、外車マスターが引取後の減額交渉なしを公式サイトに記載しています（{GUIDE_TERMS_CHECKED_LABEL}確認）。こうした規定を明示しているかどうかは、業者選びの比較材料になります。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            実際に減額を求められたら、まず契約書と申告内容を確認し、減額の根拠となる箇所・理由・契約時に確認できなかった事情の説明を書面で求めることをおすすめします。その場の電話や口頭で承諾せず、納得できなければ後述の相談窓口に相談してから対応を決めるのが安全です。
          </p>
        </section>

        {/* 契約後キャンセル */}
        <section className="mt-14">
          <h2 className="section-title mb-5">契約後キャンセルの費用は業者ごとに大きく異なる</h2>
          <p className="text-sm leading-loose text-steel-700">
            買取契約を結んだ後のキャンセルは、民法上は契約の解除にあたるため、無条件でできるとは限りません。キャンセルの可否・期限・費用は各社の契約条項で定められており、内容は業者によって大きく異なります。参考として、当サイト掲載社の公式サイトで一次確認できた規定を以下に掲載します（確認日: {GUIDE_TERMS_CHECKED_LABEL}）。
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
                  <td>オークション開始前の取りやめと、落札価格が売切価格（最低希望価格）に届かなかった場合は無料。売買契約の成立後はお客様都合のキャンセル不可で、やむを得ず解除する場合は違約金（10万円または成約代金の5％のいずれか高い方）</td>
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
                  <td>「不当なキャンセル料を請求することもありません」（期限・費用の詳細規定は公式では確認できず）</td>
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
          <h2 className="section-title mb-5">クーリング・オフの適用について</h2>
          <p className="text-sm leading-loose text-steel-700">
            自宅などを業者が訪れて物品を買い取る取引は、特定商取引法の「訪問購入」として規制されており、原則として契約書面を受け取った日から8日間はクーリングオフ（無条件解除）ができる制度があります。出張査定で車を売る場面は、形式上この訪問購入に似ています。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            しかし、自動車（二輪のものを除く）は政令で訪問購入の規制の適用除外物品と定められています。国民生活センターも「事業者が訪問した場合でも、車の売却は特定商取引法の規制対象外」と明記しており、JPUCも車の売買はクーリング・オフの対象にならないと説明しています（2026年10月16日確認）。「出張査定で契約したから8日間は取り消せる」とは考えず、契約前に解除条項を確認することが大切です。
          </p>
          <p className="mt-4 text-sm leading-loose text-steel-700">
            契約を解消したい事情がある場合は、ご自身で判断して放置せず、できるだけ早く消費者ホットライン188にお電話のうえ、お住まいの地域の消費生活センターに状況をお伝えください。契約日・書面の有無・勧誘の経緯がわかる資料を手元にご用意いただくと、相談が円滑に進みます。
          </p>
        </section>

        {/* 相談窓口 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">困ったときの相談窓口</h2>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">消費者ホットライン<strong className="text-vermilion">188</strong>（いやや）</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                局番なしの188に電話すると、最寄りの消費生活センター・相談窓口の案内を受けられる全国共通の窓口です。車買取の減額請求・キャンセル・強引な勧誘など、契約トラブル全般を相談できます。最初の相談先としてご利用ください。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">国民生活センター</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                消費者トラブルの相談・注意喚起を行う独立行政法人です。公式サイトでは車の売却に関するトラブル事例や注意喚起の情報も公開されており、ご自身のケースと似た事例の確認に役立ちます。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">JPUC車売却消費者相談室</h3>
              <p className="mt-3 text-sm leading-loose text-steel-700">
                一般社団法人日本自動車購入協会（JPUC）が設けている、車の売却に特化した消費者向け相談窓口です。買取業界の団体が運営しているため、二重査定やキャンセルなど売却特有の相談に対応しています。電話は0120-93-4595、受付は9:00〜17:00（土日祝定休）、相談は無料です。車査定サイトの申し込みキャンセルや個人情報削除の依頼には対応できないと案内されています（JPUC公式・2026年10月16日確認）。
              </p>
            </div>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">トラブルを防ぐための注意点</h2>
          <ul className="space-y-3">
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              その場で即決を求められても、契約書のキャンセル条項と減額条項を読むまでは署名を控えてください。持ち帰って検討する選択肢は常にあります。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              事故歴・修復歴・不具合は正確に申告してください。申告の正確さが、後の減額請求に対する根拠となります。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              重要なやり取りは書面・メールで残してください。口頭の約束は後から証明することが難しくなります。
            </li>
            <li className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-loose text-steel-800">
              名義変更の完了連絡と入金日をご確認ください。引き渡し後に確認を怠ると、税金や事故時の責任の面でリスクとなります。
            </li>
          </ul>
        </section>

        {/* 業者選び */}
        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">規定の確認と業者選び</h2>
          <p className="mt-3 text-sm leading-loose text-steel-700">
            トラブル予防の第一歩は、キャンセル規定・減額規定を公開している業者を選び、契約前に内容を確認することです。当サイトでは掲載27社のキャンセル規定・入金タイミング・査定料を公式サイトで一次確認し、確認できなかった項目は「公式では確認できず」と記載しています。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">
              27社比較表でキャンセル規定を見る
            </Link>
            <Link href="/shindan/" className="btn-ghost">
              売り方診断（4問）を試す
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-5">買取トラブルに関するよくある質問</h2>
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
                <span className="font-display text-steel-900">車買取27社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">27社の条件を同じ基準で比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
