
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";



export const Carousel = ({testimonials}) => {



    const settings = {
			adaptiveHeight: true,
			accessibility: true,
		
			infinite: true,
			arrows: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 484,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
			],
		};
  return (
		<div
			style={{
				maxWidth: "100%",
				margin: "22px auto",
				
				width: "100%",
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}>
			<Slider {...settings}>
				{testimonials.map((c, i) => (
					<div
						key={c + i}
						className=" px-4 border border-zinc-900  py-5 flex flex-col gap-6  my-4 mx-1 w-full flex-wrap max-w-[390px] h-full">
						<h4 className="text-sm">{c.score}</h4>
						<p className="text-sm flex-wrap my-5 w-[300px]">{c.comment}</p>
						<div className="flex items-center gap-2">
							<img src="dfd" alt="" className="h-7 w-7 bg-white rounded-full" />
							<div className="flex flex-col ">
								<h4 className="text-xs font-semibold">{c.name}</h4>
								<p className="text-xs">{c.position}</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

