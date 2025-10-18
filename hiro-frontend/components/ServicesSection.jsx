"use client"

export default function ServicesSection() {
  const services = [
    {
      icon: "🍽️",
      title: "Corporate Catering",
      description: "Professional catering solutions for your corporate events and meetings",
    },
    {
      icon: "💍",
      title: "Wedding Catering",
      description: "Make your special day memorable with our premium wedding catering",
    },
    {
      icon: "🎉",
      title: "Event Planning",
      description: "Complete event planning and coordination services for all occasions",
    },
    {
      icon: "🥘",
      title: "Custom Menus",
      description: "Personalized menu options tailored to your preferences and dietary needs",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Comprehensive catering and event solutions for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl border border-border hover:border-primary transition hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
