import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { send } from "@emailjs/browser";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { notifData, EmailStatus } from "../../constants/constants";

const Contact = (props: {
  notifState: notifData;
  setNotifState: (arg0: notifData) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID || "none";
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID || "none";
    const user_id = process.env.NEXT_PUBLIC_USER_ID || "none";

    send(
      service_id,
      template_id,
      {
        from_name: name,
        to_name: "trg5",
        message: message,
        reply_to: email,
      },
      user_id
    )
      .then((_response) => {
        setName("");
        setEmail("");
        setMessage("");
        props.setNotifState(
          new notifData(EmailStatus.Success, "Email sent!", true)
        );
      })
      .catch((err) => {
        // Done to prevent the user from seeing a link to the emailjs dashboard
        let error_msg = err.text.split(".")[0];
        props.setNotifState(
          new notifData(
            EmailStatus.Failure,
            "Failed to send email: ".concat(error_msg),
            !props.notifState.isOpen
          )
        );
      });
  };
  
  // Changed the classes in here from the home classes to inline so the theme toggle works
  return (
    <section className={styles.section} id="contact">
      <h2
        className={`mx-2 my-3 w-fit rounded p-2 text-3xl font-bold bg-neutral-300 
    text-purple-800 dark:bg-neutral-800 dark:text-purple-300`}
      >
        Contact Me
    </h2>
      <div className={'mx-2 rounded bg-neutral-300 p-6 text-lg dark:bg-neutral-800'}>
        {`Want to get in contact with me? 
          Fill out the form below and I'll respond to you!`}
        <br />
        <br />
        <form
          onSubmit={handleSubmit}
          className="justify-between lg:grid lg:grid-cols-2"
        >
          <div className="my-2 lg:mr-2">
            <label htmlFor="name" className="hidden">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Name"
              required={true}
              className={styles.textbox}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-2 lg:ml-2">
            <label htmlFor="email" className="hidden">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              required={true}
              className={styles.textbox}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-span-2 my-2">
            <label htmlFor="message" className="hidden">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              cols={20}
              rows={5}
              placeholder="Enter your message here..."
              required={true}
              className={styles.textbox}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div className="col-span-2 lg:col-span-1 lg:mr-2">
            <button type="submit" className={styles.contact_button}>
              Submit
            </button>
          </div>
        </form>
        <br />
        {`You can also find me on Github and LinkedIn!`}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:mr-2 my-2 lg:my-0">
            <Link href="https://github.com/trg5pdx/">
              <button className={styles.contact_button}>
                <GitHubIcon />
                Github
              </button>
            </Link>
          </div>
          <div className="lg:ml-2 my-2 lg:my-0">
            <Link href="https://www.linkedin.com/in/trg5/">
              <button className={styles.contact_button}>
                <LinkedInIcon />
                LinkedIn
              </button>
            </Link>
          </div>
          <div className="lg:mr-2 my-2">
            <button
              className={styles.contact_button}
              onClick={() => {
                props.setNotifState(
                  new notifData(
                    EmailStatus.Success,
                    "test",
                    !props.notifState.isOpen
                  )
                );
              }}
            >
              testing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
