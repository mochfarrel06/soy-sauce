import React from 'react';

function SectionHeader({ children }) {
  return (
    <div className="bg-white shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="lg:container">
        <div className="px-6 py-4 overflow-hidden lg:py-5">{children}</div>
      </div>
    </div>
  );
}

export default SectionHeader;
