import React from 'react';

function Navbar() {
    return (
        <header>
        <div class="brand-logo">
        <i class="fa-solid fa-bars"></i>
        <img class="brand-logo" src="youtube-logo.png" alt="YouTube Logo" width="90" height="20"/>
       </div>
        <div class="search-bar">
            <input type="text"/>
            <button>Search</button>
        </div>
        <div class="upload-section">
            <img class="channel-icon-img" src="gavin-portrait.jpg" alt="Channel icon img" height="24" width="24"/>
        </div>
    </header>
    );
}

export default Navbar;