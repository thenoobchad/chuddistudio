import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export const Carousel = ({ testimonials }) => {
	

	return (
		<div className="overflow-hidden w-full">
			<Swiper
				spaceBetween={6}
				slidesPerView={1}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				breakpoints={{
					340: {
						spaceBetween: 4,
						slidesPerView: 1,
					},
					540: {
						spaceBetween: 6,
						slidesPerView: 2,
					},

					940: {
						spaceBetween: 6,
						slidesPerView: 3,
					},
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}>
				{testimonials.map((c, i) => (
					<SwiperSlide key={c + i} className="flex gap-3 my-10  w-full  h-full ">
						<div className="flex flex-col justify-start  bg-zinc-100 text-zinc-900 p-4 items-start relative ">
							<div className="relative z-50">
								<h4 className="text-5xl leading-9 w-full">"</h4>
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
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
