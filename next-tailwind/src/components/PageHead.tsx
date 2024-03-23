import Head from "next/head";

export default function PageHead() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/svg+xml"
        href="/favicon.svg"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/darkfavicon.svg"
        media="(prefers-color-scheme: dark)"
      />
      <meta property="og:url" content="https://ada.tailus.io/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="WebSharper" />
      <meta
        property="og:description"
        content="Modern landing page built with tailus themer"
      />
      <meta property="og:image" content="/og-cover.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ada.tailus.io" />
      <meta property="twitter:url" content="https://ada.tailus.io/" />
      <meta name="twitter:title" content="Tailus Ada" />
      <meta
        name="twitter:description"
        content="Modern landing page built with tailus themer"
      />
      <meta name="twitter:image" content="/og-cover.png" />
    </Head>
  );
}
