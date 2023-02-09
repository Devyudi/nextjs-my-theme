import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import {AuthController} from "@moonlay/controllers";
/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
export default NextAuth({
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'my-project',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'jsmith@example.com',
                },
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials, req) {
                //_contoller Auth
                const [ err, data ] = await new AuthController({
                    fields: credentials
                })._signIn()
                if(err){
                    return {
                        error: true,
                        message: err?.message,
                        data: null
                    }
                }

                return {
                    error:false,
                    ...data,
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        FacebookProvider({
            id: "Facebook",
            clientId: process.env.FACEBOOK_CLIENT_ID_DEV ?? "680493919837129",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET_DEV ?? "fc0c5bddc097528473248a9aeec8305c",
            redirect_uri:process.env.NEXT_PUBLIC_SITE_URL + "/profile",
            authorization: "https://www.facebook.com/v13.0/dialog/oauth?scope=email",
        })
        // ...add more providers here
    ],
    secret: process.env.SECRET,
    pages: {
        signIn: '/auth/login',
        signOut: "/auth/signout",
        error: "/auth/error"
    },
    callbacks: {
        async redirect({url, baseUrl}) {
            return baseUrl
        },
        async signIn({account, profile, user, credentials}) {

            switch(account?.provider){
                case "credentials":
                    return !user?.error
                default:
                    return false
            }
            // console.log({user,account,profile,credentials})
            // if(user?.error) return false
            //
            // if (account.provider === "google") {
            //     return profile.email_verified // && profile.email.endsWith("@gmail.com")
            // }
            // return true // Do different verification for other providers that don't have `email_verified`
        },
        async jwt({token= {}, user, profile,account}){
            return {
                ...token,
                user:{
                    ...user,
                    test:1
                }
            }
        }
        // async jwt({token = {}, user, profile, account}) {
        //
        //     user && (token.user = user)
        //     profile && (token.profile = profile)
        //     account && (token.account = account)
        //     // console.log({token, user, profile, account,credentials}, "JWT")
        //
        //     let dataProvider = {}
        //
        //     if (typeof(account?.provider) !== "undefined" && account?.provider !== "credentials"){
        //     }
        //     let scores = token?.user?.score ?? 0
        //     if(typeof(account?.provider) !== "undefined"){
        //         if(account?.provider === "credentials"){
        //
        //         }else {
        //
        //         }
        //     }
        //
        //
        //     return {
        //         ...token,
        //         user: {
        //             bearer_token: dataProvider?.bearer_token ?? token?.user?.bearer_token ?? null,
        //             access_token: dataProvider?.access_token ?? token?.user?.access_token ?? null,
        //             email: dataProvider?.email ?? token?.user?.email ?? null,
        //             fullname: token?.user?.fullname ?? null,
        //         },
        //
        //     }
        // },
        // async session({session, token, user, profile, account}) {
        //     session.user = {
        //         ...token?.user,
        //         ...token?.profile,
        //         ...token?.account,
        //         user,
        //         accessToken: {
        //             exp: token.exp,
        //             iat: token.iat,
        //             jti: token.jti
        //         }
        //     };
        //     return session;
        // },
    },
    theme: {
        colorScheme: 'dark', // "auto" | "dark" | "light"
        brandColor: '', // Hex color code #33FF5D
        logo: '/assets/icons/google-logo.svg', // Absolute URL to image
    },
    // Enable debug messages in the console if you are having problems
    debug: false,
});
