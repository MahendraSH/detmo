import { Button } from "@/components/ui/button";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className=" container p-4 flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-2xl">Hello world!</p>
      <div className="flex gap-3">
        {/* large */}
        <Button size={"lg"}>Button</Button>
        <Button variant="ghost" size={"lg"}>
          Button
        </Button>
        <Button variant="outline" size={"lg"}>
          Button
        </Button>
        <Button variant="link" size={"lg"}>
          Button
        </Button>
        <Button variant="secondary" size={"lg"}>
          Button
        </Button>
        <Button variant="destructive" size={"lg"}>
          Button
        </Button>
      </div>
      {/* default */}
      <div className="flex gap-3">
        <Button size={"default"}>Button</Button>
        <Button variant="ghost" size={"default"}>
          Button
        </Button>
        <Button variant="outline" size={"default"}>
          Button
        </Button>
        <Button variant="link" size={"default"}>
          Button
        </Button>
        <Button variant="secondary" size={"default"}>
          Button
        </Button>
        <Button variant="destructive" size={"default"}>
          Button
        </Button>
      </div>

      {/* small */}
      <div className="flex gap-3">
        <Button size={"sm"}>Button</Button>
        <Button variant="ghost" size={"sm"}>
          Button
        </Button>
        <Button variant="outline" size={"sm"}>
          Button
        </Button>
        <Button variant="link" size={"sm"}>
          Button
        </Button>
        <Button variant="secondary" size={"sm"}>
          Button
        </Button>
        <Button variant="destructive" size={"sm"}>
          Button
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
