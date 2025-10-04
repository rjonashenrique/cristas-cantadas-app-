import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { FavoritesProvider } from "@/lib/favorites-context"
import { AuthProvider } from "@/lib/auth-context"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cantadas Cristãs - Relacionamentos com Fé e Respeito",
  description: "Cantadas respeitosas, mensagens prontas e conselhos bíblicos para relacionamentos cristãos",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <AuthProvider>
            <FavoritesProvider>{children}</FavoritesProvider>
          </AuthProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
