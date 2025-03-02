"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BaseCard from "~/components/custom/common/base-card";
import Heading2 from "~/components/custom/common/heading-2";
import Subheading2 from "~/components/custom/common/subheading-2";
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

function Login() {
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
    <BaseCard className="w-[572px] p-12">
      <Heading2>Welcome Back</Heading2>
      <Subheading2>
        Log in to Tiger Wealth Capital to continue to <br /> Tiger Wealth
        Capital.{" "}
      </Subheading2>
      <Button variant="outlineDark" className="mb-8 w-full">
        <div className="flex items-center gap-[10px]">
          <img src="/icons/google.svg" alt="Google icon" />
          <span className="block">CONTINUE WITH GOOGLE</span>
        </div>
      </Button>
      <div className="mb-8 flex items-center gap-[3px]">
        <div className="h-[1px] w-full bg-secondary-foreground" />
        <div className="b2-regular text-secondary-foreground">OR</div>
        <div className="h-[1px] w-full bg-secondary-foreground" />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-6 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 text-primary-foreground">
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
            render={({ field }) => (
              <FormItem className="relative">
                <div className="flex justify-between">
                  <FormLabel className="b2-regular mb-2 text-primary-foreground">
                    Password
                  </FormLabel>
                  <Link
                    className="b2-regular block text-accent"
                    href="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <FormControl>
                  <div className="relative flex items-center">
                    {" "}
                    <Input
                      className="bg-dark-gray"
                      type="password"
                      placeholder="Password"
                      {...field}
                    />{" "}
                    <Eye className="absolute right-6" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-2">
            <Checkbox className="size-6 rounded-[6px] border-accent bg-transparent data-[state=checked]:bg-accent" />
            <div className="b2-regular">Remember Me</div>
          </div>

          <Button className="w-full" type="submit">
            LOGIN
          </Button>
        </form>
      </Form>
      <p className="b3-regular mx-auto mb-6 max-w-72 text-center text-silver-gray">
        By clicking LOGIN you agree to our{" "}
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
      <div className="b2-regular mb-3 flex justify-center text-primary-foreground">
        Not a Premium Member?
      </div>
      <Button className="mx-auto h-12 w-[148px]" asChild>
        <Link className="b2-bold" href="/sigh-up">
          SIGN UP
        </Link>
      </Button>
    </BaseCard>
  );
}

export default Login;
