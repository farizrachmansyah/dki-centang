class EventListener {
  constructor() {
    this.body = document.querySelector('body');
    this.statisticsBtn = document.querySelector('.btn-statistics');
    this.menuBtn = document.querySelector('.btn-menu');
    this.hubungiBtn = document.querySelectorAll('.btn-hubungi');
  }

  openStatistics() {
    const theBody = this.body;
    const theBtn = this.statisticsBtn;
    const overlayStat = document.querySelector('.overlay-statistics');

    theBtn.addEventListener('click', () => {
      if (!overlayStat.classList.contains('open')) {
        overlayStat.classList.add('open');
        theBtn.classList.add('open');
        theBody.style.overflowY = 'hidden';
      } else {
        overlayStat.classList.remove('open');
        theBtn.classList.remove('open');
        theBody.style.overflowY = 'auto';
      }
    });
  }

  openMenu() {
    const theBody = this.body;
    const theBtn = this.menuBtn;
    const overlayMenu = document.querySelector('.overlay-menu');

    theBtn.addEventListener('click', () => {
      if (!overlayMenu.classList.contains('open')) {
        overlayMenu.classList.add('open');
        theBtn.classList.add('open');
        theBody.style.overflowY = 'hidden';
      } else {
        overlayMenu.classList.remove('open');
        theBtn.classList.remove('open');
        theBody.style.overflowY = 'auto';
      }
    });
  }

  hubungiButton() {
    const theBtn = this.hubungiBtn;
    console.log(theBtn);

    theBtn.forEach(button => {
      const theFuncBtn = button.firstElementChild;

      button.addEventListener('mouseover', () => {
        theFuncBtn.style.width = '100%';
      });
      button.addEventListener('mouseout', () => {
        theFuncBtn.style.width = '0';
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const events = new EventListener();

  events.openStatistics();
  events.openMenu();
  events.hubungiButton();
})