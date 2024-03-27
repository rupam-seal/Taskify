import Head from "next/head";
import React from "react";

const siteUrl = "https://taskify.vercel.app/";
const name = "Taskify";

export const Meta = ({ title, description, prefix = name }) => {
  const titleText = [prefix, title].filter(Boolean).join(" | ");

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={name} />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en" />
    </Head>
  );
};
