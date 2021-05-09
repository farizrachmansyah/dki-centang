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
          customClass: {
            confirmButton: 'sweetalert-orange-btn'
          },
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
            Swal.fire({
              icon: 'question',
              title: 'Hubungi Petugas',
              text: 'Bagaimana anda ingin menghubungi petugas kami?',
              html: `
                <div class="hubungi">
                  <p class="hubungi__text">Bagaimana anda ingin menghubungi petugas kami?</p>
                  <div class="hubungi__btn">
                    <button onclick="showCallOption(this.dataset.telpon)" class="hubungi-btn" data-telpon=${theFuncBtn.dataset.telpon}>
                      <i class="fas fa-phone-alt"></i>
                    </button>
                    <button onclick="showChatOption(this.dataset.telpon)" class="hubungi-btn" data-telpon=${theFuncBtn.dataset.telpon}>
                      <i class="fas fa-comments"></i>
                    </button>
                  </div>
                </div>
              `,
              showConfirmButton: false
            });
          }
        });
      })
    });
  }
}

// MAIN LOGIC
document.addEventListener('DOMContentLoaded', () => {
  const events = new EventListener();

  events.openStatistics();
  events.openMenu();
  events.hubungiButton();
})

// FUNCTIONAL METHOD
function showCallOption(number) {
  Swal.fire({
    icon: 'question',
    title: 'Telpon melalui..',
    html: `
        <div class="telpon">
          <div class="telpon__btn">
            <button class="telpon-btn provider">
              <a href="tel:${number}">TELPON MELALUI PROVIDER</a>
            </button>
            <button class="telpon-btn wa">
              <div onclick="showMaintenence()">TELPON MELALUI WhatsApp</div>
            </button>
          </div>
        </div>
      `,
    showConfirmButton: false
  })
}

function showChatOption(number) {
  showMaintenence();
}

function showKritikSaran() {
  Swal.mixin({
    customClass: {
      confirmButton: 'sweetalert-orange-btn'
    },
    confirmButtonText: 'Send &rarr;',
    showCancelButton: true,
    title: 'Kritik & Saran',
  }).fire({
    input: 'textarea',
    inputPlaceholder: 'Tanggapan anda..',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Terima Kasih!', '', 'success')
    }
  })
}

function showMaintenence() {
  const showPopUp = Swal.mixin({
    customClass: {
      confirmButton: 'sweetalert-red-btn'
    }
  })
  showPopUp.fire({
    icon: 'error',
    title: 'Oops..',
    text: 'Sorry, this feature not available yet'
  })
}