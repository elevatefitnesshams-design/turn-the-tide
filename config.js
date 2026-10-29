/* Turn the Tide funnel: the ONLY file you edit to change links, contact details or the logo.
   After editing, run the check (see README-funnel.md). Placeholders in [square brackets]
   are allowed here only. While a value is still a placeholder, the page hides that link:
   the "Get started: $89" button shows "Opening soon" and links nowhere.
   Never put secrets, API keys or tokens in this file. The Stripe Payment Link is public. */
window.TTT_CONFIG = {
  // Stripe Payment Link, e.g. https://buy.stripe.com/xxxx (from your Stripe dashboard)
  STRIPE_PAYMENT_LINK: 'https://buy.stripe.com/4gM3cvgLs0jx5Cy67k7g400',

  // Public link to the free guide Google Form (the "viewform" link, after the form is published)
  GUIDE_FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSdWHAWlb500yM6nTh-0xOhyy87rdPGiOt0JcPfik_nyZ8hNDg/viewform',

  // Email address buyers can write to (shown on the thank-you and privacy pages)
  CONTACT_EMAIL: 'elevatefitness.hams@gmail.com',

  // Name used to sign emails. The guide email reads its own copy on the funnel sheet's Settings tab;
  // keep the two the same. The tracker uses "Levi" too.
  SIGNOFF_NAME: 'Levi',

  // The site's public address, ending in a slash, e.g. https://elevatefitnesshams-design.github.io/turn-the-tide/
  SITE_URL: 'https://elevatefitnesshams-design.github.io/turn-the-tide/',

  // Logo: leave blank to show the text wordmark. To use a logo, put the image in the site folder
  // (e.g. logo.png) and write its file name here. LOGO_ALT is read out by screen readers.
  LOGO_URL: '',
  LOGO_ALT: 'Turn the Tide',
  WORDMARK: 'Turn the Tide'
};
