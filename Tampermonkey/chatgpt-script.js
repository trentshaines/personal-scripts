// ==UserScript==
// @name         ChatGPT Shortcuts
// @namespace    Personal Scripts
// @version      0.1
// @description  Open ChatGPT new chat when pressing Command+K
// @match        https://chat.openai.com/*
// @grant        none
// @author       Trent Haines (modified by Claude)
// @updateURL    https://raw.githubusercontent.com/trentshaines/personal-scripts/chatgpt-script.js
// @downloadURL  https://raw.githubusercontent.com/trentshaines/personal-scripts/chatgpt-script.js
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        // Check for Command+K on macOS or Ctrl+K on other operating systems
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            window.open('https://chat.openai.com/chat', '_self');
        }
    });
})();