
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const TextArray = ["Jerry", "Tom", "Hank", "Friday", "Caleb", "Gift"]

export const Carousel = ({testimonials}) => {



    const settings = {
			centerMode:true,
			centerPadding: '0px',
			dots: true,
			infinite: true,
        speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 824,
					settings: {
						slidesToShow: 1,
                        slidesToScroll: 1,
                        
					},
				},
			],
		};
  return (
		<div
			style={{
				maxWidth: "900px",
				margin: "0 auto",
				gap: 8,
				width: "90%",
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}>
			<Slider {...settings}>
				{testimonials.map((c, i) => (
					<div
						key={c + i}
						className="border-l-4 border-zinc-500 px-5  py-4 flex flex-col gap-6 bg-zinc-900  my-4 mx-6 w-full overflow-hidden h-[200px]">
						<h4 className="text-sm">5/5</h4>
						<p className="text-sm flex-wrap my-5 w-full">{c.comment}</p>
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

