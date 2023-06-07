var options = {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Europe/London'
};
setInterval( function() {
    var event = new Date();
    time = event.toLocaleString( 'en-GB', options );
    //document.querySelector( '#time' ).innerHTML = time;
    chrome.runtime.sendMessage({ time: time });
}, 1000 );