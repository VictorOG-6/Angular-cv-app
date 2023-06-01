import { Component } from '@angular/core';

interface ProfilePic {
  id: number;
  img: string;
}

interface ProjectInfo {
  id: number;
  img: string;
  title: string;
  desc: string;
  applink: string;
  gitlink: string;
}

interface CertificateInfo {
  id: number;
  img: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cv';
  profilePics: ProfilePic[] = [
    { id: 1, img: 'https://i.ibb.co/vwjZnzB/image1.jpg' },
    { id: 2, img: 'https://i.ibb.co/gTRV4j8/image3.jpg' },
  ];

  projectsInfo: ProjectInfo[] = [
    {
      id: 1,
      img: 'https://i.ibb.co/TRnNmVC/Screenshot-20.png',
      title: 'Citizens Reporting News App',
      desc:
        'The goal of the project was to build an app where citizens or members of a community can report incidents such as accidents, thefts and riots going on in their immediate environment or society at large.',
      applink: 'https://citizens-reporting-news-app.vercel.app/',
      gitlink: 'https://github.com/VictorOG-6/Citizens-Reporting-News-App.git',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/pdfyh7P/Screenshot-21.png',
      title: 'Reminder App',
      desc:
        'To create an app where users can log in and set detailed reminders such as the reminder, date and time. Significantly, it also allows users to edit their reminders real-time, check it and also delete them individually and as a whole.',
      applink: 'https://reminder-app-using-firebase-authentication.vercel.app/',
      gitlink: 'https://github.com/VictorOG-6/Reminder-App-using-Firebase-Authentication',
    },
  ];

  certificateInfo: CertificateInfo[] = [
    {
      id: 1,
      img: 'https://i.ibb.co/QMK2K4T/Coursera-AP6-E7-LEHEBEJ-page-0001.jpg',
      title: 'Coursera: JavaScript Basics-UC Davis',
      desc: 'The course was held by California University, Davis based on the basics of Javascript and then advances.',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/WWBB1cG/Coursera-NFYXRCBRWUZK-page-0001.jpg',
      title: 'Coursera: Create a no-code responsive website with Webflow',
      desc: 'Learning to design websites with Webflow which does not require any code',
    },
    {
      id: 3,
      img: 'https://i.ibb.co/BrhVt3V/Coursera-RKAKXWK6-SATK-page-0001.jpg',
      title: 'Coursera: Autodesk Fusion 360 Integrated CAD/CAM/CAE',
      desc: 'An online course authorized by Autodesk on the full-intensive learning of Computer-Aided-Design (CAD)',
    },
  ];

  ngAfterViewInit() {
    const profileSlider = document.querySelector('.hero-img') as HTMLElement;
    profileSlider.innerHTML = this.profilePics
      .map((image) => `
        <div class="content">
            <img src="${image.img}" alt="Pic of Victor" class="image">
        </div>
    `)
      .join('');

    const prevBtn = document.querySelector('.slide-left') as HTMLElement;
    const nextBtn = document.querySelector('.slide-right') as HTMLElement;
    const slideElements = document.querySelectorAll('.content');
    let currentSlide = 0;

    nextBtn.addEventListener('click', (event) => {
      event.preventDefault();
      slideElements[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slideElements.length;
      slideElements[currentSlide].classList.add('active');
    });

    prevBtn.addEventListener('click', (event) => {
      event.preventDefault();
      slideElements[currentSlide].classList.remove('active');
      currentSlide = (currentSlide - 1 + slideElements.length) % slideElements.length;
      slideElements[currentSlide].classList.add('active');
    });

    setInterval(() => {
      slideElements[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slideElements.length;
      slideElements[currentSlide].classList.add('active');
    }, 5000);

    const projectSlider = document.querySelector('.projects-container') as HTMLElement;
    projectSlider.innerHTML = this.projectsInfo
      .map((info) => `
          <div class="projects-content">
              <a href="${info.applink}"><img src="${info.img}" alt="Project" class="image"></a>
              <div class="project-info">
                  <h3>${info.title}</h3>
                  <p>${info.desc}</p>
                  <a href="${info.gitlink}">Github Link</a>
              </div>
          </div>
      `)
      .join('');

    const movePrevBtn = document.querySelector('.move-left') as HTMLElement;
    const moveNextBtn = document.querySelector('.move-right') as HTMLElement;
    const projectElements = document.querySelectorAll('.projects-content');
    let currentProj = 0;

    moveNextBtn.addEventListener('click', (event) => {
      event.preventDefault();
      projectElements[currentProj].classList.remove('active');
      currentProj = (currentProj + 1) % projectElements.length;
      projectElements[currentProj].classList.add('active');
    });

    movePrevBtn.addEventListener('click', (event) => {
      event.preventDefault();
      projectElements[currentProj].classList.remove('active');
      currentProj = (currentProj - 1 + projectElements.length) % projectElements.length;
      projectElements[currentProj].classList.add('active');
    });

    setInterval(() => {
      projectElements[currentProj].classList.remove('active');
      currentProj = (currentProj + 1) % projectElements.length;
      projectElements[currentProj].classList.add('active');
    }, 5000);

    const certificateSlider = document.querySelector('.certificates-container') as HTMLElement;
    certificateSlider.innerHTML = this.certificateInfo
      .map((info) => `
          <div class="certificates-content">
              <div class="certifcate-img">
                  <img src="${info.img}" alt="Certificates" class="image cert">
              </div>
              <h3>${info.title}</h3>
              <p>${info.desc}</p>
          </div>
      `)
      .join('');

    const jumpPrevBtn = document.querySelector('.jump-left') as HTMLElement;
    const jumpNextBtn = document.querySelector('.jump-right') as HTMLElement;
    const certificateElements = document.querySelectorAll('.certificates-content');
    let currentCert = 0;

    jumpNextBtn.addEventListener('click', (event) => {
      event.preventDefault();
      certificateElements[currentCert].classList.remove('active');
      currentCert = (currentCert + 1) % certificateElements.length;
      certificateElements[currentCert].classList.add('active');
    });

    jumpPrevBtn.addEventListener('click', (event) => {
      event.preventDefault();
      certificateElements[currentCert].classList.remove('active');
      currentCert = (currentCert - 1 + certificateElements.length) % certificateElements.length;
      certificateElements[currentCert].classList.add('active');
    });

    setInterval(() => {
      certificateElements[currentCert].classList.remove('active');
      currentCert = (currentCert + 1) % certificateElements.length;
      certificateElements[currentCert].classList.add('active');
    }, 5000);
  }
}
