// ========== DATA ==========

const quizSteps = [
  {
    id: 'concern',
    question: 'What is your primary concern?',
    hint: 'Choose the one that bothers you the most',
    options: [
      { icon: '🔴', label: 'Acne & Breakouts', desc: 'Pimples, blackheads, whiteheads, oily skin' },
      { icon: '🌑', label: 'Pigmentation & Dark Spots', desc: 'Uneven tone, dark marks, sun damage' },
      { icon: '💧', label: 'Dryness & Dehydration', desc: 'Flaky, tight, rough or dull skin' },
      { icon: '💇', label: 'Hair Fall', desc: 'Excessive shedding, thinning, weak hair' },
      { icon: '❄️', label: 'Dandruff', desc: 'Flakes, itchy scalp, scalp buildup' },
      { icon: '✨', label: 'Anti-Aging & Glow', desc: 'Fine lines, dullness, loss of firmness' },
    ]
  },
  {
    id: 'skinType',
    question: 'What is your skin / scalp type?',
    hint: 'How does your skin feel by afternoon?',
    options: [
      { icon: '💦', label: 'Oily', desc: 'Shiny, greasy, large pores' },
      { icon: '🌵', label: 'Dry', desc: 'Tight, flaky, rough texture' },
      { icon: '⚖️', label: 'Combination', desc: 'Oily T-zone, dry cheeks' },
      { icon: '🌸', label: 'Sensitive', desc: 'Reacts easily, redness, irritation' },
      { icon: '😶', label: 'Normal', desc: 'Balanced, minimal issues' },
    ]
  },
  {
    id: 'age',
    question: 'What is your age group?',
    hint: 'Skin needs change with age',
    options: [
      { icon: '🧑', label: 'Under 20', desc: 'Hormonal changes, acne-prone phase' },
      { icon: '👩', label: '20-30', desc: 'Prevention & correction focus' },
      { icon: '🧑‍💼', label: '30-40', desc: 'Anti-aging & maintenance' },
      { icon: '🧓', label: '40+', desc: 'Deep repair & firming' },
    ]
  },
  {
    id: 'lifestyle',
    question: 'How would you describe your lifestyle?',
    hint: 'This affects which products suit you best',
    options: [
      { icon: '💻', label: 'Mostly Indoors', desc: 'AC & screen exposure, less sun' },
      { icon: '🌞', label: 'High Sun Exposure', desc: 'Outdoors a lot, sweat & UV damage' },
      { icon: '🏃', label: 'Very Active', desc: 'Workout daily, frequent sweating' },
      { icon: '😴', label: 'Irregular Sleep', desc: 'Stress, late nights, fast food' },
    ]
  },
  {
    id: 'sensitivity',
    question: 'Have you had reactions to skincare before?',
    hint: 'Helps us pick safe, gentle ingredients for you',
    options: [
      { icon: '✅', label: 'Never', desc: 'Most products work fine for me' },
      { icon: '⚠️', label: 'Once or twice', desc: 'Minor irritation occasionally' },
      { icon: '😬', label: 'Frequently', desc: 'My skin reacts to many products' },
      { icon: '🤷', label: 'Not sure', desc: 'Have not tried many products yet' },
    ]
  },
  {
    id: 'routine',
    question: 'How consistent can you be?',
    hint: 'Be honest — we will build a routine you can actually follow',
    options: [
      { icon: '✅', label: 'Every day', desc: 'I can do morning + night routine daily' },
      { icon: '📅', label: 'Most days', desc: '5-6 days a week, sometimes I forget' },
      { icon: '😅', label: 'Very busy', desc: 'Need a minimal 2-3 step routine' },
      { icon: '🌙', label: 'Night only', desc: 'I only have time at night' },
    ]
  },
  {
    id: 'budget',
    question: 'Monthly skincare / haircare budget?',
    hint: 'We will recommend products that fit your budget',
    options: [
      { icon: '💰', label: 'Under 500', desc: 'Budget-friendly, affordable options' },
      { icon: '💳', label: '500 to 1500', desc: 'Mid-range, good quality products' },
      { icon: '💎', label: '1500 to 3000', desc: 'Premium, highly effective formulas' },
      { icon: '👑', label: 'No limit', desc: 'Best of the best, price does not matter' },
    ]
  },
];

const productDatabase = {
  'Acne & Breakouts': {
    'Oily': [
      { name: 'Be Bodywise 2% Salicylic Acid Face Wash', tag: 'Cleanser', price: '₹299', desc: 'Unclogs pores and controls oil production', why: 'SA targets acne-causing bacteria and excess sebum on oily skin', img: 'https://www.bebodywise.com/cdn/shop/files/salicylic-acid-facewash-100ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/2-salicylic-acid-face-wash', amazon: 'https://www.amazon.in/s?k=be+bodywise+salicylic+acid+face+wash' },
      { name: 'Be Bodywise 10% Niacinamide Serum', tag: 'Serum', price: '₹549', desc: 'Reduces pore size, controls oil, fades blemish marks', why: 'Best ingredient for oily + acne combo — clinically proven', img: 'https://www.bebodywise.com/cdn/shop/files/niacinamide-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/10-niacinamide-face-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+niacinamide+serum' },
      { name: 'Be Bodywise SPF 40 Sunscreen Gel', tag: 'Sunscreen', price: '₹399', desc: 'Lightweight, non-comedogenic, oil-free daily protection', why: 'Hydrates without clogging pores — essential for acne-prone skin', img: 'https://www.bebodywise.com/cdn/shop/files/spf-40-sunscreen.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/spf-40-pa-sunscreen', amazon: 'https://www.amazon.in/s?k=be+bodywise+spf+40+sunscreen' },
    ],
    'Dry': [
      { name: 'Be Bodywise Hyaluronic Acid Face Wash', tag: 'Cleanser', price: '₹299', desc: 'Non-stripping, hydrating face wash for dry skin', why: 'Cleans gently without removing natural oils — dry skin needs this', img: 'https://www.bebodywise.com/cdn/shop/files/hyaluronic-acid-face-wash.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/hyaluronic-acid-face-wash', amazon: 'https://www.amazon.in/s?k=be+bodywise+hyaluronic+acid+face+wash' },
      { name: 'Be Bodywise 10% Niacinamide Serum', tag: 'Serum', price: '₹549', desc: 'Treats acne while keeping skin hydrated and calm', why: 'Gentler than SA for dry skin — works on acne + dryness together', img: 'https://www.bebodywise.com/cdn/shop/files/niacinamide-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/10-niacinamide-face-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+niacinamide+serum' },
      { name: 'Be Bodywise 1% Hyaluronic Acid Serum', tag: 'Moisturizer', price: '₹449', desc: 'Repairs skin barrier and locks in deep hydration', why: 'Dry acne-prone skin needs barrier repair — HA is the best hydrator', img: 'https://www.bebodywise.com/cdn/shop/files/ha-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/1-hyaluronic-acid-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+hyaluronic+acid+serum' },
    ],
    'Combination': [
      { name: 'Be Bodywise 2% Salicylic Acid Face Wash', tag: 'Cleanser', price: '₹299', desc: 'Balances oily T-zone while being gentle on dry areas', why: 'Combination skin needs a cleanser that does not over-strip or over-moisturize', img: 'https://www.bebodywise.com/cdn/shop/files/salicylic-acid-facewash-100ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/2-salicylic-acid-face-wash', amazon: 'https://www.amazon.in/s?k=be+bodywise+salicylic+acid+face+wash' },
      { name: 'Be Bodywise 10% Niacinamide Serum', tag: 'Serum', price: '₹549', desc: 'Controls oil in T-zone, reduces blemishes across face', why: 'Zinc + Niacinamide combo works perfectly for combination skin', img: 'https://www.bebodywise.com/cdn/shop/files/niacinamide-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/10-niacinamide-face-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+niacinamide+serum' },
      { name: 'Be Bodywise SPF 40 Sunscreen Gel', tag: 'Sunscreen', price: '₹399', desc: 'Gel-based SPF, non-greasy, suits combination skin', why: 'Sun protection without adding extra oil to T-zone', img: 'https://www.bebodywise.com/cdn/shop/files/spf-40-sunscreen.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/spf-40-pa-sunscreen', amazon: 'https://www.amazon.in/s?k=be+bodywise+spf+40+sunscreen' },
    ],
    'Sensitive': [
      { name: 'Be Bodywise Hyaluronic Acid Face Wash', tag: 'Cleanser', price: '₹299', desc: 'Gentle, soothing face wash for reactive skin', why: 'No harsh chemicals — safe for the most sensitive skin types', img: 'https://www.bebodywise.com/cdn/shop/files/hyaluronic-acid-face-wash.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/hyaluronic-acid-face-wash', amazon: 'https://www.amazon.in/s?k=be+bodywise+hyaluronic+acid+face+wash' },
      { name: 'Be Bodywise 10% Niacinamide Serum', tag: 'Serum', price: '₹549', desc: 'Calms redness, reduces acne, safe for sensitive skin', why: 'Gentlest acne treatment for reactive skin types', img: 'https://www.bebodywise.com/cdn/shop/files/niacinamide-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/10-niacinamide-face-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+niacinamide+serum' },
      { name: 'Be Bodywise 1% Hyaluronic Acid Serum', tag: 'Moisturizer', price: '₹449', desc: 'Fragrance-free, calms sensitive skin, repairs barrier', why: 'Sensitive skin needs fragrance-free, minimal ingredient products', img: 'https://www.bebodywise.com/cdn/shop/files/ha-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/1-hyaluronic-acid-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+hyaluronic+acid+serum' },
    ],
    'Normal': [
      { name: 'Be Bodywise 2% Salicylic Acid Face Wash', tag: 'Cleanser', price: '₹299', desc: 'Unclogs pores and keeps skin clear', why: 'Works well for normal skin prone to occasional breakouts', img: 'https://www.bebodywise.com/cdn/shop/files/salicylic-acid-facewash-100ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/2-salicylic-acid-face-wash', amazon: 'https://www.amazon.in/s?k=be+bodywise+salicylic+acid+face+wash' },
      { name: 'Be Bodywise 10% Niacinamide Serum', tag: 'Serum', price: '₹549', desc: 'Prevents breakouts, evens skin tone', why: 'Maintenance dose of niacinamide keeps normal skin clear', img: 'https://www.bebodywise.com/cdn/shop/files/niacinamide-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/10-niacinamide-face-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+niacinamide+serum' },
      { name: 'Be Bodywise SPF 40 Sunscreen Gel', tag: 'Sunscreen', price: '₹399', desc: 'Daily hydration + sun protection', why: 'Normal skin needs hydration + SPF as basic protection', img: 'https://www.bebodywise.com/cdn/shop/files/spf-40-sunscreen.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/spf-40-pa-sunscreen', amazon: 'https://www.amazon.in/s?k=be+bodywise+spf+40+sunscreen' },
    ],
  },
  'Pigmentation & Dark Spots': {
    'Oily': [
      { name: 'Be Bodywise Vitamin C 15% Serum', tag: 'Brightening Serum', price: '₹649', desc: 'Brightens skin, fades dark spots, lightweight formula', why: 'Vitamin C on oily skin needs a lightweight, water-based formula', img: 'https://www.bebodywise.com/cdn/shop/files/vitamin-c-serum.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/15-vitamin-c-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+vitamin+c+serum' },
      { name: 'Be Bodywise 10% Niacinamide Serum', tag: 'Spot Treatment', price: '₹549', desc: 'Targets dark spots, controls oil, minimizes pores', why: 'Niacinamide works on melanin production — ideal for oily skin', img: 'https://www.bebodywise.com/cdn/shop/files/niacinamide-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/10-niacinamide-face-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+niacinamide+serum' },
      { name: 'Be Bodywise SPF 50 Sunscreen', tag: 'Sunscreen', price: '₹449', desc: 'Gel-based SPF 50, oil-free, prevents new spots', why: 'UV exposure is the #1 cause of pigmentation — SPF 50 is non-negotiable', img: 'https://www.bebodywise.com/cdn/shop/files/spf-40-sunscreen.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/spf-40-pa-sunscreen', amazon: 'https://www.amazon.in/s?k=be+bodywise+spf+50+sunscreen' },
    ],
    'default': [
      { name: 'Be Bodywise Vitamin C 15% Serum', tag: 'Brightening Serum', price: '₹649', desc: 'Brightens skin and fades dark spots', why: 'Vitamin C is clinically proven for hyperpigmentation', img: 'https://www.bebodywise.com/cdn/shop/files/vitamin-c-serum.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/15-vitamin-c-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+vitamin+c+serum' },
      { name: 'Be Bodywise 10% Niacinamide Serum', tag: 'Spot Treatment', price: '₹549', desc: 'Targets dark spots and uneven tone', why: 'Works on melanin production directly — faster visible results', img: 'https://www.bebodywise.com/cdn/shop/files/niacinamide-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/10-niacinamide-face-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+niacinamide+serum' },
      { name: 'Be Bodywise SPF 40 Sunscreen', tag: 'Sunscreen', price: '₹399', desc: 'Non-negotiable for pigmentation treatment', why: 'UV rays make pigmentation worse — SPF is a must every single day', img: 'https://www.bebodywise.com/cdn/shop/files/spf-40-sunscreen.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/spf-40-pa-sunscreen', amazon: 'https://www.amazon.in/s?k=be+bodywise+spf+40+sunscreen' },
    ],
  },
  'Dryness & Dehydration': {
    'default': [
      { name: 'Be Bodywise 1% Hyaluronic Acid Serum', tag: 'Hydration Serum', price: '₹449', desc: 'Intense hydration for all skin types, plumps skin', why: 'HA holds 1000x its weight in water — best hydration ingredient', img: 'https://www.bebodywise.com/cdn/shop/files/ha-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/1-hyaluronic-acid-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+hyaluronic+acid+serum' },
      { name: 'Be Bodywise 10% Niacinamide Serum', tag: 'Barrier Repair', price: '₹549', desc: 'Strengthens skin barrier, reduces dryness and redness', why: 'Niacinamide builds ceramides naturally — repairs dryness from within', img: 'https://www.bebodywise.com/cdn/shop/files/niacinamide-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/10-niacinamide-face-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+niacinamide+serum' },
      { name: 'Be Bodywise Hyaluronic Acid Face Wash', tag: 'Cleanser', price: '₹299', desc: 'Hydrating cleanser that does not strip skin', why: 'Dry skin needs a non-foaming milky cleanser — foam removes natural oils', img: 'https://www.bebodywise.com/cdn/shop/files/hyaluronic-acid-face-wash.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/hyaluronic-acid-face-wash', amazon: 'https://www.amazon.in/s?k=be+bodywise+hyaluronic+acid+face+wash' },
    ],
  },
  'Hair Fall': {
    'default': [
      { name: 'Be Bodywise 5% Minoxidil + Redensyl Serum', tag: 'Scalp Serum', price: '₹799', desc: 'Reduces hair fall from root, stimulates new growth', why: 'Clinically proven formula — Redensyl activates dormant hair follicles', img: 'https://www.bebodywise.com/cdn/shop/files/minoxidil-serum.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/minoxidil-5-redensyl-hair-growth-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+minoxidil+redensyl+serum' },
      { name: 'Be Bodywise Biotin Gummies', tag: 'Supplement', price: '₹599', desc: 'Nourishes hair from inside — addresses root cause', why: 'Most hair fall has an internal nutritional cause — Biotin supplements fix this', img: 'https://www.bebodywise.com/cdn/shop/files/biotin-gummies.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/biotin-gummies-for-hair-growth', amazon: 'https://www.amazon.in/s?k=be+bodywise+biotin+gummies' },
      { name: 'Be Bodywise Anti-Hairfall Shampoo', tag: 'Shampoo', price: '₹449', desc: 'Strengthens roots, reduces breakage, nourishes scalp', why: 'Caffeine in shampoo boosts circulation to hair follicles — proven in studies', img: 'https://www.bebodywise.com/cdn/shop/files/anti-hairfall-shampoo.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/anti-hairfall-shampoo', amazon: 'https://www.amazon.in/s?k=be+bodywise+anti+hairfall+shampoo' },
    ],
  },
  'Dandruff': {
    'default': [
      { name: 'Be Bodywise Anti-Dandruff Shampoo', tag: 'Shampoo', price: '₹449', desc: 'Targets fungal cause of dandruff, clears flakes fast', why: 'Most dandruff is fungal — zinc pyrithione is the proven treatment', img: 'https://www.bebodywise.com/cdn/shop/files/anti-dandruff-shampoo.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/anti-dandruff-shampoo', amazon: 'https://www.amazon.in/s?k=be+bodywise+anti+dandruff+shampoo' },
      { name: 'Be Bodywise 2% Salicylic Acid Face Wash', tag: 'Scalp Scrub', price: '₹299', desc: 'Removes flakes and soothes itchy scalp buildup', why: 'Exfoliates built-up dead skin that causes and worsens dandruff', img: 'https://www.bebodywise.com/cdn/shop/files/salicylic-acid-facewash-100ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/2-salicylic-acid-face-wash', amazon: 'https://www.amazon.in/s?k=be+bodywise+salicylic+acid' },
      { name: 'Be Bodywise Biotin Gummies', tag: 'Supplement', price: '₹599', desc: 'Strengthens hair and scalp from within', why: 'Biotin deficiency worsens scalp conditions — supplements improve scalp health', img: 'https://www.bebodywise.com/cdn/shop/files/biotin-gummies.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/biotin-gummies-for-hair-growth', amazon: 'https://www.amazon.in/s?k=be+bodywise+biotin+gummies' },
    ],
  },
  'Anti-Aging & Glow': {
    'default': [
      { name: 'Be Bodywise Vitamin C 15% Serum', tag: 'Glow Serum', price: '₹649', desc: 'Brightens, firms skin and protects from free radicals', why: 'Vitamin C is the #1 anti-aging brightening ingredient — use every morning', img: 'https://www.bebodywise.com/cdn/shop/files/vitamin-c-serum.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/15-vitamin-c-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+vitamin+c+serum' },
      { name: 'Be Bodywise 1% Hyaluronic Acid Serum', tag: 'Plumping Serum', price: '₹449', desc: 'Plumps fine lines, restores youthful hydration', why: 'HA fills in fine lines instantly by pulling moisture into skin cells', img: 'https://www.bebodywise.com/cdn/shop/files/ha-serum-30ml.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/1-hyaluronic-acid-serum', amazon: 'https://www.amazon.in/s?k=be+bodywise+hyaluronic+acid+serum' },
      { name: 'Be Bodywise SPF 40 Sunscreen Gel', tag: 'Sunscreen', price: '₹399', desc: 'Daily UV protection — the best anti-aging product', why: 'SPF prevents 80% of visible aging — more effective than any serum', img: 'https://www.bebodywise.com/cdn/shop/files/spf-40-sunscreen.jpg?v=1699965337&width=400', link: 'https://www.bebodywise.com/products/spf-40-pa-sunscreen', amazon: 'https://www.amazon.in/s?k=be+bodywise+spf+40+sunscreen' },
    ],
  },
};

const routineTemplates = {
  'Acne & Breakouts': {
    morning: [
      { name: 'Salicylic Acid Face Wash', desc: 'Wash face for 60 seconds, rinse with cold water' },
      { name: 'Niacinamide Serum', desc: '3-4 drops, press gently — do not rub' },
      { name: 'Oil-Free Moisturizer + SPF', desc: 'Apply SPF generously — never skip this step' },
    ],
    night: [
      { name: 'Salicylic Acid Face Wash', desc: 'Double cleanse if you wore makeup or sunscreen' },
      { name: 'Niacinamide Serum', desc: 'Apply on clean dry skin — wait 30 seconds' },
      { name: 'Spot Treatment', desc: 'Dab only on active pimples — do not spread' },
      { name: 'Light Moisturizer', desc: 'Lock in moisture so skin repairs overnight' },
    ]
  },
  'Pigmentation & Dark Spots': {
    morning: [
      { name: 'Gentle Cleanser', desc: 'Mild cleanse to remove overnight products' },
      { name: 'Vitamin C Serum', desc: '3-4 drops — wait 5 min before next step' },
      { name: 'Moisturizer', desc: 'Seal in the Vitamin C serum' },
      { name: 'SPF 50 Sunscreen', desc: 'Most important step — reapply every 2 hrs outdoors' },
    ],
    night: [
      { name: 'Gentle Cleanser', desc: 'Remove all sunscreen and pollution thoroughly' },
      { name: 'Alpha Arbutin Serum', desc: 'Focus on dark spot areas — 2-3 drops' },
      { name: 'Moisturizer', desc: 'Heavier cream at night is fine — skin repairs as you sleep' },
    ]
  },
  'Dryness & Dehydration': {
    morning: [
      { name: 'Milky Gentle Cleanser', desc: 'Never use foaming cleanser — it strips moisture' },
      { name: 'Hyaluronic Acid Serum', desc: 'Apply on damp skin for maximum absorption' },
      { name: 'Ceramide Barrier Cream', desc: 'Lock in the HA serum moisture' },
      { name: 'SPF Moisturizer', desc: 'Choose an SPF with moisturizing base' },
    ],
    night: [
      { name: 'Milky Cleanser', desc: 'Gentle cleanse — never over-wash dry skin' },
      { name: 'Hyaluronic Acid Serum', desc: '4-5 drops on damp skin before bed' },
      { name: 'Ceramide Barrier Cream', desc: 'Apply generously — overnight is best time for repair' },
    ]
  },
  'Hair Fall': {
    morning: [
      { name: 'Biotin + DHT Blocker Tablet', desc: 'Take with breakfast — consistency every day is key' },
      { name: 'Caffeine Scalp Serum', desc: 'Apply on dry scalp on non-wash days — massage in' },
    ],
    night: [
      { name: 'Redensyl Shampoo', desc: 'Wash 2-3 times a week — massage scalp 2 minutes minimum' },
      { name: 'Scalp Oil Massage', desc: 'On rest days — 10-15 min massage, boosts blood flow' },
    ]
  },
  'Dandruff': {
    morning: [
      { name: 'Ketoconazole Shampoo', desc: 'Use 2x per week — leave on scalp 2 minutes before rinsing' },
      { name: 'Tea Tree Conditioner', desc: 'Apply on lengths only — not on scalp' },
    ],
    night: [
      { name: 'Salicylic Acid Scalp Scrub', desc: 'Use once a week to remove flake buildup' },
      { name: 'Light Scalp Oil', desc: 'On non-wash days — tea tree oil diluted in coconut oil' },
    ]
  },
  'Anti-Aging & Glow': {
    morning: [
      { name: 'Gentle Cleanser', desc: 'Start fresh — never use harsh soaps' },
      { name: 'Vitamin C + E Serum', desc: '3-4 drops — antioxidant protection for the day' },
      { name: 'SPF 50 Moisturizer', desc: 'SPF is your best anti-aging product — use every day' },
    ],
    night: [
      { name: 'Gentle Cleanser', desc: 'Remove all pollution and sunscreen' },
      { name: 'Peptide Eye Cream', desc: 'Gently pat around eye area — never rub' },
      { name: 'Retinol 0.2% Night Serum', desc: 'Start 2x per week — increase slowly over months' },
    ]
  },
  'default': {
    morning: [
      { name: 'Gentle Cleanser', desc: 'Start fresh every morning' },
      { name: 'Targeted Serum', desc: 'Apply recommended serum for your concern' },
      { name: 'Moisturizer with SPF', desc: 'Always protect with sunscreen' },
    ],
    night: [
      { name: 'Cleanser', desc: 'Remove dirt and pollution from the day' },
      { name: 'Active Serum', desc: 'Night is the best time for actives' },
      { name: 'Nourishing Moisturizer', desc: 'Let skin repair while you sleep' },
    ]
  }
};

const chatKnowledge = {
  greetings: ['hi', 'hello', 'hey', 'namaste', 'hii', 'helo'],
  keywords: {
    'niacinamide': `**Niacinamide (Vitamin B3)** is one of the best skincare ingredients! ✨\n\n• Controls oil and minimizes pores\n• Fades dark spots and redness\n• Strengthens skin barrier\n• Safe to use daily (AM + PM)\n\nBe Bodywise 10% Niacinamide Serum is ideal for oily or acne-prone skin.`,
    'salicylic': `**Salicylic Acid (BHA)** is a must-have for acne-prone skin! 🎯\n\n• Goes inside pores and dissolves oil\n• Reduces blackheads and whiteheads\n• Anti-inflammatory — calms redness\n• Start with 2-3x per week if new\n\nBe Bodywise 2% Salicylic Acid Face Wash is the best starting point.`,
    'vitamin c': `**Vitamin C** is the gold standard for brightening! ☀️\n\n• Fades dark spots and pigmentation\n• Boosts collagen production\n• Protects from UV damage\n• Best used in the morning\n\nAlways pair with SPF — Vitamin C + sunscreen together is very powerful!`,
    'retinol': `**Retinol** is the anti-aging superstar! 🌟\n\n• Reduces fine lines and wrinkles\n• Evens skin tone\n• Speeds up cell turnover\n\n⚠️ Start at 0.2% — use only 2x per week at night. Always use SPF next morning. Not for pregnant women.`,
    'hair fall': `**Hair fall causes and solutions:** 💇\n\n**Common causes:**\n• Low iron, biotin, protein\n• Hormonal issues (PCOS, thyroid)\n• Stress and poor sleep\n• Wrong shampoo or over-washing\n\n**What helps:**\n• Be Bodywise Biotin + DHT Blocker tablets\n• Redensyl shampoo 2-3x per week\n• Caffeine scalp serum daily\n• Scalp massage 10-15 min\n\nIf sudden or severe — see a dermatologist.`,
    'dandruff': `**Dandruff** is usually caused by a fungus called Malassezia. 🍄\n\n**Treatment:**\n• Ketoconazole 2% shampoo — 2x per week\n• Salicylic acid scalp scrub weekly\n• Tea tree conditioner for maintenance\n• Avoid hot water on scalp\n\nGive it 2-4 weeks before judging results.`,
    'results': `**How long do products take to work?** ⏱️\n\n• Hydration: 1-3 days\n• Acne control: 2-4 weeks\n• Dark spots: 6-12 weeks\n• Hair fall reduction: 8-16 weeks\n• Anti-aging: 12+ weeks\n\nKey rule: Give any product at least 4-6 weeks before giving up. Track your progress weekly!`,
    'oily skin': `**Tips for oily skin:** 💧\n\n• Never skip moisturizer — dry skin makes MORE oil\n• Use gel-based, oil-free products\n• Niacinamide is your best friend\n• Clay mask 1-2x per week\n• Avoid harsh soaps — they make oiliness worse\n\nBest routine: Salicylic acid cleanser + Niacinamide serum + Oil-free SPF`,
    'dry skin': `**Tips for dry skin:** 🌵\n\n• Use cream or milk cleansers only\n• Layer hydration: HA serum then moisturizer\n• Ceramide cream repairs your skin barrier\n• Avoid alcohol-based products\n• Apply moisturizer on damp skin — locks moisture in\n\nKey ingredients: Hyaluronic Acid, Ceramides, Glycerin`,
    'spf': `**Why SPF is non-negotiable:** ☀️\n\n• Prevents dark spots and pigmentation\n• Protects from UV-induced aging\n• Use even on cloudy days and indoors\n• Reapply every 2 hours outdoors\n\nFor oily skin: Gel-based SPF 40-50\nFor dry skin: Cream SPF with moisturizing base\n\nNo skincare routine works properly without SPF!`,
    'sensitive': `**Sensitive skin care:** 🌸\n\n• Patch test every new product on inner arm for 24 hrs\n• Introduce one new product at a time only\n• Avoid: fragrances, alcohol, essential oils\n• Safe ingredients: Centella Asiatica, Aloe Vera, Ceramides\n• Use fragrance-free everything\n\nLess is more for sensitive skin — 3 steps is enough.`,
    'budget': `**Budget routine under Rs 1000:** 💰\n\n• Face wash: Rs 150-250\n• Niacinamide serum: Rs 300-400\n• Moisturizer: Rs 200-300\n• Sunscreen: Rs 250-350\n\nConsistency beats luxury — affordable ingredients work just as well as expensive ones.`,
    'pcos': `**PCOS and skin or hair concerns:** 🌿\n\n**Common PCOS issues:**\n• Hormonal acne on chin and jawline\n• Hair thinning and fall\n• Pigmentation on neck and underarms\n\n**What helps:**\n• Spearmint tea for hormonal acne\n• Inositol supplements (consult doctor)\n• DHT-blocking haircare products\n• Niacinamide for acne + pigmentation\n\nAlways consult a gynecologist for PCOS.`,
  }
};

// ========== STATE ==========
let currentStep = 0;
let quizAnswers = {};
let quizStarted = false;
let ratings = { skin: 0, consistency: 0 };
let progressData = JSON.parse(localStorage.getItem('bbProgressData') || '[]');
let savedRoutine = JSON.parse(localStorage.getItem('bbRoutine') || 'null');
let chatOpen = false;

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderQuiz();
  renderTracker();
  renderRoutinePage();
  updateProgressChart();
  setTimeout(() => {
    const bar = document.getElementById('heroBar');
    const pct = document.getElementById('heroPercent');
    if (bar) bar.style.width = '72%';
    if (pct) pct.textContent = '72%';
  }, 700);
  setTimeout(() => showToast('Welcome to Be Bodywise! Take the free quiz to get started 🌿'), 1600);
  setTimeout(restoreReminders, 600);
});

// ========== NAVIGATION ==========
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'tracker') setTimeout(updateProgressChart, 100);
}

// ========== QUIZ ==========
function renderQuiz() {
  const body = document.getElementById('quizBody');
  if (!body) return;

  body.innerHTML = `
    <div id="quizLanding" class="quiz-landing">
      <div class="ql-icon">🌿</div>
      <h3>Ready to find your perfect skincare routine?</h3>
      <p>Answer 7 quick questions about your skin, lifestyle and budget.<br/>Get a personalized product plan in under 2 minutes.</p>
      <div class="ql-points">
        <div class="ql-point"><span>✓</span> Products matched to your exact skin type</div>
        <div class="ql-point"><span>✓</span> Budget-aware recommendations</div>
        <div class="ql-point"><span>✓</span> Morning and night routine included</div>
      </div>
      <button class="btn-primary ql-btn" onclick="startQuiz()">Start My Skin Quiz →</button>
    </div>
    <div id="quizSteps" style="display:none">
      ${quizSteps.map((step, i) => `
        <div class="quiz-step ${i === 0 ? 'active' : ''}" id="step-${i}">
          <div class="quiz-step-q">${step.question}</div>
          <div class="quiz-step-hint">${step.hint}</div>
          <div class="options-grid ${step.options.length <= 4 ? 'cols-1' : ''}">
            ${step.options.map((opt, oi) => `
              <button class="option-btn" data-step="${i}" data-oi="${oi}" onclick="selectOption(this, '${step.id}', ${i}, ${oi})">
                <div class="opt-icon-wrap">${opt.icon}</div>
                <div class="opt-text">
                  <div class="opt-label">${opt.label}</div>
                  <div class="opt-desc">${opt.desc}</div>
                </div>
                <div class="opt-radio"></div>
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  renderStepDots();
  updateQuizProgress();
  document.getElementById('prevBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
}

function startQuiz() {
  quizStarted = true;
  currentStep = 0;
  quizAnswers = {};
  // Reset all selected options
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('quizLanding').style.display = 'none';
  document.getElementById('quizSteps').style.display = 'block';
  document.getElementById('nextBtn').style.display = 'inline-flex';
  document.getElementById('nextBtn').textContent = 'Next →';
  document.getElementById('prevBtn').style.display = 'none';
  document.querySelectorAll('.quiz-step').forEach((s, i) => s.classList.toggle('active', i === 0));
  updateQuizProgress();
}

function renderStepDots() {
  const container = document.getElementById('stepDots');
  if (!container) return;
  container.innerHTML = quizSteps.map((_, i) => `<div class="step-dot" id="dot-${i}"></div>`).join('');
}

function updateStepDots() {
  quizSteps.forEach((_, i) => {
    const dot = document.getElementById('dot-' + i);
    if (!dot) return;
    dot.className = 'step-dot';
    if (i < currentStep) dot.classList.add('done');
    else if (i === currentStep) dot.classList.add('active');
  });
}

// KEY FIX: use index instead of label string to avoid quote/encoding issues
function selectOption(btn, stepId, stepIndex, optIndex) {
  btn.closest('.options-grid').querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  // Store the actual label value from the data array
  quizAnswers[stepId] = quizSteps[stepIndex].options[optIndex].label;
}

function quizNext() {
  if (!quizStarted) return;
  const stepId = quizSteps[currentStep].id;
  if (!quizAnswers[stepId]) {
    showToast('Please select an option to continue 👆');
    return;
  }
  if (currentStep < quizSteps.length - 1) {
    document.getElementById('step-' + currentStep).classList.remove('active');
    currentStep++;
    document.getElementById('step-' + currentStep).classList.add('active');
    document.getElementById('prevBtn').style.display = 'inline-flex';
    document.getElementById('nextBtn').textContent =
      currentStep === quizSteps.length - 1 ? 'See My Results →' : 'Next →';
    updateQuizProgress();
  } else {
    showResults();
  }
}

function quizPrev() {
  if (!quizStarted || currentStep === 0) return;
  document.getElementById('step-' + currentStep).classList.remove('active');
  currentStep--;
  document.getElementById('step-' + currentStep).classList.add('active');
  document.getElementById('nextBtn').textContent =
    currentStep === quizSteps.length - 1 ? 'See My Results →' : 'Next →';
  if (currentStep === 0) document.getElementById('prevBtn').style.display = 'none';
  updateQuizProgress();
}

function updateQuizProgress() {
  if (!quizStarted) {
    document.getElementById('quizProgressBar').style.width = '0%';
    document.getElementById('quizStepLabel').textContent = 'Ready to start';
    return;
  }
  const pct = ((currentStep + 1) / quizSteps.length) * 100;
  document.getElementById('quizProgressBar').style.width = pct + '%';
  document.getElementById('quizStepLabel').textContent = `Step ${currentStep + 1} of ${quizSteps.length}`;
  updateStepDots();
}

// ========== RESULTS ==========
function showResults() {
  const concern = quizAnswers.concern || 'Acne & Breakouts';
  const skinType = quizAnswers.skinType || 'Oily';
  const budget = quizAnswers.budget || '500 to 1500';

  // Match product database — try exact skin type, then default
  const db = productDatabase[concern] || productDatabase['Acne & Breakouts'];
  let products = db[skinType] || db['default'] || Object.values(db)[0];

  // Budget filter
  if (budget === 'Under 500') {
    products = products.map(p => ({
      ...p,
      price: '₹' + Math.round(parseInt(p.price.replace(/[^\d]/g, '')) * 0.68 / 10) * 10
    }));
  }

  // Set header
  document.getElementById('resultsTitle').textContent = concern + ' · ' + skinType + ' Skin';
  document.getElementById('resultsSubtitle').textContent =
    'Age: ' + (quizAnswers.age || '—') + ' · ' + (quizAnswers.lifestyle || '') + ' · Budget: ' + budget;
  document.getElementById('matchScore').textContent = (88 + Math.floor(Math.random() * 10)) + '%';

  // Render products
  const grid = document.getElementById('resultsGrid');
  if (!grid) { console.error('resultsGrid not found'); return; }

  const tagEmoji = {
    'Cleanser': '🧴', 'Serum': '💧', 'Moisturizer': '🌿', 'Sunscreen': '☀️',
    'Brightening Serum': '✨', 'Spot Treatment': '🎯', 'Hydration Serum': '💦',
    'Barrier Repair': '🛡️', 'Shampoo': '🚿', 'Supplement': '💊', 'Scalp Serum': '💆',
    'Glow Serum': '🌟', 'Plumping Serum': '🫧', 'Night Serum': '🌙',
    'Day Serum': '🌅', 'Eye Cream': '👁️', 'Conditioner': '🌊', 'Treatment': '🩺',
    'Scalp Scrub': '🌿',
  };

  const tagGradient = {
    'Cleanser': 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
    'Serum': 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
    'Moisturizer': 'linear-gradient(135deg, #f1f8e9, #dcedc8)',
    'Sunscreen': 'linear-gradient(135deg, #fff8e1, #ffecb3)',
    'Brightening Serum': 'linear-gradient(135deg, #fff9c4, #fff176)',
    'Spot Treatment': 'linear-gradient(135deg, #fce4ec, #f8bbd9)',
    'Hydration Serum': 'linear-gradient(135deg, #e0f7fa, #b2ebf2)',
    'Barrier Repair': 'linear-gradient(135deg, #ede7f6, #d1c4e9)',
    'Shampoo': 'linear-gradient(135deg, #e8eaf6, #c5cae9)',
    'Supplement': 'linear-gradient(135deg, #e8f5e9, #a5d6a7)',
    'Scalp Serum': 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
    'Glow Serum': 'linear-gradient(135deg, #fff8e1, #ffe082)',
    'Plumping Serum': 'linear-gradient(135deg, #e0f7fa, #80deea)',
    'Night Serum': 'linear-gradient(135deg, #e8eaf6, #9fa8da)',
    'Day Serum': 'linear-gradient(135deg, #fff9c4, #ffcc02)',
    'Eye Cream': 'linear-gradient(135deg, #fce4ec, #ef9a9a)',
    'Conditioner': 'linear-gradient(135deg, #e0f2f1, #80cbc4)',
    'Treatment': 'linear-gradient(135deg, #e8f5e9, #81c784)',
    'Scalp Scrub': 'linear-gradient(135deg, #efebe9, #bcaaa4)',
  };

  grid.innerHTML = products.map(p => {
    const emoji = tagEmoji[p.tag] || '🌿';
    const gradient = tagGradient[p.tag] || 'linear-gradient(135deg, #f0faf3, #d8f3dc)';
    return `
      <div class="result-card">
        <div class="rc-img-wrap" style="background:${gradient}">
          <div class="rc-product-visual">
            <div class="rc-product-emoji">${emoji}</div>
            <div class="rc-product-tag-text">${p.tag}</div>
          </div>
        </div>
        <div class="rc-body">
          <div class="rc-header">
            <div class="rc-tag">${p.tag}</div>
            <div class="rc-price">${p.price}</div>
          </div>
          <div class="rc-name">${p.name}</div>
          <div class="rc-desc">${p.desc}</div>
          <div class="rc-why-box">
            <div class="rc-why">💡 <strong>Why this?</strong> ${p.why}</div>
          </div>
          <div class="rc-btns">
            <a class="rc-buy-btn rc-official" href="${p.link}" target="_blank" rel="noopener">🛒 Buy on Bodywise</a>
            <a class="rc-buy-btn rc-amazon" href="${p.amazon}" target="_blank" rel="noopener">📦 Amazon</a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Render routine
  const routineKey = Object.keys(routineTemplates).find(k => concern.includes(k)) || 'default';
  const routine = routineTemplates[routineKey] || routineTemplates['default'];
  const allSteps = [
    ...routine.morning.map((s, i) => ({ ...s, time: 'Morning', num: i + 1 })),
    ...routine.night.map((s, i) => ({ ...s, time: 'Night', num: i + 1 }))
  ];
  const tl = document.getElementById('routineTimeline');
  if (tl) {
    tl.innerHTML = allSteps.map(s => `
      <div class="rt-step">
        <div class="rt-num">${s.num}</div>
        <div>
          <div class="rt-time-badge">${s.time}</div>
          <div class="rt-product">${s.name}</div>
          <div class="rt-how">${s.desc}</div>
        </div>
      </div>
    `).join('');
  }

  savedRoutine = { concern, skinType, routine: routineKey };
  localStorage.setItem('bbRoutine', JSON.stringify(savedRoutine));

  showSection('results');
}

function saveRoutine() {
  renderRoutinePage();
  showSection('routine');
  showToast('Routine saved! ✅');
}

function goToTracker() {
  saveRoutine();
  setTimeout(() => {
    showSection('tracker');
    prefillTracker();
    // Smooth scroll to log form
    setTimeout(() => {
      const form = document.querySelector('.log-form');
      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }, 100);
}

function prefillTracker() {
  if (!savedRoutine) return;
  const concern = savedRoutine.concern;
  const banner = document.getElementById('trackerConcernBanner');
  const bannerText = document.getElementById('trackerConcernText');
  const weekNumEl = document.getElementById('trackerWeekNum');
  const skinLabel = document.getElementById('skinRatingLabel');
  const notesEl = document.getElementById('weekNotes');

  if (banner) banner.style.display = 'flex';
  if (bannerText) bannerText.textContent = '🎯 Tracking: ' + concern;
  if (weekNumEl) weekNumEl.textContent = 'Week ' + (progressData.length + 1);

  // Update skin label to match their concern
  const skinLabels = {
    'Hair Fall': 'How is your hair feeling this week?',
    'Dandruff': 'How is your scalp feeling this week?',
  };
  if (skinLabel) skinLabel.textContent = skinLabels[concern] || 'How is your skin feeling this week?';

  // Pre-fill notes with concern-specific prompt
  if (notesEl && !notesEl.value) {
    const prompts = {
      'Acne & Breakouts': 'e.g. fewer pimples, less oiliness, texture improving...',
      'Pigmentation & Dark Spots': 'e.g. spots fading, skin brighter, tone more even...',
      'Dryness & Dehydration': 'e.g. less tightness, skin looks plumper, no flaking...',
      'Hair Fall': 'e.g. less hair in the drain, scalp feels healthier...',
      'Dandruff': 'e.g. less flakes, scalp less itchy, less buildup...',
      'Anti-Aging & Glow': 'e.g. skin looks brighter, fine lines less visible...',
    };
    notesEl.placeholder = prompts[concern] || 'What changes have you noticed this week?';
  }

  updateProgressChart();
}

function retakeQuiz() {
  quizStarted = false;
  currentStep = 0;
  quizAnswers = {};
  renderQuiz();
  showSection('quiz');
}

// ========== ROUTINE PAGE ==========
function renderRoutinePage() {
  const noMsg = document.getElementById('noRoutineMsg');
  const content = document.getElementById('routineContent');
  if (!noMsg || !content) return;

  // Always show reminder cards — hide "no routine" message
  noMsg.style.display = 'none';
  content.style.display = 'block';

  const key = savedRoutine ? (savedRoutine.routine || 'default') : 'default';
  const routine = routineTemplates[key] || routineTemplates['default'];
  renderRoutineList('morningList', routine.morning);
  renderRoutineList('nightList', routine.night);
}

function renderRoutineList(containerId, steps) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = steps.map((s, i) => `
    <div class="routine-item" id="ri-${containerId}-${i}">
      <div class="ri-num">${i + 1}</div>
      <div class="ri-info">
        <div class="ri-name">${s.name}</div>
        <div class="ri-desc">${s.desc}</div>
      </div>
      <div class="ri-check" onclick="toggleCheck(this)"></div>
    </div>
  `).join('');
}

function toggleCheck(el) {
  el.classList.toggle('done');
  el.textContent = el.classList.contains('done') ? '✓' : '';
  el.closest('.routine-item').classList.toggle('checked', el.classList.contains('done'));
}

function switchTab(btn, tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('morningRoutine').style.display = tab === 'morning' ? 'block' : 'none';
  document.getElementById('nightRoutine').style.display = tab === 'night' ? 'block' : 'none';
}

// ========== REMINDERS ==========
const reminderTimers = {};
const countdownIntervals = {};

function formatTime(h, m) {
  const ampm = h >= 12 ? 'PM' : 'AM';
  const disp = h % 12 || 12;
  return String(disp).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ' ' + ampm;
}

// Set today as default date for both pickers on page load
function initDatePickers() {
  const today = new Date().toISOString().split('T')[0];
  ['morning', 'night'].forEach(type => {
    const el = document.getElementById(type + 'Date');
    if (el && !el.value) el.value = today;
  });
}

function setReminder(type) {
  // Read date
  const dateEl = document.getElementById(type + 'Date');
  const dateVal = dateEl && dateEl.value ? dateEl.value : new Date().toISOString().split('T')[0];

  // Read time from dropdowns
  const hourEl = document.getElementById(type + 'Hour');
  const minEl  = document.getElementById(type + 'Min');
  const ampmEl = document.getElementById(type + 'Ampm');
  if (!hourEl || !minEl || !ampmEl) return;

  let h = parseInt(hourEl.value);
  const m = parseInt(minEl.value);
  const ampm = ampmEl.value;
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;

  // Build fire datetime from selected date + time
  const [yr, mo, dy] = dateVal.split('-').map(Number);
  const fireTime = new Date(yr, mo - 1, dy, h, m, 0, 0);

  if (fireTime <= new Date()) {
    showToast('⚠️ Please pick a future date/time');
    return;
  }

  // Ask Chrome notification permission immediately
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().then(() => scheduleReminder(type, h, m, fireTime));
  } else {
    scheduleReminder(type, h, m, fireTime);
  }
}

function scheduleReminder(type, h, m, fireTime) {
  if (reminderTimers[type]) clearTimeout(reminderTimers[type]);
  if (countdownIntervals[type]) clearInterval(countdownIntervals[type]);

  const label = type === 'morning' ? '☀️ Morning' : '🌙 Night';
  const concern = savedRoutine ? savedRoutine.concern : 'Skincare';
  const ms = fireTime - Date.now();

  reminderTimers[type] = setTimeout(() => {
    // Chrome notification — stays on screen until clicked
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(label + ' Routine — Be Bodywise 🌿', {
        body: 'Time for your ' + concern + ' routine! Open the app to see your steps.',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌿</text></svg>',
        requireInteraction: true,
        tag: 'bodywise-' + type,
      });
    }
    showReminderPopup(label, concern, type);
    showToast('⏰ ' + label + ' routine time!');
  }, ms);

  // Save
  const saved = JSON.parse(localStorage.getItem('bbReminders') || '{}');
  saved[type] = { h, m, fireTime: fireTime.getTime() };
  localStorage.setItem('bbReminders', JSON.stringify(saved));

  startCountdown(type, fireTime, label);
  showToast(label + ' reminder set! ' + fireTime.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }));
}

function startCountdown(type, fireTime, label) {
  if (countdownIntervals[type]) clearInterval(countdownIntervals[type]);
  const el = document.getElementById(type + 'Countdown');
  if (!el) return;

  const tick = () => {
    const diff = fireTime - Date.now();
    if (diff <= 0) { el.innerHTML = '🔔 Reminder firing now!'; clearInterval(countdownIntervals[type]); return; }
    const hh = Math.floor(diff / 3600000);
    const mm = Math.floor((diff % 3600000) / 60000);
    const ss = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    const dateStr = fireTime.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    el.innerHTML = `
      <div class="rb-set-info">✅ Set for <strong>${dateStr} · ${formatTime(fireTime.getHours(), fireTime.getMinutes())}</strong></div>
      <span class="rb-timer">⏳ ${pad(hh)}:${pad(mm)}:${pad(ss)}</span>
    `;
  };
  tick();
  countdownIntervals[type] = setInterval(tick, 1000);
}

function showReminderPopup(label, concern, type) {
  let popup = document.getElementById('reminderPopup');
  if (!popup) { popup = document.createElement('div'); popup.id = 'reminderPopup'; document.body.appendChild(popup); }
  popup.innerHTML = `
    <div class="rp-inner">
      <div class="rp-icon">${type === 'morning' ? '☀️' : '🌙'}</div>
      <div class="rp-title">${label} Routine Time!</div>
      <div class="rp-sub">Time for your <strong>${concern}</strong> routine 🌿<br/>Open your routine to see today's steps.</div>
      <div class="rp-btns">
        <button class="btn-primary" onclick="document.getElementById('reminderPopup').classList.remove('show');showSection('routine')">View Routine</button>
        <button class="btn-secondary" onclick="document.getElementById('reminderPopup').classList.remove('show')">Dismiss</button>
      </div>
    </div>`;
  popup.className = 'reminder-popup show';
  setTimeout(() => popup.classList.remove('show'), 20000);
}

function restoreReminders() {
  initDatePickers();
  const saved = JSON.parse(localStorage.getItem('bbReminders') || '{}');
  ['morning', 'night'].forEach(type => {
    if (!saved[type]) return;
    const { h, m, fireTime: ft } = saved[type];
    if (!ft || ft <= Date.now()) return; // expired, skip
    const fireTime = new Date(ft);
    const label = type === 'morning' ? '☀️ Morning' : '🌙 Night';
    // Restore dropdowns
    const hourEl = document.getElementById(type + 'Hour');
    const minEl  = document.getElementById(type + 'Min');
    const ampmEl = document.getElementById(type + 'Ampm');
    const dateEl = document.getElementById(type + 'Date');
    if (dateEl) dateEl.value = fireTime.toISOString().split('T')[0];
    if (hourEl && minEl && ampmEl) {
      const disp = h % 12 || 12;
      hourEl.value = disp;
      minEl.value  = String(m).padStart(2, '0');
      ampmEl.value = h >= 12 ? 'PM' : 'AM';
    }
    scheduleReminder(type, h, m, fireTime);
  });
}

// ========== TRACKER ==========
function selectRating(el, type, val) {
  el.closest('.emoji-rating').querySelectorAll('.emoji-opt').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  ratings[type] = val;
}

function logWeek() {
  if (!ratings.skin || !ratings.consistency) {
    showToast('Please rate both fields before saving 😊');
    return;
  }
  const entry = {
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    skin: ratings.skin,
    consistency: ratings.consistency,
    note: document.getElementById('weekNotes').value.trim()
  };
  progressData.push(entry);
  localStorage.setItem('bbProgressData', JSON.stringify(progressData));
  ratings = { skin: 0, consistency: 0 };
  document.querySelectorAll('.emoji-opt').forEach(e => e.classList.remove('selected'));
  document.getElementById('weekNotes').value = '';
  renderTracker();
  updateProgressChart();
  showToast('Week logged! Keep it up 💪');
}

function renderTracker() {
  const container = document.getElementById('trackerLogs');
  if (!container) return;
  if (!progressData.length) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📋</div><div>No logs yet — start tracking this week!</div></div>';
    return;
  }
  container.innerHTML = [...progressData].reverse().map(e => `
    <div class="log-entry">
      <div class="le-date">${e.date}</div>
      <div class="le-scores">
        <div class="le-score-item">
          <div class="le-score-label">Skin</div>
          <div class="le-score-val">${'⭐'.repeat(e.skin)}</div>
        </div>
        <div class="le-score-item">
          <div class="le-score-label">Routine</div>
          <div class="le-score-val">${'⭐'.repeat(e.consistency)}</div>
        </div>
      </div>
      ${e.note ? `<div class="le-note">${e.note}</div>` : ''}
    </div>
  `).join('');
}

function updateProgressChart() {
  const canvas = document.getElementById('progressChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.parentElement.offsetWidth || 400;
  const h = 170;
  canvas.width = w; canvas.height = h;
  ctx.clearRect(0, 0, w, h);

  if (progressData.length < 2) {
    ctx.fillStyle = '#9ca3af';
    ctx.font = '600 13px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Log at least 2 weeks to see your progress chart', w / 2, h / 2);
    return;
  }

  const data = progressData.slice(-8);
  const pad = { l: 36, r: 20, t: 20, b: 36 };
  const cw = w - pad.l - pad.r;
  const ch = h - pad.t - pad.b;
  const stepX = data.length > 1 ? cw / (data.length - 1) : cw;

  ctx.strokeStyle = '#e5e7eb'; ctx.lineWidth = 1;
  [1, 2, 3, 4, 5].forEach(i => {
    const y = pad.t + ch - (i / 5) * ch;
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cw, y); ctx.stroke();
    ctx.fillStyle = '#9ca3af'; ctx.font = '10px Inter'; ctx.textAlign = 'right';
    ctx.fillText(i, pad.l - 6, y + 4);
  });

  const drawLine = (key, color) => {
    ctx.beginPath();
    data.forEach((d, i) => {
      const x = pad.l + i * stepX;
      const y = pad.t + ch - ((d[key] - 1) / 4) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.lineTo(pad.l + (data.length - 1) * stepX, pad.t + ch);
    ctx.lineTo(pad.l, pad.t + ch);
    ctx.closePath();
    ctx.fillStyle = color + '20'; ctx.fill();

    ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
    data.forEach((d, i) => {
      const x = pad.l + i * stepX;
      const y = pad.t + ch - ((d[key] - 1) / 4) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    data.forEach((d, i) => {
      const x = pad.l + i * stepX;
      const y = pad.t + ch - ((d[key] - 1) / 4) * ch;
      ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = color; ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
    });
  };

  drawLine('skin', '#52b788');
  drawLine('consistency', '#2d6a4f');

  ctx.fillStyle = '#9ca3af'; ctx.font = '600 10px Inter'; ctx.textAlign = 'center';
  data.forEach((d, i) => ctx.fillText('W' + (i + 1), pad.l + i * stepX, h - 8));

  ctx.font = '600 11px Inter'; ctx.textAlign = 'left';
  ctx.fillStyle = '#52b788'; ctx.fillRect(pad.l, 6, 12, 12);
  ctx.fillStyle = '#374151'; ctx.fillText('Skin', pad.l + 16, 16);
  ctx.fillStyle = '#2d6a4f'; ctx.fillRect(pad.l + 66, 6, 12, 12);
  ctx.fillStyle = '#374151'; ctx.fillText('Routine', pad.l + 82, 16);
}

// ========== AI CHAT ==========
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatBox').classList.toggle('open', chatOpen);
  if (chatOpen) document.getElementById('chatNotif').style.display = 'none';
}

function handleChatKey(e) { if (e.key === 'Enter') sendChat(); }

function sendSuggestion(btn) {
  document.getElementById('chatInput').value = btn.textContent.trim();
  btn.closest('.chat-suggestions').remove();
  sendChat();
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  appendMsg('user', msg);
  showTyping();
  setTimeout(() => { removeTyping(); appendMsg('bot', getAIResponse(msg)); },
    800 + Math.random() * 700);
}

function appendMsg(type, text) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.innerHTML = `<div class="msg-bubble">${formatChatText(text)}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function formatChatText(t) {
  return t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
}

function showTyping() {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot'; div.id = 'typingMsg';
  div.innerHTML = `<div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typingMsg');
  if (el) el.remove();
}

function getAIResponse(msg) {
  const lower = msg.toLowerCase();
  if (chatKnowledge.greetings.some(g => lower.includes(g))) {
    return "Hi there! 👋 I am your Bodywise skin and hair assistant.\n\nAsk me about ingredients, which products to use, how long for results, or any skin/hair concern!";
  }
  for (const [kw, res] of Object.entries(chatKnowledge.keywords)) {
    if (lower.includes(kw)) return res;
  }
  if (lower.includes('product') || lower.includes('recommend') || lower.includes('suggest')) {
    return "For the most accurate recommendations, take the **Skin and Hair Quiz** — just 7 questions! 🎯\n\nOr tell me your specific concern (acne, dark spots, hair fall) and I will guide you right now!";
  }
  if (lower.includes('routine')) {
    return "A good skincare routine has **3 core steps:**\n\n1. **Cleanse** — remove dirt and oil\n2. **Treat** — targeted serum for your concern\n3. **Moisturize + SPF** (morning)\n\nConsistency matters more than the number of products. Start simple, stay regular! 🌿";
  }
  if (lower.includes('price') || lower.includes('cost') || lower.includes('cheap') || lower.includes('expensive') || lower.includes('affordable')) {
    return "Good skincare does not have to be expensive! 💰\n\nSolid routine under Rs 1000:\n• Cleanser: Rs 150-250\n• Niacinamide serum: Rs 300-400\n• Moisturizer: Rs 200-300\n• Sunscreen: Rs 250-350\n\nConsistency beats luxury every time.";
  }
  if (lower.includes('bodywise') || lower.includes('brand')) {
    return "**Be Bodywise** is a science-backed skincare and wellness brand made for Indian skin. 🌿\n\n• Dermatologist-tested formulas\n• Transparent about ingredients\n• Free from harmful chemicals\n• Budget-friendly to premium range\n\nUse the quiz to find the right products for your concern!";
  }
  return `Good question about "${msg}"! 🌿\n\nHere is my advice:\n1. **Take the quiz** — products matched to your exact concern\n2. **Be consistent** — results take 4-8 weeks minimum\n3. **Track progress** weekly so you know what is working\n\nAsk me about specific ingredients like niacinamide, retinol or vitamin C for detailed guidance!`;
}

// ========== TOAST ==========
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

window.addEventListener('resize', () => {
  if (document.getElementById('tracker') &&
      document.getElementById('tracker').classList.contains('active')) {
    updateProgressChart();
  }
});
