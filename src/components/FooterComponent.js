import React from 'react';

const FooterComponent = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer className="footer">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p>&reg; {currentDate}</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
