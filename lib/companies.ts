import raw from "@/data/companies.json";

export interface Operator {
  name: string;
  address: string;
  kobutsu: string | null;
  source: string;
}

export interface Hiyou {
  satei?: string | null;
  tesuryo?: string | null;
  hikitori?: string | null;
  shorui?: string | null;
}

export interface Company {
  slug: string;
  name: string;
  official_url: string;
  affiliateUrl?: string | null;
  operator: Operator;
  service_type?: string | null;
  target?: string | null;
  area?: string | null;
  hiyou: Hiyou;
  uketsuke?: string | null;
  nyukin?: string | null;
  cancel?: string | null;
  features: string[];
  confirmed_date: string;
  note?: string | null;
}

export const companies = raw as unknown as Company[];

export const NA = "公式では確認できず";

/** null/未確認項目は正直に「公式では確認できず」を返す */
export function fmt(v: string | null | undefined): string {
  return v && v.trim() !== "" ? v : NA;
}

export function isNA(v: string | null | undefined): boolean {
  return !v || v.trim() === "";
}

export function getCompany(slug: string): Company {
  const c = companies.find((x) => x.slug === slug);
  if (!c) throw new Error(`company not found: ${slug}`);
  return c;
}

/** サービス形態（JSONのservice_typeが無い社はtarget/features由来の保守的ラベル） */
export function serviceTypeOf(c: Company): string {
  if (c.service_type) return c.service_type;
  switch (c.slug) {
    case "gaisha-master":
      return "買取直販（輸入車・外車専門）";
    case "gaisha-oh":
      return "輸入車専門買取（提携業者による入札制）";
    case "qsha-oh":
      return "旧車専門買取";
    case "haishar":
      return "廃車・事故車・不動車買取";
    default:
      return NA;
  }
}

/** 査定料・手数料のまとめ表示 */
export function feeSummary(c: Company): string {
  const parts: string[] = [];
  parts.push(`査定: ${fmt(c.hiyou.satei)}`);
  if (c.hiyou.tesuryo !== undefined) parts.push(`手数料: ${fmt(c.hiyou.tesuryo)}`);
  return parts.join(" ／ ");
}

/** 引取・書類のまとめ表示 */
export function pickupSummary(c: Company): string {
  return `引取: ${fmt(c.hiyou.hikitori)} ／ 書類: ${fmt(c.hiyou.shorui)}`;
}

/** CTAリンク: affiliateUrlがあれば優先(sponsored)・なければ公式(nofollow) */
export function ctaFor(c: Company): { href: string; rel: string } {
  if (c.affiliateUrl) {
    return { href: c.affiliateUrl, rel: "sponsored nofollow noopener" };
  }
  return { href: c.official_url, rel: "nofollow noopener" };
}

export interface Category {
  slug: string;
  path: string;
  name: string;
  short: string;
  lead: string;
  companySlugs: string[];
}

export const categories: Category[] = [
  {
    slug: "gaisha",
    path: "/gaisha/",
    name: "外車・輸入車の買取",
    short: "外車・輸入車",
    lead: "輸入車は国産車と査定の見方が異なります。輸入車を専門に扱う買取サービスの条件を一次確認で整理しました。",
    companySlugs: ["gaisha-master", "gaisha-oh"],
  },
  {
    slug: "truck",
    path: "/truck/",
    name: "トラック・重機の買取",
    short: "トラック・重機",
    lead: "トラック・ダンプ・建設機械は商用車専門業者の領域です。専門2社のサービス条件を一次確認で整理しました。",
    companySlugs: ["truck-oukoku", "bee-truck"],
  },
  {
    slug: "haisha",
    path: "/haisha/",
    name: "廃車・事故車・不動車の買取",
    short: "廃車・事故車",
    lead: "動かない車・事故車・車検切れの車にも売り方があります。廃車買取サービスの条件と手続きの一般知識をまとめました。",
    companySlugs: ["haishar"],
  },
  {
    slug: "kyusha",
    path: "/kyusha/",
    name: "旧車・クラシックカーの買取",
    short: "旧車・クラシック",
    lead: "10年以上前の車・絶版車は、旧車を専門に扱う業者に相談する選択肢があります。専門サービスの条件を一次確認で整理しました。",
    companySlugs: ["qsha-oh"],
  },
  {
    slug: "auction",
    path: "/auction/",
    name: "オークション型・電話なしで売る",
    short: "オークション型",
    lead: "一括査定の営業電話を避けたい人向けに、オークション型・チャット完結型のサービス2社の公式記載を一次確認で整理しました。",
    companySlugs: ["sellca", "strema"],
  },
];

export function getCategory(slug: string): Category {
  const c = categories.find((x) => x.slug === slug);
  if (!c) throw new Error(`category not found: ${slug}`);
  return c;
}

export function categoriesOf(company: Company): Category[] {
  return categories.filter((cat) => cat.companySlugs.includes(company.slug));
}

/** 業者詳細ページ用FAQ（データからのみ生成・創作なし） */
export function companyFaq(c: Company): { q: string; a: string }[] {
  const naAnswer = (item: string) =>
    `${item}については、公式サイトでは確認できませんでした（${c.confirmed_date}時点の当サイト調査）。契約前に${c.name}へ直接確認することをおすすめします。`;
  return [
    {
      q: `${c.name}の査定に費用はかかりますか？`,
      a: isNA(c.hiyou.satei)
        ? naAnswer("査定料")
        : `公式サイトの記載では「${c.hiyou.satei}」です（${c.confirmed_date}確認）。`,
    },
    {
      q: `${c.name}の入金はいつですか？`,
      a: isNA(c.nyukin)
        ? naAnswer("入金タイミング")
        : `公式サイトの記載では「${c.nyukin}」とされています（${c.confirmed_date}確認）。`,
    },
    {
      q: `${c.name}は契約後にキャンセルできますか？`,
      a: isNA(c.cancel)
        ? naAnswer("契約後のキャンセル規定")
        : `公式サイトの記載では「${c.cancel}」とされています（${c.confirmed_date}確認）。実際の契約条件は必ず契約書面で確認してください。`,
    },
  ];
}
