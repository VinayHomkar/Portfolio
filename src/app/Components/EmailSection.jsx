"use client";
import React from "react";
import GitubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section className="grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12 realative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white ">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
          dolorum. Natus repellat laudantium enim optio laboriosam illo earum
          nesciunt nobis!
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="github.com">
            <Image src={GitubIcon} alt="Github" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin" />
          </Link>
        </div>
      </div>

      <form className="flex flex-col">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your Email
          </label>
          <input
            name="email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
            type="email"
            id="email"
            required
            placeholder="abc@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-white"
          >
            Subject
          </label>
          <input
            name="subject"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
            type="text"
            id="subject"
            required
            placeholder="Hello"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-white "
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let' Talk"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default EmailSection;
