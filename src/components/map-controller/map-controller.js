class extends HTMLElement
{
	constructor(){ super(); }
	connectedCallback()
	{
		var container = this.querySelector(".leaflet-container");

		var map = L.map(container).setView([51.505, -0.09], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '& copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		document.addEventListener("layer-change", onlayer);
		function onlayer()
		{
			console.log("layer change", g_current_layer);
		}
	}
}