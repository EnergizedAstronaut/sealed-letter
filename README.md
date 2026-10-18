# Sealed Letter

A handwritten letter in a wax-sealed envelope. No logins, no database: the letter is compressed into the link's `#fragment`, which never reaches the server.

- **Sender:** write the letter, pick a handwriting font and a wax color (a preset, any color, or any two colors split down the middle), copy the link.
- **Recipient:** opens the link, presses and holds the seal, the wax breaks, the letter unfolds.
- **Music (optional):** paste a YouTube link (or a direct `.mp3` link). The player loads silently with the page and starts the moment the reader presses the seal. If a browser still blocks sound (some iPhones), the player asks for one tap. Only the video ID goes in the link; no audio is hosted here.

## Run locally

```
npm install
npm start   # http://localhost:3000
```

## Deploy on Railway (GitHub integration)

1. Push this repo to GitHub.
2. Railway → New Project → Deploy from GitHub repo → pick it.
3. Service → Settings → Networking → Generate Domain.

Every push to `main` redeploys automatically. Healthcheck: `/healthz`.

## Notes

- Links are long-ish (the letter is the link); a 3000 character cap keeps them shareable.
- The server sends `noindex` and a `strict-origin` referrer policy (YouTube embeds need the origin; the letter itself is in the `#` and is never sent).
