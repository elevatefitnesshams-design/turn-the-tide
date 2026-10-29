/* Applies config.js to the page. No tracking, no cookies, no storage. */
(function () {
  var cfg = window.TTT_CONFIG || {};

  function isSet(v) {
    return typeof v === 'string' && v.trim() !== '' && v.indexOf('[') < 0 && v.indexOf(']') < 0;
  }
  function isHttps(v) {
    return isSet(v) && /^https:\/\/\S+$/.test(v.trim());
  }
  function each(sel, fn) {
    var els = document.querySelectorAll(sel);
    for (var i = 0; i < els.length; i++) fn(els[i]);
  }

  // Wordmark or logo
  each('[data-wordmark]', function (el) {
    if (isSet(cfg.LOGO_URL)) {
      var img = document.createElement('img');
      img.src = cfg.LOGO_URL.trim();
      img.alt = isSet(cfg.LOGO_ALT) ? cfg.LOGO_ALT : 'Turn the Tide';
      el.textContent = '';
      el.appendChild(img);
    } else if (isSet(cfg.WORDMARK)) {
      el.textContent = cfg.WORDMARK;
    }
  });

  // "Get started: $89": links to Stripe only when the Payment Link is set
  each('[data-buy]', function (el) {
    if (isHttps(cfg.STRIPE_PAYMENT_LINK)) {
      el.href = cfg.STRIPE_PAYMENT_LINK.trim();
      el.removeAttribute('aria-disabled');
    } else {
      el.removeAttribute('href');
      el.setAttribute('aria-disabled', 'true');
      el.textContent = 'Opening soon';
    }
  });

  // Free guide links: plain text with "(opening soon)" until the form link is set
  each('[data-guide]', function (el) {
    if (isHttps(cfg.GUIDE_FORM_URL)) {
      el.href = cfg.GUIDE_FORM_URL.trim();
    } else {
      var span = document.createElement('span');
      span.className = 'soon';
      span.textContent = el.textContent + ' (opening soon)';
      el.parentNode.replaceChild(span, el);
    }
  });

  // Contact email
  each('[data-contact]', function (el) {
    if (isSet(cfg.CONTACT_EMAIL) && /@/.test(cfg.CONTACT_EMAIL)) {
      var a = document.createElement('a');
      a.href = 'mailto:' + cfg.CONTACT_EMAIL.trim();
      a.textContent = cfg.CONTACT_EMAIL.trim();
      el.textContent = '';
      el.appendChild(a);
    }
  });

  // Canonical address, once the site URL is known
  if (isHttps(cfg.SITE_URL)) {
    var page = document.documentElement.getAttribute('data-page') || '';
    var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = cfg.SITE_URL.trim().replace(/\/?$/, '/') + page;
    document.head.appendChild(link);
  }
})();
