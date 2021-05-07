class EventListener {
  constructor() {
    this.body = document.querySelector('body');
    this.statisticsBtn = document.querySelector('.btn-statistics');
    this.menuBtn = document.querySelector('.btn-menu');
    this.menuBtnDesktop = document.querySelector('.btn-menuDesktop');
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
    const theDesktopBtn = this.menuBtnDesktop;
    const overlayMenu = document.querySelector('.overlay-menu');
    const overlayDesktopMenu = document.querySelector('.overlay-menuDesktop');

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

    theDesktopBtn.addEventListener('click', () => {
      if (!overlayDesktopMenu.classList.contains('open')) {
        overlayDesktopMenu.classList.add('open');
        theDesktopBtn.classList.add('open');
        theBody.style.overflowY = 'hidden';
      } else {
        overlayDesktopMenu.classList.remove('open');
        theDesktopBtn.classList.remove('open');
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
        theFuncBtn.style.top = '0';
        theFuncBtn.style.opacity = '1';
        theFuncBtn.style.pointerEvents = 'all';
      });
      button.addEventListener('mouseout', () => {
        theFuncBtn.style.pointerEvents = 'none';
        theFuncBtn.style.opacity = '0';
        theFuncBtn.style.top = '-100%';
      });

      theFuncBtn.addEventListener('click', () => {
        Swal.mixin({
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          title: 'Data Diri',
        }).queue([
          {
            input: 'text',
            inputPlaceholder: 'Nama Lengkap',
            inputAttributes: {
              required: true
            },
            validationMessage: 'This field is required'
          },
          {
            input: 'text',
            inputPlaceholder: 'NIK',
            inputAttributes: {
              required: true
            },
            validationMessage: 'This field is required'
          },
          {
            input: 'tel',
            inputPlaceholder: 'Nomor Telepon',
            inputAttributes: {
              required: true
            },
            validationMessage: 'This field is required'
          },
          {
            input: 'email',
            inputPlaceholder: 'Email Address',
          },
          {
            input: 'textarea',
            inputPlaceholder: 'Alamat',
            inputAttributes: {
              required: true
            },
            validationMessage: 'This field is required'
          },
        ]).then((result) => {
          if (result.value) {
            const answers = JSON.stringify(result.value)
            Swal.fire({
              icon: 'success',
              title: 'All done!',
              confirmButtonText: 'Lovely!'
            });
          }
        });
      })
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const events = new EventListener();

  events.openStatistics();
  events.openMenu();
  events.hubungiButton();
})