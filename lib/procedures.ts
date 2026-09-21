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
