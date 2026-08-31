// Mobile Navigation Toggle
(() => {
    const mapSvg = document.querySelector('.russia-map');
    let mapRenderInProgress = false;

    const projectLocations = [
        { name: 'ЛУКОЙЛ-Нижегороднефтеоргсинтез', place: 'Кстово, Нижегородская область', coordinates: [44.63, 56.15] },
        { name: 'ГМК «Удокан»', place: 'Новая Чара, Забайкальский край', coordinates: [117.55, 56.78], climate: 'cold' },
        { name: 'ЛУКОЙЛ-УНП / ЛУКОЙЛ-Ухтанефтепереработка / НШУ «Яреганефть»', place: 'Ухта, Республика Коми', coordinates: [53.69, 63.56], climate: 'cold' },
        { name: 'Угольный терминал МТП «Усть-Луга»', place: 'Усть-Луга, Ленинградская область', coordinates: [28.28, 59.67] },
        { name: 'ЗАО «Иреляхнефть»', place: 'Мирный, Республика Саха', coordinates: [113.97, 62.54], climate: 'cold' },
        { name: 'Газпромнефть МЗСМ', place: 'Фрязино, Московская область', coordinates: [38.05, 55.96] },
        { name: 'Группа «Илим»', place: 'Санкт-Петербург', coordinates: [30.32, 59.94] },
        { name: 'НЛМК', place: 'Липецк, Липецкая область', coordinates: [39.57, 52.61] },
        { name: 'Группа «Илим»', place: 'Братск, Иркутская область', coordinates: [101.62, 56.15], climate: 'cold' },
        { name: 'Группа «Илим»', place: 'Усть-Илимск, Иркутская область', coordinates: [102.66, 58.0], climate: 'cold' },
        { name: 'Монди Сыктывкарский ЛПК', place: 'Сыктывкар, Республика Коми', coordinates: [50.81, 61.67], climate: 'cold' },
        { name: 'Карельский окатыш', place: 'Костомукша, Республика Карелия', coordinates: [30.6, 64.59], climate: 'cold' },
        { name: 'ЕвроХим-Каратау', place: 'Алматы, Казахстан', coordinates: [76.89, 43.24], country: 'kazakhstan' },
        { name: 'Ковдорский ГОК', place: 'Ковдор, Мурманская область', coordinates: [30.47, 67.56], climate: 'cold' },
        { name: 'Баимский ГОК', place: 'Билибино, Чукотский АО', coordinates: [166.44, 68.05], climate: 'cold' },
        { name: 'Дулисьминское НГКМ', place: 'Киренский район, Иркутская область', coordinates: [108.11, 57.78], climate: 'cold' },
        { name: 'Нижнекамскнефтехим', place: 'Нижнекамск, Республика Татарстан', coordinates: [51.82, 55.64] },
        { name: 'Новороссийский зерновой терминал', place: 'Новороссийск, Краснодарский край', coordinates: [37.77, 44.72] },
        { name: 'Сургутский ЗСК', place: 'Сургут, ХМАО', coordinates: [73.4, 61.25], climate: 'cold' },
        { name: 'Северсталь', place: 'Череповец, Вологодская область', coordinates: [37.9, 59.13], climate: 'cold' },
        { name: 'Озерный ГОК', place: 'Еравнинский район, Бурятия', coordinates: [111.5, 51.75], climate: 'cold' },
        { name: 'Ленинградский вокзал', place: 'Москва', coordinates: [37.62, 55.76] }
    ];

    async function renderRussiaMap() {
        if (!mapSvg || !window.d3 || !window.topojson) return;
        if (mapSvg.querySelector('.country-shape')) return;
        if (mapRenderInProgress) return;

        mapRenderInProgress = true;

        try {
            const world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
            const russiaGeometry = world.objects.countries.geometries.find(country => String(country.id) === '643');
            if (!russiaGeometry) return;

            const russia = topojson.feature(world, russiaGeometry);

            const projection = d3.geoMercator().center([100, 60]).scale(260).translate([400, 190]);
            const path = d3.geoPath(projection);
            const countryPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            countryPath.setAttribute('class', 'country-shape');
            countryPath.setAttribute('d', path(russia));
            mapSvg.appendChild(countryPath);

            const russiaLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            russiaLabel.setAttribute('class', 'country-label country-label-russia');
            const [russiaLabelX, russiaLabelY] = path.centroid(russia);
            russiaLabel.setAttribute('x', russiaLabelX);
            russiaLabel.setAttribute('y', russiaLabelY);
            russiaLabel.textContent = 'РОССИЙСКАЯ ФЕДЕРАЦИЯ';
            mapSvg.appendChild(russiaLabel);

            const kazakhstanGeometry = world.objects.countries.geometries.find(country => String(country.id) === '398');
            if (kazakhstanGeometry) {
                const kazakhstanPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                kazakhstanPath.setAttribute('class', 'country-shape country-kazakhstan');
                kazakhstanPath.setAttribute('d', path(topojson.feature(world, kazakhstanGeometry)));
                mapSvg.appendChild(kazakhstanPath);

                const kazakhstanLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                kazakhstanLabel.setAttribute('class', 'country-label country-label-kazakhstan');
                const kazakhstan = topojson.feature(world, kazakhstanGeometry);
                const [kazakhstanLabelX, kazakhstanLabelY] = path.centroid(kazakhstan);
                kazakhstanLabel.setAttribute('x', kazakhstanLabelX);
                kazakhstanLabel.setAttribute('y', kazakhstanLabelY);
                kazakhstanLabel.textContent = 'КАЗАХСТАН';
                mapSvg.appendChild(kazakhstanLabel);
            }

            const markerLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            markerLayer.setAttribute('class', 'map-location-layer');
            mapSvg.appendChild(markerLayer);

            projectLocations.forEach((location, index) => {
                const [x, y] = projection(location.coordinates);
                if (!Number.isFinite(x) || !Number.isFinite(y)) return;

                const markerGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                markerGroup.setAttribute('class', 'map-location-group');
                markerGroup.setAttribute('tabindex', '0');
                markerGroup.setAttribute('role', 'button');
                markerGroup.setAttribute('aria-label', `${location.name}: ${location.place}`);

                const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                marker.setAttribute('class', `map-location${location.climate === 'cold' ? ' map-location-cold' : ''}`);
                marker.setAttribute('cx', x);
                marker.setAttribute('cy', y);
                marker.setAttribute('r', '4.8');
                marker.style.animationDelay = `${index * 80}ms`;

                const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                title.textContent = `${location.name} — ${location.place}`;
                marker.appendChild(title);

                const locationLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                locationLabel.setAttribute('class', 'location-label');
                locationLabel.setAttribute('x', x + 9);
                locationLabel.setAttribute('y', y - 8);
                locationLabel.textContent = location.name;

                markerGroup.appendChild(marker);
                markerGroup.appendChild(locationLabel);
                markerLayer.appendChild(markerGroup);
            });
        } catch (error) {
            console.warn('Не удалось загрузить геометрию карты России.', error);
        } finally {
            mapRenderInProgress = false;
        }
    }

    renderRussiaMap();
    window.addEventListener('load', renderRussiaMap, { once: true });
    const mapReadyTimer = window.setInterval(() => {
        if (mapSvg?.querySelector('.country-shape')) {
            window.clearInterval(mapReadyTimer);
            return;
        }
        renderRussiaMap();
    }, 250);
    window.setTimeout(() => window.clearInterval(mapReadyTimer), 10000);

    const nodeMapFill = document.getElementById('nodeMapFill');
    const nodeMapSections = Array.from(document.querySelectorAll('.node-map-item'))
        .map(item => ({ item, section: document.getElementById(item.getAttribute('href').slice(1)) }))
        .filter(entry => entry.section);

    function updateNodeMap() {
        if (!nodeMapSections.length) return;

        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        const travel = Math.min(1, Math.max(0, ratio));
        if (nodeMapFill) nodeMapFill.style.height = `${(travel * 100).toFixed(2)}%`;

        const scrollY = window.pageYOffset;
        let activeEntry = nodeMapSections[0];
        nodeMapSections.forEach(entry => {
            const sectionTop = entry.section.offsetTop - 150;
            if (scrollY >= sectionTop) activeEntry = entry;
        });

        nodeMapSections.forEach(entry => {
            entry.item.classList.toggle('active', entry === activeEntry);
        });
    }

    updateNodeMap();
    window.addEventListener('scroll', updateNodeMap, { passive: true });
    window.addEventListener('resize', updateNodeMap);

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.background = 'rgba(59, 130, 246, 0.2)';
                    navLink.style.color = 'white';
                } else {
                    navLink.style.background = '';
                    navLink.style.color = '';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Header background on scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(15, 23, 42, 0.98)';
            } else {
                header.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        });
    }

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.stat-card, .service-card, .value-item, .portfolio-stat, .tool-category, .timeline-item, .coop-item, .contact-card');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = windowHeight * 0.85;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < revealPoint) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize reveal elements
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
})();
