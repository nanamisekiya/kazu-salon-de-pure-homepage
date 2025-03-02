import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div
      className={isOpen ? styles.sidebarContainer : styles.sidebarClosed}
      onClick={onClose}
    >
      <nav className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <ul className={styles.navList}>
          <li>
            <a href="/home" className={styles.navLink}>
              トップ
            </a>
          </li>
          <li>
            <a href="/profile" className={styles.navLink}>
              プロフィール
            </a>
          </li>
          <li>
            <a href="/lesson" className={styles.navLink}>
              レッスン紹介
            </a>
          </li>
          <li>
            <a href="https://ameblo.jp/saron-pure/" className={styles.navLink}>
              ブログ
            </a>
          </li>
          <li>
            {/* TODO: ボタンも検討 */}
            <a href="#" className={styles.navLink}>
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
