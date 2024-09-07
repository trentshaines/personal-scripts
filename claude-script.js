// ==UserScript==
// @name         Claude.ai Shortcuts
// @namespace    Personal Scripts
// @version      0.1
// @description  Open Claude.ai new chat when pressing Command+K
// @match        https://claude.ai/*
// @grant        none
// @author       Trent Haines
// @updateURL    https://raw.githubusercontent.com/trentshaines/personal-scripts/claude-script.js
// @downloadURL  https://raw.githubusercontent.com/trentshaines/personal-scripts/claude-script.js
// ==/UserScript==



(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            window.open('https://claude.ai/chat/new', '_self');
        }
    });
})();
