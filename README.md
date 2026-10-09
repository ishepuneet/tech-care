# SecureTech Premium — Vite + React

A responsive premium landing page inspired by the supplied security-services reference, expanded to include CCTV/security installation, laptop repair, computer repair, and tech accessories.

## Stack
- Vite + React
- Tailwind CSS 3
- Three.js via React Three Fiber + Drei (interactive 3D camera preview)
- Framer Motion
- Lucide icons

## Run locally
```bash
npm install
npm run dev
```
Build for production:
```bash
npm run build
npm run preview
```

## Before publishing
1. Replace **SecureTech** with your business name and logo.
2. Add your real phone/WhatsApp number, shop address, opening hours, and service area.
3. The enquiry form currently opens WhatsApp with a prefilled message; update the `https://wa.me/` URL in `src/App.jsx` to include your country code and business number (digits only).
4. Replace the sample review with a genuine customer review or remove it.
5. Product photos are illustrative Unsplash images. Replace them with your own licensed product photography if needed.
6. Add real prices, inventory, policies, and contact details.

## Notes
- The 3D camera is a lightweight procedural Three.js model, not a static image. Drag to rotate; it auto-rotates on desktop.
- Unsplash images and Google Fonts require an internet connection.
