export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f1a27] to-[#1a2837] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            About PlayersEdge Group
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A U.S.-based digital media and performance marketing company specializing in the legal online sports betting industry.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-gray-50 py-24 px-4 relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Who We Are
            </h2>
            <div className="h-1 w-20 bg-[#00d038] mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg max-w-4xl mx-auto">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                PlayersEdge Group is a U.S.-based digital media and performance marketing company
                specializing in the legal online sports betting industry.
              </p>
              <p>
                We operate at the intersection of media, technology, and regulated sports wagering,
                connecting adult audiences in legal jurisdictions with licensed sportsbook operators
                through educational content and transparent marketing practices.
              </p>
              <p>
                We are <span className="font-bold text-gray-900">not a sportsbook</span> and do not accept bets or handle player funds.
                We are a <span className="font-bold text-gray-900">media partner</span>, not a sportsbook operator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Numbered Steps */}
      <section className="bg-gradient-to-b from-[#0f1a27] to-[#1a2837] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-400">Three core areas of focus</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d038]/50 rounded-xl p-8 transition-all">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#00d038] rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-black text-2xl font-bold">1</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">Create Educational Content</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We research and publish information about legal U.S. sportsbooks, welcome offers,
                    promotions, and how online sports betting works in various states.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d038]/50 rounded-xl p-8 transition-all">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#00d038] rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-black text-2xl font-bold">2</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">Provide Comparison Tools</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We help users understand and compare welcome offers and promotions from
                    different licensed operators in their state.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d038]/50 rounded-xl p-8 transition-all">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#00d038] rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-black text-2xl font-bold">3</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">Drive Customer Acquisition</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Through our marketing channels, we drive new depositing customers to licensed
                    sportsbooks and receive affiliate commissions in return.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - Grid */}
      <section className="bg-white py-24 px-4 relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Commitment</h2>
            <div className="h-1 w-20 bg-[#00d038] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">What we stand for</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00d038]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00d038]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance</h3>
              <p className="text-gray-700">
                We adhere strictly to all federal and state regulations governing online sports betting marketing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00d038]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00d038]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Responsible Gaming</h3>
              <p className="text-gray-700">
                We actively promote responsible gambling practices and provide resources for those who need help.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00d038]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00d038]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-700">
                We clearly disclose our affiliate relationships and how we earn revenue.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00d038]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00d038]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Age Verification</h3>
              <p className="text-gray-700">
                We market only to audiences 21+ and only in legal jurisdictions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00d038]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00d038]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed Partners</h3>
              <p className="text-gray-700">
                We work exclusively with state-licensed, regulated sportsbook operators.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00d038]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00d038]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Focus</h3>
              <p className="text-gray-700">
                We prioritize educating users about legal sports betting options and responsible practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are NOT */}
      <section className="bg-gradient-to-b from-[#0f1a27] to-[#1a2837] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-red-900/20 to-transparent border-l-4 border-red-500 rounded-r-2xl p-10">
            <h2 className="text-3xl font-bold mb-8 text-white">What PlayersEdge Group Is NOT</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-red-400 font-bold text-xl">✗</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    We are <span className="text-white font-bold">not a sportsbook operator</span>. We do not accept or process wagers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-red-400 font-bold text-xl">✗</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    We are <span className="text-white font-bold">not a payment processor</span>. We do not handle deposits, withdrawals, or player funds.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-red-400 font-bold text-xl">✗</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    We are <span className="text-white font-bold">not a gambling platform</span>. All gambling activity occurs directly between you and the licensed operator.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-red-400 font-bold text-xl">✗</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    We are <span className="text-white font-bold">not responsible for operator actions</span>. Each sportsbook is independently responsible for its own operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
