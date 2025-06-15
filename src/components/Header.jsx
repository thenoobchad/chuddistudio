

export default function Header() {
  return (
      <header className="h-12 w-full">
          <div className="text-sm text-gray-900 h-full">
              <div className="flex justify-between items-center h-full container mx-auto px-4">
                  <a href="/" className="bg-black p-2 text-[13px] text-white">HENRY ELUEME</a>
              
                  <nav>
                      <ul className="flex gap-4">
                          <li>
                              <a href="">ABOUT</a>
                          </li>
                          <li>
                              <a href="">SERVICES</a>
                          </li>
                          <li>
                              <a href="">CONTACT</a>
                          </li>
                          <li>
                              <a href="">WORKS</a>
                          </li>
                      </ul>
                  </nav>

                <p className="bg-muted flex flex-nowrap">FEED IN 2025</p>
              </div>
          </div>
    </header>
  )
}
