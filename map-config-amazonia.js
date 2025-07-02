 var initLoad = true;
            var layerTypes = {
                'fill': ['fill-opacity'],
                'line': ['line-opacity'],
                'circle': ['circle-opacity', 'circle-stroke-opacity'],
                'symbol': ['icon-opacity', 'text-opacity'],
                'raster': ['raster-opacity'],
                'fill-extrusion': ['fill-extrusion-opacity'],
                'heatmap': ['heatmap-opacity']
            }
    
            var alignments = {
                'left': 'lefty',
                'center': 'centered',
                'right': 'righty',
                'full': 'fully'
            }
    
            function getLayerPaintType(layer) {
                var layerType = map.getLayer(layer).type;
                return layerTypes[layerType];
            }
    
            function setLayerOpacity(layer) {
                var paintProps = getLayerPaintType(layer.layer);
                paintProps.forEach(function (prop) {
                    var options = {};
                    if (layer.duration) {
                        var transitionProp = prop + "-transition";
                        options = { "duration": layer.duration };
                        map.setPaintProperty(layer.layer, transitionProp, options);
                    }
                    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
                });
            }
    
            var story = document.getElementById('story');
            var features = document.createElement('div');
            features.setAttribute('id', 'features');
    
            var header = document.createElement('div');
    
            if (config.title) {
                var titleText = document.createElement('h1');
                titleText.innerText = config.title;
                header.appendChild(titleText);
            }
    
            if (config.subtitle) {
                var subtitleText = document.createElement('h2');
                subtitleText.innerText = config.subtitle;
                header.appendChild(subtitleText);
            }
    
            if (config.byline) {
                var bylineText = document.createElement('p');
                bylineText.innerText = config.byline;
                header.appendChild(bylineText);
            }
    
            if (header.innerText.length > 0) {
                header.classList.add(config.theme);
                header.setAttribute('id', 'header');
                story.appendChild(header);
            }
    
            config.chapters.forEach((record, idx) => {
                var container = document.createElement('div');
                var chapter = document.createElement('div');
    
                if (record.title) {
                    var title = document.createElement('h3');
                    title.innerText = record.title;
                    chapter.appendChild(title);
                }
    
                if (record.image) {
                    var image = new Image();
                    image.src = record.image;
                    chapter.appendChild(image);

                    if (record.caption) {
                        var caption = document.createElement('p');
                        caption.className = 'image-map-caption';
                        caption.innerText = record.caption;
                        chapter.appendChild(caption);
                    }
                }
    
                if (record.description) {
                    var story = document.createElement('p');
                    story.innerHTML = record.description;
                    chapter.appendChild(story);
                }
    
                container.setAttribute('id', record.id);
                container.classList.add('step');
                if (idx === 0) {
                    container.classList.add('active');
                }
    
                chapter.classList.add(config.theme);
                container.appendChild(chapter);
                container.classList.add(alignments[record.alignment] || 'centered');
                if (record.hidden) {
                    container.classList.add('hidden');
                }
                features.appendChild(container);
            });
    
            story.appendChild(features);
    
            var footer = document.createElement('div');
    
            if (config.footer) {
                var footerText = document.createElement('p');
                footerText.innerHTML = config.footer;
                footer.appendChild(footerText);
            }
    
            if (footer.innerText.length > 0) {
                footer.classList.add(config.theme);
                footer.setAttribute('id', 'footer');
                story.appendChild(footer);
            }
    
            mapboxgl.accessToken = config.accessToken;
    
            var map = new mapboxgl.Map({
                container: 'map',
                style: config.style,
                center: config.chapters[0].location.center,
                zoom: config.chapters[0].location.zoom,
                bearing: config.chapters[0].location.bearing,
                pitch: config.chapters[0].location.pitch,
                interactive: false,
                projection: config.projection
            });
    
            // Create a inset map if enabled in config.js
            if (config.inset) {
                // Criar um elemento div para o mapa miniatura
                const minimapContainer = document.createElement('div');
                minimapContainer.className = 'brasil-minimap-container';
                minimapContainer.style.position = 'absolute';
                minimapContainer.style.width = config.insetOptions?.width || '120px';
                minimapContainer.style.height = config.insetOptions?.height || '150px';
                minimapContainer.style.backgroundColor = 'transparent';
                minimapContainer.style.padding = '0';
                minimapContainer.style.border = 'none';
                minimapContainer.style.overflow = 'hidden';
                
                // Posicionar o container conforme configuração
                switch (config.insetPosition || 'top-right') {
                    case 'top-left':
                        minimapContainer.style.top = '10px';
                        minimapContainer.style.left = '10px';
                        break;
                    case 'top-right':
                        minimapContainer.style.top = '10px';
                        minimapContainer.style.right = '10px';
                        break;
                    case 'bottom-left':
                        minimapContainer.style.bottom = '10px';
                        minimapContainer.style.left = '10px';
                        break;
                    case 'bottom-right':
                        minimapContainer.style.bottom = '10px';
                        minimapContainer.style.right = '10px';
                        break;
                }
                
                // Criar a imagem do Brasil
                const brasilImage = document.createElement('img');
                brasilImage.src = config.insetOptions?.imageSrc || 'img/brazil.png';
                brasilImage.style.width = '100%';
                brasilImage.style.height = '100%';
                brasilImage.style.objectFit = 'contain';
                
 
                // Criar texto "Brasil"
 
                const brasilText = document.createElement('div');
                brasilText.textContent = 'BRASIL';
                brasilText.style.position = 'absolute';
                brasilText.style.top = '49%';
                brasilText.style.left = '55%';
                brasilText.style.transform = 'translate(-50%, -50%)';
                brasilText.style.color = config.insetOptions?.textColor || 'black';
                brasilText.style.fontSize = config.insetOptions?.textSize || '10px';
                brasilText.style.fontWeight = 'semi-bold';
                brasilText.style.textShadow = '1px 1px 2px white'; // Para melhor legibilidade
                brasilText.style.pointerEvents = 'none'; // Para não interferir com outros elementos

                // Criar um wrapper para o marcador que vai servir como área de conteúdo do mapa
                const markerArea = document.createElement('div');
                markerArea.style.position = 'absolute';
                markerArea.style.top = '0';
                markerArea.style.left = '0';
                markerArea.style.width = '100%';
                markerArea.style.height = '100%';
                markerArea.style.pointerEvents = 'none';
                
                // Criar um div para o marcador
                const marker = document.createElement('div');
                marker.className = 'brasil-minimap-marker';
                marker.style.position = 'absolute';
                marker.style.width = '8px';  // Largura do quadrado
                marker.style.height = '8px'; // Altura do quadrado
                marker.style.backgroundColor = 'black';
                marker.style.borderRadius = '0%';  // Remove o arredondamento (tornando um quadrado)                
                marker.style.transform = 'translate(-50%, -50%)';
                marker.style.pointerEvents = 'none';
                
                // Adicionar elementos ao DOM
                minimapContainer.appendChild(brasilImage);
                markerArea.appendChild(marker);
                minimapContainer.appendChild(markerArea);
                map.getContainer().appendChild(minimapContainer)
                minimapContainer.appendChild(brasilText);
                
                // Obter a posição inicial (primeira tela)
                const initialCenter = map.getCenter();
                
                // Função para definir o marcador na posição inicial
                const setInitialMarkerPosition = () => {
                    // Ajuste os limites para corresponder melhor ao formato da imagem do Brasil
                    // Os valores são em porcentagem da imagem, não coordenadas geográficas
                    const padding = config.insetOptions?.padding || 10; // Porcentagem de padding da borda
                    
                    // Limites geográficos do Brasil
                    const brBounds = {
                        west: -73.99, // Longitude mais à oeste
                        east: -34.8,  // Longitude mais à leste
                        north: 5.27,  // Latitude mais ao norte
                        south: -33.75 // Latitude mais ao sul
                    };
                    
                    // Calcular posição relativa dentro da área da imagem
                    let x = ((initialCenter.lng - brBounds.west) / (brBounds.east - brBounds.west)) * (100 - 2 * padding) + padding;
                    let y = ((brBounds.north - initialCenter.lat) / (brBounds.north - brBounds.south)) * (100 - 2 * padding) + padding;
                    
                    // Limitar as coordenadas para dentro da área útil da imagem
                    x = Math.min(Math.max(x, padding), 100 - padding);
                    y = Math.min(Math.max(y, padding), 100 - padding);
                    
                    // Aplicar um fator de correção para alinhar com a imagem real
                    // Você pode precisar ajustar estes valores com base em testes
                    const offsetX = config.insetOptions?.offsetX || -8; // Ajuste horizontal em porcentagem
                    const offsetY = config.insetOptions?.offsetY || 7; // Ajuste vertical em porcentagem
                    
                    // Posicionar o marcador
                    marker.style.left = `${x + offsetX}%`;
                    marker.style.top = `${y + offsetY}%`;
                };
                
      // Configurar o marcador para mostrar a posição da primeira tela
    brasilImage.onload = setInitialMarkerPosition;
    setInitialMarkerPosition();

}
            if (config.showMarkers) {
                var marker = new mapboxgl.Marker({ color: 'black' });
                marker.setLngLat(config.chapters[0].location.center).addTo(map);
            }
    
            // instantiate the scrollama
            var scroller = scrollama();
    
    
            map.on("load", function () {
                if (config.use3dTerrain) {
                    map.addSource('mapbox-dem', {
                        'type': 'raster-dem',
                        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                        'tileSize': 512,
                        'maxzoom': 14
                    });
                    // add the DEM source as a terrain layer with exaggerated height
                    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    
                    // add a sky layer that will show when the map is highly pitched
                    map.addLayer({
                        'id': 'sky',
                        'type': 'sky',
                        'paint': {
                            'sky-type': 'atmosphere',
                            'sky-atmosphere-sun': [0.0, 0.0],
                            'sky-atmosphere-sun-intensity': 15
                        }
                    });
                };
    
                // setup the instance, pass callback functions
                scroller
                    .setup({
                        step: '.step',
                        offset: 0.5,
                        progress: true
                    })
                    .onStepEnter(async response => {
                        var current_chapter = config.chapters.findIndex(chap => chap.id === response.element.id);
                        var chapter = config.chapters[current_chapter];
    
                        response.element.classList.add('active');
                        map[chapter.mapAnimation || 'flyTo'](chapter.location);
    
                        if (config.showMarkers) {
                            marker.setLngLat(chapter.location.center);
                        }
                        if (chapter.onChapterEnter.length > 0) {
                            chapter.onChapterEnter.forEach(setLayerOpacity);
                        }
                        if (chapter.callback) {
                            window[chapter.callback]();
                        }
                        if (chapter.rotateAnimation) {
                            map.once('moveend', () => {
                                const rotateNumber = map.getBearing();
                                map.rotateTo(rotateNumber + 180, {
                                    duration: 30000, easing: function (t) {
                                        return t;
                                    }
                                });
                            });
                        }
                        if (config.auto) {
                            var next_chapter = (current_chapter + 1) % config.chapters.length;
                            map.once('moveend', () => {
                                document.querySelectorAll('[data-scrollama-index="' + next_chapter.toString() + '"]')[0].scrollIntoView();
                            });
                        }
                    })
                    .onStepExit(response => {
                        var chapter = config.chapters.find(chap => chap.id === response.element.id);
                        response.element.classList.remove('active');
                        if (chapter.onChapterExit.length > 0) {
                            chapter.onChapterExit.forEach(setLayerOpacity);
                        }
                    });
    
    
                if (config.auto) {
                    document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
                }
            });  
            

            map.on('load', () => {
                map.addSource('cidades', {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-49.5056, -2.2444]
                                },
                                properties: {
                                    name: 'Cametá',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-49.5025507, -2.5795646]
                                },
                                properties: {
                                    name: 'Mocajuba',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-48.612019, -1.3413464]
                                },
                                properties: {
                                    name: 'Belém',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-51.2601441, 0.1015795]
                                },
                                properties: {
                                    name: 'Macapá',
                                    state: 'Amapá'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-48.4282678, -1.3598227]
                                },
                                properties: {
                                    name: 'Ananindeua',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-49.1422943, -5.3375369]
                                },
                                properties: {
                                    name: 'Marabá',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-47.4895861, -0.7083102]
                                },
                                properties: {
                                    name: 'Barcarena',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-48.7999786, -1.1963762]
                                },
                                properties: {
                                    name: 'Castanhal',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-50.9326482, -1.7437195]
                                },
                                properties: {
                                    name: 'Breves',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-50.1489642, -1.1954854]
                                },
                                properties: {
                                    name: 'Soure',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-47.7403933, -2.4204827]
                                },
                                properties: {
                                    name: 'Tucuruí',
                                    state: 'Pará'
                                }
                            },
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [-51.1820912, -3.7849726]
                                },
                                properties: {
                                    name: 'Parauapebas',
                                    state: 'Pará'
                                }
                            }
                        ]
                    }
                });            
            
            
                // Adicionar camada de texto
                map.addLayer({
                    'id': 'cidades-label',
                    'type': 'symbol',
                    'source': 'cidades',
                    'layout': {
                        'text-field': ['get', 'name'],
                        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                        'text-size': 14,
                        'text-offset': [0, 1.5],
                        'text-anchor': 'top'
                    },
                    'paint': {
                        'text-color': '#FFFFFF', // Cor do texto totalmente branca
                        'text-halo-width': 0 // Removendo qualquer borda/halo
                    }
                });
            });
    
      // Configurar o scroll para tela cheia
        
            window.addEventListener('scroll', function() {
    
                const mapContainer = document.querySelector('.map-container');
    
                const story = document.getElementById('story');
    
    
                // A posição do scroll
    
                const scrollPosition = window.scrollY;
    
    
                // Verificar se a altura da página foi completamente rolada (100% da altura da tela)
    
                if (scrollPosition >= window.innerHeight) {
    
                    // Ativar o scroll no conteúdo
    
                    story.style.overflowY = 'scroll'; // Ativa o scroll
    
                } else {
    
                    // Desabilitar o scroll enquanto o mapa ocupa a tela inteira
    
                    story.style.overflowY = 'hidden'; // Desativa o scroll
    }
});    
    