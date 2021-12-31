import React from "react";
import styles from "./layout.module.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
export default function Index({ children }) {
  return (
    <div>
      <NavBar />
      <div className={styles.main} style={{ padding: "0 16px" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
