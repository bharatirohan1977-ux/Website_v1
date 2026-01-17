import { ArrowLeft, Mail, User, Phone, Building2, BookOpen } from 'lucide-react';
import { Internship } from '../types/internship';
import { useState } from 'react';

interface PaymentPageProps {
  onBack: () => void;
  internship: Internship | null;
}

export default function PaymentPage({ onBack, internship }: PaymentPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    year: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!internship) return;
    const enrollmentData = {
      ...formData,
      internshipId: internship.id,
      internshipTitle: internship.title,
      enrolledAt: new Date().toISOString()
    };

    const webhookUrl = import.meta.env.VITE_ENROLLMENT_WEBHOOK as string | undefined;

    try {
      setLoading(true);
      setErrorMessage(null);

      if (webhookUrl) {
        const resp = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(enrollmentData),
        });

        if (!resp.ok) {
          const text = await resp.text();
          throw new Error(`Webhook error: ${resp.status} ${text}`);
        }
      } else {
        // No webhook configured; log locally
        console.warn('No VITE_ENROLLMENT_WEBHOOK configured. Enrollment data:', enrollmentData);
      }

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        onBack();
      }, 3000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrorMessage(error?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  if (!internship) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Please select a program first</h2>
          <button
            onClick={onBack}
            className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all"
          >
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
          <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Enrollment Successful!</h2>
          <p className="text-slate-600 mb-2">Thank you for enrolling in</p>
          <p className="text-xl font-semibold text-amber-500 mb-6">{internship.title}</p>
          <p className="text-slate-600">We'll contact you shortly with further details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-amber-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Programs
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-8 text-white">
            <h1 className="text-4xl font-bold mb-2">
              Complete Your <span className="text-amber-500">Enrollment</span>
            </h1>
            <p className="text-slate-300 mb-4">
              Program: <span className="font-semibold text-amber-400">{internship.title}</span>
            </p>
            <p className="text-slate-300">Join our program and start your journey to becoming industry-ready!</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Program Details</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Duration</p>
                    <p className="text-lg font-bold text-slate-900">{internship.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Mode</p>
                    <p className="text-lg font-bold text-slate-900">{internship.mode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Category</p>
                    <p className="text-lg font-bold text-slate-900">{internship.category}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">Your Information</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3 text-slate-400" size={20} />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3 text-slate-400" size={20} />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3 text-slate-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3 text-slate-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  College/University
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-3 text-slate-400" size={20} />
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Your institution name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Current Year of Study
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-3 text-slate-400" size={20} />
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-slate-300 focus:border-amber-500 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="graduated">Graduated</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={onBack}
                  className="flex-1 border-2 border-slate-300 text-slate-900 font-bold py-4 rounded-lg hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-amber-500 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Complete Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
