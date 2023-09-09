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
        <Link color="foreground" href="https://github.com/jasper1902/nextjs-image-gallery">
          <FaGithubSquare size={35} />
        </Link>
        <NavbarItem>
          <Search />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
