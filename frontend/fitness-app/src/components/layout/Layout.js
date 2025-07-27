import React, { useState } from 'react';
import { Menu, X, Home, Activity, TrendingUp, Calendar, Users, User, Settings, Trophy, Target, Heart } from 'lucide-react';

// Layout.css styles intégrés
const layoutStyles = `
  .layout-container {
    display: flex;
    min-height: 100vh;
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .main-content {
    flex: 1;
    margin-left: 280px;
    transition: margin-left 0.3s ease;
  }

  .main-content.sidebar-collapsed {
    margin-left: 80px;
  }

  .header {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header-title {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .header-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .notification-badge {
    background: #ff6b6b;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .content-area {
    padding: 2rem;
    min-height: calc(100vh - 80px);
  }

  @media (max-width: 768px) {
    .main-content {
      margin-left: 0;
    }
    
    .main-content.sidebar-collapsed {
      margin-left: 0;
    }
  }
`;

// Sidebar.js component intégré
const Sidebar = ({ collapsed, onToggle }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, color: '#4ade80' },
    { id: 'workouts', label: 'Entraînements', icon: Activity, color: '#f59e0b' },
    { id: 'progress', label: 'Progression', icon: TrendingUp, color: '#3b82f6' },
    { id: 'calendar', label: 'Calendrier', icon: Calendar, color: '#8b5cf6' },
    { id: 'challenges', label: 'Défis', icon: Trophy, color: '#ef4444' },
    { id: 'goals', label: 'Objectifs', icon: Target, color: '#06b6d4' },
    { id: 'community', label: 'Communauté', icon: Users, color: '#ec4899' },
    { id: 'health', label: 'Santé', icon: Heart, color: '#f97316' }
  ];

  const sidebarStyles = `
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: ${collapsed ? '80px' : '280px'};
      background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      transition: width 0.3s ease;
      z-index: 1000;
      backdrop-filter: blur(10px);
      overflow-y: auto;
      overflow-x: hidden;
    }

    .sidebar-header {
      padding: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .logo {
      width: 40px;
      height: 40px;
      background: linear-gradient(45deg, #4ade80, #06b6d4);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .logo-text {
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      opacity: ${collapsed ? '0' : '1'};
      transition: opacity 0.3s ease;
    }

    .toggle-btn {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
      padding: 0.5rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-left: auto;
    }

    .toggle-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }

    .sidebar-menu {
      padding: 1rem 0;
    }

    .menu-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 1.5rem;
      margin: 0.25rem 1rem;
      border-radius: 12px;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
      font-weight: 500;
      position: relative;
      overflow: hidden;
    }

    .menu-item:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      transform: translateX(4px);
    }

    .menu-item.active {
      background: linear-gradient(45deg, rgba(74, 222, 128, 0.2), rgba(6, 182, 212, 0.2));
      color: white;
      box-shadow: 0 4px 12px rgba(74, 222, 128, 0.3);
    }

    .menu-item.active::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: linear-gradient(180deg, #4ade80, #06b6d4);
    }

    .menu-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .menu-label {
      opacity: ${collapsed ? '0' : '1'};
      transition: opacity 0.3s ease;
      white-space: nowrap;
    }

    .sidebar-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .user-profile:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(45deg, #f59e0b, #ef4444);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }

    .user-info {
      opacity: ${collapsed ? '0' : '1'};
      transition: opacity 0.3s ease;
    }

    .user-name {
      color: white;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .user-status {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.8rem;
    }

    @media (max-width: 768px) {
      .sidebar {
        transform: translateX(${collapsed ? '-100%' : '0'});
        width: 280px;
      }
    }
  `;

  return (
    <>
      <style>{sidebarStyles}</style>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">SF</div>
          <div className="logo-text">StrengthMax</div>
          <button className="toggle-btn" onClick={onToggle}>
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon className="menu-icon" style={{ color: item.color }} />
                <span className="menu-label">{item.label}</span>
              </div>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">JD</div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-status">En ligne</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Layout.js component principal
const Layout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <>
      <style>{layoutStyles}</style>
      <div className="layout-container">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
          <header className="header">
            <h1 className="header-title">Dashboard</h1>
            <div className="header-actions">
              <div className="notification-badge">3</div>
              <button 
                className="toggle-btn"
                onClick={toggleSidebar}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  border: 'none', 
                  color: 'white', 
                  padding: '0.5rem', 
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                <Settings size={20} />
              </button>
            </div>
          </header>

          <div className="content-area">
            {children || (
              <div style={{ 
                color: 'white', 
                textAlign: 'center', 
                padding: '4rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <Activity size={64} style={{ color: '#4ade80', marginBottom: '1rem' }} />
                <h2 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: '700' }}>
                  Bienvenue sur StrengthMax
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>
                  Votre application de fitness et planification d'entraînement
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;