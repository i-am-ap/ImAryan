// Typing effect for the title
// This will create a typing effect for the title text
document.addEventListener("DOMContentLoaded", () => {
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");

  const titles = [
    ["Full Stack", "Developer"],
    ["AI/ML", "Enthusiast"],
    ["Creative", "Technologist"],
    ["Problem", "Solver"]
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const [word1, word2] = titles[index];
    let complete = false;

    if (!isDeleting) {
      charIndex++;
      complete = charIndex > Math.max(word1.length, word2.length);
    } else {
      charIndex--;
      complete = charIndex < 0;
    }

    line1.textContent = word1.substring(0, charIndex);
    line2.textContent = word2.substring(0, charIndex);

    if (!isDeleting && complete) {
      isDeleting = true;
      setTimeout(type, 1000); // Wait before delete
    } else if (isDeleting && complete) {
      isDeleting = false;
      index = (index + 1) % titles.length;
      setTimeout(type, 200); // Small pause before typing next
    } else {
      setTimeout(type, isDeleting ? 40 : 100); // Typing speed
    }
  }

  type();
});


//Lets Connect Button
document.addEventListener("DOMContentLoaded", () => {
  const emailBtn = document.getElementById("emailBtn");

  emailBtn.addEventListener("click", () => {
    // Replace with your email
    const email = "aryanpalaspagar30@gmail.com";
    const subject = "Hello from Portfolio!";
    const body = "Hi Aryan, I wanted to connect with you.";

    // mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default mail client
    window.location.href = mailtoLink;
  });
});



// Resume
document.addEventListener('DOMContentLoaded', () => {
  const resumeBtn = document.getElementById('resume');

  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('assets/files/Resume_Aryan.pdf', '_blank');
    });
  } else {
    console.error("Resume button not found in DOM.");
  }
});


//Contact Form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form'); // <-- match HTML

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener('submit', function(e) {
    // alert("Thanks! I’ll get back to you soon.");
    e.preventDefault();  // now this WILL run

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // 1) grab the full name
  const fullName = document.getElementById('name').value.trim();

  // 2) extract the first name
  const firstName = fullName.split(' ')[0] || fullName;

  // 3) show alert
  alert(`Thanks ${firstName}! I’ll get back to you soon.`);

    const phone = "918080702916";
    const fullMessage = `Hi Aryan, I am ${name}. My email is ${email}. ${message}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank');
    return false; // extra safeguard
  });
});



// AOS Animation on Scroll
 AOS.init({
    duration: 1000, // Animation duration
    offset: 200,    // How far from top before animation triggers
    once: true      // Animate only once
  });