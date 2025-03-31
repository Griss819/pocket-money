import {i18nRouter} from "next-i18n-router";
import {NextRequest} from "next/server";
import i18nConfig from "./i18nConfig";

export default function TranslateMiddleware(request: NextRequest) {
    return i18nRouter(request, i18nConfig);
}

export const middlewareConfig = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
}
