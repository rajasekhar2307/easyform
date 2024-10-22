"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { ImSpinner2 } from "react-icons/im";
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

type formSchemaType = z.infer<typeof formSchema>;

export default function Home() {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: formSchemaType) {
    try {
      throw new Error("Unga nakka");
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
      // <Toast variant="destructive">
      //   <ToastTitle>Error</ToastTitle>
      //   <ToastDescription>
      //     Something went wrong while submitting
      //   </ToastDescription>
      // </Toast>;
    }
    console.log("form submitted", values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> Create Form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </form>
        </Form>
        <DialogFooter>
          <Button
            disabled={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
            className="w-full mt-4"
          >
            {!form.formState.isSubmitting && <span>Save</span>}
            {form.formState.isSubmitting && (
              <ImSpinner2 className="animate-spin"></ImSpinner2>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
