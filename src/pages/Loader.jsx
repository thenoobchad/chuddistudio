
export default function Loader() {

  return  (
		<div className="wrapper bg-black h-screen w-screen absolute top-0 left-0 z-1000 flex items-center justify-center">
			<div className='container rotate-45 w-24 grid grid-cols-3 gap-x-1 gap-y-1'>
              {new Array(9).fill().map((_, i) => (
                  <div key={i} className="box h-7 w-7 bg-[#0947e2]"></div>
              ))}
			</div>
		</div>
	);
}
