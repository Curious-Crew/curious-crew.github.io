document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  initHeader();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initPortfolio();
  initContactChannels();
});

// Поведінка header при скролі
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Мобільне меню
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = mobileMenu.querySelectorAll('a');
  
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Плавна прокрутка
function initSmoothScroll() {
  document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Анімації при скролі
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Генерація портфоліо
function initPortfolio() {
  const portfolioGrid = document.getElementById('portfolio-grid');
  if (!portfolioGrid) return;
  
  portfolioGrid.innerHTML = CONFIG.projects.map((project, index) => {
    const price = formatPrice(project.price);
    let linksHTML = '';
    
    if (project.links.video) {
      linksHTML += `
        <a href="${project.links.video}" target="_blank" rel="noopener noreferrer" class="project-link">
          <i data-lucide="play" class="w-5 h-5 text-teal-400"></i>
          <span class="flex-1" data-i18n="portfolio.viewDemo">Demo</span>
          <i data-lucide="external-link" class="project-link-icon w-4 h-4"></i>
        </a>
      `;
    }
    
    if (project.links.videos) {
      linksHTML += `
        <a href="${project.links.videos[0]}" target="_blank" rel="noopener noreferrer" class="project-link">
          <i data-lucide="play" class="w-5 h-5 text-teal-400"></i>
          <span class="flex-1" data-i18n="portfolio.viewDemo">Demo</span>
          <i data-lucide="external-link" class="project-link-icon w-4 h-4"></i>
        </a>
      `;
    }
    
    if (project.links.ui) {
      linksHTML += `
        <a href="${project.links.ui}" target="_blank" rel="noopener noreferrer" class="project-link">
          <i data-lucide="palette" class="w-5 h-5 text-purple-400"></i>
          <span class="flex-1" data-i18n="portfolio.viewUI">UI</span>
          <i data-lucide="external-link" class="project-link-icon w-4 h-4"></i>
        </a>
      `;
    }
    
    if (project.links.presentation) {
      linksHTML += `
        <a href="${project.links.presentation}" target="_blank" rel="noopener noreferrer" class="project-link">
          <i data-lucide="file-text" class="w-5 h-5 text-orange-400"></i>
          <span class="flex-1" data-i18n="portfolio.viewPresentation">Presentation</span>
          <i data-lucide="external-link" class="project-link-icon w-4 h-4"></i>
        </a>
      `;
    }
    
    if (project.links.presentations) {
      linksHTML += `
        <a href="${project.links.presentations[0]}" target="_blank" rel="noopener noreferrer" class="project-link">
          <i data-lucide="file-text" class="w-5 h-5 text-orange-400"></i>
          <span class="flex-1" data-i18n="portfolio.viewPresentation">Presentation</span>
          <i data-lucide="external-link" class="project-link-icon w-4 h-4"></i>
        </a>
      `;
    }
    
    return `
      <article class="project-card bg-gradient-to-br ${project.gradient} backdrop-blur-sm animate-on-scroll">
        <div class="project-price-badge ${project.accentColor}">
          <i data-lucide="dollar-sign" class="w-4 h-4"></i>
          ${price}
        </div>
        <div class="p-8 pt-16">
          <h3 class="text-2xl font-bold text-white mb-4" data-i18n="portfolio.projects.${project.key}.title">
            ${project.key}
          </h3>
          <p class="text-slate-300 mb-8 leading-relaxed" data-i18n="portfolio.projects.${project.key}.description">
            Description
          </p>
          <div class="space-y-3">
            ${linksHTML}
          </div>
        </div>
      </article>
    `;
  }).join('');
  
  lucide.createIcons();
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('#portfolio-grid .animate-on-scroll').forEach(el => observer.observe(el));
}

// Генерація контактів
function initContactChannels() {
  const contactGrid = document.getElementById('contact-grid');
  if (!contactGrid) return;
  
  const messageTemplate = translations[currentLang].contact.messageTemplate;
  const phone = CONFIG.contact.phoneNumber;
  const email = CONFIG.contact.email;
  
  contactGrid.innerHTML = CONFIG.channels.map((channel, index) => {
    let href;
    if (channel.key === 'whatsapp') {
      href = channel.getHref(phone, messageTemplate);
    } else if (channel.key === 'telegram' || channel.key === 'viber') {
      href = channel.getHref(phone);
    } else if (channel.key === 'email') {
      href = channel.getHref(email, messageTemplate);
    } else {
      href = channel.getHref();
    }
    
    return `
      <a href="${href}" target="_blank" rel="noopener noreferrer" class="contact-channel animate-on-scroll">
        <div class="contact-channel-icon bg-gradient-to-br ${channel.color}">
          <i data-lucide="${channel.icon}" class="w-7 h-7 text-white"></i>
        </div>
        <span class="text-white/80 font-medium" data-i18n="contact.channels.${channel.key}">
          ${channel.key}
        </span>
      </a>
    `;
  }).join('');
  
  lucide.createIcons();
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('#contact-grid .animate-on-scroll').forEach(el => observer.observe(el));
}

// Оновлення контактів (викликається при зміні мови)
function updateContactChannels() {
  initContactChannels();
}

window.updateContactChannels = updateContactChannels;