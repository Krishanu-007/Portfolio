import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { staggerContainer, staggerItem } from '@/utils/animations';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { CircuitBackground } from '../ui/CircuitBackground';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        from_message: formData.message,
        to_name: 'Portfolio Owner',
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kbandyopadhyay2792@gmail.com",
      href: "mailto:kbandyopadhyay2792@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "k-bandyopadhyay",
      href: "https://www.linkedin.com/in/k-bandyopadhyay"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Krishanu-007",
      href: "https://github.com/Krishanu-007"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 lg:py-20 relative">
      <CircuitBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Let's discuss opportunities in VLSI design and embedded systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects,
                and collaborations in the field of VLSI design and embedded systems.
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={staggerItem}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 glass-card p-4 rounded-xl hover-card glow-card group"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              <span>Send a Message</span>
            </h3>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  variants={staggerItem}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={staggerItem}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="What's this about?"
                  required
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                variants={staggerItem}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full btn-glow py-4 rounded-lg font-semibold text-primary-foreground flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
