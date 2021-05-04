class EventListener {
  constructor() {
    this.body = document.querySelector('body');
    this.statisticsBtn = document.querySelector('.btn-statistics');
    this.menuBtn = document.querySelector('.btn-menu');
  }

  openStatistics() {
    const theBody = this.body;
    const theBtn = this.statisticsBtn;
    const overlayStat = document.querySelector('.overlay-statistics');

    theBtn.addEventListener('click', () => {
      if (!overlayStat.classList.contains('open')) {
        overlayStat.classList.add('open');
        theBody.style.overflowY = 'hidden';
      } else {
        overlayStat.classList.remove('open');
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
        theBody.style.overflowY = 'hidden';
      } else {
        overlayMenu.classList.remove('open');
        theBody.style.overflowY = 'auto';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const events = new EventListener();

  events.openStatistics();
  events.openMenu();
})