import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className=" px-2 flex justify-between items-center w-full h-full">
        <div className=" flex items-center">
          <h1 className=" text-3xl font-bold mr-4 teal sm:text-4xl">
            Macro<span className="info">Infos</span>{" "}
          </h1>

          <ul className="hidden md:flex">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/boutique">Boutique</Link>
            </li>
            <li>
              <Link to="/formations">Formation</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className=" hidden md:flex pr-4">
          <button className=" border-none bg-transparent  text-black mr-4">
            Connexion
          </button>
          <button className=" px-8 py-3 bg-teal">Inscription</button>
        </div>
        <div className=" md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className=" w-5" /> : <XIcon className=" w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className=" border-b-2 border-zinc-300 w-full">Accueil</li>
        <li className=" border-b-2 border-zinc-300 w-full">Boutique</li>
        <li className=" border-b-2 border-zinc-300 w-full">Formation</li>
        <li className=" border-b-2 border-zinc-300 w-full">Contact</li>
        <div className="flex flex-col my-4">
          <button className=" bg-transparent info px-8 py-3 mb-4">
            Connexion
          </button>
          <button className=" px-8 py-3 bg-teal">Inscription</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
