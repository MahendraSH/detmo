import { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  DotsHorizontalIcon,
  DropdownMenuIcon,
  HamburgerMenuIcon,
  MoveIcon,
} from "@radix-ui/react-icons";
import Sidebar from "./sidebar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div
      className=" flex justify-start items-center w-full md:p-4 p-2 min-h-20 bg-background 
    text-foreground fixed top-0 shadow-sm shadow-muted"
    >
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <nav
        className="hidden  md:flex gap-x-6 justify-end items-center ml-auto bg-card
       text-card-foreground rounded-md p-1"
      >
        <Button variant={"ghost"} size={"sm"} className="px-4">
          Product
        </Button>
        <Button variant={"ghost"} size={"sm"} className="px-4">
          Solution
        </Button>
        <Button variant={"ghost"} size={"sm"} className="px-4">
          Pricing
        </Button>
        <Button variant={"ghost"} size={"sm"} className="px-4">
          Log in
        </Button>
        <Button size="lg"> Start Free Trial</Button>
      </nav>
      <nav
        className="flex md:hidden gap-x-6 justify-end items-center ml-auto bg-card
       text-card-foreground rounded-md p-1"
      >
        <Button variant={"ghost"} size={"sm"} className="px-4">
          Log in
        </Button>
        <Sidebar />
      </nav>
    </div>
  );
};

export default Navbar;
