import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, CHECKED_LABEL } from "@/lib/site";

const TITLE = "軽自動車の売却に必要な書類｜認印で足りる理由と普通車との違い・再発行窓口";
const DESC =
  "軽自動車を売るときに必要な書類を、普通車との違いを軸に整理しました。実印と印鑑登録証明書が要る普通車に対し、軽自動車は認印で足りるのが一般的です。手続き窓口が軽自動車検査協会になる点、申請書類の名称の違い、車庫証明（保管場所届出）の地域差、書類を紛失したときの再発行窓口までを解説します。";
const PATH = "/guide/keijidousha-shorui/";

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
  datePublished: "2026-09-12",
  dateModified: "2026-09-12",
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function KeijidoushaShoruiPage() {
  const conclusions = [
    "軽自動車の名義変更は、実印と印鑑登録証明書が不要で認印で足りるのが一般的です。普通車より書類の準備は軽くなります。",
    "手続きの窓口は運輸支局ではなく軽自動車検査協会です。軽自動車税（種別割）に関する窓口は市区町村になります。",
    "揃える書類の中心は、車検証（自動車検査証）・自賠責保険証明書・リサイクル券・軽自動車税の納税に関する書類・印鑑（認印）です。",
    "書類の名称や様式、車庫証明（保管場所届出）の要否は地域や時期によって異なります。最新の必要書類は軽自動車検査協会や買取業者に確認してください。",
  ];

  const keiRows = [
    {
      label: "車検証（自動車検査証）",
      value:
        "軽自動車の身分証にあたる基本書類です。記載されている所有者・使用者・住所が現在の状況と一致しているかを最初に確認します。電子化された車検証（ICタグ付き）が交付されている場合は、記録事項を確認できる書面とあわせて保管されていることがあります。",
    },
    {
      label: "自賠責保険証明書",
      value:
        "自賠責保険（共済）への加入を証明する書類です。車検証と一緒にダッシュボードなどへ保管されていることが多く、車検の残り期間と保険期間はおおむね連動しています。売却時は有効期間が残っているかもあわせて確認しておくと段取りがスムーズです。",
    },
    {
      label: "リサイクル券（預託証明書）",
      value:
        "自動車リサイクル料金を預託済みであることを示す書類です。軽自動車も普通車と同じくリサイクル制度の対象で、購入時に受け取っているのが一般的です。",
    },
    {
      label: "軽自動車税（種別割）の納税に関する書類",
      value:
        "軽自動車税（種別割）は市区町村が課税するため、納税に関する書類や証明書の窓口も市区町村です。近年は納税確認の電子化が進んでおり、紙の証明書が求められるかどうかは売却先や時期によって異なります。",
    },
    {
      label: "印鑑（認印）",
      value:
        "軽自動車の名義変更では、実印や印鑑登録証明書ではなく認印で足りるのが一般的です。これが普通車との最大の違いで、印鑑登録をしていない方でも手続きを進めやすくなっています。ただし取引の内容によっては本人確認書類を求められることがあります。",
    },
    {
      label: "申請依頼書（手続きを任せる場合）",
      value:
        "軽自動車の手続きを買取業者などに任せる場合は、普通車の委任状にあたる書類として申請依頼書と呼ばれる様式が使われるのが一般的です。通常は業者側が用紙を用意し、署名・押印箇所を案内してくれます。",
    },
    {
      label: "本人確認書類",
      value:
        "運転免許証など、本人確認ができる書類の提示を求められることが一般的です。買取業者側の本人確認の運用は各社で異なるため、何を用意すればよいかは申し込み時に確認しておきましょう。",
    },
    {
      label: "振込先口座が分かるもの",
      value:
        "売却代金の振込先を伝えるために、通帳やキャッシュカードなど口座情報が分かるものを用意しておくと手続きが一度で済みます。名義は原則として売主本人のものが求められます。",
    },
  ];

  const diffRows = [
    {
      label: "印鑑",
      value:
        "普通車は実印と印鑑登録証明書が必要になるのが一般的です。軽自動車は認印で足りるのが一般的で、印鑑登録証明書の取得も通常は求められません。",
    },
    {
      label: "手続きの窓口",
      value:
        "普通車の名義変更（移転登録）は管轄の運輸支局です。軽自動車は軽自動車検査協会の事務所・支所が窓口になります。",
    },
    {
      label: "手続きの呼び方",
      value:
        "普通車は「移転登録」と呼ばれる登録制度の手続きです。軽自動車は登録制度ではなく届出に近い扱いで、名義変更にあたる手続きは自動車検査証の記入申請と呼ばれるのが一般的です。使用する申請書の名称や様式は変わることがあるため、最新の様式は軽自動車検査協会で確認してください。",
    },
    {
      label: "委任のための書類",
      value:
        "普通車では委任状と譲渡証明書を使うのが一般的です。軽自動車では申請依頼書と呼ばれる様式が使われるのが一般的で、譲渡証明書が省略される運用もあります。",
    },
    {
      label: "車庫証明の扱い",
      value:
        "普通車は原則として車庫証明（自動車保管場所証明書）が必要です。軽自動車は保管場所の届出制で、届出が必要な地域と不要な地域があります。地域によって異なるため、お住まいの地域の警察署で確認してください。",
    },
    {
      label: "税金に関する窓口",
      value:
        "普通車の自動車税（種別割）は都道府県が課税し、窓口は都道府県税事務所です。軽自動車税（種別割）は市区町村が課税し、窓口も市区町村になります。",
    },
    {
      label: "廃車にする場合の手続き名",
      value:
        "普通車は一時抹消登録・永久抹消登録と呼ばれます。軽自動車は自動車検査証返納届（一時使用中止）・解体返納と呼ばれるのが一般的で、書類の名称そのものが異なります。",
    },
  ];

  const saihakko = [
    {
      t: "車検証をなくした場合",
      d: "軽自動車の車検証は、軽自動車検査協会の事務所・支所で再交付の手続きができるのが一般的です。普通車のように運輸支局へ行くのではない点に注意してください。売却前に自分で再交付を受ける方法のほか、買取業者が段取りを案内してくれる場合もあるため、紛失に気づいた時点で正直に伝えるのが早道です。必要書類や手続きの流れは軽自動車検査協会の窓口で確認してください。",
    },
    {
      t: "自賠責保険証明書をなくした場合",
      d: "契約している損害保険会社（共済を含む）に連絡すると再発行の手続きができるのが一般的です。どこの保険会社と契約しているか分からない場合は、車を購入した販売店や、直近で車検を受けた整備工場に確認すると契約先が判明することがあります。",
    },
    {
      t: "リサイクル券をなくした場合",
      d: "リサイクル料金の預託状況は自動車リサイクルシステムのウェブサイトで確認でき、預託状況を示す書面を印刷して代用できる扱いが一般的です。軽自動車も普通車と同じ枠組みで運用されています。取り扱いの詳細は売却先の業者に確認してください。",
    },
    {
      t: "軽自動車税（種別割）の納税証明書をなくした場合",
      d: "軽自動車税（種別割）は市区町村が課税するため、納税証明書の再発行窓口も市区町村の担当課です。普通車のように都道府県税事務所へ行く必要はありません。近年は納税確認の電子化が進み、紙の証明書が不要になるケースもあるため、そもそも必要かどうかを含めて売却先に確認しましょう。",
    },
    {
      t: "ナンバープレートを紛失・破損した場合",
      d: "ナンバープレート（車両番号標）の紛失・破損は、軽自動車検査協会で再交付の手続きが必要になるのが一般的です。盗難が疑われる場合は先に警察への届け出を求められることがあります。手続きの詳細は軽自動車検査協会の窓口で確認してください。",
    },
  ];

  const cautions = [
    {
      t: "車検証の住所・氏名が今と違うときは追加書類",
      d: "引っ越しや結婚などで車検証の記載と現在の住所・氏名が異なる場合、つながりを証明する書類（住民票の写しや戸籍関係の書類など）が追加で必要になるのが一般的です。軽自動車は印鑑登録証明書が不要なぶん、住所の確認に住民票の写しが使われることがあります。複数回引っ越している場合は書類が増えることもあるため、早めに売却先へ相談しましょう。",
    },
    {
      t: "所有者欄がローン会社やディーラーなら先に整理",
      d: "軽自動車でも、残価設定ローンや販売店のクレジットを利用した場合は、車検証の所有者欄が自分以外になっていることがあります。この場合は所有権解除の手続きが先で、必要書類も所有者側の指定に従うことになります。手順は状況別ページにまとめています。",
    },
    {
      t: "認印でよくてもシャチハタ型は避ける",
      d: "軽自動車の手続きは認印で足りるのが一般的ですが、インク内蔵型（いわゆるスタンプ式）の印鑑は受け付けられない運用が一般的です。朱肉を使う印鑑を用意しておくと手続きがやり直しになりません。",
    },
    {
      t: "軽自動車税は課税のタイミングに注意",
      d: "軽自動車税（種別割）は年度の基準日時点の所有者に課税される仕組みで、普通車の自動車税（種別割）のような月割の還付が行われないのが一般的です。売却のタイミングによって負担の感じ方が変わるため、気になる場合は市区町村の担当課に確認してください。税額や還付の有無は制度改正で変わることがあります。",
    },
    {
      t: "書類が揃う前に車だけ渡さない",
      d: "書類が揃う前に車だけ引き渡すと、名義変更が完了しないまま時間が経つリスクがあります。入金条件が「書類確認後」となっている業者も多いため、引き渡しと書類提出のタイミングは契約時にセットで確認してください。",
    },
  ];

  const flow = [
    {
      t: "車検証で所有者と使用者を確認する",
      d: "最初に見るのは車検証の所有者欄です。自分の名義であればそのまま売却の手続きに進めます。ローン会社や販売店の名義であれば、所有権解除が先になります。あわせて使用者の住所が現在の住所と一致しているかも確認しておきましょう。",
    },
    {
      t: "手元にある書類を並べて不足を洗い出す",
      d: "車検証・自賠責保険証明書・リサイクル券・納税に関する書類を並べ、足りないものを把握します。軽自動車は印鑑登録証明書が不要なぶん、揃える書類が少なく確認も短時間で済みます。",
    },
    {
      t: "不足分の再発行窓口に連絡する",
      d: "車検証は軽自動車検査協会、自賠責保険証明書は契約先の保険会社、納税証明書は市区町村と、軽自動車は窓口が普通車と異なります。窓口を間違えると二度手間になるため、事前に確認してから動きましょう。",
    },
    {
      t: "買取業者に必要書類を確認して申し込む",
      d: "必要な書類は業者の運用によって細部が異なります。申し込みの段階で「軽自動車である」ことを伝え、当日までに用意するものを一覧で教えてもらうのが確実です。書類の代行に対応している業者かどうかもこの時点で確認しておきます。",
    },
    {
      t: "引き渡しと手続き完了の確認",
      d: "引き渡し後は、名義変更（自動車検査証の記入申請）または返納の手続きが完了したことを必ず確認します。手続きが宙に浮いたままだと、翌年度の軽自動車税の課税通知が自分に届くといった不都合が起こり得ます。完了の連絡方法と時期を契約時に確認しておきましょう。",
    },
  ];

  const faqs = [
    {
      q: "軽自動車の売却に実印と印鑑登録証明書は必要ですか？",
      a: "必要ないのが一般的です。軽自動車の名義変更にあたる手続きは認印で足りるとされており、印鑑登録証明書の提出も通常は求められません。実印と印鑑登録証明書が必要になるのは普通車です。ただし取引内容や業者の運用によって求められる書類は変わることがあるため、最新の必要書類は軽自動車検査協会や買取業者に確認してください。",
    },
    {
      q: "軽自動車の名義変更はどこで手続きしますか？",
      a: "軽自動車検査協会の事務所・支所が窓口になるのが一般的です。普通車の移転登録は運輸支局ですが、軽自動車は窓口そのものが異なります。また軽自動車税（種別割）に関する手続きの窓口は市区町村です。買取業者に売却する場合は、業者側が手続きを代行してくれることが多いため、代行の範囲を事前に確認しましょう。",
    },
    {
      q: "軽自動車の売却にも車庫証明は必要ですか？",
      a: "軽自動車は保管場所の届出制で、届出が必要な地域と不要な地域があり、地域によって異なります。また保管場所の手続きは購入側で必要になるのが一般的で、売却する側で用意する書類ではないのが通常です。ご自身の地域の扱いは、お住まいの地域を管轄する警察署で確認してください。",
    },
    {
      q: "軽自動車の車検証をなくしました。売れますか？",
      a: "再交付を受ければ売却できます。軽自動車の車検証の再交付窓口は軽自動車検査協会です。普通車の運輸支局とは窓口が異なる点に注意してください。買取業者によっては再交付の段取りを案内してくれる場合もあるため、紛失に気づいた時点で伝えるのが早道です。",
    },
    {
      q: "軽自動車を廃車にする場合も書類は同じですか？",
      a: "基本となる書類は近いものの、手続きの名称が異なります。軽自動車では自動車検査証返納届（一時使用中止）や解体返納と呼ばれる手続きになり、普通車の一時抹消登録・永久抹消登録とは書類の名称も様式も異なります。廃車を前提とする場合の考え方は廃車・事故車・不動車の買取ページにまとめています。",
    },
    {
      q: "書類の手続きを代行してくれる業者はありますか？",
      a: "当サイト掲載社では、旧車王が名義変更等の費用一切なし、外車王が名義変更手数料無料、ハイシャルが廃車手続きの書類代行無料、トラック王国が書類手続き無料と、それぞれ公式サイトに記載しています（2026年8月7日確認）。代行の範囲は各社で異なるため、詳細は各社にご確認ください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "車売却の必要書類 完全ガイド", path: "/guide/shorui/" },
          { name: "軽自動車の売却に必要な書類", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">KEI CAR DOCUMENTS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          軽自動車の売却に必要な書類｜認印で足りる理由と普通車との違い・再発行窓口
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          軽自動車を売るときの書類は、普通車と同じではありません。実印と印鑑登録証明書が必要になる普通車に対して、軽自動車は認印で足りるのが一般的で、手続きの窓口も運輸支局ではなく軽自動車検査協会です。このページでは、軽自動車の売却に絞って必要書類と普通車との違いを整理し、紛失したときの再発行窓口までを一般知識としてまとめます。制度や様式は変わることがあるため、最新の必要書類は軽自動車検査協会や買取業者に確認してください。
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

        {/* 必要書類一覧 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">軽自動車の売却で必要になりやすい書類</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車の売却で揃える書類は、普通車より少なく済むのが一般的です。印鑑登録証明書を取りに行く手間がないぶん、思い立ってから動き出すまでの時間も短くなります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {keiRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 上記は一般的な必要書類の整理です。個別の取引で必要な書類は、売却先の業者や軽自動車検査協会の案内に従ってください。
          </p>
        </section>

        {/* 普通車との違い */}
        <section className="mt-14">
          <h2 className="section-title mb-2">普通車との違いを項目別に整理</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車は普通車と同じ「クルマ」ですが、手続きの制度そのものが別立てです。書類の名称や窓口が違うため、普通車の情報をそのまま当てはめると窓口違いで二度手間になることがあります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {diffRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 手続きの名称・様式・地域ごとの扱いは変わることがあります。実際の手続き前に、軽自動車検査協会や市区町村の窓口で最新の取り扱いを確認してください。普通車側の詳細は
            <Link href="/guide/shorui/" className="text-vermilion underline underline-offset-4">車売却の必要書類 完全ガイド</Link>
            にまとめています。
          </p>
        </section>

        {/* 進め方 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">軽自動車の書類を揃える5ステップ</h2>
          <div className="space-y-5">
            {flow.map((s, i) => (
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
        </section>

        {/* 再発行 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">軽自動車の書類をなくしたときの再発行窓口</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車は再発行の窓口が普通車と異なります。運輸支局や都道府県税事務所ではなく、軽自動車検査協会と市区町村が中心になる点を押さえておきましょう。
          </p>
          <div className="space-y-5">
            {saihakko.map((s, i) => (
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
            ※ 再発行に必要な書類や手続きの流れは変わることがあります。手続き前に各窓口で最新の案内を確認してください。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">軽自動車の書類まわりで気をつけたいこと</h2>
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
          <h2 className="section-title mb-2">書類に不安があるときの業者選び</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車は書類が少ないぶん自分で進めやすい一方、車検証の紛失や所有者名義の問題が絡むと手間が増えます。書類手続きの代行を無料と明記している業者を選ぶのも一つの考え方です。以下は当サイト掲載社の公式確認済み条件です（確認日: {CHECKED_LABEL}）。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">書類手続き無料を公式サイトに記載する掲載社</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              <Link href="/gyosha/qsha-oh/" className="text-vermilion underline underline-offset-4">旧車王</Link>は名義変更等の費用一切なし、<Link href="/gyosha/gaisha-oh/" className="text-vermilion underline underline-offset-4">外車王</Link>は名義変更手数料無料、<Link href="/gyosha/haishar/" className="text-vermilion underline underline-offset-4">ハイシャル</Link>は廃車手続きの書類代行無料、<Link href="/gyosha/truck-oukoku/" className="text-vermilion underline underline-offset-4">トラック王国</Link>は書類手続き無料と、それぞれ公式サイトに記載しています（{CHECKED_LABEL}確認）。代行の範囲は各社で異なるため、詳細は各社にご確認ください。各社の条件は比較表で同じ物差しで確認できます。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">書類条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断（4問）で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">軽自動車の売却書類でよくある質問</h2>
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
              <Link href="/guide/shorui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車売却の必要書類 完全ガイド</span>
                <span className="mt-1 block text-xs text-steel-500">普通車も含めた書類の全体像</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/zeikin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車売却と税金の基礎知識</span>
                <span className="mt-1 block text-xs text-steel-500">自動車税・軽自動車税の考え方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/shakenkire/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車検切れの車を売る方法</span>
                <span className="mt-1 block text-xs text-steel-500">書類の期限切れが重なりやすいケース</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/loan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">ローンが残っている車を売る方法</span>
                <span className="mt-1 block text-xs text-steel-500">所有権留保・所有権解除の基礎知識</span>
              </Link>
            </li>
            <li>
              <Link href="/haisha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">廃車・事故車・不動車の買取</span>
                <span className="mt-1 block text-xs text-steel-500">返納手続きに関わる一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取8社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">書類代行の有無を同じ物差しで比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
