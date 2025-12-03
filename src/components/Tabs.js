import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PortfolioTabs() {
   const navigate = useNavigate();
  const location = useLocation();
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    { id: 'music', label: 'MUSIC', path: '/music' },
    { id: 'tour', label: 'TOUR DATES', path: '/tour' },
    { id: 'prints', label: 'PRINTS', path: '/prints' },
    { id: 'merch', label: 'MERCH', path: '/merch' }
  ];

 const handleTabClick = (path) => {
    navigate(path);
  };

  // Derive active tab from current URL
  const activeTab = tabs.find(tab => tab.path === location.pathname)?.id || 'music';
  return (
    <div className="w-full" style={{paddingBottom: "25px"}}>
      <nav className="flex flex-wrap justify-center gap-6 px-4 py-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isHovered = hoveredTab === tab.id;
          const showBlue = isActive || isHovered;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.path)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              style={{ backgroundColor: showBlue ? '#00bdff' : 'white', border: "none", color: "black" }}
              className={`text-lg font-bold tracking-wide px-4 py-2 transition-all duration-200 uppercase`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}