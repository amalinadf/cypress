# Assignment 4 - Cypress Automation Testing
**Amalina Dwi Firzanah**

Automation testing pakai Cypress, mencakup **API testing** dan **UI testing** (nilai plus) untuk 2 target:
- API: `https://api-script-labs.hendri.me/`
- UI: `https://labs.hendri.me/`

## Struktur Folder

```
cypress/e2e/
├── 01-health.cy.js              # API - Health check
├── 02-register.cy.js            # API - Register user
├── 03-login.cy.js               # API - Login
├── 04-get-labs.cy.js            # API - GET labs
├── 05-post-labs.cy.js           # API - POST/create lab
├── 06-put-labs.cy.js            # API - PUT/update lab
├── 07-delete-labs.cy.js         # API - DELETE lab
└── ui/
    ├── 01-access.cy.js                    # Akses website
    ├── 02-header.cy.js                    # Header elements
    ├── 03-footer.cy.js                    # Footer elements
    ├── 04-interactive-elements.cy.js      # Elemen interaktif
    ├── 05-responsive-mobile.cy.js         # Responsive - mobile
    ├── 06-images.cy.js                    # Image assets
    ├── 07-hero-content.cy.js              # Hero section content
    ├── 08-start-testing-button.cy.js      # Tombol "Start Testing"
    ├── 09-view-scenarios-button.cy.js     # Tombol "View Scenarios"
    ├── 10-module-cards.cy.js              # Module cards (Auth/CRUD/E2E)
    ├── 11-navigation-auth.cy.js           # Navigasi ke section Auth
    ├── 12-testing-sections.cy.js          # Section pendekatan testing
    ├── 13-broken-links.cy.js              # Cek broken links
    ├── 14-load-time.cy.js                 # Waktu loading halaman
    ├── 15-responsive-tablet.cy.js         # Responsive - tablet
    ├── 16-login-valid.cy.js               # Login sukses (standard user & admin)
    ├── 17-login-invalid-password.cy.js    # Login - password salah
    ├── 18-login-empty-fields.cy.js        # Login - field kosong
    ├── 19-login-unregistered-email.cy.js  # Login - email tidak terdaftar
    ├── 20-product-search.cy.js            # Search produk
    ├── 21-add-to-cart.cy.js               # Add to cart
    ├── 22-checkout-form-validation.cy.js  # Alur checkout lengkap
    ├── 23-cart-quantity.cy.js             # Kontrol quantity cart (+/-/remove)
    ├── 24-search-no-results.cy.js         # Search - tanpa hasil
    ├── 25-invalid-email-format.cy.js      # Checkout - format email invalid
    ├── 26-login-invalid-email-format.cy.js # Login - format email invalid
    ├── 27-category-filter.cy.js           # Filter kategori produk
    ├── 28-script-crud.cy.js               # CRUD script lab (Create/Read/Update/Delete)
    ├── 29-logout.cy.js                    # Logout
    ├── 30-locked-user-login.cy.js         # Login - akun locked
    └── 31-problem-user-checkout.cy.js     # Checkout - problem user (intentional fail)
```

## Cara Menjalankan

Install dependencies dulu:
```bash
npm install
```

Jalankan semua test (API + UI):
```bash
npx cypress run
```

Jalankan API test saja:
```bash
npx cypress run --spec "cypress/e2e/*.cy.js"
```

Jalankan UI test saja:
```bash
npx cypress run --spec "cypress/e2e/ui/**/*.cy.js"
```

Buka Cypress interaktif (buat lihat proses testing secara visual):
```bash
npx cypress open
```

## Cakupan Testing

### API Testing (7 test case)
CRUD lengkap ke Script Labs API: health check, register, login, GET/POST/PUT/DELETE labs, memakai `cypress/fixtures/test-data.json` untuk mengoper token & data antar file spec.

### UI Testing (31 test case)
- **Landing page**: akses, header, footer, konten hero, tombol, module cards, responsive (mobile & tablet), broken links, load time
- **Autentikasi**: login sukses (standard user & admin), password salah, field kosong, email tidak terdaftar, format email invalid, akun locked
- **Shop**: search produk (ada hasil & tanpa hasil), filter kategori, add to cart, kontrol quantity
- **Checkout**: validasi form, alur checkout sukses, format email invalid, skenario problem user (intentional fail)
- **Script CRUD**: create, read, update, delete script lab (termasuk modal konfirmasi delete)
- **Logout**: verifikasi sesi berakhir dengan benar

### Demo Akun yang Dipakai
| Akun | Email | Password | Keterangan |
|---|---|---|---|
| Standard User | standard_user@example.com | script_sauce | Login & checkout normal |
| Admin | admin@example.com | admin123 | Login dengan role admin |
| Locked User | locked_user@example.com | script_sauce | Login gagal - akun terkunci |
| Problem User | problem_user@example.com | script_sauce | Login sukses, checkout gagal (intentional) |

## Catatan Teknis

- Migrasi dari `Cypress.env()` ke `cy.writeFile()`/`cy.readFile()` untuk data sharing antar spec API testing, karena `Cypress.env()` write dihapus di Cypress 16.
- Beberapa test digabung jadi satu `it()` (bukan per skenario) untuk menghindari rate limit login API (`5 request/15 menit`) yang diterapkan server.
- Selector UI mengutamakan `data-testid` (kalau tersedia) untuk stabilitas, dengan fallback ke `cy.contains()` untuk elemen tanpa test id.