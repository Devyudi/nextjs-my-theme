/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/

/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/

import {NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({
            req,
            secret: process.env.SECRET,
            secureCookie:process.env.NODE_ENV  === "production"
        }
    )

    /**
     * jika token ada
     */
    if(req.nextUrl.pathname.startsWith('/auth') && token){
        return NextResponse.rewrite(new URL('/profile'),req.url)
    }

    if (req.nextUrl.pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    if (req.nextUrl.pathname.startsWith('/dashboard') && !token) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path','/dashboard','/profile','/profile/:path'],
}