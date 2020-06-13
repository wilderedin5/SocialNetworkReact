let initialState = {
    helpQA: [
        {id: 1, questionTitle: "Что такое Adobe Flash Player?", answer: "Adobe Flash Player – это специальное приложение, которое позволяет смотреть видео, слушать музыку и совершать звонки на веб-сайтах."},
        {id: 2, questionTitle: "Что такое лайк?", answer: "Лайк (с англ. to like — «нравиться») — популярный в Интернете способ показать свое одобрение какой-либо записи, фотографии, статьи, видеоролика или же любого другого материала. Вам не придется ничего писать, достаточно будет лишь кликнуть на специальную иконку под приглянувшемся вам контентом, на которой чаще всего рисуют сердечко или же большой палец вверх. Рядом с иконкой обычно находится цифра, которая отображает общее количество собранных лайков."},
        {id: 3, questionTitle: "Что такое репост?", answer: "Репост — возможность поделиться чужой публикацией на своей странице в социальной сети, оставляя её в первоначальном виде с сохранением ссылки на первоисточник. Репост, или перепост, как ещё называют этот приём, присутствует практически во всех социальных сетях, являясь одним из основных способов обмена информацией."},
        {id: 4, questionTitle: "Что такое социальная сеть?", answer: "Социальная сеть — онлайн-платформа, которую люди используют для общения, знакомств, создания социальных отношений с другими людьми, которые имеют схожие интересы или офлайн-связи, также развлечения и работы."},
        {id: 5, questionTitle: "Что такое Facebook?", answer: "Facebook — крупнейшая социальная сеть в мире и одноимённая компания, владеющая ею. Была основана 4 февраля 2004 года Марком Цукербергом и его соседями по комнате во время обучения в Гарвардском университете — Эдуардо Саверином, Дастином Московицем и Крисом Хьюзом."},
        {id: 6, questionTitle: "Что такое Twitter?", answer: "«Тви́ттер» — социальная сеть для публичного обмена сообщениями при помощи веб-интерфейса, SMS, средств мгновенного обмена сообщениями или сторонних программ-клиентов для пользователей интернета любого возраста. Публикация коротких заметок в формате блога получила название «микроблогинг»"},
        {id: 7, questionTitle: "Что такое SEO?", answer: "Поиско́вая оптимиза́ция — комплекс мер по внутренней и внешней оптимизации для поднятия позиций сайта в результатах выдачи поисковых систем по определённым запросам пользователей, с целью увеличения сетевого трафика и потенциальных клиентов и последующей монетизации этого трафика."}
    ],
    contacts: [
        {id: 1, name: "Ivan Popov" ,status: "Директор", phone: "89307041240", email: "wildnefalem5@gmail.com", description: "По всем вопросам"},
        {id: 2, name: "Ivan Popov" ,status: "ИТ Специалист", phone: "89307041240", email: "wildnefalem5@gmail.com", description: "Что то там по айти"},
        {id: 3, name: "Ivan Popov" ,status: "Топ менеджер", phone: "89307041240", email: "wildnefalem5@gmail.com", description: "Менеджерить не менеджируемое, может впарить ручку"},
        {id: 4, name: "Ivan Popov" ,status: "React prog", phone: "89307041240", email: "wildnefalem5@gmail.com", description: "По вопросам около React'a"},
        {id: 5, name: "Ivan Popov" ,status: "HR", phone: "89307041240", email: "wildnefalem5@gmail.com", description: "Будет круто если не задаст вопрос про будущее через 5 лет"}
    ]
}

const helpReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default helpReducer;