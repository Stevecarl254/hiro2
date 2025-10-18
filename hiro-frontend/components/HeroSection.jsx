"use client"

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                <span className="text-primary">One-Stop</span> Solution
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground-secondary">
                For All Catering <span className="text-muted">Services & Event Needs</span>
              </h2>
            </div>

            <p className="text-lg text-muted max-w-md leading-relaxed">
              Click below to get a quote and let's serve your event right
            </p>

            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-semibold inline-block">
              Get Quote
            </button>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-96 bg-white rounded-3xl border-8 border-gray-900 shadow-2xl flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl"></div>
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <svg
                    className="w-20 h-20 mx-auto text-primary opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-muted">Mobile Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
