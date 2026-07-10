import { Product, Testimonial, FAQItem, GalleryItem, FeatureItem } from "./types";

export const FEATURE_PRODUCTS: Product[] = [
  // Cakes
  {
    id: "cake-1",
    name: "Classic Chocolate Cake",
    description: "Layers of decadent, rich Belgian chocolate sponge enveloped in silky smooth chocolate ganache.",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-2",
    name: "Velvety Vanilla Naked Cake",
    description: "Light, fluffy vanilla bean sponge layered with Madagascar vanilla buttercream and decorated with fresh berries.",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-3",
    name: "Royal Red Velvet",
    description: "Elegant, cocoa-infused crimson cake with layers of whipped cream cheese frosting and sweet white chocolate curls.",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1616260841936-6818460111d3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-4",
    name: "Summer Strawberry Cake",
    description: "Delectable sponge layered with fresh local strawberry compote, covered in premium chantilly whipped cream.",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-5",
    name: "Traditional Black Forest",
    description: "Classic German recipe of chocolate sponge soaked in dark cherry syrup, layered with sour cherries and fresh cream.",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },

  // Pastries
  {
    id: "pastry-1",
    name: "Buttery Golden Croissant",
    description: "Hand-laminated flaky pastry made with premium French butter, baked to crisp, golden perfection.",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pastry-2",
    name: "Artisanal Maple Pecan Danish",
    description: "Crisp puff pastry nested with glazed premium pecans and a sweet maple syrup reduction.",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pastry-3",
    name: "Pain au Chocolat (Chocolate Puff)",
    description: "Buttery pastry wrapping dual bars of rich 70% dark Belgian chocolate inside a melting interior.",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pastry-4",
    name: "Signature Glazed Cinnamon Roll",
    description: "Soft brioche dough swirled with premium Ceylon cinnamon and brown sugar, topped with cream cheese glaze.",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1509456592783-5d18e2a33412?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pastry-5",
    name: "Berry Harvest Fruit Danish",
    description: "Golden pastry shell filled with rich custard and garnished with fresh raspberries, blueberries, and a glaze.",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80"
  },

  // Bread
  {
    id: "bread-1",
    name: "Artisanal White Sourdough",
    description: "Crispy crust and chewy interior, fermented naturally for 36 hours using our 100-year-old starter recipe.",
    category: "Bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bread-2",
    name: "Rustic Whole Wheat Brown",
    description: "Rich, nutty, and healthy bread baked with 100% stone-ground whole grains, honey, and organic oats.",
    category: "Bread",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bread-3",
    name: "Gourmet Garlic & Herb Baguette",
    description: "Infused with roasted garlic, organic olive oil, rosemary, and sea salt, perfect for warm hosting.",
    category: "Bread",
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bread-4",
    name: "Traditional French Baguette",
    description: "The classic Parisian loaf—exceptionally crusty on the outside, light and airy on the inside.",
    category: "Bread",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bread-5",
    name: "Ancient Multigrain & Seeded",
    description: "Packed with organic pumpkin seeds, flaxseed, sunflower seeds, and sesame, offering rich texture and bite.",
    category: "Bread",
    image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&w=800&q=80"
  },

  // Cookies
  {
    id: "cookie-1",
    name: "Classic Chocolate Chip Cookie",
    description: "Crispy golden edges and a warm, chewy center loaded with giant chunks of premium semi-sweet chocolate.",
    category: "Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cookie-2",
    name: "Golden Butter Sablés",
    description: "Delicate melt-in-your-mouth shortbread biscuits crafted using pure Norman butter and a touch of sea salt.",
    category: "Cookies",
    image: "https://images.unsplash.com/photo-1558961312-50346c099887?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cookie-3",
    name: "Maple Pecan Oat Cookies",
    description: "Hearty toasted whole oats sweetened with real Canadian maple syrup, roasted pecans, and golden raisins.",
    category: "Cookies",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cookie-4",
    name: "Roasted Almond Macaroons",
    description: "Crispy yet wonderfully chewy cookies baked with sweet ground almonds and toasted slivered almonds on top.",
    category: "Cookies",
    image: "https://images.unsplash.com/photo-1558961309-db0467b5881a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cookie-5",
    name: "Decadent Double Chocolate Fudge",
    description: "Rich black cocoa cookie dough folded with white, milk, and dark chocolate chunks for a dense, brownie-like texture.",
    category: "Cookies",
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=800&q=80"
  },

  // Desserts
  {
    id: "dessert-1",
    name: "Signature New York Cheesecake",
    description: "Creamy, dense, and velvety smooth cream cheese on a buttery graham cracker crust, finished with fresh raspberry gelée.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dessert-2",
    name: "Traditional Venetian Tiramisu",
    description: "Light-as-air layers of espresso-soaked ladyfingers, rich Italian mascarpone mousse, and premium cocoa powder dusting.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dessert-3",
    name: "Fudgy Sea Salt Brownies",
    description: "Extremely rich chocolate brownies with dense, chewy centers and a beautiful shiny crinkle top, sprinkled with Maldon sea salt.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dessert-4",
    name: "Pastel Frosted Cupcakes",
    description: "Fluffy cupcakes in assortment of flavors, crowned with luxurious pastel-colored buttercream and elegant sugar pearls.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dessert-5",
    name: "Wild Blueberry Streusel Muffins",
    description: "Moist, butter-rich breakfast muffins overflowing with wild mountain blueberries and crowned with a crunchy cinnamon streusel.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80"
  }
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: "feature-1",
    title: "Baked Fresh Daily",
    description: "Our ovens are lit before dawn. We serve only freshly baked goods crafted on the same morning, ensuring unparalleled taste and aroma.",
    iconName: "Flame"
  },
  {
    id: "feature-2",
    title: "Premium Ingredients",
    description: "From pure Norman butter and organic flour to high-grade Belgian chocolate and local organic fruits, quality is our bottom line.",
    iconName: "Sparkles"
  },
  {
    id: "feature-3",
    title: "Handmade Recipes",
    description: "No industrial shortcuts. We follow traditional, slow-fermentation methods and hand-laminate every single pastry layer.",
    iconName: "HeartHandshake"
  },
  {
    id: "feature-4",
    title: "Beautiful Presentation",
    description: "We believe baking is an art. Every single cake, cookie, and bread is crafted to look as beautiful and luxurious as it is delicious.",
    iconName: "Palette"
  },
  {
    id: "feature-5",
    title: "Family Friendly",
    description: "A cozy and warm atmosphere built on family tradition, with sweet treats and healthy grain breads suitable for all generations.",
    iconName: "Users"
  },
  {
    id: "feature-6",
    title: "Hygienic Kitchen",
    description: "Our modern bakery kitchen strictly adheres to the highest global cleanliness and food protection standards for your complete peace of mind.",
    iconName: "ShieldCheck"
  },
  {
    id: "feature-7",
    title: "Experienced Bakers",
    description: "Our kitchen is led by award-winning head pastry chefs and master bakers with decades of combined culinary experience across Europe and Asia.",
    iconName: "Award"
  },
  {
    id: "feature-8",
    title: "Excellent Customer Service",
    description: "A warm smile, personalized event cake consultations, and smooth bulk ordering support. We prioritize your joy above all.",
    iconName: "Smile"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Luxurious Black Forest Celebration Cake",
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-2",
    title: "Crisp Golden Croissants Straight Out of the Oven",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-3",
    title: "Artisanal Sourdough Bread Display",
    category: "Bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-4",
    title: "Rich Chewy Chocolate Chip Cookies Stacked",
    category: "Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-5",
    title: "Pastel Buttercream Cupcake Selection",
    category: "Cupcakes",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-6",
    title: "Our Warm Cozy Bakery Interior & Seating",
    category: "Bakery interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-7",
    title: "The Artisanal Sourdough Baking Process",
    category: "Baking process",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-8",
    title: "Luxurious French Dessert & Tartelette Displays",
    category: "Dessert displays",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sophia Kensington",
    role: "Local Food Critic & Connoisseur",
    rating: 5,
    comment: "The chocolate and vanilla cakes were absolutely delicious, beautifully decorated, and had the perfect moisture balance. A rare visual and culinary gem!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "test-2",
    name: "Marcus Sterling",
    role: "Morning Regular",
    rating: 5,
    comment: "Fresh bread every morning that crackles on the outside and is incredibly soft on the inside. Highly recommended to anyone who cherishes true sourdough.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Culinary Blogger",
    rating: 5,
    comment: "The pastries were soft, buttery, and incredibly fresh. I visited during dawn and saw the master bakers laminating layers of pure butter by hand. Remarkable!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "test-4",
    name: "David H. Miller",
    role: "Father & Event Coordinator",
    rating: 5,
    comment: "My absolute favorite bakery for birthday parties and family celebrations. Their custom cake consultation was stress-free, and children loved the cupcakes!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you bake fresh daily?",
    answer: "Yes, absolutely! Every single item we offer—from our croissants to our artisan sourdough loaves and custom cakes—is baked fresh right here in our premium kitchen every morning. We do not sell day-old baked goods, ensuring the finest freshness and crispness."
  },
  {
    id: "faq-2",
    question: "Do you make custom cakes?",
    answer: "We certainly do! We specialize in crafting stunning, luxurious custom cakes for weddings, anniversaries, corporate events, and birthdays. You can schedule a consultation with our head pastry chef, who will help design the flavor profile and visual look to fit your exact dreams."
  },
  {
    id: "faq-3",
    question: "Can I place bulk orders?",
    answer: "Yes. We cater to corporate events, parties, family gatherings, and wholesale clients. We kindly ask that you place large bulk orders (such as 30+ pastries or 5+ whole bread loaves) at least 48 to 72 hours in advance via our custom contact form or phone call."
  },
  {
    id: "faq-4",
    question: "Do you prepare celebration cakes?",
    answer: "Yes, celebration cakes are a specialty of ours. Whether you are hosting a delicate baby shower, a themed children's birthday, or a grand gold-themed retirement party, we bake and beautifully decorate celebration cakes, complete with matched cupcakes and dessert tables."
  },
  {
    id: "faq-5",
    question: "Which products are most popular?",
    answer: "Our signature Buttery Golden Croissants, the classic Belgian Chocolate Cake, and our naturally fermented Artisanal White Sourdough are highly loved by locals and vanish quickly every morning. We highly recommend arriving early or placing a pick-up reservation!"
  },
  {
    id: "faq-6",
    question: "How can I contact you?",
    answer: "You can easily reach us by filling out the secure contact form on this website, calling our customer service hotline at +1 (555) 987-6543, sending an email directly to hello@manosalwa-bakery.com, or simply visiting our warm storefront during working hours!"
  }
];
