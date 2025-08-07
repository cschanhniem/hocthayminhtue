# Kế hoạch: Bổ sung Hướng dẫn Thực hành các Tầng Thiền

## Mục tiêu
Cung cấp các bài hướng dẫn chi tiết, chính xác và dễ thực hành cho 8 tầng thiền (4 thiền Sắc giới, 4 thiền Vô sắc giới) và Diệt Thọ Tưởng Định, đồng thời cập nhật sơ đồ tư duy để liên kết đến các nội dung này.

## Checklist Công Việc

### Giai đoạn 1: Cấu trúc lại và Mở rộng Sơ đồ Tư duy
- [ ] **Tạo file mindmap mới:** Tạo `src/mindmap/sections/samadhi-jhana.njk` dành riêng cho Thiền Định.
- [ ] **Cập nhật file `samadhi-jhana.njk`:**
    - [ ] Thêm mục **Thiền Sắc Giới (Rūpa-jhāna)**.
        - [ ] Liệt kê Sơ Thiền, Nhị Thiền, Tam Thiền, Tứ Thiền.
        - [ ] Liên kết mỗi tầng thiền đến hướng dẫn thực hành tương ứng.
    - [ ] Thêm mục **Thiền Vô Sắc Giới (Arūpa-jhāna)**.
        - [ ] Liệt kê Không Vô Biên Xứ, Thức Vô Biên Xứ, Vô Sở Hữu Xứ, Phi Tưởng Phi Phi Tưởng Xứ.
        - [ ] Liên kết mỗi tầng thiền đến hướng dẫn thực hành tương ứng.
    - [ ] Thêm mục **Diệt Thọ Tưởng Định (Nirodha-samāpatti)** và liên kết tới hướng dẫn.
- [ ] **Cập nhật file `src/mindmap.njk` (trang chính):**
    - [ ] Thêm một liên kết trỏ đến trang "Thiền Định (Jhāna)" mới.
- [ ] **Cập nhật file `src/mindmap/sections/core-teachings.njk`:**
    - [ ] Thay đổi mục "Định" để liên kết đến trang Thiền Định chi tiết thay vì liệt kê sơ sài.

### Giai đoạn 2: Tạo các Hướng dẫn Thực hành Chi tiết
- [ ] **Tạo thư mục mới:** `src/content/practice-guides/jhanas/`.
- [ ] **Viết bài hướng dẫn cho từng tầng thiền:**
    - [ ] `01-so-thien.md`: Hướng dẫn chi tiết về cách nhập Sơ Thiền.
    - [ ] `02-nhi-thien.md`: Hướng dẫn chi tiết về cách nhập Nhị Thiền.
    - [ ] `03-tam-thien.md`: Hướng dẫn chi tiết về cách nhập Tam Thiền.
    - [ ] `04-tu-thien.md`: Hướng dẫn chi tiết về cách nhập Tứ Thiền.
    - [ ] `05-khong-vo-bien-xu.md`: Hướng dẫn chi tiết về Không Vô Biên Xứ.
    - [ ] `06-thuc-vo-bien-xu.md`: Hướng dẫn chi tiết về Thức Vô Biên Xứ.
    - [ ] `07-vo-so-huu-xu.md`: Hướng dẫn chi tiết về Vô Sở Hữu Xứ.
    - [ ] `08-phi-tuong-phi-phi-tuong-xu.md`: Hướng dẫn chi tiết về Phi Tưởng Phi Phi Tưởng Xứ.
    - [ ] `09-diet-tho-tuong-dinh.md`: Giải thích và mô tả về Diệt Thọ Tưởng Định.

### Giai đoạn 3: Hoàn thiện
- [ ] Cập nhật file `changelog/2025/8-2.md` với tất cả các thay đổi.
- [ ] Đề xuất Git commit message tổng hợp.
