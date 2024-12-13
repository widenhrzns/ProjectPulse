"use strict";

const page = {
  mobileMenu: document.querySelector(".menu__wrapper"),
  table: document.querySelector(".projects__table"),
  workersSearch: document.querySelector(".search"),
  workersCards: document.querySelector(".workers__cards"),
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
    status: "inProgress",
    name: "Проект 'Восход'",
    dates: "10.01.2023/10.01.2025",
    responsible: "Алексей Смирнов",
  },
  {
    status: "ready",
    name: "Innovation Hub",
    dates: "15.05.2024/15.06.2024",
    responsible: "Мария Петрова",
  },
  {
    status: "suspend",
    name: "Проект 'Свет'",
    dates: "20.02.2023/20.03.2024",
    responsible: "Иванов И.И.",
  },
  {
    status: "inProgress",
    name: "Digital Transformation",
    dates: "01.03.2022/01.03.2025",
    responsible: "Елена Кузнецова",
  },
  {
    status: "ready",
    name: "Проект 'Феникс'",
    dates: "30.04.2024/30.05.2024",
    responsible: "Дмитрий Соловьев",
  },
  {
    status: "suspend",
    name: "Eco Initiative",
    dates: "01.06.2023/01.07.2024",
    responsible: "Светлана Романова",
  },
  {
    status: "inProgress",
    name: "Проект 'Гармония'",
    dates: "12.08.2022/12.08.2025",
    responsible: "Андрей Васильев",
  },
  {
    status: "ready",
    name: "Smart Solutions",
    dates: "10.09.2024/10.10.2024",
    responsible: "Наталья Федорова",
  },
  {
    status: "suspend",
    name: "Проект 'Космос'",
    dates: "15.11.2023/15.11.2024",
    responsible: "Петр Николаев",
  },
  {
    status: "inProgress",
    name: "AI Research Project",
    dates: "20.01.2023/20.01.2026",
    responsible: "Ольга Лебедева",
  },
  {
    status: "ready",
    name: "Проект 'Технологии'",
    dates: "25.12.2024/25.01.2025",
    responsible: "Станислав Григорьев",
  },
  {
    status: "suspend",
    name: "Healthcare Innovations",
    dates: "05.03.2023/05.04.2024",
    responsible: "Ирина Михайлова",
  },
  {
    status: "inProgress",
    name: "Проект 'Надежда'",
    dates: "30.07.2022/30.07.2025",
    responsible: "Максим Ковалев",
  },
  {
    status: "ready",
    name: "Project Synergy",
    dates: "01.02.2024/01.03.2024",
    responsible: "Анастасия Сергеева",
  },
  {
    status: "suspend",
    name: "Проект 'Альфа'",
    dates: "15.06.2023/15.06.2024",
    responsible: "Роман Сидоров",
  },
  {
    status: "inProgress",
    name: "Проект 'Энергия'",
    dates: "01.01.2023/01.01.2026",
    responsible: "Виктория Иванова",
  },
  {
    status: "ready",
    name: "Urban Development",
    dates: "10.04.2024/10.05.2024",
    responsible: "Артем Фролов",
  },
  {
    status: "suspend",
    name: "Проект 'Мир'",
    dates: "20.05.2023/20.06.2024",
    responsible: "Сергей Кузьмин",
  },
  {
    status: "inProgress",
    name: "Blockchain Initiative",
    dates: "15.07.2022/15.07.2025",
    responsible: "Лариса Синицина",
  },
  {
    status: "ready",
    name: "Проект 'Прогресс'",
    dates: "05.11.2024/05.12.2024",
    responsible: "Константин Петров",
  },
  {
    status: "suspend",
    name: "Sustainability Project",
    dates: "01.02.2023/01.03.2024",
    responsible: "Екатерина Михайлова",
  },
  {
    status: "inProgress",
    name: "Проект 'Будущее'",
    dates: "12.09.2022/12.09.2025",
    responsible: "Александр Тимофеев",
  },
  {
    status: "ready",
    name: "Smart City Project",
    dates: "20.03.2024/20.04.2024",
    responsible: "Марина Зайцева",
  },
  {
    status: "suspend",
    name: "Проект 'Светлое будущее'",
    dates: "15.08.2023/15.08.2024",
    responsible: "Денис Орлов",
  },
  {
    status: "inProgress",
    name: "Data Analytics Project",
    dates: "25.01.2023/25.01.2026",
    responsible: "Татьяна Соколова",
  },
  {
    status: "ready",
    name: "Проект 'Культура'",
    dates: "30.10.2024/30.11.2024",
    responsible: "Николай Громов",
  },
  {
    status: "suspend",
    name: "Digital Marketing Strategy",
    dates: "10.12.2023/10.12.2024",
    responsible: "Оксана Литвинова",
  },
  {
    status: "inProgress",
    name: "Проект 'Открытие'",
    dates: "18.02.2022/18.02.2025",
    responsible: "Григорий Васильев",
  },
  {
    status: "ready",
    name: "Healthcare Reform Project",
    dates: "01.09.2024/01.10.2024",
    responsible: "Евгения Коваленко",
  },
  {
    status: "suspend",
    name: "Проект 'Знание'",
    dates: "22.06.2023/22.06.2024",
    responsible: "Владимир Яковлев",
  },
];

const workers = [
  {
    id: 1,
    status: 1,
    name: "Тайлер Дерден",
    description:
      "Уважаемая команда, я готов внести свой опыт и идеи в реализацию проекта. Уверен, что смогу принести значительную пользу. Спасибо!",
    price: "1000$",
  },
  {
    id: 2,
    status: 1,
    name: "Анна Смирнова",
    description:
      "Я обладаю обширными знаниями в области управления проектами и смогу эффективно организовать команду для достижения целей.",
    price: "1200$",
  },
  {
    id: 3,
    status: 0,
    name: "Иван Петрович",
    description:
      "Мой опыт работы в IT-сфере позволяет мне находить нестандартные решения и справляться с любыми вызовами.",
    price: "900$",
  },
  {
    id: 4,
    status: 1,
    name: "Елена Иванова",
    description:
      "Я отлично разбираюсь в маркетинге и могу помочь продвигать наш проект на рынке, используя современные методы.",
    price: "1100$",
  },
  {
    id: 5,
    status: 1,
    name: "Сергей Ковалев",
    description:
      "С моими навыками в разработке программного обеспечения, я смогу внести значительный вклад в успешное завершение проекта.",
    price: "1300$",
  },
  {
    id: 6,
    status: 1,
    name: "Мария Сидорова",
    description:
      "Я специалист по UX/UI дизайну, и моя цель — создать интуитивно понятные интерфейсы для пользователей.",
    price: "950$",
  },
  {
    id: 7,
    status: 1,
    name: "Дмитрий Васильев",
    description:
      "Имею опыт в аналитике данных и смогу помочь в принятии обоснованных решений на основе анализа.",
    price: "1150$",
  },
  {
    id: 8,
    status: 0,
    name: "Ольга Федорова",
    description:
      "Мой опыт в сфере продаж позволит увеличить клиентскую базу и повысить доходы компании.",
    price: "1050$",
  },
  {
    id: 9,
    status: 1,
    name: "Алексей Громов",
    description:
      "Я обладаю навыками в сфере веб-разработки и готов разрабатывать высококачественные сайты.",
    price: "1250$",
  },
  {
    id: 10,
    status: 1,
    name: "Наталья Кузнецова",
    description:
      "Я сертифицированный проектный менеджер с опытом работы в международных командах.",
    price: "1400$",
  },
  {
    id: 11,
    status: 1,
    name: "Игорь Соловьев",
    description:
      "Специализируюсь на кибербезопасности и могу обеспечить защиту данных нашей компании.",
    price: "1600$",
  },
  {
    id: 12,
    status: 0,
    name: "Татьяна Лебедева",
    description:
      "Я опытный копирайтер, умею создавать тексты, которые привлекают и удерживают внимание клиентов.",
    price: "800$",
  },
  {
    id: 13,
    status: 1,
    name: "Светлана Петрова",
    description:
      "Мой опыт в HR поможет нам создать сильную команду и поддерживать корпоративную культуру.",
    price: "1100$",
  },
  {
    id: 14,
    status: 1,
    name: "Владимир Романов",
    description:
      "Специализируюсь на SEO-оптимизации и смогу повысить видимость нашего сайта в поисковых системах.",
    price: "900$",
  },
  {
    id: 15,
    status: 1,
    name: "Кристина Сергеева",
    description:
      "Я обладаю навыками в области видеомонтажа и могу создать качественный контент для продвижения.",
    price: "1300$",
  },
  {
    id: 16,
    status: 1,
    name: "Роман Тихонов",
    description:
      "Мой опыт в финансовом анализе поможет оптимизировать бюджет и улучшить финансовые показатели.",
    price: "1500$",
  },
  {
    id: 17,
    status: 1,
    name: "Евгений Ковалев",
    description:
      "Я профессиональный фотограф и готов создать визуальный контент для нашей компании.",
    price: "700$",
  },
  {
    id: 18,
    status: 0,
    name: "Людмила Захарова",
    description:
      "Мой опыт в организации мероприятий позволит провести успешные корпоративные события.",
    price: "1200$",
  },
  {
    id: 19,
    status: 1,
    name: "Артем Лисицын",
    description:
      "Я разработчик мобильных приложений и готов создать уникальные решения для пользователей.",
    price: "1350$",
  },
  {
    id: 20,
    status: 1,
    name: "Екатерина Михайлова",
    description:
      "Специализируюсь на контент-маркетинге и могу помочь в создании стратегий для привлечения клиентов.",
    price: "1250$",
  },
];
