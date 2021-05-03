class EventListener {
  constructor() {
    this.statisticsBtn = document.querySelector('.btn-statistics');
  }

  statisticsBtn() {
    const theBtn = this.statisticsBtn;

    theBtn.addEventListener('click', () => {

    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const events = new EventListener();

  events.statisticsBtn();
})