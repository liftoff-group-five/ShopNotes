



export class Business {
	
	// Missing from schema
	/* public name: string
	public email: string
	public password: string */
	// Current schema fields
	public owner: string
	public patrons: string[ ] // Will be converted to child table
	public messages: string[ ] // To be converted to child table
	public location: string // Geolocation data
	public address: string // Street address used to fetch geolocation
	public category: string
	
}


