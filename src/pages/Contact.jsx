import { MailIcon, PhoneCallIcon } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <section className="pt-18 md:h-screen max-w-7xl mx-auto flex items-center">
      <div className="md:h-[70vh] w-[100%] flex flex-col md:flex-row justify-between items-center">
        {/* left con */}

        <div className="w-[95%] md:w-[30%] h-[100%] shadow-2xl p-8 ">
          {/* upper contener */}
          <div className=" pb-8 grid gap-4 h-[40%] border-b-2 border-gray-400">
            <div className="flex gap-4 items-center">
              <button className="p-3 flex justify-center items-center bg-red-400 text-white rounded-full">
                <PhoneCallIcon />
              </button>
              <p className="font-semibold text-lg">Call To Us</p>
            </div>

            <p className="font-semibold text-sm">
              We are available 24/7, 7 days a week,
            </p>
            <p className="font-semibold text-sm">Phone : +8801611112222</p>
          </div>

          {/* down contener */}
          <div className="pt-8 grid gap-4">
            <div className="flex gap-4 items-center">
              <button className="p-3 flex justify-center items-center bg-red-400 text-white rounded-full">
                <MailIcon />
              </button>
              <p className="font-semibold text-lg">Write To Us</p>
            </div>

            <p className="font-semibold text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="font-semibold text-sm">
              Emails: customer@exclusive.com
            </p>
            <p className="font-semibold text-sm">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        {/* right con */}

        <div className="w-[95%] md:w-[68%] shadow-2xl h-[100%] grid my-20 md:my-0 gap-8 p-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 md:h-[45px]">
            <input
              className="p-3 md:w-[32%] bg-gray-200 border-none outline-none rounded"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="p-3 md:w-[32%] bg-gray-200 border-none outline-none rounded"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="p-3 md:w-[32%] bg-gray-200 border-none outline-none rounded"
              type="number"
              placeholder="Your Phone"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="h-[100px] md:h-[260px] w-[100%] bg-gray-200 brder-none outline-none p-3"
          ></textarea>

          {/* button sec */}
          <div className="flex justify-end items-center  ">
            <button className="md:px-8 px-3 md:py-3 py-1 bg-red-400 rounded text-white font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
