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

function BillingStep2() {
  const form = useForm();
  return (
    <div className="container mx-auto grid w-full grid-cols-[358px] justify-center justify-items-center xl:mb-40 xl:grid-cols-[320px_944px] xl:gap-6">
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
      <BaseCard className="mb-20 px-4 xl:order-2 xl:mb-0 xl:max-w-[944px] xl:p-12">
        <div className="mb-6 flex items-center gap-[6px] xl:mb-12 xl:gap-3">
          <div className="flex items-center gap-[6px]">
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full bg-accent text-primary-foreground xl:size-8">
              <div>1</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular font-bold">
              Billing Address
            </span>
          </div>
          <ChevronRight size={16} />
          <div className="flex items-center gap-[6px] xl:gap-3">
            <div className="b3-regular xl:b2-regular flex size-5 items-center justify-center rounded-full bg-accent text-primary-foreground xl:size-8">
              <div>2</div>
            </div>
            <span className="b2-mobile-regular xl:b2-regular font-bold">
              Payment Details
            </span>
          </div>
        </div>
        <h2 className="xl:t1-bold b1-bold mb-4 text-left text-primary-foreground xl:mb-6 ">
          Payment Details
        </h2>
        <div className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
          {" "}
          <Button
            className="relative rounded-[16px] bg-gradient-to-r from-paradise-red to-light-green p-[1px]"
            variant="payment"
          >
            <Link
              className="b2-regular xl:b1-regular flex h-full w-full items-center justify-center rounded-[15px] bg-vampire-black"
              href="#"
            >
              Credit card
            </Link>
          </Button>
          <Button variant="payment" asChild>
            <Link href="#">
              <img
                className="xl:w-[68px]"
                src="/icons/payment/apple-pay.svg"
                alt="Apple pay"
              />
            </Link>
          </Button>
          <Button variant="payment" asChild>
            <Link href="#">
              {" "}
              <img
                className="xl:w-[135px]"
                src="/icons/payment/paypal.svg"
                alt="Paypal"
              />
            </Link>
          </Button>
          <Button variant="payment" asChild>
            <Link href="#">
              {" "}
              <img
                className="xl:w-[69px]"
                src="/icons/payment/google-pay.svg"
                alt="Google pay"
              />
            </Link>
          </Button>
        </div>
        <Form {...form}>
          <form onSubmit={() => {}}>
            <div className="mb-6 space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="b3-regular mb-2 text-primary-foreground">
                      Name on Card: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px]"
                        type="text"
                        placeholder="Name on Card"
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
                    <FormLabel className="b3-regular mb-2 text-primary-foreground">
                      Credit Card Number:{" "}
                      <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px]"
                        type="text"
                        placeholder="Credit Card Number"
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
                    <FormLabel className="b3-regular mb-2 text-primary-foreground">
                      Expiration: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px]"
                        type="text"
                        placeholder="MM/YY"
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
                    <FormLabel className="b3-regular mb-2 text-primary-foreground">
                      CVV: <span className="text-paradise-red">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:b3-regular h-[42px]"
                        type="text"
                        placeholder="CVV"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center xl:justify-end">
              <Button className="mb-0 h-[32px] xl:w-[160px]">
                <Link className="b3-bold xl:b2-bold" href="/register/3">
                  SUBMIT & PAY
                </Link>
              </Button>
            </div>
          </form>
        </Form>
      </BaseCard>
    </div>
  );
}

export default BillingStep2;
