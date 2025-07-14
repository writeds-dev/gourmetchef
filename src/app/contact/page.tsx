import React from "react";
import Image from "next/image";
import ContactForm from "@/shared/formWrapper";

const ConnectSection = () => {
  return (
   
 <section
  className="bg-cover bg-center text-white px-6 sm:py-20 md:py-28 lg:py-10 flex flex-col items-center"
  style={{
    backgroundImage: "url('/About/about.jpg')",
  }}
>
  {/* Contact Badge */}
  <span className="border border-white rounded-full px-6 py-2 mb-4 flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer hover:bg-white hover:text-[#A65F00] transition-all duration-300 ease-in-out">
    <span className="w-2 h-2 bg-white rounded-full block"></span>
    Contact
  </span>

  {/* Heading */}
  <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-extrabold text-center max-w-4xl mb-4 sm:mb-6 md:mb-8 leading-tight">
    <span className="text-gradient bg-gradient-to-r from-[#A65F00] to-[#F9A800] bg-clip-text">
      Get In Touch
    </span>
    <br />
    <span className="text-lg sm:text-3xl md:text-xl lg:text-2xl text-gray-900 mt-2 block font-medium">
      We&apos;re Here to Meet Your Business Needs
    </span>
  </h2>

  {/* Subtitle */}
  <p className="text-center text-black bg-white p-6 max-w-3xl mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 font-medium leading-relaxed tracking-wide shadow-lg transition-all duration-300 ease-in-out">
    If you are a restaurant, retailer, wholesaler, or seeking a custom solution with private-label food, we are ready to help you confidently scale.
  </p>
</section>


  );
};

const ContactPage = () => {
  return (
    <>
      <ConnectSection />

      <div className="min-h-screen lg:min-h-[800px] sm:min-h-[500px] flex justify-center items-center bg-white px-4 py-10 sm:py-14 lg:py-20">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-6 max-w-full md:max-w-lg">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight">
              Connect With Us For <br />
              <span className="italic text-[#A65F00]">Your Next Project</span>
            </h1>
            <p className="text-base max-w-full sm:max-w-md text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus reprehenderit consectetur obcaecati quidem, in harum esse, rerum ullam asperiores sed tempore veritatis.
            </p>
            <div className="flex justify-center">
              <Image
                src="https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-736.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_items_boosted&w=740"
                alt="Lorem"
                layout="responsive"
                height={400}
                width={600}
                className="rounded-md shadow-lg object-cover w-full max-w-md"
              />
            </div>

            {/* Address Info */}
            <div className="mt-8 text-gray-700 space-y-2 max-w-md">
              <p>
                <strong>Address:</strong> 5829 Grand National Dr Ballroom Building, Orlando, FL 32819, United States
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+14077263530" className="text-[#A65F00] hover:underline">
                  +1 407-726-3530
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@gourmetchefsgloabal.com" className="text-[#A65F00] hover:underline">
                  info@gourmetchefsgloabal.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Side Form - Imported ContactForm */}
          <div className="flex-1 flex flex-col gap-6 max-w-full md:max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold">Contact Form</h3>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gradient-to-r from-[#f9f9f9] to-[#f1f1f1] py-16 sm:py-20 lg:py-24 text-center px-6 rounded-lg shadow-lg">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2e3a3f] mb-6 leading-tight">
          We typically respond within 24 business hours.
          <br />
          <span className="text-[#A65F00]">For urgent inquiries, please call us directly.</span>
        </h3>

        <p className="text-lg text-gray-500 mb-6">
          <span className="font-semibold text-[#2e3a3f]">Let&apos;s Make Something Delicious Together!</span>
        </p>

        <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you need bulk food, private label, or specialty imports — we are your trusted B2B partners. Let&apos;s work together to create something amazing that will enhance your offerings.
        </p>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <a
            href="tel:+14077263530"
            className="bg-[#A65F00] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#924c00] transition-all duration-300 ease-in-out shadow-md hover:shadow-xl"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
