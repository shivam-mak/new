import React from "react";

const Footer = () => {
  return (
    <footer className=" bg bg-blend-darken text-gray-400 py-8 px-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 container mx-auto">
        <div>
          <h5 className="uppercase text-gray-4000 font-medium mb-4 hover:text-gray-600 cursor-pointer">Product</h5>
          <ul className="space-y-2">
            <li className="hover:text-gray-600 cursor-pointer">Use Cases</li>
            <li className="hover:text-gray-600 cursor-pointer">For Business</li>
            <li className="hover:text-gray-600 cursor-pointer">Resources</li>
            <li className="hover:text-gray-600 cursor-pointer">Pricing</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase text-gray-400 font-medium mb-4 hover:text-gray-600 cursor-pointer">Downloads</h5>
          <ul className="space-y-2">
            <li className="hover:text-gray-600 cursor-pointer">Desktop App</li>
            <li className="hover:text-gray-600 cursor-pointer">Chrome Extension</li>
            <li className="hover:text-gray-600 cursor-pointer">Safari Extension</li>
            <li className="hover:text-gray-600 cursor-pointer">iOS App</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase text-gray-400 font-medium mb-4 hover:text-gray-600 cursor-pointer">Resources</h5>
          <ul className="space-y-2">
            <li className="hover:text-gray-600 cursor-pointer">Blog</li>
            <li className="hover:text-gray-600 cursor-pointer">Help & Support</li>
            <li className="hover:text-gray-600 cursor-pointer">Community</li>
            <li className="hover:text-gray-600 cursor-pointer">Status</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase text-gray-400 font-medium mb-4 hover:text-gray-600 cursor-pointer">Company</h5>
          <ul className="space-y-2">
            <li className="hover:text-gray-600 cursor-pointer">About Us</li>
            <li className="hover:text-gray-600 cursor-pointer">Careers</li>
            <li className="hover:text-gray-600 cursor-pointer">Media Kit</li>
            <li className="hover:text-gray-600 cursor-pointer">Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <div className="flex justify-center space-x-4">
          <span className="hover:text-gray-600 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-600 cursor-pointer">Terms of Service</span>
        </div>
        <p className="mt-4">&copy; 2024, Designed by k&a</p>
      </div>
    </footer>
  );
};

export default Footer;
