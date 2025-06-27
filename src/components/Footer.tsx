import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 p-4">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>(+216) 20250297</p>
            <p>contact@ngd.com</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Our Services</h2>
            <ul>
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Get in touch:</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573350952299"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/ngd_communications/"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/+21620250297"
                className="text-gray-400 hover:text-white"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            Copyright ©2025 All rights reserved | New Generation of Developers
          </p>
        </div>
      </div>
    </footer>
  );
}
