import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
          <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NjQiIGhlaWdodD0iOTY0IiB2aWV3Qm94PSIwIDAgOTY0IDk2NCI+DQogIDxnIGlkPSJHcnVwb18zNDg3MyIgZGF0YS1uYW1lPSJHcnVwbyAzNDg3MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMzEgLTIyMCkiPg0KICAgIDxyZWN0IGlkPSJSZXTDom5ndWxvXzEwMzIiIGRhdGEtbmFtZT0iUmV0w6JuZ3VsbyAxMDMyIiB3aWR0aD0iOTY0IiBoZWlnaHQ9Ijk2NCIgcng9IjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjMxIDIyMCkiIGZpbGw9IiMwNDBiMzMiLz4NCiAgICA8dGV4dCBpZD0iQUdTIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MzcwIDgyMykiIGZpbGw9IiNmM2YzZjMiIGZvbnQtc2l6ZT0iMzUwIiBmb250LWZhbWlseT0iRnV0dXJhUm91bmQtRGVtaSwgRnV0dXJhIFJvdW5kIiBmb250LXdlaWdodD0iMzAwIj48dHNwYW4geD0iMCIgeT0iMCI+QUdTPC90c3Bhbj48L3RleHQ+DQogIDwvZz4NCjwvc3ZnPg0K" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
