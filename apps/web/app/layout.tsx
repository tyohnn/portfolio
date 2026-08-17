import type { Metadata } from "next"
import {
  Geist_Mono,
  Lora,
  Noto_Sans_KR,
  Noto_Serif_KR,
  Nunito_Sans,
} from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

import "@workspace/ui/globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
})

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  variable: "--font-noto-serif-kr",
})

export const metadata: Metadata = {
  title: "연주환 · 복잡계를 모델링하는 소프트웨어 엔지니어",
  description:
    "복잡한 업무와 정보를 어떤 데이터로 남기고 어떻게 관계 지을지, 사람과 에이전트가 그 기록을 함께 신뢰하려면 무엇이 필요한지 고민해 왔습니다.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        nunitoSans.variable,
        lora.variable,
        geistMono.variable,
        notoSansKR.variable,
        notoSerifKR.variable
      )}
    >
      <body className="min-h-svh bg-background font-sans text-foreground">
        <ThemeProvider defaultTheme="dark" enableSystem={false}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
