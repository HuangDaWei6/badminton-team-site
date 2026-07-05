(function () {
  const data = window.siteData;
  const boardBadmintonGoogleMap =
    "https://maps.app.goo.gl/g1Bk3X5LqeY1Cbe97";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function setText(selector, value) {
    const element = $(selector);
    if (element) element.textContent = value;
  }

  function setLinks(selector, value) {
    $$(selector).forEach((element) => {
      element.href = value;
    });
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function getGoogleMapUrl(location) {
    if ((location.name || location.venue) === "板橋羽球館") {
      return boardBadmintonGoogleMap;
    }
    const query = encodeURIComponent(`${location.name || location.venue} ${location.address}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  function createMapLink(location) {
    const link = createElement("a", "map-link", "Google Map");
    link.href = getGoogleMapUrl(location);
    link.target = "_blank";
    link.rel = "noopener";
    return link;
  }

  function renderHero() {
    setText("[data-site-name]", data.siteName);
    setText("[data-footer-name]", data.siteName);
    setText("[data-hero-kicker]", data.hero.kicker);
    setText("[data-hero-title]", data.hero.title);
    setText("[data-hero-copy]", data.hero.copy);
    setLinks("[data-line-link]", data.links.line);
    setLinks("[data-form-link]", data.links.googleForm);
    setLinks("[data-instagram-link]", data.links.instagram);
    setLinks("[data-facebook-link]", data.links.facebook);
    setLinks("[data-email-link]", data.links.email);

    const stats = $("#hero-stats");
    data.hero.stats.forEach((stat) => {
      const item = createElement("div", "stat-item");
      item.append(createElement("dt", "", stat.label), createElement("dd", "", stat.value));
      stats.append(item);
    });
  }

  function renderCoaches() {
    const target = $("#coach-list");
    data.coaches.forEach((coach) => {
      const card = createElement("article", "coach-card");
      const image = createElement("img");
      image.src = coach.image;
      image.alt = coach.name;
      image.loading = "lazy";

      const body = createElement("div", "coach-body");
      body.append(createElement("p", "card-kicker", coach.title), createElement("h3", "", coach.name));

      const list = createElement("ul", "clean-list");
      coach.credentials.forEach((item) => list.append(createElement("li", "", item)));
      body.append(list);
      card.append(image, body);
      target.append(card);
    });
  }

  function renderSportTracks() {
    const target = $("#program-list");
    if (!target) return;

    data.sportTracks.forEach((track) => {
      const card = createElement("article", "program-card");
      card.append(
        createElement("p", "card-kicker", track.kicker),
        createElement("h3", "", track.name),
        createElement("p", "", track.copy)
      );

      const list = createElement("ul", "clean-list");
      track.items.forEach((item) => list.append(createElement("li", "", item)));

      const link = createElement("a", "button button-small", track.action);
      link.href = track.target;
      card.append(list, link);
      target.append(card);
    });
  }

  function renderPhilosophy() {
    setText("[data-philosophy-intro]", data.philosophy.intro);
    const target = $("#philosophy-list");
    data.philosophy.points.forEach((point) => {
      const item = createElement("article", "feature-card");
      item.append(createElement("h3", "", point.title), createElement("p", "", point.copy));
      target.append(item);
    });
  }

  function renderPricing() {
    const target = $("#pricing-list");
    data.pricing.forEach((plan) => {
      const card = createElement("article", "price-card");
      card.append(createElement("h3", "", plan.name), createElement("p", "price", plan.price), createElement("p", "", plan.note));

      const list = createElement("ul", "clean-list");
      plan.items.forEach((item) => list.append(createElement("li", "", item)));
      card.append(list);
      target.append(card);
    });
  }

  function renderRegularClasses() {
    const target = $("#regular-class-list");
    if (!target || !data.regularClasses) return;

    data.regularClasses.forEach((group) => {
      const card = createElement("article", "schedule-card");
      const header = createElement("div", "schedule-header");
      const mapUrl = getGoogleMapUrl(group);
      const venueLink = createElement("a", "schedule-map-link", group.venue);
      venueLink.href = mapUrl;
      venueLink.target = "_blank";
      venueLink.rel = "noopener";

      const addressLink = createElement("a", "schedule-address-link", group.address);
      addressLink.href = mapUrl;
      addressLink.target = "_blank";
      addressLink.rel = "noopener";

      const title = createElement("h3");
      title.append(venueLink);
      header.append(title, addressLink);

      const tableWrap = createElement("div", "schedule-table-wrap");
      const table = createElement("table", "schedule-table");
      const thead = document.createElement("thead");
      const headRow = document.createElement("tr");
      ["課程", "時間", "程度", "單次", "季繳"].forEach((label) => {
        headRow.append(createElement("th", "", label));
      });
      thead.append(headRow);

      const tbody = document.createElement("tbody");
      group.courses.forEach((course) => {
        const row = document.createElement("tr");
        [course.name, course.time, course.level, course.single, course.season].forEach((value) => {
          row.append(createElement("td", "", value));
        });
        tbody.append(row);
      });

      table.append(thead, tbody);
      tableWrap.append(table);
      card.append(header, tableWrap, createElement("p", "schedule-note", group.note));
      target.append(card);
    });
  }

  function renderLocationsAndPromos() {
    const locations = $("#location-list");
    data.locations.forEach((location) => {
      const item = createElement("article", "location-item");
      const links = createElement("div", "map-links");
      links.append(createMapLink(location));
      item.append(
        createElement("h3", "", location.name),
        createElement("p", "", location.address),
        links
      );
      locations.append(item);
    });

    const promos = $("#promo-list");
    promos.append(createElement("p", "eyebrow", "Promotions"), createElement("h2", "", "優惠活動"));
    data.promotions.forEach((promo) => {
      const item = createElement("article", "promo-item");
      item.append(createElement("h3", "", promo.title), createElement("p", "", promo.copy));
      promos.append(item);
    });
  }

  function renderSessions() {
    const target = $("#session-list");
    data.sessions.forEach((session) => {
      const card = createElement("article", "session-card");
      const info = createElement("div", "session-info");
      info.append(
        createElement("span", "status-pill", session.status),
        createElement("h3", "", session.title),
        createElement("p", "", `${session.level} | ${session.date} | ${session.location}`)
      );

      const link = createElement("a", "button button-small", session.formLabel);
      link.href = session.link || data.links.googleForm;
      link.target = "_blank";
      link.rel = "noopener";
      card.append(info, link);
      target.append(card);
    });
  }

  function renderVideos(items, selector) {
    const target = $(selector);
    items.forEach((video) => {
      const link = createElement("a", "video-card");
      link.href = video.url;
      link.target = "_blank";
      link.rel = "noopener";

      const image = createElement("img");
      image.src = video.thumbnail;
      image.alt = video.title;
      image.loading = "lazy";

      const body = createElement("span", "video-body");
      body.append(createElement("span", "card-kicker", video.category), createElement("strong", "", video.title));
      link.append(image, body);
      target.append(link);
    });
  }

  function renderContact() {
    setText("[data-contact-copy]", data.contact.copy);
    const target = $("#contact-list");
    if (!target || !data.contact.items) return;
    data.contact.items.forEach((item) => {
      const row = createElement("div", "contact-item");
      row.append(createElement("span", "", item.label), createElement("strong", "", item.value));
      target.append(row);
    });
  }

  function initBackToTop() {
    const control = $(".back-to-top");
    if (!control) return;
    control.addEventListener("click", (event) => {
      event.preventDefault();
      if (control.classList.contains("is-playing")) return;

      control.classList.add("is-playing");
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 430);
      window.setTimeout(() => {
        control.classList.remove("is-playing");
      }, 920);
    });
  }

  renderHero();
  renderSportTracks();
  renderCoaches();
  renderPhilosophy();
  renderPricing();
  renderRegularClasses();
  renderLocationsAndPromos();
  renderSessions();
  renderVideos(data.trainingVideos, "#training-video-list");
  renderVideos(data.archiveVideos, "#archive-video-list");
  renderContact();
  initBackToTop();
})();
