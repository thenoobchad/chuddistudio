import  { useState } from "react";
import TextType from "../components/text";
import { ArrowDown, HandshakeIcon, LocateIcon, Mail } from "lucide-react";
import { HamburgerMenu } from "../components/hamburger-menu";
import { ContactForm } from "../components/contact-form";
import { Footer } from "../components/footer";

import { Carousel } from "../components/carousel";

import { successStories } from "../constants";

export default function Landing() {
	const [isActive, setIsActive] = useState(false);
	const [show, setShow] = useState(false);

	return (
		<>
			<main className="bg-black text-zinc-50 min-h-screen relative">
				<MenuList isActive={isActive} />
				<div className="w-full max-w-5xl h-full mx-auto px-4 py-4 justify-center">
					{/* Navbar */}
					<div className="w-full flex justify-end rounded max-w-5xl mx-auto relative top-1 right-2 ">
						<span className="bg-zinc-900 fixed z-70 right-1">
							<HamburgerMenu setIsActive={setIsActive} isActive={isActive} />
						</span>
					</div>

					<div className="flex flex-col sm:justify-between items-center py-4 relative">
						<img
							src="/images/studio.png"
							alt="photo"
							className="object-contain   w-100 rounded-full"
						/>

						<div className="flex flex-col  absolute bottom-15 w-full items-center">
							<h4 className="text-4xl md:text-6xl font-extrabold tracking-tighter  text-zinc-200 whitespace-nowrap">
								ELUEME CHIDI OSITA
							</h4>
							<TextType
								text={["Full Stack Developer...", "Software Engineer . . . "]}
								typingSpeed={75}
								pauseDuration={1500}
								showCursor={true}
								cursorCharacter="|"
								className="text-[24px] md:text-[28px]! font-extrabold text-center text-zinc-800!"
							/>
						</div>
					</div>
					{/* HERO SECTION */}
					<div className="flex md:flex-row gap-4 w-full justify-center items-center">
						<button className="bg-zinc-100 text-zinc-900 text-lg w-fit md:w-fit font-semibold px-4 md:px-6 py-3  flex gap-2 items-center whitespace-nowrap rounded-full justify-center">
							<HandshakeIcon />
							Lets chat
						</button>
						<button className="whitespace-nowrap rounded-full text-lg  font-bold px-4 md:px-6 py-3 w-fit md:w-fit outline flex gap-2 items-center justify-center">
							<a href="/files/henry_cv.pdf" download>
								Download Resume
							</a>
						</button>
					</div>
				</div>

				{/* STATS SECTION */}
				<section className=" w-full min-h-screen px-4 pb-10 my-20 flex items-center max-w-5xl h-full mx-auto justify-center">
					<div className="grid grid-cols-12 grid-rows-7 h-[400px] gap-6">
						<div className="border-l-4 border-zinc-500 px-5 py-1 col-span-6 row-span-4 flex flex-col justify-between bg-zinc-950 lg:bg-transparent lg:col-span-3">
							<h4 className="text-4xl md:text-7xl font-extrabold">
								12<span>+</span>
							</h4>
							<p className="font-semibold">
								Project completed as well as designs
							</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-3 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-4xl md:text-7xl font-extrabold">
								3<span>+</span>
							</h4>
							<p className="font-semibold">
								Years of Crafting Digital Experiences
							</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-4 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-7xl font-extrabold">
								10<span>+</span>
							</h4>
							<p className="font-semibold">Brands Empowered</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-3 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-4xl md:text-7xl font-extrabold">
								30%<span>+</span>
							</h4>
							<p className="font-semibold text-sm md:text-lg">
								More Time on Site for Redesigned Pages
							</p>
						</div>
					</div>
				</section>

				<section className=" w-full min-h-screen px-4 py-10 mt-20 flex items-center max-w-5xl h-full mx-auto justify-start flex-col">
					<div className="flex flex-col lg:flex-row gap-10 md:gap-20 border-b pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold w-fit h-fit">
							Strategy
						</p>
						<p className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl w-full text-right">
							How i solve <br />
							your challenges
						</p>
					</div>

					{strategy.map((c, i) => (
						<div
							key={i}
							className="flex md:flex-row gap-15 md:gap-63 border-b py-6  w-full flex-col">
							<p className="text-lg font-semibold h-fit">0{c.id}</p>
							<div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
								<p className="font-extrabold text-lg uppercase whitespace-nowrap lg:text-xl">
									{c.heading}
								</p>
								<p className=" text-sm ">{c.desc}</p>
							</div>
						</div>
					))}

					<div className="my-30 flex justify-center items-center w-full gap-8">
						<div className="h-7 bg-zinc-50 w-10 md:w-10 md:h-10 rounded-full " />
						<p>Turning ideas in smart tools from maximizing potentials</p>
					</div>
				</section>

				{/* TESTIMONIALS */}

				<section className=" w-full min-h-screen px-4 py-10 flex items-center max-w-5xl h-full mx-auto justify-start flex-col overflow-x-hidden">
					<div className="flex flex-col lg:flex-row gap-10 md:gap-20 border-b pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold w-fit h-fit">
							Testimonials
						</p>
						<p className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl w-full text-right">
							What do my <br className="" /> clients say?
						</p>
					</div>

					<Carousel testimonials={testimonials} />

					<div className="mb-10 flex items-center">
						<p className="h-40 w-40 bg-zinc-200 flex rounded-full justify-center items-center text-zinc-900">
							Need a <br />
							website?
						</p>
						<p className="h-26 w-26 border-3 border-zinc-200 flex rounded-full justify-center items-center  text-zinc-200 text-sm underline">
							Reach out
						</p>
					</div>
				</section>

				{/* SUCCESS STORIES */}

				<section className=" w-full min-h-screen px-4 py-10 flex items-center max-w-5xl h-full mx-auto justify-start flex-col">
					<div className="flex flex-col lg:flex-row gap-10 md:gap-20 border-b pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold h-fit w-fit whitespace-nowrap">
							Case Studies
						</p>
						<p className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl w-full text-right">
							Success stories
						</p>
					</div>
					<div className="w-full">
						{successStories.map((c, i) => {
							return (
								<div key={c + i} className="flex w-full border-b">
									<h4 className="h-20  items-center justify-start w-1/3 hidden md:flex">
										<span className="whitespace-nowrap ">{c.type}</span>
									</h4>
									<div className="border-l pl-8 w-full">
										<h3 className="h-20 flex items-center justify-between  whitespace-nowrap  w-full">
											<span>{c.name}</span>

											<ArrowDown onClick={() => setShow(!show)} />
										</h3>
										{show && (
											<div className="flex  flex-col">
												<div
													key={c + i}
													className="flex flex-col gap-3 pb-10 relative">
													<h4 className="text-sm ">{c.challenge}</h4>
													<img src={c.image} alt="image" />

													<a
														href={c.link}
														className=" py-2 bg-zinc-100 w-fit px-6 text-zinc-900 font-semibold rounded-full mt-2">
														View Project
													</a>
												</div>
											</div>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</section>

				{/* WHAT TO KNOW */}

				<section className=" w-full  px-4 py-10 flex items-center max-w-5xl h-full mx-auto justify-start flex-col bg-zinc-100 text-zinc-900 lg:rounded-3xl">
					<div className="flex flex-col lg:flex-row gap-10 md:gap-20 border-b pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold h-fit w-fit whitespace-nowrap">
							Contact me
						</p>
						<p className="flex md:flex-row justify-between items-start gap-4 md:gap-10 flex-col text-right w-full">
							<span className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl text-right">
								Want a meet?
							</span>

							<span className="text-xs">
								I'm here to help you unlock market possibilities and drive
								growth. Reach out today to discus your goals and challenges and
								explore tailored solutions.{" "}
							</span>
						</p>
					</div>

					<div className="mt-10">
						<ul>
							<li className="flex gap-4">
								<LocateIcon className="w-5 h-6" /> Port Harcourt, Nigeria
							</li>

							<li className="flex gap-4 ">
								<Mail className="w-5 h-6" /> chidielueme@gmail.com
							</li>
						</ul>
					</div>
					<ContactForm />
				</section>
				<Footer />
			</main>
		</>
	);
}

const MenuList = ({ isActive }) => {
	return (
		<div
			className={`${
				isActive ? "left-0" : "-translate-x-[100%]"
			} fixed top-0 w-screen min-h-screen bg-zinc-950/80 z-50 transition-all delay-100 ease-in-out`}>
			<div className="w-[80%] lg:max-w-[550px] bg-zinc-900 flex flex-col h-screen gap-8 py-10 ">
				<p className="text-lg w-full flex justify-center font-bold">
					[chidielueme@gmail.com]
				</p>
				{["stats", "projects", "contact", "skills"].map((c, i) => (
					<p
						key={c + i}
						className="text-4xl md:text-7xl uppercase font-bold px-8 md:px-20 border-b hover:cursor-pointer border-zinc-800 pb-4">
						{c}
					</p>
				))}
				<div>
					<p className="px-8 md:px-20 text-3xl">
						[facebook] [instagram] [x.com] [discord]
					</p>
				</div>
			</div>
		</div>
	);
};

// const StatCard = ({number, desc}) => {
// 	return (
// 		<div className="border-l-4 px-5 py-1 col-span-6 row-span-3 flex flex-col justify-between border-zinc-500 bg-zinc-950 md:col-span-4">
// 			<h4 className="text-7xl">
// 				600<span>+</span>
// 			</h4>
// 			<p className="font-semibold">
// 				Hours of Financial advisory and strategic work
// 			</p>
// 		</div>
// 	);
// }


const strategy = [
	{
		id: 1,
		heading: "understand the goal or problem",
		desc: "I ask what's needed, what works, what doesn't, why does it matter. This helps stay on the focused goal.",
	},
	{
		id: 2,
		heading: "Research and gather information",
		desc: "Dive into docs, utilize latest and greatest tools to solve the problem.",
	},
	{
		id: 3,
		heading: "break down and brain storm",
		desc: "Decompose problem into smaller manageable parts,sketch multiple approaches on paper and prioritize",
	},
	{
		id: 4,
		heading: "implement, test and validate",
		desc: "Code the solution, run unit/integration test, plus manual checks across browsers/devices.",
	},
];

const testimonials = [
	{
		id: 2,
		comment:
			"Exceptional frontend skills that brought our UI designs to life with seamless interactivity and performance.",
		position: "Product Manager, WebForge Inc.",
		score: 4.5,
		name: "Jordan Lee",
	},
	{
		id: 3,
		comment:
			"A true problem-solver who debugged complex issues in our app, delivering a bug-free release ahead of schedule.",
		position: "Engineering Lead, CodeCrafters LLC",
		score: 4.6,
		name: "Taylor Morgan",
	},
	{
		id: 4,
		comment:
			"Their expertise in cloud integration transformed our infrastructure, making it scalable and reliable.",
		position: "VP of Operations, CloudPeak Enterprises",
		score: 4.2,
		name: "Casey Nguyen",
	},

	{
		id: 5,
		comment:
			"Outstanding collaboration on our machine learning project, with clean code and insightful optimizations.",
		position: "Data Science Director, AI Dynamics",
		score: 4.1,
		name: "Riley Patel",
	},
	{
		id: 6,
		comment:
			"Delivered a robust e-commerce platform that boosted our sales by 30% through efficient database management.",
		position: "CEO, ShopNet Global",
		score: 4.4,
		name: "Morgan Ellis",
	},
];



