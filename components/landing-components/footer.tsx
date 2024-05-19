import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className=" border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:flex md:items-center md:justify-between">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />

          <div className="flex mt-8 space-x-6 md:mt-0">
            {/* social accounts */}
            <Button variant={"ghost"} size={"sm"}>
              {" "}
              Github{" "}
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              {" "}
              Twitter{" "}
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              {" "}
              LinkedIn{" "}
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              {" "}
              Discord{" "}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="flex mt-8 space-x-6 md:mt-0">
            <p className="text-base text-muted-foreground">
              Copyright © 2023. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
