class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="header">
          <div class="name align-self-center">
              Katherine Mackowiak
          </div>
          <div class="links align-self-center justify-content-end">
            <ul class="links align-self-center justify-content-end">
              <li><a href="index.html" class="align-self-center justify-self-right">Home</a></li>
              <li><a href="projects.html" class="align-self-center justify-self-right">Projects</a></li>
              <li><a href="resume.html" class="align-self-center justify-self-right">Resume</a></li>
              <li><a href="contact.html" class="align-self-center justify-self-right">Contact</a></li>
            </ul>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('header-template', Header);
  