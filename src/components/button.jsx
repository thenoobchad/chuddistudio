
export const Button = ({ children, className }) => {
	return (
		<button
			type="submit"
			className={`h-12 rounded-md cursor-pointer  px-4 text-md tracking-wide flex items-center  transition-all ${className}`}>
			{children}
		</button>
	);
};
