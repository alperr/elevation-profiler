class extends HTMLElement
{
	constructor(){ super(); }
	connectedCallback()
	{
		this.querySelector("h2").onclick = this.onclick;
		this.histogram = this.querySelector("histogram-viewer");

		
	}

	onclick()
	{
		console.log("asdpqldpqdl");
	}
}