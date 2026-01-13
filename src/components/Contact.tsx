import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get in <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your journey? Reach out to us and we'll help you take the first step
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Have questions about our internship program? Want to learn more about how we can help you become industry-ready? We're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-amber-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Phone</h4>
                  <a href="tel:+917259689208" className="text-slate-600 hover:text-amber-500 transition-colors block">
                    +91 7259689208
                  </a>
                  <a href="tel:+919110689208" className="text-slate-600 hover:text-amber-500 transition-colors block">
                    +91 9110689208
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-amber-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                  <a href="mailto:rohanunofficialoffice01@gmail.com" className="text-slate-600 hover:text-amber-500 transition-colors">
                    rohanunofficialoffice01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-amber-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Location</h4>
                  <p className="text-slate-600">
                    S.G Palya<br />
                    Bengaluru, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-amber-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Connect on LinkedIn</h4>
                  <a
                    href="https://linkedin.com/company/unofficialoffice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-amber-500 transition-colors"
                  >
                    @UnofficialOffice
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your interest in the program..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-200 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">UNOFFICIALOFFICE</h3>
            <p className="text-slate-600 mb-4">Making students industry-ready through hands-on experience</p>
            <p className="text-slate-500 text-sm">
              © 2024 UNOFFICIALOFFICE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
