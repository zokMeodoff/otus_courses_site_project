var coursesList = document.getElementsByClassName('course-card');
[].forEach.call(coursesList, function(el) {
    el.addEventListener('mouseover', () => { el.style.transform = 'scale(1.5)'; el.style.zIndex = '1' })
	el.addEventListener('mouseout', () => { el.style.transform = 'scale(1)'; el.style.zIndex = '0' })
});
