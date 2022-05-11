function stopOnScroll(){
    console.log(window.eval(window.onscroll=null));
}

chrome.tabs.onUpdated.addListener(async function() {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if(tab.url.indexOf("glassdoor") > -1){
        await chrome.scripting.executeScript({
            target: {tabId: tab.id, allFrames: true},
            function: stopOnScroll,
            world: 'MAIN',
        });
    }
});