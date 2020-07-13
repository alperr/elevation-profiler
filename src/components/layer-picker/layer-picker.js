class extends HTMLElement
{
	constructor(){ super(); }
	connectedCallback()
	{
		this.querySelector("#mono").onclick = this.onitemclick("mono");
		this.querySelector("#color").onclick = this.onitemclick("color");
		this.querySelector("#osm").onclick = this.onitemclick("osm");
	}

	onitemclick(layer)
	{
		return function()
		{
			if (g_current_layer == layer)
				return;
			
			g_current_layer = layer;
			document.dispatchEvent(new Event("layer-change"));
		}
	}
}