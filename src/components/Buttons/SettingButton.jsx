import React from 'react';
import '../../styles/Button.css'

export function SettingButton({ onClick }) {
  return (
    <button className="setting-button" onClick={onClick}>
      <svg
        className="setting-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.14,12.94a7.14,7.14,0,0,0,0-1.88l2-1.56a.5.5,0,0,0,.12-.66l-2-3.46a.5.5,0,0,0-.61-.22l-2.35,1a6.93,6.93,0,0,0-1.62-.94L14,2.5a.5.5,0,0,0-.5-.5H10.5a.5.5,0,0,0-.5.5L9.32,5.18a6.93,6.93,0,0,0-1.62.94l-2.35-1a.5.5,0,0,0-.61.22l-2,3.46a.5.5,0,0,0,.12.66l2,1.56a7.14,7.14,0,0,0,0,1.88l-2,1.56a.5.5,0,0,0-.12.66l2,3.46a.5.5,0,0,0,.61.22l2.35-1a6.93,6.93,0,0,0,1.62.94L10,21.5a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5l.18-2.68a6.93,6.93,0,0,0,1.62-.94l2.35,1a.5.5,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.66ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
    </button>
  );
}
