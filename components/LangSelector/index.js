import React from "react";
import Link from "next/link";
import styles from "./lang.module.css";
import { useRouter } from "next/router";

export default function Index({ langSelectorHandler }) {
  let router = useRouter();
  return (
    <ul className={styles.container} onClick={langSelectorHandler}>
      <Link href={router.asPath} locale={"ja"} passHref>
        <li className={styles.langBox}>日本語</li>
      </Link>
      <Link href={router.asPath} locale={"en-US"} passHref>
        <li className={styles.langBox}>English</li>
      </Link>
      <Link href={router.asPath} locale={"fr"} passHref>
        <li className={styles.langBox}>French</li>
      </Link>
      <Link href={router.asPath} locale={"es"} passHref>
        <li className={styles.langBox}>Español</li>
      </Link>
      <Link href={router.asPath} locale={"zh-CN"} passHref>
        <li className={styles.langBox}>汉语</li>
      </Link>
      <Link href={router.asPath} locale={"ar"} passHref>
        <li className={styles.langBox}>عربى</li>
      </Link>
    </ul>
  );
}
