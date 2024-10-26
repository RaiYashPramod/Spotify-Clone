import React from 'react';

interface TabProps {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const Tabs: React.FC<TabProps> = ({ selectedTab, onSelectTab }) => {
  return (
    <div className="flex gap-4 py-4">
      <button
        className={`font-semibold text-xl ${selectedTab === 'forYou' ? 'text-white' : 'text-white/60'}`}
        onClick={() => onSelectTab('forYou')}
      >
        For You
      </button>
      <button
        className={`font-semibold text-xl ${selectedTab === 'topPicks' ? 'text-white' : 'text-white/60'}`}
        onClick={() => onSelectTab('topPicks')}
      >
        Top Picks
      </button>
    </div>
  );
};

export default Tabs;
