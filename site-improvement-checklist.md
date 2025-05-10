# Site Improvement Checklist

## Overview
This document outlines a comprehensive plan for improving the Nikaya website, with specific focus on addressing missing pages and enhancing interlinking between related content.

## Missing Pages Audit

### Core Concepts
According to the concepts.js structure and existing content, the following pages need to be verified:

- [x] **Khổ Đế Components**
  - [x] "Cầu không được" (content created)
  - [x] "Thương yêu xa lìa" (content created)
  - [x] "Oán ghét gặp nhau" (content created)
  - [x] "Năm thủ uẩn" (content created)

- [x] **Tập Đế Components**
  - [x] "Ái dục" (check if content in duc-ai.md covers this)
  - [x] "Tham ái" (content created)
  - [x] "Chấp thủ" (content created)

- [x] **Diệt Đế Components** 
  - [x] "Giải thoát khổ" (content created)
  - [x] "Đoạn tận ái" (content created)

- [x] **Giới Components**
  - [x] "Không sát sinh" (content created) 
  - [x] "Không trộm cắp" (content created)
  - [x] "Không tà dâm" (content created)
  - [x] "Không nói dối" (content created)
  - [x] "Không uống rượu" (content created)

- [x] **Định Components**
  - [x] "Sơ thiền" (content created)
  - [x] "Nhị thiền" (content created)
  - [x] "Tam thiền" (content created)
  - [x] "Tứ thiền" (content created)

- [x] **Tuệ Components**
  - [x] "Minh sát" (content created)
  - [x] "Trí tuệ" (content created)
  - [x] "Giác ngộ" (content created)

- [x] **Tứ Vô Lượng Tâm Components**
  - [x] "Từ (Metta)" (check if metta-meditation.md covers this)
  - [x] "Bi (Karuna)" (content created)
  - [x] "Hỷ (Mudita)" (content created)
  - [x] "Xả (Upekkha)" (content created)

- [ ] **Năm Triền Cái Components**
  - [x] "Tham dục" (content created)
  - [x] "Sân hận" (content created)
  - [x] "Hôn trầm thụy miên" (content created)
  - [x] "Trạo cử hối quá" (content created)
  - [x] "Nghi" (content created)

- [ ] **Thất Giác Chi Components**
  - [x] "Niệm" (content created)
  - [x] "Trạch pháp" (content created)
  - [x] "Tinh tấn" (content created)
  - [x] "Hỷ" (content created)
  - [x] "Khinh an" (content created)
  - [x] "Định" (content created)
  - [x] "Xả" (content created)

### Additional Missing Pages
- [ ] Check for any pages referenced in content but not yet created
- [ ] Ensure all redirects are working properly

## Interlinking Improvement Plan

### Standard Linking Pattern
Based on analysis of existing content such as bat-chanh-dao.md and chanh-kien.md, establish a consistent linking pattern:

- [ ] **Introduction Section Links**
  - [ ] Each page should link to its parent concept in the introduction paragraph
  - [ ] Example: "Chánh Kiến is the first component of [Bát Chánh Đạo](/content/bat-chanh-dao/)"

- [ ] **Related Concepts Section**
  - [ ] Add a "Related Concepts" section at the end of each page
  - [ ] Include 3-5 most relevant related concepts with brief explanations of relationships
  - [ ] Example format:
  ```md
  ## Related Concepts
  
  - [Tứ Diệu Đế](/content/tu-dieu-de/) - Chánh Kiến involves understanding the Four Noble Truths
  - [Vô Minh](/content/vo-minh/) - The opposite of Chánh Kiến, the root cause of suffering
  - [Tuệ Học](/content/tue-hoc/) - Chánh Kiến is part of the wisdom training
  ```

### Parent-Child Links
- [ ] Ensure all parent concept pages link to their child components
  - [ ] Tứ Diệu Đế → Khổ Đế, Tập Đế, Diệt Đế, Đạo Đế
  - [ ] Tam Học → Giới, Định, Tuệ
  - [ ] Tứ Niệm Xứ → Thân, Thọ, Tâm, Pháp
  - [ ] Tứ Vô Lượng Tâm → Từ, Bi, Hỷ, Xả
  - [ ] Năm Triền Cái → All components
  - [ ] Thất Giác Chi → All components
  - [ ] Thập Nhị Nhân Duyên → All components
  - [ ] Ngũ Uẩn → All components
  - [ ] Bốn Thánh Quả → All components
  - [ ] Ba Đặc Tính → All components

### Child-Parent Links
- [ ] Ensure all child component pages link back to their parent concept
  - [ ] All Khổ Đế components → Khổ Đế
  - [ ] All Tập Đế components → Tập Đế
  - [ ] All Diệt Đế components → Diệt Đế
  - [ ] All Đạo Đế components → Đạo Đế
  - [ ] All Giới components → Giới
  - [ ] All Định components → Định
  - [ ] All Tuệ components → Tuệ

### Contextual Intra-Content Links
- [ ] Add contextual links within content sections where concepts are mentioned:
  - [ ] When mentioning "Tứ Diệu Đế" in any content, link to `/content/tu-dieu-de/`
  - [ ] When mentioning "Ba Đặc Tính" (Vô thường, Khổ, Vô ngã), link to respective pages
  - [ ] When discussing meditation practices, link to relevant technique pages
  - [ ] When mentioning Sanskrit/Pali terms, link to their definition pages if available

### Specific Key Concept Interlinking
- [ ] **Tứ Diệu Đế Interlinking**
  - [ ] Link "Khổ Đế" to its 8 aspects (sinh, lão, bệnh, tử, etc.)
  - [ ] Link "Tập Đế" to ái dục, tham ái, chấp thủ
  - [ ] Link "Diệt Đế" to Niết-bàn and related concepts
  - [ ] Link "Đạo Đế" to Bát Chánh Đạo and its components

- [ ] **Bát Chánh Đạo Interlinking**
  - [ ] Group and interlink by category (Tuệ, Giới, Định)
  - [ ] Link each component to related practice methods
  - [ ] Example: Chánh Niệm → Tứ Niệm Xứ

- [ ] **Thập Nhị Nhân Duyên Interlinking**
  - [ ] Link each step to the preceding and following step
  - [ ] Create visual representation of the chain with clickable elements

### Related Concepts Links
- [ ] Add semantic interlinking between related concepts across different categories:
  - [ ] Link meditation techniques to related mental states (e.g., Metta Meditation → Từ)
  - [ ] Link ethical teachings to corresponding practices (e.g., Chánh Ngữ → Không nói dối)
  - [ ] Link philosophical concepts to their practical applications (e.g., Vô thường → Minh sát)
  - [ ] Create bidirectional links between complementary concepts (e.g., Năm Triền Cái ↔ Thất Giác Chi)

### Concept Paths
- [ ] Create concept paths showing progression through related teachings:
  - [ ] Path from basics to advanced practice
  - [ ] Path from theory to application
  - [ ] Path from ethical foundation to meditation practice to wisdom development

## Implementation Strategy

### 1. Content Audit Phase
- [ ] Review all existing content files
- [ ] Map current interlinking structure
- [ ] Identify gaps and opportunities

### 2. Content Creation Phase
- [ ] Create missing pages based on priority
- [ ] Ensure consistent structure and formatting
- [ ] Include complete metadata for each page

### 3. Interlinking Phase
- [ ] Implement parent-child links
- [ ] Implement related concept links
- [ ] Verify all links are working properly

### 4. Navigation Enhancement
- [ ] Improve global navigation to highlight relationships
- [ ] Add breadcrumbs on all pages to show hierarchical position
- [ ] Consider adding a concept map visualization

### 5. Quality Assurance
- [ ] Review all pages for content accuracy
- [ ] Verify all internal links are working
- [ ] Test navigation across different devices and screen sizes

## Tracking Progress
- [ ] Create a spreadsheet to track completion of each task
- [ ] Update this checklist regularly with progress
- [ ] Document any changes to the original plan

## Technical Implementation

### Link Format Standardization
- [ ] Use relative links with the format `/content/page-slug/` consistently
- [ ] Avoid using `.html` or `.md` extensions in links
- [ ] Ensure all links use kebab-case for consistency

### Automated Link Checking
- [ ] Implement a link checking script to identify broken internal links
- [ ] Create a report of missing link targets
- [ ] Prioritize fixing high-traffic page links

### Navigation Component Updates
- [ ] Update main navigation to highlight parent-child relationships
- [ ] Add visual cues for related content
- [ ] Consider implementing a "You might also be interested in" section

---

## Additional Enhancements to Consider

### Content Enhancement
- [ ] Add more Pali/Sanskrit terms and definitions
- [ ] Expand Sutta references for key concepts
- [ ] Add more visual aids (diagrams, infographics)

### User Experience
- [ ] Implement search functionality
- [ ] Create a glossary of terms
- [ ] Add "Related Readings" sections to each page

### Technical Improvements
- [ ] Implement structured data (Schema.org) for better SEO
- [ ] Optimize images and assets for faster loading
- [ ] Improve accessibility features 