import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, SITUATION_CHECKED_LABEL } from "@/lib/site";

const TITLE = "相続した車を売る手続きと注意点｜名義変更（移転登録）から売却までの流れ";
const DESC =
  "相続した車は、原則として相続による名義変更（移転登録）を済ませてから売却します。遺産分割協議書や戸籍関係書類が必要になる一般的な流れと注意点、査定額がつかない古い車の廃車買取・旧車買取という選択肢までを中立の視点で整理します。";
const PATH = "/situation/souzoku/";

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

export default function SouzokuPage() {
  const conclusions = [
    "故人名義のままでは原則として売却できません。まず相続による移転登録（名義変更）を済ませるのが基本の順序です。",
    "移転登録では遺産分割協議書や戸籍関係の書類が必要になるのが一般的です。具体的な書式・要件は管轄の運輸支局や司法書士などの専門家に確認してください。",
    "軽自動車は窓口（軽自動車検査協会）も必要書類も普通車と異なります。車検証でどちらの区分かを先に確認します。",
    "長年放置されて査定額がつかない車には、廃車買取という選択肢があります。一方で、年式の古い車が旧車として評価される可能性もあります。",
  ];

  const steps = [
    {
      t: "車検証で「所有者」の欄を確認する",
      d: "最初に行うのは車検証の確認です（2023年1月以降に交付された電子車検証では、所有者の氏名又は名称は券面に記載されていないため、国土交通省の「車検証閲覧アプリ」または「自動車検査証記録事項」で確認します）。所有者が故人の名前であれば相続手続きに進みますが、所有者欄がローン会社やディーラーの名義になっている場合（所有権留保）は、ローンの完済・所有権解除の手続きが先に必要になります。使用者が故人であっても、所有者が別の名義になっている場合は少なくありません。ローンが残っている車の売却方法は別ページで解説しています。",
    },
    {
      t: "相続人を確定し、車を誰が相続するか決める",
      d: "車は預貯金などと同じ相続財産です。戸籍関係の書類で相続人の範囲を確定したうえで、誰がその車を相続するのかを相続人全員で話し合い（遺産分割協議）、合意内容を書面に残すのが一般的な流れです。相続人が一人だけの場合と複数いる場合とで必要な書類が変わるため、ご自身のケースがどちらに当たるかを整理しておいてください。",
    },
    {
      t: "移転登録（名義変更）を行う",
      d: "普通車の相続による名義変更は、管轄の運輸支局での移転登録という手続きです。遺産分割協議書、被相続人と相続人の関係がわかる戸籍関係書類、新しい所有者の印鑑登録証明書などが必要になるのが一般的で、相続する自動車の査定価格が100万円以下の場合は、査定書等を添付して遺産分割協議書の代わりに「遺産分割協議成立申立書」で申請できる取り扱いもあります（東北運輸局・北海道運輸局の案内、2026年10月20日確認）。要件は個別のケースで変わるため、書式や添付書類は管轄の運輸支局または行政書士・司法書士などの専門家に確認するのが確実です。軽自動車は運輸支局ではなく軽自動車検査協会での手続きとなり、同協会の案内では、相続の場合は所有者が亡くなった事実と新しい所有者が相続人であることを確認できる戸籍謄本等または法定相続情報一覧図（いずれもコピー可）を用意する扱いです（2026年10月20日確認）。",
    },
    {
      t: "車の状態に合わせて売却方法を選ぶ",
      d: "名義変更のめどが立ったら、売却方法を検討します。動く車であれば通常の買取査定に出せますが、故人が長く乗っていなかった車はバッテリー上がりや車検切れで自走できないことも多く、その場合は出張査定や引き取りに対応する業者を選ぶのが現実的です。年式が古く一般の査定で値がつかない車は廃車買取、希少な旧車は旧車専門業者と、車の状態によって適した売却先が変わります。",
    },
    {
      t: "査定・契約・引き渡しを進める",
      d: "業者を決めたら査定を受け、金額と条件に納得できたら契約します。相続車両の場合、通常の売却書類に加えて相続関係の書類が必要になるため、何をいつまでに用意するかを業者に具体的に確認してください。入金のタイミングやキャンセル規定など契約条件の確認ポイントは通常の売却と同じです。",
    },
  ];

  const cautions = [
    {
      t: "相続放棄を検討しているなら車に手を付けない",
      d: "相続放棄を検討している場合、故人の車を売却・処分してしまうと相続を承認したとみなされるおそれがあると一般に説明されています。放棄の可能性が少しでもあるうちは車を動かしたり売ったりせず、先に弁護士・司法書士などの専門家に相談してください。",
    },
    {
      t: "書類は自己判断で作らない",
      d: "遺産分割協議書の書式や戸籍書類の範囲は、相続人の構成によって変わります。インターネット上のひな形をそのまま使って不備が出ると、手続きのやり直しで時間がかかります。管轄の運輸支局への事前確認、または専門家への依頼を前提に段取りを組むことをおすすめします。",
    },
    {
      t: "自動車税・保険の扱いを整理する",
      d: "自動車税（種別割）の納付や還付の扱い、自賠責保険・任意保険の名義変更や解約も、相続に伴って整理が必要な項目です。放置すると納税通知が故人宛てに届き続けることになります。売却・廃車のタイミングと合わせて手続きの要否を確認してください。",
    },
    {
      t: "共同相続のまま放置しない",
      d: "相続する人を決めないまま車を置いておくと、車は相続人全員の共有状態のままになります。時間が経つほど相続人の予定が合わせづらくなり、書類集めの負担も増えます。乗る予定がない場合は、早めに遺産分割協議で帰属を決め、名義変更か売却・廃車まで進めることで、結果として負担を抑えられます。",
    },
    {
      t: "「名義変更前でも買い取る」の言葉だけで進めない",
      d: "買取店の中には相続書類の案内や手続きの代行に対応するところもありますが、何をどこまで代行するのか、書類が揃わない場合はどうなるのかを契約前に確認しないまま、金額の話だけを先行させるのは避けてください。手続きの全体像をご自身でも把握したうえで依頼することをおすすめします。",
    },
  ];

  const faqs = [
    {
      q: "故人名義のまま車を売却できますか？",
      a: "原則としてできません。相続による移転登録（名義変更）を済ませてから売却するのが基本の流れです。買取店によっては相続書類の案内や手続きのサポートに対応する場合もあるため、査定時に相続車両であることを伝えて段取りを確認してください。",
    },
    {
      q: "相続した車の名義変更にはどんな書類が必要ですか？",
      a: "一般的には遺産分割協議書、被相続人と相続人の関係がわかる戸籍関係書類、新所有者の印鑑登録証明書などが挙げられますが、相続人の構成や車の区分（普通車か軽自動車か）で変わります。具体的な書式・要件は管轄の運輸支局・軽自動車検査協会、または司法書士等の専門家に確認してください。",
    },
    {
      q: "長年放置されて動かない車を相続しました。売れますか？",
      a: "廃車買取という選択肢があります。当サイト掲載のハイシャルは、不動車・事故車・故人名義の車などでも引き取り・手続きの費用はかからないとし、全国どこでもレッカー代などの引き取り費用無料（一部の島しょ部を除く）と公式サイトに記載しています（2026年10月20日確認）。詳しくは廃車・事故車カテゴリのページをご覧ください。",
    },
    {
      q: "古い車ですが、価値があるかどうかわかりません。",
      a: "年式が古い車は一般の査定で評価されにくい一方、旧車として専門業者に評価される可能性があります。掲載している旧車王は、10年以上古い車を主な対象とする旧車特化のサービスで、北海道から沖縄まで離島を含め全国無料で出張査定を行う旨を公式サイトに記載しています（2026年10月20日確認）。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "相続した車を売る手続きと注意点", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">INHERITED CAR</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          相続した車を売る手続きと注意点｜名義変更（移転登録）から売却までの流れ
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          家族が亡くなって車を相続したとき、「このまま売れるのか」「名義はどうするのか」と迷われる方は少なくありません。相続した車は原則として、相続による名義変更（移転登録）を済ませてから売却する流れになります。このページでは、一般的な手続きの順序、必要になりやすい書類、車の状態別の売却先の考え方を整理します。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">相続した車を売却する前に確認する4つの点</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">相続した車を売るまでの5ステップ</h2>
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
            ※ ここに挙げたのは車の相続・売却に関する一般的な知識です。個別の手続き要件は管轄の運輸支局・軽自動車検査協会や専門家にご確認ください。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">相続車両の売却で気をつけたいこと</h2>
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
          <h2 className="section-title mb-2">相続した車の売却先の選び方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            相続車両は実家に置かれたままの車や、ご自身では動かせない車が多いため、出張査定や引き取りに対応する業者を選ぶのが現実的です。以下は当サイト掲載社のうち関連するサービスの公式確認済み条件です（確認日: {SITUATION_CHECKED_LABEL}）。
          </p>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">出張査定に対応する掲載社</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                <Link href="/gyosha/gaisha-master/" className="text-vermilion underline underline-offset-4">外車マスター</Link>は輸入車専門で査定無料（自宅・勤務先など希望の場所への出張査定、店舗への持ち込みも可）、<Link href="/gyosha/gaisha-oh/" className="text-vermilion underline underline-offset-4">外車王</Link>は日本全国で無料査定・出張査定も無料、<Link href="/gyosha/qsha-oh/" className="text-vermilion underline underline-offset-4">旧車王</Link>は北海道から沖縄まで離島も含め無料で出張査定と、それぞれ公式サイトに記載しています（{SITUATION_CHECKED_LABEL}確認）。実家の車庫に置かれたままの車でも、現地での出張査定を前提に相談できます。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">査定額がつかない古い車は廃車買取へ</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                長年放置された車や不動車は、一般の買取査定では値がつかないことがあります。その場合も、パーツ・資源としての価値を前提に買い取る廃車買取という仕組みがあります。掲載しているハイシャルは、査定料・レッカー代などの引き取り費用・廃車手続き代行費用をすべて0円とし、全国どこでもレッカー代などの引き取り費用無料（一部の島しょ部を除く）と公式サイトに記載しています（{SITUATION_CHECKED_LABEL}確認）。詳しくは<Link href="/haisha/" className="text-vermilion underline underline-offset-4">廃車・事故車・不動車の買取</Link>をご覧ください。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">古い車は「旧車」として評価される可能性を確認する</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                故人が大切に乗っていた古い車が、絶版車・希少車として旧車専門の市場で評価されるケースもあります。処分を決める前に、<Link href="/kyusha/" className="text-vermilion underline underline-offset-4">旧車・クラシックカーの買取</Link>のページで専門業者に査定を依頼する選択肢もご確認ください。
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載27社の比較表を見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断（4問）で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">相続した車の売却でよくある質問</h2>
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
              <Link href="/situation/loan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">ローンが残っている車を売る方法</span>
                <span className="mt-1 block text-xs text-steel-500">所有者欄がローン会社名義だった場合の手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shorui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車売却の必要書類</span>
                <span className="mt-1 block text-xs text-steel-500">普通車と軽自動車の違い・再発行窓口</span>
              </Link>
            </li>
            <li>
              <Link href="/haisha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">廃車・事故車・不動車の買取</span>
                <span className="mt-1 block text-xs text-steel-500">値がつかない車の売り方と手続きの一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/kyusha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">旧車・クラシックカーの買取</span>
                <span className="mt-1 block text-xs text-steel-500">古い車が専門市場で評価される可能性</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取27社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">掲載全社を同じ基準で比較</span>
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
