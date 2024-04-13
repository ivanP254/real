import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import RevealOnScroll from "./Effect.jsx";

export function Testimonials() {
  return (
    <section id="testimonials">
      
      <div className="container px-5 py-10 mx-auto text-center">
      <RevealOnScroll>
      <div className="text-center mb-10">
          <UsersIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Сертификаты от компании
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Проходил практику в компании InfoWatch по системам корпоративной безопасности
          </p>
        </div>
        </RevealOnScroll>

        <div className="relative flex flex-wrap mx-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial} className="p-2 md:w-1/2 w-full flex">
              <RevealOnScroll>
              <div className="flex flex-wrap h-full bg-gray-800 bg-opacity-40 p-4 rounded-2xl justify-center items-center">
                <img alt="testimonial"
                    src={testimonial.image}
                    className="w-full object-cover object-center mb-4 rounded-2xl" />
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
              </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}