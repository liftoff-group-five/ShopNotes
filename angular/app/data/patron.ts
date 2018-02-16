



export class Patron {
	
	// Missing from schema
	/* public email: string
	public password: string */
	// Current schema fields
	public name: string
	public shops: string[ ] // To be converted to child table
	public location: string // Geolocation data
	
}


