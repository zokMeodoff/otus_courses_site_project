var updateLessons = (courseName) => {
	var newHTML;
	if (courseName === 'Разработчик JavaScript') {
		newHTML = `<div class="lesson-content">
			<span class="lesson-content__date">27 Июня 2019 &nbsp; 20:00</span>
			<p>Введение в курс Modern JavaScript Frameworks</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">4 Июля 2019 &nbsp; 20:00</span>
			<p>Возможности современного JavaScript</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">8 Июля 2019 &nbsp; 20:00</span>
			<p>Введение в Node-Пакетный менеджер NPM и возможности package.json</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">11 Июля 2019 &nbsp; 20:00</span>
			<p>Test Driven Development с JavaScript</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">15 Июля 2019 &nbsp; 20:00</span>
			<p>Основные концепции Node-Modules</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">18 Июля 2019 &nbsp; 20:00</span>
			<p>Стандартная библиотека Node-EventLoop-Timers</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">22 Июля 2019 &nbsp; 20:00</span>
			<p>Node Best Practices-Streams-Errors-Processes</p>
		</div>'`;
	}
	else if (courseName === 'Android-разработчик. Продвинутый курс') {
		newHTML = `<div class="lesson-content">
			<span class="lesson-content__date">27 Июня 2019 &nbsp; 20:00</span>
			<p>Kotlin стандартная библиотека. Часть 1</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">4 Июля 2019 &nbsp; 20:00</span>
			<p>Kotlin стандартная библиотека. Часть 2</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">8 Июля 2019 &nbsp; 20:00</span>
			<p>Kotlin coroutines</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">11 Июля 2019 &nbsp; 20:00</span>
			<p>Advanced Fragment</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">15 Июля 2019 &nbsp; 20:00</span>
			<p> Advanced Service</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">18 Июля 2019 &nbsp; 20:00</span>
			<p>Advanced Views</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">22 Июля 2019 &nbsp; 20:00</span>
			<p>Advanced Canvas</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">29 Июля 2019 &nbsp; 20:00</span>
			<p>UI Profiling</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">1 Августа 2019 &nbsp; 20:00</span>
			<p>Network</p>
		</div>`;
	}
	else if (courseName === 'Разработчик C++') {
		newHTML = `<div class="lesson-content">
			<span class="lesson-content__date">27 Июня 2019 &nbsp; 20:00</span>
			<p>Система сборки: build, test and deploy</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">4 Июля 2019 &nbsp; 20:00</span>
			<p>Особенности C++11. auto, lambda, tuple</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">8 Июля 2019 &nbsp; 20:00</span>
			<p>Особенности C++11. Move, variadic templates</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">11 Июля 2019 &nbsp; 20:00</span>
			<p>Сравнение C++11/C++14 с С++ 03</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">15 Июля 2019 &nbsp; 20:00</span>
			<p>Обзор C++17. Constexpr lambda. Fold expression. Attributes. Type deduction</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">18 Июля 2019 &nbsp; 20:00</span>
			<p>Обзор C++17. If constexpr. Structured bindings. Statements with initializer. Std::filesystem</p>
		</div>
		<div class="lesson-content">
			<span class="lesson-content__date">22 Июля 2019 &nbsp; 20:00</span>
			<p>Реализация умных указателей</p>
		</div>`;
	}
	var lessons = document.getElementsByClassName('schedule__lessons')[0];
	lessons.innerHTML = '';
	lessons.innerHTML = newHTML;
}

var changeClassName = (coursesList, el) => {
	for (var i = 0; i < courses.length; i++){
		if (courses.item(i) === el) {
			courses.item(i).className = 'schedule__courses__active';  
		}
		else {
			courses.item(i).className = 'schedule__courses__inactive';
		}
	}
}

var coursesList = document.getElementsByClassName('schedule__courses')[0];
var courses = coursesList.children;
[].forEach.call(courses, (el) => {
	el.addEventListener('click', () => { changeClassName(coursesList, el); updateLessons(el.innerText) }, false)
})