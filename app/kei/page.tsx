import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { OPERATOR, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "軽自動車の買取｜売却前の確認事項と売却先の選び方";
const DESC =
  "軽自動車を売るときの全体像を、普通車との違いを軸に整理しています。車検証で確認する項目、査定で見られやすい点、買取専門店・一括査定・オークション型・廃車買取のどれが向くか、手続きの窓口が軽自動車検査協会と市区町村になる点までをまとめています。買取価格の目安は掲載しておりません。";
const PATH = "/kei/";

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
  datePublished: "2026-09-16",
  dateModified: "2026-09-16",
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function KeiPage() {
  const conclusions = [
    "軽自動車は普通車と制度そのものが別立てです。名義変更にあたる手続きの窓口は運輸支局ではなく軽自動車検査協会、税の窓口は都道府県ではなく市区町村になります。",
    "最初に車検証の記載内容を確認します。自動車の種別・用途・初度検査年月・型式・所有者欄を確認すれば、売却の段取りはおおむね決まります。",
    "売却先は「買取専門店」「一括査定」「オークション型」「廃車買取」で性格が異なります。手間・連絡方法・車の状態のいずれを優先するかで選ぶのが現実的です。",
    "買取価格・相場・査定額は、年式・走行距離・状態・時期により異なります。当サイトは金額の目安を掲載せず、条件の事実のみを比較しています。",
    "必要書類の詳細は、軽自動車の必要書類のページにまとめています。本ページでは、売却全体の流れと売却先の選び方を扱います。",
  ];

  const shakenshoRows = [
    {
      label: "自動車の種別",
      value:
        "軽自動車として登録されているかどうかは、メーカー名や見た目ではなく車検証の記載で判断します。同じメーカーでも軽自動車と普通自動車の両方を扱っていることがあるため、売却の段取りを決める前に必ずご確認ください。ナンバープレートの分類番号や色でもおおよその区別は可能ですが、正確な情報は車検証に記載されています。",
    },
    {
      label: "用途（乗用・貨物）",
      value:
        "軽自動車にも乗用登録と貨物登録があり、税の区分や車検の期間の扱いが変わることがあります。仕事で使っていた車は貨物登録のことがあるため、用途欄の記載をそのまま買取業者へ伝えると、手続きが円滑に進みます。",
    },
    {
      label: "初度検査年月",
      value:
        "その車が最初に検査を受けた年月です。普通車の初度登録年月に相当し、一般に年式の基準となります。査定の問い合わせで最初に確認される項目の一つであるため、記憶ではなく車検証の記載どおりにお伝えください。",
    },
    {
      label: "型式・類別区分番号",
      value:
        "同じ名前の車でも、年式や仕様によって型式が異なります。グレードや装備の違いは型式・型式指定番号・類別区分番号の組み合わせで特定されるのが一般的です。査定依頼のときはこの欄を写真に撮って送ると、伝え間違いを防げます。",
    },
    {
      label: "所有者・使用者",
      value:
        "所有者欄がご自身の名義であれば、そのまま売却手続きに進めます。販売店やローン会社の名義である場合は所有権解除が先に必要となり、必要書類も所有者側の指定に従います。使用者の住所が現住所と異なる場合は、住所のつながりを証明する書類が追加で必要になるのが一般的です。",
    },
    {
      label: "走行距離（直近の記録）",
      value:
        "車検証に記録された走行距離と現在のメーターの値は、査定の前提条件になります。実際のメーター表示を確認して伝えるのが基本です。過走行であっても、売却できないとは限りません。状態を正確に伝えることが、結果的に手続きを円滑にします。",
    },
    {
      label: "有効期間（車検の残り）",
      value:
        "車検が残っているか、切れているかで引き渡しの方法が変わります。車検切れの車は公道を自走できないため、引取前提での相談になるのが一般的です。",
    },
  ];

  const sateiPoints = [
    {
      t: "年式・走行距離・修復歴は最初に確認される",
      d: "軽自動車でも普通車でも、査定の入り口で確認されるのは年式（初度検査年月）・走行距離・修復歴の有無です。修復歴は「事故をしたことがあるか」ではなく、車の骨格部分にあたる部位の修理・交換歴を指す用語として使われるのが一般的で、判断に迷う場合は自己判断で断定せず、修理の内容を事実としてお伝えください。",
    },
    {
      t: "軽自動車は装備とグレードの判別が難しい",
      d: "軽自動車は同じ車名でも装備の構成が細かく分かれていることが多く、見た目だけではグレードを特定しづらいのが実情です。車検証の型式・類別区分番号と、購入時の注文書や取扱説明書が残っていれば、それを提示するのが確実です。記憶に頼ってグレードを申告すると、実車確認の段階で内容が食い違う原因になります。",
    },
    {
      t: "過走行でも売却できないとは限らない",
      d: "軽自動車は日常の足として使われることが多く、年数のわりに走行距離が伸びている車も珍しくありません。走行距離が多いこと自体は査定の一要素に過ぎず、業者によって扱いが異なります。走行距離を理由に問い合わせを控えるより、実際の数値を伝えて対応できる業者を探すほうが現実的です。",
    },
    {
      t: "社外パーツは純正部品の保管が重要",
      d: "社外ホイールやカスタムパーツの評価は業者によって考え方が分かれます。純正部品を保管している場合は、その旨を最初に伝えるのが一般的です。査定前に大がかりな修理や部品交換をするかどうかは、費用をかけても回収できるとは限らないため、先に業者へ相談してから判断してください。",
    },
    {
      t: "記録簿・スペアキー・取扱説明書をまとめて保管する",
      d: "整備記録簿（メンテナンスノート）、スペアキー、取扱説明書、純正部品の有無は、一般に査定時の確認項目になりやすいとされています。売却を決めた時点で車検証と一緒に一か所にまとめておくと、当日の確認が円滑に進みます。",
    },
    {
      t: "臭い・内装の状態は写真では伝わりにくい",
      d: "喫煙やペットの同乗による臭い、内装のシミや破れは、写真だけでは伝わりにくい項目です。事前に伝えていないと、実車確認のときに条件が変わる原因になります。洗車と車内清掃はできる範囲で行い、状態は正確に申告してください。",
    },
  ];

  const urisakiRows = [
    {
      label: "買取専門店（店舗型）",
      value:
        "店舗または出張査定で実車を確認してもらい、その場で条件を決める売却方法です。やり取りする相手が一社に限られるため、負担が少ないのが特徴です。相見積もりを取りたい場合は、ご自身で複数社に依頼する手間がかかります。",
    },
    {
      label: "一括査定",
      value:
        "一度の入力で複数の買取業者へ査定依頼を仲介するサービスです。比較の手間を減らせる一方、申し込み後に複数社から連絡が来る形式が基本です。連絡方法はサービスによって異なるため、電話連絡の扱いを公式サイトで確認してから申し込むことをおすすめします。",
    },
    {
      label: "オークション型・チャット完結型",
      value:
        "登録された買取業者が入札する形式や、チャットで進む形式のサービスです。営業電話を避けたい方向けの設計を打ち出しているサービスもあります。落札・成約までの流れや、希望額に届かなかった場合の扱いは、事前にご確認ください。",
    },
    {
      label: "廃車買取",
      value:
        "動かない車、車検が切れて長く置いてある車、年式が古く一般的な中古車としての流通が難しい車は、廃車買取の領域です。引取と手続きをまとめて任せられるかどうかが、選定の基準になります。軽自動車の廃車にあたる手続きは、普通車の抹消登録とは名称も様式も異なります。",
    },
  ];

  const cautions = [
    {
      t: "手続きの窓口を普通車と同じだと思い込まない",
      d: "軽自動車の名義変更にあたる手続きは軽自動車検査協会の事務所・支所、軽自動車税（種別割）に関することは市区町村、保管場所の届出に関することは警察署が窓口になるのが一般的です。運輸支局や都道府県税事務所では手続きできません。窓口を誤ると二度手間となるため、事前に確認してください。",
    },
    {
      t: "所有者欄がご自身の名義でない軽自動車",
      d: "軽自動車でも、残価設定型のクレジットや販売店のローンを利用した場合、車検証の所有者欄がご自身以外の名義になっていることがあります。この場合は所有権解除が先で、必要書類も所有者側の指定に従うことになります。残債の有無とあわせて、売却の相談時に最初に伝えてください。",
    },
    {
      t: "相続した軽自動車",
      d: "亡くなった方の名義のままでは売却できないのが原則です。相続の手続きを経て名義を整理する必要があり、必要書類は状況によって変わります。軽自動車の手続きは軽自動車検査協会が窓口になるため、普通車を前提とした説明をそのまま当てはめないよう注意してください。",
    },
    {
      t: "軽自動車税（種別割）のタイミング",
      d: "軽自動車税（種別割）は年度の基準日時点の所有者に課税される仕組みで、普通車の自動車税（種別割）のような月割の還付が行われないのが一般的です。売却の時期によって負担が変わる場合があります。制度は改正されることがあるため、気になる場合は市区町村の担当課に確認してください。",
    },
    {
      t: "書類が揃う前に車だけを引き渡さない",
      d: "先に車だけ引き渡してしまうと、名義変更が完了しないまま時間が経つリスクがあります。入金の条件が「書類確認後」となっている場合もあるため、引き渡し・書類提出・入金の順番と時期は契約時にあわせて確認してください。",
    },
  ];

  const faqs = [
    {
      q: "軽自動車は普通車より売却の手続きが簡単ですか？",
      a: "揃える書類は軽自動車のほうが少なく済むのが一般的です。普通車では実印と印鑑登録証明書が必要になるのに対し、軽自動車は売る人の実印・印鑑登録証明書が名義変更の必要書類に含まれていません（軽自動車検査協会・2026年10月20日確認）。ただし窓口が軽自動車検査協会・市区町村と普通車とは異なるため、簡単というより、別の手順と考えるのが適切です。詳細は軽自動車の必要書類ページにまとめています。",
    },
    {
      q: "自分の車が軽自動車かどうか、どこを見ればわかりますか？",
      a: "車検証の「自動車の種別」欄で確認できます。メーカー名やボディの大きさの印象で判断せず、書類の記載で確認してください。同じメーカーが軽自動車と普通自動車の両方を扱っていることがあるため、ブランド名では判断できません。ナンバープレートの分類番号や色もおおよその目安になりますが、正確なのは車検証です。",
    },
    {
      q: "走行距離が多い軽自動車でも買い取ってもらえますか？",
      a: "個別の可否は業者と車両の状態によります。掲載社では、ハイシャルが対応地域のページで「事故車・動かない車・年式が古い車・走行距離10万キロ超えの車」を対象に挙げています（2026年10月20日確認）。走行距離を理由に問い合わせをためらうより、実際の数値を伝えて対応可否を確認するほうが確実です。",
    },
    {
      q: "軽自動車の査定額の相場を知りたいのですが、目安はありますか？",
      a: "当サイトでは買取価格・相場・査定額の目安を掲載していません。金額は年式・走行距離・状態・時期により異なり、同じ車でも売却先によって条件が変わるためです。掲載社については、査定料・手数料・引取・入金・キャンセル規定といった条件の事実のみを、公式サイトでの一次確認にもとづき、確認日を記載して比較表に掲載しています。",
    },
    {
      q: "軽自動車を売るときも車検証は必須ですか？",
      a: "必要です。掲載社のうちガリバーは、車検証がない車と永久抹消登録済みの車は買取不可と公式FAQに記載しています（2026年9月11日確認）。紛失している場合は、軽自動車検査協会で再交付の手続きができるのが一般的です。売却前にご自身で手配する方法のほか、業者が段取りを案内してくれることもあるため、気づいた時点でお伝えください。",
    },
    {
      q: "営業電話が苦手です。軽自動車でも電話が少ない売り方はありますか？",
      a: "連絡方法はサービスの設計によって異なります。掲載社ではセルカが「電話も査定もセルカ1社だけ」「しつこい営業電話も一切ありません」と公式サイトに記載し（2026年10月20日確認）、ストリマが「査定のやり取りは、すべてチャットで完結します」「いきなり電話がかかってくることもありません」と公式サイトに記載しています（2026年10月21日確認）。セルカは公式トップの買取相場検索のボディタイプに軽自動車を掲載しています（2026年10月21日確認）。実際の連絡方法は申し込み前に各社の公式サイトで確認してください。",
    },
  ];

  const makers = [
    { href: "/maker/suzuki/", title: "スズキ車の買取", desc: "軽自動車を主力とするメーカーの車の売却について" },
    { href: "/maker/daihatsu/", title: "ダイハツ車の買取", desc: "乗用・貨物の登録区分の確認について" },
    { href: "/maker/toyota/", title: "トヨタ車の買取", desc: "普通車の書類と下取りとの違いを整理" },
    { href: "/maker/honda/", title: "ホンダ車の買取", desc: "軽と普通車が混在する前提での確認事項" },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "軽自動車の買取", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">KEI CARS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          軽自動車の買取｜売却前の確認事項と売却先の選び方
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          軽自動車は普通車と同じ感覚で売却を進めると、窓口の違いにより手続きが滞ることがあります。本ページでは、軽自動車を手放す際の全体像として、車検証で確認する項目・査定で見られやすい点・売却先の選び方・手続きの窓口の違いを一般知識として整理します。必要書類そのものの詳細は
          <Link href="/guide/keijidousha-shorui/" className="text-vermilion underline underline-offset-4">
            軽自動車の売却に必要な書類
          </Link>
          にまとめていますので、書類のみを確認したい方はそちらをご覧ください。買取価格・相場・査定額の目安は、当サイトでは掲載しておりません。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">軽自動車の売却で最初に確認する事項</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 車検証で確認する項目 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">車検証で確認する7項目</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車の売却は、車検証（自動車検査証）を手元に置くところから始まります。記憶や印象で車の情報を伝えると、実車確認の段階で条件が変わる原因になります。以下は、どの車にも共通して確認できる基本的な項目です。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {shakenshoRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 電子化された車検証（ICタグ付き）が交付されている場合は、記録事項を確認できる書面とあわせて保管されていることがあります。記載の見方がわからない場合は、軽自動車検査協会や売却先の業者に確認してください。
          </p>
        </section>

        {/* 査定で見られる点 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">軽自動車の査定で見られやすい点</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            本項の内容は、車の売却に関する一般的な知識です。個別の評価は業者ごとに考え方が異なり、金額の目安はここでは扱いません。特定の車種名やスペックではなく、どの軽自動車にも当てはまる確認の方法としてご参照ください。
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {sateiPoints.map((p, i) => (
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
            ※ 減点・加点の考え方は
            <Link href="/guide/genka-point/" className="text-vermilion underline underline-offset-4">
              査定の減点ポイント
            </Link>
            にまとめています。
          </p>
        </section>

        {/* 売り先の選び方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">売却先の選び方｜4つの型の違い</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車だからといって、特別な売却先が必要になるわけではありません。ただし、車の状態と避けたい手間によって向く型が変わります。どの型に当てはまるかを整理してから具体的な業者を比較すると、円滑に決められます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {urisakiRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ どの型が合うか迷う場合は
            <Link href="/shindan/" className="text-vermilion underline underline-offset-4">
              売り方診断（4問）
            </Link>
            で、ルールベースの判定を確認できます。判定ロジックはすべて開示しています。
          </p>
        </section>

        {/* 手続きの窓口 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">普通車と異なる手続きの窓口</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車の売却で注意が必要なのは、金額よりも手続きの窓口です。普通車の情報をそのまま当てはめると、窓口を誤って出直しが必要になることがあります。名義変更にあたる手続きは軽自動車検査協会、税に関することは市区町村、保管場所の届出に関することは警察署が窓口になるのが一般的です。買取業者に売却する場合は業者側が手続きを代行してくれることが多いため、代行の範囲を申し込み時に確認しておくと安心です。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">書類の詳細について</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              車検証・自賠責保険証明書・リサイクル券・軽自動車税（種別割）の納税に関する書類といった必要書類の一覧、普通車との違い、紛失したときの再発行窓口は
              <Link href="/guide/keijidousha-shorui/" className="text-vermilion underline underline-offset-4">
                軽自動車の売却に必要な書類
              </Link>
              に分けてまとめています。普通車も含めた全体像は
              <Link href="/guide/shorui/" className="text-vermilion underline underline-offset-4">
                車売却の必要書類
              </Link>
              をご覧ください。手続きの名称・様式・地域ごとの扱いは変わることがあるため、最新の取り扱いは軽自動車検査協会・市区町村・警察署の窓口で確認してください。
            </p>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">軽自動車を売るときの注意点</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 掲載社の公式記載 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">掲載社の公式記載で確認できること</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            当サイトはメーカー別・車種別の買取可否を独自に判定することはしません。以下は各社の公式サイトに記載があった内容の引用です。個別の車両の扱いは状態によって変わるため、最終的な可否は各社にご確認ください。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5 text-[13px] leading-loose text-steel-700">
            <p>
              <Link href="/gyosha/sellca/" className="text-vermilion underline underline-offset-4">セルカ</Link>
              は、公式トップの買取相場検索に軽自動車・軽-トラック・セダン・SUV・ミニバン・トラック等のボディタイプと輸入車のカテゴリーを掲載し、出品できない車として、車検証がない車や国内未登録車（並行車両）などを公式FAQに挙げています（2026年10月21日確認）。
              <Link href="/gyosha/carseven/" className="text-vermilion underline underline-offset-4">カーセブン</Link>
              は買取対象として国産車および輸入車を掲載し、国産のブランド名としてスズキ・ダイハツ・トヨタ・ホンダなどを公式サイトに挙げています（2026年9月11日確認）。
              <Link href="/gyosha/apple/" className="text-vermilion underline underline-offset-4">アップル</Link>
              は「どんな車でも買取します」と公式トップに記載し、国産車・輸入車の各メーカーを買取査定の対象として掲載しています（2026年9月11日確認）。
              <Link href="/gyosha/haishar/" className="text-vermilion underline underline-offset-4">ハイシャル</Link>
              は、対応地域のページで「事故車・動かない車・年式が古い車・走行距離10万キロ超えの車」を対象に挙げています（2026年10月20日確認）。
              <Link href="/gyosha/gulliver/" className="text-vermilion underline underline-offset-4">ガリバー</Link>
              は、車検証がない車と永久抹消登録済みの車は買取不可と公式FAQに記載しています（2026年9月11日確認）。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載社の条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断（4問）で確認する</Link>
          </div>
        </section>

        {/* メーカー別 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">メーカー別に確認する</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            メーカーごとの違いとして当サイトが扱うのは、軽自動車を多く扱うメーカーかどうかという事実の範囲までです。車種名・スペック・人気の評価は掲載しません。
          </p>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            {makers.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{m.title}</span>
                  <span className="mt-1 block text-xs text-steel-500">{m.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">軽自動車の買取でよくある質問</h2>
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
              <Link href="/guide/keijidousha-shorui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">軽自動車の売却に必要な書類</span>
                <span className="mt-1 block text-xs text-steel-500">実印・印鑑証明書が要らない理由・普通車との違い・再発行窓口</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shorui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車売却の必要書類</span>
                <span className="mt-1 block text-xs text-steel-500">普通車も含めた書類の全体像</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/genka-point/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">査定の減点ポイント</span>
                <span className="mt-1 block text-xs text-steel-500">確認されやすい項目と事前の準備</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/zeikin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車売却と税金の基礎知識</span>
                <span className="mt-1 block text-xs text-steel-500">自動車税・軽自動車税の考え方</span>
              </Link>
            </li>
            <li>
              <Link href="/haisha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">廃車・事故車・不動車の買取</span>
                <span className="mt-1 block text-xs text-steel-500">動かない軽自動車を手放すときの選択肢</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取27社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">査定料・入金・キャンセル規定を同じ基準で比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
