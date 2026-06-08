const categories = [
  {
    eyebrow: "Category 01",
    title: "Punjabi Classics",
    items: [
      ["Butter Chicken", "Rich tomato gravy, cream, warm spices"],
      ["Paneer Lababdar", "Cottage cheese, onion tomato masala"],
      ["Dal Makhani", "Slow-cooked black lentils"]
    ]
  },
  {
    eyebrow: "Category 02",
    title: "Indo-Chinese",
    items: [
      ["Chilli Paneer", "Peppers, onions, chili garlic sauce"],
      ["Veg Manchurian", "Fried vegetable dumplings, savory sauce"],
      ["Hakka Noodles", "Wok tossed noodles and vegetables"]
    ]
  },
  {
    eyebrow: "Category 03",
    title: "Grill & Tandoor",
    items: [
      ["Tandoori Platter", "Smoky shareable grill selection"],
      ["Malai Tikka", "Charred, creamy, gently spiced"],
      ["Seekh Kebab", "Grilled skewers, chutney, onions"]
    ]
  },
  {
    eyebrow: "Category 04",
    title: "Drinks & Bar Snacks",
    items: [
      ["Signature Mocktails", "Citrus, spice, fruit, and fresh herbs"],
      ["Late Night Bites", "Shareable plates for the table"],
      ["Takeout Favorites", "Quick crowd-pleasers for pickup"]
    ]
  }
];

export const metadata = {
  title: "Menu",
  description: "Explore the planned menu structure for Videsi Bar & Grill in Kitchener."
};

export default function MenuPage() {
  return (
    <main>
      <section className="page-hero menu-hero">
        <p className="eyebrow">Menu</p>
        <h1>Punjabi, Indo-Chinese, grill plates, and bar bites.</h1>
        <p>
          This page is structured for the final client menu. Add pricing once the approved menu PDF
          or item list is supplied.
        </p>
      </section>
      <section className="section menu-list-section">
        {categories.map((category, index) => (
          <div className={`menu-category reveal delay-${index}`} key={category.title}>
            <p className="eyebrow">{category.eyebrow}</p>
            <h2>{category.title}</h2>
            <ul>
              {category.items.map(([name, copy]) => (
                <li key={name}>
                  <span>{name}</span>
                  <small>{copy}</small>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
