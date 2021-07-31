import React, { useState } from "react";
import Switch from "./PricingParts/Switch";

const Price = () => {
  const [value, setValue] = useState(false);
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
              O'z kursingizni tanlang
            </h2>

            <br />
            <div className="max-w-xl mx-auto flex items-center justify-center flex-row space-x-16 p-1 m-5 shadow-md bg-white rounded-l-2xl rounded-t-2xl">
              <div>
                <i className="fas fa-heart bg-red-300"></i>
                <span className="pr-3 text-xl">Guruh</span>
                <Switch />
              </div>
              <div>
                <span className="pr-3 text-xl"> Mini-Guruh</span>
                <Switch />
              </div>
              <div>
                <span className="pr-3 text-xl">Individual</span>
                <Switch />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="p-8 bg-white shadow-xl rounded-l-2xl rounded-t-2xl">
                <h4 className="mb-2 text-3xl font-bold font-heading">
                  General English
                </h4>
                <span className="text-6xl font-bold">290000</span>
                <span className="text-gray-400 text-md">/oyiga</span>
                <p className="mt-3 mb-6 text-gray-500 leading-loose">
                  Nullam diam arcu, sodales quis convallis sit amet, sagittis
                  varius ligula.
                </p>
                <ul className="mb-6 text-gray-500">
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Vestibulum viverra</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Morbi mollis metus pretium</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Etiam lectus nunc, commodo</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Ut quam nisl mollis id pretium</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Suspendisse bibendum</span>
                  </li>
                </ul>
                <a
                  className="transition-all duration-300 ease-out inline-block text-center py-2 px-4 w-full text-lg rounded-l-xl rounded-t-xl border-2 border-red-600 bg-red-600 hover:bg-white hover:text-gray-500 hover:border-red-500 text-white font-bold leading-loose"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="p-8 bg-red-600 shadow-xl rounded-l-2xl rounded-t-2xl ">
                <h4 className="mb-2 text-3xl font-bold text-white">IELTS</h4>
                <span className="text-6xl font-bold text-white">390000</span>
                <span className="text-gray-50 text-md">/oyiga</span>
                <p className="mt-3 mb-6 leading-loose text-gray-50">
                  Nullam diam arcu, sodales quis convallis sit amet, sagittis
                  varius ligula.
                </p>
                <ul className="mb-6 text-gray-50">
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Wi-fi</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Morbi mollis metus pretium</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Etiam lectus nunc, commodo</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Ut quam nisl mollis id pretium</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Suspendisse bibendum</span>
                  </li>
                </ul>
                <a
                  className="inline-block transition-all duration-300 ease-out text-center py-2 px-4 w-full text-lg rounded-l-xl border-2 border-white rounded-t-xl bg-white hover:bg-red-600 hover:text-white font-bold leading-loose"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="p-8 bg-white shadow-xl rounded-l-2xl rounded-t-2xl">
                <h4 className="mb-2 text-3xl font-bold font-heading">
                  RUS &amp; KOREAN
                </h4>
                <span className="text-6xl font-bold">290000</span>
                <span className="text-gray-400 text-md">/oyiga</span>
                <p className="mt-3 mb-6 text-gray-500 leading-loose">
                  Nullam diam arcu, sodales quis convallis sit amet, sagittis
                  varius ligula.
                </p>
                <ul className="mb-6 text-gray-500">
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Vestibulum viverra</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Morbi mollis metus pretium</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Etiam lectus nunc, commodo</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Ut quam nisl mollis id pretium</span>
                  </li>
                  <li className="mb-2 flex">
                    <svg
                      className="mr-2 w-5 h-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Suspendisse bibendum</span>
                  </li>
                </ul>
                <a
                  className="transition-all duration-300 ease-out inline-block text-center py-2 px-4 w-full text-lg rounded-l-xl rounded-t-xl border-2 border-red-600 bg-red-600 hover:bg-white hover:text-gray-500 hover:border-red-500 text-white font-bold leading-loose"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
