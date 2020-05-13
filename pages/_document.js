import Document, { Html, Head, Main, NextScript } from 'next/document'
import './doc.css'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>

            <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument