// Mobile Navigation Toggle
(() => {
    const translationRows = [
        ['Евгений Трофимов — инженер-проектировщик систем электрообогрева', 'Evgeny Trofimov — Industrial Heat Tracing Design Engineer', '特罗菲莫夫·叶夫根尼 — 工业电伴热系统设计工程师'],
        ['01 · Обо мне', '01 · About me', '01 · 关于我'],
        ['02 · География', '02 · Geography', '02 · Project geography'],
        ['03 · Показатели', '03 · Key figures', '03 · 关键指标'],
        ['04 · Услуги', '04 · Services', '04 · 服务'],
        ['05 · Ценность', '05 · Value', '05 · 客户价值'],
        ['06 · Схема работы', '06 · Workflow', '06 · 工作流程'],
        ['07 · Портфолио', '07 · Portfolio', '07 · 项目组合'],
        ['08 · Стек', '08 · Toolkit', '08 · 技术栈'],
        ['09 · Опыт', '09 · Experience', '09 · 工作经验'],
        ['10 · Образование', '10 · Education', '10 · 教育背景'],
        ['11 · Формат работы', '11 · Work format', '11 · 合作方式'],
        ['12 · Контакты', '12 · Contacts', '12 · 联系方式'],
        ['Трофимов Е.С.', 'E. Trofimov', '特罗菲莫夫'],
        ['Обо мне', 'About me', '关于我'],
        ['География', 'Geography', '地理'],
        ['Показатели', 'Key figures', '关键指标'],
        ['Услуги', 'Services', '服务'],
        ['Портфолио', 'Portfolio', '项目组合'],
        ['Опыт', 'Experience', '经验'],
        ['Контакты', 'Contacts', '联系方式'],
        ['Инженер-проектировщик с 2006 года', 'Design engineer since 2006', '自2006年起从事设计工程'],
        ['Трофимов Евгений Сергеевич', 'Evgeny Trofimov', '特罗菲莫夫·叶夫根尼'],
        ['Проектирование систем электрообогрева промышленных объектов', 'Industrial heat tracing system design', '工业设施电伴热系统设计'],
        ['ИП · Полный цикл: от расчётов до ПНР · Без субподряда', 'Sole proprietor · Full cycle: from calculations to commissioning · No subcontracting', '个体经营 · 全流程：从计算到调试 · 不转包'],
        ['Санкт-Петербург', 'Saint Petersburg', '圣彼得堡'],
        ['Удалённо / Гибрид / На месте', 'Remote / Hybrid / On-site', '远程 / 混合 / 现场'],
        ['Командировки — готов', 'Ready for business trips', '可出差'],
        ['Связаться со мной', 'Contact me', '联系我'],
        ['Скачать резюме (PDF)', 'Download CV (PDF)', '下载简历（PDF）'],
        ['УЗЕЛ 01', 'NODE 01', '节点 01'],
        ['19 лет в промышленном проектировании', '19 years in industrial design', '工业设计经验 19 年'],
        ['С 2014 года работаю как ИП: все проекты — от расчётов до пусконаладки — выполняю лично, без передачи на субподряд.', 'Since 2014 I have worked as a sole proprietor, personally delivering every project from calculations to commissioning, without subcontracting.', '自2014年起以个体经营形式工作，亲自完成从计算到调试的全部项目，不转包。'],
        ['За 11 лет в этом формате — более', 'Over 11 years in this format — more than', '以此方式工作 11 年 — 已完成超过'],
        ['65 реализованных объектов', '65 completed facilities', '65 个已落地项目'],
        ['в 6+ отраслях:', 'across 6+ industries:', '覆盖 6 个以上行业：'],
        ['Нефтегаз (добыча/переработка)', 'Oil & gas (upstream / processing)', '油气（开采 / 加工）'],
        ['Целлюлозно-бумажная промышленность', 'Pulp and paper industry', '制浆造纸工业'],
        ['Порты и морские суда', 'Ports and marine vessels', '港口与海洋船舶'],
        ['Гражданское строительство', 'Civil construction', '民用建筑'],
        ['Горно-перерабатывающие предприятия', 'Mining and processing facilities', '采矿加工企业'],
        ['Металлургия', 'Metallurgy', '冶金'],
        ['УЗЕЛ 02', 'NODE 02', '节点 02'],
        ['География реализованных объектов', 'Project geography', '项目地理分布'],
        ['ТЕРРИТОРИЯ РАБОТЫ / РФ', 'WORK TERRITORY / RUSSIA', '工作区域 / 俄罗斯'],
        ['От портовой инфраструктуры Северо-Запада до сложных климатических зон Сибири и Дальнего Востока.', 'From the port infrastructure of the Northwest to the challenging climate zones of Siberia and the Far East.', '从西北部港口基础设施到西伯利亚及远东的复杂气候区域。'],
        ['Проектирую системы электрообогрева для объектов, где важны устойчивость, расчёт и готовность работать на месте.', 'I design heat tracing systems for facilities where reliability, accurate calculations and on-site readiness matter.', '为重视可靠性、精确计算和现场配合的设施设计电伴热系统。'],
        ['промышленный объект', 'industrial facility', '工业设施'],
        ['холодная климатическая зона', 'cold climate zone', '寒冷气候区'],
        ['УЗЕЛ 03', 'NODE 03', '节点 03'],
        ['Ключевые показатели', 'Key figures', '关键指标'],
        ['лет в проектировании', 'years in design', '设计年限'],
        ['с 2006 года', 'since 2006', '自 2006 年'],
        ['лет удалённой работы', 'years working remotely', '远程工作年限'],
        ['проверенный формат', 'proven format', '成熟模式'],
        ['отраслей промышленности', 'industrial sectors', '工业行业'],
        ['широкий опыт', 'broad experience', '丰富经验'],
        ['реализованных проектов', 'completed projects', '已完成项目'],
        ['2014–2025, как ИП', '2014–2025 as a sole proprietor', '2014–2025 年个体经营'],
        ['языка документации', 'documentation languages', '文档语言'],
        ['русский / английский', 'Russian / English', '俄语 / 英语'],
        ['УЗЕЛ 04', 'NODE 04', '节点 04'],
        ['Специализация и услуги', 'Specialization and services', '专业领域与服务'],
        ['Расчёты и ТКП', 'Calculations and commercial proposals', '计算与商业技术报价'],
        ['Тепловые и электрические расчёты бункеров, трубопроводов, резервуаров, кровли, полов, оборудования; базовые расчёты для КП.', 'Thermal and electrical calculations for hoppers, pipelines, tanks, roofs, floors and equipment; basic calculations for proposals.', '料斗、管道、储罐、屋面、地面及设备的热力与电气计算；商务报价基础计算。'],
        ['Проектирование «под ключ»', 'Turnkey design', '交钥匙设计'],
        ['Саморегулирующийся, резистивный, высокотемпературный кабель с минеральной изоляцией; нагревательные модули и панели; зоны Ex/ATEX; согласование с Ростехнадзором.', 'Self-regulating, resistive and mineral-insulated high-temperature cable; heating modules and panels; Ex/ATEX zones; Rostekhnadzor approvals.', '自调节、恒功率及矿物绝缘高温电缆；加热模块与面板；Ex/ATEX 区域；与俄联邦技术监督局协调。'],
        ['Шкафы управления', 'Control cabinets', '控制柜'],
        ['Полное проектирование силовой части и схем управления: однолинейные схемы, спецификации, подбор автоматики.', 'Complete power and control design: single-line diagrams, specifications and automation selection.', '完成动力与控制部分设计：单线图、规格书及自动化设备选型。'],
        ['Сопровождение', 'Engineering support', '工程支持'],
        ['Экспертиза проектной документации, работа с замечаниями, корректировка РД, авторский надзор, поддержка монтажа и ПНР.', 'Design documentation review, comment resolution, working-document updates, author supervision, installation and commissioning support.', '设计文件审查、意见处理、施工文件修订、设计监督、安装与调试支持。'],
        ['Техническая документация', 'Technical documentation', '技术文档'],
        ['Разработка ТЗ и технических требований для проектных институтов и генподрядчиков.', 'Preparation of terms of reference and technical requirements for design institutes and general contractors.', '为设计院和总承包商编制任务书及技术要求。'],
        ['Международный опыт', 'International experience', '国际经验'],
        ['Совместное русско-английское проектирование, двуязычная документация.', 'Russian-English collaboration and bilingual documentation.', '俄英协同设计，双语文档。'],
        ['Дополнительно:', 'Additionally:', '其他：'],
        ['выбор теплоизоляции, тепловые и электрические расчёты, экспертиза/авторский надзор, работа во взрывоопасных зонах (Ex/ATEX).', 'Insulation selection, thermal and electrical calculations, expert review / author supervision, work in hazardous areas (Ex/ATEX).', '保温选型、热力与电气计算、专家审查 / 设计监督、在危险区域（Ex/ATEX）工作。'],
        ['УЗЕЛ 05', 'NODE 05', '节点 05'],
        ['Ценность для заказчика', 'Value for the client', '客户价值'],
        ['Экономия бюджета', 'Budget savings', '节省预算'],
        ['Снижение избыточной мощности и стоимости системы за счёт точных расчётов', 'Lower excess capacity and system cost through accurate calculations', '通过精确计算降低冗余功率和系统成本'],
        ['Практичность', 'Practicality', '实用性'],
        ['Проектирование с учётом реального монтажа и эксплуатации', 'Design based on real installation and operation', '结合实际安装与运行进行设计'],
        ['Быстрый старт', 'Fast start', '快速启动'],
        ['Быстрое включение в проект без длительной адаптации', 'Quick project onboarding without lengthy adaptation', '无需长期适应即可快速融入项目'],
        ['Чистая экспертиза', 'Smooth review', '顺利审查'],
        ['Минимизация замечаний экспертизы', 'Minimizing review comments', '最大限度减少审查意见'],
        ['Полная поддержка', 'Full support', '全程支持'],
        ['Поддержка на всех этапах: от ТКП до ПНР', 'Support at every stage: from proposal to commissioning', '全阶段支持：从技术商业报价到调试'],
        ['УЗЕЛ 06', 'NODE 06', '节点 06'],
        ['Схема работы', 'Workflow', '工作流程'],
        ['Прозрачный процесс от заявки до запуска системы', 'A transparent process from request to system start-up', '从需求到系统启动的透明流程'],
        ['ТЗ и исходные данные', 'Terms of reference and input data', '任务书与基础数据'],
        ['Анализ опросных листов, чертежей трубопроводов/резервуаров и технических требований.', 'Analysis of data sheets, pipeline / tank drawings and technical requirements.', '分析数据表、管道 / 储罐图纸及技术要求。'],
        ['Расчёты и подбор', 'Calculations and selection', '计算与选型'],
        ['Выполнение тепловых и электрических расчётов, подбор кабеля, автоматики и комплектации.', 'Thermal and electrical calculations; selection of cables, automation and equipment packages.', '进行热力与电气计算，选择电缆、自动化设备及配套。'],
        ['Проектирование', 'Design', '设计'],
        ['Разработка рабочей документации (схемы, планы, спецификации) и шкафов управления.', 'Preparation of working documentation (diagrams, plans, specifications) and control cabinets.', '编制施工文件（图纸、平面图、规格书）及控制柜设计。'],
        ['Согласование', 'Approval', '审批协调'],
        ['Сопровождение экспертизы, оперативное внесение правок, защита проектных решений.', 'Expert review support, prompt revisions and defense of design solutions.', '配合审查、快速修改并说明设计方案。'],
        ['Запуск и ПНР', 'Start-up and commissioning', '启动与调试'],
        ['Консультирование монтажной бригады, помощь с пусконаладкой и сдачей объекта.', 'Installation-team consulting, commissioning assistance and facility handover.', '为安装团队提供咨询，协助调试与项目交付。'],
        ['УЗЕЛ 07', 'NODE 07', '节点 07'],
        ['Портфолио в цифрах', 'Portfolio in figures', '项目组合数据'],
        ['За 11 лет в формате ИП (2014–2025) лично выполнено', 'Over 11 years as a sole proprietor (2014–2025), personally completed', '以个体经营形式工作 11 年（2014–2025），亲自完成'],
        ['65 проектов', '65 full-cycle projects', '65 个全流程项目'],
        ['полного цикла — от расчётов до ПНР:', 'from calculations to commissioning:', '从计算到调试：'],
        ['Греющий кабель', 'Heat-tracing cable', '伴热电缆'],
        ['Силовой кабель', 'Power cable', '动力电缆'],
        ['Контрольный кабель', 'Control cable', '控制电缆'],
        ['Панели обогрева', 'Heating panels', '加热面板'],
        ['Соединительные коробки', 'Junction boxes', '接线盒'],
        ['Кабельные лотки/', 'Cable trays /', '电缆桥架 /'],
        ['конструкции (9 007 м)', 'structures (9,007 m)', '结构（9,007 米）'],
        ['Шкафов управления', 'Control cabinets', '控制柜'],
        ['Отрасли объектов', 'Facility industries', '项目行业'],
        ['Нефтегаз, горнорудная и горно-металлургическая промышленность, ЦБП/лесная промышленность, металлургия, пищевая промышленность, гражданское строительство.', 'Oil and gas, mining and mining & metallurgy, pulp and paper / forestry, metallurgy, food industry and civil construction.', '油气、采矿及矿冶、制浆造纸 / 林业、冶金、食品工业及民用建筑。'],
        ['Топ-заказчики', 'Top clients', '主要客户'],
        ['Портфолио с примерами объектов', 'Portfolio with project examples', '项目案例组合'],
        ['УЗЕЛ 08', 'NODE 08', '节点 08'],
        ['Профессиональный стек', 'Professional toolkit', '专业技术栈'],
        ['CAD / автоматизация', 'CAD / automation', 'CAD / 自动化'],
        ['Специализированное ПО', 'Specialized software', '专业软件'],
        ['Нормативная база', 'Standards', '规范体系'],
        ['ПУЭ, ГОСТ, СП, международные стандарты', 'PUE, GOST, SP and international standards', '电气安装规范、GOST、SP 及国际标准'],
        ['УЗЕЛ 09', 'NODE 09', '节点 09'],
        ['Опыт работы', 'Work experience', '工作经验'],
        ['янв. 2014 — н.в.', 'Jan 2014 — present', '2014年1月 — 至今'],
        ['Ведущий инженер-проектировщик (электрообогрев: греющая и силовая части)', 'Lead design engineer (heat tracing: heating and power systems)', '首席设计工程师（电伴热：伴热与动力部分）'],
        ['Удалённая работа по договору ИП. Полный цикл проектирования систем электрообогрева: расчёты, ТЗ, рабочая документация, шкафы управления, сопровождение экспертизы. Масштаб задач — от точечного обогрева пандусов и канализационных выводов до комплексных систем для протяжённых трубопроводов, блочно-модульного технологического оборудования, судовых систем, крупных резервуаров, сепараторов и бункеров. Все проекты выполняются лично, без субподряда: расчёты, подбор оборудования, рабочая документация, шкафы управления, сопровождение экспертизы, авторский надзор, поддержка ПНР. За 11 лет — более 65 реализованных объектов в 7 отраслях.', 'Remote sole-proprietor work. Full-cycle design of heat tracing systems: calculations, terms of reference, working documentation, control cabinets and expert review support. Scope ranges from spot heating of ramps and sewer outlets to complex systems for long pipelines, modular process equipment, marine systems, large tanks, separators and hoppers. Every project is delivered personally without subcontracting: calculations, equipment selection, working documentation, control cabinets, expert review support, author supervision and commissioning support. Over 11 years — 65+ completed facilities in 7 industries.', '个体经营合同下的远程工作。全流程设计电伴热系统：计算、任务书、施工文件、控制柜及审查配合。项目范围从坡道和排水出口的局部加热，到长距离管道、模块化工艺设备、船舶系统、大型储罐、分离器和料斗的复杂系统。所有项目均亲自完成，不转包：计算、设备选型、施工文件、控制柜、审查配合、设计监督和调试支持。11 年间完成 65 个以上、覆盖 7 个行业的项目。'],
        ['фев. 2011 — янв. 2014', 'Feb 2011 — Jan 2014', '2011年2月 — 2014年1月'],
        ['Ведущий инженер-проектировщик', 'Lead design engineer', '首席设计工程师'],
        ['Разработка разделов: ЭМ, ЭО, ЭОБ (электрообогрев), ЭХЗ (электрохимическая защита). Согласование проектной документации.', 'Design sections: EM, EO, EOB (heat tracing), ECP (electrochemical protection). Project documentation approval.', '负责 EM、EO、EOB（电伴热）、ECP（电化学保护）专业设计；协调项目文件审批。'],
        ['фев. 2006 — янв. 2011', 'Feb 2006 — Jan 2011', '2006年2月 — 2011年1月'],
        ['Инженер-проектировщик', 'Design engineer', '设计工程师'],
        ['Проекты по разделам: ЭС, ЭХЗ, ЭО, электрообогрев трубопроводов и ёмкостей. Нормальные и взрывоопасные зоны. Стадии П, РП, Р, РД. Согласование, работа с замечаниями. Инструменты: AutoCAD, DIALux, MS Office, Adobe Photoshop.', 'Projects in ES, ECP and EO, including heat tracing of pipelines and tanks. Safe and hazardous areas. Design stages P, RP, R and RD. Approvals and comment resolution. Tools: AutoCAD, DIALux, MS Office and Adobe Photoshop.', '负责 ES、ECP、EO 专业及管道和容器电伴热项目。普通与危险区域；P、RP、R、RD 阶段。审批与意见处理。工具：AutoCAD、DIALux、MS Office、Adobe Photoshop。'],
        ['УЗЕЛ 10', 'NODE 10', '节点 10'],
        ['Образование и статус', 'Education and status', '教育与资质'],
        ['Санкт-Петербургский государственный технологический университет растительных полимеров, 2006', 'Saint Petersburg State Technological University of Plant Polymers, 2006', '圣彼得堡国立植物聚合物技术大学，2006 年'],
        ['Факультет:', 'Faculty:', '院系：'],
        ['Автоматизированных систем управления технологическими процессами', 'Automated process control systems', '工艺过程自动化控制系统'],
        ['Специализация:', 'Specialization:', '专业方向：'],
        ['Электропривод и автоматика промышленных установок и технологических комплексов', 'Electric drives and automation of industrial installations and process complexes', '工业装置与工艺综合体的电力驱动及自动化'],
        ['Включён в Национальный реестр специалистов НОПРИЗ', 'Listed in the NOPRIZ National Register of Specialists', '列入 NOPRIZ 专家国家名录'],
        ['Скачать сертификат НОПРИЗ', 'Download NOPRIZ certificate', '下载 NOPRIZ 证书'],
        ['УЗЕЛ 11', 'NODE 11', '节点 11'],
        ['Формат работы', 'Work format', '合作方式'],
        ['Удалённая работа', 'Remote work', '远程工作'],
        ['Полный цикл проектирования', 'Full-cycle design', '全流程设计'],
        ['Договор с ИП', 'Sole proprietor contract', '个体经营合同'],
        ['ОКВЭД 71.12.1, УСН, без НДС', 'OKVED 71.12.1, simplified tax system, no VAT', 'OKVED 71.12.1，简化税制，不含增值税'],
        ['Форматы ГПХ', 'Civil-law contract formats', '民事合同形式'],
        ['Гражданско-правовые договоры', 'Civil-law contracts', '民事合同'],
        ['Срочные задачи', 'Urgent assignments', '紧急任务'],
        ['Готов к сложным проектам', 'Ready for complex projects', '可承接复杂项目'],
        ['Командировки', 'Business trips', '出差'],
        ['Выезд на объект при необходимости', 'On-site visits when needed', '必要时赴现场'],
        ['УЗЕЛ 12', 'NODE 12', '节点 12'],
        ['Телефон', 'Phone', '电话'],
        ['Город', 'City', '城市'],
        ['Написать письмо', 'Send an email', '发送邮件'],
        ['Написать в Telegram', 'Message on Telegram', '在 Telegram 联系'],
        ['Скачать резюме', 'Download CV', '下载简历'],
        ['© 2025 Трофимов Евгений Сергеевич. Инженер-проектировщик систем электрообогрева.', '© 2025 Evgeny Trofimov. Industrial heat tracing design engineer.', '© 2025 特罗菲莫夫·叶夫根尼。工业电伴热系统设计工程师。'],
        ['Санкт-Петербург · 19 лет опыта · 65+ проектов', 'Saint Petersburg · 19 years of experience · 65+ projects', '圣彼得堡 · 19 年经验 · 65+ 个项目'],
        ['Евгений Трофимов — инженер-проектировщик систем электрообогрева. 19 лет опыта, 65+ реализованных объектов.', 'Evgeny Trofimov — industrial heat tracing design engineer. 19 years of experience, 65+ completed facilities.', '特罗菲莫夫·叶夫根尼——工业电伴热系统设计工程师。19 年经验，65+ 个已完成项目。'],
        ['ЛУКОЙЛ-Нижегороднефтеоргсинтез', 'LUKOIL-NizhegorodNefteProekt', '卢克石油-下诺夫哥罗德炼油厂'],
        ['Кстово, Нижегородская область', 'Kstovo, Nizhny Novgorod Region', '克斯托沃，下诺夫哥罗德州'],
        ['ГМК «Удокан»', 'Udokan Copper', '乌多坎矿业公司'],
        ['Новая Чара, Забайкальский край', 'Novaya Chara, Zabaykalsky Krai', '新查拉，外贝加尔边疆区'],
        ['ЛУКОЙЛ-УНП / ЛУКОЙЛ-Ухтанефтепереработка / НШУ «Яреганефть»', 'LUKOIL-UNP / LUKOIL-Ukhtaneftepererabotka / Yarega Oil', '卢克石油-UNP / 卢克石油乌赫塔炼油厂 / 亚列加石油'],
        ['Ухта, Республика Коми', 'Ukhta, Komi Republic', '乌赫塔，科米共和国'],
        ['Угольный терминал МТП «Усть-Луга»', 'Ust-Luga Port coal terminal', '乌斯季卢加港煤炭码头'],
        ['Усть-Луга, Ленинградская область', 'Ust-Luga, Leningrad Region', '乌斯季卢加，列宁格勒州'],
        ['ЗАО «Иреляхнефть»', 'Irelyakhneft', '伊列利亚赫石油公司'],
        ['Мирный, Республика Саха', 'Mirny, Sakha Republic', '米尔内，萨哈共和国'],
        ['Газпромнефть МЗСМ', 'Gazpromneft MZSM', '俄罗斯天然气工业石油 MZSM'],
        ['Фрязино, Московская область', 'Fryazino, Moscow Region', '弗里亚济诺，莫斯科州'],
        ['Группа «Илим»', 'Ilim Group', '伊利姆集团'],
        ['Братск, Иркутская область', 'Bratsk, Irkutsk Region', '布拉茨克，伊尔库茨克州'],
        ['Усть-Илимск, Иркутская область', 'Ust-Ilimsk, Irkutsk Region', '乌斯季伊利姆斯克，伊尔库茨克州'],
        ['Монди Сыктывкарский ЛПК', 'Mondi Syktyvkar Mill', '蒙迪瑟克特夫卡尔纸浆厂'],
        ['Сыктывкар, Республика Коми', 'Syktyvkar, Komi Republic', '瑟克特夫卡尔，科米共和国'],
        ['Карельский окатыш', 'Karelsky Okatysh', '卡累利阿球团厂'],
        ['Костомукша, Республика Карелия', 'Kostomuksha, Republic of Karelia', '科斯托穆克沙，卡累利阿共和国'],
        ['ЕвроХим-Каратау', 'EuroChem-Karatau', '乌拉尔化学-卡拉套'],
        ['Алматы, Казахстан', 'Almaty, Kazakhstan', '哈萨克斯坦阿拉木图'],
        ['Ковдорский ГОК', 'Kovdor Mining and Processing Plant', '科夫多尔采选厂'],
        ['Ковдор, Мурманская область', 'Kovdor, Murmansk Region', '科夫多尔，摩尔曼斯克州'],
        ['Баимский ГОК', 'Baimsky Mining and Processing Plant', '拜姆斯基采选厂'],
        ['Билибино, Чукotский АО', 'Bilibino, Chukotka Autonomous Okrug', '比利比诺，楚科奇自治区'],
        ['Билибино, Чукотский АО', 'Bilibino, Chukotka Autonomous Okrug', '比利比诺，楚科奇自治区'],
        ['Дулисьминское НГКМ', 'Dulisminskoye oil and gas field', '杜利斯明斯科耶油气田'],
        ['Киренский район, Иркутская область', 'Kirensky District, Irkutsk Region', '伊尔库茨克州基连斯克区'],
        ['Нижнекамскнефтехим', 'Nizhnekamskneftekhim', '下卡姆斯克石化'],
        ['Нижнекамск, Республика Татарстан', 'Nizhnekamsk, Republic of Tatarstan', '下卡姆斯克，鞑靼斯坦共和国'],
        ['Новороссийский зерновой терминал', 'Novorossiysk grain terminal', '新罗西斯克粮食码头'],
        ['Новороссийск, Краснодарский край', 'Novorossiysk, Krasnodar Krai', '新罗西斯克，克拉斯诺达尔边疆区'],
        ['Сургутский ЗСК', 'Surgut Gas Processing Plant', '苏尔古特天然气处理厂'],
        ['Сургут, ХМАО', 'Surgut, Khanty-Mansi Autonomous Okrug', '苏尔古特，汉特-曼西自治区'],
        ['Северсталь', 'Severstal', '谢韦尔钢铁'],
        ['Череповец, Вологодская область', 'Cherepovets, Vologda Region', '切列波韦茨，沃洛格达州'],
        ['Озерный ГОК', 'Ozerny Mining and Processing Plant', '奥泽尔内采选厂'],
        ['Еравнинский район, Бурятия', 'Yeravninsky District, Buryatia', '布里亚特共和国叶拉夫宁区'],
        ['Москва', 'Moscow', '莫斯科'],
        ['(235 617 м)', '(235,617 m)', '（235,617 米）'],
        ['(123 080 м)', '(123,080 m)', '（123,080 米）'],
        ['(32 829 м)', '(32,829 m)', '（32,829 米）'],
        ['(Братск, Усть-Илимск)', '(Bratsk, Ust-Ilimsk)', '（布拉茨克、乌斯季伊利姆斯克）'],
        ['(МЗСМ, Оренбург)', '(MZSM, Orenburg)', '（MZSM、奥伦堡）'],
        ['(Нижегороднефтеоргсинтез, Ухтанефтепереработка)', '(NizhegorodNefteProekt, Ukhta refinery)', '（下诺夫哥罗德炼油厂、乌赫塔炼油厂）'],
        ['1 640 шт', '1,640 pcs', '1,640 件'],
        ['4 963 шт', '4,963 pcs', '4,963 件'],
        ['≈ 123 км', '≈ 123 km', '约 123 公里'],
        ['≈ 235 км', '≈ 235 km', '约 235 公里'],
        ['≈ 33 км', '≈ 33 km', '约 33 公里'],
        ['≈ 9 км', '≈ 9 km', '约 9 公里'],
        ['Терминалы Усть-Луга и Новороссийск', 'Ust-Luga and Novorossiysk terminals', '乌斯季卢加和新罗西斯克码头'],
        ['Газпром', 'Gazprom', '俄罗斯天然气工业股份公司'],
        ['Газпромнефть', 'Gazprom Neft', '俄罗斯天然气工业石油'],
        ['Губкинский ГПЗ', 'Gubkinsky gas processing plant', '古布金斯基天然气处理厂'],
        ['ЛУКОЙЛ', 'LUKOIL', '卢克石油'],
        ['НЛМК', 'NLMK', '新利佩茨克钢铁'],
        ['Норникель', 'Nornickel', '诺镍'],
        ['ООО «Петропроект»', 'Petroproject LLC', '“彼得罗项目”有限责任公司'],
        ['ООО «ТПМ-Энерго» / ИП', 'TPM-Energo LLC / Sole proprietor', '“TPM-能源”有限责任公司 / 个体经营'],
        ['ООО «Цертус» (Ингаз), Санкт-Петербург', 'Certus LLC (Ingaz), Saint Petersburg', '“Certus”有限责任公司（Ingaz），圣彼得堡'],
        ['СИБУР', 'SIBUR', '西布尔'],
        ['СПбГТУРП', 'SPbSTUPP', '圣彼得堡国立植物聚合物技术大学'],
        ['№ П-072776', 'No. P-072776', '编号 P-072776']
    ];
    const translations = { ru: new Map(), en: new Map(), zh: new Map() };
    translationRows.forEach(([ru, en, zh]) => {
        translations.ru.set(ru, ru);
        translations.en.set(ru, en);
        translations.zh.set(ru, zh);
    });
    const originalText = new WeakMap();
    let currentLanguage = localStorage.getItem('site-language') || 'ru';
    if (!translations[currentLanguage]) currentLanguage = 'ru';

    const translateValue = (value) => translations[currentLanguage].get(value) || value;
    const preserveWhitespace = (source, value) => {
        const leading = source.match(/^\s*/)?.[0] || '';
        const trailing = source.match(/\s*$/)?.[0] || '';
        return `${leading}${value}${trailing}`;
    };

    function applyLanguage(language) {
        currentLanguage = translations[language] ? language : 'ru';
        localStorage.setItem('site-language', currentLanguage);
        document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : currentLanguage;

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.parentElement?.closest('script, style, noscript')) continue;
            if (!originalText.has(node)) originalText.set(node, node.nodeValue);
            const source = originalText.get(node);
            const normalized = source.trim().replace(/\s+/g, ' ');
            if (normalized && translations[currentLanguage].has(normalized)) {
                node.nodeValue = preserveWhitespace(source, translations[currentLanguage].get(normalized));
            }
        }

        const attributes = {
            title: translateValue('Евгений Трофимов — инженер-проектировщик систем электрообогрева'),
            description: translateValue('Евгений Трофимов — инженер-проектировщик систем электрообогрева. 19 лет опыта, 65+ реализованных объектов.')
        };
        document.title = attributes.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', attributes.description);
        document.querySelector('.node-map')?.setAttribute('aria-label', currentLanguage === 'ru' ? 'Навигация по разделам страницы' : currentLanguage === 'en' ? 'Page section navigation' : '页面分区导航');
        document.querySelector('.nav-toggle')?.setAttribute('aria-label', currentLanguage === 'ru' ? 'Меню' : currentLanguage === 'en' ? 'Menu' : '菜单');
        document.querySelector('.language-switcher')?.setAttribute('aria-label', currentLanguage === 'ru' ? 'Выбор языка' : currentLanguage === 'en' ? 'Language selection' : '语言选择');
        document.querySelector('.map-stage')?.setAttribute('aria-label', currentLanguage === 'ru' ? 'Стилизованная карта России с объектами' : currentLanguage === 'en' ? 'Stylized map of Russia with facilities' : '标注项目的俄罗斯示意地图');
        document.querySelector('.russia-map')?.setAttribute('aria-label', currentLanguage === 'ru' ? 'Карта России с объектами' : currentLanguage === 'en' ? 'Map of Russia with facilities' : '标注项目的俄罗斯地图');
        document.querySelector('.map-markers')?.setAttribute('aria-label', currentLanguage === 'ru' ? 'Объекты на карте' : currentLanguage === 'en' ? 'Facilities on the map' : '地图上的项目');
        document.querySelector('img[alt]')?.setAttribute('alt', translateValue('Трофимов Евгений Сергеевич'));
        document.querySelectorAll('.language-button').forEach(button => {
            const active = button.dataset.language === currentLanguage;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        updateMapLanguage();
    }

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
        { name: 'Москва', place: 'Москва', coordinates: [37.62, 55.76] }
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
            const kazakhstanGeometry = world.objects.countries.geometries.find(country => String(country.id) === '398');
            const kazakhstan = kazakhstanGeometry
                ? topojson.feature(world, kazakhstanGeometry)
                : null;

            const projection = d3.geoMercator()
                .center([100, 60])
                .scale(220)
                .translate([400, 265]);
            const path = d3.geoPath(projection);
            const graticule = d3.geoGraticule().step([30, 15]);
            const gridLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            gridLayer.setAttribute('class', 'map-graticule');
            graticule.lines().forEach(line => {
                const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                gridLine.setAttribute('class', 'map-grid-line');
                gridLine.setAttribute('d', path(line));
                gridLayer.appendChild(gridLine);
            });
            mapSvg.appendChild(gridLayer);

            const countryPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            countryPath.setAttribute('class', 'country-shape');
            countryPath.setAttribute('d', path(russia));
            mapSvg.appendChild(countryPath);

            const russiaLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            russiaLabel.setAttribute('class', 'country-label country-label-russia');
            const [russiaLabelX, russiaLabelY] = path.centroid(russia);
            russiaLabel.setAttribute('x', russiaLabelX);
            russiaLabel.setAttribute('y', russiaLabelY);
            russiaLabel.textContent = currentLanguage === 'ru' ? 'РОССИЙСКАЯ ФЕДЕРАЦИЯ' : currentLanguage === 'en' ? 'RUSSIAN FEDERATION' : '俄罗斯联邦';
            mapSvg.appendChild(russiaLabel);

            if (kazakhstan) {
                const kazakhstanPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                kazakhstanPath.setAttribute('class', 'country-shape country-kazakhstan');
                kazakhstanPath.setAttribute('d', path(kazakhstan));
                mapSvg.appendChild(kazakhstanPath);

                const kazakhstanLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                kazakhstanLabel.setAttribute('class', 'country-label country-label-kazakhstan');
                const [kazakhstanLabelX, kazakhstanLabelY] = path.centroid(kazakhstan);
                kazakhstanLabel.setAttribute('x', kazakhstanLabelX);
                kazakhstanLabel.setAttribute('y', kazakhstanLabelY);
                kazakhstanLabel.textContent = currentLanguage === 'ru' ? 'КАЗАХСТАН' : currentLanguage === 'en' ? 'KAZAKHSTAN' : '哈萨克斯坦';
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
                markerGroup.dataset.locationIndex = String(index);
                markerGroup.setAttribute('tabindex', '0');
                markerGroup.setAttribute('role', 'button');
                markerGroup.setAttribute('aria-label', `${translateValue(location.name)}: ${translateValue(location.place)}`);

                const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                marker.setAttribute('class', `map-location${location.climate === 'cold' ? ' map-location-cold' : ''}`);
                marker.setAttribute('cx', x);
                marker.setAttribute('cy', y);
                marker.setAttribute('r', '4.8');
                marker.style.animationDelay = `${index * 80}ms`;

                const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                title.textContent = `${translateValue(location.name)} — ${translateValue(location.place)}`;
                marker.appendChild(title);

                const locationLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                locationLabel.setAttribute('class', 'location-label');
                locationLabel.setAttribute('x', x + 9);
                locationLabel.setAttribute('y', y - 8);
                locationLabel.textContent = translateValue(location.name);

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

    function updateMapLanguage() {
        if (!mapSvg) return;
        const russiaLabel = mapSvg.querySelector('.country-label-russia');
        const kazakhstanLabel = mapSvg.querySelector('.country-label-kazakhstan');
        if (russiaLabel) russiaLabel.textContent = currentLanguage === 'ru' ? 'РОССИЙСКАЯ ФЕДЕРАЦИЯ' : currentLanguage === 'en' ? 'RUSSIAN FEDERATION' : '俄罗斯联邦';
        if (kazakhstanLabel) kazakhstanLabel.textContent = currentLanguage === 'ru' ? 'КАЗАХСТАН' : currentLanguage === 'en' ? 'KAZAKHSTAN' : '哈萨克斯坦';
        mapSvg.querySelectorAll('.map-location-group').forEach(group => {
            const location = projectLocations[Number(group.dataset.locationIndex)];
            if (!location) return;
            const name = translateValue(location.name);
            const place = translateValue(location.place);
            group.setAttribute('aria-label', `${name}: ${place}`);
            const title = group.querySelector('title');
            const label = group.querySelector('.location-label');
            if (title) title.textContent = `${name} — ${place}`;
            if (label) label.textContent = name;
        });
    }

    document.querySelectorAll('.language-button').forEach(button => {
        button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });
    applyLanguage(currentLanguage);
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
