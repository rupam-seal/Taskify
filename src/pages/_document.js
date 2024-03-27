import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="prefetch"
          href="https://prod.spline.design/wW0KvxCQ2buZDdji/scene.splinecode"
        />
        <link
          rel="prefetch"
          href="https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode"
        />

        {/* <link
          rel="preload"
          href={'../assets/fonts/gotham-medium.woff2'}
          as="font"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href={'../assets/fonts/gotham-book.woff2'}
          as="font"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href={'../assets/fonts/impact.woff'}
          as="font"
          crossOrigin="true"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
