# Interlinking Implementation Guide

## Overview
This document provides detailed guidance for implementing a comprehensive interlinking strategy across the Nikaya website. Proper interlinking enhances user navigation, improves SEO, and creates a more cohesive learning experience for users exploring Buddhist concepts.

## Link Format Standards

### URL Structure
- **Standard format**: `/content/page-slug/`
- **Avoid**: Using file extensions like `.html` or `.md` in links
- **Consistency**: Use kebab-case for all slugs (e.g., `bat-chanh-dao`, not `BatChanhDao` or `bat_chanh_dao`)

### Markdown Link Syntax
```markdown
[Link text](/content/page-slug/)
```

**Example**:
```markdown
In [Bát Chánh Đạo](/content/bat-chanh-dao/), there are eight components...
```

### HTML Link Syntax (for complex styling)
```html
<a href="/content/page-slug/" class="...">Link text</a>
```

## Interlinking Patterns

### 1. Parent-Child Linking

#### Example: Tứ Diệu Đế (Four Noble Truths) and its components

In `tu-dieu-de.md` (parent page):
```markdown
## Bốn Chân Lý Cao Quý

1. [Khổ Đế](/content/kho-de/) (Dukkha) - Chân lý về khổ
2. [Tập Đế](/content/tap-de/) (Samudaya) - Chân lý về nguồn gốc của khổ
3. [Diệt Đế](/content/diet-de/) (Nirodha) - Chân lý về sự chấm dứt khổ
4. [Đạo Đế](/content/dao-de/) (Magga) - Chân lý về con đường đưa đến chấm dứt khổ
```

In `kho-de.md` (child page):
```markdown
Khổ Đế (Dukkha) là chân lý thứ nhất trong [Tứ Diệu Đế](/content/tu-dieu-de/), được đức Phật thuyết giảng...
```

### 2. Related Concepts Section

Add to the end of every content file:

```markdown
## Related Concepts

- [Concept 1](/content/concept-1/) - Brief explanation of relationship
- [Concept 2](/content/concept-2/) - Brief explanation of relationship
- [Concept 3](/content/concept-3/) - Brief explanation of relationship
```

**Example for Chánh Kiến:**
```markdown
## Related Concepts

- [Tứ Diệu Đế](/content/tu-dieu-de/) - Chánh Kiến bao gồm hiểu biết về Tứ Diệu Đế
- [Bát Chánh Đạo](/content/bat-chanh-dao/) - Chánh Kiến là chi phần đầu tiên của Bát Chánh Đạo
- [Vô Minh](/content/vo-minh/) - Đối lập với Chánh Kiến, là gốc của mọi khổ đau
- [Tuệ Học](/content/tue-hoc/) - Chánh Kiến thuộc về nhóm tu tập về trí tuệ
```

### 3. Contextual In-Content Linking

**Rule**: When mentioning a concept that has its own page, link to that page on first mention.

**Before**:
```markdown
Chánh Kiến là hiểu biết chân chánh về Tứ Diệu Đế. Với Chánh Kiến, hành giả thấy rõ bản chất vô thường của các pháp.
```

**After**:
```markdown
Chánh Kiến là hiểu biết chân chánh về [Tứ Diệu Đế](/content/tu-dieu-de/). Với Chánh Kiến, hành giả thấy rõ bản chất [vô thường](/content/vo-thuong/) của các pháp.
```

### 4. Sibling Concept Navigation

For concepts that are part of the same group, add previous/next navigation:

```markdown
## Xem Thêm

- Trước: [Chánh Tư Duy](/content/chanh-tu-duy/) - Chi phần thứ hai của Bát Chánh Đạo
- Sau: [Chánh Ngữ](/content/chanh-ngu/) - Chi phần thứ ba của Bát Chánh Đạo
```

## Interlinking Implementation Plan

### Step 1: Audit Existing Content
For each content page:
1. Identify the parent concept
2. Identify child concepts
3. Identify related concepts
4. List concepts mentioned within the content

Create a spreadsheet with columns:
- Page slug
- Parent concept
- Child concepts
- Related concepts
- Mentioned concepts

### Step 2: Prioritize Interlinking Tasks
1. First implement parent-child links
2. Then implement sibling concept navigation
3. Then add related concepts sections
4. Finally implement contextual in-content links

### Step 3: Standard Implementation Process

#### For Each Page:

1. **Add Parent Link**
   - Add a link to the parent concept in the first paragraph
   - Example: "This is the first component of [Bát Chánh Đạo](/content/bat-chanh-dao/)"

2. **Link to Child Concepts**
   - List all child concepts with links
   - Example: "Bát Chánh Đạo comprises eight components: [Chánh Kiến](/content/chanh-kien/), [Chánh Tư Duy](/content/chanh-tu-duy/)..."

3. **Add Related Concepts Section**
   - Add 3-5 most relevant related concepts
   - Include a brief explanation of the relationship

4. **Add Contextual Links**
   - Review content and add links to mentioned concepts
   - Only link first mention of each concept
   - Focus on key Buddhist terms, not common words

### Step 4: Technical Implementation

#### Markdown Template for Related Concepts
```markdown
## Related Concepts

- [Concept 1](/content/concept-1/) - Brief explanation of relationship
- [Concept 2](/content/concept-2/) - Brief explanation of relationship
- [Concept 3](/content/concept-3/) - Brief explanation of relationship
```

#### Markdown Template for Sibling Navigation
```markdown
## Navigation

| Trước | Tiếp Theo |
|-------|-----------|
| [Previous Concept](/content/previous/) | [Next Concept](/content/next/) |
```

## Special Interlinking Cases

### 1. Concept Categories Interlinking

Create category-based cross-links between major concept groups:

**Example**: Linking between Tứ Diệu Đế and Bát Chánh Đạo:
```markdown
## Relations to Other Core Teachings

- [Đạo Đế](/content/dao-de/) from the Four Noble Truths elaborates the Eightfold Path
- The Eightfold Path is the practical method to achieve the cessation of suffering described in [Diệt Đế](/content/diet-de/)
```

### 2. Practice and Theory Interlinking

Link theoretical concepts to practical applications:

**Example**: Linking Chánh Niệm to meditation practices:
```markdown
## Practical Applications

Chánh Niệm is developed through various meditation practices:
- [Tứ Niệm Xứ](/content/tu-niem-xu/) - Four Foundations of Mindfulness
- [Anapanasati](/content/anapanasati/) - Mindfulness of Breathing
- [Body Scanning](/content/body-scanning/) - Mindfulness of Body Sensations
```

### 3. Related Suttas Interlinking

Link concepts to their primary sutta sources:

**Example**:
```markdown
## Key Suttas

- [Dhammacakkappavattana Sutta](/content/dhammacakkappavattana-sutta/) - First teaching on the Four Noble Truths
- [Satipatthana Sutta](/content/satipatthana-sutta/) - Detailed instructions on the Four Foundations of Mindfulness
```

## Technical Verification and Quality Assurance

### Link Checker Script
Create a simple script to verify links:

```javascript
// Example Node.js script for checking internal links
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

// Get all content files
const contentFiles = glob.sync('src/content/**/*.md');

// Get all valid slugs
const validSlugs = contentFiles.map(file => {
  const relativePath = path.relative('src/content', file);
  return relativePath.replace('.md', '');
});

// Check links in each file
contentFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const linkRegex = /\[.*?\]\(\/content\/(.*?)\/?\)/g;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const linkedSlug = match[1];
    if (!validSlugs.includes(linkedSlug)) {
      console.error(`Broken link in ${file}: /content/${linkedSlug}/`);
    }
  }
});
```

### Manual QA Checklist
For each page:

1. **Parent Links**:
   - [ ] Verify link to parent concept is present
   - [ ] Verify parent link is in first paragraph
   - [ ] Verify parent link is correctly formatted

2. **Child Links**:
   - [ ] Verify all child concepts are linked
   - [ ] Verify child links are correctly formatted

3. **Related Concepts**:
   - [ ] Verify "Related Concepts" section exists
   - [ ] Verify 3-5 relevant concepts are linked
   - [ ] Verify each relationship is briefly explained

4. **In-Content Links**:
   - [ ] Verify key concepts mentioned in content are linked
   - [ ] Verify each concept is only linked on first mention
   - [ ] Verify links are correctly formatted

5. **Navigation Links**:
   - [ ] Verify previous/next navigation for sequential content
   - [ ] Verify navigation links are correct

## Ongoing Maintenance

### Process for New Content
When adding new content:

1. Identify parent concept and add the link
2. Identify and link to child concepts
3. Identify and add 3-5 related concepts
4. Add contextual links within content
5. Add to navigation structure if part of a sequence
6. Update parent page to link to the new page
7. Update related pages to link to the new page

### Periodic Link Audit
Schedule quarterly link audits:

1. Run link checker script to find broken links
2. Verify each page has appropriate related concepts
3. Update links as concepts evolve
4. Check for new interlinking opportunities

## Examples of Well-Interlinked Pages

### Example 1: Chánh Kiến (Right View)

```markdown
---
layout: layouts/content.njk
title: Chánh Kiến (Sammā Diṭṭhi)
description: Chi phần đầu tiên của Bát Chánh Đạo - hiểu biết chân chánh về Tứ Diệu Đế và các chân lý căn bản
---

## Định Nghĩa từ Kinh Điển

Chánh Kiến (Sammā Diṭṭhi) là chi phần đầu tiên trong [Bát Chánh Đạo](/content/bat-chanh-dao/), thuộc về nhóm [Tuệ](/content/tue-hoc/) trong [Tam Học](/content/tam-hoc/). Theo [Kinh Đại Tứ Thập](/content/dai-tu-thap-kinh/), Chánh Kiến là sự hiểu biết về [Tứ Diệu Đế](/content/tu-dieu-de/).

## Nội Dung của Chánh Kiến

### 1. Hiểu Biết về Tứ Diệu Đế
- Thấy rõ bản chất [khổ](/content/kho-de/) của cuộc sống
- Hiểu được nguồn gốc của khổ đau là [tham ái](/content/tam-ai/)
- Biết rõ sự chấm dứt khổ ([Niết-bàn](/content/niet-ban/)) là có thật
- Nắm vững [con đường](/content/dao-de/) đưa đến giải thoát

...

## Related Concepts

- [Tứ Diệu Đế](/content/tu-dieu-de/) - Chánh Kiến bao gồm hiểu biết về Tứ Diệu Đế
- [Bát Chánh Đạo](/content/bat-chanh-dao/) - Chánh Kiến là chi phần đầu tiên của Bát Chánh Đạo
- [Vô Minh](/content/vo-minh/) - Đối lập với Chánh Kiến, là gốc của mọi khổ đau
- [Tuệ Học](/content/tue-hoc/) - Chánh Kiến thuộc về nhóm tu tập về trí tuệ

## Navigation

| Trước | Tiếp Theo |
|-------|-----------|
| [Bát Chánh Đạo](/content/bat-chanh-dao/) | [Chánh Tư Duy](/content/chanh-tu-duy/) |
```

## Conclusion

Implementing a robust interlinking strategy will significantly enhance the user experience by:
1. Creating clear pathways through related concepts
2. Enabling users to explore topics in depth
3. Providing context for complex Buddhist teachings
4. Improving site navigation and discoverability
5. Enhancing SEO performance through a strong internal linking structure

By following this guide, the Nikaya website will transform from a collection of separate pages into an integrated knowledge network that effectively communicates the interconnected nature of Buddhist teachings. 