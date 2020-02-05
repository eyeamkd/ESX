chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command); 
    console.log("Selected word is ", window.getSelection().toString()); 
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
      }, function(selection) {
        // document.getElementById("output").value = selection[0];  
        const newURL =  `https://www.google.com/search?q=${selection}`
        chrome.tabs.create({ url: newURL });
      });
  });  
  console.log("Background Script Running");