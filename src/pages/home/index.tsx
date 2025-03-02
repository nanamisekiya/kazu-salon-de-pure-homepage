import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.homeSection}>
          <p>
            KAZUサロン・ド・ピュアは
            <br />
            着付け・フラワーアレンジメント・九星気学・整理収納
            など、様々なレッスンをおこなっています！
            <br />
            <br />
            レッスンを通して日常の中に素敵なエッセンス を取り入れて、
            心豊かな人生を送っていただきたいと思っています♪
          </p>
        </div>

        <div className={styles.lessonSection}>
          <h3 className={styles.sectionTitle}>レッスンについて</h3>
          <p className={styles.redBullet}>■ セレクトレッスン制</p>
          <p>ご自身のご希望に合わせて、様々なレッスンに参加できます。</p>
          <p className={styles.redBullet}>
            ■ レッスンの中心は
            <span className={styles.highlight}>
              着付け・フラワーアレンジメント・九星気学・整理収納
            </span>
          </p>
          <p>少人数制の個別指導でしっかり学べます！</p>

          <h3 className={styles.sectionTitle}>レッスン詳細</h3>
          <p className={styles.redBullet}>■ フラワーアレンジメント</p>
          <p>造花を基礎にした作品作り（ウェディング等）が学べます。</p>

          <p className={styles.redBullet}>■ 着付け</p>
          <p>
            「きものカルチャー研究所」の指導に基づき、認定資格の取得が可能。
          </p>

          <p className={styles.redBullet}>■ 九星気学</p>
          <p>相談受付や気学講座を開催。</p>

          <p className={styles.redBullet}>■ 整理収納</p>
          <p>単発のレッスンで気軽に受講できます。</p>

          <h3 className={styles.sectionTitle}>アクセス</h3>
          <p className={styles.access}>
            神奈川県川崎市中原区
            <br />
            （南武線・武蔵中原駅から徒歩10分 または武蔵小杉駅からバス10分）
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
