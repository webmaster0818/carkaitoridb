import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, CHECKED_LABEL } from "@/lib/site";

const TITLE = "ローンが残っている車を売る方法｜所有権留保と完済・所有権解除の基礎知識";
const DESC =
  "ローン返済中の車も条件を満たせば売却できます。車検証の所有者欄がローン会社名義の場合（所有権留保）に必要な完済・所有権解除の一般知識、売却額でローンを相殺する流れ、残債が売却額を上回る場合の注意点を中立の視点で整理します。";
const PATH = "/situation/loan/";

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

export default function LoanPage() {
  const conclusions = [
    "ローンが残っていても車は売却できます。ただし車検証の所有者欄がローン会社やディーラーの名義になっている場合（所有権留保）は、ローンを完済して所有権解除の手続きを済ませることが前提になります。",
    "実務では、売却額をローンの残債に充てて完済し、所有権解除と名義変更を同時に進める流れが一般的です。多くの買取店がこの精算手続きに対応しています。",
    "残債が売却額を上回る場合は差額の支払いが必要です。差額を新たな借入で補う方法もありますが、返済負担が増えるリスクを十分に理解してから判断してください。",
    "まずは車検証の所有者欄を確認し、査定時に「ローン残債がある」ことを正直に伝えるのが、トラブルなく進める第一歩です。",
  ];

  const steps = [
    {
      t: "車検証の所有者欄を確認する",
      d: "最初に確認するのは車検証の「所有者」欄です。所有者が自分自身であれば、ローンが残っていても法律上は自分の車として売却手続きを進められます。一方、所有者欄がローン会社・信販会社・ディーラーの名義になっている場合は所有権留保と呼ばれる状態で、ローンを完済して所有権解除の手続きをしない限り、名義を買い手に移すことができません。この違いで売却の段取りが大きく変わります。",
    },
    {
      t: "ローンの残債額を正確に把握する",
      d: "次に、ローン会社に連絡して現時点の残債額（一括返済に必要な金額）を確認します。毎月の返済予定表の残額と、一括返済時の金額は異なる場合があるため、必ず「いま完済するといくらか」を確認するのがポイントです。残債額が分かれば、査定額と比べて「売却額で完済できるのか、差額が出るのか」を判断できます。",
    },
    {
      t: "査定を受け、残債があることを業者に伝える",
      d: "査定を申し込む際は、ローン返済中であること・所有者欄の名義を最初に伝えましょう。多くの買取店はローン中の車の売却手続きに慣れており、売却額から残債を精算する段取りや、所有権解除に必要な書類の案内をしてくれます。隠したまま話を進めると、契約後に手続きが止まり入金が遅れる原因になります。",
    },
    {
      t: "売却額でローンを完済し、所有権解除を進める",
      d: "売却額が残債を上回る場合は、買取店が売却額の中からローン会社へ残債を支払い、差額を売り手が受け取るのが一般的な流れです。完済が確認されるとローン会社から所有権解除に必要な書類が発行され、名義変更が可能になります。所有権解除の書類発行には日数がかかることがあるため、入金までのスケジュールは契約時に確認しておきましょう。",
    },
    {
      t: "残債が上回る場合は差額の支払い方法を決める",
      d: "売却額よりも残債が多い場合は、差額を自己資金で支払って完済するのが基本です。自己資金で足りない場合に差額分を新たなローンで組み直す方法を案内されることもありますが、これは借入を続けることを意味します。金利・返済期間・毎月の負担を確認し、売却を急ぐ必要があるのかも含めて冷静に判断してください。",
    },
  ];

  const cautions = [
    {
      t: "所有権解除が済むまで名義変更はできない",
      d: "所有権留保の車は、ローンを完済しても自動的に名義が変わるわけではなく、ローン会社が発行する書類を使った所有権解除の手続きが必要です。完済から書類発行までの日数はローン会社によって異なるため、売却スケジュールに余裕を持たせておきましょう。",
    },
    {
      t: "残債の隠匿はトラブルの元",
      d: "残債があることを伝えないまま契約すると、名義変更ができないことが後から発覚し、契約解除や入金保留につながります。残債の有無・金額は最初に開示するのが、結果的に一番早く安全に売る方法です。",
    },
    {
      t: "差額を新たな借入で補う場合のリスク",
      d: "残債が売却額を上回る状態で車を手放し、差額を新たなローンに切り替えると、車が手元にないのに返済だけが続く状態になります。金利や返済総額を確認せずに契約するのは避け、必要であれば家計全体の見直しも含めて検討してください。当サイトは特定の金融商品の利用を推奨するものではありません。",
    },
    {
      t: "契約条件（入金・キャンセル）を書面で確認",
      d: "ローン精算を伴う売却は、通常の売却よりも関係者と手続きが増えます。入金のタイミング、精算の順序、契約後にキャンセルした場合の扱いを、口頭ではなく契約書面で確認してから署名しましょう。",
    },
  ];

  const faqs = [
    {
      q: "ローンが残っている車でも売却できますか？",
      a: "できます。ただし車検証の所有者欄がローン会社などの名義（所有権留保）になっている場合は、ローンの完済と所有権解除の手続きが前提です。実務では売却額を残債の返済に充てて完済する流れが一般的で、多くの買取店がこの精算手続きに対応しています。",
    },
    {
      q: "所有権留保かどうかはどこで分かりますか？",
      a: "車検証の「所有者の氏名又は名称」欄で確認できます。ここが自分の名前ならローン中でも自分名義の車です。ローン会社・信販会社・ディーラーの名前が入っていれば所有権留保の状態で、完済と所有権解除の手続きが必要になります。",
    },
    {
      q: "売却額でローンを完済できない場合はどうなりますか？",
      a: "差額を自己資金で支払って完済するのが基本です。差額分を新たな借入で補う方法が案内されることもありますが、車を手放した後も返済が続くことになるため、金利・返済期間・毎月の負担を確認したうえで慎重に判断してください。",
    },
    {
      q: "ローンを完済済みの車なら入金は早いのでしょうか？",
      a: "所有権解除の手続きが不要な分、一般に手続きはシンプルになります。当サイト掲載の外車マスターは、ローンのない車両は引取・書類提出後最短翌日に入金と公式サイトに記載しています（2026年8月7日確認）。入金タイミングは業者・条件により異なるため、契約前に確認してください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "ローンが残っている車を売る方法", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">CAR LOAN REMAINING</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          ローンが残っている車を売る方法｜所有権留保と完済・所有権解除の基礎知識
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          「ローンが残っているから売れない」と思い込んでいる方は多いのですが、条件を整理すればローン返済中の車も売却できます。鍵になるのは、車検証の所有者欄が誰の名義になっているか（所有権留保かどうか）と、売却額と残債のどちらが大きいかの2点です。このページでは、ローン中の車を売る一般的な流れと注意点を整理します。
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

        {/* 所有権留保の解説 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">そもそも「所有権留保」とは</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              所有権留保とは、ローンで車を購入したときに、代金を払い終えるまで車の所有権をローン会社や販売店側に留めておく仕組みのことです。この状態では、車検証の「所有者の氏名又は名称」欄にローン会社・信販会社・ディーラーの名前が記載され、購入者は「使用者」として登録されます。日常の使用には支障がありませんが、車を売る・譲るといった処分は所有者の承諾なしにはできない、というのがこの仕組みの意味です。
            </p>
            <p>
              一方、銀行系のマイカーローンなどでは所有者欄が最初から購入者本人になっているケースも一般的です。この場合はローンが残っていても法律上は自分の車なので、通常の売却と同じ段取りで進められます。つまり「ローンが残っているか」よりも「車検証の所有者欄が誰か」が、売却の段取りを分ける分岐点になります。
            </p>
          </div>
        </section>

        {/* 手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">ローン中の車を売る5ステップ</h2>
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
            ※ ここに挙げたのはローン中の車の売却に関する一般的な知識です。個別のローン契約の条件は契約先のローン会社にご確認ください。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">ローン中の売却で気をつけたいこと</h2>
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
          <h2 className="section-title mb-2">ローン中の車の売り先の選び方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ローン精算を伴う売却は、残債の確認から所有権解除まで手続きが増えるぶん、条件を開示して比較する価値が高い売り方です。当サイト掲載社の公式確認済み条件（確認日: {CHECKED_LABEL}）を手がかりに検討してください。
          </p>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">入金タイミングの公式記載を確認する</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                当サイト掲載の<Link href="/gyosha/gaisha-master/" className="text-vermilion underline underline-offset-4">外車マスター</Link>は「ローンなし車両は引取・書類提出後最短翌日」に入金と公式サイトに記載しています（{CHECKED_LABEL}確認）。裏を返せば、ローンが残っている車両は所有権解除などの手続きを挟むぶん、入金までの流れが変わるということです。各社の入金・キャンセル規定は<Link href="/compare/" className="text-vermilion underline underline-offset-4">8社比較表</Link>で同じ物差しで確認できます。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">残債・名義の状況を最初に伝えて見積もる</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                どの業者を選ぶ場合でも、査定申し込みの時点で「ローン返済中」「所有者欄はローン会社名義」といった状況を伝えたうえで、精算の段取りと入金までの日数を確認しましょう。自分の状況に合う売り方のカテゴリが分からない場合は、<Link href="/shindan/" className="text-vermilion underline underline-offset-4">売り方診断（4問）</Link>から掲載カテゴリを絞り込めます。
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載8社の比較表を見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断（4問）で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">ローン中の車の売却でよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">普通車と軽自動車の違い・再発行窓口</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/souzoku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">相続した車を売る手続きと注意点</span>
                <span className="mt-1 block text-xs text-steel-500">名義変更（移転登録）から売却までの流れ</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/shakenkire/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車検切れの車を売る方法</span>
                <span className="mt-1 block text-xs text-steel-500">公道走行不可でも引き取り前提で売却できる</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取8社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">入金・キャンセル規定を同じ物差しで比較</span>
              </Link>
            </li>
            <li>
              <Link href="/gyosha/gaisha-master/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">外車マスターの一次確認まとめ</span>
                <span className="mt-1 block text-xs text-steel-500">入金タイミングなど公式確認済みの条件</span>
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
