export const environment = {
	server: { port: process.env.SERVER_PORT || 3001},
	db: { url: process.env.DB_URL || 'mongodb://localhost/jarvis'},
	security: { 
		saltRounds: process.env.SALT_ROUNDS || 10,
		apiSecurity: process.env.API_SECRET || ''
	}
}