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
