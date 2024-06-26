"use client";

import { format } from "date-fns";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function DatePickerComponent({
  dateValue,
  onDateChange,
}: {
  dateValue: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}) {
  const [date, setDate] = React.useState<Date>(dateValue ?? new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            " justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate || new Date());
            onDateChange(newDate);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
