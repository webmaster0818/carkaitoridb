import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, CHECKED_LABEL } from "@/lib/site";

const TITLE = "車検切れの車を売る方法｜公道を走れなくても売却できる手順と注意点";
const DESC =
  "車検が切れた車も売却できます。ただし公道を自走できないため、レッカー・積載車での引き取りが前提です。仮ナンバー（市区町村で取得）の一般知識、車検を通してから売るべきかの考え方、引取無料の業者の確認ポイントを中立の視点で整理します。";
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
    "車検が切れていても車は売却できます。車検の有無は「売れるかどうか」ではなく「どう運ぶか」の問題です。",
    "車検切れの車で公道を走ることは原則できません。売却はレッカー車・積載車による引き取りを前提に段取りするのが基本です。",
    "引き取り費用が有料か無料かで手取りが変わります。当サイト掲載のハイシャルはレッカー引取無料（全国47都道府県・一部島しょ部除く）と公式サイトに記載しています（2026年8月7日確認）。",
    "売却のためだけに車検を取り直す必要は通常ありません。車検費用をかけても、その分が査定に反映されるとは限らないためです。",
  ];

  const steps = [
    {
      t: "車検証で満了日と車の状態を確認する",
      d: "まず車検証（自動車検査証）で車検の満了日を確認し、あわせてエンジンがかかるか、自走できる状態かを把握します。車検切れの車は法律上公道を走れないだけで、車としての価値がなくなったわけではありません。動く・動かない、外装や機関の状態といった情報は、査定申し込み時に正確に伝える材料になります。",
    },
    {
      t: "「引き取りに来てもらう」前提で売り先を探す",
      d: "車検切れの車を売る場合の大前提は、自分で店舗に持ち込めないことです。そのため、出張査定とレッカー車・積載車での引き取りに対応している業者を選ぶことになります。引き取りの対応エリアと費用負担（無料か有料か）は業者によって異なるため、査定額だけでなく引き取り条件まで含めて比較するのが実務のポイントです。",
    },
    {
      t: "査定時に「車検切れ」を正確に伝える",
      d: "査定を申し込む際は、車検が切れていること、切れてからどのくらい経っているか、保管場所（自宅の車庫・月極駐車場など）を伝えましょう。この情報が引き取りの段取りと費用に直結します。伝え忘れると、当日の引き取り方法が変わったり、条件の再調整が必要になったりすることがあります。",
    },
    {
      t: "引き取り日と必要書類を確認して契約する",
      d: "条件に納得したら、引き取り日時と必要書類を確認して契約します。車検切れの車は長期間動かしていないケースが多く、書類の紛失や自賠責保険の期限切れも起こりがちです。書類が欠けている場合の再発行の段取りや、業者側でどこまで代行してもらえるかを契約前に確認しておくと安心です。",
    },
    {
      t: "引き渡しと名義変更・抹消手続きを完了させる",
      d: "引き渡し後は、名義変更または抹消登録が完了したことを必ず確認します。手続きが宙に浮いたままだと、自動車税（種別割）の納税通知が翌年度も自分に届くといった不都合が起こり得ます。手続き完了の連絡方法・時期を契約時に確認しておきましょう。",
    },
  ];

  const cautions = [
    {
      t: "車検切れのまま公道を走らせない",
      d: "車検切れの車を公道で運転すると、無車検運行として法律上の処分の対象になります。自賠責保険も切れていれば、その分の違反も重なります。「近所だから」「査定場所までだけ」といった理由でも運転してはいけません。移動は必ずレッカー・積載車か、後述の仮ナンバーの正規手続きによってください。",
    },
    {
      t: "仮ナンバーは「臨時運行のための例外」",
      d: "どうしても自走させる必要がある場合は、市区町村の窓口で仮ナンバー（臨時運行許可）を取得する方法があります。取得には有効な自賠責保険への加入が前提で、運行の目的・経路・期間を限定して許可される一般的な制度です。手数料や必要書類は市区町村によって異なるため、事前に窓口へ確認してください。売却目的であれば、業者の引き取りに任せるほうが手間は少なくなります。",
    },
    {
      t: "売却のために車検を取り直すのは慎重に",
      d: "「車検を通してから売ったほうが有利では」と考えがちですが、車検取得には検査費用や整備費用がかかる一方、その支出がそのまま査定に上乗せされるとは限らないと一般に言われています。売却が目的なら、まず車検切れのまま査定を受けて判断するのが合理的です。",
    },
    {
      t: "放置期間が長い車は書類と保険も点検",
      d: "長く放置していた車は、自賠責保険の期限切れ、納税の状況、書類の紛失といった付随の問題を抱えていることがあります。売却を決めたタイミングで、車検証・自賠責保険証明書・納税の状況をまとめて確認し、足りないものは再発行の段取りを進めましょう。",
    },
  ];

  const transport = [
    {
      t: "買取業者のレッカー車・積載車に引き取ってもらう",
      d: "もっとも手間が少ないのがこの方法です。車検切れの車を扱い慣れている業者であれば、保管場所と車の状態を伝えるだけで引き取りの段取りを組んでもらえます。引き取り費用を自社で負担すると明記している業者もあれば、距離や地域によって別途かかる業者もあります。無料かどうかだけでなく、「どの地域まで無料か」「離島や山間部はどう扱われるか」まで確認しておくと、当日の条件変更を避けられます。",
    },
    {
      t: "レッカー業者・ロードサービスに自分で手配する",
      d: "売却先が引き取りに対応していない場合や、いったん別の場所へ移したい場合は、自分でレッカー業者や積載車を手配する方法もあります。この場合の費用は自己負担になるのが一般的です。任意保険に付帯するロードサービスや、会員向けの路上救援サービスを契約していれば、その適用範囲に入るかどうかを保険会社・サービス提供元に確認してみる価値があります。ただし、これらは故障時の救援を想定した仕組みであることが多く、売却目的の移動が対象になるとは限りません。",
    },
    {
      t: "仮ナンバー（臨時運行許可）で自走させる",
      d: "前述のとおり、市区町村の窓口で仮ナンバーを取得すれば、許可された目的・経路・期間に限って運行できる一般的な制度があります。ただし有効な自賠責保険への加入が前提で、申請と返納のために窓口へ出向く必要があります。売却が目的であれば業者の引き取りに任せるほうが手間は少なく、仮ナンバーは「どうしても自走で移動させる必要がある場合の選択肢」と位置づけるのが現実的です。",
    },
    {
      t: "費用の考え方（見積もりを取るときの視点）",
      d: "引き取りにかかる費用は、距離・地域・車の状態・作業の難易度によって変わります。エンジンがかからない、タイヤが空気圧を失っている、ブレーキが固着して転がらない、といった状態だとウインチでの引き上げ作業が必要になり、通常の積載作業より手間がかかります。立体駐車場や幅の狭い私道など、積載車を横づけできない保管場所も同様です。金額の目安は条件によって大きく変わるため、車の状態と保管場所を正確に伝えたうえで、引き取り費用を含む手取りで比較してください。",
    },
  ];

  const taxInsurance = [
    {
      t: "自動車税（種別割）は登録が残っている間は課税対象",
      d: "車検が切れていても、登録そのものが残っていれば課税対象であり続けるのが一般的な扱いです。車検切れは「公道を走れない状態」であって「登録がなくなった状態」ではないため、乗っていないのに納税通知が届く、という状況が起こります。売却や抹消の手続きで登録を整理することが、この負担に区切りをつける方法です。",
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
      t: "納税や保険の状況は査定の前にまとめて確認",
      d: "納税が済んでいるか、自賠責の期間が残っているか、リサイクル料金が預託済みかは、いずれも売却の段取りに関わります。査定を申し込む前に手元の書類を一度並べて確認しておくと、引き取り当日に足りないものが判明して手続きが止まる事態を避けられます。",
    },
  ];

  const ichijiMasshou = [
    {
      t: "車検切れと一時抹消は状態が違う",
      d: "車検切れは、登録は残ったまま検査の有効期間だけが過ぎた状態です。一方、一時抹消登録はナンバープレートを返納して登録を一度終わらせた状態で、そもそも公道を走らせる前提がありません。どちらも売却できますが、必要な書類と手続きの流れが変わります。",
    },
    {
      t: "手元にある書類が異なる",
      d: "一時抹消登録を済ませた普通車では、車検証の代わりに登録識別情報等通知書と呼ばれる書類が交付されているのが一般的です。軽自動車で使用中止の手続きを済ませた場合は、自動車検査証返納証明書などの書類が手元にあります。売却の申し込み時には、車検証があるのか、抹消後の書類なのかを先に伝えると話が早く進みます。",
    },
    {
      t: "運び方の考え方は共通",
      d: "一時抹消済みの車もナンバーがないため公道を自走できません。結局のところ、車検切れの車と同じくレッカー車・積載車での引き取りが前提になります。運び方の選択肢は前の章と同じ整理で考えられます。",
    },
    {
      t: "買い手側の再登録を前提に評価される",
      d: "一時抹消済みの車を再び公道で使うには、買い手側で中古新規登録などの手続きが必要になります。この手間を織り込んだうえで評価されるため、抹消済みであることは査定の前提として正確に伝えましょう。手続きの詳細は運輸支局（軽自動車は軽自動車検査協会）で確認できます。",
    },
  ];

  const longTerm = [
    {
      t: "バッテリーが上がっていないか",
      d: "長期間動かしていない車はバッテリーが上がっていることがほとんどです。エンジンがかかるかどうかは、引き取り時の作業方法（自走で積載車に載せられるか、ウインチで引き上げるか）に直結します。無理に始動を試みる必要はありませんが、「かかる／かからない」は査定時に伝えておきたい情報です。",
    },
    {
      t: "タイヤとブレーキの状態",
      d: "空気が抜けている、ひび割れている、長期の駐車でブレーキが固着して転がらない、といった状態は珍しくありません。転がらない車は積載作業に手間がかかるため、業者への連絡時に伝えておくと当日の段取りがスムーズです。",
    },
    {
      t: "書類がどこにあるか",
      d: "車検証・自賠責保険証明書・リサイクル券が車内にあるのか、自宅で保管しているのか、そもそも見当たらないのかを早めに確認します。紛失していても再発行の窓口があるため売却は可能ですが、窓口に行く時間が必要になるぶん、早く気づくほど段取りに余裕が生まれます。窓口の一覧は必要書類ガイドにまとめています。",
    },
    {
      t: "保管場所への進入経路",
      d: "積載車は一般の乗用車より大きく、狭い私道・立体駐車場・段差のある敷地には入れないことがあります。保管場所の前の道路幅、周囲の駐車状況、屋内か屋外かを伝えておくと、当日になって「車両が入れない」となる事態を避けられます。集合住宅の駐車場では、管理者への事前連絡が必要な場合もあります。",
    },
    {
      t: "車内に残っているもの",
      d: "引き渡し前に、ETCカード・車庫証明のステッカー・私物・後付けした社外品などを確認します。長く放置した車ほど積みっぱなしのものが残っていることが多く、引き渡し後に取り出すのは手間になります。個人情報が残る機器（カーナビの登録地点、ドライブレコーダーの記録媒体）も忘れずに確認してください。",
    },
  ];

  const shakenJudge = [
    {
      t: "判断材料1：車検の費用が査定に反映されるとは限らない",
      d: "車検を取得するには検査と整備にかかる費用が必要ですが、その支出がそのまま査定額に上乗せされるとは限らないと一般に言われています。車検の残り期間を評価する仕組みは業者や車種によって異なるため、「車検を通せば必ず高く売れる」とは考えないほうが安全です。",
    },
    {
      t: "判断材料2：整備が必要な状態かどうか",
      d: "長く放置していた車は、車検を通すために交換・修理が必要な箇所が見つかることがあります。この場合は検査そのものの費用に加えて整備費用も発生します。売却が目的であれば、費用をかけて通すより、そのままの状態で査定を受けたほうが結果的に負担が少ないケースが多くなります。",
    },
    {
      t: "判断材料3：乗り続ける予定があるかどうか",
      d: "判断が分かれるのは「まだ乗るかもしれない」場合です。乗り続ける予定があるなら車検を通す意味がありますが、売ると決めているなら、車検の取得は売却のためというより自分で乗るための支出になります。まずは乗るか売るかを決めてから、車検の要否を考える順序が整理しやすくなります。",
    },
    {
      t: "判断材料4：車検を通しても引き取りの論点は残る",
      d: "車検を通せば自走して持ち込めるようになりますが、それは「運び方」の問題が解消するだけで、査定額そのものが大きく変わるとは限りません。引き取り無料の業者を選べば運び方の問題は費用をかけずに解決できるため、この点だけを理由に車検を取る必要性は高くありません。",
    },
    {
      t: "判断材料5：まず査定を受けてから決める",
      d: "もっとも確実なのは、車検切れのまま複数社の査定を受け、提示された条件を見てから判断することです。車検を取得してしまうと支出が先に確定してしまいますが、査定を受けるだけなら判断材料が増えるだけで済みます。比較の物差しは掲載社の比較表で揃えられます。",
    },
  ];

  const keiDiff = [
    {
      t: "手続きの窓口が軽自動車検査協会",
      d: "軽自動車の各種手続きは、運輸支局ではなく軽自動車検査協会の事務所・支所が窓口になるのが一般的です。車検証の再交付もここで扱われます。普通車のつもりで運輸支局に行くと二度手間になるため、軽自動車であることを最初に確認しておきましょう。",
    },
    {
      t: "廃車にあたる手続きの名称が違う",
      d: "普通車の一時抹消登録・永久抹消登録にあたる手続きは、軽自動車では自動車検査証返納届（一時使用中止）や解体返納と呼ばれるのが一般的です。書類の名称も様式も異なるため、調べるときは「軽自動車の場合」と条件を付けて確認してください。",
    },
    {
      t: "税の窓口は市区町村",
      d: "軽自動車税（種別割）は市区町村が課税するため、納税や証明書に関する窓口も市区町村です。普通車の自動車税（種別割）は都道府県税事務所が窓口で、還付の仕組みも普通車と軽自動車で異なります。詳しい扱いはお住まいの市区町村に確認してください。",
    },
    {
      t: "必要書類は普通車より少ないのが一般的",
      d: "軽自動車の名義変更は実印と印鑑登録証明書が不要で、認印で足りるのが一般的です。車検が切れている場合でもこの点は変わりません。軽自動車に絞った必要書類の一覧と、紛失時の再発行窓口は専用ページにまとめています。",
    },
    {
      t: "運び方の考え方は普通車と同じ",
      d: "軽自動車でも、車検が切れていれば公道を自走させることはできません。レッカー車・積載車による引き取りが前提になる点、仮ナンバーの手続き窓口が市区町村である点は普通車と共通です。",
    },
  ];

  const faqs = [
    {
      q: "車検が切れた車でも本当に売れますか？",
      a: "売却できます。車検切れは公道を自走できないという制約であり、車の価値そのものがなくなるわけではありません。当サイト掲載のハイシャルは、車検切れを含む「どんな車でも対応」とし、レッカー引取無料（全国47都道府県・一部島しょ部除く）と公式サイトに記載しています（2026年8月7日確認）。",
    },
    {
      q: "車検切れの車はどうやって業者に渡すのですか？",
      a: "レッカー車や積載車による引き取りが基本です。自分で運転して持ち込むことは原則できないため、出張査定と引き取りに対応した業者を選び、保管場所と車の状態を伝えて引き取り日を調整します。引き取り費用の有無は業者によって異なるので契約前に確認してください。",
    },
    {
      q: "仮ナンバーを取れば自分で運転できますか？",
      a: "市区町村で仮ナンバー（臨時運行許可）を取得し、有効な自賠責保険に加入していれば、許可された目的・経路・期間に限って運行できる一般的な制度があります。ただし手続きの手間がかかるため、売却が目的なら業者の引き取りを利用するほうが現実的な場合が多いでしょう。詳細はお住まいの市区町村の窓口にご確認ください。",
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
      a: "売却できます。ただし手元にある書類が車検証ではなく、普通車では登録識別情報等通知書、軽自動車では自動車検査証返納証明書などに変わっているのが一般的です。ナンバーがないため公道は自走できず、引き取りが前提になる点は車検切れと同じです。申し込み時に「抹消済みである」ことを先に伝えると、その後の段取りがスムーズになります。",
    },
    {
      q: "軽自動車の車検切れでも手順は同じですか？",
      a: "運び方の考え方は同じで、レッカー車・積載車での引き取りが前提になります。異なるのは手続きの窓口と書類の名称です。軽自動車の窓口は運輸支局ではなく軽自動車検査協会で、税に関する窓口は市区町村になります。廃車にあたる手続きも自動車検査証返納届・解体返納と呼び方が変わります。軽自動車の必要書類は専用のガイドページにまとめています。",
    },
    {
      q: "長期間放置していた車を売る前に何を確認すればよいですか？",
      a: "エンジンがかかるか、タイヤが空気圧を保っているか、ブレーキが固着して転がらない状態でないかを確認しておくと、引き取り時の作業方法が決めやすくなります。あわせて車検証・自賠責保険証明書・リサイクル券の所在と、積載車が入れる進入経路かどうかも確認してください。無理に始動させる必要はありません。分かる範囲で状態を正確に伝えることが目的です。",
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
          車検切れの車を売る方法｜公道を走れなくても売却できる手順と注意点
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          「車検が切れているから、もう処分するしかない」と考える必要はありません。車検切れの車も売却は可能で、問題になるのは価値の有無ではなく「公道を走れない車をどう運ぶか」です。このページでは、車検切れの車を売る一般的な手順、仮ナンバーの基礎知識、引き取り条件の確認ポイントを整理します。
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

        {/* 放置リスクの解説 */}
        <section className="mt-14">
          <h2 className="section-title mb-5">車検切れのまま放置しないほうがよい理由</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              車検が切れた車を「そのうち考えよう」と置いたままにすると、負担だけが積み上がっていきます。登録が残っている限り自動車税（種別割）の課税対象であり続けるのが一般的な扱いで、乗っていない車の税負担が毎年発生します。また、屋外で放置された車は劣化が進み、動かせる状態からどんどん遠ざかっていきます。
            </p>
            <p>
              売る・廃車にする・車検を取って乗り続ける、のどれを選ぶにしても、判断を先送りしないことが負担を減らす近道です。売却や廃車で登録を整理すれば、税や保険の負担も含めて区切りをつけられます。このページでは「売る」を選ぶ場合の段取りを順に見ていきます。
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
            ※ ここに挙げたのは車検切れ車の売却に関する一般的な知識です。仮ナンバーなどの行政手続きの詳細は各窓口にご確認ください。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">車検切れの車で気をつけたいこと</h2>
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
            車検切れの売却でいちばん実務的な論点が「どうやって運ぶか」です。選べる手段はいくつかあり、どれを選ぶかで手間と自己負担が変わります。ここでは手段ごとの位置づけと、費用を見積もるときに見るべき条件を整理します。
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
            車検が切れていても、税と保険の関係は自動的に消えるわけではありません。売却の判断をする前に、いま何が続いていて、売却後にどう変わるのかを押さえておきましょう。
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
            「車検切れ」と「一時抹消登録済み」は混同されがちですが、車の状態としては別物です。どちらも売却できますが、手元にある書類と手続きの流れが変わります。
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
          <h2 className="section-title mb-6">長期間放置していた車で追加で確認すること</h2>
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
            <Link href="/guide/shorui/" className="text-vermilion underline underline-offset-4">車売却の必要書類 完全ガイド</Link>
            をご覧ください。
          </p>
        </section>

        {/* 車検を通すかの判断 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">「車検を通してから売るべきか」の判断材料</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            結論としては、売ると決めているなら車検を取り直さずに査定を受けるのが基本です。ただし状況によって判断は変わります。迷ったときに見るべき材料を順に並べました。
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
          <h2 className="section-title mb-2">車検切れの車の売り先の選び方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            車検切れの車は引き取りが必須になるため、引き取り費用が無料の業者を選べるかどうかが手取りに直結します。以下は当サイト掲載社の公式確認済み条件です（確認日: {CHECKED_LABEL}）。
          </p>
          <div className="space-y-4">
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">引取無料のハイシャル（廃車買取）</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                掲載している<Link href="/gyosha/haishar/" className="text-vermilion underline underline-offset-4">ハイシャル</Link>は、事故車・不動車を含む「どんな車でも対応」とし、レッカー引取無料（全国47都道府県・一部島しょ部除く）、廃車手続きの書類代行無料、最短当日引き取りと公式サイトに記載しています（{CHECKED_LABEL}確認）。一方、成約後のキャンセルにはキャンセル料30,000円の記載もあるため（同日確認）、契約前に条件を必ず確認してください。廃車買取の全体像は<Link href="/haisha/" className="text-vermilion underline underline-offset-4">廃車・事故車・不動車の買取</Link>にまとめています。
              </p>
            </div>
            <div className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">値がつきそうな車は出張査定で比較する</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                車検が切れていても年式が新しい車や輸入車・旧車は、専門業者の出張査定で評価される可能性があります。掲載社では旧車王が離島含む全国無料出張査定・車輌引き上げ料金を含む引取無料と公式サイトに記載しています（{CHECKED_LABEL}確認）。カテゴリ別の考え方は<Link href="/kyusha/" className="text-vermilion underline underline-offset-4">旧車・クラシックカー</Link>や<Link href="/gaisha/" className="text-vermilion underline underline-offset-4">外車・輸入車</Link>のページをご覧ください。
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/haisha/" className="btn-primary">廃車・事故車買取のページを見る</Link>
            <Link href="/compare/" className="btn-ghost">掲載8社の比較表を見る</Link>
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
                <span className="mt-1 block text-xs text-steel-500">処分の前に知っておく判断ポイント</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/shorui/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">車売却の必要書類 完全ガイド</span>
                <span className="mt-1 block text-xs text-steel-500">紛失時の再発行窓口もまとめて解説</span>
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
                <span className="mt-1 block text-xs text-steel-500">放置されがちな実家の車の売り方</span>
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
                <span className="font-display text-steel-900">車買取8社の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">引取条件を同じ物差しで比較</span>
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
