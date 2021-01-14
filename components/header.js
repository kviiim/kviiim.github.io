class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
        <div class="header">
        <div class="name">
            Katherine Mackowiak
        </div>
          <nav>
                <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
          </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-template', Header);
  