import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);
  if (state.succeeded) {
    return <p className={`text-center ${styles.Text}`}>Thanks for reaching out! I’ll get back to you soon.</p>;
  }
  return (
    <>
    <p className={`text-center ${styles.Text}`}>Appreciate my artwork? Feel free to reach out via the form below to discuss purchasing a piece.</p>
    <form
      onSubmit={handleSubmit}
      className={`d-flex flex-column align-items-stretch align-content-center flex-wrap ${styles.Form}`}
    >
      <label htmlFor="email" className="text-center">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="text-center">Message</label>
      <textarea id="message" name="message" rows="8" cols="30" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className={styles.Button}
      >
        Submit
      </button>
    </form>
    </>
  );
}
