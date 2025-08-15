# Smart Farm Monitoring Dashboard

A frontend prototype for a smart farm surveillance dashboard built with React + Tailwind CSS + Vite.

## 🚀 Key Features

- **Real-time Monitoring**: Simulate live CCTV view using uploaded videos
- **Multi-Camera View**: Monitor multiple cameras simultaneously
- **AI Analysis**: Video upload and AI detection result simulation
- **System Logs**: Real-time system status and detection logs
- **Alarm System**: Anomaly notifications and management
- **Responsive Design**: Mobile and desktop support
- **Professional Login**: Administrator dashboard access

## 🛠️ Tech Stack

- **React 18** - User Interface
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **React Router** - Page routing
- **JavaScript (ES6+)** - Programming language
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Sidebar.jsx     # Vertical navigation
│   ├── VideoPlayer.jsx # Video player with controls
│   ├── LogPanel.jsx    # System logs panel
│   └── AlarmIcon.jsx   # Alarm notifications
├── pages/              # Page components
│   ├── Dashboard.jsx   # Main dashboard
│   ├── Monitor.jsx     # Multi-camera view
│   ├── Analyze.jsx     # AI analysis page
│   └── Login.jsx       # Administrator login
├── hooks/              # Custom hooks
│   └── useAuth.js      # Authentication logic
├── utils/              # Utilities
│   └── mockData.js     # Mock data for simulation
├── App.jsx             # Main app component
└── main.jsx            # React entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn

### Installation & Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Access the application**
   - Navigate to http://localhost:5174 (or the port shown in terminal)
   - Demo access: Password `0000`

## 📱 Usage Guide

### Login

- **Password**: `0000` (Demo access)
- Simple administrator login interface
- No username required for demo

### Dashboard

- Real-time video monitoring simulation
- System status overview
- Live log monitoring
- Camera status indicators

### Monitor

- Multi-camera simultaneous monitoring
- Layout options (Grid, Quad, Single view)
- Camera expand/collapse functionality
- Real-time status indicators

### Analyze

- Video file upload (drag & drop supported)
- AI analysis simulation
- Detection results and recommendations
- Progress tracking during analysis

## 🎨 Design Features

- **Dark Theme**: Optimized for CCTV monitoring
- **Real-time Feel**: Animations and status indicators
- **Mobile-First**: Responsive design for all devices
- **Professional UI**: Clean, modern interface
- **Accessibility**: Keyboard navigation support

## 🔧 Development Info

### Mock Data

All data is managed in `src/utils/mockData.js`:

- Camera status information
- System logs and events
- Alarm notifications
- System resource metrics

### Future Backend Integration

- **API Endpoints**: `/api/upload`, `/api/logs`, etc.
- **Real-time Communication**: WebSocket or Server-Sent Events
- **AI Model Integration**: External AI service connection
- **Video Processing**: Real video stream handling

## 🌟 Key Components

### VideoPlayer

- Play/pause controls
- Volume adjustment
- Progress bar
- Camera information overlay
- LIVE indicator

### LogPanel

- Real-time log filtering
- Severity-based categorization
- Search functionality
- Log statistics

### AlarmIcon

- Unread alarm count
- Dropdown notifications
- Acknowledge/dismiss actions
- Severity indicators

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions about this project, please create an issue.

---

**Note**: This is a frontend prototype for demonstration purposes. All data is simulated using mock data.
