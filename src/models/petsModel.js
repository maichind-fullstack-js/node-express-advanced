import mongoose from "mongoose";
import Pet from "../schemas/petsSchema.js";

class petsModel {
	async create(pet) {
		return await Pet.create(pet);
	}

	async getAll() {
		return await Pet.find();
	}

	async getOne(id) {
		return await Pet.findById(id);
	}

	async update(id, pet) {
		return await Pet.findOneAndUpdate(
			{ _id: new mongoose.Types.ObjectId(id) }, pet, { new: true }
		);
	}

	async delete(id) {
		return await Pet.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
	}
}

export default new petsModel();
