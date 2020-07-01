let template = ``;

const projectBox = document.querySelector('.project-box');

// Display projects
export const projectsList = (arr) => {
  return arr.forEach((el) => {
    // const tags = el.tags.map((el) => el);
    const tags = el.tags.join(', ');
    template = `
    <div class="project">
      <div class="project-icon">
        <img src="assets/img/project.svg" alt="Project icon">
      </div>
    
      <div class="project-title">
        <h3>${el.name}</h3>
      </div>
      <div class="project-desc">
        <p>${el.desc}</p>
      </div>
      
      <div class="project-tags">
        <span class="tag">${tags}</span>
      </div>
  
      <div class="project-links">
        <a class="code" href="${el.codeLink}" target="_blank">Source</a>
        <a class="demo" href="${el.demoLink}" target="_blank">View</a>
      </div>
      
    </div>
  `;
    projectBox.insertAdjacentHTML('afterbegin', template);
  });
};
