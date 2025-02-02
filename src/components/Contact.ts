export default function contact() {
  const contact = document.getElementById('contact');

  if (contact != null) {
    // Contact Title
    const contactTitle = document.createElement('div');
    contactTitle.classList.add('wavy');
    contactTitle.innerHTML = /* html */ `   
     <span style="--i:1">C</span>
     <span style="--i:2">O</span>
     <span style="--i:3">N</span>
     <span style="--i:4">T</span>
     <span style="--i:5">A</span>
     <span style="--i:6">C</span>
     <span style="--i:7">T</span>`;
    contact.appendChild(contactTitle);

    // Email
    const email = document.createElement('p');
    email.setAttribute('id', 'email');
    email.innerHTML = `For inquiries please drop me a line at:<br>michael.kolesidis@gmail.com`;
    contact.appendChild(email);

    // Socials
    const socials = document.createElement('div');
    socials.setAttribute('id', 'socials');

    // LinkedIn
    const linkedin = document.createElement('a');
    linkedin.classList.add('social');
    linkedin.innerHTML = /* html */ `<span>LINKEDIN</span>`;
    linkedin.href = 'https://www.linkedin.com/in/michaelkolesidis/';
    linkedin.target = '_blank';
    socials.appendChild(linkedin);

    // Mastodon
    const mastodon = document.createElement('a');
    mastodon.classList.add('social');
    mastodon.innerHTML = /* html */ `<span>MASTODON</span>`;
    mastodon.href = 'https://mastodon.social/@michaelkolesidis';
    mastodon.target = '_blank';
    socials.appendChild(mastodon);

    // Bluesky
    const bluesky = document.createElement('a');
    bluesky.classList.add('social');
    bluesky.innerHTML = /* html */ `<span>BLUESKY</span>`;
    bluesky.href = 'https://bsky.app/profile/michaelkolesidis.bsky.social';
    bluesky.target = '_blank';
    socials.appendChild(bluesky);

    // Instagram
    const instagram = document.createElement('a');
    instagram.classList.add('social');
    instagram.innerHTML = /* html */ `<span>INSTAGRAM</span>`;
    instagram.href = 'https://www.instagram.com/michaelkolesidis';
    instagram.target = '_blank';
    socials.appendChild(instagram);

    // GitHub
    const github = document.createElement('a');
    github.classList.add('social');
    github.innerHTML = /* html */ `<span>GITHUB</span>`;
    github.href = 'https://github.com/michaelkolesidis';
    github.target = '_blank';
    socials.appendChild(github);

    // X/Twitter
    const twitter = document.createElement('a');
    twitter.classList.add('social');
    twitter.innerHTML = /* html */ `<span>X/TWITTER</span>`;
    twitter.href = 'https://twitter.com/michael_kol_';
    twitter.target = '_blank';
    socials.appendChild(twitter);

    contact.appendChild(socials);
  }
}
