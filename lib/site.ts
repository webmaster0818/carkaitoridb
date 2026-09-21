export const SITE_URL = "https://sell-car.net"; // 本番ドメイン（2026-09-05確定）
export const SITE_NAME = "車買取ナビ";
export const SITE_TAGLINE = "売る前の5分で読む、中立の車買取ナビ";
export const CHECKED_DATE = "2026-08-07";
export const CHECKED_LABEL = "2026年8月7日";
/** 掲載社全体の確認期間（各社の確認日は data/companies.json の confirmed_date） */
export const CHECKED_RANGE_LABEL = "2026年8月7日〜9月21日";

/** "2026-09-21" → "2026年9月" */
export function jaMonth(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return `${y}年${m}月`;
}

/** "2026-09-21" → "2026年9月21日" */
export function jaDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export const OPERATOR = {
  name: "株式会社MediaX",
  address: "東京都渋谷区東一丁目27番10号",
} as const;
