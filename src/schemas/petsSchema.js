import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
			min: [0, 'La edad no puede ser negativa'],
			max: [30, 'La edad no puede ser mayor a 30 años']
		},
		type: {
			type: String,
			required: true,
			enum: ['dog', 'cat'],
		},
		breed: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: false,
		},
		adopted: {
			type: Boolean,
			default: false,
		},
	}, { timestamps: true }
);

const Pet = mongoose.model('Pet', petSchema);
export default Pet;
