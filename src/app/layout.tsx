import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GDSC Next.js App',
  description: 'A Next.js application with TypeScript and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col bg-white">
          {/* Header - Google-style minimal header */}
          <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-normal">
                      <span className="text-blue-500">G</span>
                      <span className="text-red-500">o</span>
                      <span className="text-yellow-500">o</span>
                      <span className="text-blue-500">g</span>
                      <span className="text-green-500">l</span>
                      <span className="text-red-500">e</span>
                    </span>
                    <span className="text-2xl font-normal text-gray-700 ml-2">Developer Student Club</span>
                  </div>
                </div>
                <nav className="hidden md:flex space-x-6">
                  <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Events
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    About
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Contact
                  </a>
                </nav>
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Join Us
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 bg-gray-50">
            {children}
          </main>

          {/* Footer - Google-style minimal footer */}
          <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-normal">
                      <span className="text-blue-500">G</span>
                      <span className="text-red-500">D</span>
                      <span className="text-yellow-500">S</span>
                      <span className="text-green-500">C</span>
                    </span>
                    <span className="text-xl font-normal text-gray-700 ml-2">DevFest</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building a community of developers through technology, innovation, and collaboration.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">Connect</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Discord Community
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      GitHub
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">Resources</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Code of Conduct
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Terms of Service
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Help Center
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-xs text-gray-500">
                  © 2025 Google Developer Student Club. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500">Powered by</span>
                  <span className="text-xs font-medium">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 