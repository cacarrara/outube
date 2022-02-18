const youtubeUrlsRegex = /(m\.youtube\.com|youtube\.com|youtu\.be)/i;
const yewUrl = "yewtu.be";
const loc = window.location.href;

if (loc.includes("/watch?v=")) {
  window.location = loc.replace(youtubeUrlsRegex, yewUrl);
}
