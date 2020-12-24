function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

(function(){

    let burger = document.getElementById("burger");
    let aside = document.querySelector('aside');
    let elAside = document.querySelectorAll('aside ul li a');
    let main = document. querySelector('main');
    let nav = document.querySelector('nav');

    let nata = document.getElementById('nata');

    /* Tema e errtë dhe e ndritshme */
    const temaAktuale = localStorage.getItem("tema");
    if(temaAktuale == 'terr') {
        document.body.classList.add('nata');
    }
    nata.addEventListener('click', () => {
        document.body.classList.toggle('nata');
        let tema = 'drite';
        if(document.body.classList.contains('nata')) {
            tema = 'terr';
        }
        localStorage.setItem('tema', tema);
    });
    
    burger.addEventListener('click', hapjaMbyllja);
    
    for(let i = 0; i < elAside.length; i++) {
        elAside[i].addEventListener('click', hapjaMbyllja);
    }
    
    wrapper.addEventListener('click', mbyllja);
    
    nav.addEventListener('click', mbyllja);
    
    function mbyllja() {
        if(aside.style.right === '0px') {
            aside.style.right = '-250px';
            main.classList = '';
            nav.classList = '';
            burger.classList = '';
        }
    }

    function hapjaMbyllja() {
        if(aside.style.right === '0px') {
            aside.style.right = '-250px';
            main.classList = '';
            nav.classList = '';
            burger.classList = '';
    
        } else {
            aside.style.right = '0px';
            main.classList = 'main';
            nav.classList = 'menu';
            burger.classList = 'burger';
        }
    }

    /* Pamja e nav-igimit kur skrollohet */
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
          document.body.classList.remove(scrollUp);
          return;
        }
        
        if (currentScroll > lastScroll && !document.body.classList.contains(scrollDown)) {
          // down
          document.body.classList.remove(scrollUp);
          document.body.classList.add(scrollDown);
        } else if (currentScroll < lastScroll && document.body.classList.contains(scrollDown)) {
          // up
          document.body.classList.remove(scrollDown);
          document.body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
      });

})();
