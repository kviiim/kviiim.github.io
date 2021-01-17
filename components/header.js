class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>        
          nav {
            width: 50%;
          }
          ul li {
            list-style: none;
            display: inline;
          }
          .a {
            font-weight: 200;
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
          .header {
            height: 40px;
            display: flex;
            background-color:  #27212e;
          }
          .name {
            width: 50%;
            display: flex;
            justify-content: left;
            font-weight: 200;
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          .links {
            width: 50%;
            display: flex;
            justify-content: left;
            font-weight: 200;
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
        </style>
        <div class="header">
          <div class="name align-self-center">
              Katherine Mackowiak
          </div>
          <div class="links align-self-center justify-content-end">
            <ul class="links align-self-center justify-content-end">
              <li><a href="index.html" class="a align-self-center justify-self-right">Home</a></li>
              <li><a href="projects.html" class="a align-self-center justify-self-right">Projects</a></li>
              <li><a href="resume.html" class="a align-self-center justify-self-right">Resume</a></li>
              <li><a href="contact.html" class="a align-self-center justify-self-right">Contact</a></li>
            </ul>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('header-template', Header);
  