"use client";
import React from "react";
import Search from "./Search";
import { FaGithubSquare } from "react-icons/fa"; 
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
const Nav = () => {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">
          <Link href="/">Next.js Image Gallery</Link>
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <FaGithubSquare size={35}/>
        <NavbarItem>
          <Search />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
