import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PlayersEdge Group - Performance Marketing for Legal U.S. Sportsbooks",
  description: "PlayersEdge Group is a digital media and performance marketing company focused on legal U.S. online sports betting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-[#0f1a27]/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/edgelogo2.png"
                    alt="PlayersEdge Group"
                    width={140}
                    height={35}
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link href="/" className="text-gray-400 hover:text-lime-400 text-sm font-medium transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-400 hover:text-lime-400 text-sm font-medium transition-colors">
                    About
                  </Link>
                  <Link href="/how-it-works" className="text-gray-400 hover:text-lime-400 text-sm font-medium transition-colors">
                    How It Works
                  </Link>
                  <Link href="/responsible-gaming" className="text-gray-400 hover:text-lime-400 text-sm font-medium transition-colors">
                    Responsible Gaming
                  </Link>
                  <Link href="/affiliate-disclosure" className="text-gray-400 hover:text-lime-400 text-sm font-medium transition-colors">
                    Disclosure
                  </Link>
                  <Link href="/contact" className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded-md text-sm font-semibold transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-zinc-950 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">PlayersEdge <span className="text-lime-400">Group</span></h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A digital media and performance marketing company focused on legal U.S. online sports betting.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link href="/about" className="block text-gray-400 hover:text-lime-400 text-sm transition-colors">About Us</Link>
                  <Link href="/how-it-works" className="block text-gray-400 hover:text-lime-400 text-sm transition-colors">How It Works</Link>
                  <Link href="/responsible-gaming" className="block text-gray-400 hover:text-lime-400 text-sm transition-colors">Responsible Gaming</Link>
                  <Link href="/affiliate-disclosure" className="block text-gray-400 hover:text-lime-400 text-sm transition-colors">Affiliate Disclosure</Link>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Need Help?</h4>
                <p className="text-gray-400 text-sm mb-2">Problem gambling helpline:</p>
                <p className="text-lime-400 font-bold text-lg">1-800-GAMBLER</p>
                <p className="text-gray-500 text-xs mt-1">(1-800-426-2537)</p>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8 space-y-3 text-xs text-gray-500 leading-relaxed">
              <p>
                PlayersEdge Group is a digital media and performance marketing company. We do not operate an online sportsbook or accept wagers.
              </p>
              <p>
                Our content is intended for audiences 21+ and only in jurisdictions where online sports betting is legal. We may receive a commission if you sign up with operators through our links.
              </p>
              <p className="pt-4 text-center text-gray-600">
                &copy; {currentYear} PlayersEdge Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
