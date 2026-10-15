const profileData = {
     name: "Allyssa P. Palabay",
     course: "BSINTE-2A",
     about: "I am a dedicated student passionate about learning and building creative projects. I enjoy solving problems and developing skills in technology and design. This portfolio showcases my school projects and achievements.",
     email: "prttyallyssa17@gmail.com",
     facebook: "https://facebook.com/allyssa.palabay.10",
     github: "https://github.com/allp-palabay",
     
     skills: [
         "Time Management",
         "Communication",
         "Teamwork"
     ],
     
     projects: [
         {
             title: "📊 Presentation",
             description: "Created slides to present a topic clearly to the class.",
             image: "Group5Justice-and-Fairness-1.pptx"
         }
     ]
 };
 function loadProfile() {
     try {
         const skillsList = document.getElementById('skills-list');
         profileData.skills.forEach(skill => {
             const span = document.createElement('span');
             span.className = 'skill-tag';
             span.textContent = skill;
             skillsList.appendChild(span);
         });
         const container = document.getElementById('projects-container');
         profileData.projects.forEach(proj => {
             const card = document.createElement('div');
             card.className = 'project-card';
             card.innerHTML = `
                 <img src="${proj.image}" alt="${proj.title}">
                 <h3>${proj.title}</h3>
                 <p>${proj.description}</p>
             `;
             container.appendChild(card);
         });
     } catch (err) {
         console.error('Error:', err);
     }
 }
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) target.scrollIntoView({ behavior: 'smooth' });
     });
 });
 document.addEventListener('DOMContentLoaded', loadProfile);
