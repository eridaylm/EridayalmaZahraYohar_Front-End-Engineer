# Role Explorer

Mini assignment Front-End Engineer, Sekolah Karir Batch 2.
Komponen responsif untuk menelusuri lowongan berdasarkan department.

- Demo: ``
- Repo: `https://github.com/eridaylm/EridayalmaZahraYohar_Front-End-Engineer`

Stack: React 18, TypeScript, Tailwind CSS v4, Vite. Tanpa backend, data mock hardcoded.

## Menjalankan

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + build produksi ke dist/
npm run preview   # cek hasil build
```

## Struktur

```
src/
  components/
    RoleExplorer.tsx   container + state (department, query)
    FilterBar.tsx      pill filter department
    RoleGrid.tsx       grid 1 / 2 / 3 kolom
    RoleCard.tsx       kartu satu role
    EmptyState.tsx     tampilan saat hasil kosong
  data/
    roles.ts           9 role mock
    departments.ts     daftar filter + warna badge
  types.ts             tipe Role, Department, dst.
```

## Tiga state

| State | Kapan muncul |
| --- | --- |
| Default | Filter "All" aktif, semua 9 role tampil |
| Filtered | Pilih department atau ketik pencarian. Hasil berubah langsung, teks "Menampilkan N posisi" ikut berubah |
| Empty | Tidak ada hasil. Coba pilih **People & Operations** (sengaja dikosongkan di mock data) atau cari kata yang tidak ada, misalnya `zzz` |

Tombol "Reset filter" mengembalikan department ke "All" dan mengosongkan pencarian.

## Keputusan desain

- **State di satu tempat.** `RoleExplorer` memegang `department` dan `query`. Daftar hasil dihitung dengan `useMemo` dari dua nilai itu, jadi tidak ada state turunan yang bisa tidak sinkron. Komponen lain hanya menerima props.
- **Tanpa library tambahan.** Transisi cukup dengan CSS (fade ringan pada grid, hover pada kartu). Animasi dimatikan kalau user memakai `prefers-reduced-motion`.
- **Pencarian ditambahkan** sebagai jalur kedua menuju empty state, dan karena filter department saja terasa terbatas kalau role bertambah banyak.
- **Jumlah di tiap pill** supaya user tahu department mana yang kosong sebelum mengkliknya.
- **Tipe `Department` dibuat union literal**, jadi salah ketik nama department di data akan gagal saat `tsc`.
- **Mobile:** filter bar scroll horizontal dengan snap, grid 1 kolom. Tablet 2 kolom, desktop 3 kolom.

## Aksesibilitas

- Filter berupa `<button>` dengan `aria-pressed`, dibungkus `role="group"` berlabel.
- Focus ring terlihat (`focus-visible`) di semua elemen interaktif.
- Jumlah hasil memakai `aria-live="polite"` supaya pembaca layar ikut mendapat update.
- Kartu memakai `<article>`, daftar tag memakai `<ul>`, input pencarian punya label (visually hidden).

## Batasan

- Tombol **Detail** dan **Lamar** masih placeholder, belum terhubung ke halaman atau form.
- State filter belum disimpan di URL, jadi refresh akan kembali ke "All".

## AI & Tools Usage

- **Claude (Anthropic):** membantu saya membuat kerangka proyek, struktur komponen, mock data, dan membantu revisi tampilan website.

- **Tools lain:** Vite, Tailwind CSS, Google Fonts (Plus Jakarta Sans).
