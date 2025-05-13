import { Toaster } from '@/shared/ui/sonner'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider, QueryProvider } from './providers'
import './styles/globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'ДонРецепты.ру',
	description: 'Онлайн-книга популярных рецептов',
}

export type RootLayoutProps = Readonly<{
	children: React.ReactNode,
}>


const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className="min-h-screen"
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased h-svh`}
			>
				<QueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Toaster/>
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	)
}

export default RootLayout
