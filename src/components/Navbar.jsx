import { ArrowRightIcon } from '@heroicons/react/solid';
import React from "react";

export function Navbar() {
  return (
    <header className=" md:sticky top-0 z-10 backdrop-blur-sm bg-gray-800/70">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <p href="#about" className="ml-3 text-xl">
            Petrov Ivan
          </p>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#carousel" className="mr-5 hover:text-white">
            Проекты
          </a>
          <a href="#cards" className="mr-5 hover:text-white">
            Скилы
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Сертификаты
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Форма обратной связи
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}