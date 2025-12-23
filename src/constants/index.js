import restaurant from "/images/restaurant.png";
import zentryclone from "/images/zentryclone.png";
import chatgptclone from "/images/chatgpt.png";
import {
	AppWindow,
	SquaresExclude,
	Workflow,
} from "lucide-react";

export const testimonials = [
	{
		id: 2,
		comment:
			"Exceptional frontend skills that brought our UI designs to life with seamless interactivity and performance.",
		position: "Product Manager, WebForge Inc.",

		name: "Jordan Lee",
	},
	{
		id: 3,
		comment:
			"A true problem-solver who debugged complex issues in our app, delivering a bug-free release ahead of schedule.",
		position: "Engineering Lead, CodeCrafters LLC",

		name: "Taylor Morgan",
	},
	{
		id: 4,
		comment:
			"Their expertise in cloud integration transformed our infrastructure, making it scalable and reliable.",
		position: "VP of Operations, CloudPeak Enterprises",

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

export const experience = [
	{
		id: 1,
		title: "Frontend Developer",
		company: "Digispert Technologies",
		date: "2024 - 2025",
		location: "Remote",
		tasks: [
			"Built landing pages for the company website.",
			"Worked with Figma files and brought pags to life.",
			"Created responsive pages for all screen sizes.",
			"Collaborated with other developers on projects using Git",
			"Implemented NextJs and Tailwind CSS for the development of landing pages.",
		],
	},
	{
		id: 2,
		title: "Full Staack Developer",
		company: "Maria Shop",
		date: "02/2024 - 04/2024",
		location: "Remote",
		tasks: [
			"Developed API for product listing website.",
			"Built Admin login authentication and panel with admin privileges for CRUD operations.",
			"Created responsive pages for website with responsiveness",
			"Collaborated with other developers on projects using Git",
		],
	},
	{
		id: 3,
		title: "Fullstack Developer",
		company: "Scout Technologies",
		date: "2023 - 2024",
		location: "Remote",
		tasks: [
			"Built Shop Page, Checkout and User dashboard",
			"Constanly maintained and updated website with necessary SEO practices.",
			"Worked with the UI/UX team in designing User friendly experiences.",
			"Collaborated with Project manager on product experiences within the website.",
		],
	},
];

export const successStories = [
	{
		id: 1,
		challenge: "Built an attractive landing page for a foreign client.",
		image: restaurant,
		name: "Gericht Restaurant",
		link: "#",
		type: "Landing Page",
		website: "https://mealtosh.netlify.app",
	},
	{
		id: 2,
		challenge: "A gaming page experience similar to zentry landing page.",
		image: zentryclone,
		name: "Zentry Clone",
		link: "#",
		type: "Zentry Page",
		website: "https://zentry-mu-seven.vercel.app/",
	},
	{
		id: 3,
		challenge: "The famous chat gpt3 page cloned.",
		image: chatgptclone,
		name: "Chat GPT",
		link: "#",
		type: "AI Page",
		website: "https://gpt3page.netlify.app",
	},
];

export const strategy = [
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

export const services = [
	{
		id: 1,
		title: "SEO Optimization",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure!",
		icon: Workflow,
	},
	{
		id: 2,
		title: "Digital Marketing",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure!",
		icon: SquaresExclude,
	},
	{
		id: 3,
		title: "Web Development",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iure!",
		icon: AppWindow,
	},
];
