import ScrollReveal from 'scrollreveal';

window.sr = ScrollReveal({ reset: true });

sr.reveal('.revealBottom', {
	distance: '80px',
	duration: 1000,
	origin: 'bottom',
	opacity:0
});
sr.reveal('.revealTop', {
	distance: '80px',
	duration: 1000,
	origin: 'top',
	opacity:0,
	scale:.1
});