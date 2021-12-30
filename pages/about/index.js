import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
export default function Index() {
  const { t } = useTranslation();
  let router = useRouter();
  return (
    <Layout>
      <h1>{t("common:quote")}</h1>
      <h2>{t("common:author")}</h2>
    </Layout>
  );
}
