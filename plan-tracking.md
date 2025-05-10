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
- [x] **Content Population:**
  - [x] **Comprehensive Review:** Review existing markdown files in `src/content/` for completeness and accuracy against Nikaya sources. (*Review completed, all identified missing files have been created*)
  - [x] **Add Missing Concepts:** Identify and add missing core concepts from the Nikaya according to a chosen structure (e.g., Sutta Pitaka structure, thematic structure).
    - [x] Define concept IDs and labels in `src/_data/concepts.js` (*Data structure exists*).
    - [x] Create corresponding markdown files in `src/content/` (*All content files created*).
  - [/] **Add Sutta References:** Include references to specific suttas within the content pages. (*Partially completed, can be enhanced in future updates*)
  - [/] **Add Pali Terms:** Include relevant Pali terms with definitions or links. (*Partially completed, can be enhanced in future updates*)

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
- [x] [Tam Học (Three Trainings)](/content/tam-hoc.md) - Linked from core-teachings.njk
- [x] [Giới Học (Training in Morality)](/content/gioi-hoc.md) - Linked from core-teachings.njk
- [x] [Định Học (Training in Concentration)](/content/dinh-hoc.md) - Linked from core-teachings.njk
- [x] [Tuệ Học (Training in Wisdom)](/content/tue-hoc.md) - Linked from core-teachings.njk

#### Ethics and Practice Section
- [x] [Tam Quy Y (Three Refuges)](/content/tam-quy-y.md) - Linked from ethics-and-practice.njk
- [x] [Lục Ba La Mật (Six Perfections)](/content/luc-do.md) - Linked from ethics-and-practice.njk
- [x] [Bát Phúc Điền (Eight Fields of Merit)](/content/bat-phuc-dien.md) - Linked from ethics-and-practice.njk

#### Advanced Concepts Section
- [x] [Ngũ Uẩn (Five Aggregates)](/content/ngu-uan.md) - Linked from advanced-concepts.njk
- [x] [Niết Bàn (Nirvana)](/content/niet-ban.md) - Linked from advanced-concepts.njk and overview.njk

#### Overview Section
- [x] [Tam Quy Y (Three Refuges)](/content/tam-quy-y.md) - Linked from overview.njk
- [x] [Tam Học (Three Trainings)](/content/tam-hoc.md) - Linked from overview.njk
- [x] [Niết Bàn (Nirvana)](/content/niet-ban.md) - Linked from overview.njk
- [x] [Nhị Đế (Two Truths)](/content/nhi-de.md) - Linked from overview.njk
- [x] [Tam Luân (Three Wheels)](/content/tam-luan.md) - Linked from overview.njk
- [x] [Thập Nhị Nhân Duyên (Dependent Origination)](/content/thap-nhi-nhan-duyen.md) - Linked from overview.njk

#### Practice Methods Section
- [x] [Metta Meditation (Loving-kindness Meditation)](/content/metta-meditation.md) - Linked from practice-methods.njk
- [x] [Progressive Meditation](/content/progressive-meditation.md) - Linked from practice-methods.njk
- [x] [Buddhism and Psychology](/content/buddhism-psychology.md) - Linked from practice-methods.njk
- [x] [Mindfulness Interventions](/content/mindfulness-interventions.md) - Linked from practice-methods.njk
- [x] [Buddhism and Depression/Anxiety](/content/buddhism-depression-anxiety.md) - Linked from practice-methods.njk
- [x] [Buddhist Ceremonies](/content/buddhist-ceremonies.md) - Linked from practice-methods.njk

#### Additional Concepts Section
- [x] [Phật Giáo và Công Bằng Xã Hội (Buddhism and Social Justice)](/content/buddhism-social-justice.md) - Linked from mindmap.njk
- [x] [Kinh Tế Phật Giáo (Buddhist Economics)](/content/kinh-te-phat-giao.md) - Linked from mindmap.njk
- [x] [Đối Thoại Liên Tôn (Interfaith Dialogue)](/content/doi-thoai-lien-ton.md) - Linked from mindmap.njk
- [x] [Biểu Tượng Phật Giáo (Buddhist Symbols)](/content/bieu-tuong-phat-giao.md) - Linked from mindmap.njk

#### Other Missing Pages
- [x] [Thích Minh Tuệ (About the Teacher)](/content/thich-minh-tue/index.md) - Linked from about.md

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

## [2023-10-16] Verified Thất Giác Chi Component Pages

Verified all seven components of Thất Giác Chi (Seven Factors of Awakening) were already created:

1. **Niệm (Mindfulness)** - Verified existing content about mindfulness as the first factor of awakening, which serves as the foundation for the development of the other factors.

2. **Trạch pháp (Investigation)** - Verified content about investigation of phenomena and discernment of truth, the faculty of examining mental and physical states.

3. **Tinh tấn (Energy)** - Verified content about the factor of energy or effort, which provides the necessary momentum for practice and prevents stagnation.

4. **Hỷ (Joy)** - Verified content about the awakening factor of joy, which brings brightness and delight to meditation practice.

5. **Khinh an (Tranquility)** - Verified content about the calming of bodily and mental formations, creating serenity in practice.

6. **Định (Concentration)** - Verified content about one-pointedness of mind, the ability to sustain attention without distraction.

7. **Xả (Equanimity)** - Verified content about the balanced state of mind that is neither attracted nor repelled, but remains centered.

All pages were found to contain comprehensive information about each factor including:
- Clear definitions and explanations
- Methods for developing each factor
- The role of each factor in the path to awakening
- Relationship with other Buddhist concepts

Updated site-improvement-checklist.md to mark this section as complete.

## [2023-10-16] Created All Năm Triền Cái Component Pages

Created content for all five components of Năm Triền Cái (Five Hindrances):

1. **Tham dục (Sensual desire)** - Created comprehensive content explaining the hindrance of sensual desire, its characteristics, harmful effects, methods to overcome it, and its relationship with other hindrances.

2. **Sân hận (Ill-will)** - Created detailed content covering the nature of ill-will, its manifestations, harmful impacts, methods for cultivation of loving-kindness to overcome it, and its relationship with other mental states.

3. **Hôn trầm thụy miên (Sloth and torpor)** - Created content explaining the sluggish, drowsy mental state, its causes, effects on practice, and methods to cultivate energy and mindfulness to overcome it.

4. **Trạo cử hối quá (Restlessness and remorse)** - Created content detailing the agitated, regretful mind state, its characteristics, impacts on meditation practice, and techniques to develop tranquility and equanimity.

5. **Nghi (Doubt)** - Created content covering skeptical doubt about the teachings and practice, its manifestations, harmful effects, and ways to develop confidence and wisdom to overcome it.

All pages follow a consistent structure with:
- Definitions from canonical texts
- Clear explanations of each hindrance's nature
- Analysis of causes and harmful effects
- Detailed methods for overcoming each hindrance
- Relationships with other hindrances and Buddhist concepts
- Proper linking to parent concepts and related topics

Updated site-improvement-checklist.md to mark this section as complete.

## [2023-10-17] Completed Remaining Missing Wisdom (Tuệ) Components

Created comprehensive content for the remaining two key wisdom component pages that were marked as empty:

1. **Trí Tuệ (Paññā, Wisdom)** - Created detailed content covering the nature of wisdom in Buddhism, including:
   - Clear definition from canonical sources
   - Three types of wisdom (văn, tư, tu - learning, reflection, meditation)
   - Relationship to the Three Trainings (Tam Học)
   - Methods for developing wisdom through study and practice
   - The role of wisdom in seeing the Three Characteristics (Tam Pháp Ấn)
   - Special coverage of Bát Nhã wisdom from Mahayana traditions
   - Common misconceptions about wisdom
   - Thorough interlinking with related concepts

2. **Giác Ngộ (Bodhi, Enlightenment)** - Created comprehensive content about the ultimate goal of Buddhist practice:
   - Definition and meaning in early Buddhist texts
   - The four stages of enlightenment (Sotāpanna, Sakadāgāmī, Anāgāmī, Arahant)
   - Key characteristics of the enlightened state
   - The path leading to enlightenment
   - Differences between enlightenment and other states
   - The Buddha's enlightenment story
   - Impact of enlightenment on individual life and society
   - Common misconceptions about enlightenment
   - Proper interlinking with fundamental Buddhist concepts

Both pages maintain consistent structure with other content on the site and include proper citations from canonical texts, practical applications, and detailed explanations suitable for both beginners and experienced practitioners.

With the completion of these files, all identified missing pages from the site-improvement-checklist.md have been created, completing the content creation phase of the project.

- [x] **Priority 1 Progress**: 5/5 completed
- [x] **Priority 2 Progress**: 5/5 completed
- [x] **Priority 3 Progress**: 5/5 completed

Total progress: 15/15 completed (100%)

## Future Enhancements

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

- [2024-06-09] Completed creation of all Năm Triền Cái component pages (Tham dục, Sân hận, Hôn trầm thụy miên, Trạo cử hối quá, Nghi) as per site-improvement-checklist.md
- [2024-06-09] Completed creation of all Thất Giác Chi component pages (Niệm, Trạch pháp, Tinh tấn, Hỷ, Khinh an, Định, Xả) as per site-improvement-checklist.md
- [2024-06-09] Completed creation of all Tập Đế component pages (Tham ái, Chấp thủ) and Diệt Đế component pages (Giải thoát khổ, Đoạn tận ái) as per site-improvement-checklist.md
- [2024-06-09] Completed creation of all Khổ Đế component pages (Cầu không được, Thương yêu xa lìa, Oán ghét gặp nhau) as per site-improvement-checklist.md
- [2024-06-09] Verified and marked all Định Components (Sơ thiền, Nhị thiền, Tam thiền, Tứ thiền) and Tuệ Components (Minh sát, Trí tuệ, Giác ngộ) as completed in the site-improvement-checklist.md

## [2023-10-22] Created Interactive Concept Map

Added a new feature to the site: an interactive concept map for visualizing the relationships between Buddhist concepts. The implementation includes:

1. Created a new page at `/interactive-concept-map/` showing a D3.js force-directed graph visualization
2. Implemented comprehensive data structure in `concept-relationships.js` defining relationships between concepts
3. Created JSON data files for frontend use
4. Added CSS styling for the interactive visualization
5. Added zoom, filter, and highlighting functionality
6. Updated navigation to include the new feature

This interactive visualization helps users better understand:
- How core Buddhist teachings are interconnected
- The hierarchical relationships between concepts
- Opposing and complementary concepts
- Pathways of practice progression

The most significant relationships visualized include:
- Four Noble Truths connections to Eightfold Path
- Three Trainings (Sila, Samadhi, Panna) structure
- Mindfulness practices and Awakening Factors
- Hindrances and their antidotes

## [2024-07-05] Enhanced Interactive Concept Map Implementation

Improved the interactive concept map visualization by:

1. Implemented proper data flow between Eleventy and the visualization:
   - Created conceptRelationships.js in the _data directory to make relationship data available to templates
   - Added JSON versions of the data for frontend use
   - Set up proper passthrough copying in Eleventy configuration

2. Enhanced data integration:
   - Simplified concept-data-script.njk partial to reliably load data
   - Added support for all components including "Trạo cử hối quá" (Restlessness and Remorse) in the visualization
   - Ensured proper relationship data is available for all concepts

3. Fixed data flow issues:
   - Added proper JSON data file creation
   - Updated build system to copy files correctly
   - Ensured consistent data structure between JSON and JS formats

This enhancement ensures all newly created concept pages are properly displayed in the interactive visualization, including proper relationships between concepts like "Trạo cử hối quá" (Restlessness and Remorse) and its antidote "Định Giác Chi" (Concentration Awakening Factor).