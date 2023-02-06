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
import fs from 'fs';
import {NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

export async function middleware(req, res = NextResponse) {
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
        return NextResponse.redirect(new URL([req.nextUrl.origin,'dashboard'].join('/')),req.url)
    }else if (req.nextUrl.pathname.startsWith('/dashboard') && !token){
        return NextResponse.redirect(new URL([req.nextUrl.origin,'dashboard'].join('/'), req.url))
    }else{
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/dashboard/:path*','/dashboard','/profile','/profile/:path','/auth/:path*'],
}