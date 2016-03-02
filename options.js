$(() => {
  chrome.storage.sync.get('goal', (items) => {
    $('#goal').val(items.goal);
  });

  $('#save').click(() => {
    var goal = $('#goal').val();
    if(goal) {
      chrome.storage.sync.set({'goal': goal}, () =>{
        close();
      });
    }
  });

  $('#reset').click(() => {
    chrome.storage.sync.set({'total': 0}, () => {
      var opt = {
        type: "basic",
        title: "Total reset",
        message: "Total has been reset back to zero",
        iconUrl: "icon.png"
      };
      chrome.notifications.create('reset', opt, function(){});
    });
  });
});
