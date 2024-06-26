"use client";
import Container from "@/components/ui/Container";
import emailjs from "emailjs-com";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

const options = [
  { value: "MVP Development", label: "MVP Development" },
  { value: "Scale Up", label: "Scale Up" },
  { value: "User Testing", label: "User Testing" },
  { value: "UX Design", label: "UX Design" },
  { value: "Frontend Development", label: "Frontend Development" },
  { value: "Backend Development", label: "Backend Development" },
  { value: "AI and Machine Learning", label: "AI and Machine Learning" },
  {
    value: "Blockchain and Cryptocurrency",
    label: "Blockchain and Cryptocurrency",
  },
  { value: "SEO Services", label: "SEO Services" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: "0.5rem",
    borderRadius: "0.5rem",
    width: "100%",
    // backgroundColor: "#DDDDDD",
    border: state.isFocused ? "1px solid black" : "1px solid #DDDDDD",
    outline: "none",
    color: "#0E0C21",
  }),
  valueContainer: (provided) => ({
    ...provided,
    flexWrap: "nowrap",
  }),
};

const ContactSection = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const selectedServiceValues = selectedOptions.map((option) => option.value);

    const templateParams = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      service: selectedServiceValues.join(", "), // Convert array to comma-separated string
      message: formData.get("message"),
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (result.status === 200) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email: " + result.text);
        console.error("Failed to send email", result.text);
      }
    } catch (error) {
      toast.error("Failed to send email: " + error.message);
      console.error("Failed to send email:", error);
    }
  };
  return (
    <>
      <ToastContainer />
      <section id="contact-form" className="py-16 md:py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="col">
              <div className="h-full flex flex-col">
                <div>
                  <h3 className="mb-6 font-clash-display font-medium text-3xl leading-[3.075rem] text-[2.5rem]">
                    Let's Collaborate
                  </h3>
                  <p className="text-white/80">
                    Give us a shout and we’ll get back to you at our earliest.
                  </p>
                </div>
                <div className="pt-10 mt-auto relative z-10">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="mailto:contact@aurorainsights.com"
                        className="flex items-center gap-4 text-white hover:opacity-80"
                      >
                        <EnvelopeIcon className="w-6 h-6" />
                        <span>contact@aurorainsights.com</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+7802227601"
                        className="flex items-center gap-4 text-white hover:opacity-80"
                      >
                        <PhoneIcon className="w-6 h-6" />
                        <span>780-222-7601</span>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center gap-4 text-white">
                        <MapPinIcon className="w-6 h-6" />
                        <span>Alberta, Canada</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <form onSubmit={handleSubmit}>
                <div className="px-5 py-6 rounded-2xl bg-gray-900 relative z-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="sm:col-span-2 col form-group">
                      <label className="mb-2 block" htmlFor="fullName">
                        Full name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        className="p-3 rounded-lg w-full text-dark border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                        placeholder="Enter your name..."
                      />
                    </div>
                    <div className="col form-group">
                      <label className="mb-2 block" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="p-3 rounded-lg w-full text-dark border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div className="col form-group">
                      <label className="mb-2 block" htmlFor="phoneNumber">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        required
                        className="p-3 rounded-lg w-full text-dark border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="col sm:col-span-2 form-group">
                      <label className="mb-2 block" htmlFor="service">
                        Service you are interested in
                      </label>

                      <Select
                        className="text-dark"
                        options={options}
                        isMulti
                        value={selectedOptions}
                        onChange={handleSelectChange}
                        placeholder="Select services..."
                        styles={customStyles}
                        isSearchable={false}
                      />
                      {/* <select
                          name="service"
                          id="service"
                          className="p-3 rounded-lg w-full text-dark border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                        >
                          <option selected disabled value="">
                            Select one...
                          </option>
                          <option value=" Web design and Development">
                            Web design and Development
                          </option>
                          <option value="Search Engine Optimization">
                            Search Engine Optimization
                          </option>
                          <option value="Social Media Marketing">
                            Social Media Marketing
                          </option>
                          <option value="Graphic Design">Graphic Design</option>
                          <option value="Media Production">
                            Media Production
                          </option>
                        </select> */}
                    </div>
                    <div className="col sm:col-span-2 form-group">
                      <label className="mb-2 block" htmlFor="message">
                        How can we help you?
                      </label>

                      <textarea
                        rows={5}
                        name="message"
                        id="message"
                        required
                        className="p-3 rounded-lg w-full text-dark border-[#DDDDDD] focus:border-black focus:ring-0 focus:bg-white placeholder:text-[#505050]"
                        placeholder="Type your message..."
                      />
                    </div>
                    <div className="col sm:col-span-2 form-group">
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="accept-terms"
                            name="accept-terms"
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-600 text-[#e97f83] focus:ring-[#e97f83]"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="accept-terms"
                            className="font-roboto text-white"
                          >
                            I accept the{" "}
                            <a href className="underline hover:opacity-80">
                              Terms
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col sm:col-span-2">
                      <button type="submit" className="btn-primary-1 w-full">
                        <span className="relative z-10">Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactSection;
