import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


export const Carousel = ({ testimonials }) => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<div className="overflow-hidden w-full" ref={emblaRef}>
			<div className="flex">
				{testimonials.map((c, i) => (
					<div
						key={c + i}
						className="embla__slide p-12 flex gap-3 my-4  w-full  md:max-w-md  h-full ">
						<div
							className="flex flex-col justify-start  bg-zinc-100 text-zinc-900 p-4 items-start relative ">
													
							<div className="relative z-50">
								<h4 className="text-5xl leading-6 w-full">"</h4>
								<p className="text-sm">{c.comment}</p>
								<div className="flex gap-4 mt-4 ">
									<img
										src="dfd"
										alt="image"
										className="h-10 w-10  bg-white rounded-full"
									/>
									<div className="flex flex-col ">
										<h4 className="text-xs font-semibold">{c.name}</h4>
										<p className="text-xs">{c.position}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
