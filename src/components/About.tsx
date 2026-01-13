import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-amber-500">UNOFFICIALOFFICE</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Bridging the Gap Between Classroom and Corporate
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At UNOFFICIALOFFICE, we bridge the gap between classroom and corporate by providing students with on-the-job learning experiences that mirror real industry workflows.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Learn the core concepts of Embedded Systems by actually developing drivers, debugging code, and collaborating in an Agile office environment just like professionals do.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We integrate AI-driven development and clean coding practices to help students not just learn, but build, test, and deliver scalable embedded solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-slate-600">
                    To provide hands-on embedded and AI-driven development experience through real corporate workflows, enabling students to learn, build, and perform like professionals from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-slate-600">
                    To be an Experience Center for embedded enthusiasts, where students can feel the real office environment right within their college.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-amber-500 p-6 rounded-r-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Our Promise</h4>
                  <p className="text-slate-600">
                    We create industry-experienced graduates, ready to perform with confidence and skill in the professional world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
