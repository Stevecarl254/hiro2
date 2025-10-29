import Caterer from "../models/Caterer.js"

export const getCaterers = async (req, res) => {
    try {
	const caterers = await Caterer.find();
	res.status(200).json(caterers);
    } catch (error) {
	res.status(500).json({ message: "Server error", error: error.message });
    }
};

// add new caterer (admin only)
export const addCaterer = async (req, res) => {
    try {
	const { name, specialty, price_range, image_url, description } = req.body;
	if (!name)
	    return res.status(400).json({ error: "Caterer name is required" });
	const newCaterer = new Caterer ({
	    name,
	    specialty,
	    price_range,
	    image_url,
	    description,
	    addedBy: req.user?._id || null, // know who added te caterer
	});

	const savedCaterer = await newCaterer.save();
	res.status(201).json({ message: "Caterer added successfully", caterer: savedCaterer });
    } catch (error) {
	res.status(500).json({ message: "Server error", error: error.message });
    }
};
