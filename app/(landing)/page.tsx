import Navbar from "@/components/landing-components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { VideoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-background py-10 flex flex-col justify-center items-center gap-8">
      {/* hero section  */}
      <section className="flex flex-col justify-center md:p-3 p-2 container max-w-screen-md  text-center  gap-5">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-wrap md:px-4 px-2 ">
          Unlock the <span className="text-destructive/60"> Power</span> of
          Efficient Procurement
        </h1>
        <h2 className="text-lg text-wrap font-normal">
          Seamlessly Manage Orders and Discover the Perfect Suppliers with Our
          Advanced Procurement Software
        </h2>
        <div className="flex justify-center items-center gap-3">
          <Button size="lg"> Start Free Trial</Button>
          <Button size="lg" variant="outline">
            <VideoIcon className="w-5 h-5 mr-3" />
            View Demo
          </Button>
        </div>
      </section>
      {/* landing image section  */}
      <section className="">
        <Image src="/landing.svg" alt="landing" width={1000} height={1000} />
      </section>
      {/* trusted by section  */}
      <section className="flex flex-col justify-center md:p-3 p-2 container text-center  gap-5">
        <h3 className="text-lg">Trusted by Procurement Managers Worldwide</h3>
        <div className="flex justify-center items-center gap-3 flex-wrap">
          <Image src="/trust/zoom.svg" alt="logo" width={180} height={80} />
          <Image src="/trust/avatar.svg" alt="logo" width={180} height={80} />
          <Image src="/trust/ui-path.svg" alt="logo" width={180} height={80} />
          <Image src="/trust/fast.svg" alt="logo" width={180} height={80} />
          <Image src="/trust/axon.svg" alt="logo" width={180} height={80} />
        </div>
      </section>
      {/* video section */}
      <section
        className="flex flex-col justify-center md:p-20 p-2 container 
       mx-auto  text-center  gap-6 items-center bg-muted/30 rounded-md"
      >
        <h3 className="text-lg"> Empowering Procurement By</h3>
        <article className="flex flex-col md:flex-row justify-stretch items-start gap-20">
          <Card className="w-96 md:w-[450px]  aspect-video flex justify-center items-center align-middle">
            <Button variant="ghost" className="p-5 h-12 rounded-full">
              <VideoIcon className="w-5 h-5 " />
            </Button>
          </Card>
          {/* list of pointes here */}
          <div>
            <h3 className="text-2xl text-primary">Spend Analysis</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="w-10"></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="w-10">
                    <Image
                      src="/pointer.svg"
                      alt="logo"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="text-lg text-start">
                    Gain Deeper Insights into Your Spending Patterns.
                  </td>
                </tr>
                <tr>
                  <td className="w-10">
                    <Image
                      src="/pointer.svg"
                      alt="logo"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="text-lg text-start">
                    Gain Deeper Insights into Your Spending Patterns.
                  </td>
                </tr>
                <tr>
                  <td className="w-10">
                    <Image
                      src="/pointer.svg"
                      alt="logo"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="text-lg text-start">
                    Gain Deeper Insights into Your Spending Patterns.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <article className="flex flex-col md:flex-row justify-stretch items-start gap-20">
          {/* list of pointes here */}
          <div>
            <h3 className="text-2xl text-primary">Spend Analysis</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="w-10"></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="w-10">
                    <Image
                      src="/pointer.svg"
                      alt="logo"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="text-lg text-start">
                    Gain Deeper Insights into Your Spending Patterns.
                  </td>
                </tr>
                <tr>
                  <td className="w-10">
                    <Image
                      src="/pointer.svg"
                      alt="logo"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="text-lg text-start">
                    Gain Deeper Insights into Your Spending Patterns.
                  </td>
                </tr>
                <tr>
                  <td className="w-10">
                    <Image
                      src="/pointer.svg"
                      alt="logo"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="text-lg text-start">
                    Gain Deeper Insights into Your Spending Patterns.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Card className="w-96 md:w-[450px]  aspect-video flex justify-center items-center align-middle">
            <Button variant="ghost" className="p-5 h-12 rounded-full">
              <VideoIcon className="w-5 h-5 " />
            </Button>
          </Card>
        </article>
      </section>
      <Separator className="bg-primary" />
      {/* profile company section  */}
      <section
        className="flex flex-col justify-center md:p-20 p-2 container 
       mx-auto  text-center  gap-6 items-center"
      >
        {/* <h3 className="text-lg"> </h3> */}
        <article className="flex flex-col md:flex-row justify-stretch items-start gap-20">
          <div className="w-96 md:w-[450px]  aspect-video flex justify-center items-center align-middle">
            <Image src="/profile.svg" alt="profile" width={250} height={250} />
          </div>
          <div className=" text-start flex flex-col  gap-5">
            <h3 className="text-2xl text-primary">Spend Analysis</h3>
            <p className="text-lg text-wrap font-normal">
              Seamlessly Manage Orders and Discover the Perfect Suppliers with
              Our Advanced Procurement Software
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam
              praesentium accusamus adipisci reprehenderit veniam repellat rem
              magni minima quasi a iure minus error dolores aliquam, nobis
              tenetur. Consequatur, beatae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam
              praesentium accusamus adipisci reprehenderit veniam repellat rem
              magni minima quasi a iure minus error dolores aliquam, nobis
              tenetur. Consequatur, beatae!
            </p>
          </div>
        </article>
      </section>
      <Separator className="bg-primary" />

      {/* footer hero section */}
      <section className="flex flex-col justify-center md:p-3 p-2 container max-w-screen-md  text-center  gap-5">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-wrap md:px-4 px-2 ">
          Experience Next-Level Procurement Efficiency!{" "}
        </h1>
        <h2 className="text-lg text-wrap font-normal">
          Seamlessly Manage Orders and Discover the Perfect Suppliers with Our
          Advanced Procurement Software
        </h2>
        <div className="flex justify-center items-center gap-3">
          <Button size="lg"> Start Free Trial</Button>
        </div>
      </section>
    </div>
  );
};

export default page;
