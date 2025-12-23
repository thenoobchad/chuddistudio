import { Send } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../lib/emailjs";

export const ContactForm = () => {

	const [status, setStatus] = useState(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	

	const handleSubmit = async (e) => {
		e.preventDefault();

		const templateParams = {
			guest_name: name,
			guest_email: email,
			guest_message: message,
		};

		const { success, message } = await sendEmail(templateParams);
		setStatus({ success, message });
		if (success) {
			setName("")
			setEmail("")
			setMessage("")
		}
	};

	return (
		<>
			<form
				
				onSubmit={handleSubmit}
				className="w-full mt-10 max-w-md">
				<div className="flex flex-col gap-2 my-4">
					<label
						htmlFor="fullName"
						className="text-sm font-semibold text-gray-600">
						Name
					</label>
					<input
						id="name"
						type="text"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="e.g.John Doe"
						className="hover:outline-0 outline-0 h-full text-sm bg-transparent border-b-2 border-zinc-600 py-4 px-4"
					/>
				</div>

				<div className="flex flex-col gap-2 my-4">
					<label
						htmlFor="email"
						className="text-sm font-semibold text-gray-600">
						Email
					</label>
					<input
						value={email}
						type="email"
						placeholder="e.g.johndoe@mail.com"
						className="hover:outline-0 outline-0 h-full text-sm bg-transparent border-b-2 border-zinc-600 py-4 px-4"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-2 my-4">
					<label
						htmlFor="message"
						className="text-sm  font-semibold text-gray-600">
						Message
					</label>
					<textarea
						value={message}
						cols={1}
						rows={3}
						type="text"
						placeholder="Tell us about your project"
						className="hover:outline-0 outline-0 h-full text-sm bg-transparent border-b-2 border-zinc-600 py-4 px-4"
						name="message"
						id="message"
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<div className="w-full flex justify-center">
					<button className=" rounded-full w-2/3 text-lg bg-zinc-900 text-zinc-200 font-bold px-6 py-2.5 l outline flex gap-2 items-center justify-center mt-10">
						Send Email <Send />
					</button>
				</div>
			</form>
			{status && (
				<div
					className={`mt-4 p-4 rounded-md text-sm ${
						status.success
							? "bg-green-100 text-green-800"
							: "bg-red-100 text-red-800"
					}`}>
					{status.message}
				</div>
			)}
		</>
	);
};
