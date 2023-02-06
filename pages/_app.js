import {ThemeProvider, useTheme} from 'next-themes'
import React, {useState, useEffect} from "react";
import {getSession, SessionProvider, useSession} from "next-auth/react"
import store, {wrapper} from "../src/redux/store";
import {Provider} from "react-redux";
// import "slick-carousel/slick/slick-theme.css";
import '../src/assets/sass/main.scss'
import "slick-carousel/slick/slick.css";
import WrapperTheme from "@moonlay/src/components/shared-layout/WrapperTheme";
export const config = {
  amp: "hybrid"
}

function MyApp(props) {
  let {Component, pageProps: {session, ...pageProps}} = props

  return (
      <SessionProvider session={session}>
        <Provider store={store}>
            <WrapperTheme>
                <ThemeProvider attribute={'class'} enableSystem={false}>
                    <div
                        className="w-full min-h-screen "
                        key={'index-component'}>
                        <Component
                            {...props?.pageProps}
                        />
                    </div>
                </ThemeProvider>
            </WrapperTheme>
        </Provider>
      </SessionProvider>

  )
}


MyApp.getInitialProps = async ({Component, ctx}) => {

  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  const sessions = await getSession(ctx)


  pageProps = {
    ...pageProps,
    sessions,
  }

  return {pageProps};
}

export default wrapper.withRedux(MyApp)