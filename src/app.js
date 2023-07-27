import anime from 'animejs/lib/anime.es.js';
console.log("app")

anime({
      targets: '#text',
      opacity: 1,
      translateY: -50,
      duration: 1000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    })
    anime({
      targets: '#box1',
	borderRadius: ['0%', '50%'],
      translateX: 1660,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    })
    anime({
      targets: '#box2',
	borderRadius: ['50%', '0%'],
      translateY: 900,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    })
    anime({
      targets: '#box3',
	borderRadius: ['0%', '50%'],
      translateX: -1660,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });
    anime({
      targets: '#box4',
	borderRadius: ['50%', '0%'],
      translateY: -900,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });
    anime({
      targets: '#box5',
	borderRadius: ['0%', '50%'],
      translateX: 1260,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    })
    anime({
      targets: '#box6',
	borderRadius: ['50%', '0%'],
      translateY: 500,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    })
    anime({
      targets: '#box7',
	borderRadius: ['0%', '50%'],
      translateX: -1260,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });
    anime({
      targets: '#box8',
	borderRadius: ['50%', '0%'],
      translateY: -500,
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });

    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    const boxes = document.querySelectorAll('.box');
    const text = document.getElementById('text');
    
    let isDarkMode = false;
    
    toggleButton.addEventListener('click', () => {
	isDarkMode = !isDarkMode;
    
	if (isDarkMode) {
	  body.style.backgroundColor = 'black';
	  boxes.forEach(box => {
	    box.style.backgroundColor = 'blueviolet';
	  });
	  text.style.color = 'white';
	} else {
	  body.style.backgroundColor = 'white';
	  boxes.forEach(box => {
	    box.style.backgroundColor = 'orange';
	  });
	  text.style.color = 'black';
	}
    });