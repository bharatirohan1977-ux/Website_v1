import { CheckCircle, Clock, Monitor } from 'lucide-react';
import { Internship } from '../types/internship';

interface InternshipDetailProps {
  internship: Internship;
  onEnroll: (internship: Internship) => void;
}

export default function InternshipDetail({ internship, onEnroll }: InternshipDetailProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-500">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-6 text-white">
        <h2 className="text-3xl font-bold">{internship.title}</h2>
        <p className="text-amber-100 mt-2">{internship.category}</p>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-amber-500" size={20} />
              <p className="text-sm text-slate-600">Duration</p>
            </div>
            <p className="text-2xl font-bold text-slate-900">{internship.duration}</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="text-blue-500" size={20} />
              <p className="text-sm text-slate-600">Mode</p>
            </div>
            <p className="text-2xl font-bold text-slate-900">{internship.mode}</p>
          </div>
          <div className="bg-slate-100 rounded-lg p-4 border-2 border-slate-300">
            <p className="text-sm text-slate-600 mb-2">Category</p>
            <p className="text-2xl font-bold text-slate-900">{internship.category}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">About This Program</h3>
          <p className="text-slate-600 leading-relaxed mb-4">{internship.fullDescription}</p>
          <p className="text-slate-600 leading-relaxed">{internship.projectOutline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Skills You'll Gain</h3>
            <div className="space-y-3">
              {internship.skillGains.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">What You'll Get</h3>
            <div className="space-y-3">
              {internship.perks.map((perk, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Prerequisites</h3>
          <div className="space-y-2">
            {internship.prerequisites.map((prereq, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-700">{prereq}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Learning Path</h3>
          <div className="space-y-4">
            {internship.processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => onEnroll(internship)}
          className="w-full bg-amber-500 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}
