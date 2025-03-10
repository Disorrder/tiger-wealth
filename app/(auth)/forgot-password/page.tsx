"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BaseCard from "~/components/custom/common/base-card";
import Heading2 from "~/components/custom/common/headings/heading-2";
import Subheading2 from "~/components/custom/common/headings/subheading-2";
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

const formSchema = z.object({
  email: z.string().min(5).max(50),
});

function ForgotPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <BaseCard className="px-4 py-6 lg:w-[572px] lg:p-12">
      <Heading2>Forgot Password</Heading2>
      <Subheading2 className="mb-6 max-w-[290px] lg:mb-12 lg:max-w-[340px]">
        We will send you an email with a link for you to reset your password.
      </Subheading2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 lg:space-y-8"
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
                  <Input placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            <Link href="/reset-password">SEND LINK</Link>
          </Button>
        </form>
      </Form>
    </BaseCard>
  );
}

export default ForgotPassword;
