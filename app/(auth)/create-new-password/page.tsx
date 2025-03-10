"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PasswordInput from "~/components/custom/authorization/password-input";
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
    <BaseCard className="px-4 py-6 lg:w-[572px] lg:p-12">
      <Heading2>Create New Password</Heading2>
      <Subheading2 className="max-w-[410px]">
        Your new password must be different from previous used passwords.
      </Subheading2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 lg:space-y-8"
        >
          <FormField
            control={form.control}
            name="password"
            render={() => (
              <FormItem>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={() => (
              <FormItem className="mb-6">
                <FormLabel className="b2-regular text-primary-foreground">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <PasswordInput />
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
