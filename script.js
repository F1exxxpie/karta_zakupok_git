
ymaps.ready(init);

function init() {
    let map = new ymaps.Map('yandex-map', {
        center: [55.713533, 37.815456],
        zoom: 15
    });


    map.geoObjects
        .add(new ymaps.Placemark([55.713533, 37.815456], {
            balloonContent: 'Здесь <strong>создаются крутые проекты</strong>',
            iconCaption: 'ГУУ'
        }, {
            iconColor: '#EA0009'
        }))



}