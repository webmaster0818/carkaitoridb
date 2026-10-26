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
  /** キャンセルFAQの問い（公式規定が成約前の話など、既定の「契約後に〜」と合わない場合に上書き） */
  cancel_q?: string;
  features: string[];
  confirmed_date: string;
  note?: string | null;
  /** 業者別SEO上書き（未指定なら共通テンプレート） */
  seo_title?: string;
  seo_description?: string;
  h1?: string;
  /** h1直下に置く検索語への直接回答（出典・確認日を本文に含める） */
  lead_answer?: string;
  /** 表示上の最終更新日（YYYY-MM-DD） */
  updated_date?: string;
  /** 業者別の追加FAQ（公式確認済みの内容のみ。共通FAQの前に出す） */
  extra_faq?: { q: string; a: string }[];
  /** 関連ガイド（サイト内リンク・関連ページ欄の先頭に出す） */
  related_links?: { path: string; label: string; desc: string }[];
  /** 査定方法別の流れ（公式「査定の流れ」ページで確認できた社のみ） */
  flow_sections?: { title: string; source: string; steps: { step: string; body: string }[] }[];
  flow_checked?: string;
}

export const companies = raw as unknown as Company[];

export const NA = "公式では確認できず";

/** null/未確認項目は「公式では確認できず」を返す */
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
    lead: "輸入車は国産車と査定の見方が異なります。輸入車を専門に扱う買取サービスの条件を、公式サイトでの一次確認にもとづき整理しています。",
    companySlugs: ["gaisha-master", "gaisha-oh"],
  },
  {
    slug: "truck",
    path: "/truck/",
    name: "トラック・重機の買取",
    short: "トラック・重機",
    lead: "トラック・ダンプ・建設機械は、主に商用車を専門とする業者が取り扱います。専門2社のサービス条件を、公式サイトでの一次確認にもとづき整理しています。",
    companySlugs: ["truck-oukoku", "bee-truck"],
  },
  {
    slug: "haisha",
    path: "/haisha/",
    name: "廃車・事故車・不動車の買取",
    short: "廃車・事故車",
    lead: "動かない車・事故車・車検切れの車にも売却方法があります。廃車買取サービスの条件と、手続きに関する一般的な知識をまとめています。",
    companySlugs: ["haishar", "carnext", "haisyahonpo", "tau"],
  },
  {
    slug: "kyusha",
    path: "/kyusha/",
    name: "旧車・クラシックカーの買取",
    short: "旧車・クラシック",
    lead: "10年以上前の車・絶版車は、旧車を専門に扱う業者に相談する方法があります。専門サービスの条件を、公式サイトでの一次確認にもとづき整理しています。",
    companySlugs: ["qsha-oh"],
  },
  {
    slug: "auction",
    path: "/auction/",
    name: "オークション型・電話なしで売る",
    short: "オークション型",
    lead: "一括査定の営業電話を避けたい方向けに、オークション型・チャット完結型のサービス4社の公式記載を一次確認し、整理しています。",
    companySlugs: ["sellca", "strema", "rakuten-car-kaitori", "ucarpac"],
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
    `${item}については、公式サイトでは確認できませんでした（${c.confirmed_date}時点の当サイト調査）。契約前に${c.name}へ直接ご確認ください。`;
  return [
    ...(c.extra_faq ?? []),
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
      q: c.cancel_q ?? `${c.name}は契約後にキャンセルできますか？`,
      a: isNA(c.cancel)
        ? naAnswer("契約後のキャンセル規定")
        : `公式サイトの記載では「${c.cancel}」とされています（${c.confirmed_date}確認）。実際の契約条件は、必ず契約書面にてご確認ください。`,
    },
  ];
}
