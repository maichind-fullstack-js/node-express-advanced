import 'dotenv/config';
import mongoose from 'mongoose';

class dbClient {
	constructor() {
		this.connect();
	}

	async connect() {
		this.connectionString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/adoption?retryWrites=true&w=majority`;
		await mongoose.connect(this.connectionString);
	}

	async disconnectDB() {
		try {
			await mongoose.disconnect();
		} catch (error) {
			console.log('error al cerrar conexión: ', error);
		}
	}
}

export default new dbClient();
