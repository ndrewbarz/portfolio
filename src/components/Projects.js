class Projects {
	constructor(title, desc, codeLink, demoLink) {
		this.title = title;
		this.desc = desc;
		this.codeLink = codeLink;
		this.demoLink = demoLink;
	}

}

export class ProjectFactory {
  create(title, desc, codeLink, demoLink, ...tags) {
    // Project box
    const box = document.querySelector(".project-box");
    // Project
    const project = createEl("div", "project");
    box.append(project);
    const header = createEl("div", "project-title");
    // Title
    const h1 = createEl("h1");
    h1.innerHTML = `${title}`;
    header.append(h1);
    // Description
    const p = createEl("p");
    p.innerHTML = `${desc}`;
    // Tags
    const tagBox = createEl("div", "tags");
    // Links
    const linkBox = createEl("div", "links");
    const linkCode = createEl("a", "code", "Source");
		const linkDemo = createEl("a", "demo", "View");
		
    setAttributes(linkCode, { href: `${codeLink}`, target: "_blank" });
    setAttributes(linkDemo, { href: `${demoLink}`, target: "_blank" });

    linkBox.append(linkCode, linkDemo);
		project.append(header, p, tagBox, linkBox);
		
		// Tags
    tags.forEach(t => {
      const tagEl = createEl("span", "tag", `${t}`);
      tagBox.append(tagEl);
		});
		
    return new Projects();
  }
}

function createEl (elm, className, text) {
	const el = document.createElement(elm);
				if (className) el.classList.add(className);
				if (text) el.textContent = text;
	return el;
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}