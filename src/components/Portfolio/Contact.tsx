import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const contactSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

  type ContactValues = z.infer<typeof contactSchema>;

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactValues) => {
    const formspreeIdRaw = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;
    if (!formspreeIdRaw) {
      toast({
        title: "Submission not configured",
        description: "Add VITE_FORMSPREE_FORM_ID to your .env file to enable form submissions.",
      });
      return;
    }

    // Allow either raw ID (e.g., "xblkvjbo") or full URL (e.g., "https://formspree.io/f/xblkvjbo")
    const formspreeId = formspreeIdRaw.replace(/^https?:\/\/formspree\.io\/f\//, "").trim();
    if (!formspreeId || /https?:\/\//.test(formspreeId)) {
      toast({
        title: "Invalid Formspree ID",
        description: "Set VITE_FORMSPREE_FORM_ID to the ID only (e.g., xblkvjbo) or the full URL.",
      });
      return;
    }

    const endpoint = `https://formspree.io/f/${formspreeId}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });

      if (response.ok) {
        toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
        form.reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or email me directly.",
      });
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "msmarafath1@email.com",
      href: "mailto:msmarafath1@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: [
        { text: "+971 566552653", href: "tel:+971566552653" },
        { text: "+94 772030373", href: "tel:+94772030373" },
      ],
      href: "#"
    },
    {
      icon: MapPin,
      label: "Location",
      value: [
        { text: "Abu Dhabi, UAE", href: "#" },
        { text: "Colombo, Sri Lanka", href: "#" },
        
      ],
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Arafath-MSM",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arafath-msm-44420b247",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/MsmArafath",
      color: "hover:text-blue-400"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project and bring your ideas to life. I'm always excited to work on new challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card-gradient backdrop-blur-sm border-border/50 shadow-medium">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Arafath"
                              className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Mohamed"
                              className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="msmarafath1@email.com"
                            className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project collaboration"
                            className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                            {...field}
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            rows={6}
                            className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
                    disabled={form.formState.isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative ideas, or potential collaborations. 
                  Whether you have a project in mind or just want to chat about design and development, feel free to reach out.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 bg-card-gradient backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {Array.isArray(info.value) ? (
                          <div className="space-y-1">
                            {info.value.map((item) => (
                              <a
                                key={item.href}
                                href={item.href}
                                className="block font-medium text-foreground hover:text-primary transition-colors duration-300"
                              >
                                {item.text}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <a
                            href={info.href}
                            className="font-medium text-foreground hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-muted rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="p-6 bg-hero-gradient text-white">
                <h4 className="text-lg font-semibold mb-2">Currently Available</h4>
                <p className="text-white/90 mb-4">
                  I'm currently accepting new projects and would love to hear about yours.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for new projects</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
