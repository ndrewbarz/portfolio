class Projects {
	constructor(title, desc, codeLink, demoLink) {
		this.title = title;
		this.desc = desc;
		this.codeLink = codeLink;
		this.demoLink = demoLink;
	}

}

export class ProjectFactory{

	create(title, desc, codeLink, demoLink, ...tags) {
		// Project box
		const box = document.querySelector('.project-box');
		// Project
		const project = createEl('div', 'project');
		box.append(project);
		const header = createEl('div', 'project-title')
		// Title
		const h1 = createEl('h1');
		h1.innerHTML = `${title}`;
		header.append(h1);
		// Description
		const p = createEl('p');
		p.innerHTML = `${desc}`;
		// Tags
		const tagBox = createEl('div', 'tags');
		// Links
		const linkBox = createEl('div', 'links');
		const linkCode = createEl('a', 'code', 'code');
		linkCode.setAttribute('href', `${codeLink}`);
		const linkDemo = createEl('a', 'demo', 'demo');
		linkDemo.setAttribute('href', `${demoLink}`);
		linkBox.append(linkCode, linkDemo);
		
		project.append(header, p, tagBox, linkBox);
		// if (tags) linkCode.before(tags);
		tags.forEach(t => {
			// Tags
			const tagEl = createEl('span', 'tag', `${t}`);
			tagBox.append(tagEl)
		});


		// console.log(tags)

		return new Projects;
	}
}

function createEl (elm, className, text) {
	const el = document.createElement(elm);
				if (className) el.classList.add(className);
				if (text) el.textContent = text;
	return el;
}