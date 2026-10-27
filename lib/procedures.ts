import raw from "@/data/company-procedures.json";

export interface FlowStep {
  step: string;
  body: string;
}
export interface Procedure {
  flowSourceUrl: string;
  docsSourceUrl: string;
  flow: FlowStep[];
  docsNormal: string[];
  docsKei: string[];
  docsKeiNote?: string;
  /** 査定後（契約〜入金・名義変更）の流れ。公式FAQ等で確認できた社のみ */
  flowAfter?: FlowStep[];
  flowAfterCheckedOn?: string;
  flowAfterSources?: { label: string; url: string }[];
  /** 査定当日の所要時間（公式記載） */
  dayOf?: string;
  /** 契約後の減額等に関する公式記載 */
  contractNote?: string;
  /** 公式サイト掲載の利用者の声（流れに関するもの） */
  voices?: { store: string; car: string; date: string; text: string }[];
  voicesSourceUrl?: string;
  extraFaqs?: { q: string; a: string }[];
  /** 流れページの公式再確認日（無ければ PROCEDURE_CHECKED_ON） */
  flowCheckedOn?: string;
  /** 流れページの title/description/h1 を検索語に合わせて個別指定する場合 */
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  /** 流れページ冒頭の即答ブロック */
  leadAnswer?: { points: { label: string; body: string }[]; sources: { label: string; url: string }[] };
  /** 流れページの追加節（簡単査定の手順・入金・キャンセル・下取りとの違い等） */
  sections?: {
    title: string;
    intro?: string;
    steps?: FlowStep[];
    rows?: { label: string; body: string }[];
    note?: string;
    sources: { label: string; url: string }[];
  }[];
  /** 必要書類の一覧を公式で再確認した日（無ければ PROCEDURE_CHECKED_ON） */
  docsCheckedOn?: string;
  /** 必要書類ページ冒頭の即答ブロック（title は変えずに本文冒頭だけ足す場合） */
  docsLead?: { checkedOn: string; points: { label: string; body: string }[]; sources: { label: string; url: string }[] };
  /** 必要書類ページの追加情報（公式の補足・ケース別の追加書類・紛失時・FAQ） */
  docsExtra?: {
    sources: { label: string; url: string }[];
    points: { label: string; body: string }[];
    cases: { label: string; body: string }[];
    lost: { label: string; body: string }[];
    faqs: { q: string; a: string }[];
  };
}

const data = raw as unknown as {
  checkedOn: string;
  items: Record<string, Procedure>;
};

/** 公式サイトで一次確認した日 */
export const PROCEDURE_CHECKED_ON = data.checkedOn;

/** 手続き情報を一次確認できた社のslug（確認できていない社はページを作らない） */
export const procedureSlugs = Object.keys(data.items);

export function getProcedure(slug: string): Procedure | undefined {
  return data.items[slug];
}
