import mongoose from "mongoose"

const catererSchema = new mongoose.Schema(
    {
	name: { type: String, required: true },
	specialty: { type: String, required: true },
	price_range: { type: String }
	image_url: { type: String }
	description: { type: String }
	addedBy: { type: mongoose.Schema.Type.ObjectId, ref: "user" },
    },
    { timestamps: true }
};

export default mongoose.model("Caterer", catererSchema);
