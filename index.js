import dotenv from "dotenv";
dotenv.config();
import cowsay from "cowsay";

const firstname = process.env.FIRSTNAME;
const campus = process.env.CAMPUS;

const message = `Welcome ${firstname} to ${campus}`;

console.log(
	cowsay.say({
		text: message,
		e: "^^",
	}),
);
