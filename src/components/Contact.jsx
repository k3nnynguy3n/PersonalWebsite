import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Drop me a message below!</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="What's this about?" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message..." rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
