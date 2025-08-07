# Kế hoạch: Mở rộng Toàn diện Sơ đồ Tư duy và Nội dung Chi tiết

## Mục tiêu
Xây dựng một sơ đồ tư duy (mindmap) đầy đủ, trọn vẹn về triết lý Phật giáo theo kinh tạng Nikaya, và tạo các trang nội dung chi tiết cho từng đề mục để đảm bảo tính hệ thống và chiều sâu.

## Checklist Công Việc

### Giai đoạn 1: Bổ sung các Khuôn khổ Tu tập Cốt lõi
- [ ] **Cập nhật file `src/mindmap/sections/practice-methods.njk`:**
    - [ ] Thêm thẻ mới: **"37 Phẩm Trợ Đạo" (Bodhipakkhiyā dhammā)**.
    - [ ] Thêm mục **Tứ Niệm Xứ** (Satipaṭṭhāna) và liên kết tới `/content/tu-niem-xu/`.
    - [ ] Thêm mục **Tứ Chánh Cần** (Sammappadhāna) và liên kết tới `/content/tu-chanh-can/`.
    - [ ] Thêm mục **Tứ Như Ý Túc** (Iddhipāda) và liên kết tới `/content/tu-nhu-y-tuc/`.
    - [ ] Thêm mục **Ngũ Căn & Ngũ Lực** (Indriya & Bala) và liên kết tới `/content/ngu-can-ngu-luc/`.
    - [ ] Thêm mục **Thất Giác Chi** (Bojjhaṅga) và liên kết tới `/content/that-giac-chi/`.
    - [ ] Thêm mục **Bát Chánh Đạo** (đã có, kiểm tra lại liên kết).
- [ ] **Cập nhật file `src/mindmap/sections/ethics-and-practice.njk`:**
    - [ ] Thêm thẻ mới: **Tứ Vô Lượng Tâm** (Appamaññā) và liên kết tới `/content/tu-vo-luong-tam/`.

### Giai đoạn 2: Bổ sung các Pháp Bổ trợ
- [ ] **Cập nhật file `src/mindmap/sections/additional-concepts.njk`:**
    - [ ] Thêm thẻ mới: **"Chướng Ngại & Ba-la-mật"**.
    - [ ] Thêm mục **Năm Triền Cái** (Nīvaraṇa) và liên kết tới `/content/nam-trien-cai/`.
    - [ ] Thêm mục **Mười Kiết Sử** (Saṃyojana) và liên kết tới `/content/muoi-kiet-su/`.
    - [ ] Thêm mục **Mười Ba-la-mật** (Pāramī) và liên kết tới `/content/muoi-ba-la-mat/`.

### Giai đoạn 3: Tạo các Trang Nội dung Chi tiết
- [ ] Tạo file `src/content/tu-niem-xu.md`.
- [ ] Tạo file `src/content/tu-chanh-can.md`.
- [ ] Tạo file `src/content/tu-nhu-y-tuc.md`.
- [ ] Tạo file `src/content/ngu-can-ngu-luc.md`.
- [ ] Tạo file `src/content/that-giac-chi.md` (kiểm tra lại vì đã có trong file list).
- [ ] Tạo file `src/content/tu-vo-luong-tam.md`.
- [ ] Tạo file `src/content/nam-trien-cai.md` (kiểm tra lại vì đã có trong file list).
- [ ] Tạo file `src/content/muoi-kiet-su.md`.
- [ ] Tạo file `src/content/muoi-ba-la-mat.md` (kiểm tra lại vì đã có trong file list).
- [ ] Tạo file `src/content/panna-vimutti.md` (Tuệ Giải Thoát).
- [ ] Tạo file `src/content/ubhatobhaga-vimutti.md` (Câu Phần Giải Thoát).
- [ ] Tạo file `src/content/ceto-vimutti.md` (Tâm Giải Thoát).

### Giai đoạn 4: Hoàn thiện
- [ ] Cập nhật file `changelog/2025/8-2.md` với tất cả các thay đổi.
- [ ] Đề xuất Git commit message tổng hợp.
