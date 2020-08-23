let initialState = {
  helpQA: [
    {
      id: 1,
      questionTitle: "What is Adobe Flash Player?",
      answer:
        "Adobe Flash Player – это специальное приложение, которое позволяет смотреть видео, слушать музыку и совершать звонки на веб-сайтах.",
    },
    {
      id: 2,
      questionTitle: "What is like?",
      answer:
        "Лайк (с англ. to like — «нравиться») — популярный в Интернете способ показать свое одобрение какой-либо записи, фотографии, статьи, видеоролика или же любого другого материала. Вам не придется ничего писать, достаточно будет лишь кликнуть на специальную иконку под приглянувшемся вам контентом, на которой чаще всего рисуют сердечко или же большой палец вверх. Рядом с иконкой обычно находится цифра, которая отображает общее количество собранных лайков.",
    },
    {
      id: 3,
      questionTitle: "What is repost?",
      answer:
        "Репост — возможность поделиться чужой публикацией на своей странице в социальной сети, оставляя её в первоначальном виде с сохранением ссылки на первоисточник. Репост, или перепост, как ещё называют этот приём, присутствует практически во всех социальных сетях, являясь одним из основных способов обмена информацией.",
    },
    {
      id: 4,
      questionTitle: "What is social network?",
      answer:
        "Социальная сеть — онлайн-платформа, которую люди используют для общения, знакомств, создания социальных отношений с другими людьми, которые имеют схожие интересы или офлайн-связи, также развлечения и работы.",
    },
    {
      id: 5,
      questionTitle: "What is Facebook?",
      answer:
        "Facebook — крупнейшая социальная сеть в мире и одноимённая компания, владеющая ею. Была основана 4 февраля 2004 года Марком Цукербергом и его соседями по комнате во время обучения в Гарвардском университете — Эдуардо Саверином, Дастином Московицем и Крисом Хьюзом.",
    },
    {
      id: 6,
      questionTitle: "What is Twitter?",
      answer:
        "«Тви́ттер» — социальная сеть для публичного обмена сообщениями при помощи веб-интерфейса, SMS, средств мгновенного обмена сообщениями или сторонних программ-клиентов для пользователей интернета любого возраста. Публикация коротких заметок в формате блога получила название «микроблогинг»",
    },
    {
      id: 7,
      questionTitle: "What is SEO?",
      answer:
        "Поиско́вая оптимиза́ция — комплекс мер по внутренней и внешней оптимизации для поднятия позиций сайта в результатах выдачи поисковых систем по определённым запросам пользователей, с целью увеличения сетевого трафика и потенциальных клиентов и последующей монетизации этого трафика.",
    },
  ],
  contacts: [
    {
      id: 1,
      name: "Ivan Popov",
      status: "Director",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description: "For all questions",
    },
    {
      id: 2,
      name: "Ivan Popov",
      status: "IT-specialist",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description: "For IT questions",
    },
    {
      id: 3,
      name: "Ivan Popov",
      status: "top manager",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description: "Manage not managed, can sell a handle",
    },
    {
      id: 4,
      name: "Ivan Popov",
      status: "React prog",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description: "For questions about React",
    },
    {
      id: 5,
      name: "Ivan Popov",
      status: "HR",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description:
        "It will be cool if you don't ask a question about the future in 5 years",
    },
  ],
};

const helpReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default helpReducer;
