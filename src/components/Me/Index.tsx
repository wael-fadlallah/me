import React from "react";
import AwesomeMe from "../../images/me.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Me() {
  return (
    <div className="">
      <div className="rounded-full w-[150px] h-[150px] overflow-hidden">
        <img src={AwesomeMe} className="w-[150px] " alt="" />
      </div>
      <h1 className="mt-4">Wael Fadlallh Elnor</h1>

      <div className="flex justify-center">
        <a href="https://www.linkedin.com/in/wael-fadl-allah/" target="_blank">
          <FaLinkedin className="m-1" size={25} />
        </a>
        <a href="https://github.com/wael-Fadlallah" target="_blank">
          <FaGithubSquare className="m-1" size={25} />
        </a>
      </div>
    </div>
  );
}
