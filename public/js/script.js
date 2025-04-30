function addCSSVariables() {
  // Example function that adds CSS variables dynamically
  document.documentElement.style.setProperty('--primary-color', '#000');
  document.documentElement.style.setProperty('--secondary-color', '#fff');
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Animated Cursor Dot
  const cursor = document.createElement('div');
  cursor.classList.add('cursor-dot');
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // Typewriter Looping Text
  const typeText = document.querySelector('.typewriter-text');
  const texts = ["Web Developer", "UI/UX Designer", "Open Source Contributor", "JavaScript Enthusiast"];
  let textIndex = 0;
  let charIndex = 0;
  
  function typeLoop() {
    if (charIndex < texts[textIndex].length) {
      typeText.textContent = texts[textIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeLoop, 100);
    } else {
      setTimeout(() => {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        typeLoop();
      }, 2000);
    }
  }
  if (typeText) typeLoop();
  
  
  
  
  // Define color schemes
  const darkTheme = {
    bodyBg: '#121212',
    elementBg: '#1e1e1e',
    primaryText: '#ffffff',
    secondaryText: '#b3b3b3',
    accentColor: '#6c63ff',
    cardBg: 'rgba(255, 255, 255, 0.05)',
    cardBorder: 'rgba(255, 255, 255, 0.1)'
  };
  
  const lightTheme = {
    bodyBg: '#f5f5f5',
    elementBg: '#ffffff',
    primaryText: '#333333',
    secondaryText: '#666666',
    accentColor: '#6c63ff',
    cardBg: 'rgba(108, 99, 255, 0.05)',
    cardBorder: 'rgba(108, 99, 255, 0.1)'
  };
  
  // Apply theme colors
  function applyTheme(theme) {
    document.documentElement.style.setProperty('--body-bg', theme.bodyBg);
    document.documentElement.style.setProperty('--element-bg', theme.elementBg);
    document.documentElement.style.setProperty('--primary-text', theme.primaryText);
    document.documentElement.style.setProperty('--secondary-text', theme.secondaryText);
    document.documentElement.style.setProperty('--accent-color', theme.accentColor);
    document.documentElement.style.setProperty('--card-bg', theme.cardBg);
    document.documentElement.style.setProperty('--card-border', theme.cardBorder);
  }
  
  // Enhanced Dark Mode Toggle with Direct Element Targeting
function setupDarkModeToggle() {
    // Add CSS variables to document
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --dark-bg: #121212;
        --light-bg: #f5f5f5;
        --dark-element: #1e1e1e;
        --light-element: #ffffff;
        --dark-text: #ffffff;
        --light-text: #333333;
        --dark-secondary: #b3b3b3;
        --light-secondary: #666666;
        --accent: #6c63ff;
      }
      
      /* Transition for smooth theme switching */
      body, section, header, footer, .card, .project, 
      form input, form textarea, nav, .container, main, 
      .content-wrapper, .page-wrapper, #main-content, .intro {
        transition: background-color 0.3s ease, color 0.3s ease !important;
      }
      
      /* Light mode (default needs to be explicitly overriden) */
      body.light-mode,
      body.light-mode section,
      body.light-mode .intro,
      body.light-mode .content-wrapper,
      body.light-mode .page-wrapper,
      body.light-mode #main-content,
      body.light-mode main,
      body.light-mode .container {
        background-color: var(--light-bg) !important;
        color: var(--light-text) !important;
      }
      
      body.light-mode header,
      body.light-mode footer,
      body.light-mode .project,
      body.light-mode form input,
      body.light-mode form textarea {
        background-color: var(--light-element) !important;
      }
      
      body.light-mode .para,
      body.light-mode .card-text,
      body.light-mode .card-header,
      body.light-mode p {
        color: var(--light-secondary) !important;
      }
      
      /* Dark mode */
      body.dark-mode,
      body.dark-mode section,
      body.dark-mode .intro,
      body.dark-mode .content-wrapper,
      body.dark-mode .page-wrapper,
      body.dark-mode #main-content,
      body.dark-mode main,
      body.dark-mode .container {
        background-color: var(--dark-bg) !important;
        color: var(--dark-text) !important;
      }
      
      body.dark-mode header,
      body.dark-mode footer,
      body.dark-mode .project,
      body.dark-mode form input,
      body.dark-mode form textarea {
        background-color: var(--dark-element) !important;
      }
      
      body.dark-mode .para,
      body.dark-mode .card-text,
      body.dark-mode .card-header,
      body.dark-mode p {
        color: var(--dark-secondary) !important;
      }
    `;
    
    document.head.appendChild(style);
    
    // Remove any existing toggle button
    const existingToggle = document.getElementById('theme-toggle');
    if (existingToggle) {
      existingToggle.remove();
    }
    
    // Your existing code
const toggleButton = document.createElement("button");
toggleButton.id = "theme-toggle";
toggleButton.ariaLabel = "Toggle dark/light mode";

const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
  toggleButton.innerText = "☀️";
} else {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
  toggleButton.innerText = "🌙";
}

// Optionally add the button to the DOM if not already done
document.body.appendChild(toggleButton);

// === Disable toggle on modal open ===
const hireModal = document.getElementById('hireModal');

if (hireModal) {
  hireModal.addEventListener('show.bs.modal', () => {
    toggleButton.disabled = true;
  });

  hireModal.addEventListener('hidden.bs.modal', () => {
    toggleButton.disabled = false;
  });
}

    // Style the toggle button
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.background = "#6c63ff";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "50%";
    toggleButton.style.width = "50px";
    toggleButton.style.height = "50px";
    toggleButton.style.color = "#fff";
    toggleButton.style.fontSize = "22px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    toggleButton.style.zIndex = "9999";
    toggleButton.style.display = "flex";
    toggleButton.style.alignItems = "center";
    toggleButton.style.justifyContent = "center";
    toggleButton.style.transition = "transform 0.3s ease, background-color 0.3s ease";
    
    document.body.appendChild(toggleButton);
    
    // Hover effects
    toggleButton.addEventListener("mouseenter", () => {
      toggleButton.style.transform = "scale(1.1)";
    });
    
    toggleButton.addEventListener("mouseleave", () => {
      toggleButton.style.transform = "scale(1)";
    });
    
    // Toggle dark/light mode
    toggleButton.addEventListener("click", () => {
      if (document.body.classList.contains('light-mode')) {
        // Switch to dark mode
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        toggleButton.innerText = "🌙";
        localStorage.setItem('theme', 'dark');
      } else {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        toggleButton.innerText = "☀️";
        localStorage.setItem('theme', 'light');
      }
      
      // Force update for any elements with inline styles
      const mainContentSections = document.querySelectorAll('section, .container, main, .content-wrapper, .page-wrapper, #main-content');
      mainContentSections.forEach(section => {
        if (document.body.classList.contains('light-mode')) {
          section.style.backgroundColor = '#f5f5f5';
        } else {
          section.style.backgroundColor = '#121212';
        }
      });
    });
  }
  
  // Initialize on DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    setupDarkModeToggle();
  });
  // Check for saved theme preference and apply it
  function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      applyTheme(lightTheme);
    } else {
      applyTheme(darkTheme);
    }
  }
  
  // Scroll-triggered Fade In
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });
  
  // Initialize everything on DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Add CSS variables
    addCSSVariables();
    
    // Setup dark mode toggle
    setupDarkModeToggle();
    
    // Load saved theme preference
    loadThemePreference();
    
    // Setup fade-in animations
    document.querySelectorAll("section, .project, .card").forEach(el => {
      el.classList.add("hidden");
      observer.observe(el);
    });
  });
  
  // Preloader
  window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 500);
    }
  });


  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!email.match(/^\S+@\S+\.\S+$/)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      const data = { name, email, message };
  
      try {
        const res = await fetch("https://portfolio-backend-40ii.onrender.com/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
  
        const result = await res.json();
        alert(result.message || "Message sent!");
        contactForm.reset();
      } catch (err) {
        alert("Failed to send message. Please try again later.");
      }
    });
  }
  

  // Hire Form Submission
  document.getElementById("hire-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = {
      name: document.getElementById("hireName").value,
      email: document.getElementById("hireEmail").value,
      company: document.getElementById("hireCompany").value,
      title: document.getElementById("hireTitle").value,
      project: document.getElementById("hireProject").value,
    };

    const res = await fetch("https://portfolio-backend-40ii.onrender.com/hire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message || "Hire request sent!");
  });


  