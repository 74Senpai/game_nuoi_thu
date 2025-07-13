import '../styles/SettingCard.css';

export function SettingCard({
    isOpen,
    onClose,
    musicEnabled,
    onToggleMusic,
    volume,
    onVolumeChange,
}) 
{
    if (!isOpen) {
        return null;
    }

    return (
        <div className="setting-card-overlay">
            <div className="setting-card">
                <div className="setting-card-header">
                    <h2>Settings</h2>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="setting-card-body">
                    <div className="setting-option">
                        <label>Music</label>
                        <button onClick={onToggleMusic}>
                            {musicEnabled ? 'Pause' : 'Play'}
                        </button>
                    </div>
                    <div className="setting-option">
                        <label>Volume</label>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={onVolumeChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}