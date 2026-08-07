"use client";

import { useState } from "react";
import Link from "next/link";

type Q1 = "yunyu" | "truck" | "futsu" | "kyusha";
type Q2 = "ugoku" | "fudo" | "shakengire";
type Q3 = "takaku" | "hayaku" | "denwanashi";
type Q4 = "sugu" | "sankagetsu" | "mitei";

interface ResultCompany {
  name: string;
  slug: string;
}

interface Result {
  rule: string;
  title: string;
  reason: string;
  hub: { path: string; label: string } | null;
  companies: ResultCompany[];
}

const q1Options: { value: Q1; label: string }[] = [
  { value: "yunyu", label: "輸入車（外車）" },
  { value: "truck", label: "トラック・重機" },
  { value: "futsu", label: "普通の乗用車" },
  { value: "kyusha", label: "10年以上前の旧車" },
];
const q2Options: { value: Q2; label: string }[] = [
  { value: "ugoku", label: "問題なく動く" },
  { value: "fudo", label: "不動・事故歴あり" },
  { value: "shakengire", label: "車検切れ" },
];
const q3Options: { value: Q3; label: string }[] = [
  { value: "takaku", label: "できるだけ高く売りたい" },
  { value: "hayaku", label: "とにかく早く手放したい" },
  { value: "denwanashi", label: "営業電話を避けたい" },
];
const q4Options: { value: Q4; label: string }[] = [
  { value: "sugu", label: "1ヶ月以内" },
  { value: "sankagetsu", label: "3ヶ月以内" },
  { value: "mitei", label: "未定・情報収集中" },
];

/** 判定ロジック（全開示・このままの順で評価） */
function judge(q1: Q1, q2: Q2, q3: Q3): Result {
  if (q1 === "yunyu") {
    return {
      rule: "ルール1",
      title: "輸入車専門の買取サービスに相談",
      reason:
        "車の種類が「輸入車」のため、輸入車専門カテゴリを提示します。掲載2社はいずれも公式サイトに不動車・事故車への対応の記載があります。",
      hub: { path: "/gaisha/", label: "外車・輸入車の買取ハブ" },
      companies: [
        { name: "外車マスター", slug: "gaisha-master" },
        { name: "外車王", slug: "gaisha-oh" },
      ],
    };
  }
  if (q1 === "truck") {
    return {
      rule: "ルール2",
      title: "商用車・重機専門の買取サービスに相談",
      reason:
        "車の種類が「トラック・重機」のため、商用車専門カテゴリを提示します。掲載2社はいずれも公式サイトでトラック・建設機械を取扱対象と記載しています。",
      hub: { path: "/truck/", label: "トラック・重機の買取ハブ" },
      companies: [
        { name: "トラック王国", slug: "truck-oukoku" },
        { name: "Bee Truck", slug: "bee-truck" },
      ],
    };
  }
  if (q1 === "kyusha") {
    return {
      rule: "ルール3",
      title: "旧車専門の買取サービスに相談",
      reason:
        "車の種類が「10年以上前の旧車」のため、旧車専門カテゴリを提示します。旧車王は10年以上古い車をメイン対象とする旧車特化サービスと公式サイトに記載しています。",
      hub: { path: "/kyusha/", label: "旧車・クラシックカーの買取ハブ" },
      companies: [{ name: "旧車王", slug: "qsha-oh" }],
    };
  }
  // q1 === "futsu"
  if (q2 === "fudo" || q2 === "shakengire") {
    return {
      rule: "ルール4",
      title: "廃車・事故車買取サービスに相談",
      reason:
        "普通の乗用車で状態が「不動・事故」または「車検切れ」のため、廃車・事故車カテゴリを提示します。ハイシャルは事故車・不動車・車検切れの車も対応と公式サイトに記載しています。",
      hub: { path: "/haisha/", label: "廃車・事故車・不動車の買取ハブ" },
      companies: [{ name: "ハイシャル", slug: "haishar" }],
    };
  }
  if (q3 === "denwanashi") {
    return {
      rule: "ルール5",
      title: "オークション型・チャット完結型で売る",
      reason:
        "動く乗用車で「営業電話を避けたい」を重視のため、オークション型カテゴリを提示します。セルカは「電話はセルカのみ」、ストリマは「チャット完結・いきなり電話なし」と各公式サイトに記載しています。",
      hub: { path: "/auction/", label: "オークション型で売るハブ" },
      companies: [
        { name: "セルカ", slug: "sellca" },
        { name: "ストリマ", slug: "strema" },
      ],
    };
  }
  if (q3 === "takaku") {
    return {
      rule: "ルール6",
      title: "入札で価格が決まるオークション型を検討",
      reason:
        "動く乗用車で「高く売りたい」を重視のため、複数バイヤーの入札で価格が決まるオークション型カテゴリを提示します。なお高く売れることを当サイトが保証するものではありません（セルカは「オークション形式で相場より高値になりやすい」と公式サイトに記載）。成約手数料の有無も含めて条件を確認してください。",
      hub: { path: "/auction/", label: "オークション型で売るハブ" },
      companies: [
        { name: "セルカ", slug: "sellca" },
        { name: "ストリマ", slug: "strema" },
      ],
    };
  }
  // q3 === "hayaku"
  return {
    rule: "ルール7（該当なし）",
    title: "掲載8社にぴったりの専門業者はありません",
    reason:
      "動く普通乗用車を「とにかく早く手放したい」場合に特化した業者は、当サイトの掲載8社にはありません。正直に「該当なし」と表示します。8社比較表で入金タイミング・引取条件を見比べるか、お近くの買取店への持ち込みも含めて検討してください。",
    hub: null,
    companies: [],
  };
}

function timingNote(q4: Q4 | null): string {
  if (q4 === null) return "";
  if (q4 === "sugu")
    return "売却時期が1ヶ月以内とのことなので、各社の「入金タイミング」と「引取までの流れ」を先に確認するのがおすすめです。";
  if (q4 === "mitei")
    return "売却時期が未定なら、まずは8社比較表とカテゴリハブで条件の相場観をつかむ情報収集から始めるのがおすすめです。";
  return "3ヶ月以内の売却予定なら、必要書類（車検証・自賠責・納税証明など）を先に揃えておくと手続きがスムーズです。";
}

function Fieldset<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="border border-chalk-line bg-chalk-card p-5">
      <legend className="bg-steel-800 px-3 py-1 font-display text-sm tracking-wider text-chalk">
        {legend}
      </legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors ${
              value === o.value
                ? "border-vermilion bg-vermilion-faint text-steel-900"
                : "border-chalk-line bg-chalk hover:border-steel-300"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="accent-[#c94f2f]"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ShindanClient() {
  const [q1, setQ1] = useState<Q1 | null>(null);
  const [q2, setQ2] = useState<Q2 | null>(null);
  const [q3, setQ3] = useState<Q3 | null>(null);
  const [q4, setQ4] = useState<Q4 | null>(null);

  const result = q1 && q2 && q3 && q4 ? judge(q1, q2, q3) : null;
  const done = result !== null;

  return (
    <div className="space-y-6">
      <Fieldset legend="Q1. 車の種類は？" name="q1" options={q1Options} value={q1} onChange={setQ1} />
      <Fieldset legend="Q2. 車の状態は？" name="q2" options={q2Options} value={q2} onChange={setQ2} />
      <Fieldset legend="Q3. いちばん重視することは？" name="q3" options={q3Options} value={q3} onChange={setQ3} />
      <Fieldset legend="Q4. 売却時期は？" name="q4" options={q4Options} value={q4} onChange={setQ4} />

      {!done && (
        <p className="text-sm text-steel-500">
          4問すべてに回答すると、判定結果がここに表示されます。
        </p>
      )}

      {result && (
        <section
          aria-live="polite"
          className="border-2 border-vermilion bg-chalk-card p-6"
        >
          <p className="kicker mb-2">RESULT（適用: {result.rule}）</p>
          <h2 className="font-display text-xl text-steel-900 md:text-2xl">
            {result.title}
          </h2>
          <p className="mt-4 text-sm leading-loose text-steel-700">{result.reason}</p>
          <p className="mt-3 text-sm leading-loose text-steel-700">{timingNote(q4)}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {result.hub && (
              <Link href={result.hub.path} className="btn-primary text-sm">
                {result.hub.label}を見る
              </Link>
            )}
            {result.companies.map((c) => (
              <Link
                key={c.slug}
                href={`/gyosha/${c.slug}/`}
                className="btn-ghost text-sm"
              >
                {c.name}の一次確認まとめ
              </Link>
            ))}
            <Link href="/compare/" className="btn-ghost text-sm">
              8社比較表を見る
            </Link>
          </div>
        </section>
      )}

      {/* 判定ロジック全開示 */}
      <section className="border border-chalk-line bg-chalk-warm p-6">
        <h2 className="font-display text-lg text-steel-900">
          判定ロジック（全開示）
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-steel-600">
          この診断は以下のルールを上から順に評価するだけの、シンプルなルールベースです。スコアリングや隠れた重み付けはありません。Q4（売却時期）は判定先を変えず、補足アドバイスにのみ使います。
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[13px] leading-relaxed text-steel-700">
          <li>Q1が「輸入車」→ 外車・輸入車ハブ（外車マスター・外車王）</li>
          <li>Q1が「トラック・重機」→ トラック・重機ハブ（トラック王国・Bee Truck）</li>
          <li>Q1が「10年以上前の旧車」→ 旧車ハブ（旧車王）</li>
          <li>Q1が「普通の乗用車」かつ Q2が「不動・事故」または「車検切れ」→ 廃車・事故車ハブ（ハイシャル）</li>
          <li>Q1が「普通の乗用車」かつ Q2が「動く」かつ Q3が「電話を避けたい」→ オークション型ハブ（セルカ・ストリマ）</li>
          <li>Q1が「普通の乗用車」かつ Q2が「動く」かつ Q3が「高く売りたい」→ オークション型ハブ（セルカ・ストリマ）</li>
          <li>上記のいずれにも当てはまらない場合（動く乗用車を早く手放したい）→ 「該当なし」を正直に表示し、8社比較表を案内</li>
        </ol>
      </section>
    </div>
  );
}
