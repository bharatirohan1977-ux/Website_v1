import { ArrowRight, Cpu, Zap, GitBranch, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToInternships = () => {
    const element = document.getElementById('internships');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTIwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTIwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Embedded Systems
            </span>
            <br />
            Like a Professional
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform from a student to an industry-ready embedded systems engineer through hands-on learning and real corporate workflows
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToInternships}
              className="group bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-amber-500/50"
            >
              Explore Programs
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-500 hover:text-slate-900 transition-all"
            >
              About Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500 transition-all transform hover:-translate-y-2">
              <div className="bg-amber-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Embedded Mastery</h3>
              <p className="text-slate-400 text-sm">Driver development and hardware control</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500 transition-all transform hover:-translate-y-2">
              <div className="bg-amber-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Acceleration</h3>
              <p className="text-slate-400 text-sm">10X productivity with AI tools</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500 transition-all transform hover:-translate-y-2">
              <div className="bg-amber-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GitBranch className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Industry Workflows</h3>
              <p className="text-slate-400 text-sm">Agile, GitHub, professional practices</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500 transition-all transform hover:-translate-y-2">
              <div className="bg-amber-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Career Ready</h3>
              <p className="text-slate-400 text-sm">Build your professional profile</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-amber-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
