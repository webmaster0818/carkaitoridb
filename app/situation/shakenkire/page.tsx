import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, SITUATION_CHECKED_LABEL } from "@/lib/site";

const TITLE = "車検切れの車を売る方法｜公道を走行できない車の売却手順と注意点";
const DESC =
  "車検が切れた車も売却できます。ただし公道を自走できないため、レッカー車・積載車による引き取りが前提となります。仮ナンバー（市区町村で取得）に関する一般的な知識、車検を取り直してから売却するかの判断材料、引取無料の業者を選ぶ際の確認事項を、中立の立場で整理しています。";
const PATH = "/situation/shakenkire/";

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
  dateModified: "2026-09-12",
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function ShakenkirePage() {
  const conclusions = [
    "車検が切れていても車は売却できます。車検の有無は、売却の可否ではなく、車の運び方に関わる問題です。",
    "車検切れの車で公道を走行することは、原則としてできません。売却は、レッカー車・積載車による引き取りを前提に準備するのが基本です。",
    "引き取り費用の有無によって手取り額が変わります。当サイト掲載のハイシャルは全国どこでもレッカー代などの引き取り費用無料（一部の島しょ部を除く）と公式サイトに記載しています（2026年10月20日確認）。",
    "売却のためだけに車検を取り直す必要は、通常ありません。車検費用をかけても、その分が査定額に反映されるとは限らないためです。",
  ];

  const steps = [
    {
      t: "車検証で満了日と車の状態を確認する",
      d: "まず車検証（自動車検査証）で車検の有効期間の満了日を確認し（2023年1月以降に交付された電子車検証では満了日が券面に記載されていないため、国土交通省の「車検証閲覧アプリ」または「自動車検査証記録事項」で確認します）、あわせてエンジンがかかるか、自走できる状態かを把握します。車検切れの車は法律上公道を走行できないだけで、車としての価値がなくなったわけではありません。エンジンの始動可否、外装や機関の状態といった情報は、査定申し込み時に正確に伝える材料になります。",
    },
    {
      t: "引き取りを前提に売却先を探す",
      d: "車検切れの車を売却する場合、ご自身で店舗に持ち込むことはできません。そのため、出張査定とレッカー車・積載車による引き取りに対応している業者を選ぶ必要があります。引き取りの対応エリアと費用負担（無料か有料か）は業者によって異なるため、査定額だけでなく引き取り条件まで含めて比較することが重要です。",
    },
    {
      t: "査定時に「車検切れ」を正確に伝える",
      d: "査定を申し込む際は、車検が切れていること、切れてからどのくらい経っているか、保管場所（自宅の車庫・月極駐車場など）をお伝えください。この情報は引き取りの段取りと費用に直結します。事前に伝えていない場合、当日の引き取り方法の変更や条件の再調整が必要になることがあります。",
    },
    {
      t: "引き取り日と必要書類を確認して契約する",
      d: "条件に納得したうえで、引き取り日時と必要書類を確認して契約します。車検切れの車は長期間動かしていない場合が多く、書類の紛失や自賠責保険の期限切れも多く見られます。書類が不足している場合の再発行の手順や、業者側で代行できる範囲は、契約前にご確認ください。",
    },
    {
      t: "引き渡しと名義変更・抹消手続きを完了させる",
      d: "引き渡し後は、名義変更または抹消登録が完了したことを必ず確認します。手続きが完了しないままでは、自動車税（種別割）の納税通知が翌年度もご自身に届くといった不都合が生じる可能性があります。手続き完了の連絡方法・時期は、契約時にご確認ください。",
    },
  ];

  const cautions = [
    {
      t: "車検切れのまま公道を走行しない",
      d: "車検切れの車を公道で運転すると、無車検運行として法律上の処分の対象となります。自賠責保険も切れている場合は、自賠責保険に関する違反も重なります。「近所だから」「査定場所までだけ」といった理由であっても運転はお控えください。移動は必ずレッカー車・積載車、または後述の仮ナンバーの正規の手続きにより行ってください。",
    },
    {
      t: "仮ナンバーは臨時運行のための例外的な制度",
      d: "どうしても自走させる必要がある場合は、市区町村の窓口で仮ナンバー（臨時運行許可）を取得する方法があります。取得には有効な自賠責保険への加入が前提となり、運行の目的・経路・期間を限定して許可される一般的な制度です。手数料や必要書類は市区町村によって異なるため、事前に窓口へ確認してください。売却が目的であれば、業者の引き取りを利用するほうが手間は少なくなります。",
    },
    {
      t: "売却のための車検の取り直しは慎重に判断する",
      d: "車検を通してから売却したほうが有利と考える方もいますが、車検取得には検査費用や整備費用がかかる一方、その支出がそのまま査定に上乗せされるとは限らないと一般に言われています。売却が目的なら、まず車検切れのまま査定を受けて判断するのが合理的です。",
    },
    {
      t: "放置期間が長い車の書類と保険の点検",
      d: "長期間放置していた車は、自賠責保険の期限切れ、納税の状況、書類の紛失といった問題を抱えていることがあります。売却を決めた時点で、車検証・自賠責保険証明書・納税の状況をまとめて確認し、不足しているものは再発行の手続きを進めてください。",
    },
  ];

  const transport = [
    {
      t: "買取業者のレッカー車・積載車による引き取り",
      d: "最も手間が少ないのがこの方法です。車検切れの車の取り扱いに慣れた業者であれば、保管場所と車の状態を伝えることで引き取りの段取りを組んでもらえます。引き取り費用を自社負担と明記している業者もあれば、距離や地域によって別途費用がかかる業者もあります。無料かどうかに加え、無料となる地域の範囲や、離島・山間部の扱いまで確認しておくと、当日の条件変更を避けられます。",
    },
    {
      t: "レッカー業者・ロードサービスの手配",
      d: "売却先が引き取りに対応していない場合や、いったん別の場所へ移したい場合は、ご自身でレッカー業者や積載車を手配する方法もあります。この場合の費用は自己負担になるのが一般的です。任意保険に付帯するロードサービスや、会員向けの路上救援サービスを契約していれば、適用範囲に含まれるかどうかを保険会社・サービス提供元に確認する方法もあります。ただし、これらは故障時の救援を想定した仕組みであることが多く、売却目的の移動が対象になるとは限りません。",
    },
    {
      t: "仮ナンバー（臨時運行許可）による自走",
      d: "前述のとおり、市区町村の窓口で仮ナンバーを取得すれば、許可された目的・経路・期間に限って運行できる一般的な制度があります。ただし有効な自賠責保険への加入が前提で、申請と返納のために窓口へ出向く必要があります。売却が目的であれば業者の引き取りに任せるほうが手間は少なく、仮ナンバーは「どうしても自走で移動させる必要がある場合の選択肢」と位置付けるのが現実的です。",
    },
    {
      t: "引き取り費用の考え方と見積もりの確認事項",
      d: "引き取りにかかる費用は、距離・地域・車の状態・作業の難易度によって変わります。エンジンがかからない、タイヤの空気が抜けている、ブレーキが固着して転がらない、といった状態ではウインチでの引き上げ作業が必要になり、通常の積載作業より手間がかかります。立体駐車場や幅の狭い私道など、積載車を横付けできない保管場所も同様です。金額の目安は条件によって大きく変わるため、車の状態と保管場所を正確に伝えたうえで、引き取り費用を含む手取りで比較してください。",
    },
  ];

  const taxInsurance = [
    {
      t: "自動車税（種別割）は登録が残っている間は課税対象",
      d: "車検が切れていても、登録そのものが残っていれば課税対象であり続けるのが一般的な扱いです。車検切れは「公道を走れない状態」であって「登録がなくなった状態」ではないため、乗っていない車について納税通知が届くという状況が生じます。売却や抹消の手続きで登録を整理することにより、この負担を終えることができます。",
    },
    {
      t: "売却後の税の扱いは手続きの種類で変わる",
      d: "名義変更で他人に引き継がれる場合と、抹消登録で登録そのものを終わらせる場合とでは、その後の課税や還付の扱いが変わります。また普通車と軽自動車でも仕組みが異なります。還付があるかどうか、いつ処理されるかは、普通車は都道府県税事務所、軽自動車は市区町村が窓口です。制度は改正されることがあるため、具体的な扱いは各窓口に確認してください。",
    },
    {
      t: "自賠責保険は車検と期間が連動している",
      d: "自賠責保険の期間は車検の有効期間とおおむね連動しており、車検が切れている車は自賠責も切れているか、切れる間際であることが多くなります。期間が残っている場合、廃車（抹消）を伴うときなどに解約の手続きができる扱いが一般的です。対象になるかどうか、どんな書類が必要かは契約先の損害保険会社（共済を含む）に確認してください。",
    },
    {
      t: "納税や保険の状況は査定前にまとめて確認する",
      d: "納税が済んでいるか、自賠責の期間が残っているか、リサイクル料金が預託済みかは、いずれも売却の段取りに関わります。査定を申し込む前に手元の書類をまとめて確認しておくと、引き取り当日に書類の不足が判明して手続きが止まる事態を避けられます。",
    },
  ];

  const ichijiMasshou = [
    {
      t: "車検切れと一時抹消の状態の違い",
      d: "車検切れは、登録は残ったまま検査の有効期間だけが過ぎた状態です。一方、一時抹消登録はナンバープレートを返納して登録を一度終わらせた状態で、そもそも公道を走らせる前提がありません。どちらも売却できますが、必要な書類と手続きの流れが変わります。",
    },
    {
      t: "手元にある書類の違い",
      d: "一時抹消登録を済ませた普通車では、車検証の代わりに登録識別情報等通知書と呼ばれる書類が交付されているのが一般的です。軽自動車で使用中止の手続きを済ませた場合は、自動車検査証返納証明書などの書類が手元にあります。売却の申し込み時には、車検証があるのか、抹消後の書類があるのかを先にお伝えいただくと、手続きが円滑に進みます。",
    },
    {
      t: "運び方の考え方は共通",
      d: "一時抹消済みの車もナンバーがないため公道を自走できず、車検切れの車と同じくレッカー車・積載車による引き取りが前提となります。運び方の選択肢は、前の章と同様に考えられます。",
    },
    {
      t: "買い手側での再登録を前提とした評価",
      d: "一時抹消済みの車を再び公道で使うには、買い手側で中古新規登録などの手続きが必要になります。この手間を織り込んだうえで評価されるため、抹消済みであることは査定の前提として正確にお伝えください。手続きの詳細は運輸支局（軽自動車は軽自動車検査協会）で確認できます。",
    },
  ];

  const longTerm = [
    {
      t: "バッテリーの状態",
      d: "長期間動かしていない車はバッテリーが上がっていることが多くあります。エンジンがかかるかどうかは、引き取り時の作業方法（自走で積載車に載せられるか、ウインチで引き上げるか）に直結します。無理に始動を試みる必要はありませんが、エンジンの始動可否は査定時にお伝えください。",
    },
    {
      t: "タイヤとブレーキの状態",
      d: "空気が抜けている、ひび割れている、長期の駐車でブレーキが固着して転がらない、といった状態は少なくありません。転がらない車は積載作業に手間がかかるため、業者への連絡時に伝えておくと、当日の段取りが円滑になります。",
    },
    {
      t: "書類の保管場所",
      d: "車検証・自賠責保険証明書・リサイクル券が車内にあるのか、自宅で保管しているのか、そもそも見当たらないのかを早めに確認します。紛失していても再発行の窓口があるため売却は可能ですが、窓口に出向く時間が必要になるため、早めに把握するほど段取りに余裕が生まれます。窓口の一覧は必要書類のページにまとめています。",
    },
    {
      t: "保管場所への進入経路",
      d: "積載車は一般の乗用車より大きく、狭い私道・立体駐車場・段差のある敷地には入れないことがあります。保管場所の前の道路幅、周囲の駐車状況、屋内か屋外かを伝えておくと、当日に車両が進入できないという事態を避けられます。集合住宅の駐車場では、管理者への事前連絡が必要な場合もあります。",
    },
    {
      t: "車内に残っている物",
      d: "引き渡し前に、ETCカード・車庫証明のステッカー・私物・後付けした社外品などを確認します。長期間放置した車ほど積んだままの物が残っていることが多く、引き渡し後に取り出すには手間がかかります。個人情報が残る機器（カーナビの登録地点、ドライブレコーダーの記録媒体）も忘れずに確認してください。",
    },
  ];

  const shakenJudge = [
    {
      t: "判断材料1：車検の費用が査定に反映されるとは限らない",
      d: "車検を取得するには検査と整備にかかる費用が必要ですが、その支出がそのまま査定額に上乗せされるとは限らないと一般に言われています。車検の残り期間を評価する仕組みは業者や車種によって異なるため、車検を通せば必ず高く売却できるとは限りません。",
    },
    {
      t: "判断材料2：整備が必要な状態かどうか",
      d: "長く放置していた車は、車検を通すために交換・修理が必要な箇所が見つかることがあります。この場合は検査そのものの費用に加えて整備費用も発生します。売却が目的であれば、費用をかけて通すより、そのままの状態で査定を受けたほうが結果的に負担が少ないケースが多くなります。",
    },
    {
      t: "判断材料3：乗り続ける予定があるかどうか",
      d: "判断が分かれるのは、今後も乗る可能性がある場合です。乗り続ける予定がある場合は車検を通す意味がありますが、売却を決めている場合、車検の取得は売却のためというより、ご自身で乗るための支出となります。まず乗り続けるか売却するかを決め、そのうえで車検の要否を検討すると整理しやすくなります。",
    },
    {
      t: "判断材料4：車検を通しても引き取りの論点は残る",
      d: "車検を通せば自走して持ち込めるようになりますが、解消されるのは運び方の問題のみで、査定額そのものが大きく変わるとは限りません。引き取り無料の業者を選べば運び方の問題は費用をかけずに解決できるため、この点だけを理由に車検を取る必要性は高くありません。",
    },
    {
      t: "判断材料5：まず査定を受けてから決める",
      d: "最も確実なのは、車検切れのまま複数社の査定を受け、提示された条件を見てから判断することです。車検を取得すると支出が先に確定しますが、査定を受けるだけであれば、費用をかけずに判断材料を増やせます。掲載社の条件は、比較表で同じ基準により比較できます。",
    },
  ];

  const keiDiff = [
    {
      t: "手続きの窓口は軽自動車検査協会",
      d: "軽自動車の各種手続きは、運輸支局ではなく軽自動車検査協会の事務所・支所が窓口になるのが一般的です。車検証の再交付もここで扱われます。普通車と同じ考えで運輸支局に出向くと二度手間になるため、軽自動車であることを最初にご確認ください。",
    },
    {
      t: "廃車にあたる手続きの名称の違い",
      d: "普通車の一時抹消登録・永久抹消登録にあたる手続きは、軽自動車では自動車検査証返納届（一時使用中止）や解体返納と呼ばれるのが一般的です。書類の名称も様式も異なるため、調べるときは「軽自動車の場合」と条件を付けて確認してください。",
    },
    {
      t: "税の窓口は市区町村",
      d: "軽自動車税（種別割）は市区町村が課税するため、納税や証明書に関する窓口も市区町村です。普通車の自動車税（種別割）は都道府県税事務所が窓口で、還付の仕組みも普通車と軽自動車で異なります。詳しい扱いはお住まいの市区町村に確認してください。",
    },
    {
      t: "必要書類は普通車より少ないのが一般的",
      d: "軽自動車検査協会の案内では、軽自動車の名義変更に実印や印鑑登録証明書の提出は求められておらず、新しい使用者の住所を証する書面として住民票の写しまたは印鑑（登録）証明書のいずれか1点を用意する扱いです（2026年10月20日確認）。軽自動車に絞った必要書類の一覧と、紛失時の再発行窓口は専用ページにまとめています。",
    },
    {
      t: "運び方の考え方は普通車と同じ",
      d: "軽自動車でも、車検が切れていれば公道を自走させることはできません。レッカー車・積載車による引き取りが前提になる点、仮ナンバーの手続き窓口が市区町村である点は普通車と共通です。",
    },
  ];

  const faqs = [
    {
      q: "車検が切れた車でも本当に売れますか？",
      a: "売却できます。車検切れは公道を自走できないという制約であり、車の価値そのものがなくなるわけではありません。当サイト掲載のハイシャルは、年式の古い車・事故車・動かない車・車検切れの車も買取の対象とし、全国どこでもレッカー代などの引き取り費用無料（一部の島しょ部を除く）と公式サイトに記載しています（2026年10月20日確認）。",
    },
    {
      q: "車検切れの車はどうやって業者に渡すのですか？",
      a: "レッカー車や積載車による引き取りが基本です。自分で運転して持ち込むことは原則できないため、出張査定と引き取りに対応した業者を選び、保管場所と車の状態を伝えて引き取り日を調整します。引き取り費用の有無は業者によって異なるため、契約前にご確認ください。",
    },
    {
      q: "仮ナンバーを取れば自分で運転できますか？",
      a: "市区町村で仮ナンバー（臨時運行許可）を取得し、有効な自賠責保険に加入していれば、許可された目的・経路・期間に限って運行できる一般的な制度があります。ただし手続きの手間がかかるため、売却が目的なら業者の引き取りを利用するほうが現実的な場合が多くあります。詳細はお住まいの市区町村の窓口にご確認ください。",
    },
    {
      q: "車検を通してから売ったほうがよいですか？",
      a: "通常はそのまま売却して問題ありません。車検取得の費用がそのまま査定額に反映されるとは限らないと一般に言われており、売却目的での車検取得は費用倒れになる可能性があります。迷う場合は、車検切れのまま査定を受けてから判断することをおすすめします。",
    },
    {
      q: "車検が切れている間も自動車税はかかりますか？",
      a: "登録が残っている限り課税対象であり続けるのが一般的な扱いです。車検切れは公道を走れない状態であって、登録がなくなった状態ではないためです。売却や抹消の手続きで登録を整理すると扱いが変わります。還付の有無や時期を含む具体的な取り扱いは、普通車は都道府県税事務所、軽自動車は市区町村の窓口に確認してください。",
    },
    {
      q: "一時抹消登録を済ませた車も同じように売れますか？",
      a: "売却できます。ただし手元にある書類が車検証ではなく、普通車では登録識別情報等通知書、軽自動車では自動車検査証返納証明書などに変わっているのが一般的です。ナンバーがないため公道は自走できず、引き取りが前提になる点は車検切れと同じです。申し込み時に抹消済みであることを先にお伝えいただくと、その後の段取りが円滑になります。",
    },
    {
      q: "軽自動車の車検切れでも手順は同じですか？",
      a: "運び方の考え方は同じで、レッカー車・積載車での引き取りが前提になります。異なるのは手続きの窓口と書類の名称です。軽自動車の窓口は運輸支局ではなく軽自動車検査協会で、税に関する窓口は市区町村になります。廃車にあたる手続きも自動車検査証返納届・解体返納と呼び方が変わります。軽自動車の必要書類は専用のガイドページにまとめています。",
    },
    {
      q: "長期間放置していた車を売る前に何を確認すればよいですか？",
      a: "エンジンがかかるか、タイヤが空気圧を保っているか、ブレーキが固着して転がらない状態でないかを確認しておくと、引き取り時の作業方法が決めやすくなります。あわせて車検証・自賠責保険証明書・リサイクル券の所在と、積載車が入れる進入経路かどうかも確認してください。無理に始動させる必要はなく、わかる範囲で状態を正確にお伝えいただければ問題ありません。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "車検切れの車を売る方法", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">EXPIRED INSPECTION</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          車検切れの車を売る方法｜公道を走行できない車の売却手順と注意点
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          車検が切れた車も売却は可能です。問題となるのは車の価値の有無ではなく、公道を走行できない車をどのように運ぶかという点です。本ページでは、車検切れの車を売却する一般的な手順、仮ナンバーの基礎知識、引き取り条件の確認事項を整理しています。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">車検切れの車を売却する際の4つの確認事項</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 放置リスクの解説 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">車検切れのまま放置しないほうがよい理由</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              車検が切れた車を「そのうち考えよう」と置いたままにすると、負担が年々増えていきます。登録が残っている限り自動車税（種別割）の課税対象であり続けるのが一般的な扱いで、乗っていない車の税負担が毎年発生します。また、屋外で放置された車は劣化が進み、動かせる状態を保つことが難しくなります。
            </p>
            <p>
              売る・廃車にする・車検を取って乗り続ける、のいずれを選ぶ場合でも、判断を先送りしないことが負担の軽減につながります。売却や廃車で登録を整理すれば、税や保険の負担も含めて区切りをつけられます。本ページでは、売却を選ぶ場合の段取りを順にご説明します。
            </p>
          </div>
        </section>

        {/* 手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">車検切れの車を売る5ステップ</h2>
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
            ※ 本項の内容は、車検切れの車の売却に関する一般的な知識です。仮ナンバーなどの行政手続きの詳細は各窓口にご確認ください。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">車検切れの車の注意点</h2>
          <div className="space-y-4">
            {cautions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 運び方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">車検切れの車を運ぶ手段と費用の考え方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            車検切れの車の売却で最も実務的な論点は、車の運び方です。選択できる手段は複数あり、手段によって手間と自己負担が変わります。ここでは手段ごとの位置付けと、費用の見積もりにあたって確認すべき条件を整理します。
          </p>
          <div className="space-y-4">
            {transport.map((t) => (
              <div key={t.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{t.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{t.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 引き取り費用の金額は距離・地域・車の状態によって大きく変わります。具体的な金額は各業者の見積もりで確認してください。
          </p>
        </section>

        {/* 税金・保険 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">車検切れの車の自動車税・自賠責保険の扱い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            車検が切れていても、税と保険に関する負担は自動的にはなくなりません。売却の判断をする前に、現在かかっている負担と、売却後にどう変わるのかをご確認ください。
          </p>
          <div className="space-y-4">
            {taxInsurance.map((t) => (
              <div key={t.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{t.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{t.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 税額・還付額などの金額は、自治体・年式・排気量・手続きの時期により異なります。最新の金額と取り扱いは各窓口の公式情報で確認してください。税金の全体像は
            <Link href="/guide/zeikin/" className="text-vermilion underline underline-offset-4">車売却と税金の基礎知識</Link>
            にまとめています。
          </p>
        </section>

        {/* 一時抹消との違い */}
        <section className="mt-14">
          <h2 className="section-title mb-2">一時抹消登録を済ませた車を売る場合との違い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            「車検切れ」と「一時抹消登録済み」は混同されやすいものの、車の状態としては異なります。どちらも売却できますが、手元にある書類と手続きの流れが変わります。
          </p>
          <div className="space-y-4">
            {ichijiMasshou.map((m) => (
              <div key={m.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{m.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{m.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 長期放置車 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">長期間放置していた車で追加して確認する事項</h2>
          <div className="space-y-5">
            {longTerm.map((l, i) => (
              <div key={l.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {l.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{l.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 書類を紛失していても再発行の窓口があります。詳しくは
            <Link href="/guide/shorui/" className="text-vermilion underline underline-offset-4">車売却の必要書類</Link>
            をご覧ください。
          </p>
        </section>

        {/* 車検を通すかの判断 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">車検を通してから売却するかの判断材料</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            売却を決めている場合は、車検を取り直さずに査定を受けるのが基本です。ただし、状況によって判断は変わります。判断に迷う場合の材料を以下に記載します。
          </p>
          <div className="space-y-4">
            {shakenJudge.map((j) => (
              <div key={j.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{j.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{j.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 車検の費用も査定額も、車種・年式・状態・依頼先によって変わります。金額の比較は実際の見積もりと査定額で行ってください。
          </p>
        </section>

        {/* 軽自動車 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">軽自動車の車検切れで異なる点</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            軽自動車も車検が切れれば公道を走れない点は同じですが、手続きの制度が別立てのため、窓口と書類の名称が普通車と異なります。調べるときは「軽自動車の場合」と条件を付けて確認するのが確実です。
          </p>
          <div className="space-y-4">
            {keiDiff.map((k) => (
              <div key={k.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{k.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{k.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 制度や様式は変わることがあります。最新の必要書類は軽自動車検査協会や買取業者に確認してください。軽自動車の書類は
            <Link href="/guide/keijidousha-shorui/" className="text-vermilion underline underline-offset-4">軽自動車の売却に必要な書類</Link>
            にまとめています。
          </p>
        </section>

        {/* 業者選び */}
        <section className="mt-14">
          <h2 className="section-title mb-2">車検切れの車の売却先の選び方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            車検切れの車は引き取りが必須となるため、引き取り費用が無料の業者を選べるかどうかが手取り額に直結します。以下は、当サイト掲載社について公式サイトで確認した条件です（確認日: {SITUATION_CHECKED_LABEL}）。
          </p>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">引取無料のハイシャル（廃車買取）</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                掲載している<Link href="/gyosha/haishar/" className="text-vermilion underline underline-offset-4">ハイシャル</Link>は、不動車・事故車を含めて引き取り・手続き代行の費用はかからないとし、全国どこでもレッカー代などの引き取り費用無料（一部の島しょ部を除く）、午前中に連絡すれば当日の引き取りができる場合もあると公式サイトに記載しています（{SITUATION_CHECKED_LABEL}確認）。一方、成約後に取引自体をキャンセルする場合はキャンセル料金30,000円がかかるとの記載もあるため（同日確認）、契約前に必ず条件をご確認ください。廃車買取の全体像は<Link href="/haisha/" className="text-vermilion underline underline-offset-4">廃車・事故車・不動車の買取</Link>にまとめています。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">値が付く可能性のある車は出張査定で比較する</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                車検が切れていても年式が新しい車や輸入車・旧車は、専門業者の出張査定で評価される可能性があります。掲載社では旧車王が北海道から沖縄まで離島も含めて無料で出張査定し、提示した買取金額に車輌の引き上げ料金も含まれ追加費用はかからないと公式サイトに記載しています（{SITUATION_CHECKED_LABEL}確認）。カテゴリ別の考え方は<Link href="/kyusha/" className="text-vermilion underline underline-offset-4">旧車・クラシックカー</Link>や<Link href="/gaisha/" className="text-vermilion underline underline-offset-4">外車・輸入車</Link>のページをご覧ください。
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/haisha/" className="btn-primary">廃車・事故車買取のページを見る</Link>
            <Link href="/compare/" className="btn-ghost">掲載27社の比較表を見る</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">車検切れの車の売却でよくある質問</h2>
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
              <Link href="/haisha/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">廃車・事故車・不動車の買取</span>
                <span className="mt-1 block text-xs text-steel-500">処分前に確認したい判断のポイント</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shorui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車売却の必要書類</span>
                <span className="mt-1 block text-xs text-steel-500">紛失時の再発行窓口もあわせて解説</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/keijidousha-shorui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">軽自動車の売却に必要な書類</span>
                <span className="mt-1 block text-xs text-steel-500">認印で足りる理由と窓口の違い</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/souzoku/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">相続した車を売る手続きと注意点</span>
                <span className="mt-1 block text-xs text-steel-500">実家に残された車の売却方法</span>
              </Link>
            </li>
            <li>
              <Link href="/gyosha/haishar/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">ハイシャルの一次確認まとめ</span>
                <span className="mt-1 block text-xs text-steel-500">引取・書類代行・キャンセル規定の詳細</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車買取27社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">引取条件を同じ基準で比較</span>
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
