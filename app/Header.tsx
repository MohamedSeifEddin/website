const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-extrabold text-blue-600">Kyno</div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
