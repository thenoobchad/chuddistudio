

export const Header = () => {
  return (
    <header className="h-18 border-b-4 flex items-center justify-between bg-white">

    <nav className="w-full flex justify-between pr-4 gap-4">
      <ul className="flex items-center gap-4 text-gray-800 font-semibold pl-4">
      <a href="#" className="whitespace-nowrap tracking-tight">About us</a>
        <a href="#" className="whitespace-nowrap tracking-tight">Services</a>
        <a href="#" className="whitespace-nowrap tracking-tight">Case studies</a>
        </ul>
    </nav>

    <a href="/" className=" h-full flex items-center justify-center border-l-2 px-2 text-xl font-bold tracking-tighter ">chud <span className="text-orange-600">i</span> studio</a>
   

  </header>
  )
}
