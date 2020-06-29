let template = ``;

const projectBox = document.querySelector('.project-box');

// Display projects
export const projectsList = (arr) => {
  return arr.forEach((el) => {
    // const tags = el.tags.map((el) => el);
    const tags = el.tags.join(', ');
    template = `
    <div class="project">
    
      <div class="project-title">
        <h1>${el.name}</h1>
      </div>
      
      <p>${el.desc}</p>
      
      <div class="tags">
        <span class="tag">${tags}</span>
      </div>
  
      <div class="links">
        <a class="code" href="${el.codeLink}" target="_blank">Source</a>
        <a class="demo" href="${el.demoLink}" target="_blank">View</a>
      </div>
      
    </div>
  `;
    projectBox.insertAdjacentHTML('afterbegin', template);
  });
};
