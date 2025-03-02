import { useRouter } from "next/router";
import styles from "./Lesson.module.scss";

const lessons = [
  {
    id: "flower",
    title: "フラワーアレンジ",
    description: "美しい花のアレンジを学ぶ",
  },
  {
    id: "kimono_class",
    title: "着付け教室",
    description: "着物の着付けを基礎から学ぶ",
  },
  {
    id: "kimono_visit",
    title: "出張着付け",
    description: "プロによる出張着付けサービス",
  },
  {
    id: "wedding_bouquet",
    title: "ウェディングブーケ",
    description: "特別な日のためのブーケ制作",
  },
  {
    id: "kigaku",
    title: "九星気学",
    description: "気学を学んで開運する",
  },
  {
    id: "organizing",
    title: "整理収納",
    description: "快適な生活のための整理術",
  },
  {
    id: "tea_lesson",
    title: "ティーレッスン",
    description: "紅茶の淹れ方と楽しみ方を学ぶ",
  },
  {
    id: "visit_lesson",
    title: "出張レッスン",
    description: "ご自宅や希望の場所で学べる",
  },
];

const Lesson = () => {
  const router = useRouter();
  const handleClick = (link: string) => router.push(link);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>レッスン一覧</h2>
        <div className={styles.grid}>
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={styles.card}
              onClick={() => handleClick(lesson.id)}
            >
              <h3 className={styles.lessonTitle}>{lesson.title}</h3>
              <p className={styles.description}>{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lesson;
