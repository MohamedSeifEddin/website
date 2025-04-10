const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto text-center space-y-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Mohamed, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
