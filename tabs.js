function showFullScreenTab(tabId) {
    var tab = document.getElementById(tabId);
    if (tab) {
        hideAllTabs();
        tab.style.display = 'block';
        tab.style.position = 'fixed';
        tab.style.top = '0';
        tab.style.left = '0';
        tab.style.width = '100%';
        tab.style.height = '100%';
    }
}

function hideAllTabs() {
    var tabs = document.getElementsByClassName('content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
        tabs[i].style.position = 'static';
        tabs[i].style.width = 'auto';
        tabs[i].style.height = 'auto';
    }
}
