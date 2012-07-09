// Common javascripts

function reloadContent() {
	window.location.reload();
}

function onUpdateReady() {
	$('#mainHeader').after('<div class="update"><p>Er is een update beschikbaar, de pagina refreshed in 2sec ...</p> </div>');
	setTimeout("reloadContent()", 2*1000);
}
window.applicationCache.addEventListener('updateready', onUpdateReady);

if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
	onUpdateReady();
}

/* check if browser is offline, show message
======================================== */

function showOnlineMessage() {
	$('#statusOffline').addClass('hide');
	$('#statusOnline').removeClass('hide');
}

function showOfflineMessage() {
	$('#statusOnline').addClass('hide');
	$('#statusOffline').removeClass('hide');
}

$(document).ready(function(){
	if(navigator.onLine) {
		showOnlineMessage();
	} else {
		showOfflineMessage();
	}	
});

window.addEventListener("online", showOnlineMessage);
window.addEventListener("offline", showOfflineMessage);