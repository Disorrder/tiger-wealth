"use client";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import BaseCard from "~/components/custom/common/base-card";
import Heading from "~/components/custom/common/headings/heading";
import BillIcon from "~/components/custom/icon/bill";
import UserFormIcon from "~/components/custom/icon/user-form";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
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

function BillingStep5() {
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
        <div className="mb-6 flex flex-wrap items-center gap-[2px] gap-y-4 xl:mb-12 xl:gap-3">
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
            <span className="b2-mobile-regular xl:b2-regular font-bold text-primary-foreground">
              Investment Experience
            </span>
          </div>
          <ChevronRight size={16} />
          <div className="flex items-center gap-[6px] xl:gap-3">
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full bg-accent font-bold text-primary-foreground xl:size-8">
              <div>3</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular font-bold">
              Risk Tolerance
            </span>
          </div>
        </div>
        <h2 className="xl:t1-bold b1-bold mb-4 text-left text-primary-foreground xl:mb-6 ">
          Risk Tolerance
        </h2>
        <Form {...form}>
          <form onSubmit={() => {}}>
            <div className="mb-6 space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    <div className="mb-3">
                      <FormLabel>
                        What is your favorite learning mode?{" "}
                        <span className="text-paradise-red">*</span>
                      </FormLabel>
                    </div>
                    <FormField
                      control={form.control}
                      name="items"
                      render={() => {
                        return (
                          <FormItem className="flex flex-row items-center space-y-0">
                            <FormControl>
                              <Checkbox onCheckedChange={() => {}} />
                            </FormControl>
                            <FormLabel className="b3-regular font-normal text-secondary-foreground">
                              Reading detailed reports, articles, analyses
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="items"
                      render={() => {
                        return (
                          <FormItem className="flex flex-row items-center space-y-0">
                            <FormControl>
                              <Checkbox onCheckedChange={() => {}} />
                            </FormControl>
                            <FormLabel className="b3-regular font-normal text-secondary-foreground">
                              Reviewing highlights
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="items"
                      render={() => {
                        return (
                          <FormItem className="flex flex-row items-center space-y-0">
                            <FormControl>
                              <Checkbox onCheckedChange={() => {}} />
                            </FormControl>
                            <FormLabel className="b3-regular font-normal text-secondary-foreground">
                              Video
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="items"
                      render={() => {
                        return (
                          <FormItem className="flex flex-row items-center space-y-0">
                            <FormControl>
                              <Checkbox onCheckedChange={() => {}} />
                            </FormControl>
                            <FormLabel className="b3-regular font-normal text-secondary-foreground">
                              Podcast
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
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
                      What are your preferred stock recommendations?{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col gap-3 py-3 "
                      >
                        <FormItem className="flex items-baseline space-y-0">
                          <FormControl>
                            <RadioGroupItem value="lower risk" />
                          </FormControl>
                          <FormLabel className="b3-regular font-normal text-secondary-foreground leading-[18px]">
                            Lower risk, less volatile stocks, but with lower
                            potential upside
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-baseline space-y-0">
                          <FormControl>
                            <RadioGroupItem value="medium risk" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground leading-[18px]">
                            Medium risk, more well-known stocks
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-baseline space-y-0">
                          <FormControl>
                            <RadioGroupItem value="higher risk" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground leading-[18px]">
                            Higher risk, more volatile stocks, but with higher
                            potential upside
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
                      What&apos;s your investment risk tolerance?{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex py-3 xl:flex-col"
                      >
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="low" />
                          </FormControl>
                          <FormLabel className="b3-regular font-normal text-secondary-foreground">
                            Low
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="medium" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            Medium
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-y-0">
                          <FormControl>
                            <RadioGroupItem value="high" />
                          </FormControl>
                          <FormLabel className="font-normal text-secondary-foreground">
                            High
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
                  <FormItem className="xl:h-20 xl:w-[416px]">
                    <FormLabel className="b3-regular text-primary-foreground">
                      How did you hear about us?{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="b3-regular h-[42px] w-full border-none bg-dark-gray text-secondary-foreground">
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
              <Button type="submit" className="mb-0 h-8 w-20 xl:w-[132px]">
                SUBMIT
              </Button>
            </div>
          </form>
        </Form>
      </BaseCard>
    </div>
  );
}

export default BillingStep5;
