import { useState } from "react";
import { TextType, ContactForm, Carousel, HamburgerMenu } from "../components";
import { HandshakeIcon, LocateIcon, Mail } from "lucide-react";

import { Footer } from "../components/ui/footer";


import { strategy, successStories, testimonials } from "../constants";

import { motion } from "motion/react";

export default function Home() {

	const Motion = motion;
	const [isActive, setIsActive] = useState(false);

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
								CHIDI OSITA ELUEME
							</h4>
							<TextType
								text={["Full Stack Developer...", "Digital Marketer . . . "]}
								typingSpeed={75}
								pauseDuration={1500}
								showCursor={true}
								cursorCharacter="|"
								className="text-[20px] md:text-[24px]! font-extrabold text-center !text-zinc-900"
							/>
						</div>
					</div>
					{/* HERO SECTION */}
					<div className="flex md:flex-row gap-4 w-full justify-center items-center">
						<a
							href="tel:+234-806-815-6622"
							className="bg-zinc-200 text-zinc-900 text-lg w-fit md:w-fit font-semibold px-4 md:px-6 py-3  flex gap-2 items-center whitespace-nowrap rounded-full justify-center">
							<HandshakeIcon />
							Lets chat
						</a>
						<button className="whitespace-nowrap rounded-full text-lg  font-bold px-4 md:px-6 py-3 w-fit md:w-fit outline flex gap-2 items-center justify-center text-zinc-200  outline-zinc-200">
							<a href="/files/chidi_henry_osita.pdf" download>
								Download Resume
							</a>
						</button>
					</div>
				</div>

				{/* STATS SECTION */}
				<section className=" w-full h-full px-4 pb-8 mt-25 flex items-center max-w-5xl  mx-auto justify-center">
					<div className="grid grid-cols-12 grid-rows-7 h-[400px] gap-6">
						<div className="border-l-4 border-zinc-500 px-5 py-1 col-span-6 row-span-4 flex flex-col justify-between bg-zinc-950 lg:bg-transparent lg:col-span-3">
							<h4 className="text-4xl md:text-7xl font-extrabold text-zinc-200 ">
								12<span>+</span>
							</h4>
							<p className="font-semibold text-zinc-500">
								Project Completed as well as Designs
							</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-3 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-4xl md:text-7xl font-extrabold text-zinc-200 ">
								3<span>+</span>
							</h4>
							<p className="font-semibold text-zinc-500">
								Years of Crafting Digital Experiences
							</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-4 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-7xl font-extrabold text-zinc-200 ">
								10<span>+</span>
							</h4>
							<p className="font-semibold text-zinc-500">Brands Empowered</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-3 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-4xl md:text-7xl font-extrabold text-zinc-200 ">
								30%<span>+</span>
							</h4>
							<p className="font-semibold text-sm md:text-lg text-zinc-500">
								More Time on Site for Redesigned Pages
							</p>
						</div>
					</div>
				</section>

				<section className=" w-full px-4 py-10 mt-20 flex items-center max-w-5xl h-full mx-auto justify-start flex-col">
					<div className="flex flex-col lg:flex-row gap-10 md:gap-20 border-b pb-10 w-full">
						<p className="border border-zinc-200 px-5 py-2 mt-2 rounded-full font-semibold w-fit h-fit text-zinc-200 ">
							Strategy
						</p>
						<p className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl w-full text-right text-zinc-200 ">
							How i <span className="italic text-[#0947e2]">solve</span> <br />
							your challenges
						</p>
					</div>

					{strategy.map((c, i) => (
						<div
							key={i}
							className="flex md:flex-row gap-15 md:gap-63 border-b py-6  w-full flex-col">
							<p className="text-lg font-semibold h-fit">0{c.id}</p>
							<div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
								<p className="font-extrabold text-lg uppercase whitespace-nowrap lg:text-xl text-zinc-200 ">
									{c.heading}
								</p>
								<p className=" text-sm text-zinc-500">{c.desc}</p>
							</div>
						</div>
					))}

					<div className="my-30 flex justify-center items-center w-full gap-8">
						<div className="h-7 bg-zinc-50 w-10 md:w-10 md:h-10 rounded-full " />
						<p>
							Turning <span className="italic text-[#0947e2]">Ideas</span> into
							smart tools for{" "}
							<span className="text-[#0947e2] italic">Maximizing</span>{" "}
							potentials
						</p>
					</div>
				</section>

				{/* TESTIMONIALS */}

				<section className=" w-full  px-4 py-10 flex items-center max-w-5xl h-full mx-auto justify-start flex-col">
					<div className="flex flex-col lg:flex-row gap-10 md:gap-20 border-b pb-10 w-full">
						<p className="border border-zinc-200 px-5 py-2 mt-2 rounded-full font-semibold w-fit h-fit text-zinc-200">
							Testimonials
						</p>
						<p className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl w-full text-right text-zinc-200">
							What do my <br />{" "}
							<span className="italic text-[#0947e2]">clients</span> say?
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
							Success <span className="italic text-[#0947e2]">stories</span>
						</p>
					</div>
					<div className="w-full flex flex-col  my-20 gap-20">
						{successStories.map((c, i) => {
							return <Item key={i} data={c} />;
						})}
					</div>
				</section>

				{/* WHAT TO KNOW */}

				<Motion.section
					initial={{ backgroundColor: "black", opacity: 0 }}
					whileInView={{ backgroundColor: "white", opacity: 0.96 }}
					className=" w-full  px-4 py-10 flex items-center max-w-5xl h-full mx-auto justify-start flex-col bg-zinc-200  text-zinc-600 lg:rounded-3xl">
					<div className="flex flex-col lg:flex-row gap-10 md:gap-20 border-b pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold h-fit w-fit whitespace-nowrap text-zinc-600 ">
							Contact me
						</p>
						<p className="flex md:flex-row justify-between items-start gap-4 md:gap-10 flex-col text-right w-full">
							<span className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl text-right text-zinc-600 ">
								Want to <span className="italic text-[#0947e2]">meet?</span>
							</span>

							<span className="text-xs text-zinc-600 ">
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
				</Motion.section>
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
					<p className="px-8 md:px-20 text-3xl flex">
						[facebook] [instagram] [discord]
					</p>
				</div>
			</div>
		</div>
	);
};

const Item = ({ data }) => {
	const Motion = motion;
	const [isExpand, setIsExpand] = useState(false);

	const handleClick = () => {
		setIsExpand(!isExpand);
	};

	return (
		<Motion.div
			whileHover={{ scale: 0.95 }}
			whileTap={{ scale: 0.95 }}
			onClick={handleClick}>
			<div className="flex relative">
				<img src={data.image} alt="image" className="h-full" />
				{isExpand && (
					<div className="absolute op-0 right-0 w-full h-full z-10 bg-zinc-900/50 flex flex-col md:flex-row justify-center items-center gap-4 lg:flex-col ">
						<button className="bg-zinc-200 text-zinc-900 text-md w-fit  font-semibold px-4 py-3  flex gap-2 items-center whitespace-nowrap rounded-full ">
							Go to Website
						</button>
						<button className="border-2 border-zinc-100 text-zinc-100 text-md w-fit  font-semibold px-4 py-3  flex gap-2 items-center whitespace-nowrap rounded-full ">
							View Git Code
						</button>
					</div>
				)}
			</div>
		</Motion.div>
	);
};
