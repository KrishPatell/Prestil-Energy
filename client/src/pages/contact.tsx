import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ArrowRight, Phone, Globe, Flag, Factory } from "lucide-react";
import { FeaturedProductsGrid } from "@/components/featured-products-grid";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Received",
      description: "Our technical team will review your request and respond within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            </div>
                    <h1 className="page-hero-title mb-6 whitespace-nowrap">
                      Contact <span className="text-primary">Us</span>
                    </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Our technical and commercial teams are ready to discuss your requirements, provide specifications, and support pilot projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-border p-6 group hover:border-primary/30 transition-colors"
            >
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-display text-foreground mb-2">Office In India</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                109/A, Nalanda Complex, NR Mansi Complex<br />
                Mahavir Nagar society, Vastrapur<br />
                Ahmedabad, Gujarat 380015
              </p>
              <div className="mt-3 pt-3 border-t border-border space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+919824054002" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 9824054002
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href="mailto:energy.apatel@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    energy.apatel@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href="mailto:prestilindia@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    prestilindia@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background border border-border p-6 group hover:border-primary/30 transition-colors"
            >
              <Flag className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-display text-foreground mb-2">Registered Office in UK</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                15A Newcourt Street<br />
                London, England, NW87AA<br />
                United Kingdom
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Company No. 07944346
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background border border-border p-6 group hover:border-primary/30 transition-colors"
            >
              <Factory className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-display text-foreground mb-2">Manufacturing Factory in Ukraine</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                15A, Industrialna St<br />
                Kharkiv-DSP, Ukraine, 61106
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-background border border-border p-6 group hover:border-primary/30 transition-colors"
            >
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-display text-foreground mb-2">Registered Office in Ukraine</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                26 Kosmichna Street, office 315<br />
                Kharkiv, Ukraine
              </p>
            </motion.div>
        </div>
      </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display text-foreground mb-6">
                Let's Discuss Your<br />
                <span className="text-primary">Requirements</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need detailed technical specifications, pricing information, or want to explore a partnership, our team is ready to assist. We support oil & gas operators, EPC contractors, and service companies worldwide.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-semibold">01</span>
                  </div>
            <div>
                    <h4 className="text-foreground font-semibold mb-1">Technical Consultations</h4>
                    <p className="text-muted-foreground text-sm">Equipment selection based on your well conditions and requirements.</p>
              </div>
            </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-semibold">02</span>
                  </div>
            <div>
                    <h4 className="text-foreground font-semibold mb-1">Quotations & Proposals</h4>
                    <p className="text-muted-foreground text-sm">Detailed pricing and delivery timelines for your specific needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-semibold">03</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Pilot Projects</h4>
                    <p className="text-muted-foreground text-sm">Start with a trial deployment to validate performance in your conditions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-8 mb-8">
                <h4 className="text-xl font-display text-foreground mb-4">
                  Certification<br />
                  <span className="text-primary">& Standards</span>
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  All equipment is manufactured under ISO 9001:2015 quality management and designed to API quality standards.
                </p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-secondary border border-border text-xs text-muted-foreground">ISO 9001:2015</span>
                  <span className="px-3 py-1 bg-secondary border border-border text-xs text-muted-foreground">API Compliant</span>
              </div>
            </div>

              <div className="bg-card border border-border p-8">
                <h4 className="text-xl font-display text-foreground mb-6">
                  Manufacturing<br />
                  <span className="text-primary">Factory Unit</span>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">PJSC "CHEMZ-IPEC"</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Ukraine, 61106, Kharkiv-DSP<br />
                        Industrialna St., 15A
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a href="tel:+380577525881" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      +38 (057) 752-58-81
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <a href="mailto:mail1.ipec@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      mail1.ipec@gmail.com
                    </a>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1">
                      <span className="font-semibold text-foreground">Working days:</span> Monday - Friday, from 08.00 to 16.30
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Weekends:</span> Saturday, Sunday
              </p>
            </div>
          </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 md:p-10"
            >
              <h3 className="text-2xl font-display text-foreground mb-8">
                Send Us A<br />
                <span className="text-primary">Message</span>
              </h3>

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
                          <FormLabel className="text-foreground text-xs uppercase tracking-wider">Phone</FormLabel>
                        <FormControl>
                            <Input 
                              placeholder="+1 (555) 000-0000" 
                              {...field} 
                              className="bg-background border-border text-foreground h-12 focus-visible:ring-primary placeholder:text-muted-foreground" 
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
                            placeholder="Product Inquiry / Quote Request / Technical Support" 
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
                            placeholder="Please describe your requirements, including well conditions, capacity needs, or any specific questions..." 
                            {...field} 
                            className="bg-background border-border text-foreground min-h-[150px] focus-visible:ring-primary placeholder:text-muted-foreground resize-none" 
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
                  Submit Inquiry
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProductsGrid />

      {/* CTA Banner */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-display text-foreground mb-2">
                Looking For Technical<br />
                <span className="text-primary">Documentation?</span>
              </h3>
              <p className="text-muted-foreground">
                Request our detailed product catalogue with full specifications.
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8">
              Request Catalogue
            </Button>
        </div>
      </div>
      </section>

    </div>
  );
}
