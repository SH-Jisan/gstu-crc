# 15. Production Deployment & DevOps Runbook

> **Document Code**: `CRC-DOC-15`  
> **Production Target**: Frontend: Vercel (`https://gstu-crc.org`) | Backend: Render (`https://api.gstu-crc.org`)  
> **Status**: APPROVED  

---

## 15.1 Frontend Deployment (Vercel)
1. Link GitHub repository to Vercel team account.
2. Configure project root directory to `frontend/`.
3. Set Environment Variables:
   - `NEXT_PUBLIC_API_BASE_URL`: `https://api.gstu-crc.org/api/v1`
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: `crc-cloud`
4. Custom Domain Mapping:
   - Add Domain: `gstu-crc.org` and `www.gstu-crc.org`.
   - Configure DNS: A Record pointing to `76.76.21.21` or CNAME to `cname.vercel-dns.com`.
   - Vercel automatically provisions Let's Encrypt TLS certificate.

---

## 15.2 Backend Deployment (Render)
1. Create new Web Service on Render linking to GitHub repository (`backend/`).
2. Build Command: `npm install && npx prisma generate && npm run build`
3. Start Command: `npm run start:prod`
4. Set Environment Variables:
   - `DATABASE_URL`: Supabase PostgreSQL connection string (Transaction pooler on port 6543 / 5432).
   - `JWT_SECRET`: 64-character high-entropy secret.
   - `GOOGLE_SERVICE_ACCOUNT_JSON`: Base64 encoded Google Service Account key.
   - `GOOGLE_DRIVE_FOLDER_ID`: Target Google Drive Vault ID.
5. Setup UptimeRobot:
   - Configure HTTP monitor pinging `https://api.gstu-crc.org/api/v1/health` every 10 minutes to prevent Render free-tier sleep.
