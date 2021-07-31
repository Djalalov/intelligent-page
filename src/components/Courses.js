import React from "react";
import Ielts from "../assets/Ielts.png";

import {
  faCarCrash,
  faChalkboardTeacher,
  faClock,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Courses = () => {
  return (
    <div className="antialiased bg-white text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            {/* A JSX comment */}
            <a
              href=""
              className=" block bg-gray-50 shadow-md hover:shadow-xl overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover "
                  src={Ielts}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h2 className="mt-2 mb-2 font-bold"> IELTS Foundation</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  sed commodi consectetur! Sunt eligendi architecto tempore
                  repellat aut est exercitationem.
                </p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold"></span>&nbsp;
                  <span className="font-bold text-xl"> 390.000 sum</span>&nbsp;
                </div>
              </div>
              <div class="p-4 border-t border-b text-xs text-gray-700">
                <span class="flex items-center mb-3">
                  <FontAwesomeIcon icon={faClock} />{" "}
                  <span className="px-2 font-semibold">
                    {" "}
                    2:00 p.m - 3:30 p.m.
                  </span>
                </span>
                <span class="flex items-center">
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                  <span className="px-2 font-semibold"> Mr. Humoyun</span>
                </span>
              </div>
              <div class="p-4 flex items-center text-sm text-gray-600">
                <span class="ml-2">34 Bewertungen</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
