const userSchema = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
	try {

		const { fname, lname, email, password } = req.body;

		if (!fname || !lname || !email || !password) {
			return res.status(404)
				.json({
					success: false,
					message: "Please provide all details"
				})
		}

		const hashedPassword = bcrypt.hash(password, 10);

		const response = await userSchema.create({ fname, lname, email, password: hashedPassword });

		return res.status(200)
			.json({
				success: true,
				message: "user is created succefully",
				data: response
			})
	}
	catch (error) {
		console.log(error)
		res.status(500)
			.json({
				success: false,
				message: "Internal error occured"
			})
	}
}


exports.getAllUsers = async (req, res) => {
	try {

		const response = await userSchema.find({});

		res.status(200)
			.json({
				success: true,
				message: "All users are fetched",
				data: response
			})
	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json({
				success: false,
				message: "Internal error occured"
			})
	}
}