export default function Connect() {
  return (
    <div>
      <h1>Connect</h1>

      <form>
        <input name="name" type="text" placeholder="Name" />
        <input name="email" type="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <button type="submit">Send</button>
      </form>

      <ul>
        <li><a href="https://github.com/pbelokon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://gitlab.com/PuffDuck" target="_blank" rel="noopener noreferrer">GitLab</a></li>
        <li><a href="https://www.linkedin.com/in/pbelokon/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="mailto:pavelbelokon@proton.me">Email</a></li>
      </ul>
    </div>
  );
}
