import bcrypt from 'bcrypt';
import usersModel from "../models/usersModel.js";
import { generateToken } from '../helpers/auth.js';

class usersController {
	constructor() { }

	async register(req, res) {
		try {
			const { email, password, name, phone } = req.body;
			const userExists = await usersModel.getOne({ email });
			if (userExists) {
				return res.status(400).json({ message: "Email already in use" });
			}

			bcrypt.hash(password, 10, async (err, hashedPassword) => {
				if (err) {
					return res.status(500).json({ message: "Error hashing password" });
				}
				const newUser = {
					name,
					email,
					password: hashedPassword,
					phone
				};
				const data = await usersModel.create(newUser);
				res.status(201).json(data);
			});
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	async login(req, res) {
		try {
			const { email, password } = req.body;
			const userExists = await usersModel.getOne({ email });
			if (!userExists) {
				res.status(401).json({ message: "Invalid email or password" });
			}
			bcrypt.compare(password, userExists.password, (err, result) => {
				if (err || !result) {
					return res.status(401).json({ message: "Invalid email or password" });
				}

				const token = generateToken({ id: userExists._id, email: userExists.email });
				res.status(200).json({ message: "Login successful", token });
			});
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
}

export default new usersController();
