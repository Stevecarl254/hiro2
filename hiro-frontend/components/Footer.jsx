"use client"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Hiro Catering</h3>
            <p className="text-background/80">Premium catering and event services for unforgettable occasions.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition">
                  Corporate Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Wedding Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Event Planning
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-background/80 mb-2">Email: info@hirocatering.com</p>
            <p className="text-background/80">Phone: (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2025 Hiro Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
