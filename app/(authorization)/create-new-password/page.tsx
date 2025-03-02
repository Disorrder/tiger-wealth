"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BaseCard from "~/components/custom/common/base-card";
import Heading2 from "~/components/custom/common/heading-2";
import Subheading2 from "~/components/custom/common/subheading-2";
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
  password: z.string().min(5).max(50),
  confirmPassword: z.string().min(5).max(50),
});

function CreateNewPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <BaseCard className="w-[572px] p-12">
      <Heading2>Create New Password</Heading2>
      <Subheading2 className="max-w-[410px]">
        Your new password must be different from previous used passwords.
      </Subheading2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="b2-regular mb-2 text-primary-foreground">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    {" "}
                    <Input
                      style={{ background: "-dark-gray" }}
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="b2-regular mb-2 text-primary-foreground">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    {" "}
                    <Input
                      style={{ background: "-dark-gray" }}
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />{" "}
                    <Eye className="absolute right-6" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full uppercase" type="submit">
            CREATE NEW PASSWORD
          </Button>
        </form>
      </Form>
    </BaseCard>
  );
}

export default CreateNewPassword;
