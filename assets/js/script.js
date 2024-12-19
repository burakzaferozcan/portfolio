const toggleLanguageBtn = document.getElementById("toggle-language");
const toggleLanguageMobileBtn = document.getElementById("toggle-language-mobile");
const sections = document.querySelectorAll(".fade-in-section");

// Load initial content
window.addEventListener("load", function () {
  // Load initial English content
  setEnglishContent();
  
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("fade-in");
    }, 300 * (index + 1));
  });
});

function updateLanguageButtons(text) {
  toggleLanguageBtn.textContent = text;
  toggleLanguageMobileBtn.textContent = text;
}

toggleLanguageBtn.addEventListener("click", handleLanguageToggle);
toggleLanguageMobileBtn.addEventListener("click", handleLanguageToggle);

function handleLanguageToggle() {
  if (this.textContent === "TR") {
    updateLanguageButtons("EN");
    setTurkishContent();
  } else {
    updateLanguageButtons("TR");
    setEnglishContent();
  }
}

function setTurkishContent() {
  document.getElementById("dowloadButton").innerText = "CV İndir";
  document.getElementById("role").textContent = "Yazılım Geliştirici";
  document.getElementById("about-me").innerHTML = `
        <h2>Hakkımda</h2>
        <p>
          Merhaba! Ben Burak, Kocaeli Üniversitesi Bilgisayar Programcılığı Bölümü'nden mezun oldum ve Full Stack geliştirici olma yolunda ilerliyorum. JavaScript teknolojilerine karşı güçlü bir ilgim ve tutkum var. Temel programlama dillerinde deneyimim var ve yazılım sektöründe kariyer yapmak için çok heyecanlıyım. Öğrenmeye açığım. Üzerinde çalıştığım bazı projeleri
          <a href="https://github.com/burakzaferozcan">GitHub profilimde</a> inceleyebilirsiniz.
        </p>
    `;
  document.getElementById("experience").innerHTML = `
        <h2>Deneyim</h2>
        <ul>
          <li>
            <strong>2024 - Stajyer Yazılım Geliştirici</strong><br />
            Fabrikod<br />
            PDF dosyalarını farklı format dosyalarına dönüştürme ve pdf dosyalarını düzenleme ihtiyacını karşılayan PDF Genius adlı projede Full Stack (Node.js, Next.js) geliştirici olarak yer aldım. <br />
            Fabrikod şirket web sitesinin Full Stack (Next.js, Node.js) geliştirmesinde aktif rol aldım.
          </li>
          <li>
            <strong>2024 - Junior Mern-Stack Geliştirici</strong><br />
            u4Verse<br />
            Diyetisyenler için tasarlanmış, back-end teknolojisi olarak .Net ve front-end teknolojisi olarak React.js kullanılan bir uygulamanın geliştirilmesinde front-end geliştirici olarak aktif rol aldım.
          </li>
          <li>
            <strong>2023 - Stajyer Full-Stack Geliştirici</strong><br />
            Gebze Bilişim<br />
            Bir Nakliye Firması için dinamik bir web sitesi geliştirdim.
          </li>
        </ul>
    `;
  document.getElementById("skills").innerHTML = `
        <h2>Yetenekler</h2>
        <ul>
          <li>React, Next.js ve Vue ile Front-end Geliştirme</li>
          <li>Laravel, Node.js, Express.js, MongoDB, MySQL ile Back-end Geliştirme</li>
          <li>Java, C++, Python gibi dillerde temel bilgi ve deneyim</li>
        </ul>
    `;
  document.getElementById("contact").innerHTML = `
        <h2>İletişim</h2>
        <ul>
          <li>Telefon: <a href="tel:+905546834040">0554 683 40 40</a></li>
          <li>
            E-posta:
            <a href="mailto:ozcanburakzafer@gmail.com">ozcanburakzafer@gmail.com</a>
          </li>
          <li>
            Github:
            <a href="https://github.com/burakzaferozcan">Burak Zafer Özcan</a>
          </li>
          <li>
            LinkedIn:
            <a href="https://www.linkedin.com/in/burak-zafer-%C3%B6zcan-357439258/">Burak Zafer Özcan</a>
          </li>
          <li>
            Adres: Özgürlük Mah. İstiklal Cad. 212 Sokak No: 37, Çayırova/Kocaeli
          </li>
        </ul>
    `;
}

function setEnglishContent() {
  document.getElementById("dowloadButton").innerText = "Download CV";
  document.getElementById("role").textContent = "Software Developer";
  document.getElementById("about-me").innerHTML = `
        <h2>About Me</h2>
        <p>
          Hello! I am Burak, I graduated from Kocaeli University Computer Programming Department and I am on my way to becoming a Full Stack developer. I have a strong interest and enthusiasm for JavaScript technologies. I have experience in basic programming languages and am very excited to pursue a career in the software industry. I am eager to learn. You can check out some of the projects I have worked on in my
          <a href="https://github.com/burakzaferozcan">GitHub profile</a>.
        </p>
    `;
  document.getElementById("experience").innerHTML = `
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>2024 - Intern Software Developer</strong><br />
            Fabrikod<br />
            I took part in a project called PDF Genius, which meets the need for converting pdf files into different format files and editing pdf files, by developing Full Stack (Node.js, Next.js). <br />
            I took an active role in the Full Stack (Next.js, Node.js) development of the Fabrikod company website.
          </li>
          <li>
            <strong>2024 - Junior Mern-Stack Developer</strong><br />
            u4Verse<br />
            Played an active role as a front-end developer in developing an application designed for dieticians, using .Net as the back-end technology and React.js as the front-end technology.
          </li>
          <li>
            <strong>2023 - Intern Full-Stack Developer</strong><br />
            Gebze Bilişim<br />
            Developed a dynamic website for a Transport Company.
          </li>
        </ul>
    `;
  document.getElementById("skills").innerHTML = `
        <h2>Skills</h2>
        <ul>
          <li>Front-end Development with React, Next.js and Vue</li>
          <li>Back-end Development with Laravel, Node.js, Express.js, MongoDB, MySQL</li>
          <li>Basic knowledge and experience in languages like Java, C++, Python</li>
        </ul>
    `;
  document.getElementById("contact").innerHTML = `
        <h2>Contact</h2>
        <ul>
          <li>Phone Number: <a href="tel:+905546834040">0554 683 40 40</a></li>
          <li>
            Email:
            <a href="mailto:ozcanburakzafer@gmail.com">ozcanburakzafer@gmail.com</a>
          </li>
          <li>
            Github:
            <a href="https://github.com/burakzaferozcan">Burak Zafer Özcan</a>
          </li>
          <li>
            LinkedIn:
            <a href="https://www.linkedin.com/in/burak-zafer-%C3%B6zcan-357439258/">Burak Zafer Özcan</a>
          </li>
          <li>
            Address: Özgürlük Mah. İstiklal Cad. 212 Sokak No: 37, Çayırova/Kocaeli
          </li>
        </ul>
    `;
}
