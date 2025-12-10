import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Clean Corporate */}
      <section className="bg-gradient-to-br from-[#0f1a27] to-[#1a2837] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Performance Marketing for Legal U.S. Sportsbooks
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                PlayersEdge Group is a digital media and performance marketing company that connects adult audiences
                in legal states with regulated online sportsbooks through compliant, responsible marketing and educational content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/how-it-works"
                  className="bg-[#00d038] hover:bg-[#00b830] text-black font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  How It Works
                </Link>
                <Link
                  href="/responsible-gaming"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-colors text-center"
                >
                  Responsible Gaming
                </Link>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/nyc.jpeg"
                alt="Sports Marketing"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Light Background with Pattern */}
      <section className="bg-gray-50 py-24 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-back.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Who We Are
            </h2>
            <div className="h-1 w-20 bg-[#00d038] mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  PlayersEdge Group is a digital media and affiliate marketing company specializing in
                  the legal U.S. online sports betting industry.
                </p>
                <p>
                  We provide information and tools to help adults in legal U.S. states discover licensed
                  sportsbooks and understand available welcome offers and promotions.
                </p>
                <p>
                  We are <span className="font-bold text-gray-900">not a sportsbook</span> and do not accept bets or handle player funds.
                  We are a <span className="font-bold text-gray-900">media partner</span>, not a sportsbook operator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Dark with gradient */}
      <section className="bg-gradient-to-b from-[#0f1a27] to-[#1a2837] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-400">Our commitment to compliance and transparency</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d038]/50 rounded-xl p-8 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-[#00d038] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Regulated Operators Only</h3>
              <p className="text-gray-400 leading-relaxed">
                We partner exclusively with licensed, state-regulated sportsbooks operating legally in the U.S.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d038]/50 rounded-xl p-8 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-[#00d038] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Compliance-First</h3>
              <p className="text-gray-400 leading-relaxed">
                Every aspect of our marketing follows state and federal regulations for online sports betting.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d038]/50 rounded-xl p-8 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-[#00d038] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Transparent Relationships</h3>
              <p className="text-gray-400 leading-relaxed">
                We clearly disclose our affiliate relationships and how we earn commission from partner operators.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d038]/50 rounded-xl p-8 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-[#00d038] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Educational Content</h3>
              <p className="text-gray-400 leading-relaxed">
                We create unbiased reviews and comparisons to help users make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Grey with dots pattern */}
      <section className="bg-gray-100 py-16 px-4 relative overflow-hidden">
        {/* Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Our Partners
            </h2>
            <p className="text-gray-600">
              A few of the industry-leading operators and platforms we work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Partner Logos */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg hover:border-[#00d038]/40 transition-all group">
              <div className="relative w-full h-16">
                <Image
                  src="/partner1.png"
                  alt="Partner 1"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg hover:border-[#00d038]/40 transition-all group">
              <div className="relative w-full h-16">
                <Image
                  src="/partner2.png"
                  alt="Partner 2"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg hover:border-[#00d038]/40 transition-all group">
              <div className="relative w-full h-16">
                <Image
                  src="/partner3.png"
                  alt="Partner 3"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg hover:border-[#00d038]/40 transition-all group">
              <div className="relative w-full h-16">
                <Image
                  src="/partner4.png"
                  alt="Partner 4"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg hover:border-[#00d038]/40 transition-all group">
              <div className="relative w-full h-16">
                <Image
                  src="/partner5.png"
                  alt="Partner 5"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg hover:border-[#00d038]/40 transition-all group">
              <div className="relative w-full h-16">
                <Image
                  src="/partner6.png"
                  alt="Partner 6"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section - White background with subtle pattern */}
      <section className="bg-white py-24 px-4 relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-r from-[#00d038]/5 to-transparent border-l-4 border-[#00d038] rounded-r-2xl p-10 shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-[#00d038] rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Compliance & Responsible Gaming</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#00d038] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">
                      You must be <span className="text-gray-900 font-bold">21 years or older</span> to access partner sportsbooks.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#00d038] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">
                      Online sports betting is only available in <span className="text-gray-900 font-bold">legal U.S. jurisdictions</span>.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#00d038] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">
                      Gambling should be treated as <span className="text-gray-900 font-bold">entertainment only</span>, not as a way to make money.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#00d038] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">
                      Need help? Call <span className="text-gray-900 font-bold">1-800-GAMBLER</span> for support.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/responsible-gaming"
                    className="inline-flex items-center text-[#00d038] hover:text-[#00b830] font-semibold group"
                  >
                    Learn More About Responsible Gaming
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="bg-[#0f1a27] py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Discover how our transparent affiliate model works and our commitment to compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/how-it-works"
              className="bg-[#00d038] hover:bg-[#00b830] text-black font-bold px-10 py-4 rounded-lg transition-all"
            >
              How It Works
            </Link>
            <Link
              href="/affiliate-disclosure"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-lg border border-white/10 transition-all"
            >
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
