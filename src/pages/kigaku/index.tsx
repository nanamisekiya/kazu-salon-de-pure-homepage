import styles from "./Kigaku.module.scss";

const Kigaku = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>九星気学</h2>

        {/* 説明 */}
        <div className={styles.section}>
          <p>
            九星気学とは、生年月日を基準に
            <span className={styles.bold}>九星・十干・十二支</span>
            などのデータを基にします。
            <br />
            運勢を判断し、運を開いていく方法です。
          </p>
          <p>
            自分が今どのようなバイオリズム（運勢の流れ）でどの位置にいるかを知ることで、
            <br />
            どのように行動したらいいか、どう捉えていけばよいか
            を考えることができます。
          </p>
        </div>

        {/* 気学の説明 */}
        <div className={styles.section}>
          <p>
            気学の「気」とは、
            <span className={styles.bold}>目に見えないエネルギー</span>
            のことです。
          </p>
          <p>
            天と地のエネルギーをうまく自分の中に取り入れ、この三つのバランスを保つことで
            人生をより豊かにする秘訣とされています。
          </p>
        </div>

        {/* セッション */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>セッション</h3>
          <ul className={styles.list}>
            <li>お一人分のご相談（ご自身の宿命とバイオリズムの説明含む）</li>
            <li>初回は 2～3時間程度で8,000円 （2回目からは5,000円）</li>
            <li>お一人追加ごとに +5,000円</li>
            <li>メール・電話での相談: 1,000円/件</li>
            <li>電話相談（ご自宅に出張不可の場合）: 30分ごとに 2,000円</li>
          </ul>
        </div>

        {/* 吉方取り方位 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>吉方取り方位</h3>
          <p>セッションを受けた方のみ対象となります。</p>
          <p>
            半年分で +5,000円、1年分で +10,000円
            がセッション料金にプラスされます。
          </p>
        </div>

        {/* 気学講座 */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>気学講座</h3>
          <p>
            気学の基本を学びたい方に向けたレッスンです。
            <br />
            生年月日からの
            <span className={styles.bold}>星の見方・バイオリズム</span>
            を知ることができます。
          </p>
          <ul className={styles.list}>
            <li>全7回 各2時間程度: 各回 5,000円</li>
            <li>
              7回を修了された方のみ「エネルギー値の出し方」の特別講義:
              10,000円/回
            </li>
          </ul>
        </div>

        {/* お問い合わせ */}
        <div className={styles.contact}>
          <p>ご希望の方は、お気軽にお問い合わせください。</p>
        </div>
      </div>
    </>
  );
};

export default Kigaku;
