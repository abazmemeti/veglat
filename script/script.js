window.addEventListener("load", function () {
    const loader = document.querySelector("#loader");
    loader.className += " hidden"; // class "loader hidden"
});

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

(function(){

    let burger = document.getElementById("burger");
    let aside = document.querySelector('aside');
    let elAside = document.querySelectorAll('aside ul li a');
    let main = document.querySelector('main');
    let nav = document.querySelector('nav');
    let permbajtja = document.getElementById('btn-bottom')   

    let nata = document.getElementById('nata');
    let imgLogo = document.getElementById('img-logo');

    /* Tema e errtë dhe e ndritshme */
    const temaAktuale = localStorage.getItem("tema");
    if(temaAktuale == 'terr') {
        document.body.classList.add('nata');
        imgLogo.setAttribute('src', 'foto/dielli.svg');
    }
    nata.addEventListener('click', () => {
        document.body.classList.toggle('nata');
        imgLogo.setAttribute('src', 'foto/hena.svg');

        let tema = 'drite';
        if(document.body.classList.contains('nata')) {
            tema = 'terr';
            imgLogo.setAttribute('src', 'foto/dielli.svg');
        }
        localStorage.setItem('tema', tema);
    });
    
    permbajtja.addEventListener('click', hapjaMbyllja);
    
    for(let i = 0; i < elAside.length; i++) {
        elAside[i].addEventListener('click', hapjaMbyllja);
    }
    
    wrapper.addEventListener('click', mbyllja);
    
    nav.addEventListener('click', mbyllja);
    
    function mbyllja() {
        if(aside.style.right === '0px') {
            aside.style.right = '-240px';
            main.classList = '';
            nav.classList = '';
            permbajtja.innerHTML = 'Përmbajtja'
        }
    }

    function hapjaMbyllja() {
        if(aside.style.right === '0px') {
            aside.style.right = '-240px';
            main.classList = '';
            nav.classList = '';
            permbajtja.innerHTML = 'Përmbajtja'
            
        } else {
            aside.style.right = '0px';
            main.classList = 'main';
            nav.classList = 'menu';
            permbajtja.innerHTML = 'Mbyll Përmbajtjen'
        }
    }

    burger.addEventListener('click', () => {
        document.body.classList.toggle('shih-nav');
        burger.classList.toggle('burger');
    });


    /* Navigimi aktiv kur skrollohet dhe klikohet */
    window.addEventListener('DOMContentLoaded', () => {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`aside li a[href="#${id}"]`).parentElement.classList.add('nav-aktiv');
                } else {
                    document.querySelector(`aside li a[href="#${id}"]`).parentElement.classList.remove('nav-aktiv');
                }
            });
        });
    
        // Track all sections that have an `id` applied
        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });
        
    });
    
    /* Pamja e nav-igimit kur skrollohet 
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
    */
})();