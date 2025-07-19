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
    id: 'panorama-semiarido',
    alignment: 'left',
    hidden: false,
    image: './img/foto_semiarido_harmonize/foto_1_mapa.jpg',
    caption: 'Vista urbana de Mãe d’Água, circundada pela Serra do Teixeira',
    description: 'A paisagem do sertão paraibano é marcada pela aridez, chuvas irregulares e contrastes entre áreas urbanas e rurais.',
    location: {
      center: [-38.0871078, -6.9275904], // Mãe d’Água, PB
      zoom: 6.75,
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
    id: 'riscos-patos',
    alignment: 'right',
    hidden: false,
    image: './img/foto_semiarido_harmonize/foto_2_mapa.jpg',
    caption: 'Lixo acumulado nas ruas do bairro 7 casas, em Patos.',
    description: 'Em bairros periféricos de Patos, esgoto a céu aberto, lixo e animais soltos criam condições para a proliferação de vetores.',
    location: {
      center: [-37.27705918159874, -7.028104647025206], // Patos, PB
      zoom: 15,
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
    id: 'abastecimento-maedagua',
    alignment: 'right',
    hidden: false,
    image: './img/foto_semiarido_harmonize/foto_3_mapa.jpg',
    caption: 'Cisterna sem tampa usada para armazenar água de carro-pipa no Sítio Covão, localizado em região rural do município de Mãe d’água.',
    description: 'Sem abastecimento da companhia estadual, Mãe d’Água depende de poços e carros-pipa, o que gera riscos de contaminação.',
    location: {
      center: [-37.427422283094515, -7.255175747086354], // Mãe d’Água, PB
      zoom: 15,
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
    id: 'criadores-periurbanos',
    alignment: 'fully',
    hidden: false,
    image: './img/foto_semiarido_harmonize/foto_4_mapa.jpg',
    caption: 'Cruz da Menina, bairro residencial localizado na região periférica do município de Patos.',
    description: 'Em bairros como Cruz da Menina e Jardim Magnólia, chiqueiros, galinheiros e o descarte de resíduos a céu aberto favorecem a presença de vetores como flebotomíneos e triatomíneos.',
    location: {
      center: [-37.27705918159874, -7.028104647025206], // Patos, PB
      zoom: 15,
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
    id: 'zona-rural-trincheiras',
    alignment: 'right',
    hidden: false,
    image: './img/foto_semiarido_harmonize/foto_5_mapa.jpg',
    caption: 'Área rural de Trincheiras com acúmulo de lixo e recipientes com larvas de mosquito.',
    description: 'Em Trincheiras, zona rural de Patos, foram identificados pontos com queima de lixo, recipientes com larvas de mosquito e presença de triatomíneos próximos às casas.',
    location: {
      center: [-37.27705918159874, -7.028104647025206], // Patos, PB
      zoom: 15,
      pitch: 0.00,
      bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
  }
  // fim dos capítulos
  ]
};
