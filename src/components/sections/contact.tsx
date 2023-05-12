import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import { send } from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID || 'none';
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID || 'none';
    const user_id = process.env.NEXT_PUBLIC_USER_ID || 'none';

    if (service_id == 'none' || template_id == 'none' || user_id == 'none') {
      console.log('Failed to get emailJS IDs');
      return;
    }

    /* 
      Used the article below for sending emails:
      https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1 
    */
    send(
      service_id,
      template_id,
      {
        from_name: name,
        to_name: 'trg5',
        message: message,
        reply_to: email,
      },
      user_id
    )
      .then((response) => {
        console.log('SUCCESS', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log('Failed...', err);
      });
  };

  return (
    <section className={styles.section} id="contact">
      <h2 className={styles.section_title}>Contact Me</h2>
      <div className={styles.section_body}>
        {`Want to get in contact with me? Fill out the form below and I'll respond to you!`}
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
              className={styles.textbox}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-span-2 my-2">
            <label htmlFor="email" className="hidden">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              cols={20}
              rows={5}
              placeholder="Enter your message here..."
              className={styles.textbox}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <br />
          </div>
          <button
            type="submit"
            className="col-span-2 h-14 w-full rounded bg-slate-200 font-bold text-black lg:col-span-1"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
