import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, CHECKED_LABEL } from "@/lib/site";

const TITLE = "車売却の必要書類 完全ガイド｜普通車と軽自動車の違い・紛失時の再発行窓口";
const DESC =
  "車の売却に必要な書類を一覧で整理。普通車は実印と印鑑登録証明書が必要、軽自動車は認印で足りるのが一般的という違いから、車検証・自賠責保険証明書・リサイクル券・納税証明書の役割、紛失時の再発行窓口（運輸支局・都道府県税事務所など）までを解説します。";
const PATH = "/guide/shorui/";

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

export default function ShoruiGuidePage() {
  const conclusions = [
    "必要書類は普通車と軽自動車で異なります。普通車は実印と印鑑登録証明書が必要、軽自動車は認印で足りるのが一般的です。",
    "共通して必要になりやすいのは、車検証（自動車検査証）・自賠責保険証明書・リサイクル券・納税に関する書類です。",
    "書類を紛失していても売却は諦めなくて大丈夫です。車検証は運輸支局（軽自動車は軽自動車検査協会）、納税証明書は都道府県税事務所（軽自動車は市区町村）など、それぞれ再発行の窓口があります。",
    "名義変更などの書類手続きを無料で代行すると公式サイトに記載する業者もあります。書類に不安がある場合は、代行の範囲と費用を比較の軸に加えましょう。",
  ];

  const futsuRows = [
    { label: "車検証（自動車検査証）", value: "車の身分証にあたる基本書類。記載の所有者・住所が現在の状況と一致しているかを最初に確認します。" },
    { label: "自賠責保険証明書", value: "自賠責保険への加入を証明する書類。車検証と一緒に保管されていることが多い書類です。" },
    { label: "リサイクル券（預託証明書）", value: "自動車リサイクル料金を預託済みであることを示す書類。購入時に受け取っているのが一般的です。" },
    { label: "自動車税（種別割）の納税に関する書類", value: "納税状況の確認に使われます。納付方法の電子化により扱いが変わってきているため、必要な形式は売却先に確認しましょう。" },
    { label: "実印", value: "普通車の名義変更（移転登録）は実印での押印が必要になるのが一般的です。市区町村に印鑑登録した印鑑を用意します。" },
    { label: "印鑑登録証明書", value: "実印が本物であることを証明する書類。市区町村の窓口などで発行され、発行から一定期間内のものを求められるのが一般的です。" },
    { label: "譲渡証明書・委任状", value: "名義変更を業者に任せる場合に使う書類。通常は業者側が用紙を用意し、署名・押印箇所を案内してくれます。" },
  ];

  const keiRows = [
    { label: "車検証（自動車検査証）", value: "普通車と同じく基本の書類。軽自動車の各種手続きの窓口は軽自動車検査協会になります。" },
    { label: "自賠責保険証明書", value: "普通車と同様に必要です。" },
    { label: "リサイクル券（預託証明書）", value: "普通車と同様に必要です。" },
    { label: "軽自動車税（種別割）の納税に関する書類", value: "軽自動車税は市区町村が課税するため、納税関係の窓口も市区町村です。" },
    { label: "印鑑（認印）", value: "軽自動車の名義変更は実印・印鑑登録証明書が不要で、認印で足りるのが一般的です。この手続きの軽さが普通車との大きな違いです。" },
  ];

  const saihakko = [
    {
      t: "車検証をなくした場合",
      d: "普通車の車検証は、管轄の運輸支局で再交付の手続きができます。軽自動車の場合の窓口は軽自動車検査協会です。売却前に自分で再交付を受ける方法のほか、買取業者が段取りを案内してくれる場合もあるため、紛失に気づいた時点で正直に伝えるのが早道です。",
    },
    {
      t: "自賠責保険証明書をなくした場合",
      d: "契約している損害保険会社（共済含む）に連絡すると再発行の手続きができます。どこの保険会社か分からない場合は、車を購入した販売店に確認すると契約先が分かることがあります。",
    },
    {
      t: "リサイクル券をなくした場合",
      d: "リサイクル料金の預託状況は自動車リサイクルシステムのウェブサイトで確認でき、預託状況を示す書面を印刷して代用できる扱いが一般的です。取り扱いの詳細は売却先の業者に確認してください。",
    },
    {
      t: "納税証明書をなくした場合",
      d: "普通車の自動車税（種別割）は都道府県税事務所、軽自動車税（種別割）は市区町村の窓口で、それぞれ納税証明書の再発行を受けられるのが一般的です。近年は納税確認の電子化が進み、紙の証明書が不要になるケースもあるため、必要かどうかを含めて売却先に確認しましょう。",
    },
    {
      t: "印鑑登録をしていない場合",
      d: "普通車の売却で実印が必要なのに印鑑登録をしていない場合は、市区町村の窓口で印鑑登録を行ってから印鑑登録証明書を取得します。引っ越し後に登録し直していないケースもあるため、住所変更と合わせて確認してください。",
    },
  ];

  const cautions = [
    {
      t: "車検証の住所・氏名が現在と違うときは追加書類",
      d: "引っ越しや結婚などで車検証の記載と現在の住所・氏名が異なる場合、つながりを証明する書類（住民票の写しや戸籍関係の書類など）が追加で必要になるのが一般的です。複数回引っ越している場合はさらに書類が増えることがあるため、早めに売却先へ相談しましょう。",
    },
    {
      t: "所有者欄が自分以外なら先に名義の整理",
      d: "車検証の所有者欄がローン会社やディーラーの名義（所有権留保）の場合は、書類を揃える前に所有権解除の手続きが必要です。また、故人名義の車は相続による移転登録が先になります。それぞれ状況別ページで手順を解説しています。",
    },
    {
      t: "印鑑登録証明書には有効期限の扱いがある",
      d: "名義変更に使う印鑑登録証明書は、発行から一定期間内のものを求められるのが一般的です。早く取りすぎて期限切れになると取り直しになるため、売却スケジュールが固まってから取得するのが無駄のない段取りです。",
    },
    {
      t: "書類がないまま引き渡しだけ先行させない",
      d: "書類が揃う前に車だけ引き渡すと、名義変更が完了しないまま時間が経つリスクがあります。入金条件が「書類確認後」となっている業者も多いため、引き渡しと書類提出のタイミングは契約時にセットで確認してください。",
    },
  ];

  const faqs = [
    {
      q: "普通車と軽自動車で必要書類はどう違いますか？",
      a: "大きな違いは印鑑まわりです。普通車の名義変更は実印と印鑑登録証明書が必要になるのが一般的なのに対し、軽自動車は認印で足りるのが一般的です。また手続きの窓口も、普通車は運輸支局、軽自動車は軽自動車検査協会と異なります。",
    },
    {
      q: "書類を紛失していても車を売れますか？",
      a: "再発行すれば売却できます。車検証は運輸支局（軽自動車は軽自動車検査協会）、自賠責保険証明書は契約先の保険会社、納税証明書は都道府県税事務所（軽自動車は市区町村）が一般的な窓口です。紛失が分かった時点で売却先に伝えると、必要な段取りを案内してもらえます。",
    },
    {
      q: "書類の手続きを代行してくれる業者はありますか？",
      a: "当サイト掲載社では、旧車王が名義変更等の費用一切なし、外車王が名義変更手数料無料、ハイシャルが廃車手続きの書類代行無料、トラック王国が書類手続き無料と、それぞれ公式サイトに記載しています（2026年8月7日確認）。代行の範囲は各社で異なるため、詳細は各社にご確認ください。",
    },
    {
      q: "納税証明書は必ず必要ですか？",
      a: "近年は納税確認の電子化が進み、紙の納税証明書が不要になるケースもあります。ただし納付直後で確認が取れない場合や、業者側の運用によって書面を求められる場合もあるため、必要かどうかは売却先に確認するのが確実です。再発行は普通車が都道府県税事務所、軽自動車が市区町村の窓口です。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "車売却の必要書類 完全ガイド", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">REQUIRED DOCUMENTS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          車売却の必要書類 完全ガイド｜普通車と軽自動車の違い・紛失時の再発行窓口
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          車の売却で意外とつまずくのが書類の準備です。査定額の交渉がまとまっても、書類が揃わなければ名義変更が進まず、入金も遅れます。このページでは、普通車と軽自動車それぞれで必要になりやすい書類の一覧、紛失した場合の再発行窓口、書類まわりでよくあるつまずきを一般知識として整理します。
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

        {/* 普通車の書類 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">普通車の売却で必要になりやすい書類</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            普通車の名義変更（移転登録）は運輸支局での手続きです。実印と印鑑登録証明書が必要になるのが軽自動車との大きな違いです。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {futsuRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 軽自動車の書類 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">軽自動車の売却で必要になりやすい書類</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車の手続き窓口は軽自動車検査協会で、実印・印鑑登録証明書が不要（認印で可）なのが一般的です。そのぶん普通車より書類の準備は軽くなります。
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
            ※ 上記は一般的な必要書類の整理です。個別の取引で必要な書類は売却先の業者・手続き窓口の案内に従ってください。
          </p>
        </section>

        {/* 再発行 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">書類をなくしたときの再発行窓口</h2>
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
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">書類まわりで気をつけたいこと</h2>
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
            書類の再発行や名義変更の手続きに不安がある場合は、書類手続きの代行を無料と明記している業者を選ぶのも一つの考え方です。以下は当サイト掲載社の公式確認済み条件です（確認日: {CHECKED_LABEL}）。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">書類手続き無料を公式サイトに記載する掲載社</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              <Link href="/gyosha/qsha-oh/" className="text-vermilion underline underline-offset-4">旧車王</Link>は名義変更等の費用一切なし、<Link href="/gyosha/gaisha-oh/" className="text-vermilion underline underline-offset-4">外車王</Link>は名義変更手数料無料、<Link href="/gyosha/haishar/" className="text-vermilion underline underline-offset-4">ハイシャル</Link>は廃車手続きの書類代行無料、<Link href="/gyosha/truck-oukoku/" className="text-vermilion underline underline-offset-4">トラック王国</Link>は書類手続き無料と、それぞれ公式サイトに記載しています（{CHECKED_LABEL}確認）。一方、書類代行が有料オプションの業者や、公式サイトで確認できなかった業者もあります。各社の条件は比較表で同じ物差しで確認してください。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">書類条件を8社比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断（4問）で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">車売却の書類でよくある質問</h2>
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
              <Link href="/situation/souzoku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">相続した車を売る手続きと注意点</span>
                <span className="mt-1 block text-xs text-steel-500">遺産分割協議書など相続特有の書類</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/loan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">ローンが残っている車を売る方法</span>
                <span className="mt-1 block text-xs text-steel-500">所有権留保・所有権解除の基礎知識</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/shakenkire/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車検切れの車を売る方法</span>
                <span className="mt-1 block text-xs text-steel-500">書類の期限切れが重なりやすいケース</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取8社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">書類代行の有無を同じ物差しで比較</span>
              </Link>
            </li>
            <li>
              <Link href="/haisha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">廃車・事故車・不動車の買取</span>
                <span className="mt-1 block text-xs text-steel-500">抹消登録に関わる手続きの一般知識</span>
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
