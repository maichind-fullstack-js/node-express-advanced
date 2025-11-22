import 'dotenv/config';
import express from 'express';
import petsRoutes from './src/routes/pets.js';
import usersRoutes from './src/routes/users.js';
import dbClient from './src/config/dbClient.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/pets', petsRoutes);
app.use('/user', usersRoutes);

try {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
} catch (error) {
	console.error('Error starting the server:', error);
}

process.on('SIGINT', async () => {
	await dbClient.disconnectDB();
	process.exit(0);
});
