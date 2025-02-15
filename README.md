# Avito Clone

Проект представляет собой клон популярной платформы объявлений Avito с базовым функционалом для размещения, просмотра и редактирования объявлений.

---

## Содержание

- [Общая информация](#общая-информация)
- [Технологии](#технологии)
- [Почему React Hook Form?](#почему-react-hook-form)
- [Функционал](#функционал)
- [Установка и запуск](#установка-и-запуск)

---

## Общая информация

Проект **Avito Clone** разработан для демонстрации базового функционала платформы объявлений. Пользователи могут размещать объявления, просматривать их, а также редактировать существующие. Проект реализован с использованием современных технологий, таких как React, TypeScript и React Hook Form.

---

## Технологии

Проект создан с использованием следующих технологий:

- **React**: v19.0.0
- **TypeScript**: v5.7.2
- **React-router-dom**: v7.1.5
- **Axios**: v1.7.9
- **Vite**: v6.1.0
- **@tanstack/react-query**: v5.66.0
- **React Hook Form**: v7.0.0
- **Material-UI (MUI)**: v5.0.0

---

## Почему React Hook Form?

**React Hook Form** был выбран для управления формами в проекте по следующим причинам:

- Предоставляет простой и интуитивно понятный API для работы с формами.
- Позволяет сократить количество кода при реализации сложной логики валидации.
- Оптимизирован для минимизации повторных рендеров, что делает его быстрым даже при работе с формами, содержащими множество полей.
- Отлично работает с TypeScript, предоставляя строгую типизацию всех полей формы.
- Поддерживает кастомные валидации.
- Легко интегрируется с UI-библиотеками (например, Material-UI).
- Позволяет работать с формами любой сложности.

## Функционал

### Размещение объявлений

- Форма с несколькими шагами для размещения объявлений.
- Поддержка различных типов объявлений: недвижимость, авто, услуги.
- Валидация полей формы для корректного ввода данных.

### Список объявлений

- Отображение всех размещённых объявлений в виде карточек.
- Возможность фильтрации объявлений по категориям и поиска по названию.

### Просмотр объявлений

- Детальная карточка объявления с полной информацией.
- Возможность перехода к редактированию объявления.

### Редактирование объявлений

- Форма редактирования с предзаполненными данными.
- Сохранение изменений и обновление данных на сервере.

---

## Установка и запуск

Для запуска проекта выполните следующие шаги:

1. Запустите бекэнд:
   Скачайте папку [server](https://github.com/avito-tech/tech-internship/tree/main/Tech%20Internships/Frontend/Frontend-trainee-assignment-winter-2025/server) и запустите бек локально с помощью команд:
   $ npm install
   $ npm start
   Далее вставьте в файл app.js следующий код (это необходимо для работы CORS)

```
const cors = require("cors");
let corsOptions = {
origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
```

2. Клонируйте репозиторий:

   ```bash
   $ git clone https://github.com/Anna1719/avito-clone.git
   $ cd ./avito-clone
   $ npm install
   $ npm start
   ```
