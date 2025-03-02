import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>プロフィール</h2>

      {/* プロフィール詳細 */}
      <p className={styles.location}>川崎市中原区在住・50代</p>
      <p className={styles.description}>
        OLをしながらフラワーアレンジメントを習い始め、フラワーアレンジ歴30年以上。
        いくつかのフラワースクールにて基礎からウェディングの専門的な技術を学ぶ。
        その間結婚式やウェディング雑誌の撮影、有名ブランド店内装花、大使館パーティーなどを経験。
      </p>
      <p className={styles.description}>
        自分の好きな事を一人でお伝えするということと、お一人お一人のライフスタイルに寄り添うレッスンで、
        皆様に心豊かな人生のためのエッセンスをお伝えする一人カルチャーサロンを開催しています！
      </p>

      {/* 経歴リスト */}
      <div className={styles.history}>
        <ul>
          <li>1998年頃よりフラワーアレンジメントレッスンを始める</li>
          <li>2001年 Eヒビヤフラワーアカデミーブライダルコース修了</li>
          <li>2011年 紅茶コーディネーター資格取得</li>
          <li>
            2012年
            きものカルチャー研究所にて一級着付け講師・きものコーディネート着こなし一級資格取得
          </li>
          <li>2013年 きものカルチャー研究所、武蔵中原教室を開校</li>
          <li>2016年 ハウスキーピング協会・整理収納アドバイザー一級取得</li>
        </ul>
      </div>

      {/* フッターのメッセージ */}
      <p className={styles.footerText}>
        フラワーアレンジメント・着付けを中心に、興味のあることを現在も様々学び続けており、
        皆様に素敵なエッセンスをご紹介するのが何よりの楽しみです♪
      </p>
    </div>
  );
};

export default Profile;
