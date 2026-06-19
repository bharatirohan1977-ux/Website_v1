import { useState, useEffect } from 'react';

export default function GithubSetup() {
  const [email, setEmail] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get('email');

    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new URLSearchParams();

    formData.append('type', 'githubUpdate');
    formData.append('email', email);
    formData.append('githubUsername', githubUsername);

    await fetch('YOUR_APPS_SCRIPT_URL', {
      method: 'POST',
      body: formData
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">
            Thank You 🎉
          </h1>
          <p>
            Your GitHub username has been submitted successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          GitHub Setup
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Submit your GitHub username to access your learning repository.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              readOnly
              className="w-full border rounded-lg px-4 py-3 bg-slate-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              GitHub Username
            </label>

            <input
              type="text"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              placeholder="john123"
              required
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}