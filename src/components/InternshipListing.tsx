import { ArrowRight, Clock, Monitor, Star } from 'lucide-react';
import { internships } from '../data/internships';
import { Internship } from '../types/internship';
import { useState } from 'react';
import InternshipDetail from './InternshipDetail';

interface InternshipListingProps {
  onEnroll: (internship: Internship) => void;
}

export default function InternshipListing({ onEnroll }: InternshipListingProps) {
  const [expandedId, setExpandedId] = useState<string | null>(internships[0]?.id || null);

  const activeInternships = internships.filter(i => i.status === 'active');
  const upcomingInternships = internships.filter(i => i.status === 'upcoming');
  const expandedInternship = internships.find(i => i.id === expandedId);

  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-amber-500">Internship Programs</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our carefully curated internship programs designed to make you industry-ready. More programs coming soon!
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {activeInternships.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Available Now</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {activeInternships.map((internship) => (
                <button
                  key={internship.id}
                  onClick={() => setExpandedId(internship.id)}
                  className={`group text-left rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border-2 transform ${
                    expandedId === internship.id
                      ? 'border-amber-500 scale-105 md:scale-100'
                      : 'border-transparent hover:border-amber-500 hover:shadow-xl'
                  }`}
                >
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{internship.title}</h3>
                      <Star className="flex-shrink-0" size={20} fill="currentColor" />
                    </div>
                    <p className="text-amber-100 text-sm">{internship.category}</p>
                  </div>

                  <div className="bg-white p-6">
                    <p className="text-slate-600 mb-6 h-20 line-clamp-3">
                      {internship.shortDescription}
                    </p>

                    <div className="flex gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-slate-600" />
                        <span className="text-sm text-slate-600">{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor size={18} className="text-slate-600" />
                        <span className="text-sm text-slate-600">{internship.mode}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-amber-500 font-semibold group-hover:translate-x-1 transition-transform">
                      <span>View Details</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </button>
              ))}

              {activeInternships.length < 3 && (
                <div className="md:col-span-{3 - activeInternships.length}"></div>
              )}
            </div>

            {expandedInternship && (
              <InternshipDetail
                internship={expandedInternship}
                onEnroll={onEnroll}
              />
            )}
          </div>
        )}

        {upcomingInternships.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Coming Soon</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingInternships.map((internship) => (
                <div
                  key={internship.id}
                  className="bg-white rounded-2xl shadow-lg p-6 border-2 border-slate-300 opacity-75 relative"
                >
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Coming Soon
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{internship.title}</h3>
                  <p className="text-slate-600 mb-4">{internship.category}</p>
                  <p className="text-slate-500 text-sm">{internship.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
