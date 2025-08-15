import { useState, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import LogPanel from "../components/LogPanel";
import { mockCameras, mockSystemStatus } from "../utils/mockData";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCamera, setSelectedCamera] = useState(1);

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-AU", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  };

  return (
    <div className='min-h-screen bg-slate-900'>
      {/* Header */}
      <header className='bg-slate-800 border-b border-slate-700 px-6 py-4 ml-64'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-white'>Smart Farm Monitoring Dashboard</h1>
            <p className='text-gray-400 text-sm'>
              {formatDate(currentTime)} • {formatTime(currentTime)}
            </p>
          </div>
          <div className='flex items-center space-x-4'>
            {/* System status display */}
            <div className='flex items-center space-x-2 text-sm text-gray-300'>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
              <span>System Normal</span>
            </div>
          </div>
        </div>
      </header>

      <div className='flex'>
        {/* Main content */}
        <main className='flex-1 ml-64 p-6'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* Main video player */}
            <div className='lg:col-span-2'>
              <div className='bg-slate-800 rounded-lg p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <h2 className='text-xl font-bold text-white'>Real-time Monitoring</h2>
                  <div className='flex items-center space-x-2'>
                    <span className='text-sm text-gray-400'>Select Camera:</span>
                    <select
                      value={selectedCamera}
                      onChange={(e) => setSelectedCamera(Number(e.target.value))}
                      className='bg-slate-700 border border-slate-600 rounded px-3 py-1 text-white text-sm focus:outline-none focus:border-farm-green'>
                      {mockCameras.map((camera) => (
                        <option key={camera.id} value={camera.id}>
                          {camera.name} - {camera.location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='aspect-video bg-black rounded-lg overflow-hidden'>
                  <VideoPlayer
                    videoUrl='https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
                    cameraName={
                      mockCameras.find((c) => c.id === selectedCamera)?.name || "Camera 1"
                    }
                    location={
                      mockCameras.find((c) => c.id === selectedCamera)?.location || "Barn A"
                    }
                    isLive={true}
                  />
                </div>
              </div>
            </div>

            {/* System status cards */}
            <div className='space-y-6'>
              {/* Camera status */}
              <div className='bg-slate-800 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-white mb-4'>Camera Status</h3>
                <div className='space-y-3'>
                  {mockCameras.map((camera) => (
                    <div
                      key={camera.id}
                      className={`p-3 rounded-lg border ${
                        camera.status === "online"
                          ? "border-green-500/20 bg-green-500/10"
                          : "border-red-500/20 bg-red-500/10"
                      }`}>
                      <div className='flex items-center justify-between'>
                        <div>
                          <p className='text-sm font-medium text-white'>{camera.name}</p>
                          <p className='text-xs text-gray-400'>{camera.location}</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              camera.status === "online" ? "bg-green-400" : "bg-red-400"
                            }`}></div>
                          <span className='text-xs text-gray-400'>{camera.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System resources */}
              <div className='bg-slate-800 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-white mb-4'>System Resources</h3>
                <div className='space-y-4'>
                  <div>
                    <div className='flex justify-between text-sm mb-1'>
                      <span className='text-gray-400'>CPU Usage</span>
                      <span className='text-white'>{mockSystemStatus.cpuUsage}</span>
                    </div>
                    <div className='w-full bg-slate-700 rounded-full h-2'>
                      <div
                        className='bg-farm-green h-2 rounded-full transition-all'
                        style={{ width: mockSystemStatus.cpuUsage }}></div>
                    </div>
                  </div>

                  <div>
                    <div className='flex justify-between text-sm mb-1'>
                      <span className='text-gray-400'>Memory Usage</span>
                      <span className='text-white'>{mockSystemStatus.memoryUsage}</span>
                    </div>
                    <div className='w-full bg-slate-700 rounded-full h-2'>
                      <div
                        className='bg-blue-500 h-2 rounded-full transition-all'
                        style={{ width: mockSystemStatus.memoryUsage }}></div>
                    </div>
                  </div>

                  <div>
                    <div className='flex justify-between text-sm mb-1'>
                      <span className='text-gray-400'>Storage</span>
                      <span className='text-white'>
                        {mockSystemStatus.usedStorage} / {mockSystemStatus.totalStorage}
                      </span>
                    </div>
                    <div className='w-full bg-slate-700 rounded-full h-2'>
                      <div
                        className='bg-yellow-500 h-2 rounded-full transition-all'
                        style={{ width: "72%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Log panel */}
          <div className='mt-6'>
            <LogPanel />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
