import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PortfolioTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredTab, setHoveredTab] = useState(null);
  const [activeTab, setActiveTab] = useState('longplay');

  const tabs = [
    { id: 'music', label: 'MUSIC', path: '/music' },
    // { id: 'tour', label: 'TOUR', path: '/tour' },
    { id: 'prints', label: 'PRINTS', path: '/prints' },
    { id: 'merch', label: 'MERCH', path: '/merch' }, 
  ];

  const tabs2 = [
    { id: 'longplay', label: 'LIVE AT LONGPLAY', path: '/longplay' }
  ];

  // Sync active tab with current URL
  useEffect(() => {
    const allTabs = [...tabs, ...tabs2];
    const currentTab = allTabs.find(tab => tab.path === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);

  const handleTabClick = (tabId, path) => {
    setActiveTab(tabId);
    navigate(path);
  };

  return (
    <div className='column' style={{alignItems:"center"}}>
      <div className="w-full">
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
                style={{ 
                  backgroundColor: showBlue ? 'black' : 'white', 
                  border: "none", 
                  color: showBlue ? 'white' : 'black' 
                }}
                className={`text-lg font-bold tracking-wide px-4 py-2 transition-all duration-200 uppercase`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="w-full" style={{paddingBottom: "20px"}}>
        <nav className="flex flex-wrap justify-center gap-6 px-4 py-6">
          {tabs2.map((tab) => {
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;
            const showBlue = isActive || isHovered;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.path)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                style={{ 
                  backgroundColor: showBlue ? 'black' : 'white', 
                  border: "none", 
                  color: showBlue ? 'white' : 'black' 
                }}
                className={`text-lg font-bold tracking-wide px-4 py-2 transition-all duration-200 uppercase`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}