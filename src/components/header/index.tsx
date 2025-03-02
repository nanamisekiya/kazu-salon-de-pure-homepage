import styles from "./Header.module.scss";
import Image from "next/image";
import Sidebar from "../sidebar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>KAZU サロン•ド•ピュア</h1>
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/Menu.svg"
            alt="Menu"
            width={20}
            height={20}
            className={styles.menuImage}
          />
        </button>
      </div>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
