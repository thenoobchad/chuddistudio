import { Send } from "lucide-react";
import { Button } from "./button";

export const ContactForm = () => {
	return (
		<form className="w-full mt-10 max-w-md">
			<div className="flex flex-col gap-2 my-4">
				<label
					htmlFor="full name"
					className="text-sm font-semibold text-gray-600">
					Full Name
				</label>
				<input
					type="text"
					placeholder="e.g.John Doe"
					className="hover:outline-0 outline-0 h-full text-sm bg-transparent border-b-2 border-zinc-600 py-4 px-4"
				/>
			</div>

			<div className="flex flex-col gap-2 my-4">
				<label
					htmlFor="full name"
					className="text-sm font-semibold text-gray-600">
					Email
				</label>
				<input
					type="text"
					placeholder="e.g.johndoe@mail.com"
					className="hover:outline-0 outline-0 h-full text-sm bg-transparent border-b-2 border-zinc-600 py-4 px-4"
				/>
			</div>

			<div className="flex flex-col gap-2 my-4">
				<label
					htmlFor="full name"
					className="text-sm  font-semibold text-gray-600">
					Subject
				</label>
				<input
					type="text"
					placeholder="Project collaboration etc"
					className="hover:outline-0 outline-0 h-full text-sm bg-transparent border-b-2 border-zinc-600 py-4 px-4"
				/>
			</div>

			<div className="flex flex-col gap-2 my-4">
				<label
					htmlFor="full name"
					className="text-sm  font-semibold text-gray-600">
					Message
				</label>
				<textarea
					cols={1}
					rows={3}
					type="text"
					placeholder="Tell us about your project"
					className="hover:outline-0 outline-0 h-full text-sm bg-transparent border-b-2 border-zinc-600 py-4 px-4"
				/>
			</div>
			<div className="w-full flex justify-center">
				<button className=" rounded-full w-2/3 text-lg bg-zinc-900 text-zinc-200 font-bold px-6 py-3 l outline flex gap-2 items-center justify-center mt-10">
					Send Message <Send />
				</button>
			</div>
		</form>
	);
};
