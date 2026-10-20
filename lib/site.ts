export const SITE_URL = "https://sell-car.net"; // 本番ドメイン（2026-09-05確定）
export const SITE_NAME = "車買取ナビ";
export const SITE_TAGLINE = "公式情報にもとづく中立の車買取比較";
export const CHECKED_DATE = "2026-08-07";
export const CHECKED_LABEL = "2026年8月7日";
/** /guide/shorui/・/guide/keijidousha-shorui/・/guide/trouble/ の掲載社記述（書類代行・減額・キャンセル規定）を公式で再確認した日 */
export const GUIDE_TERMS_CHECKED_LABEL = "2026年10月19日";
/** /guide/genka-point/・/situation/loan/・/situation/shakenkire/・/situation/souzoku/ の掲載社・制度の記述を公式で再確認した日（共通の CHECKED_LABEL から分離） */
export const SITUATION_CHECKED_LABEL = "2026年10月20日";
import raw from "@/data/companies.json";

/** 確認日（ISO）の一覧 → "2026年8月7日〜10月18日"（同年は終端の年を省略・1日だけなら単日） */
export function checkedRangeLabel(isos: string[]): string {
  const ds = [...isos].sort();
  const from = ds[0], to = ds[ds.length - 1];
  const f = jaDate(from);
  if (from === to) return f;
  const [fy] = from.split("-");
  const [ty, tm, td] = to.split("-").map(Number);
  return `${f}〜${String(ty) === fy ? "" : `${ty}年`}${tm}月${td}日`;
}

/** 掲載社全体の確認期間（data/companies.json の confirmed_date から算出） */
export const CHECKED_RANGE_LABEL = checkedRangeLabel(
  (raw as { confirmed_date: string }[]).map((c) => c.confirmed_date),
);

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
