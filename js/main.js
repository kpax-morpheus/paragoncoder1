var mymap = L.map('mapid').setView([51.496483, -0.014119], 13);
var marker = L.marker([51.486574, -0.012341]).addTo(mymap);
marker
	.bindPopup(
		'<b>I am located here!</b><br>Nearest Dockland Railway Station: Island Garden.'
	)
	.openPopup();
L.tileLayer(
	'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
	{
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken:
			'pk.eyJ1Ijoia3BheC1tb3JwaGV1cyIsImEiOiJja2dmdXp4c3kwMGtlMzJwbWhub2xkb2l1In0.ub2asLr4l94UhhLAHHhiXw',
	}
).addTo(mymap);

// ! Sticky menu background
window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		document.querySelector('#navbar').style.opacity = 0.9;
	} else {
		document.querySelector('#navbar').style.opacity = 1;
	}
});

// ! Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 100,
			},
			800
		);
	}
});
