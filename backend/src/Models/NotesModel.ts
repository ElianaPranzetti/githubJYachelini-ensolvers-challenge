import mongoose from 'mongoose'

const note = new mongoose.Schema(
	{
		title: { type: String, required: true, max: 20 },
		content: { type: String, required: true, max: 500 },
		category: [{ type: String, max: 20 }],
		archived: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

export default mongoose.model('notes', note)
