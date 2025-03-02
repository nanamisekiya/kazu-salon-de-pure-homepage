import styles from "./KimonoClass.module.scss";

const KimonoClass = () => {
  return (
    <div className={styles.container}>
      {/* タイトル */}
      <h2 className={styles.title}>着付け</h2>

      {/* アクセス情報 */}
      <div>
        <p>
          川崎市中原区で着付けのお教室を開校しております。
          <br />
          <br />
          アクセスは、南武線武蔵中原駅から徒歩10分、
          <br />
          または武蔵小杉駅からバスで10分バス停すぐのマンションです。
        </p>
        <p>
          「きものカルチャー研究所」のカリキュラムに基づき、以下のレッスンをおこなっています。
          <br />
          着物初心者の方でも安心して学べる内容となっております。
          <br />
          レッスン日は、平日土日関係なく、 お互いの予定の合う日を選べます！
        </p>
      </div>

      {/* 通常レッスン */}
      <div>
        <h3 className={styles.sectionTitle}>通常レッスン</h3>

        {/* 初等科 */}
        <div className={styles.highlightRed}>初等科</div>
        <div>（一人で着られるようになるコース全16回）</div>
        <p>
          きものカルチャー研究所のカリキュラムに沿って、着物の基本的な知識も学びながら、
          <br />
          4か月で着物が着られるようになります。
        </p>
        <p>
          浴衣・おしゃれ着から礼装まで、一人で着られるようになります。
          <br />
          修了時には試験を受けていただき、合格者には「きものカルチャー研究所」からの修了証が発行されます。
        </p>

        <p>
          <strong>全16回</strong>
        </p>
        <p>
          （一回2時間 入学金3,300円 月謝（4回）8,800円×4 テキスト2,500円）
          <br />
          初回時に14,600円、その後は5・9・13回目に8,800円をお支払いいただきます。
          <br />
          試験に合格できなかった場合は追試となります（1回・2,475円）。
        </p>

        <p>
          <strong>主なカリキュラム</strong>
        </p>
        <ul className={styles.curriculumList}>
          <li>半襟の付け方</li>
          <li>浴衣の着方と半幅帯の結び方</li>
          <li>おしゃれ着の着方と名古屋帯のお太鼓結び</li>
          <li>留袖の着方と二重太鼓</li>
          <li>正しい着こなしの知識</li>
        </ul>

        {/* 中等科 */}
        <div className={styles.highlightRed}>中等科</div>
        <div>（人に着せるコース全28回）</div>
        <p>
          初等科を学べば、引き続き上級コースへ進むことができます。
          <br />
          おしゃれ着から訪問着・振袖・留袖など、多様な技術を習得しながら、
          <br />
          自分以外の人にも美しく着付けができるようになる計28回のレッスン です。
        </p>

        <p>
          <strong>全28回</strong>
        </p>
        <p>
          （一回2時間 月謝（4回）9,900円×7 テキスト3,000円）
          <br />
          初等科からの進級費 33,000円
        </p>

        <p>
          <strong>認定証について</strong>
        </p>
        <p>
          卒業時に「きものカルチャー研究所」より <strong>一級着付認定証</strong>
          が発行され、
          <br />
          認定料として<strong>55,000円</strong>がかかります。
        </p>

        <p>
          <strong>主なカリキュラム</strong>
        </p>
        <ul className={styles.curriculumList}>
          <li>おしゃれ着の着方と名古屋帯のお太鼓結び</li>
          <li>留袖の着方と二重太鼓</li>
          <li>男性の着付け</li>
          <li>子どもの着物の着せ方</li>
          <li>振袖の着付けと袋帯の変化結び</li>
          <li>女性の着せ方</li>
        </ul>
      </div>

      <div>
        {/* きこなし講座 */}
        <h3 className={styles.sectionTitle}>着こなし講座</h3>
        <p>
          着こなし入門講座は、着付け技術（初等科を修了）を習得した上で、
          「実用知識・実戦経験・きものコーディネート」の3要素を学ぶ講座です。
        </p>
        <p>
          カリキュラムは24教程
          で構成され、すべてのシーズンの着こなしを体験します。
          <br />
          修了時には「着こなし一級」 の認定を受けることができます。
        </p>

        <ul className={styles.highlightPinkList}>
          <li>毎回テキストに沿って講師が講義や実践コーディネートを行います</li>
          <li>一年を通して着物で受講していただきます</li>
          <li>鼻緒のすげ方や簡単なしみ抜きも体験できます</li>
        </ul>

        <p>
          <strong>進級費:</strong> なし
        </p>
        <p>
          <strong>テキスト:</strong> 3,000円
        </p>
        <p>
          <strong>お月謝:</strong> 11,000円（4回のお稽古毎）
        </p>
        <p>
          <strong>初回合計:</strong> 14,000円
        </p>

        <p>
          <strong>別途（任意）:</strong>
        </p>
        <ul className={styles.costList}>
          <li>鼻緒・下駄台 … 5,000円程度（時価）</li>
          <li>しみ抜きセット … 8,540円（時価）</li>
        </ul>

        <p>
          修了時には認定料として<strong>33,000円</strong> をお支払いいただきます
        </p>
      </div>

      {/* 着付け体験レッスン */}
      <div>
        <h3 className={styles.sectionTitle}>着付け体験レッスン</h3>
        <p>
          着物を着てみたいけれどレッスンを続けられるか不安な方のための、
          <br />
          初心者向けの一回限りのレッスンです。
        </p>
      </div>

      {/* 着付けに必要な小物表 */}
      <div>
        <h3 className={styles.sectionTitle}>着付けに必要な小物類</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>名称</th>
              <th>数量</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>肌襦袢</td>
              <td>1</td>
              <td>着物スリップでも可</td>
            </tr>
            <tr>
              <td>裾除け</td>
              <td>1</td>
              <td>着物スリップでも可</td>
            </tr>
            <tr>
              <td>長襦袢</td>
              <td>1</td>
              <td>二部式でも可</td>
            </tr>
            <tr>
              <td>足袋</td>
              <td>1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>半衿</td>
              <td>1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>帯板</td>
              <td>1</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KimonoClass;
