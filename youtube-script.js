// ==UserScript==
// @name         YouTube Shortcut
// @namespace    Personal Scripts
// @version      0.1
// @description  Focus YouTube search bar when pressing Command+K or Ctrl+K
// @match        https://www.youtube.com/*
// @grant        none
// @author       Trent Haines	
// @updateURL    https://raw.githubusercontent.com/trentshaines/personal-scripts/youtube-script.js
// @downloadURL  https://raw.githubusercontent.com/trentshaines/personal-scripts/youtube-script.js
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        // Check for Command+K (Mac) or Ctrl+K (Windows/Linux)
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault(); // Prevent default browser behavior
            
            // Find the search input and focus on it
            const searchInput = document.querySelector('input#search');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
})();
