# Sealed Letter

A handwritten letter in a wax-sealed envelope. No logins, no database: the letter is compressed into the link's `#fragment`, which never reaches the server.

- **Sender:** write the letter, pick a handwriting font and wax color, copy the link.
- **Recipient:** opens the link, presses and holds the seal, the wax breaks, the letter unfolds.

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
- The server sends `noindex` and `no-referrer` headers.
