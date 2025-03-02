import styles from "./KimonoVisit.module.scss";

const KimonoVisit = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>出張着付け</h2>

        {/* 説明 */}
        <div className={styles.infoBox}>
          <p>
            川崎市中原区で着付けのお教室を開校しております。
            <br />
            アクセスは、南武線武蔵中原駅から徒歩10分、
            または武蔵小杉駅からバスで10分バス停すぐのマンションです。
          </p>
          <p>
            着付けレッスンの他、
            <br />
            サロンに来ていただいての着付けも承ります。
          </p>
        </div>

        {/* レッスン情報 */}
        <div className={styles.section}>
          <p className={styles.important}>
            ☆ 着付けレッスンにつきましては、着付け教室のページをご覧ください。
          </p>
          <p>
            当サロンでのお着付けも承っております。
            <br />
            サロンに来ていただける方はお着付けさせていただきます。
          </p>
        </div>

        {/* 料金表 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>着付け料金表</h3>
          <table className={styles.priceTable}>
            <tbody>
              <tr>
                <td>振袖</td>
                <td>¥7,560</td>
              </tr>
              <tr>
                <td>黒留袖・色留袖</td>
                <td>¥6,480</td>
              </tr>
              <tr>
                <td>訪問着・付け下げ</td>
                <td>¥6,480</td>
              </tr>
              <tr>
                <td>小紋・喪服</td>
                <td>¥5,400</td>
              </tr>
              <tr>
                <td>袴</td>
                <td>¥6,480</td>
              </tr>
              <tr>
                <td>浴衣</td>
                <td>¥3,240</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.note}>
            ※ 価格には消費税 8% が含まれております。
          </p>
        </div>

        {/* その他の料金 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>その他の料金</h3>
          <ul className={styles.list}>
            <li>振袖以外の変化結びをご希望の場合 +¥1,080</li>
            <li>出張着付けについては交通費を頂戴いたします</li>
            <li>着物帯を二点以上する場合は +¥1,080</li>
          </ul>
        </div>

        {/* 着付けに必要な小物類 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>着付けに必要な小物類</h3>
          <table className={styles.itemTable}>
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
                <td>衿芯</td>
                <td>1</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default KimonoVisit;
