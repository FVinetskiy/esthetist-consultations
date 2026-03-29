import type { Article } from "./types";

export const ARTICLES: Article[] = [
  {
    slug: "bazovyj-uhod-tri-shaga",
    coverSrc: "/articles/s1.jpg",
    coverAltRu: "Набор средств для ухода за кожей",
    coverAltEn: "Skincare products flat lay",
    readMin: 6,
    ru: {
      title: "Базовый уход в три шага: что действительно нужно коже",
      excerpt:
        "Минимальная схема без перегруза: очищение, увлажнение и дневная защита — в каком порядке и зачем каждый этап.",
      sections: [
        {
          heading: "Почему «меньше — лучше» часто работает",
          paragraphs: [
            "Кожа справляется с барьерной функцией и обновлением сама по себе. Задача домашнего ухода — поддержать эти процессы, а не заменить их десятью средствами подряд.",
            "Базовая схема подходит большинству людей как старт: без неё сложно стабильно подключать активы (кислоты, ретиноиды) — сначала важно выстроить терпимый фундамент.",
          ],
        },
        {
          heading: "Утро: мягкое очищение или вода",
          paragraphs: [
            "Если ночью вы не наносили тяжёлые окузиривающие продукты, утром часто достаточно умывания водой или очень мягкого очищающего средства с pH, близким к кожному.",
            "После умывания — увлажняющий или восстанавливающий крем или эмульсия под тип кожи. Сухой коже обычно нужны более насыщенные текстуры, жирной — лёгкие гели или флюиды без тяжёлых окклюзивов, если они провоцируют комедоны.",
          ],
        },
        {
          heading: "Вечер: снять день и SPF",
          paragraphs: [
            "Вечером очищение важнее: снять SPF, пыль и себум. При стойком солнцезащитном средстве иногда уместен двухэтапный уход (гидрофильное масло или бальзам, затем водная фаза), при лёгком SPF — одно качественное очищение может хватить.",
            "После очищения снова увлажнение/питание. Активы (ниацинамид, ретиноид и т.д.) наносятся по правилам совместимости и переносимости — но только когда база не щиплет и не стягивает кожу постоянно.",
          ],
        },
        {
          heading: "SPF днём — не опция",
          paragraphs: [
            "Дневной уход завершает солнцезащита с адекватным спектром и расходом. Это главный «анти-возрастной» и анти-пигментационный шаг в городских условиях.",
            "Если что-то из базы вызывает дискомфорт, меняйте по одному продукту за раз и наблюдайте 10–14 дней — так проще понять виновника раздражения.",
          ],
        },
      ],
    },
    en: {
      title: "Basic skincare in three steps: what your skin actually needs",
      excerpt:
        "A minimal routine without overload: cleanse, hydrate, and daytime protection — order and purpose of each step.",
      sections: [
        {
          heading: "Why “less is often more”",
          paragraphs: [
            "Skin already maintains barrier function and turnover. Home care should support those processes, not replace them with ten layers at once.",
            "A basic routine fits most people as a foundation; it’s hard to add actives (acids, retinoids) safely until this baseline feels comfortable.",
          ],
        },
        {
          heading: "Morning: gentle cleanse or water",
          paragraphs: [
            "If you didn’t layer heavy occlusives overnight, water alone or a very mild cleanser near skin pH is often enough.",
            "Follow with a moisturizer matched to skin type: richer textures for dry skin, lighter gels or fluids for oilier skin if heavy occlusives clog pores.",
          ],
        },
        {
          heading: "Evening: remove the day and SPF",
          paragraphs: [
            "Evening cleansing matters more: remove SPF, dust, and sebum. Stubborn SPF may need double cleansing (oil/balm then water-based); lighter SPF may need only one good cleanser.",
            "Reapply hydration afterward. Actives (niacinamide, retinoids, etc.) come after tolerance is solid — not while the base routine stings or tightens daily.",
          ],
        },
        {
          heading: "Daytime SPF isn’t optional",
          paragraphs: [
            "Finish daytime routines with broad-spectrum SPF at a proper dose — the key anti-aging and anti-pigment step in urban life.",
            "If something irritates, swap one product at a time and track 10–14 days to spot the culprit.",
          ],
        },
      ],
    },
  },
  {
    slug: "barernaya-funkciya-kozhi",
    coverSrc: "/articles/s2.jpg",
    coverAltRu: "Крупный план кожи, естественный свет",
    coverAltEn: "Close-up healthy skin in daylight",
    readMin: 7,
    ru: {
      title: "Барьер кожи простыми словами: из чего он и как его не ломать",
      excerpt:
        "Роговой слой, липиды и микробиом — зачем они нужны и какие привычки чаще всего ослабляют защиту.",
      sections: [
        {
          heading: "Что такое барьер",
          paragraphs: [
            "Кожный барьер — это «кладка» из клеток рогового слоя и липидов между ними. Он удерживает влагу внутри и не пускает раздражители извне слишком свободно.",
            "При нарушении барьера кожа быстрее теряет воду, реагирует на привычные средства и хуже переносит активы — поэтому чинить барьер часто важнее, чем добавлять новые кислоты.",
          ],
        },
        {
          heading: "Что его ослабляет",
          paragraphs: [
            "Агрессивное умывание, горячая вода, частый скраб, слишком много этапов с спиртом и бесконтрольное сочетание сильных активов без пауз.",
            "Зимний ветер, кондиционер, долгий контакт с маской тоже повышают риск сухости и микротрещин в роговом слое.",
          ],
        },
        {
          heading: "Как поддерживать",
          paragraphs: [
            "Мягкое очищение, достаточное увлажнение, керамиды, холестерин и свободные жирные кислоты в составах (в разумных пропорциях), пребиотики/постбиотики при необходимости.",
            "Если вы стартуете с ретиноидами или кислотами, часто начинают с 2–3 раз в неделю и обволакивают кожу увлажнением; при жжении и шелушении не «добивайте» кожу ежедневной экспозицией.",
          ],
        },
      ],
    },
    en: {
      title: "Skin barrier in plain words: what it is and how not to break it",
      excerpt:
        "Stratum corneum, lipids, and microbiome — why they matter and which habits weaken protection.",
      sections: [
        {
          heading: "What the barrier is",
          paragraphs: [
            "The barrier is a brick-and-mortar stack of corneocytes with lipids between them. It keeps water in and makes it harder for irritants to enter.",
            "When it’s compromised, skin loses water faster, stings with familiar products, and tolerates actives poorly — repairing the barrier often beats adding more acids.",
          ],
        },
        {
          heading: "Common weakeners",
          paragraphs: [
            "Harsh cleansing, hot water, frequent scrubs, alcohol-heavy stacks, and unbuffered mixing of strong actives without recovery days.",
            "Winter wind, AC, and long mask wear also raise dryness and micro-cracking risks.",
          ],
        },
        {
          heading: "How to support it",
          paragraphs: [
            "Gentle cleansing, enough hydration, ceramides, cholesterol, and free fatty acids in balanced formulas, plus pre-/post-biotics when needed.",
            "Starting retinoids or acids often means 2–3 nights per week with rich hydration around them; don’t push through daily burning and peeling.",
          ],
        },
      ],
    },
  },
  {
    slug: "spf-kazhdyj-den",
    coverSrc: "/articles/s3.jpg",
    coverAltRu: "Солнечный свет и тень на коже",
    coverAltEn: "Sunlight on skin",
    readMin: 5,
    ru: {
      title: "SPF каждый день: не только для пляжа и не «зимой не надо»",
      excerpt:
        "UVA проходит через облака и стёкла, накапливается годами и влияет на пигмент и упругость. Как выбирать текстуру и наносить нормально.",
      sections: [
        {
          heading: "Два типа ультрафиолета",
          paragraphs: [
            "UVB сильнее в сезон загара и отвечает за ожоги. UVA проникает глубже, работает круглый год в городе, участвует в фото старении и устойчивой пигментации.",
            "Поэтому «сегодня облачно» не отменяет дневной SPF для открытых зон лица и шеи, если вы заботитесь о ровном тоне и лифках.",
          ],
        },
        {
          heading: "Как подобрать под себя",
          paragraphs: [
            "Ищите приятную текстуру, чтобы вы наносили продукт каждый день: гель, флюид, крем или тонирующий SPF. Важнее регулярность, чем «идеальный» фильтр в теории.",
            "Если средство белит или скатывается, меняйте формулу, а не отказывайтесь от защиты: на рынке есть варианты под разные тона и типы кожи.",
          ],
        },
        {
          heading: "Расход и повтор",
          paragraphs: [
            "Для лица ориентир — около двух полос длины пальца на всю поверхность лица и шеи; меньше слоя почти всегда означает меньше защиты, чем указано на упаковке.",
            "При длительном пребывании на улице, поте или протирании маской/воротником — повторяйте SPF каждые 2–3 часа или по ситуации.",
          ],
        },
      ],
    },
    en: {
      title: "Daily SPF: not just for the beach (or “skip in winter”)",
      excerpt:
        "UVA penetrates clouds and glass, accumulating over years. How to pick textures and apply enough.",
      sections: [
        {
          heading: "Two ultraviolet flavors",
          paragraphs: [
            "UVB peaks in sunny seasons and drives burns. UVA goes deeper, shows up year-round in cities, and fuels photoaging and stubborn pigment.",
            "Cloudy days don’t cancel facial SPF if you care about even tone and firmness.",
          ],
        },
        {
          heading: "Choosing what you’ll actually wear",
          paragraphs: [
            "Prioritize a texture you enjoy daily—gel, fluid, cream, or tinted SPF. Consistency beats a “perfect” filter you won’t use.",
            "If a formula casts white or pills, swap it rather than skipping protection; many modern options suit different tones and types.",
          ],
        },
        {
          heading: "Amount and reapplication",
          paragraphs: [
            "Face and neck need roughly two finger-length strips for full coverage; thin layers under-protect versus label claims.",
            "Reapply every 2–3 hours outdoors, with sweat, or after rubbing with masks or collars.",
          ],
        },
      ],
    },
  },
  {
    slug: "ochishayushchie-sredstva",
    coverSrc: "/articles/s4.jpg",
    coverAltRu: "Мыльная пена и вода — метафора очищения",
    coverAltEn: "Cleansing foam texture",
    readMin: 6,
    ru: {
      title: "Очищающие средства: гель, молочко, масло и мицеллярка — кому что",
      excerpt:
        "Как не пересушить кожу и реально снять SPF: кратко о форматах и типичных ошибках.",
      sections: [
        {
          heading: "Задача очищения",
          paragraphs: [
            "Убрать избыток себума, остатки косметики и солнцезащиту без разрушения липидов барьера. «Скрип» после умывания — плохой знак, не показатель чистоты.",
            "pH около 5–6 и отсутствие агрессивных ПАВ в больших дозах обычно дружелюбнее для нормальной и чувствительной кожи.",
          ],
        },
        {
          heading: "Форматы",
          paragraphs: [
            "Гели и пенки — универсальный вариант для жирной и комбинированной кожи; молочко и кремы — часто мягче для сухой.",
            "Гидрофильные масла и бальзамы растворяют фильтры и стойкий макияж; мицеллярная вода удобна, но иногда требует второго этапа смывания водой, чтобы не оставлять ПАВ на коже.",
          ],
        },
        {
          heading: "Частые ошибки",
          paragraphs: [
            "Двойное жёсткое умывание утром и вечером без необходимости, горячая вода, «чистка» скрабом после каждого дня с SPF.",
            "Если после умывания кожа натянута в течение часа — смените продукт или сократите количество проходов пеной.",
          ],
        },
      ],
    },
    en: {
      title: "Cleansers: gel, milk, oil, micellar — what fits whom",
      excerpt:
        "Remove SPF without stripping: formats and common mistakes in a nutshell.",
      sections: [
        {
          heading: "The cleansing job",
          paragraphs: [
            "Remove excess sebum, makeup, and sunscreen without wrecking barrier lipids. Squeaky skin is a red flag, not a cleanliness badge.",
            "pH around 5–6 and milder surfactant loads usually behave better for normal or sensitive skin.",
          ],
        },
        {
          heading: "Formats",
          paragraphs: [
            "Foams and gels suit oilier and combo skin; milks and creams are often gentler for dry types.",
            "Cleansing oils/balms melt filters and long-wear makeup; micellar water is convenient but may need a water rinse afterward to avoid leaving surfactants behind.",
          ],
        },
        {
          heading: "Common pitfalls",
          paragraphs: [
            "Double harsh cleansing without need, hot water, and daily scrubs after SPF days.",
            "If skin feels tight for an hour after washing, change the product or reduce passes.",
          ],
        },
      ],
    },
  },
  {
    slug: "vlaga-i-uderzhanie",
    coverSrc: "/articles/s5.jpg",
    coverAltRu: "Капли воды, увлажнение",
    coverAltEn: "Water drops — hydration concept",
    readMin: 6,
    ru: {
      title: "Увлажнение и удержание влаги: гиалуронка, глицерин, керамиды",
      excerpt:
        "Разница между «намочить» роговой слой и удержать воду; как слои продукта работают вместе.",
      sections: [
        {
          heading: "Два разных процесса",
          paragraphs: [
            "Гумектанты (глицерин, гиалуроновая кислота, пантенол) притягивают воду в верхние слои. Без последующего крема часть влаги быстро испарится — особенно в сухом воздухе.",
            "Эмоленты и окклюзивы сглаживают роговой слой и уменьшают испарение; керамиды помогают восстановить «цемент» между клетками.",
          ],
        },
        {
          heading: "Практика нанесения",
          paragraphs: [
            "На слегка влажную кожу после умывания гумектанты работают мягче; сверху — крем или лосьон под ваш тип кожи.",
            "В очень сухом климате тонкие слои гиалуронки на сухую кожу иногда дают ощущение стягивания — это сигнал добавить влагу в воздух (увлажнитель) или изменить порядок/состав.",
          ],
        },
        {
          heading: "Не путать с лечением акне",
          paragraphs: [
            "Увлажнение не заменяет терапию воспаления, но сухая раздражённая кожа хуже переносит ретиноиды и кислоты. Баланс «достаточно мягко / достаточно увлажнено» упрощает длительные программы.",
          ],
        },
      ],
    },
    en: {
      title: "Hydration vs. water retention: HA, glycerin, ceramides",
      excerpt: "Wetting the surface versus keeping water in; how layers work together.",
      sections: [
        {
          heading: "Two different jobs",
          paragraphs: [
            "Humectants (glycerin, hyaluronic acid, panthenol) pull water into upper layers. Without a follow-up cream, some of that water evaporates—especially in dry air.",
            "Emollients and occlusives smooth the surface and reduce transepidermal water loss; ceramides help repair lipid mortar between cells.",
          ],
        },
        {
          heading: "Application practice",
          paragraphs: [
            "Apply humectants to slightly damp skin after cleansing, then seal with a lotion or cream suited to your type.",
            "In arid climates, HA on bone-dry skin can feel tight—add environmental humidity or adjust order/formula.",
          ],
        },
        {
          heading: "Not a substitute for acne care",
          paragraphs: [
            "Hydration doesn’t replace anti-inflammatory therapy, but dry, irritated skin tolerates retinoids and acids poorly. A gentle, moisturized baseline makes long programs easier.",
          ],
        },
      ],
    },
  },
  {
    slug: "aktivy-dlya-nachinayushchih",
    coverSrc: "/articles/s6.jpg",
    coverAltRu: "Сыворотка в руке",
    coverAltEn: "Serum dropper in hand",
    readMin: 8,
    ru: {
      title: "Активы для начинающих: кислоты, ретиноиды, ниацинамид — с чего начать",
      excerpt:
        "Без паники и без всего сразу: логика введения, переносимость и когда лучше к специалисту.",
      sections: [
        {
          heading: "Сначала база",
          paragraphs: [
            "Если ежедневно щиплет даже простой крем или вы не держите SPF стабильно, смысла наращивать сильные активы мало — сначала выравниваем очищение, увлажнение и защиту.",
            "Один новый продукт за раз на 2–3 недели — золотое правило, чтобы понять реакцию кожи.",
          ],
        },
        {
          heading: "Ниацинамид и кислоты",
          paragraphs: [
            "Ниацинамид часто хорошо переносится и поддерживает барьер, сияние и работу с пигментацией в мягких концентрах.",
            "AHA/BHA помогают с текстурой и окклюзией пор, но повышают чувствительность к солнцу — SPF обязателен. Начинают с редких применений и коротких контактов, если кожа чувствительная.",
          ],
        },
        {
          heading: "Ретиноиды",
          paragraphs: [
            "Ретиноиды — рабочая группа для акне и фото старения, но требуют постепенного введения и терпения к шелушению на старте у многих людей.",
            "Наносите на сухую кожу после увлажнения («сэндвич») или через день; при сильном жжении сокращайте частоту, а не добивайте кожу.",
          ],
        },
        {
          heading: "Когда нужен врач или косметолог",
          paragraphs: [
            "Болезненное акне, подозрение на розацеа, резкое ухудшение при любом средстве, беременность и планирование — повод к очной консультации, а не к экспериментам из интернета.",
          ],
        },
      ],
    },
    en: {
      title: "Actives for beginners: acids, retinoids, niacinamide — where to start",
      excerpt:
        "No panic, no kitchen-sink layering: how to introduce, tolerate, and when to see a pro.",
      sections: [
        {
          heading: "Baseline first",
          paragraphs: [
            "If even a basic cream stings daily or SPF isn’t consistent, stacking strong actives won’t help—fix cleansing, hydration, and protection first.",
            "Add one new product at a time for 2–3 weeks to attribute reactions clearly.",
          ],
        },
        {
          heading: "Niacinamide and acids",
          paragraphs: [
            "Niacinamide is often well tolerated, supporting barrier, glow, and pigment at gentle strengths.",
            "AHAs/BHAs refine texture and pore occlusion but increase sun sensitivity—SPF is mandatory. Start with fewer nights or shorter contact if sensitive.",
          ],
        },
        {
          heading: "Retinoids",
          paragraphs: [
            "Retinoids help acne and photoaging but need ramping and patience with early peeling for many users.",
            "Apply to dry skin after moisturizer (sandwich) or every other night; if burning is intense, reduce frequency instead of pushing through.",
          ],
        },
        {
          heading: "When to see a clinician",
          paragraphs: [
            "Painful acne, suspected rosacea, sudden worsening with any product, pregnancy, or planning pregnancy warrant in-person guidance—not experimental stacks from blogs.",
          ],
        },
      ],
    },
  },
];
