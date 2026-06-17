const products = [
  {
    id: "oraimo-earpiece",
    category: "audio",
    type: "Wired audio",
    name: "Oraimo Earpiece",
    price: 3000,
    image: "./assets/optimized/products/oraimo-earpiece.webp",
    copy: "Everyday wired sound for calls, lectures, and quick listening.",
  },
  {
    id: "oraimo-type-c-earpiece",
    category: "audio",
    type: "Type-C audio",
    name: "Oraimo Type-C Earpiece",
    price: 4500,
    image: "./assets/optimized/products/oraimo-type-c-earpiece.webp",
    copy: "A simple upgrade for newer phones without a 3.5mm headphone port.",
  },
  {
    id: "itel-budsair",
    category: "audio",
    type: "Wireless earbuds",
    name: "Itel BudsAir",
    price: 15000,
    image: "./assets/optimized/products/itel-budsair.webp",
    copy: "Clean wireless audio with a friendly everyday price point.",
  },
  {
    id: "transformers-earbuds",
    category: "audio",
    type: "Statement earbuds",
    name: "Tecno Optimus Prime Transformers Earbuds",
    price: 15000,
    image: "./assets/optimized/products/transformers-earbuds.webp",
    copy: "A bolder pick for customers who want their tech to look different.",
  },
  {
    id: "spacebuds-lite",
    category: "audio",
    type: "Spatial earbuds",
    name: "Oraimo SpaceBuds Lite",
    price: 16000,
    image: "./assets/optimized/products/spacebuds-lite.webp",
    copy: "Compact wireless earbuds with a modern case and clean daily feel.",
  },
  {
    id: "necklace-lite",
    category: "audio",
    type: "Neckband",
    name: "Oraimo Necklace Lite",
    price: 17500,
    image: "./assets/optimized/products/necklace-lite.webp",
    copy: "A comfortable neckband option for longer listening and calls.",
  },
  {
    id: "spacebuds-neo",
    category: "audio",
    type: "Spatial earbuds",
    name: "Oraimo SpaceBuds Neo",
    price: 19000,
    image: "./assets/optimized/products/spacebuds-neo.webp",
    copy: "A sharp wireless choice for sound, portability, and style.",
  },
  {
    id: "ldnio-t06",
    category: "audio",
    type: "Wireless earbuds",
    name: "LDNIO T06",
    price: 21000,
    image: "./assets/optimized/products/ldnio-t06.webp",
    copy: "Minimal earbuds with a clean charging case and easy carry size.",
  },
  {
    id: "spacebuds-neo-plus",
    category: "audio",
    type: "ANC earbuds",
    name: "Oraimo SpaceBuds Neo+",
    price: 23000,
    image: "./assets/optimized/products/spacebuds-neo-plus.webp",
    copy: "Active noise cancellation and a premium look at a strong RVT price.",
  },
  {
    id: "freepods-neo",
    category: "audio",
    type: "Wireless earbuds",
    name: "Oraimo FreePods Neo",
    price: 24000,
    image: "./assets/optimized/products/freepods-neo.webp",
    copy: "A reliable everyday earbud option with strong battery-led appeal.",
  },
  {
    id: "spacebuds-pro",
    category: "audio",
    type: "Flagship earbuds",
    name: "Oraimo SpaceBuds Pro",
    price: 130000,
    image: "./assets/optimized/products/spacebuds-pro.webp",
    copy: "The showcase item for customers who want the top-tier audio pick.",
  },
  {
    id: "type-c-cord",
    category: "charging",
    type: "Cable",
    name: "Oraimo Type-C Cord",
    price: 2700,
    image: "./assets/optimized/products/type-c-cord.webp",
    copy: "A daily charging essential for Android and Type-C devices.",
  },
  {
    id: "type-c-to-c-cord",
    category: "charging",
    type: "Cable",
    name: "Oraimo Type-C to C Cord",
    price: 3500,
    image: "./assets/optimized/products/type-c-to-c-cord.webp",
    copy: "Fast, modern Type-C to Type-C charging for newer adapters and phones.",
  },
  {
    id: "apple-cord",
    category: "charging",
    type: "Cable",
    name: "Oraimo Apple Cord",
    price: 3000,
    image: "./assets/optimized/products/apple-cord.webp",
    copy: "A clean Lightning cable option for iPhone users.",
  },
  {
    id: "full-apple-charger",
    category: "charging",
    type: "Charger kit",
    name: "Oraimo Full Apple Charger",
    price: 5000,
    image: "./assets/optimized/products/full-apple-charger.webp",
    copy: "A complete charger setup for customers who need the full kit.",
  },
  {
    id: "sandisk-16",
    category: "storage",
    type: "Flashdrive",
    name: "SanDisk Cruzer Blade 16GB",
    price: 8000,
    image: "./assets/optimized/products/sandisk-16.webp",
    copy: "Compact storage for documents, media, and quick transfers.",
  },
  {
    id: "sandisk-32",
    category: "storage",
    type: "Flashdrive",
    name: "SanDisk Cruzer Blade 32GB",
    price: 12500,
    image: "./assets/optimized/products/sandisk-32.webp",
    copy: "A balanced capacity for school files, videos, and everyday backups.",
  },
  {
    id: "sandisk-64",
    category: "storage",
    type: "Flashdrive",
    name: "SanDisk Cruzer Blade 64GB",
    price: 16000,
    image: "./assets/optimized/products/sandisk-64.webp",
    copy: "More space for heavier files while staying portable.",
  },
  {
    id: "stylus-pen",
    category: "accessory",
    type: "Smart accessory",
    name: "Universal Stylus Pen",
    price: 12500,
    image: "./assets/optimized/products/stylus-pen.webp",
    copy: "A sleek accessory for notes, sketches, tablets, and touchscreens.",
  },
  {
    id: "oraimo-power-bank",
    category: "accessory",
    type: "Power essential",
    name: "Oraimo Power Bank 10,000mAh",
    price: 14500,
    image: "./assets/optimized/products/oraimo-power-bank.webp",
    copy: "Reliable backup power for campus, commutes, and long days out.",
  },
];

const selected = new Map();
const formatter = new Intl.NumberFormat("en-NG", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const productGrid = document.querySelector("#product-grid");
const controls = Array.from(document.querySelectorAll(".category-control"));
const orderList = document.querySelector("#order-list");
const emptyOrder = document.querySelector("#empty-order");
const orderTotal = document.querySelector("#order-total");
const orderLink = document.querySelector("#order-link");
const cartBar = document.querySelector("#cart-bar");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const cartWhatsapp = document.querySelector("#cart-whatsapp");
const telegramLink = document.querySelector("#telegram-link");
let telegramOrderMessage = "";

function priceLabel(price) {
  return `₦${formatter.format(price)}`;
}

function productCard(product) {
  const selectedItem = selected.get(product.id);
  const buttonText = selectedItem ? `Added (${selectedItem.quantity})` : "Add to order";

  return `
    <article class="product-card reveal" data-category="${product.category}">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" width="720" height="720" />
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span>${product.type}</span>
          <span>In stock</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.copy}</p>
        <div class="product-footer">
          <strong>${priceLabel(product.price)}</strong>
          <button class="button dark" type="button" data-add="${product.id}">${buttonText}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(category = "all") {
  const visibleProducts = category === "all"
    ? products
    : products.filter((product) => product.category === category);

  productGrid.innerHTML = visibleProducts.map(productCard).join("");
}

function updateControls(activeCategory) {
  controls.forEach((control) => {
    const active = control.dataset.category === activeCategory;
    control.classList.toggle("active", active);
    control.setAttribute("aria-selected", String(active));
  });
}

function updateOrder() {
  const items = Array.from(selected.values());
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  emptyOrder.hidden = items.length > 0;

  orderList.innerHTML = items
    .map(
      ({ product, quantity }) => `
        <li class="order-item">
          <img src="${product.image}" alt="" aria-hidden="true" loading="lazy" decoding="async" width="72" height="72" />
          <div>
            <span>${product.name}</span>
            <strong>${priceLabel(product.price)} x ${quantity}</strong>
          </div>
          <div class="quantity-controls" aria-label="Adjust ${product.name} quantity">
            <button type="button" data-adjust="${product.id}" data-delta="-1">-</button>
            <b>${quantity}</b>
            <button type="button" data-adjust="${product.id}" data-delta="1">+</button>
            <button class="remove-item" type="button" data-remove="${product.id}">Remove</button>
          </div>
        </li>
      `,
    )
    .join("");

  orderTotal.textContent = priceLabel(total);
  cartTotal.textContent = priceLabel(total);
  cartCount.textContent = `${quantity} ${quantity === 1 ? "item" : "items"} selected`;

  if (!items.length) {
    orderLink.classList.add("disabled");
    orderLink.href = "#";
    orderLink.setAttribute("aria-disabled", "true");
    cartBar.hidden = true;
    cartWhatsapp.href = "#";
    cartWhatsapp.setAttribute("aria-disabled", "true");
    telegramLink.href = "https://t.me/RVTStore_CustomerService";
    telegramLink.textContent = "Or message on Telegram";
    telegramOrderMessage = "";
    return;
  }

  const lines = items
    .map(({ product, quantity }) => {
      const lineTotal = priceLabel(product.price * quantity);
      return `${quantity} x ${product.name} - ${lineTotal}`;
    })
    .join("\n");
  const message = [
    "Hello RVT Store, I would like to order:",
    lines,
    "",
    "Please confirm availability and same-day delivery.",
  ].join("\n");

  const whatsappHref = `https://wa.me/2348154117064?text=${encodeURIComponent(message)}`;
  orderLink.href = whatsappHref;
  telegramLink.href = "https://t.me/RVTStore_CustomerService";
  telegramLink.textContent = "Copy order + open Telegram";
  telegramOrderMessage = message;
  orderLink.classList.remove("disabled");
  orderLink.removeAttribute("aria-disabled");
  cartBar.hidden = false;
  cartWhatsapp.href = whatsappHref;
  cartWhatsapp.removeAttribute("aria-disabled");
}

function rerenderActiveCatalog() {
  const activeCategory = controls.find((control) => control.classList.contains("active"))?.dataset.category ?? "all";
  renderProducts(activeCategory);
}

function moveToOrder() {
  const orderSection = document.querySelector("#order");
  if (!orderSection) {
    return;
  }

  const targetTop = orderSection.getBoundingClientRect().top + window.scrollY - 84;
  orderSection.scrollIntoView({ behavior: "smooth", block: "start" });

  setTimeout(() => {
    if (Math.abs(orderSection.getBoundingClientRect().top) > 160) {
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
      window.history.replaceState(null, "", "#order");
    }
  }, 260);

  setTimeout(() => {
    if (Math.abs(orderSection.getBoundingClientRect().top) > 180) {
      window.scrollTo(0, Math.max(0, targetTop));
      window.history.replaceState(null, "", "#order");
    }
  }, 760);
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const category = control.dataset.category;
    updateControls(category);
    renderProducts(category);
  });
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) {
    return;
  }

  const product = products.find((item) => item.id === button.dataset.add);
  if (!product) {
    return;
  }

  const existing = selected.get(product.id);
  selected.set(product.id, {
    product,
    quantity: existing ? existing.quantity + 1 : 1,
  });
  updateOrder();
  rerenderActiveCatalog();
  moveToOrder();
});

orderList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  const adjustButton = event.target.closest("[data-adjust]");

  if (removeButton) {
    selected.delete(removeButton.dataset.remove);
    updateOrder();
    rerenderActiveCatalog();
    return;
  }

  if (adjustButton) {
    const item = selected.get(adjustButton.dataset.adjust);
    if (!item) {
      return;
    }

    item.quantity += Number(adjustButton.dataset.delta);
    if (item.quantity <= 0) {
      selected.delete(item.product.id);
    }
    updateOrder();
    rerenderActiveCatalog();
  }
});

function fallbackCopyOrderText(text) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  field.style.top = "0";
  document.body.appendChild(field);
  field.select();

  try {
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(field);
  }
}

async function copyOrderText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return fallbackCopyOrderText(text);
    }
  }

  return fallbackCopyOrderText(text);
}

telegramLink.addEventListener("click", async (event) => {
  if (!telegramOrderMessage) {
    return;
  }

  event.preventDefault();

  // Telegram cannot prefill regular chats like WhatsApp, so copy first and open the chat.
  const copyPromise = copyOrderText(telegramOrderMessage);
  const opened = window.open("https://t.me/RVTStore_CustomerService", "_blank");

  if (!opened) {
    window.location.href = "https://t.me/RVTStore_CustomerService";
    return;
  }

  opened.opener = null;

  const copied = await copyPromise;
  telegramLink.textContent = copied ? "Copied - paste in Telegram" : "Copy manually for Telegram";

  if (!copied) {
    window.prompt("Copy this order message, then paste it in Telegram:", telegramOrderMessage);
  }

  setTimeout(() => {
    telegramLink.textContent = selected.size ? "Copy order + open Telegram" : "Or message on Telegram";
  }, 2600);
});

renderProducts();
updateOrder();
