# Project Plan: Buddhist Concepts from Nikaya

This document tracks the progress of the Buddhist Concepts website project.

## Tasks Done

- [x] **Project Setup:**
  - [x] Initialize project with Eleventy.
  - [x] Configure Eleventy (`.eleventy.js`).
  - [x] Set up `package.json` with necessary dependencies (Eleventy, Tailwind, etc.).
  - [x] Create basic project structure (`src`, `_data`, `_includes`, `content`, etc.).
- [x] **Core Functionality:**
  - [x] Define concept data structure (`src/_data/concepts.js`).
  - [x] Implement template for individual concept pages (`_includes/layouts/concept.njk` or similar - *needs verification of exact file*).
  - [x] Render Markdown content for concepts.
  - [x] Implement tree-based navigation (likely using data from `concepts.js`).
  - [x] Implement homepage (`src/index.njk`).
- [x] **Styling:**
  - [x] Integrate Tailwind CSS.
  - [x] Apply basic styling and layout using Tailwind.
  - [x] Use Tailwind Typography plugin for Markdown content styling.
- [x] **Development Workflow:**
  - [x] Set up `npm start` script for development server.
  - [x] Set up `npm run build` script for production build.
- [x] **Documentation:**
  - [x] Create `README.md` with project overview, setup, usage, and contribution guidelines.

## Tasks To Do

- [ ] **Content Population:**
  - [/] **Comprehensive Review:** Review existing markdown files in `src/content/` for completeness and accuracy against Nikaya sources. (*Initial review completed, identified missing files as primary gap*)
  - [ ] **Add Missing Concepts:** Identify and add missing core concepts from the Nikaya according to a chosen structure (e.g., Sutta Pitaka structure, thematic structure).
    - [x] Define concept IDs and labels in `src/_data/concepts.js` (*Data structure exists*).
    - [/] Create corresponding markdown files in `src/content/` (*Started with sinh.md*).
  - [ ] **Add Sutta References:** Include references to specific suttas within the content pages.
  - [ ] **Add Pali Terms:** Include relevant Pali terms with definitions or links.

## Missing Pages Checklist

### Bát Chánh Đạo (Eight-fold Path) Components
All components appear to be present:
- [x] [Chánh kiến (Right View)](/content/chanh-kien.md)
- [x] [Chánh tư duy (Right Intention)](/content/chanh-tu-duy.md)
- [x] [Chánh ngữ (Right Speech)](/content/chanh-ngu.md)
- [x] [Chánh nghiệp (Right Action)](/content/chanh-nghiep.md)
- [x] [Chánh mạng (Right Livelihood)](/content/chanh-mang.md)
- [x] [Chánh tinh tấn (Right Effort)](/content/chanh-tinh-tan.md)
- [x] [Chánh niệm (Right Mindfulness)](/content/chanh-niem.md)
- [x] [Chánh định (Right Concentration)](/content/chanh-dinh.md)

### Tứ Diệu Đế (Four Noble Truths) Components
All components appear to be present:
- [x] [Khổ Đế (Suffering)](/content/kho-de.md)
- [x] [Tập Đế (Origin of Suffering)](/content/tap-de.md)
- [x] [Diệt Đế (Cessation of Suffering)](/content/diet-de.md)
- [x] [Đạo Đế (Path to Cessation)](/content/dao-de.md)

### Tứ Niệm Xứ (Four Foundations of Mindfulness) Components
All components appear to be present:
- [x] [Tứ Niệm Xứ (Four Foundations of Mindfulness)](/content/tu-niem-xu.md)
- [x] [Thân Niệm Xứ (Mindfulness of Body)](/content/than-niem-xu.md)
- [x] [Thọ Niệm Xứ (Mindfulness of Feelings)](/content/tho-niem-xu.md)
- [x] [Tâm Niệm Xứ (Mindfulness of Mind)](/content/tam-niem-xu.md)
- [x] [Pháp Niệm Xứ (Mindfulness of Phenomena)](/content/phap-niem-xu.md)

### Missing Pages from Mindmap Sections

#### Core Teachings Section
- [ ] [Tam Học (Three Trainings)](/content/tam-hoc.md) - Linked from core-teachings.njk
- [ ] [Giới Học (Training in Morality)](/content/gioi-hoc.md) - Linked from core-teachings.njk
- [ ] [Định Học (Training in Concentration)](/content/dinh-hoc.md) - Linked from core-teachings.njk
- [ ] [Tuệ Học (Training in Wisdom)](/content/tue-hoc.md) - Linked from core-teachings.njk

#### Ethics and Practice Section
- [ ] [Tam Quy Y (Three Refuges)](/content/tam-quy-y.md) - Linked from ethics-and-practice.njk
- [ ] [Lục Ba La Mật (Six Perfections)](/content/luc-do.md) - Linked from ethics-and-practice.njk
- [ ] [Bát Phúc Điền (Eight Fields of Merit)](/content/bat-phuc-dien.md) - Linked from ethics-and-practice.njk

#### Advanced Concepts Section
- [ ] [Ngũ Uẩn (Five Aggregates)](/content/ngu-uan.md) - Linked from advanced-concepts.njk
- [ ] [Niết Bàn (Nirvana)](/content/niet-ban.md) - Linked from advanced-concepts.njk and overview.njk

#### Overview Section
- [ ] [Tam Quy Y (Three Refuges)](/content/tam-quy-y.md) - Linked from overview.njk
- [ ] [Tam Học (Three Trainings)](/content/tam-hoc.md) - Linked from overview.njk
- [ ] [Niết Bàn (Nirvana)](/content/niet-ban.md) - Linked from overview.njk
- [ ] [Nhị Đế (Two Truths)](/content/nhi-de.md) - Linked from overview.njk
- [ ] [Tam Luân (Three Wheels)](/content/tam-luan.md) - Linked from overview.njk
- [ ] [Thập Nhị Nhân Duyên (Dependent Origination)](/content/thap-nhi-nhan-duyen.md) - Linked from overview.njk

#### Practice Methods Section
- [ ] [Metta Meditation (Loving-kindness Meditation)](/content/metta-meditation.md) - Linked from practice-methods.njk
- [ ] [Progressive Meditation](/content/progressive-meditation.md) - Linked from practice-methods.njk
- [ ] [Buddhism and Psychology](/content/buddhism-psychology.md) - Linked from practice-methods.njk
- [ ] [Mindfulness Interventions](/content/mindfulness-interventions.md) - Linked from practice-methods.njk
- [ ] [Buddhism and Depression/Anxiety](/content/buddhism-depression-anxiety.md) - Linked from practice-methods.njk
- [ ] [Buddhist Ceremonies](/content/buddhist-ceremonies.md) - Linked from practice-methods.njk

#### Additional Concepts Section
- [ ] [Phật Giáo và Công Bằng Xã Hội (Buddhism and Social Justice)](/content/phat-giao-cong-bang-xa-hoi.md) - Linked from mindmap.njk
- [ ] [Kinh Tế Phật Giáo (Buddhist Economics)](/content/kinh-te-phat-giao.md) - Linked from mindmap.njk
- [ ] [Đối Thoại Liên Tôn (Interfaith Dialogue)](/content/doi-thoai-lien-ton.md) - Linked from mindmap.njk
- [ ] [Biểu Tượng Phật Giáo (Buddhist Symbols)](/content/bieu-tuong-phat-giao.md) - Linked from mindmap.njk

#### Other Missing Pages
- [ ] [Thích Minh Tuệ (About the Teacher)](/content/thich-minh-tue.md) - Linked from about.md

## Content Creation Plan

1. **Priority 1: Core Buddhist Concepts**
   - Create pages for Tam Học (Three Trainings) and its components
   - Create pages for Niết Bàn (Nirvana)
   - Create pages for Nhị Đế (Two Truths)
   - Create pages for Tam Luân (Three Wheels)
   - Create pages for Thập Nhị Nhân Duyên (Dependent Origination)

2. **Priority 2: Practice-Related Concepts**
   - Create pages for Tam Quy Y (Three Refuges)
   - Create pages for Lục Ba La Mật (Six Perfections)
   - Create pages for Bát Phúc Điền (Eight Fields of Merit)
   - Create pages for meditation techniques (Metta, Progressive Meditation)

3. **Priority 3: Modern Applications**
   - Create pages for Buddhism and Psychology
   - Create pages for Mindfulness Interventions
   - Create pages for Buddhism and Depression/Anxiety
   - Create pages for Buddhist Ceremonies

4. **Priority 4: Social and Cultural Aspects**
   - Create pages for Buddhism and Social Justice
   - Create pages for Buddhist Economics
   - Create pages for Interfaith Dialogue
   - Create pages for Buddhist Symbols

5. **Priority 5: Biographical Content**
   - Create page for Thích Minh Tuệ

## Content Format Template

Each page should follow this consistent format:

```markdown
---
layout: layouts/content.njk
title: [Concept Name in Vietnamese] ([Concept Name in Pali/Sanskrit])
description: [Brief description of the concept]
---

## Định Nghĩa từ Kinh Điển

[Definition from canonical texts with references]

## [Main Section 1]

### [Subsection 1.1]
[Content]

### [Subsection 1.2]
[Content]

## [Main Section 2]

### [Subsection 2.1]
[Content]

### [Subsection 2.2]
[Content]

## Ứng Dụng Thực Tiễn

[Practical applications of the concept]

## Kết Luận

[Summary of key points]
```

## Progress Tracking

- [ ] **Priority 1 Progress**: 0/5 completed
- [ ] **Priority 2 Progress**: 0/4 completed
- [ ] **Priority 3 Progress**: 0/4 completed
- [ ] **Priority 4 Progress**: 0/4 completed
- [ ] **Priority 5 Progress**: 0/1 completed

Total progress: 0/18 completed (0%)
- [ ] **Feature Enhancements:**
  - [ ] **Search Functionality:** Implement a site-wide search for concepts.
  - [ ] **Related Concepts:** Verify and potentially improve the "Related Concepts" display mentioned in the README (e.g., based on tags, explicit links in data, or content analysis).
  - [ ] **Glossary:** Create a glossary page for Pali terms or key concepts.
  - [ ] **Visualizations:** Explore adding more visualizations (beyond the README flowchart) if appropriate (e.g., interactive concept maps).
  - [ ] **Print Styles:** Add print-specific CSS for better printing of concept pages.
  - [ ] **Dark Mode:** Implement a dark mode toggle.
- [ ] **UI/UX Improvements:**
  - [ ] **Navigation Refinement:** Improve tree navigation, especially for large numbers of concepts (e.g., collapsible sections, filtering).
  - [ ] **Accessibility Review:** Conduct an accessibility audit (WCAG compliance) and implement improvements.
  - [ ] **Performance Optimization:** Optimize image sizes, CSS/JS delivery.
  - [ ] **Cross-Browser Testing:** Ensure consistent display and functionality across major browsers.
- [ ] **Maintenance & Deployment:**
  - [x] **CI/CD:** already setup on cloudflare pages
  - [ ] **Dependency Updates:** Regularly update dependencies.
- [ ] **Documentation Updates:**
  - [ ] Update `README.md` as new features are added or processes change.
  - [ ] Consider adding more detailed documentation within `src/_data/concepts.js` or separate content guidelines if the project grows complex.