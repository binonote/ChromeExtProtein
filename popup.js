$(() => {
  chrome.storage.sync.get(['total', 'goal'], (items) => {
    $('#total').text(items.total);
    $('#goal').text(items.goal);
  });

  $('#addAmount').click(() => {
    chrome.storage.sync.get('total', (items) =>{
      var newTotal = 0;
      if(items.total) {
        newTotal += parseInt(items.total);
      }

      var amount = $('#amount').val();
      if(amount) {
        newTotal += parseInt(amount);
      }

      chrome.storage.sync.set({'total': newTotal});
      $('#total').text(newTotal);
      $('#amount').val('');
    });
  });
});
