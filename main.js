chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {url: "https://echo.amazon.com/#settings/dialogs"});
    setTimeout(function(){
	chrome.tabs.executeScript(tab.id,{file:"inject.js"});
    },3000);
});  
