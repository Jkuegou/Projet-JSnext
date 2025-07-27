import React, { useState, useEffect } from 'react';
import './Community.css';

const Community = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://via.placeholder.com/40',
        level: 'Advanced',
        streak: 15
      },
      content: 'Just completed my first marathon! 🏃‍♀️ The training was tough but so worth it. Thanks to everyone who supported me!',
      image: 'https://via.placeholder.com/500x300',
      likes: 24,
      comments: 8,
      timestamp: '2 hours ago',
      type: 'achievement'
    },
    {
      id: 2,
      user: {
        name: 'Mike Chen',
        avatar: 'https://via.placeholder.com/40',
        level: 'Intermediate',
        streak: 8
      },
      content: 'New personal record on bench press! 💪 Finally hit 100kg. The consistency is paying off.',
      likes: 18,
      comments: 5,
      timestamp: '4 hours ago',
      type: 'achievement'
    },
    {
      id: 3,
      user: {
        name: 'Emma Davis',
        avatar: 'https://via.placeholder.com/40',
        level: 'Beginner',
        streak: 3
      },
      content: 'Looking for a workout buddy in Paris! Anyone interested in morning runs in the park? 🌅',
      likes: 12,
      comments: 15,
      timestamp: '6 hours ago',
      type: 'question'
    },
    {
      id: 4,
      user: {
        name: 'Alex Rodriguez',
        avatar: 'https://via.placeholder.com/40',
        level: 'Advanced',
        streak: 22
      },
      content: 'Quick tip: Don\'t forget to stretch after your workouts! It makes a huge difference in recovery time.',
      likes: 35,
      comments: 12,
      timestamp: '1 day ago',
      type: 'tip'
    }
  ]);

  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: '30-Day Plank Challenge',
      description: 'Hold a plank for 5 minutes by the end of the month',
      participants: 156,
      daysLeft: 12,
      difficulty: 'Medium',
      joined: true
    },
    {
      id: 2,
      title: 'January Running Goal',
      description: 'Run 100km this month',
      participants: 89,
      daysLeft: 8,
      difficulty: 'Hard',
      joined: false
    },
    {
      id: 3,
      title: 'Morning Yoga Streak',
      description: 'Practice yoga every morning for 21 days',
      participants: 203,
      daysLeft: 18,
      difficulty: 'Easy',
      joined: true
    }
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: 'Sophie Martin', points: 2450, avatar: 'https://via.placeholder.com/30' },
    { rank: 2, name: 'David Wilson', points: 2380, avatar: 'https://via.placeholder.com/30' },
    { rank: 3, name: 'Lisa Zhang', points: 2245, avatar: 'https://via.placeholder.com/30' },
    { rank: 4, name: 'John Doe', points: 2120, avatar: 'https://via.placeholder.com/30' },
    { rank: 5, name: 'Maria Garcia', points: 2050, avatar: 'https://via.placeholder.com/30' }
  ]);

  const [newPost, setNewPost] = useState('');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleJoinChallenge = (challengeId) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === challengeId ? { ...challenge, joined: !challenge.joined } : challenge
    ));
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        user: {
          name: 'John Doe',
          avatar: 'https://via.placeholder.com/40',
          level: 'Intermediate',
          streak: 7
        },
        content: newPost,
        likes: 0,
        comments: 0,
        timestamp: 'Just now',
        type: 'general'
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.type === activeFilter);

  const getPostTypeIcon = (type) => {
    switch(type) {
      case 'achievement': return 'fas fa-trophy';
      case 'question': return 'fas fa-question-circle';
      case 'tip': return 'fas fa-lightbulb';
      default: return 'fas fa-comment';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <div className="community-container">
      <div className="community-header">
        <h2>Community</h2>
        <p className="text-muted">Connect with fellow fitness enthusiasts</p>
      </div>

      <div className="row">
        {/* Main Feed */}
        <div className="col-md-8">
          {/* Create Post */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex">
                <img src="https://via.placeholder.com/40" alt="Your avatar" className="rounded-circle me-3" />
                <div className="flex-grow-1">
                  <textarea
                    className="form-control mb-2"
                    rows="3"
                    placeholder="Share your fitness journey..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="post-options">
                      <button className="btn btn-outline-secondary btn-sm me-2">
                        <i className="fas fa-image me-1"></i>Photo
                      </button>
                      <button className="btn btn-outline-secondary btn-sm me-2">
                        <i className="fas fa-chart-line me-1"></i>Progress
                      </button>
                    </div>
                    <button 
                      className="btn btn-primary"
                      onClick={handlePostSubmit}
                      disabled={!newPost.trim()}
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feed Filters */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="feed-filters">
                <button 
                  className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                  onClick={() => handleFilterChange('all')}
                >
                  All Posts
                </button>
                <button 
                  className={`btn ${activeFilter === 'achievement' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                  onClick={() => handleFilterChange('achievement')}
                >
                  <i className="fas fa-trophy me-1"></i>Achievements
                </button>
                <button 
                  className={`btn ${activeFilter === 'question' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                  onClick={() => handleFilterChange('question')}
                >
                  <i className="fas fa-question-circle me-1"></i>Questions
                </button>
                <button 
                  className={`btn ${activeFilter === 'tip' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => handleFilterChange('tip')}
                >
                  <i className="fas fa-lightbulb me-1"></i>Tips
                </button>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="posts-feed">
            {filteredPosts.map(post => (
              <div key={post.id} className="card mb-4 post-card">
                <div className="card-body">
                  <div className="post-header d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <img src={post.user.avatar} alt={post.user.name} className="rounded-circle me-3" />
                      <div>
                        <h6 className="mb-0">{post.user.name}</h6>
                        <small className="text-muted">
                          {post.user.level} • {post.user.streak} day streak • {post.timestamp}
                        </small>
                      </div>
                    </div>
                    <div className="post-type">
                      <i className={`${getPostTypeIcon(post.type)} text-primary`}></i>
                    </div>
                  </div>
                  
                  <p className="post-content">{post.content}</p>
                  
                  {post.image && (
                    <img src={post.image} alt="Post content" className="post-image mb-3" />
                  )}
                  
                  <div className="post-actions d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <button 
                        className="btn btn-outline-primary btn-sm me-2"
                        onClick={() => handleLike(post.id)}
                      >
                        <i className="fas fa-heart me-1"></i>{post.likes}
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="fas fa-comment me-1"></i>{post.comments}
                      </button>
                    </div>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="fas fa-share"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-4">
          {/* Active Challenges */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Active Challenges</h5>
            </div>
            <div className="card-body">
              {challenges.map(challenge => (
                <div key={challenge.id} className="challenge-item mb-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="mb-0">{challenge.title}</h6>
                    <span className={`badge bg-${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  <p className="text-muted small mb-2">{challenge.description}</p>
                  <div className="challenge-meta mb-2">
                    <small className="text-muted">
                      <i className="fas fa-users me-1"></i>{challenge.participants} participants
                    </small>
                    <small className="text-muted ms-3">
                      <i className="fas fa-clock me-1"></i>{challenge.daysLeft} days left
                    </small>
                  </div>
                  <button 
                    className={`btn btn-sm ${challenge.joined ? 'btn-success' : 'btn-outline-primary'} w-100`}
                    onClick={() => handleJoinChallenge(challenge.id)}
                  >
                    {challenge.joined ? 'Joined' : 'Join Challenge'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Weekly Leaderboard</h5>
            </div>
            <div className="card-body">
              {leaderboard.map(user => (
                <div key={user.rank} className="leaderboard-item d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <div className={`rank-badge ${user.rank <= 3 ? 'top-rank' : ''}`}>
                      {user.rank}
                    </div>
                    <img src={user.avatar} alt={user.name} className="rounded-circle me-2" width="30" />
                    <span className={user.name === 'John Doe' ? 'fw-bold' : ''}>{user.name}</span>
                  </div>
                  <div className="points">
                    <span className="text-primary fw-bold">{user.points}</span>
                    <small className="text-muted ms-1">pts</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;