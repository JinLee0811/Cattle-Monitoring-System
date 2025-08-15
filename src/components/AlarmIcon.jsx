import { useState, useEffect } from "react";
import { mockAlarms } from "../utils/mockData";

const AlarmIcon = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Calculate unread alarm count
    const unread = mockAlarms.filter((alarm) => !alarm.resolved).length;
    setUnreadCount(unread);
  }, []);

  const severityColors = {
    high: "text-red-400 bg-red-400/10 border-red-400/20",
    medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    low: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  };

  const severityLabels = {
    high: "High",
    medium: "Medium",
    low: "Low",
  };

  return (
    <div className='relative'>
      {/* Alarm icon */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className='relative p-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors'>
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 00-6 6v3.75a6 6 0 01-6 6h12a6 6 0 01-6-6V9.75a6 6 0 00-6-6z'
          />
        </svg>

        {/* Alarm count badge */}
        {unreadCount > 0 && (
          <span className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold'>
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Alarm dropdown */}
      {showDropdown && (
        <div className='absolute right-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50'>
          <div className='p-4 border-b border-slate-700'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-bold text-white'>Alarms</h3>
              <button
                onClick={() => setShowDropdown(false)}
                className='text-gray-400 hover:text-white'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <p className='text-sm text-gray-400 mt-1'>{unreadCount} unread alarms</p>
          </div>

          <div className='max-h-96 overflow-y-auto'>
            {mockAlarms.length > 0 ? (
              <div className='p-4 space-y-3'>
                {mockAlarms.map((alarm) => (
                  <div
                    key={alarm.id}
                    className={`p-3 rounded-lg border transition-all hover:scale-[1.02] ${
                      alarm.resolved
                        ? "opacity-60 border-slate-600 bg-slate-700/50"
                        : severityColors[alarm.severity]
                    }`}>
                    <div className='flex items-start justify-between'>
                      <div className='flex-1'>
                        <div className='flex items-center space-x-2 mb-1'>
                          <span className='text-sm font-medium'>{alarm.type}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              alarm.resolved
                                ? "bg-slate-600 text-gray-300"
                                : severityColors[alarm.severity]
                            }`}>
                            {severityLabels[alarm.severity]}
                          </span>
                        </div>
                        <p className='text-sm text-gray-300 mb-1'>{alarm.camera}</p>
                        <p className='text-xs text-gray-400'>{alarm.location}</p>
                      </div>
                      <div className='text-right'>
                        <div className='text-xs text-gray-400 mb-1'>
                          {new Date(alarm.timestamp).toLocaleTimeString()}
                        </div>
                        <div className='text-xs text-gray-400'>
                          {new Date(alarm.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {!alarm.resolved && (
                      <div className='mt-3 flex space-x-2'>
                        <button className='text-xs px-2 py-1 bg-farm-green text-white rounded hover:bg-green-600 transition-colors'>
                          Acknowledge
                        </button>
                        <button className='text-xs px-2 py-1 bg-slate-600 text-gray-300 rounded hover:bg-slate-500 transition-colors'>
                          Dismiss
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className='p-8 text-center'>
                <svg
                  className='w-12 h-12 text-gray-500 mx-auto mb-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <p className='text-gray-400'>No alarms</p>
              </div>
            )}
          </div>

          <div className='p-4 border-t border-slate-700'>
            <button className='w-full text-center text-sm text-farm-green hover:text-green-400 transition-colors'>
              View All Alarms
            </button>
          </div>
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {showDropdown && (
        <div className='fixed inset-0 z-40' onClick={() => setShowDropdown(false)} />
      )}
    </div>
  );
};

export default AlarmIcon;
