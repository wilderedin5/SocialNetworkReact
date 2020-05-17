let initialState = {
    advertising: [
        { id: 1, title: "Реклама World of Warcraft: Shadowlands", text: "World of Warcraft: Shadowlands — восьмое дополнение к компьютерной игре World of Warcraft, анонсированное 1 ноября 2019 года на BlizzCon и готовящееся к выходу в 2020 году. Действия сюжета Shadowlands происходят в Тёмных землях, куда попадают души мертвецов", image: "https://i.ytimg.com/vi/5bYZyjHhrtU/maxresdefault.jpg" },
        { id: 2, title: "Реклама ryzen", text: "Ryzen (/ˈraɪzən/, рус. ра́йзен)[3] — торговая марка[4] микропроцессоров транснациональной корпорации AMD второй половины 2010-х годов. Данное семейство процессоров относится к архитектуре x86_64, применяется в настольных, мобильных и встроенных вычислительных системах и на данный момент использует процессорные микроархитектуры Zen, Zen+ и Zen 2.", image: "https://www.ixbt.com/img/n1/news/2020/4/4/434234_large.jpg" },
        { id: 3, title: "Реклама intel", text: "«И́нтел» — транснациональная корпорация, производитель электронных устройств и компьютерных компонентов, включая полноцикловое производство микропроцессоров и наборов системной логики. Штаб-квартира расположена в Санта-Кларе, штат Калифорния, США", image: "https://hsto.org/getpro/habr/post_images/5ba/fd7/ada/5bafd7ada71e48b1567c19e6b3770d15.jpg" }
    ]
}

const advertsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default advertsReducer;