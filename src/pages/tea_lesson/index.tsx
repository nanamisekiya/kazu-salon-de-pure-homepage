import styles from "./TeaLesson.module.scss";

const TeaLesson = () => {
  return (
    <>
      <div className={styles.container}>
        {/* タイトル */}
        <h2 className={styles.title}>ティーレッスン</h2>

        {/* 説明 */}
        <div className={styles.section}>
          <p>
            紅茶をおうちでうまく淹れる方法がわからない…
            <br />
            ちょっとしたおもてなしに簡単にできるやり方が知りたい…
          </p>
          <p>
            そんな方のために、
            <span className={styles.bold}>簡単なテーブルセッティング</span>
            をして季節のお花を飾り、
            <br />
            ミニランチの中でおもてなし紅茶の淹れ方をご紹介するレッスンです。
          </p>
          <p>
            1レッスン <span className={styles.red}>2名様以上</span>、 お一人様
            <span className={styles.red}>5000円程度</span>
            です（内容によって金額が前後します）。
          </p>
          <p>不定期レッスンですが、お申し込みがあれば随時開催いたします。</p>
        </div>

        {/* 参考レッスン内容 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>参考レッスン内容</h3>

          <h4 className={styles.purple}>「クリームティー」</h4>
          <p>
            スコーンとイングリッシュ・ミルクティーのセットのことをいいます。
            <br />
            レッスンでは、スコーンの食べ方やイングリッシュ・ミルクティーの淹れ方を学びます。
          </p>
          <p>スコーンはとてもシンプルで美味しいとサロンで一番人気！</p>
          <p>目の前で作り方を実践するレッスンもあります。</p>

          <h4 className={styles.purple}>「アイスティー」</h4>
          <p>
            セパレートティーの作り方を学ぶレッスンです。
            <br />
            セパレートにするには、あら法則がわかっていれば簡単に作れます！
          </p>
        </div>

        {/* 4回レッスンコース */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            一番知りたいものだけのとっておき4回レッスン
          </h3>
          <ul className={styles.list}>
            <li>基本的な紅茶の淹れ方</li>
            <li>クリームティー（イングリッシュ・ミルクティーの淹れ方）</li>
            <li>アフタヌーン・ミルクティーの淹れ方</li>
            <li>アイスティーの淹れ方（セパレートティーの作り方）</li>
          </ul>
          <p>2名様以上、お一人様 19,000円（4回分を一括でご購入いただきます）</p>
        </div>

        {/* コラボレッスン */}
        <div className={styles.section}>
          <p>☆コラボレッスンも行っています。</p>
        </div>
      </div>
    </>
  );
};

export default TeaLesson;
