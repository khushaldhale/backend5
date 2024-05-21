const mongoose = require("mongoose");

require("dotenv").config()



const dbConnect = () => {
	mongoose.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedToplogy: true
	})
		.then((data) => {
			console.log("DB connection is established at : ", data.connection.host)
		})
		.catch((error) => {
			console.log("DB connection is refused ", error)
		})
}

module.exports = dbConnect