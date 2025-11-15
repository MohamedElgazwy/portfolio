import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7stnuiq",
        "template_hs6gx89",
        formRef.current,
        "p1-pE7qXJ6DHkrdy0"
      )
      .then(
        (result) => {
          console.log("✅ Message sent successfully:", result.text);
          alert("Your message has been sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("❌ Error sending message:", error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 py-12 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-emerald-600 dark:text-emerald-400"
      >
        Get In Touch
      </motion.h2>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-4 sm:space-y-6"
      >
        <div>
          <label className="block text-base sm:text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-base sm:text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label className="block text-base sm:text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Your message..."
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            required
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
