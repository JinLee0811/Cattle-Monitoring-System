import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Simple password check - just "0000"
      if (password === "0000") {
        const result = await login({ username: "admin", password: "0000" });
        if (result.success) {
          navigate("/");
        } else {
          setError(result.error);
        }
      } else {
        setError("Invalid password. Please enter 0000.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='min-h-screen bg-slate-900 flex items-center justify-center p-4'>
      <div className='max-w-md w-full'>
        {/* Logo and title */}
        <div className='text-center mb-8'>
          <div className='w-12 h-12 bg-farm-green rounded-lg flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          </div>
          <h1 className='text-2xl font-bold text-white mb-2'>Smart Farm</h1>
          <p className='text-gray-400 text-sm'>Administrator Access</p>
        </div>

        {/* Login form */}
        <div className='bg-slate-800 rounded-lg p-8 shadow-xl border border-slate-700'>
          <div className='mb-6'>
            <h2 className='text-xl font-bold text-white mb-2'>Dashboard Login</h2>
            <p className='text-gray-400 text-sm'>
              Enter your password to access the monitoring dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            {error && (
              <div className='bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg'>
                {error}
              </div>
            )}

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-300 mb-2'>
                Administrator Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-farm-green transition-colors text-center text-lg font-mono'
                placeholder='Enter 0000'
                autoFocus
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full bg-farm-green text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-farm-green focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
              {loading ? (
                <div className='flex items-center justify-center space-x-2'>
                  <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  <span>Accessing Dashboard...</span>
                </div>
              ) : (
                "Access Dashboard"
              )}
            </button>
          </form>

          {/* Instructions */}
          <div className='mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600'>
            <div className='flex items-center space-x-2 mb-2'>
              <svg
                className='w-4 h-4 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <h3 className='text-sm font-medium text-gray-300'>Quick Access</h3>
            </div>
            <div className='text-xs text-gray-400 space-y-1'>
              <p>
                • Password: <span className='font-mono text-farm-green'>0000</span>
              </p>
              <p>• This is a demo system for testing purposes</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center mt-8'>
          <p className='text-sm text-gray-500'>
            © 2024 Smart Farm Monitoring System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
