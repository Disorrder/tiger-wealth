"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PasswordInput from "~/components/custom/authorization/password-input";
import BaseCard from "~/components/custom/common/base-card";
import Heading2 from "~/components/custom/common/headings/heading-2";
import Subheading2 from "~/components/custom/common/headings/subheading-2";
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
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  email: z.string().min(10).max(50),
  password: z.string().min(10).max(50),
});

function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <BaseCard className="px-4 py-6 lg:w-[572px] lg:p-12">
      <Heading2>Sign Up</Heading2>
      <Subheading2 className="mb-4 max-w-[270px] lg:max-w-[330px]">
        Sign up to Tiger Wealth Capital to continue to Tiger Wealth Capital.
      </Subheading2>
      <Button variant="outlineDark" className="mb-4 w-full lg:mb-8">
        <div className="flex items-center gap-[10px]">
          <img src="/icons/google.svg" alt="Google icon" />
          <span className="block">CONTINUE WITH GOOGLE</span>
        </div>
      </Button>
      <div className="mb-4 flex items-center gap-[3px] lg:mb-8">
        <div className="h-[1px] w-full bg-silver-gray" />
        <div className="b2-mobile-regular lg:b2-regular text-silver-gray">
          OR
        </div>
        <div className="h-[1px] w-full bg-silver-gray" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mb-6 space-y-4 lg:space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="b2-regular text-primary-foreground">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-dark-gray"
                    type="email"
                    placeholder="Email Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={() => (
              <FormItem className="relative">
                <FormLabel className="b2-regular text-primary-foreground">
                  Password
                </FormLabel>
                <FormControl>
                  <PasswordInput />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mb-[18px] flex items-center gap-2">
            <Checkbox className="size-5 rounded-[4px] border-accent bg-transparent data-[state=checked]:bg-accent lg:size-6 lg:rounded-[6px]" />
            <div className="b2-mobile-regular lg:b2-regular">Remember Me</div>
          </div>
          <Button className="mb-4 w-full uppercase" type="submit">
            <Link href="/register/1">SIGN UP</Link>
          </Button>
        </form>
      </Form>
      <p className="b3-regular mx-auto max-w-[322px] text-center text-silver-gray">
        By clicking SIGN UP you agree to our{" "}
        <span>
          <Link href="/terms-of-service" className="text-accent underline">
            Terms of Service,
          </Link>{" "}
          <Link className="text-accent underline" href="/terms-and-conditions">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link className="text-accent underline" href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
        </span>
      </p>
    </BaseCard>
  );
}

export default SignUp;
