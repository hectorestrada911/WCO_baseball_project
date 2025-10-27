import Link from "next/link";
import { Users, BarChart3, Upload, Trophy, Calendar, Target } from "lucide-react";

export default function HomePage() {
  return (
    <div className="page-container">
      {/* Hero Section with Aztec Calendar Background */}
      <div 
        className="hero-section"
        style={{ backgroundImage: 'url(/aztec_cal.jpg)' }}
      >
        {/* Dark overlay for better text readability */}
        <div className="hero-overlay"></div>
        
        {/* Title overlay */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-red">SDSU</span> Aztecs
          </h1>
          <h2 className="hero-subtitle">
            Baseball Data Platform
          </h2>
        </div>
      </div>

      {/* Content below the hero */}
      <div className="content-section">
        <div className="content-container">
          <div className="content-description">
            <p>
              Advanced analytics and performance tracking for the San Diego State University baseball program. 
              Track player statistics, analyze performance metrics, and make data-driven decisions.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <Users className="stat-icon" />
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Active Players</p>
            </div>
            <div className="stat-card">
              <Trophy className="stat-icon" />
              <h3 className="stat-number">15</h3>
              <p className="stat-label">Games Tracked</p>
            </div>
            <div className="stat-card">
              <Target className="stat-icon" />
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Data Points</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link 
              href="/roster" 
              className="action-button action-button-primary"
            >
              <Users className="action-button-icon" />
              View Roster
            </Link>
            <Link 
              href="/leaderboards" 
              className="action-button action-button-secondary"
            >
              <BarChart3 className="action-button-icon" />
              Performance Stats
            </Link>
            <Link 
              href="/upload" 
              className="action-button action-button-outline"
            >
              <Upload className="action-button-icon" />
              Upload Data
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}