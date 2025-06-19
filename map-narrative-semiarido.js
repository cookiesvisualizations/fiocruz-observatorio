var config = {
    style: 'mapbox://styles/juditecypreste/cm7qwikyy01kk01qv2r400pmh',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoianVkaXRlY3lwcmVzdGUiLCJhIjoiY203cXYzbXdlMHpydzJqb2g3N2ZpZW9xZCJ9.fmOXRUXRtfi87gZmz4FjlQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'black'
    },
    insetPosition: 'top-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'baixo-tocantins',
            alignment: 'left',
            hidden: false,
            image: './img/foto_amazonia_harmonize/foto_1_mapa.jpg',
            description: 'A paisagem do Baixo Tocantins é marcada pela interação constante entre o rio e o cotidiano de seus habitantes.',
            location: {
                center: [-49.50697, -2.57502]                ,
                zoom: 6.75,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mocajuba',
            alignment: 'right',
            hidden: false,
            image: './img/foto_amazonia_harmonize/foto_2_mapa.jpg',
            description: 'Em Mocajuba, moradores relatam dificuldades de abastecimento de água limpa e segura para consumo, apesar de estarem tão próximos ao rio.',
            location: {
                center: [-49.47754, -2.55003],
                zoom: 10.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cameta',
            alignment: 'right',
            hidden: false,
            image: './img/foto_amazonia_harmonize/foto_3_mapa.jpg',
            description: 'Já em Cametá, o aumento das temperaturas e a irregularidade das chuvas afetam diretamente a produção agrícola da região.',
            location: {
                center: [-49.51021, -2.28107],
                zoom: 10.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'saneamento',
            alignment: 'fully',
            hidden: false,
            image: './img/foto_amazonia_harmonize/foto_4_mapa.jpg',
            description: 'Além disso, questões de saneamento precário são evidentes: lixo acumulado, esgoto a céu aberto e a falta de acesso à água potável. Esses problemas criam um ambiente propício para a proliferação de doenças infecciosas, incluindo aquelas transmitidas por vetores, como a dengue e malária.',
            location: {
                center: [-49.56344, -2.44984],
                zoom: 8.42,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'saneamento-2',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: 'A expansão de áreas agrícolas e o desmatamento para pastagens modificam ecossistemas e aproximam insetos transmissores de doenças de áreas habitadas.',
            location: {
                center: [-49.56344, -2.44984],
                zoom: 8.42,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mocajuba-2',
            alignment: 'right',
            hidden: false,
            image: './assets/geneva.jpg',
            description: 'A expansão de áreas agrícolas e o desmatamento para pastagens modificam ecossistemas e aproximam insetos transmissores de doenças de áreas habitadas.',
            location: {
                center: [-49.47754, -2.55003],
                zoom: 10.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cameta-2',
            alignment: 'right',
            hidden: false,
            image: './assets/buenos-aires.jpg',
            description: 'Também foram identificados casos da Doença de Chagas oral em Cametá.',
            location: {
                center: [-49.51021, -2.28107],
                zoom: 10.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};