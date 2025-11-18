# Cara Ganti Branch di Vercel

## Metode 1: Melalui Vercel Dashboard (Paling Mudah)

1. Buka https://vercel.com dan login
2. Pilih project Anda
3. Klik **Settings** (di menu atas)
4. Pilih **Git** di sidebar kiri
5. Scroll ke bagian **Production Branch**
6. Klik dropdown dan pilih branch yang ingin digunakan (misalnya: `main`, `master`, `develop`)
7. Klik **Save**

## Metode 2: Melalui Vercel CLI

```bash
# Install Vercel CLI (jika belum)
npm i -g vercel

# Login ke Vercel
vercel login

# Link project (jika belum)
vercel link

# Deploy branch saat ini sebagai production
vercel --prod

# Atau deploy branch tertentu
git checkout nama-branch
vercel --prod
```

## Metode 3: Melalui GitHub/GitLab Integration

1. Di Vercel Dashboard → Settings → Git
2. Pastikan repository sudah terhubung
3. Di bagian **Production Branch**, pilih branch yang diinginkan
4. Setiap push ke branch tersebut akan otomatis deploy

## Catatan Penting:

- **Production Branch**: Branch yang digunakan untuk production deployment
- **Preview Deployments**: Semua branch lain akan otomatis dibuat preview deployment
- Setelah ganti branch, Vercel akan otomatis deploy branch baru tersebut
- Pastikan branch yang dipilih sudah ada di repository Anda

## Troubleshooting:

Jika branch tidak muncul di dropdown:
- Pastikan branch sudah di-push ke remote repository
- Refresh halaman Vercel dashboard
- Cek koneksi Git di Settings → Git

