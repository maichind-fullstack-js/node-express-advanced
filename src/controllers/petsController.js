import petsModel from "../models/petsModel.js";

class petsController {
	constructor() { }

	async create(req, res) {
		try {
			const data = await petsModel.create(req.body);
			res.status(201).json(data);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	async getAll(req, res) {
		try {
			const data = await petsModel.getAll();
			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	async getOne(req, res) {
		try {
			const data = await petsModel.getOne(req.params.id);
			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	async update(req, res) {
		try {
			const data = await petsModel.update(req.params.id, req.body);
			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	async delete(req, res) {
		try {
			const data = await petsModel.delete(req.params.id);
			res.status(206).json(data);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
}

export default new petsController();
