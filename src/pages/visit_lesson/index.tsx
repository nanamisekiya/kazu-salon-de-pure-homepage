import styles from "./VisitLesson.module.scss";

const VisitLesson = () => {
  return (
    <>
      <div className={styles.container}>
        {/* タイトル */}
        <h2 className={styles.title}>出張レッスン</h2>

        {/* 説明 */}
        <div className={styles.section}>
          <p>
            小さなお子さんがいらしたり、介護をされていて頻繁に出かけられない、定期的に通えない、
            また単発イベントを行いたいなどの方のために、
            <span className={styles.bold}>
              フラワーアレンジメント・着付け・単発ミニレッスン
            </span>
            について出張レッスンにお伺いします。（交通費・出張費を頂戴いたします）
          </p>
        </div>

        {/* フラワーアレンジメント */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>フラワーアレンジメント</h3>
          <p>基礎レッスンから専門的レッスンまで、単発から長期まで承ります。</p>
        </div>

        {/* 着付け */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>着付け</h3>
          <p>
            結婚式やお茶のお稽古、お食事会などに着物を着ていきたい方のための出張着付け、
            <br />
            自分で着てみたい方のための着付けレッスンをおこなっています。
          </p>
          <p className={styles.link}>
            ※ 詳しくは <a href="/kimono_class">着付けのところをご覧ください</a>
          </p>
        </div>

        {/* 単発ミニレッスン */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>単発ミニレッスン</h3>
          <p>
            ビーズでアクセサリーや帯留め・壁飾り、リボンレイストラップ・ペーパークイリングなど
            様々なレッスンを単発でミニレッスンいたします。
          </p>
        </div>

        {/* 過去の出張レッスン */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>過去の出張レッスン</h3>
          <ul className={styles.list}>
            <li>
              企業様でお客様を対象にした月一イベントとして、フラワーレッスンやビーズレッスンを開催
            </li>
            <li>
              子育て中のママ友の間で、子どもを遊ばせながらのフラワーレッスン
            </li>
            <li>書道の先生とのフラワーレッスンのコラボ企画</li>
            <li>お料理教室の先生とのコラボレッスン</li>
            <li>着付け教室とコラボした特別レッスン</li>
          </ul>
          <p>
            過去レッスンについてはブログに掲載しておりますので、そちらもご覧ください。
          </p>
          <p>
            <span className={styles.bold}>
              様々なタイプの出張レッスンに対応しておりますので、お気軽にお問い合わせください。
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default VisitLesson;
