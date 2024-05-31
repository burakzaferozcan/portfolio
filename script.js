const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
const toggleLanguageBtn = document.getElementById("toggle-language");
const sections = document.querySelectorAll(".fade-in-section");

window.addEventListener("load", function () {
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("fade-in");
    }, 300 * (index + 1));
  });
});
toggleDarkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleDarkModeBtn.textContent = "🌙";
  } else {
    toggleDarkModeBtn.textContent = "☀️";
  }
});

toggleLanguageBtn.addEventListener("click", function () {
  if (toggleLanguageBtn.textContent === "TR") {
    toggleLanguageBtn.textContent = "EN";
    setTurkishContent();
  } else {
    toggleLanguageBtn.textContent = "TR";
    setEnglishContent();
  }
});

function setTurkishContent() {
  document.getElementById("dowloadButton").innerText = "CV İndir";
  document.getElementById("role").textContent = "ME[RV]N Dev";
  document.getElementById("about-me").innerHTML = `
        <h2>Hakkımda</h2>
        <p>Merhaba! Ben Burak, Kocaeli Üniversitesi Bilgisayar Programcılığı son sınıf öğrencisiyim ve ME(RV)N (MongoDB, Express, React, Vue, Node.js) Stack geliştirici olma yolunda ilerliyorum. Özellikle JavaScript teknolojilerine karşı yoğun bir ilgim ve sempatim var. Temel programlama dillerinde deneyimim var ve yazılım sektöründe kariyer yapmak için çok heyecanlıyım, öğrenmeye açığım. Github profilimde yaptığım bazı projelere göz atabilirsiniz <a href="https://github.com/burakzaferozcan">GitHub profili</a>.</p>
    `;
  document.getElementById("experience").innerHTML = `
        <h2>İş Deneyimi</h2>
        <ul>
        <li>
        <strong>2024 - Junior Mern-Stack Developer</strong><br>
        u4Verse<br>
        Diyetisyenler için tasarlanmış olan back-end teknolojisi olarak .Net kullanılan front-end teknolojisi olarak ise React.js kullanılan bir uygulamanın geliştirilmesinde front-end geliştirici olarak aktif rol aldım.
    </li>
            <li>
                <strong>2023 - Stajyer Full-Stack Developer</strong><br>
                Gebze Bilişim<br>
                Bir Nakliye Firması için dinamik bir web sitesi yaptım.
            </li>

        </ul>
    `;
  document.getElementById("skills").innerHTML = `
        <h2>Yetkinlikler</h2>
        <ul>
            <li>ME(RV)N Stack (MongoDB, ExpressJS, ReactJS, VueJS, NodeJS)</li>
            <li>ReactJS ,VueJS ile Front-end Geliştirme</li>
            <li>NodeJS, ExpressJS MongoDB ile Back-end Geliştirme</li>
            <li>Temel Web Tasarım Bilgisi</li>
            <li>Java, C++, Python gibi dillerde temel bilgi ve deneyim</li>
        </ul>
    `;
  document.getElementById("contact").innerHTML = `
        <h2>İletişim</h2>
        <ul>
        <li>Telefon Numarası: <a href="tel:+905546834040">0554 683 40 40</a></li>
        
            <li>Email: <a href="mailto:ozcanburakzafer@gmail.com">ozcanburakzafer@gmail.com</a></li>
            <li>
            Github:
            <a href="https://github.com/burakzaferozcan">Burak Zafer Özcan</a>
          </li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/burak-zafer-%C3%B6zcan-357439258/">Burak Zafer Özcan</a></li>
            <li>Adres: Özgürlük Mah. İstiklal Cad. 212 Sokak No: 37, Çayırova/Kocaeli</li>
        </ul>
    `;
}

function setEnglishContent() {
  document.getElementById("dowloadButton").innerText = "Download CV";
  document.getElementById("role").textContent = "ME[RV]N Dev";
  document.getElementById("about-me").innerHTML = `
        <h2>About Me</h2>
        <p>Hello! I'm Burak, a final year student in Computer Programming at Kocaeli University, and I'm progressing towards becoming a ME(RV)N (MongoDB, Express, React, Vue, Node.js) Stack developer. I have a keen interest and affinity for JavaScript technologies, with experience in fundamental programming languages. I'm very excited to pursue a career in the software industry and eager to learn. You can take a look at some of the projects I've worked on in my <a href="https://github.com/burakzaferozcan">GitHub profile</a>.</p>
    `;
  document.getElementById("experience").innerHTML = `
        <h2>Experience</h2>
        <ul>
        <li>
        <strong>2024 - Junior Mern-Stack Developer</strong><br>
        u4Verse<br>
        Played an active role as a front-end developer in developing an application designed for dieticians, using .Net as the back-end technology and React.js as the front-end technology.
    </li>
            <li>
                <strong>2023 - Intern Full-Stack Developer</strong><br>
                Gebze Bilişim<br>
                Developed a dynamic website for a Transport Company.
            </li>

        </ul>
    `;
  document.getElementById("skills").innerHTML = `
        <h2>Skills</h2>
        <ul>
            <li>ME(RV)N Stack (MongoDB, ExpressJS, ReactJS, VueJS, NodeJS)</li>
            <li>Front-end Development with ReactJS and VueJS</li>
            <li>Back-end Development with NodeJS, ExpressJS, MongoDB</li>
            <li>Basic Web Design Knowledge</li>
            <li>Basic knowledge and experience in languages like Java, C++, Python</li>
        </ul>
    `;
  document.getElementById("contact").innerHTML = `
        <h2>Contact</h2>
        <ul>
        
        <li>Phone Number: <a href="tel:+905546834040">0554 683 40 40</a></li>
            <li>Email: <a href="mailto:ozcanburakzafer@gmail.com">ozcanburakzafer@gmail.com</a></li>
            <li>
            Github:
            <a href="https://github.com/burakzaferozcan">Burak Zafer Özcan</a>
          </li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/burak-zafer-%C3%B6zcan-357439258/">Burak Zafer Özcan</a></li>
            <li>Address: Özgürlük Mah. İstiklal Cad. 212 Sokak No: 37, Çayırova/Kocaeli</li>
        </ul>
    `;
}
