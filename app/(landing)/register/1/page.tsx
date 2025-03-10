"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import BaseCard from "~/components/custom/common/base-card";
import Heading from "~/components/custom/common/headings/heading";
import BillIcon from "~/components/custom/icon/bill";
import UserFormIcon from "~/components/custom/icon/user-form";
import { Button } from "~/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

function Register1() {
  const form = useForm();
  return (
    <div className="container relative mx-auto grid w-full grid-cols-[358px] justify-center justify-items-center xl:mb-40 xl:grid-cols-[320px_944px] xl:gap-6">
      <BaseCard className="mb-6 w-full space-y-5 font-['PT_Serif'] text-[14px]/[2] xl:order-1 xl:mb-0 xl:px-6 xl:py-12">
        <div className="mb-6 flex items-center gap-2 xl:mb-10 xl:gap-3">
          <BillIcon className="xl:size-6" />
          <span className="xl:b2-regular font-bold text-accent">
            Billing Information
          </span>
        </div>
        <div className="flex items-center gap-2 xl:gap-3">
          <UserFormIcon
            className="xl:size-6"
            fill="var(--secondary-foreground)"
          />
          <span className="xl:b2-regular text-secondary-foreground">
            Tell Us a Bit More
          </span>
        </div>
      </BaseCard>
      <Heading className="xl:order-0 xl:col-span-2 xl:mb-12">
        Billing Information
      </Heading>
      <BaseCard className="mb-20 w-full px-4 xl:order-2 xl:mb-0 xl:max-w-[944px] xl:p-12">
        <div className="mb-6 flex items-center gap-[6px] xl:mb-12 xl:gap-3">
          <div className="flex items-center gap-2">
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full bg-accent text-primary-foreground xl:size-8">
              <div>1</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular font-bold">
              Billing Address
            </span>
          </div>
          <ChevronRight className="text-secondary-foreground" size={16} />
          <div className="flex items-center gap-2 xl:gap-3">
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full border border-secondary-foreground text-secondary-foreground xl:size-8">
              <div>2</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular text-secondary-foreground">
              Payment Details
            </span>
          </div>
        </div>
        <h2 className="xl:t1-bold b1-bold mb-4 text-left text-primary-foreground xl:mb-6 ">
          Billing Address
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
                      Address (Line 1):{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px] xl:h-[72px] xl:w-[416px]"
                        type="text"
                        placeholder="Address"
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
                      Address (Line 2 ):{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px] xl:h-[72px] xl:w-[416px]"
                        type="text"
                        placeholder="Address"
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
                      City: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px] xl:w-[416px]"
                        type="text"
                        placeholder="City"
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
                    <FormLabel className=" text-primary-foreground">
                      State: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="w-full border-none text-secondary-foreground xl:w-[416px]">
                          <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent className="b3-regular bg-light-grey text-secondary-foreground">
                          <SelectItem value="Alabama">Alabama</SelectItem>
                          <SelectItem value="Colorado">Colorado</SelectItem>
                          <SelectItem value="Texas">Texas</SelectItem>
                        </SelectContent>
                      </Select>
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
                    <FormLabel className=" text-primary-foreground">
                      Country: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className=" w-full border-none xl:w-[416px]">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent className=" text-secondary-foreground">
                          <SelectItem value="Alabama">India</SelectItem>
                        </SelectContent>
                      </Select>
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
                      Postal Code: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px] xl:w-[416px]"
                        type="text"
                        placeholder="Postal Code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center xl:justify-end">
              <Button className="mb-0 h-[32px] xl:w-[132px]" asChild>
                <Link className="b3-bold xl:b2-bold" href="/register/2">
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

export default Register1;
