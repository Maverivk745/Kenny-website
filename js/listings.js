// ============================================
// SOLVEN REALITIES — Listings Data & Logic
// ============================================
// Each listing can have up to 5 images in the
// `images` array. First image = main card photo.
// To add a listing: copy an object and edit fields.
// ============================================

const U = 'https://images.unsplash.com/'; // shorthand

const LISTINGS = [
  {
    id: 1,
    title: "4-Unit Residential Building",
    type: "Apartment",
    status: "For Sale",
    location: "Lufuka",
    price: 480000000,
    priceLabel: "UGX 480M",
    specs: ["4 units", "3 floors", "0.15 acres"],
    images: [
      U + 'photo-1768638687896-35bde623d532?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1600596542815-ffad4c1539a9?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1724582586529-62622e50c0b3?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1616486029423-aaa4789e8c9a?w=1200&q=85&auto=format&fit=crop',
    ]
  },
  {
    id: 2,
    title: "Contemporary 4-Bedroom Villa",
    type: "Villa",
    status: "For Rent",
    location: "Kampala Suburbs",
    price: 3500000,
    priceLabel: "UGX 3.5M / mo",
    specs: ["4 bed", "3 bath", "Gated"],
    images: [
      U + 'photo-1745761264415-6acbdb47a0c7?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1523217582562-09d0def993a6?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1758915753332-cab59126742c?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1616486029423-aaa4789e8c9a?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1724582586529-62622e50c0b3?w=1200&q=85&auto=format&fit=crop',
    ]
  },
  {
    id: 3,
    title: "Surveyed Plot, Ready to Build",
    type: "Land",
    status: "For Sale",
    location: "Greater Kampala",
    price: 65000000,
    priceLabel: "UGX 65M",
    specs: ["50x100 ft", "Titled"],
    images: [
      U + 'photo-1557096336-8e576993d3ff?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1675756261486-09bd1e0f6c8a?w=1200&q=85&auto=format&fit=crop',
    ]
  },
  {
    id: 4,
    title: "Bungalow Rental Units",
    type: "Rental Unit",
    status: "For Rent",
    location: "Mukono",
    price: 800000,
    priceLabel: "UGX 800K / mo",
    specs: ["2 bed", "1 bath", "Self-contained"],
    images: [
      U + 'photo-1523217582562-09d0def993a6?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1616486029423-aaa4789e8c9a?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1724582586529-62622e50c0b3?w=1200&q=85&auto=format&fit=crop',
    ]
  },
  {
    id: 5,
    title: "Furnished City-View Apartment",
    type: "Apartment",
    status: "For Rent",
    location: "Munyonyo",
    price: 2200000,
    priceLabel: "UGX 2.2M / mo",
    specs: ["2 bed", "2 bath", "Furnished"],
    images: [
      U + 'photo-1758915753332-cab59126742c?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1724582586529-62622e50c0b3?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1616486029423-aaa4789e8c9a?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1600596542815-ffad4c1539a9?w=1200&q=85&auto=format&fit=crop',
    ]
  },
  {
    id: 6,
    title: "Subdivided Development Land",
    type: "Land",
    status: "For Sale",
    location: "Greater Kampala",
    price: 38000000,
    priceLabel: "UGX 38M",
    specs: ["100x100 ft", "Survey verified"],
    images: [
      U + 'photo-1557096336-8e576993d3ff?w=1200&q=85&auto=format&fit=crop&crop=entropy',
      U + 'photo-1675756261486-09bd1e0f6c8a?w=1200&q=85&auto=format&fit=crop',
    ]
  },
  {
    id: 7,
    title: "Commercial Office Suite",
    type: "Commercial",
    status: "For Rent",
    location: "Kampala Suburbs",
    price: 4800000,
    priceLabel: "UGX 4.8M / mo",
    specs: ["320 sqm", "Open-plan", "Parking"],
    images: [
      U + 'photo-1600596542815-ffad4c1539a9?w=1200&q=85&auto=format&fit=crop&crop=top',
      U + 'photo-1724582586529-62622e50c0b3?w=1200&q=85&auto=format&fit=crop',
      U + 'photo-1768638687896-35bde623d532?w=1200&q=85&auto=format&fit=crop&crop=top',
    ]
  }
];

// ============================================
// COUNTER — auto-derived from listings data
// ============================================
function buildCounterData(listings) {
  const total = listings.length;
  const forSale = listings.filter(l => l.status === 'For Sale').length;
  const forRent = listings.filter(l => l.status === 'For Rent').length;
  const land = listings.filter(l => l.type === 'Land').length;
  const apartments = listings.filter(l => l.type === 'Apartment').length;
  const villas = listings.filter(l => l.type === 'Villa' || l.type === 'Rental Unit').length;
  const commercial = listings.filter(l => l.type === 'Commercial').length;
  return { total, forSale, forRent, land, apartments, villas, commercial };
}

function animateCount(el, target, duration) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count-target]');
  if (!counters.length) return;

  const data = buildCounterData(LISTINGS);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const key = entry.target.dataset.countTarget;
        const target = data[key] || 0;
        animateCount(entry.target, target, 1400);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
}

// ============================================
// LIGHTBOX
// ============================================
let currentImages = [];
let currentIndex = 0;

function openLightbox(images, startIndex) {
  currentImages = images;
  currentIndex = startIndex || 0;

  let lb = document.getElementById('sr-lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'sr-lightbox';
    lb.innerHTML = `
      <div class="lb-overlay"></div>
      <div class="lb-container">
        <button class="lb-close" aria-label="Close">✕</button>
        <button class="lb-prev" aria-label="Previous">‹</button>
        <button class="lb-next" aria-label="Next">›</button>
        <div class="lb-img-wrap">
          <img class="lb-main-img" src="" alt="Property photo">
        </div>
        <div class="lb-counter"></div>
        <div class="lb-thumbs"></div>
      </div>
    `;
    document.body.appendChild(lb);

    lb.querySelector('.lb-overlay').addEventListener('click', closeLightbox);
    lb.querySelector('.lb-close').addEventListener('click', closeLightbox);
    lb.querySelector('.lb-prev').addEventListener('click', () => navigateLightbox(-1));
    lb.querySelector('.lb-next').addEventListener('click', () => navigateLightbox(1));

    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('lb-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

  updateLightbox();
  lb.classList.add('lb-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('sr-lightbox');
  if (lb) lb.classList.remove('lb-open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
  updateLightbox();
}

function updateLightbox() {
  const lb = document.getElementById('sr-lightbox');
  if (!lb) return;

  const img = lb.querySelector('.lb-main-img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = currentImages[currentIndex];
    img.onload = () => { img.style.opacity = '1'; };
    img.style.opacity = '1';
  }, 120);

  lb.querySelector('.lb-counter').textContent = `${currentIndex + 1} / ${currentImages.length}`;

  const prev = lb.querySelector('.lb-prev');
  const next = lb.querySelector('.lb-next');
  prev.style.display = currentImages.length <= 1 ? 'none' : '';
  next.style.display = currentImages.length <= 1 ? 'none' : '';

  // Thumbnails
  const thumbs = lb.querySelector('.lb-thumbs');
  thumbs.innerHTML = '';
  if (currentImages.length > 1) {
    currentImages.forEach((src, i) => {
      const t = document.createElement('div');
      t.className = 'lb-thumb' + (i === currentIndex ? ' lb-thumb-active' : '');
      t.innerHTML = `<img src="${src}" alt="Photo ${i + 1}">`;
      t.addEventListener('click', () => {
        currentIndex = i;
        updateLightbox();
      });
      thumbs.appendChild(t);
    });
  }
}

// ============================================
// LISTING CARD RENDER
// ============================================
function statusClass(status) {
  if (status === 'For Sale') return 'for-sale';
  if (status === 'For Rent') return 'for-rent';
  return 'sold';
}

function renderCard(item) {
  const mainImg = item.images[0];
  const hasMultiple = item.images.length > 1;

  const specsHtml = item.specs.map(s => {
    const parts = s.split(' ');
    return `<span><strong>${parts[0]}</strong> ${parts.slice(1).join(' ')}</span>`;
  }).join('');

  const thumbsHtml = hasMultiple
    ? `<div class="lc-thumbs">
        ${item.images.slice(0, 5).map((src, i) =>
          `<div class="lc-thumb${i === 0 ? ' active' : ''}" data-src="${src}" data-idx="${i}">
            <img src="${src}" alt="Photo ${i + 1}" loading="lazy">
          </div>`
        ).join('')}
      </div>`
    : '';

  const card = document.createElement('div');
  card.className = 'listing-card';
  card.dataset.listingId = item.id;
  card.innerHTML = `
    <div class="lc-img-wrap" data-listing-id="${item.id}">
      <span class="status-badge ${statusClass(item.status)}">${item.status}</span>
      ${hasMultiple ? `<span class="lc-img-count">📷 ${item.images.length}</span>` : ''}
      <img class="lc-main-img" src="${mainImg}" alt="${item.title}" loading="lazy">
      <div class="lc-zoom-hint">🔍 Click to zoom</div>
      <span class="lc-price-tag">${item.priceLabel}</span>
    </div>
    ${thumbsHtml}
    <div class="lc-body">
      <div class="lc-type">${item.type}</div>
      <h3>${item.title}</h3>
      <div class="lc-location">📍 ${item.location}</div>
      <div class="lc-specs">${specsHtml}</div>
    </div>
  `;

  // Click main image ONLY = open lightbox
  card.querySelector('.lc-img-wrap').addEventListener('click', () => {
    const currentSrc = card.querySelector('.lc-main-img').src;
    const currentIdx = item.images.findIndex(src => currentSrc.includes(src.split('?')[0].split('/').pop()));
    openLightbox(item.images, Math.max(0, currentIdx));
  });

  // Click thumbnails = ONLY swap main image, no lightbox
  if (hasMultiple) {
    card.querySelectorAll('.lc-thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = thumb.dataset.src;
        card.querySelector('.lc-main-img').src = src;
        card.querySelectorAll('.lc-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  return card;
}

function renderListings(items) {
  const grid = document.getElementById('listing-grid');
  const countEl = document.getElementById('result-count');
  if (!grid) return;

  grid.innerHTML = '';
  items.forEach(item => grid.appendChild(renderCard(item)));
  if (countEl) countEl.textContent = items.length;
}

// ============================================
// FILTER + SORT + SEARCH (all combined)
// ============================================
function getSearchTerms(raw) {
  // Split the query into individual words for multi-word matching
  return raw.toLowerCase().trim().split(/\s+/).filter(Boolean);
}

function matchesSearch(item, terms) {
  if (!terms.length) return true;
  // Build a single searchable string from all listing fields
  const haystack = [
    item.title,
    item.type,
    item.status,
    item.location,
    item.priceLabel,
    ...item.specs
  ].join(' ').toLowerCase();

  // Every word in the query must appear somewhere in the listing
  return terms.every(term => haystack.includes(term));
}

function applyFilters() {
  const rawSearch = document.getElementById('f-search')?.value || '';
  const terms = getSearchTerms(rawSearch);

  const location = document.getElementById('f-location')?.value || 'all';
  const type = document.getElementById('f-type')?.value || 'all';
  const status = document.getElementById('f-status')?.value || 'all';
  const maxPrice = document.getElementById('f-price')?.value || 'all';
  const sort = document.getElementById('f-sort')?.value || 'default';

  let filtered = LISTINGS.filter(item => {
    if (!matchesSearch(item, terms)) return false;
    if (location !== 'all' && item.location !== location) return false;
    if (type !== 'all' && item.type !== type) return false;
    if (status !== 'all' && item.status !== status) return false;
    if (maxPrice !== 'all' && item.price > parseInt(maxPrice, 10)) return false;
    return true;
  });

  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);

  renderListings(filtered);

  // Show / hide clear button
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.style.display = rawSearch ? 'flex' : 'none';

  // Show / hide empty state
  const grid = document.getElementById('listing-grid');
  const emptyEl = document.getElementById('listings-empty');
  const emptyMsg = document.getElementById('empty-msg');
  if (filtered.length === 0 && grid && emptyEl) {
    grid.style.display = 'none';
    emptyEl.style.display = 'block';
    if (emptyMsg) {
      if (rawSearch && terms.length) {
        emptyMsg.textContent = `No properties matched "${rawSearch}". Try different keywords or clear the filters.`;
      } else {
        emptyMsg.textContent = 'No properties match the selected filters.';
      }
    }
  } else if (grid && emptyEl) {
    grid.style.display = '';
    emptyEl.style.display = 'none';
  }
}

function resetAll() {
  const searchEl = document.getElementById('f-search');
  if (searchEl) searchEl.value = '';
  ['f-location', 'f-type', 'f-status', 'f-price'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = 'all';
  });
  const sort = document.getElementById('f-sort');
  if (sort) sort.value = 'default';
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.style.display = 'none';
  renderListings(LISTINGS);
  const emptyEl = document.getElementById('listings-empty');
  const grid = document.getElementById('listing-grid');
  if (emptyEl) emptyEl.style.display = 'none';
  if (grid) grid.style.display = '';
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function () {
  // Listings page
  if (document.getElementById('listing-grid')) {
    renderListings(LISTINGS);

    // Live search — fires on every keystroke with a small debounce
    let searchTimer;
    const searchEl = document.getElementById('f-search');
    if (searchEl) {
      searchEl.addEventListener('input', () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(applyFilters, 180);
      });
      // Allow Enter key to trigger immediately
      searchEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { clearTimeout(searchTimer); applyFilters(); }
        if (e.key === 'Escape') { searchEl.value = ''; applyFilters(); searchEl.blur(); }
      });
    }

    // Clear button inside search bar
    const clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchEl) searchEl.value = '';
        applyFilters();
        if (searchEl) searchEl.focus();
      });
    }

    // Dropdowns
    ['f-location', 'f-type', 'f-status', 'f-price', 'f-sort'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', applyFilters);
    });

    // Reset buttons (filter bar + empty state)
    ['f-reset', 'empty-reset'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', resetAll);
    });
  }

  // Counter (runs on any page that has [data-count-target] elements)
  initCounters();
});
