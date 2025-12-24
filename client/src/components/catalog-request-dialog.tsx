import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqanbwl";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .refine((value) => isValidPhoneNumber(value || ""), {
      message: "Enter a valid international phone number with country code (e.g. +1 555 000 0000)",
    }),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface CatalogRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CatalogRequestDialog({ open, onOpenChange }: CatalogRequestDialogProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "Catalogue Request",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: values.name,
          Company: values.company,
          Email: values.email,
          Phone: values.phone,
          Subject: values.subject,
          Message: values.message,
        }),
      });

      if (!res.ok) {
        throw new Error(`Formspree error: ${res.status}`);
      }

      toast({
        title: "Catalogue request sent",
        description: "Thank you. Our technical team will review your request and respond within 24 hours.",
      });
      form.reset({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "Catalogue Request",
        message: "",
      });
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission failed",
        description: "There was a problem sending your request. Please try again or email us directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border p-0 sm:p-6 w-[95vw] sm:w-full data-[state=closed]:zoom-out-0 data-[state=open]:zoom-in-0 data-[state=closed]:slide-out-to-left-0 data-[state=closed]:slide-out-to-top-0 data-[state=closed]:slide-out-to-bottom-[48%] data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-0 data-[state=open]:slide-in-from-bottom-[48%] duration-300 ease-out">
        <DialogHeader className="px-6 pt-6 pb-4 sm:px-0 sm:pt-0">
          <DialogTitle className="text-xl sm:text-2xl font-display text-foreground">
            Request Product<br />
            <span className="text-primary">Catalogue</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm sm:text-base">
            Fill out the form below and our team will send you the complete product catalogue with full specifications.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6 sm:px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-xs uppercase tracking-wider">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Smith" 
                          {...field} 
                          className="bg-background border-border text-foreground h-12 focus-visible:ring-primary placeholder:text-muted-foreground" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-xs uppercase tracking-wider">Company *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Company Name" 
                          {...field} 
                          className="bg-background border-border text-foreground h-12 focus-visible:ring-primary placeholder:text-muted-foreground" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-xs uppercase tracking-wider">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@company.com" 
                          {...field} 
                          className="bg-background border-border text-foreground h-12 focus-visible:ring-primary placeholder:text-muted-foreground" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-xs uppercase tracking-wider">
                        Phone *
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="+1 555 000 0000 (include country code)"
                          className="bg-background border border-border text-foreground h-12 w-full rounded-sm px-3 flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary placeholder:text-muted-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-xs uppercase tracking-wider">Subject *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Catalogue Request" 
                        {...field} 
                        className="bg-background border-border text-foreground h-12 focus-visible:ring-primary placeholder:text-muted-foreground" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-xs uppercase tracking-wider">Message *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe your requirements or any specific product information you need..." 
                        {...field} 
                        className="bg-background border-border text-foreground min-h-[120px] focus-visible:ring-primary placeholder:text-muted-foreground resize-none" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-14 text-sm group"
              >
                Submit Request
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

