import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import { data } from '../../data/data';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    alert(
      `
        name: ${name}
        email: ${email}
        message: ${message}
      `
    );
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.section_title}>Contact me</h2>
      <div className={styles.section_body}>
        Want to get in contact with me? Fill out the form below and I'll respond
        to you!
        <br />
        <br />
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2">
          <div>
            <label htmlFor="name" className="hidden">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Name"
              className="w-11/12 rounded"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label htmlFor="email" className="hidden">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              className="w-11/12 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div className="col-span-2">
            <label htmlFor="email" className="hidden">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              placeholder="Enter your message here..."
              className="w-full rounded"
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <br />
          </div>
          <button type="submit" className="rounded bg-slate-200 text-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
