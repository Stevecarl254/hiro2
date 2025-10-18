"use client"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Hiro Catering</h2>
            <p className="text-lg text-muted leading-relaxed">
              With over a decade of experience in the catering industry, Hiro Catering has become a trusted name for
              premium event services. We pride ourselves on delivering exceptional food, impeccable service, and
              unforgettable experiences.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Our team of passionate chefs and event coordinators work tirelessly to ensure every detail of your event
              is perfect, from menu planning to execution.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-semibold">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl h-96 flex items-center justify-center border border-border">
            <div className="text-center">
              <svg
                className="w-24 h-24 mx-auto text-primary opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <p className="text-muted mt-4">About Us Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
