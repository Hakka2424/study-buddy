import React from 'react';
import { Link } from 'react-router-dom';

// Images
import banner from '../assets/banner.png';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.png';
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import student4 from "../assets/student4.jpg";

// CSS
import '../styles/Landing.css';

function Landing() {
  return (
    <>
      {/* Hero Banner */}
      <div className="landing-hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay">
          <h1>Welcome to Study Buddy!</h1>
          <p>
            Whether you're on campus or remote, Study Buddy helps NMSU Computer Science students connect 
            with others in their classes. Build better study habits, prepare for exams, and never study alone again.
          </p>
          <Link to="/signup" className="hero-btn">Sign Up for Free!</Link>
        </div>
      </div>

      {/* Scrollable Sections */}
      <div className="scroll-sections">

        {/* Section 1: Text on left, image on right */}
        <div className="scroll-section">
          <div className="scroll-text">
            <h2>Match With Classmates Instantly</h2>
            <p>
              When you sign up, you'll enter the CS courses you're currently enrolled in. 
              Study Buddy then shows you a list of other students in the same classes who are 
              also looking for partners to study with. Whether you're prepping for a tough exam 
              or reviewing assignments, you'll always have someone on your level to collaborate with.
            </p>
            <Link to="/signup" className="hero-btn">Get Started</Link>
          </div>
          <img src={photo1} alt="Students studying together" className="scroll-image" />
        </div>

        {/* Section 2: Image on left, text on right */}
        <div className="scroll-section">
          <img src={photo2} alt="Student using Study Buddy" className="scroll-image" />
          <div className="scroll-text">
            <h2>Safe & Private — For NMSU Students Only</h2>
            <p>
              We care about your safety and focus. That's why Study Buddy is only accessible 
              via NMSU's secure network or VPN — keeping the platform exclusive to verified students. 
              No outside users, no distractions — just fellow CS majors working toward the same goals.
            </p>
            {/* VPN button */}
            <a 
              href="https://agit.nmsu.edu/services/vpn.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-btn"
            >
              Get VPN Access
            </a>
          </div>
        </div>

        {/* Section 3: Text on left, photo on right */}
        <div className="scroll-section">
          <div className="scroll-text">
            <h2>Be Ready for Test Day with Study Tools</h2>
            <p>Go beyond just reading notes. Study Buddy helps you truly understand concepts before the exam.</p>
            <ul className="features-list">
              <li>
                <strong>📘 Practice with Learn</strong><br />
                Get instant feedback using multiple choice, true/false, and short answer questions.
              </li>
              <li>
                <strong>📝 Begin a Test</strong><br />
                Take practice quizzes based on your matched classes to test your knowledge.
              </li>
              <li>
                <strong>🎯 Get Better Results</strong><br />
                90% of students say they feel more prepared after using Study Buddy tools.
              </li>
            </ul>
            <Link to="/signup" className="hero-btn">Explore Study Tools</Link>
          </div>
          <img src={photo3} alt="Study tool preview" className="scroll-image" />
        </div>

        {/* Study Buddy Features Section */}
        <section className="services" id="features">
          <div className="content">
            <div className="title"><span>Why Use Study Buddy?</span></div>
            <div className="boxes">
              
              <div className="box">
                <div className="icon">
                  <i className="fas fa-user-friends"></i>
                </div>
                <div className="topic">Classmate Matching</div>
                <p>Get instantly matched with students in your same CS classes so you can study together with ease.</p>
              </div>

              <div className="box">
                <div className="icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="topic">Study Scheduling</div>
                <p>Set up study sessions and receive reminders. Never forget when and where to meet with your group.</p>
              </div>

              <div className="box">
                <div className="icon">
                  <i className="fas fa-comments"></i>
                </div>
                <div className="topic">Built-in Messaging</div>
                <p>Chat directly with your matched study partners and share Zoom links or questions instantly.</p>
              </div>

              <div className="box">
                <div className="icon">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="topic">NMSU Only Access</div>
                <p>Access is restricted to NMSU students only through campus internet or VPN for security and privacy.</p>
              </div>

              <div className="box">
                <div className="icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="topic">Custom Tools</div>
                <p>Tools built just for CS majors — organize group work, share code snippets, and collaborate better.</p>
              </div>

              <div className="box">
                <div className="icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="topic">Progress Tracking</div>
                <p>Track your study habits, participation, and improvement to stay motivated and on top of your goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* User Reviews Section */}
        <section className="testimonials">
          <h2>What Our Students Say</h2>
          <div className="testimonial-boxes">

            <div className="testimonial-box">
              <img src={student1} alt="Alex R." className="testimonial-photo" />
              <p>"Study Buddy helped me pass my CS 273 exam. I finally found a partner who understood the material like me!"</p>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <span>- Jamie R.</span>
            </div>

            <div className="testimonial-box">
              <img src={student2} alt="Jamie L." className="testimonial-photo" />
              <p>"I used Study Buddy to study for finals with two other NMSU students. It made the grind way less stressful."</p>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <span>- Alex L.</span>
            </div>

            <div className="testimonial-box">
              <img src={student3} alt="Sam T." className="testimonial-photo" />
              <p>"The site is clean and easy to use. I love that I can match with people in my class and just focus on studying."</p>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <span>- Sam T.</span>
            </div>

            <div className="testimonial-box">
              <img src={student4} alt="Morgan K." className="testimonial-photo" />
              <p>"I'm usually shy, but this platform helped me connect with other CS majors in a safe space."</p>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <span>- Morgan K.</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            <details>
              <summary>Is Study Buddy free to use?</summary>
              <p>Yes! Study Buddy is completely free for NMSU Computer Science students.</p>
            </details>

            <details>
              <summary>How do I get matched with other students?</summary>
              <p>Once you sign up and select your current CS classes, the system shows you other users taking the same courses.</p>
            </details>

            <details>
              <summary>Can I use Study Buddy from off-campus?</summary>
              <p>Yes, but you need to connect using NMSU VPN to access the site securely from outside campus.</p>
            </details>

            <details>
              <summary>Is this platform safe?</summary>
              <p>Yes. Study Buddy is only accessible to verified NMSU students through the secure campus network or VPN.</p>
            </details>

            <details>
              <summary>Can Teachers join and help?</summary>
              <p>Yes! Study Buddy is designed primarily for student collaboration but professors and TAs are welcome to join for support and moderation.</p>
            </details>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing;
