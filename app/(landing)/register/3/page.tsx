"use client";
import { format } from "date-fns";
import { CalendarDays, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import BaseCard from "~/components/custom/common/base-card";
import Heading from "~/components/custom/common/headings/heading";
import BillIcon from "~/components/custom/icon/bill";
import UserFormIcon from "~/components/custom/icon/user-form";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

function BillingStep3() {
  const form = useForm();
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="container mx-auto grid w-full grid-cols-[358px] justify-center justify-items-center xl:mb-40 xl:grid-cols-[320px_944px] xl:gap-6">
      <BaseCard className="mb-6 w-full space-y-5 font-['PT_Serif'] text-[14px]/[2] xl:order-1 xl:mb-0 xl:h-[496px] xl:px-6 xl:py-12">
        <div className="mb-6 flex items-center gap-2 xl:mb-10 xl:gap-3">
          <BillIcon fill="var(--secondary-foreground)" className="xl:size-6" />
          <span className="xl:b2-regular font-bold text-secondary-foreground">
            Billing Information
          </span>
        </div>
        <div className="flex items-center gap-2 xl:gap-3">
          <UserFormIcon className="xl:size-6" fill="var(--accent)" />
          <span className="xl:b2-regular text-accent">Tell Us a Bit More</span>
        </div>
      </BaseCard>
      <Heading className="xl:order-0 xl:col-span-2 xl:mb-12">
        Tell Us a Bit More
      </Heading>
      <BaseCard className="mb-20 px-4 xl:order-2 xl:mb-0 xl:max-w-[944px] xl:p-12">
        <div className="mb-6 flex flex-wrap items-center gap-[6px] gap-y-4 xl:mb-12 xl:gap-3">
          <div className="flex items-center gap-[6px]">
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full bg-accent text-primary-foreground xl:size-8">
              <div>1</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular font-bold">
              Personal Information
            </span>
          </div>
          <ChevronRight size={16} />
          <div className="flex items-center gap-[6px] xl:gap-3">
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full border border-secondary-foreground text-secondary-foreground xl:size-8">
              <div>2</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular text-secondary-foreground">
              Investment Experience
            </span>
          </div>
          <ChevronRight className="text-secondary-foreground" size={16} />
          <div className="flex items-center gap-[6px] xl:gap-3">
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full border border-secondary-foreground text-secondary-foreground xl:size-8">
              <div>3</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular text-secondary-foreground">
              Risk Tolerance
            </span>
          </div>
        </div>
        <h2 className="xl:t1-bold b1-bold mb-4 text-left text-primary-foreground xl:mb-6 ">
          Personal Information
        </h2>
        <Form {...form}>
          <form onSubmit={() => {}}>
            <div className="mb-6 space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="b3-regular text-primary-foreground">
                      First Name: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px] xl:w-[416px]"
                        type="text"
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="b3-regular text-primary-foreground">
                      Last Name: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular xl:w-[416px]"
                        type="text"
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name=""
                render={() => (
                  <FormItem>
                    <FormLabel className="b3-regular block text-primary-foreground">
                      DOB: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl className="block">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="select"
                            className={cn(
                              "w-full justify-between bg-dark-gray px-6 py-3 text-left font-normal text-secondary-foreground xl:w-[416px]",
                              !date && "text-muted-foreground",
                            )}
                          >
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>DD/MM/YYYY</span>
                            )}
                            <CalendarDays color="var(--primary-foreground)" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="b3-regular text-primary-foreground">
                      Phone Number: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="xl:w-[416px]"
                        type="text"
                        placeholder="+234 | Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="b3-regular text-primary-foreground">
                      Employer/Occupation:{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="b3-regular xl:b2-regular w-full border-none bg-dark-gray text-secondary-foreground xl:h-12">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="b3-regular bg-light-gray text-secondary-foreground">
                          <SelectItem value=".">...</SelectItem>
                          <SelectItem value="..">...</SelectItem>
                          <SelectItem value="...">...</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center xl:justify-end">
              <Button className="mb-0 h-8 w-20 xl:h-12 xl:w-[132px]">
                <Link className="b3-bold xl:b2-bold" href="/register/4">
                  NEXT
                </Link>
              </Button>
            </div>
          </form>
        </Form>
      </BaseCard>
    </div>
  );
}

export default BillingStep3;
