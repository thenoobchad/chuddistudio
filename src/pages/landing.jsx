import React, { useState } from "react";
import TextType from "../components/text";
import { ArrowDown, HandshakeIcon, LocateIcon, Mail } from "lucide-react";
import { HamburgerMenu } from "../components/hamburger-menu";
import { ContactForm } from "../components/contact-form";
import { Footer } from "../components/footer";

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
						<span className="bg-zinc-900   fixed z-70">
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
							<h4 className="text-5xl font-extrabold tracking-tighter   text-zinc-200">
								ELUEME CHIDI OSITA
							</h4>
							<TextType
								text={["Full Stack Developer...", "Software Engineer . . . "]}
								typingSpeed={75}
								pauseDuration={1500}
								showCursor={true}
								cursorCharacter="|"
								className="text-[18px]! font-extrabold text-center text-zinc-800!"
							/>
						</div>
					</div>
					{/* HERO SECTION */}
					<div className="flex gap-4 w-full   justify-center">
						<button className="bg-zinc-100 text-zinc-900 text-lg font-semibold px-6 py-3  flex gap-2 items-center rounded-full">
							<HandshakeIcon />
							Lets chat
						</button>
						<button className=" rounded-full text-lg  font-bold px-6 py-3 l outline flex gap-2 items-center">
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
							<h4 className="text-7xl font-extrabold">
								780<span>+</span>
							</h4>
							<p className="font-semibold">Hours of in depth designs</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-3 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-[70px] font-extrabold">
								2.3M<span>+</span>
							</h4>
							<p className="font-semibold">
								Total Client Business Profit Growth
							</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-4 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-7xl font-extrabold">
								150<span>+</span>
							</h4>
							<p className="font-semibold">
								Strategic Budget Forecast Delivered
							</p>
						</div>

						<div className="border-l-4 px-5 py-1 col-span-6 row-span-3 flex flex-col justify-between border-zinc-500 bg-zinc-950 lg:col-span-3 lg:bg-transparent">
							<h4 className="text-7xl font-extrabold">
								600<span>+</span>
							</h4>
							<p className="font-semibold">
								Hours of Financial advisory and strategic work
							</p>
						</div>
					</div>
				</section>

				<section className=" w-full min-h-screen px-4 py-10 mt-20 flex items-center max-w-5xl h-full mx-auto justify-start flex-col">
					<div className="flex gap-10 md:gap-40 border-b pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold h-fit">
							Strategy
						</p>
						<p className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl">
							How i solve your
							<br />
							challenges
						</p>
					</div>

					{[1, 2, 3, 4].map((c, i) => (
						<div
							key={i}
							className="flex gap-35 md:gap-63 border-b py-6  w-full">
							<p className="text-lg font-semibold h-fit">0{c}</p>
							<div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
								<p className="font-extrabold text-lg uppercase whitespace-nowrap lg:text-xl">
									How i solve your challenges
								</p>
								<p className=" text-sm ">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Dolore iure libero atque a est possimus dolorum autem
									molestiae unde optio?
								</p>
							</div>
						</div>
					))}

					<div className="my-30 flex justify-center items-center w-full gap-8">
						<div className="h-10 bg-zinc-50 w-10 rounded-full" />
						<p>Turning ideas in smart tools from maximizing potentials</p>
					</div>
				</section>

				{/* TESTIMONIALS */}

				<section className=" w-full min-h-screen px-4 py-10 flex items-center max-w-5xl h-full mx-auto justify-start flex-col">
					<div className="flex gap-10 md:gap-40  pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold h-fit">
							Testimonials
						</p>
						<p className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl">
							What do my
							<br />
							clients say?
						</p>
					</div>

					<div className="flex gap-6 overflow-hidden scroll-auto">
						{[1, 2, 3, 4, 5].map((c, i) => (
							<div
								key={c + i}
								className="border-l-4 border-zinc-500 px-5 w-[400px] py-4 flex flex-col gap-6 bg-zinc-950 lg:bg-transparent  ">
								<h4 className="text-sm">5/5</h4>
								<p className="text-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Adipisci nihil voluptatem officia, libero suscipit porro.
								</p>
								<div className="flex items-center gap-2">
									<img
										src="dfd"
										alt=""
										className="h-7 w-7 bg-white rounded-full"
									/>
									<div className="flex flex-col ">
										<h4 className="text-xs font-semibold">Simon davies</h4>
										<p className="text-xs">CFO at Logistics</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="mt-30 flex items-center">
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
					<div className="flex flex-col gap-18  border-b pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold h-fit w-fit">
							Case Studies
						</p>
						<p className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl">
							Success stories
						</p>
					</div>
					<div className="w-full">
						{[1, 2, 3, 4].map((c, i) => {
							return (
								<div key={c + i} className="flex w-full border-b ">
									<h4 className="h-20 flex items-center justify-start w-1/3 ">
										<span className="whitespace-nowrap">E-commerce</span>
									</h4>
									<div className="border-l pl-8 w-full">
										<h3 className="h-20 flex items-center justify-between  whitespace-nowrap  w-full">
											<span>Technova Solutions</span>

											<ArrowDown onClick={() => setShow(!show)} />
										</h3>
										{show && (
											<div className="flex gap-2">
												{[1, 2, 3].map((c, i) => (
													<div
														key={c + i}
														className="flex flex-col gap-2 pb-10">
														<h4 className="text-sm">Challenge</h4>
														<p className="text-xs text-zinc-500">
															Lorem ipsum dolor sit amet consectetur adipisicing
															elit.
														</p>
													</div>
												))}
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
					<div className="flex flex-col gap-18  border-b pb-10 w-full">
						<p className="border px-5 py-2 mt-2 rounded-full font-semibold h-fit w-fit">
							Contact me
						</p>
						<p className="flex justify-between items-start gap-10">
							<span className="font-extrabold text-4xl uppercase whitespace-nowrap lg:text-6xl">
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
						className="text-7xl uppercase font-bold px-20 border-b hover:cursor-pointer border-zinc-800 pb-4">
						{c}
					</p>
				))}
				<div>
					<p className="px-20">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
						adipisci laborum velit aspernatur debitis odio inventore neque?
						Deserunt, facere dolorem?
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
