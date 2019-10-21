## **Курс Web-разработчик на Python от OTUS. Итоговый проект.**

### **Бекенд для сайта с курсами на Django**

#### Установка

```консоль
Получение исходного кода приложения:
$ git clone https://github.com/zokMeodoff/otus_courses_site_project.git

Установка зависимостей:
$ cd otus_courses_site_project/otus_courses_site_backend/
$ pip install -r requirements.txt

Миграции:
$ python manage.py migrate

Загрузка данных в БД:
$ python manage.py loaddata courses

```

#### Запуск

```консоль
$ python manage.py runserver
```

#### API-запросы

##### Регистрация пользователя

    POST http://127.0.0.1:8000/users/ 

В теле запроса передаётся JSON-объект с данными регистрируемого пользователя.  
В теле ответа при успешной регистрации возвращается JSON-объект с данными зарегестрированного пользователя.

##### Аутентификация пользователя

	POST http://127.0.0.1:8000/users/login/

В теле запроса передаётся JSON-объект с учётными данными пользователя.  
В теле ответа в случае успешной аутентификации возвращается JSON-объект с токеном пользователя.

##### Просмотр списка курсов

    GET http://127.0.0.1:8000/courses/

Доступно только для зарегистрированных пользователей - в заголовке "Authorization" запроса необходимо передать значение токена, полученное при аутентификации.  
В теле ответа возвращается массив JSON-объектов, содержащих информацию о курсах.

##### Просмотр конкретного курса

    GET http://127.0.0.1:8000/courses/<id>/

Доступно только для зарегистрированных пользователей - в заголовке "Authorization" запроса необходимо передать значение токена, полученное при аутентификации.  
В теле ответа в случае, если курс с заданным идентификатором сущесвтует, возвращается JSON-объект, содержащий информацию о выбранном курсе.

##### Запись на курс

    PUT http://127.0.0.1:8000/courses/signup/<id>/
    или
    PATCH http://127.0.0.1:8000/courses/signup/<id>/

Доступно только для зарегистрированных пользователей - в заголовке "Authorization" запроса необходимо передать значение токена, полученное при аутентификации.  
В теле ответа в случае успешной записи на курс возвращается JSON-объект, содержащий
информацию о выбранном курсе.

##### Запуск тестов

Тестирование регистрации и аутентификации пользователя:

    $ pytest --ds otus_courses_site.settings tests/test_users.py

Тестирование просмотра списка курсов, просмотра конкретного курса, записи на курс:

    $ pytest --ds otus_courses_site.settings tests/test_courses.py


### **Фронтенд для сайта с курсами на HTML**	

```консоль
Получение исходного кода:
$ git clone https://github.com/zokMeodoff/otus_courses_site_project.git

Установка необходимых зависимостей webpack:
$ cd otus_courses_site_project/otus_courses_site_frontend_html/
$ npm install

Запуск на http://127.0.0.1:7000:
$ npm start

Сборка (в директории output): 
$ npm run build
```
	
### **Фронтенд для сайта с курсами на JS**	
	
```консоль
Получение исходного кода:
$ git clone https://github.com/zokMeodoff/otus_courses_site_project.git

Установка необходимых зависимостей:
$ cd otus_courses_site_project/otus_courses_site_frontend_react/
$ npm install

Запуск:
$ npm start
```

### **Фронтенд: landing page для сайта с курсами на Vue**

```консоль
Получение исходного кода:
$ git clone https://github.com/zokMeodoff/otus_courses_site_project.git

Установка необходимых зависимостей:
$ cd otus_courses_site_project/otus_courses_site_frontend_vue/
$ npm install

Запуск:
$ npm run serve
```









