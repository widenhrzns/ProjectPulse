"use strict";

const page = {
  mobileMenu: document.querySelector(".menu__wrapper"),
  table: document.querySelector(".projects__table"),
};

const projects = [
  {
    status: "inProgress",
    name: "Проект 'Разгром'",
    dates: "13.01.2000/01.01.2025",
    responsible: "Тайлер Дерден",
  },
  {
    status: "ready",
    name: "ProjectPulse",
    dates: "01.12.2024/11.12.2024",
    responsible: "Вайден ХРЗНС",
  },
  {
    status: "suspend",
    name: "Проект X",
    dates: "11.12.2024/12.12.2024",
    responsible: "Иванов А.В.",
  },
  {
    status: "ready",
    name: "Проект 'Новая Эра'",
    dates: "05.03.2023/15.06.2023",
    responsible: "Светлана Петрова",
  },
  {
    status: "inProgress",
    name: "Проект 'Зеленая Идея'",
    dates: "10.01.2024/30.12.2024",
    responsible: "Алексей Смирнов",
  },
  {
    status: "suspend",
    name: "Проект 'Космическая Одиссея'",
    dates: "20.02.2023/10.05.2023",
    responsible: "Елена Кузнецова",
  },
  {
    status: "ready",
    name: "Проект 'Умный Город'",
    dates: "15.07.2024/30.09.2024",
    responsible: "Дмитрий Иванов",
  },
  {
    status: "inProgress",
    name: "Проект 'Экологическое Будущее'",
    dates: "01.04.2023/01.04.2025",
    responsible: "Мария Сидорова",
  },
  {
    status: "suspend",
    name: "Проект 'Технологии Будущего'",
    dates: "10.11.2023/15.12.2023",
    responsible: "Олег Николаев",
  },
  {
    status: "ready",
    name: "Проект 'Цифровая Трансформация'",
    dates: "01.01.2025/31.12.2025",
    responsible: "Анна Васильева",
  },
  {
    status: "inProgress",
    name: "Проект 'Инновации в Образовании'",
    dates: "20.08.2023/20.08.2024",
    responsible: "Сергей Федоров",
  },
  {
    status: "suspend",
    name: "Проект 'Разработка ИИ'",
    dates: "15.10.2023/15.11.2023",
    responsible: "Николай Петров",
  },
  {
    status: "ready",
    name: "Проект 'Медицинские Технологии'",
    dates: "01.05.2024/30.06.2024",
    responsible: "Татьяна Лебедева",
  },
  {
    status: "inProgress",
    name: "Проект 'Спорт и Здоровье'",
    dates: "01.02.2024/01.02.2025",
    responsible: "Андрей Ковалев",
  },
];
