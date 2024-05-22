import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import CardHeaders from "@/components/dashboard/spend-analysis-comp/cards-headers";
import { DollarSign } from "lucide-react";

interface SpendAnalysisProps {}

const SpendAnalysis: FC<SpendAnalysisProps> = ({}) => {
  return (
    <>
      <Breadcrumb className=" ">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Spend Analysis</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className=" flex md:flex-row flex-col justify-between items-center gap-4 py-4">
        <h1 className=" md:text-3xl sm:text-2xl text-xl font-medium">
          Spend Analysis{" "}
        </h1>
        <div className="flex gap-6 md:flex-row flex-col">
          <div className=" flex gap-x-4 justify-center items-center">
            <Button variant={"ghost"}>demo1</Button>
            <Button variant={"ghost"}>demo2</Button>
          </div>
          <div className=" flex gap-x-4 justify-center items-center">
            <Button variant="outline">demo1</Button>
            <Button variant="outline">demo2</Button>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="grid   gap-4  grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
      </div>
    </>
  );
};

export default SpendAnalysis;
