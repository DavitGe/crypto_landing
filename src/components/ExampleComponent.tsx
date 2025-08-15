import React from 'react';
import './ExampleComponent.scss';

interface ExampleComponentProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  description,
  variant = 'primary',
  onClick
}) => {
  return (
    <div className="example-component">
      <div className="example-header">
        <h3 className="example-title">{title}</h3>
        <div className="example-badge">NEW</div>
      </div>
      
      <p className="example-description">{description}</p>
      
      <div className="example-actions">
        <button 
          className={`btn btn-${variant}`}
          onClick={onClick}
        >
          Action Button
        </button>
        
        <div className="example-stats">
          <div className="stat">
            <span className="stat-value">42</span>
            <span className="stat-label">Users</span>
          </div>
          <div className="stat">
            <span className="stat-value">1.2M</span>
            <span className="stat-label">Volume</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent; 