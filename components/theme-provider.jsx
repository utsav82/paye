"use client"
import { usePathname } from 'next/navigation'
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
    const pathname = usePathname();
    const forcedThemeFromPathname = pathname === "/" ? "dark" : undefined;
    return <NextThemesProvider forcedTheme={forcedThemeFromPathname} {...props}>{children}</NextThemesProvider>
}