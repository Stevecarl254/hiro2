"use client"

export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Expert Team",
      description: "Our experienced chefs and event coordinators bring expertise to every event",
    },
    {
      number: "02",
      title: "Quality Ingredients",
      description: "We use only the finest, freshest ingredients sourced from trusted suppliers",
    },
    {
      number: "03",
      title: "Customization",
      description: "Every menu is tailored to your specific needs, preferences, and budget",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Hiro Catering?</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We're committed to delivering exceptional service and unforgettable culinary experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-4">
              <div className="text-5xl font-bold text-primary opacity-20">{reason.number}</div>
              <h3 className="text-2xl font-bold text-foreground">{reason.title}</h3>
              <p className="text-muted leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
