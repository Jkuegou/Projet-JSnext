import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import { Navbar, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const navigate = useNavigate();

  // Admin user data
  const [admin, setAdmin] = useState({
    name: 'Emon',
    role: 'Super Admin',
    avatar: 'https://via.placeholder.com/50'
  });

  // Statistics data
  const [stats, setStats] = useState({
    totalMembers: 5890,
    newMembers: 2000,
    todayVisitors: 500,
    membershipTarget: 75.55,
    goldMembers: 1260,
    silverMembers: 390,
    platinumMembers: 390
  });

  // Members data
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', membership: 'Gold', joinDate: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', membership: 'Silver', joinDate: '2024-01-14', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', membership: 'Platinum', joinDate: '2024-01-13', status: 'Inactive' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', membership: 'Gold', joinDate: '2024-01-12', status: 'Active' }
  ]);

  // Trainers data
  const [trainers, setTrainers] = useState([
    { id: 1, name: 'Alex Rodriguez', specialty: 'Strength Training', experience: '5 years', status: 'Active', rating: 4.8 },
    { id: 2, name: 'Emma Thompson', specialty: 'Yoga & Pilates', experience: '3 years', status: 'Active', rating: 4.9 },
    { id: 3, name: 'David Chen', specialty: 'HIIT & Cardio', experience: '4 years', status: 'Active', rating: 4.7 },
    { id: 4, name: 'Lisa Brown', specialty: 'Nutrition', experience: '6 years', status: 'Inactive', rating: 4.6 }
  ]);

  // Recent activities
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, type: 'member_join', user: 'John Doe', action: 'joined the gym', time: '2 hours ago', icon: 'fa-user-plus' },
    { id: 2, type: 'workout_complete', user: 'Jane Smith', action: 'completed Push Day workout', time: '3 hours ago', icon: 'fa-dumbbell' },
    { id: 3, type: 'membership_upgrade', user: 'Mike Johnson', action: 'upgraded to Platinum', time: '5 hours ago', icon: 'fa-arrow-up' },
    { id: 4, type: 'trainer_schedule', user: 'Alex Rodriguez', action: 'scheduled new session', time: '1 day ago', icon: 'fa-calendar' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Navigation handlers
  const handleProfile = () => {
    navigate('/profile');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  const handleLogout = () => {
    if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      navigate('/');
    }
  };

  // Modal handlers
  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType('');
  };

  // Overview Dashboard
  const renderOverview = () => (
    <div className="admin-content">
      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card stat-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-2">Current Members</h6>
                  <h3 className="text-primary">{stats.totalMembers.toLocaleString()}</h3>
                  <small className="text-success">+3,840 (26.80%)</small>
                </div>
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card stat-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-2">New Members</h6>
                  <h3 className="text-success">{stats.newMembers.toLocaleString()}</h3>
                  <small className="text-success">+530 (8.38%)</small>
                </div>
                <div className="stat-icon">
                  <i className="fas fa-user-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card stat-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-2">Today Visitor</h6>
                  <h3 className="text-info">{stats.todayVisitors}</h3>
                  <small className="text-success">+530 (8.38%)</small>
                </div>
                <div className="stat-icon">
                  <i className="fas fa-eye"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card stat-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-2">Membership Target</h6>
                  <h3 className="text-warning">{stats.membershipTarget}%</h3>
                  <small className="text-muted">It's higher than yesterday</small>
                </div>
                <div className="stat-icon">
                  <i className="fas fa-target"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-8 mb-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Membership Status Report</h5>
              <div className="membership-legend">
                <span className="legend-item"><span className="legend-color gold"></span> Gold: {stats.goldMembers}</span>
                <span className="legend-item"><span className="legend-color silver"></span> Silver: {stats.silverMembers}</span>
                <span className="legend-item"><span className="legend-color platinum"></span> Platinum: {stats.platinumMembers}</span>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-placeholder">
                <i className="fas fa-chart-line fa-3x mb-3 text-muted"></i>
                <p className="text-muted">Membership Status Chart</p>
                <div className="membership-chart">
                  <div className="chart-bar">
                    <div className="bar gold" style={{height: '80%'}}></div>
                    <label>Gold</label>
                  </div>
                  <div className="chart-bar">
                    <div className="bar silver" style={{height: '60%'}}></div>
                    <label>Silver</label>
                  </div>
                  <div className="chart-bar">
                    <div className="bar platinum" style={{height: '70%'}}></div>
                    <label>Platinum</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Member Activity</h5>
            </div>
            <div className="card-body">
              <div className="activity-chart">
                <div className="circular-progress">
                  <div className="progress-ring">
                    <div className="progress-value">90%</div>
                  </div>
                </div>
                <div className="activity-legend mt-3">
                  <div className="legend-item">
                    <span className="legend-dot morning"></span>
                    <span>08:00-10:00</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot afternoon"></span>
                    <span>10:00-14:00</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot evening"></span>
                    <span>14:00-18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mb-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Activities</h5>
              <button className="btn btn-sm btn-outline-primary">View All</button>
            </div>
            <div className="card-body">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item d-flex align-items-center mb-3">
                  <div className="activity-icon me-3">
                    <i className={`fas ${activity.icon}`}></i>
                  </div>
                  <div className="flex-grow-1">
                    <strong>{activity.user}</strong> {activity.action}
                    <div className="text-muted small">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={() => handleShowModal('member')}>
                  <i className="fas fa-user-plus me-2"></i>Add New Member
                </button>
                <button className="btn btn-success" onClick={() => handleShowModal('trainer')}>
                  <i className="fas fa-user-tie me-2"></i>Add Trainer
                </button>
                <button className="btn btn-info" onClick={() => handleShowModal('workout')}>
                  <i className="fas fa-dumbbell me-2"></i>Create Workout Plan
                </button>
                <button className="btn btn-warning" onClick={() => handleShowModal('report')}>
                  <i className="fas fa-chart-bar me-2"></i>Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Members Management
  const renderMembers = () => (
    <div className="admin-content">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Members Management</h5>
          <button className="btn btn-primary" onClick={() => handleShowModal('member')}>
            <i className="fas fa-plus me-2"></i>Add Member
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Membership</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map(member => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>
                      <span className={`badge bg-${member.membership === 'Gold' ? 'warning' : member.membership === 'Silver' ? 'secondary' : 'primary'}`}>
                        {member.membership}
                      </span>
                    </td>
                    <td>{member.joinDate}</td>
                    <td>
                      <span className={`badge bg-${member.status === 'Active' ? 'success' : 'danger'}`}>
                        {member.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // Trainers Management
  const renderTrainers = () => (
    <div className="admin-content">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Trainers Management</h5>
          <button className="btn btn-primary" onClick={() => handleShowModal('trainer')}>
            <i className="fas fa-plus me-2"></i>Add Trainer
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Specialty</th>
                  <th>Experience</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainers.map(trainer => (
                  <tr key={trainer.id}>
                    <td>{trainer.name}</td>
                    <td>{trainer.specialty}</td>
                    <td>{trainer.experience}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="me-1">{trainer.rating}</span>
                        <i className="fas fa-star text-warning"></i>
                      </div>
                    </td>
                    <td>
                      <span className={`badge bg-${trainer.status === 'Active' ? 'success' : 'danger'}`}>
                        {trainer.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return renderOverview();
      case 'members':
        return renderMembers();
      case 'trainers':
        return renderTrainers();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="admin-container">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <div className="container-fluid">
          <Navbar.Brand href="#" className="navbar-brand">
            <i className="fas fa-cog me-2"></i>
            JuniorFitness Admin
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <span className="d-flex align-items-center">
                  <img 
                    src={admin.avatar} 
                    alt="Avatar" 
                    className="rounded-circle me-2" 
                    width="30" 
                    height="30" 
                  />
                  {admin.name}
                </span>
              }
              id="user-dropdown"
              align="end"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={handleProfile}>
                <i className="fas fa-user me-2"></i>Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleSettings}>
                <i className="fas fa-cog me-2"></i>Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                <i className="fas fa-sign-out-alt me-2"></i>Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 sidebar">
            <div className="sidebar-content">
              {/* Logo Section */}
              <div className="sidebar-logo">
                <div className="logo-container">
                  <i className="fas fa-dumbbell logo-icon"></i>
                  <span className="logo-text">JuniorFitness</span>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="sidebar-nav">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('overview');
                      }}
                    >
                      <i className="fas fa-tachometer-alt me-2"></i>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'members' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('members');
                      }}
                    >
                      <i className="fas fa-users me-2"></i>
                      Member
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('workouts');
                      }}
                    >
                      <i className="fas fa-dumbbell me-2"></i>
                      Workout Routine
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'diet' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('diet');
                      }}
                    >
                      <i className="fas fa-utensils me-2"></i>
                      Diet Chart
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'batch' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('batch');
                      }}
                    >
                      <i className="fas fa-calendar-alt me-2"></i>
                      Batch Schedule
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'trainers' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('trainers');
                      }}
                    >
                      <i className="fas fa-user-tie me-2"></i>
                      Trainer List
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'billing' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('billing');
                      }}
                    >
                      <i className="fas fa-receipt me-2"></i>
                      Billing List
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'reports' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('reports');
                      }}
                    >
                      <i className="fas fa-chart-bar me-2"></i>
                      Report
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('settings');
                      }}
                    >
                      <i className="fas fa-cog me-2"></i>
                      Setting
                    </a>
                  </li>
                </ul>
              </div>

              {/* User Section at Bottom */}
              <div className="sidebar-user">
                <div className="upgrade-section mb-3">
                  <div className="upgrade-badge">
                    <span className="upgrade-text">Upgrade to</span>
                    <span className="pro-badge">PRO</span>
                  </div>
                  <div className="upgrade-info">
                    <div className="upgrade-title">Basic</div>
                    <div className="upgrade-days">21 Days Left</div>
                    <button className="btn btn-upgrade btn-sm">Upgrade Plan</button>
                  </div>
                </div>
                
                <div className="user-profile">
                  <div className="d-flex align-items-center mb-2">
                    <img 
                      src={admin.avatar} 
                      alt="Avatar" 
                      className="user-avatar me-2" 
                    />
                    <div className="user-info">
                      <div className="user-name">{admin.name}</div>
                      <div className="user-role">Super Admin</div>
                    </div>
                  </div>
                  <button className="btn btn-logout" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt me-2"></i>
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 main-content">
            <div className="content-header">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2>Welcome back, {admin.name}!</h2>
                  <p className="text-muted">
                    {currentTime.toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="admin-badge me-3">
                    <i className="fas fa-shield-alt text-primary me-1"></i>
                    <span>{admin.role}</span>
                  </div>
                  <button className="btn btn-outline-light">
                    <i className="fas fa-bell"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Content */}
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'member' && 'Add New Member'}
            {modalType === 'trainer' && 'Add New Trainer'}
            {modalType === 'workout' && 'Create Workout Plan'}
            {modalType === 'report' && 'Generate Report'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {modalType === 'member' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Membership Type</Form.Label>
                  <Form.Select>
                    <option>Select membership</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                  </Form.Select>
                </Form.Group>
              </>
            )}
            {modalType === 'trainer' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Specialty</Form.Label>
                  <Form.Control type="text" placeholder="Enter specialty" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control type="text" placeholder="Enter experience" />
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPage;