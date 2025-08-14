import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/KannadaScriptlogo.png" />
          <link rel="apple-touch-icon" href="/KannadaScriptlogo.png" />
          <meta name="theme-color" content="#06b6d4" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
