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
