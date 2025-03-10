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
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

function BillingStep4() {
  const form = useForm();

  return (
    <div className="container mx-auto grid w-full grid-cols-[358px] justify-center justify-items-center xl:mb-40 xl:grid-cols-[320px_944px] xl:gap-6">
      <BaseCard className="b2-mobile-regular mb-6 w-full space-y-5 xl:order-1 xl:mb-0 xl:h-[496px] xl:px-6 xl:py-12">
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
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full bg-accent text-primary-foreground xl:size-8">
              <div>2</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular font-bold">
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
          Investment Experience
        </h2>
        <Form {...form}>
          <form onSubmit={() => {}}>
            <div className="mb-6 space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Do you have a brokerage account?{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center py-3"
                      >
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="b3-regular font-normal text-secondary-foreground">
                            Yes
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            No
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem className="xl:w-[416px]">
                    <FormLabel className="b3-regular text-primary-foreground">
                      Portfolio Size Planning to Invest:{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="b3-regular w-full border-none bg-dark-gray text-secondary-foreground">
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
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      What is your investment experience?{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-3 py-3 xl:flex-col"
                      >
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="beginner" />
                          </FormControl>
                          <FormLabel className="b3-regular font-normal text-secondary-foreground">
                            Begginer
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="intermediate" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            Intermediate
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="advanced" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            Advanced
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How much experience do you have investing in stocks?{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col items-start gap-3 py-3"
                      >
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no experience" />
                          </FormControl>
                          <FormLabel className="b3-regular font-normal text-secondary-foreground">
                            No experience, have never bought a stock before
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="limited" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            Limited, have bought fewer than 5 stocks
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="experienced" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            Experienced, have bought more than 5 stocks
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      What is your investment frequency?{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col items-start gap-3 py-3"
                      >
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="weekly" />
                          </FormControl>
                          <FormLabel className="b3-regular font-normal text-secondary-foreground">
                            Weekly
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="monthly" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            Monthly
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="quarterly" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            Quarterly
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="once or twice per year" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            Once or twice per year
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="a lump sum to invest" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            I have a lump sum to invest
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem className="xl:h-20">
                    <FormLabel className="b3-regular text-primary-foreground">
                      Investment Goals:{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="b3-regular w-full border-none bg-dark-gray text-secondary-foreground">
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
                <Link className="b3-bold xl:b2-bold" href="/register/5">
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

export default BillingStep4;
