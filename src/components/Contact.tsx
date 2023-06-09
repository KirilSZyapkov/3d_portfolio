import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmint = (e: FormEvent) => {
    e.preventDefault();
    setDisable(true);
    setLoading(true);

    if (form.name === "" || form.email === "") {
      alert("Please fill all fields!");
      setLoading(false);
      setDisable(false);
      return;
    }
    emailjs
      .send(
        "service_2b2dv69",
        "template_lpz2ikm",
        {
          name: form.name,

          email: form.email,

          message: form.message,
        },
        "user_cHmfISm7sED5Rr2y3J6Uv"
      )
      .then(() => {
        setLoading(false);
        setDisable(false);

        alert(
          "Email send successfully! I'll get back to you as soon as posible!"
        );
        setForm({
          name: "",
          email: "",
          message: "",
        }),
          (error: ErrorEvent) => {
            console.log(error);
            alert("Something went wrong!");
            setDisable(true);
            setLoading(true);
          };
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex  gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3
          style={{ color: "var(--skin-color)" }}
          className={`${styles.sectionHeadText}`}
        >
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmint}
          className="mt-20 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className={`disabled:opacity-25 bg-tertiary py-3 px-8 text-[var(--skin-color)] outline-none w-fit font-bold shadow-md shadow-primary rounded-xl`}
            disabled={disable ? true : false}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
