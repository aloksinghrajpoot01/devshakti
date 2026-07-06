/* ═══════════════ DATA ═══════════════ */
    const PRODUCTS = [
      // MEN
      {
        id: 1, name: "Classic Cotton Kurta – Blue", cat: "men", sub: "kurtas", price: 649, mrp: 999, disc: 35, rating: 4.8, rev: 128, badge: "New",
        imgs: ["assets/images/products/mk1a.jpg", "assets/images/products/mk1b.jpg", "assets/images/products/mk1c.jpg"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        desc: "Premium cotton kurta perfect for casual and festive occasions. Features intricate embroidery at collar and cuffs. Breathable fabric ideal for the Indian climate.",
        feats: ["100% Pure Cotton", "Machine Washable", "Embroidered Collar", "Available in 5 sizes"],
        vq: "mens+kurta+blue+styling+india"
      },
      {
        id: 2, name: "White Linen Formal Shirt", cat: "men", sub: "shirts", price: 549, mrp: 899, disc: 39, rating: 4.5, rev: 86, badge: "",
        imgs: ["assets/images/products/ms2a.jpg", "assets/images/products/ms2b.jpg", "assets/images/products/ms2c.jpg"],
        sizes: ["S", "M", "L", "XL"],
        desc: "Crisp white linen shirt for formal and semi-formal occasions. Wrinkle-resistant fabric with a comfortable regular fit. Versatile enough for office or evening outings.",
        feats: ["60% Linen 40% Cotton", "Wrinkle Resistant", "Regular Fit", "Easy Iron"],
        vq: "white+linen+shirt+men+outfit+ideas"
      },
      {
        id: 3, name: "Festive Sherwani Set – Cream", cat: "men", sub: "ethnic", price: 3499, mrp: 5499, disc: 36, rating: 4.9, rev: 54, badge: "New",
        imgs: ["assets/images/products/msh3a.jpg", "assets/images/products/msh3b.jpg", "assets/images/products/msh3c.jpg"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        desc: "Elegant cream sherwani set for weddings and festive celebrations. Rich zari embroidery. Includes sherwani, churidar, and dupatta. Make a statement on your big day.",
        feats: ["Zari Embroidery", "Includes Churidar & Dupatta", "Dry Clean Only", "Premium Silk Blend"],
        vq: "sherwani+styling+indian+wedding+groom"
      },
      {
        id: 4, name: "Slim Fit Denim Jeans – Dark Blue", cat: "men", sub: "bottoms", price: 999, mrp: 1699, disc: 41, rating: 4.4, rev: 201, badge: "Sale",
        imgs: ["assets/images/products/mj4a.jpg", "assets/images/products/mj4b.jpg", "assets/images/products/mj4c.jpg"],
        sizes: ["28", "30", "32", "34", "36"],
        desc: "Classic slim fit jeans in dark blue wash. Stretch denim fabric ensures all-day comfort. Versatile enough for casual and semi-formal occasions.",
        feats: ["98% Cotton 2% Elastane", "5-Pocket Style", "Slim Fit", "Machine Washable"],
        vq: "slim+fit+jeans+men+outfit+styling"
      },
      {
        id: 5, name: "Pathani Suit Set – Olive", cat: "men", sub: "ethnic", price: 1199, mrp: 1899, disc: 37, rating: 4.6, rev: 73, badge: "",
        imgs: ["assets/images/products/mp5a.jpg", "assets/images/products/mp5b.jpg", "assets/images/products/mp5c.jpg"],
        sizes: ["M", "L", "XL", "XXL"],
        desc: "Traditional Pathani suit in olive green. Comfortable kamees with matching salwar. Ideal for Eid, family gatherings, and casual ethnic outings.",
        feats: ["Cotton Blend", "Matching Salwar Included", "Comfortable Fit", "Easy Care Fabric"],
        vq: "pathani+suit+men+how+to+style"
      },
      {
        id: 6, name: "Printed Nehru Jacket – Navy", cat: "men", sub: "jackets", price: 1299, mrp: 2099, disc: 38, rating: 4.7, rev: 39, badge: "New",
        imgs: ["assets/images/products/mn6a.jpg", "assets/images/products/mn6b.jpg", "assets/images/products/mn6c.jpg"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        desc: "Sophisticated Nehru jacket with subtle block print. Perfect layering piece over kurtas or shirts. Adds a traditional touch to any outfit.",
        feats: ["Polyester Silk Blend", "Block Print", "Mandarin Collar", "5-Button Closure"],
        vq: "nehru+jacket+men+styling+how+to+wear"
      },
      // WOMEN
      {
        id: 7, name: "Printed Anarkali Kurti – Rust", cat: "women", sub: "kurtis", price: 899, mrp: 1499, disc: 40, rating: 4.7, rev: 164, badge: "Sale",
        imgs: ["assets/images/products/wa7a.jpg", "assets/images/products/wa7b.jpg", "assets/images/products/wa7c.jpg"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        desc: "Flowy Anarkali kurti in beautiful rust digital print. Rayon fabric for breathable comfort. Perfect for office, casual outings, and family occasions.",
        feats: ["100% Rayon", "Digital Print", "Flared Fit", "Side Slits"],
        vq: "anarkali+kurti+styling+women+outfit"
      },
      {
        id: 8, name: "Banarasi Silk Saree – Purple", cat: "women", sub: "sarees", price: 2499, mrp: 3999, disc: 37, rating: 4.9, rev: 231, badge: "New",
        imgs: ["assets/images/products/ws8a.jpg", "assets/images/products/ws8b.jpg", "assets/images/products/ws8c.jpg"],
        sizes: ["Free Size"],
        desc: "Gorgeous Banarasi silk saree in rich purple with gold zari weaving. Blouse piece included. A timeless piece for weddings and grand celebrations.",
        feats: ["Pure Banarasi Silk", "Zari Weaving", "Blouse Piece Included", "Dry Clean Recommended"],
        vq: "banarasi+saree+draping+tutorial+styles"
      },
      {
        id: 9, name: "Floral Maxi Dress – Teal", cat: "women", sub: "dresses", price: 1199, mrp: 1899, disc: 37, rating: 4.5, rev: 89, badge: "",
        imgs: ["assets/images/products/wd9a.jpg", "assets/images/products/wd9b.jpg", "assets/images/products/wd9c.jpg"],
        sizes: ["XS", "S", "M", "L", "XL"],
        desc: "Beautiful floral maxi dress in teal. Perfect for casual days, outings, and summer gatherings. Comfortable georgette fabric with elegant drape and V-neck with tie.",
        feats: ["Georgette Fabric", "Floral Print", "Maxi Length", "V-Neck with Tie"],
        vq: "floral+maxi+dress+women+outfit+ideas"
      },
      {
        id: 10, name: "Lehenga Choli Set – Red & Gold", cat: "women", sub: "lehengas", price: 3999, mrp: 6499, disc: 38, rating: 4.9, rev: 112, badge: "New",
        imgs: ["assets/images/products/wl10a.jpg", "assets/images/products/wl10b.jpg", "assets/images/products/wl10c.jpg"],
        sizes: ["XS", "S", "M", "L", "XL"],
        desc: "Stunning bridal lehenga choli in red with gold embroidery. 3-piece set including lehenga, choli, and dupatta. Perfect for weddings and festive events.",
        feats: ["Embroidered Fabric", "3-Piece Set", "Dupatta Included", "Dry Clean Only"],
        vq: "lehenga+choli+how+to+wear+draping+bridal"
      },
      {
        id: 11, name: "Cotton Palazzo Kurti Set – Beige", cat: "women", sub: "sets", price: 799, mrp: 1299, disc: 38, rating: 4.4, rev: 67, badge: "",
        imgs: ["assets/images/products/wp11a.jpg", "assets/images/products/wp11b.jpg", "assets/images/products/wp11c.jpg"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        desc: "Comfortable cotton palazzo kurti set in beige. Casual-ethnic fusion look ideal for everyday wear, markets, family outings, and casual occasions.",
        feats: ["Pure Cotton", "Printed Kurti", "Elastic Waist Palazzo", "Machine Washable"],
        vq: "palazzo+kurti+set+women+styling"
      },
      {
        id: 12, name: "Phulkari Embroidered Dupatta – Sky Blue", cat: "women", sub: "dupattas", price: 599, mrp: 999, disc: 40, rating: 4.6, rev: 44, badge: "Sale",
        imgs: ["assets/images/products/wd12a.jpg", "assets/images/products/wd12b.jpg", "assets/images/products/wd12c.jpg"],
        sizes: ["Free Size"],
        desc: "Beautiful sky blue dupatta with phulkari embroidery. Pairs perfectly with salwar kameez, kurtis, and lehengas. Chiffon base with beautiful tasselled ends.",
        feats: ["Phulkari Embroidery", "Chiffon Base", "2.5m Length", "Tasselled Ends"],
        vq: "dupatta+draping+styles+how+to+wear"
      },
      // KIDS
      {
        id: 13, name: "Boys Festive Kurta Pyjama – Green", cat: "kids", sub: "boys", price: 499, mrp: 799, disc: 38, rating: 4.8, rev: 94, badge: "New",
        imgs: ["assets/images/products/kb13a.jpg", "assets/images/products/kb13b.jpg", "assets/images/products/kb13c.jpg"],
        sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y"],
        desc: "Adorable festive kurta pyjama set for boys in rich green. Soft cotton fabric with embroidered detailing. Perfect for Eid, Diwali, and family celebrations.",
        feats: ["Soft Cotton Fabric", "Pyjama Included", "Embroidered Neckline", "Easy to Wash"],
        vq: "boys+kurta+kids+ethnic+wear+styling"
      },
      {
        id: 14, name: "Girls Embroidered Frock – Pink", cat: "kids", sub: "girls", price: 399, mrp: 649, disc: 38, rating: 4.7, rev: 78, badge: "",
        imgs: ["assets/images/products/kg14a.jpg", "assets/images/products/kg14b.jpg", "assets/images/products/kg14c.jpg"],
        sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y"],
        desc: "Cute pink frock with floral embroidery for little girls. Soft and comfortable fabric with a bow detail at the back. Ideal for parties and special occasions.",
        feats: ["Cotton Blend", "Embroidered Bodice", "Zippered Back", "Machine Washable"],
        vq: "girls+party+frock+kids+fashion+india"
      },
      {
        id: 15, name: "Baby Romper Set – Yellow", cat: "kids", sub: "infants", price: 349, mrp: 599, disc: 42, rating: 4.9, rev: 63, badge: "Sale",
        imgs: ["assets/images/products/ki15a.jpg", "assets/images/products/ki15b.jpg", "assets/images/products/ki15c.jpg"],
        sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
        desc: "Super soft baby romper in cheerful yellow. Includes romper and matching cap. Gentle on baby's delicate skin with snap buttons for easy changes.",
        feats: ["100% Organic Cotton", "Snap Button Closure", "Includes Matching Cap", "Skin-Gentle Fabric"],
        vq: "baby+romper+newborn+fashion+india"
      },
      {
        id: 16, name: "Girls Ethnic Salwar Kameez – Orange", cat: "kids", sub: "girls", price: 449, mrp: 699, disc: 36, rating: 4.6, rev: 51, badge: "New",
        imgs: ["assets/images/products/kg16a.jpg", "assets/images/products/kg16b.jpg", "assets/images/products/kg16c.jpg"],
        sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y", "8-9Y"],
        desc: "Traditional salwar kameez set for girls in festive orange. Dupatta included. Perfect for weddings, festivals, school functions, and family events.",
        feats: ["Cotton Fabric", "Dupatta Included", "Embroidered Neckline", "Comfortable Fit"],
        vq: "girls+salwar+kameez+kids+ethnic+fashion"
      }
    ];

    const BLOGS = [
      { id: 1, tag: "Style Tips", title: "How to Style a Kurta for Every Occasion", excerpt: "From casual outings to festive gatherings — 5 ways to wear your favourite kurta with total confidence.", date: "May 8, 2025", time: "5 min", bg: "bg-6" },
      { id: 2, tag: "Kids Fashion", title: "Dressing Kids for Festivals: A Complete Guide", excerpt: "Festive season is here! Discover the cutest ethnic and fusion looks for boys and girls of all ages.", date: "April 28, 2025", time: "4 min", bg: "bg-3" },
      { id: 3, tag: "Trends 2025", title: "Top 10 Women's Ethnic Wear Trends This Season", excerpt: "Pastels, printed dupattas, and bold silhouettes — find out what's trending in women's ethnic wear right now.", date: "April 15, 2025", time: "6 min", bg: "bg-5" },
      { id: 4, tag: "Men's Fashion", title: "The Modern Indian Man's Wardrobe Essentials", excerpt: "Every Indian man needs these 7 pieces. From the perfect kurta to smart casuals for any occasion.", date: "March 30, 2025", time: "7 min", bg: "bg-1" },
      { id: 5, tag: "Saree Guide", title: "How to Drape a Saree in 5 Different Styles", excerpt: "The saree is the most versatile garment in India. Here's how to drape it for 5 different occasions.", date: "March 20, 2025", time: "8 min", bg: "bg-9" },
      { id: 6, tag: "Care Tips", title: "How to Wash and Care for Your Ethnic Wear", excerpt: "Proper care extends the life of your clothes. Simple tips to keep ethnic wear looking brand new.", date: "March 10, 2025", time: "4 min", bg: "bg-4" },
    ];

    /* ═══════════════ CART ═══════════════ */
    let cart = [];
    let _activeSize = '';

    function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
    function cartTotal() { return cart.reduce((s, i) => { const p = P(i.id); return s + (p ? p.price * i.qty : 0); }, 0); }
    function P(id) { return PRODUCTS.find(x => x.id === id); }
    function updateBadge() { document.getElementById('cart-badge').textContent = cartCount(); }
    function addToCart(id, size) {
      size = size || _activeSize || 'M';
      const ex = cart.find(i => i.id === id && i.size === size);
      if (ex) ex.qty++; else cart.push({ id, size, qty: 1 });
      updateBadge(); showToast('Added to cart! 🛍️');
    }
    function removeItem(id, size) { cart = cart.filter(i => !(i.id === id && i.size === size)); updateBadge(); renderCart(); }
    function changeQty(id, size, d) {
      const it = cart.find(i => i.id === id && i.size === size);
      if (it) { it.qty = Math.max(1, it.qty + d); updateBadge(); renderCart(); }
    }

    /* ═══════════════ TOAST ═══════════════ */
    function showToast(msg) {
      const t = document.getElementById('toast');
      t.textContent = msg; t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2600);
    }

    /* ═══════════════ STARS ═══════════════ */
    function stars(r) { return '★'.repeat(Math.floor(r)) + '☆'.repeat(5 - Math.floor(r)); }

    /* ═══════════════ PRODUCT CARD ═══════════════ */
    function pCard(p) {
      return `<div class="prod-card" onclick="navigate('product',${p.id})">
    <div class="p-img-wrap">
      <img src="${p.imgs[0]}" alt="${p.name}" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(160deg,#1a3a5c,#2c5282)'"/>
      ${p.badge ? `<div class="p-bdg ${p.badge.toLowerCase()}">${p.badge}</div>` : ''}
      <div class="p-wish" onclick="event.stopPropagation();this.innerHTML=this.innerHTML.includes('♡')?'♥':'♡';this.style.color=this.innerHTML.includes('♥')?'#e74c3c':''">♡</div>
    </div>
    <div class="p-body">
      <div class="p-sub">${p.sub}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-stars">${stars(p.rating)} <span>(${p.rev})</span></div>
      <div class="p-price"><strong>₹${p.price.toLocaleString('en-IN')}</strong><del>₹${p.mrp.toLocaleString('en-IN')}</del><span class="disc">${p.disc}% off</span></div>
      <button class="add-cart" onclick="event.stopPropagation();addToCart(${p.id})">Add to Cart</button>
    </div>
  </div>`;
    }

    /* ═══════════════ BLOG CARD ═══════════════ */
    function bCard(b) {
      return `<div class="blog-card">
    <div class="b-img ${b.bg}"></div>
    <div class="b-body">
      <div class="b-tag">${b.tag}</div>
      <h3>${b.title}</h3>
      <p>${b.excerpt}</p>
      <div class="b-meta">${b.date} · ${b.time} read</div>
      <div class="read-more">Read More →</div>
    </div>
  </div>`;
    }

    /* ═══════════════ RENDERS ═══════════════ */

    function renderHome() {
      document.getElementById('home-prods').innerHTML = PRODUCTS.slice(0, 6).map(pCard).join('');
      document.getElementById('home-blog').innerHTML = BLOGS.slice(0, 3).map(bCard).join('');
    }

    const CAT_META = {
      men: {
        title: "Men's Fashion", sub: "Explore our curated men's collection — ethnic, casual & formal", bc: "Men",
        filters: ["All", "Kurtas", "Shirts", "Bottoms", "Jackets", "Ethnic"]
      },
      women: {
        title: "Women's Fashion", sub: "Celebrate your style with our women's collection", bc: "Women",
        filters: ["All", "Kurtis", "Sarees", "Dresses", "Lehengas", "Sets", "Dupattas"]
      },
      kids: {
        title: "Kids' Wear", sub: "Cute, comfortable clothing for boys, girls, and infants", bc: "Kids",
        filters: ["All", "Boys", "Girls", "Infants"]
      },
      new: {
        title: "🆕 New Arrivals", sub: "Fresh styles added every week", bc: "New Arrivals",
        filters: ["All", "Men", "Women", "Kids"]
      },
      sale: {
        title: "🔥 Big Sale", sub: "Up to 60% off — limited time only!", bc: "Sale",
        filters: ["All", "Men", "Women", "Kids"]
      },
    };

    let _curCat = '', _curFilter = 'All';

    function renderCat(catKey) {
      _curCat = catKey; _curFilter = 'All';
      const m = CAT_META[catKey] || CAT_META.men;
      document.getElementById('cat-title').textContent = m.title;
      document.getElementById('cat-sub').textContent = m.sub;
      document.getElementById('cat-bc').textContent = m.bc;
      drawFilters(m.filters);
      drawProds(filterProds());
    }

    function filterProds() {
      let res;
      if (_curCat === 'new') res = PRODUCTS.filter(p => p.badge === 'New');
      else if (_curCat === 'sale') res = PRODUCTS.filter(p => p.badge === 'Sale' || p.disc >= 38);
      else res = PRODUCTS.filter(p => p.cat === _curCat);
      if (_curFilter !== 'All') {
        const f = _curFilter.toLowerCase();
        if (_curCat === 'new' || _curCat === 'sale') res = res.filter(p => p.cat === f);
        else res = res.filter(p => p.sub === f || p.sub.startsWith(f));
      }
      return res;
    }

    function drawFilters(filters) {
      document.getElementById('filters-bar').innerHTML =
        `<span class="f-label">Filter:</span>` +
        filters.map(f => `<button class="f-chip ${f === _curFilter ? 'active' : ''}" onclick="applyFilter('${f}')">${f}</button>`).join('') +
        `<select class="sort-sel" onchange="applySort(this.value)">
      <option>Sort: Relevance</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Top Rated</option>
    </select>`;
    }

    window.applyFilter = function (f) {
      _curFilter = f;
      drawFilters(CAT_META[_curCat]?.filters || []);
      drawProds(filterProds());
    };
    window.applySort = function (v) {
      let res = [...filterProds()];
      if (v === 'Price: Low to High') res.sort((a, b) => a.price - b.price);
      else if (v === 'Price: High to Low') res.sort((a, b) => b.price - a.price);
      else if (v === 'Top Rated') res.sort((a, b) => b.rating - a.rating);
      drawProds(res);
    };

    function drawProds(res) {
      document.getElementById('cat-count').textContent = `${res.length} Products`;
      document.getElementById('cat-prods').innerHTML = res.length
        ? res.map(pCard).join('')
        : `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-mid);font-size:16px">No products found.</div>`;
    }

    let _activeImgIdx = 0;
    function renderProduct(id) {
      const p = P(id); if (!p) return;
      _activeSize = p.sizes[1] || p.sizes[0];
      _activeImgIdx = 0;

      document.getElementById('pd-bc').innerHTML =
        `<a onclick="navigate('home')">Home</a><span>/</span><a onclick="navigate('cat','${p.cat}')">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</a><span>/</span><span>${p.name}</span>`;

      const gallery = `
    <div>
      <div class="pd-main-img">
        <img id="pd-main" src="${p.imgs[0]}" alt="${p.name}" onerror="this.parentElement.style.background='linear-gradient(160deg,#1a3a5c,#2c5282)'"/>
      </div>
      <div class="pd-thumbs">
        ${p.imgs.map((img, i) => `<div class="pd-th ${i === 0 ? 'active' : ''}" onclick="switchPdImg(${i},'${p.imgs[i]}')">
          <img src="${img}" alt="view ${i + 1}" onerror="this.parentElement.style.background='linear-gradient(160deg,#2a3a5c,#4a5a8c)'"/>
        </div>`).join('')}
      </div>
      <div class="video-box" onclick="window.open('https://www.youtube.com/results?search_query=${encodeURIComponent(p.vq.replace(/\+/g, ' '))}','_blank')">
        <div class="play-circle"><svg width="20" height="20" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21"/></svg></div>
        <div class="video-box-text"><strong>▶ Watch Style Video</strong><span>See how to style this on YouTube →</span></div>
      </div>
    </div>`;

      const info = `
    <div>
      <div class="pd-cat">${p.cat.toUpperCase()} › ${p.sub.toUpperCase()}</div>
      <h2 class="pd-name">${p.name}</h2>
      <div class="pd-rating"><span class="stars">${stars(p.rating)}</span><span>${p.rating} · ${p.rev} reviews</span></div>
      <div class="pd-price-row"><span class="pd-price">₹${p.price.toLocaleString('en-IN')}</span><span class="pd-mrp">₹${p.mrp.toLocaleString('en-IN')}</span><span class="pd-disc">${p.disc}% OFF</span></div>
      <div class="divider"></div>
      <div class="size-lbl">Select Size <span class="size-guide-lnk">Size Guide ›</span></div>
      <div class="sizes">${p.sizes.map(s => `<button class="sz-btn ${s === _activeSize ? 'active' : ''}" onclick="pickSize('${s}')">${s}</button>`).join('')}</div>
      <div class="pd-actions">
        <button class="btn-cart" onclick="addToCart(${p.id},_activeSize)">🛒 Add to Cart</button>
        <button class="btn-buy" onclick="addToCart(${p.id},_activeSize);navigate('cart')">⚡ Buy Now</button>
        <button class="btn-wish-lg" id="pd-wish">♡</button>
      </div>
      <div class="divider"></div>
      <p class="pd-desc">${p.desc}</p>
      <ul class="pd-feats">${p.feats.map(f => `<li>${f}</li>`).join('')}</ul>
      <div class="divider"></div>
      <div class="pd-delivery"><span>🚚 Free delivery on orders ₹499+</span><span>↩️ 7-day easy returns</span><span>🔒 Secure payment</span></div>
    </div>`;

      document.getElementById('pd-content').innerHTML = gallery + info;
      document.getElementById('related-prods').innerHTML =
        PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4).map(pCard).join('');

      document.getElementById('pd-wish').addEventListener('click', function () {
        this.innerHTML = this.innerHTML === '♡' ? '♥' : '♡';
        this.style.color = this.innerHTML === '♥' ? '#e74c3c' : '';
        showToast(this.innerHTML === '♥' ? 'Added to wishlist ♥' : 'Removed from wishlist');
      });
    }

    window.switchPdImg = function (i, src) {
      document.getElementById('pd-main').src = src;
      document.querySelectorAll('.pd-th').forEach((t, idx) => t.classList.toggle('active', idx === i));
    };
    window.pickSize = function (s) {
      _activeSize = s;
      document.querySelectorAll('.sz-btn').forEach(b => b.classList.toggle('active', b.textContent === s));
    };

    function renderCart() {
      if (!cart.length) {
        document.getElementById('cart-content').innerHTML = `
      <div class="empty-cart">
        <div style="font-size:64px;margin-bottom:16px">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet.</p>
        <button class="btn-primary" onclick="navigate('home')">Continue Shopping</button>
      </div>`; return;
      }
      const items = cart.map(i => {
        const p = P(i.id); if (!p) return '';
        return `<div class="cart-item">
      <div class="ci-img"><img src="${p.imgs[0]}" alt="${p.name}" onerror="this.parentElement.style.background='linear-gradient(160deg,#1a3a5c,#2c5282)'"/></div>
      <div class="ci-info">
        <h4>${p.name}</h4>
        <p>Size: <strong>${i.size}</strong> &nbsp;·&nbsp; ${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</p>
        <div class="ci-price">₹${(p.price * i.qty).toLocaleString('en-IN')}</div>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty(${p.id},'${i.size}',-1)">−</button>
          <span class="qty-val">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id},'${i.size}',1)">+</button>
          <span class="rm-btn" onclick="removeItem(${p.id},'${i.size}')">Remove</span>
        </div>
      </div>
    </div>`;
      }).join('');

      const tot = cartTotal(), ship = tot >= 499 ? 0 : 49, disc = Math.round(tot * 0.05);
      document.getElementById('cart-content').innerHTML = `
    <div class="cart-grid">
      <div>${items}</div>
      <div class="cart-summary">
        <h3>Order Summary</h3>
        <div class="sum-row"><span>Subtotal (${cartCount()} items)</span><span>₹${tot.toLocaleString('en-IN')}</span></div>
        <div class="sum-row"><span>Shipping</span><span style="color:#1A8554">${ship === 0 ? 'FREE' : '₹' + ship}</span></div>
        <div class="sum-row"><span>Discount (5%)</span><span style="color:#1A8554">−₹${disc.toLocaleString('en-IN')}</span></div>
        <div class="sum-row total"><span>Total</span><span>₹${(tot + ship - disc).toLocaleString('en-IN')}</span></div>
        <button class="checkout-btn" onclick="showToast('Checkout coming soon! Call +91 98895 17832 to order. 📞')">Proceed to Checkout</button>
        <div style="font-size:12px;color:var(--text-mid);text-align:center;margin-top:10px">🔒 Secure · UPI · Cards · COD</div>
      </div>
    </div>`;
    }

    function renderBlog() {
      document.getElementById('blog-all').innerHTML = BLOGS.map(bCard).join('');
    }

    /* ═══════════════ SEARCH ═══════════════ */
    function doSearch() {
      const q = document.getElementById('s-input').value.trim().toLowerCase(); if (!q) return;
      const res = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.sub.includes(q) || p.cat.includes(q));
      document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
      document.getElementById('page-cat').classList.remove('hidden');
      document.getElementById('cat-title').textContent = `Search: "${q}"`;
      document.getElementById('cat-sub').textContent = `${res.length} result${res.length !== 1 ? 's' : ''} found`;
      document.getElementById('cat-bc').textContent = 'Search Results';
      document.getElementById('filters-bar').innerHTML = '';
      drawProds(res);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ═══════════════ NEWSLETTER ═══════════════ */
    function doSubscribe() {
      const inp = document.getElementById('nl-email');
      if (inp && inp.value.includes('@')) { showToast('Subscribed! 🎉 Thank you!'); inp.value = ''; }
      else if (inp) { inp.style.border = '2px solid #c0392b'; setTimeout(() => inp.style.border = '', 1500); }
    }

    /* ═══════════════ ROUTER ═══════════════ */
    function navigate(page, param) {
      document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
      document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const act = q => { const el = document.querySelector(`[data-pg="${q}"]`); if (el) el.classList.add('active'); };

      if (page === 'home') {
        document.getElementById('page-home').classList.remove('hidden'); act('home'); renderHome();
      } else if (page === 'cat') {
        document.getElementById('page-cat').classList.remove('hidden'); act(param); renderCat(param);
      } else if (page === 'product') {
        document.getElementById('page-product').classList.remove('hidden'); renderProduct(param);
      } else if (page === 'cart') {
        document.getElementById('page-cart').classList.remove('hidden'); renderCart();
      } else if (page === 'blog') {
        document.getElementById('page-blog').classList.remove('hidden'); act('blog'); renderBlog();
      } else if (page === 'about') {
        document.getElementById('page-about').classList.remove('hidden'); act('about');
      } else if (page === 'contact') {
        document.getElementById('page-contact').classList.remove('hidden'); act('contact');
      }
    }

    /* ═══════════════ INIT ═══════════════ */
    navigate('home');