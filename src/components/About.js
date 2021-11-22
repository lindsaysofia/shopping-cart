import '../styles/About.css';

function About() {
  return (
    <div className="About">
      <h2 className="About-header">Our Mission</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2 className="About-header">Contact Us</h2>
      <p><i className="fas fa-phone-alt"></i> 123-456-7890</p>
      <p><i className="fas fa-map-marked-alt"></i> Fake City, Fake State</p>
      <ul>
        <h2>Hours of Operation</h2>
        <li>Monday: Closed</li>
        <li>Tuesday: 8am-5pm</li>
        <li>Wednesday: 8am-5pm</li>
        <li>Thursday: 8am-5pm</li>
        <li>Friday: 8am-8pm</li>
        <li>Saturday: 8am-8pm</li>
        <li>Sunday: 8am-3pm</li>
      </ul>
    </div>
  );
}

export default About;