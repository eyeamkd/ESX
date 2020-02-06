chrome.commands.onCommand.addListener(function(command) {
    var bkg = chrome.extension.getBackgroundPage();
    bkg.console.log('foo');
    switch(command) {
      case 'search-feature':
        chrome.tabs.executeScript( {
          code: "window.getSelection().toString();"
        }, function(selection) {
          // document.getElementById("output").value = selection[0];  
          const newURL =  `https://www.google.com/search?q=${selection}`
          chrome.tabs.create({ url: newURL });
        });
        return;
      case 'stack-overflow-search':
        chrome.tabs.executeScript( {
          code: "window.getSelection().toString();"
        }, function(selection) {
          // document.getElementById("output").value = selection[0];  
          const newURL =  `https://stackoverflow.com/search?q=${selection}`
          chrome.tabs.create({ url: newURL });
        });
        return; 
      case 'youtube-search':
        chrome.tabs.executeScript( {
          code: "window.getSelection().toString();"
        }, function(selection) {
          // document.getElementById("output").value = selection[0];  
          const newURL =  `https://www.youtube.com/results?q=${selection}`
          chrome.tabs.create({ url: newURL });
        });
        return;
    }
    console.log('Command:', command); 
    console.log("Selected word is ", window.getSelection().toString()); 
    
  });  
  console.log("Background Script Running");