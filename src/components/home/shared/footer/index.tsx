import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 relative">
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Text */}
        <div className="text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Image
              src="/shared/Gclogo.svg"
              alt="Gourmet Chef Logo"
              width={92}
              height={80}
              className="rounded-full"
              priority
            />
          </div>
          <p className="max-w-xs mx-auto md:mx-0 leading-relaxed text-white">
            Bringing you authentic Indian sweets and cuisine with passion and care.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="flex items-center gap-3 text-white">
            <span className="text-yellow-400">📧</span>
            info@gourmetchefsglobal.com
          </p>
          <p className="flex items-center gap-3 text-white">
            <span className="text-yellow-400">📞</span> +1 407-726-3530
          </p>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-6">
            {[
              {
                href: "https://www.instagram.com/gourmetchefsofficial/",
                label: "Instagram",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 hover:text-yellow-400 transition-colors"
                  >
                    <path d="M7.75 2C4.548 2 2 4.548 2 7.75v8.5C2 19.452 4.548 22 7.75 22h8.5c3.202 0 5.75-2.548 5.75-5.75v-8.5C22 4.548 19.452 2 16.25 2h-8.5zm4.25 5.5a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm6.25-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                  </svg>
                ),
              },
              {
                href: "https://www.facebook.com/GourmetChefss/",
                label: "Facebook",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 hover:text-yellow-400 transition-colors"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5v-2.2c0-2.46 1.5-3.82 3.79-3.82 1.1 0 2.25.2 2.25.2v2.5h-1.25c-1.23 0-1.61.76-1.61 1.53v1.8h2.74l-.44 2.87h-2.3v6.99A10 10 0 0022 12z" />
                  </svg>
                ),
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-yellow-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500 select-none">
        <p>
          © 2025 Gourmet Chef. All rights reserved. |{" "}
          <a href="#" className="underline hover:text-yellow-400">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="underline hover:text-yellow-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
