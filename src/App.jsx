import { useGSAP } from "@gsap/react";
import Router from "./components/ui/router";
import { WhatsappButton } from "./components/whatsapp-button";
import Loader from "./pages/Loader";
import gsap from "gsap"

export default function App() {

	useGSAP(() => {
		let tl = gsap.timeline()

		tl.to(".box", {
			scale: 0,
			y: 60,
			duration: 1,
			rotate: 400,
			delay: 0.5,
			repeat: 1,
			yoyo:true,
			stagger: {
				amount: 4.5,
				from: "0",
				// axis: "y",
				grid:[3, 3]
			}
		})

		tl.to(".container", {
			rotate: "-405deg",
			scale: 0,
			duration:1,
		})

		tl.to(".wrapper", {
			opacity: 0,
			display:"none"
		})
	})
	return (
		<>
			{/* <Loader /> */}
			<Router />
			<WhatsappButton/>
		</>
	);
}
