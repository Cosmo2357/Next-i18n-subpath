import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import LangSelector from "../../components/LangSelector";
export default function Index() {
  const [langSelector, setLangSelector] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
        <Link href="/">Home</Link>
      </div>
      <ul className={styles.navRight}>
        <Link href="/about" passHref>
          <li>ABOUT</li>
        </Link>
        <div
          className={styles.button}
          onClick={() => {
            setLangSelector(!langSelector);
          }}
        >
          Language
        </div>
        {langSelector && (
          <LangSelector
            langSelectorHandler={() => {
              setLangSelector(!langSelector);
            }}
          />
        )}
      </ul>
    </div>
  );
}
