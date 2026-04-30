const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">TileGallery</h2>
          <p className="mt-2 text-sm">
            Discover premium tiles to enhance your home aesthetics. 
            Modern, stylish, and durable collections.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/all-tiles" className="hover:text-white">All Tiles</a></li>
            <li><a href="/my-profile" className="hover:text-white">My Profile</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
          <p>Email: support@tilegallery.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>

      </div>

      <div className="text-center border-t border-gray-700 py-4 text-sm">
        © 2026 TileGallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;