const sectionsPages = new fullpage('#fullpage', {
    autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
    loopBottom: true,
    navigation: true,
    menu: '#menu',
	anchors: ['home', 'about-me', 'projects', 'contact'],
	navigationTooltips: ['Home', 'About me', 'Projects', 'Contact'],
    showActiveTooltip: false,
    sectionsColor: ['#F06E3D', '#bdc3c7', '#fcba03', '#3d3b34'],
    verticalCentered: true,
    controlArrows: true,
    slidesNavigation: true,
    afterLoad: function(origin, destination){
        if(destination.anchor == 'contact'){
            document.querySelector('.footer h2').style.opacity = 1;
        }
        if(destination.anchor == 'about-me'){
            document.querySelector('.about-me h2').style.opacity = 1;
        }
    }
});

