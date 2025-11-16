"use client";

import React from 'react';

const iframeStyles: React.CSSProperties = {
  width: '100%',
  minHeight: '620px',
  border: '0',
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: '0 40px 80px rgba(15, 23, 42, 0.35)'
};

const containerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2.5rem',
  background: 'radial-gradient(circle at top, rgba(99,102,241,0.25), transparent 55%)'
};

const ArcadeQuestHubPreview: React.FC = () => {
  return (
    <div style={containerStyles}>
      <iframe
        src="https://expo.dev/@arcadekit/quest-hub?serviceType=classic&preview=true"
        title="Arcade Quest Hub"
        style={iframeStyles}
        allow="camera; microphone; clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default ArcadeQuestHubPreview;
