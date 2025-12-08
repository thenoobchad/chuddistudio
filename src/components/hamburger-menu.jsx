

export const HamburgerMenu = ({isActive, setIsActive}) => {
  return (
		<div
			onClick={() => setIsActive((prev) => !prev)}
			className="flex gap-[10px] flex-col p-4">
			<div
				className={`${
					isActive ? "rotate-45 translate-y-2" : "rotate-0"
				} h-[5px] w-10  bg-zinc-100 transition-all duration-100 ease-in-out`}
			/>
			<div
				className={`${
					isActive ? "-rotate-45 -translate-y-2" : "rotate-0"
				} h-[5px] w-10  bg-zinc-100 transition-all duration-100 ease-in-out`}
			/>
		</div>
	);
}
