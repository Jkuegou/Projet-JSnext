import React from 'react';

// Layout simplifié sans sidebar - pour utiliser avec le Dashboard qui a sa propre sidebar
const layoutStyles = `
  .layout-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .layout-content {
    min-height: 100vh;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <style>{layoutStyles}</style>
      <div className="layout-container">
        <div className="layout-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;