# Style Guide for Buddhist Concepts Website

## Overview

This style guide provides guidelines for creating and enhancing content for the Buddhist Concepts website. Following these guidelines ensures consistency, accuracy, and quality across all content.

## Content Structure

### 1. Frontmatter
All content files must include frontmatter with:
- `layout: layouts/content.njk`
- `title`: Vietnamese name followed by Pali/Sanskrit term in parentheses
- `description`: 1-2 sentence summary of the concept

Example:
```
---
layout: layouts/content.njk
title: Tứ Diệu Đế (Cattāri Ariyasaccāni)
description: Bốn chân lý cao quý - giáo lý căn bản của đạo Phật về khổ và con đường thoát khổ
---
```

### 2. Section Headers
- Use Markdown headers consistently
- Main sections: Level 2 (`##`)
- Subsections: Level 3 (`###`)
- Sub-subsections: Level 4 (`####`)

### 3. Content Organization
- Begin with definition from canonical texts
- Follow with detailed explanation
- Include practical applications
- End with conclusion summarizing key points

## Writing Style

### 1. Tone and Voice
- Clear and accessible to beginners
- Respectful and authentic to Buddhist tradition
- Educational but not preachy
- Balanced between scholarly and practical

### 2. Language Level
- Aim for 8th-10th grade reading level
- Explain technical terms when first introduced
- Use simple language for complex concepts
- Avoid unnecessarily complex sentences

### 3. Perspective
- Use third person for explanations
- Second person (`you`) may be used for practice instructions and direct address to the reader.
- Avoid first person (`I`, `we`) except in clearly marked personal examples or specific contexts like introductions/conclusions where appropriate.

### 4. Formatting Standards
- **Bold**: Use for emphasis on key terms or actions (`**bold text**`).
- *Italics*: Use for Pali/Sanskrit terms within sentences, book titles, or subtle emphasis (`*italic text*`).
- `Code`: Use for technical terms, file paths, or code snippets (`` `code` ``).
- Links: Use descriptive link text (e.g., `[Four Noble Truths](/content/tu-dieu-de/)` not `[click here](/content/tu-dieu-de/)`).
- Paragraphs: Keep paragraphs focused on a single idea, generally 3-5 sentences long.
- Abbreviations: Avoid abbreviations where possible. Spell out terms fully on first use.

## Terminology

### 1. Buddhist Terms
- Include both Vietnamese and Pali/Sanskrit terms
- Format: Vietnamese term (Pali/Sanskrit term)
- Example: "Tứ Diệu Đế (Cattāri Ariyasaccāni)"
- Be consistent with diacritical marks in Pali/Sanskrit

### 2. Standard Translations
Use these standard translations for key terms:

| Vietnamese | Pali/Sanskrit | English |
|------------|---------------|---------|
| Tứ Diệu Đế | Cattāri Ariyasaccāni | Four Noble Truths |
| Bát Chánh Đạo | Ariyo Aṭṭhaṅgiko Maggo | Noble Eightfold Path |
| Tam Học | Tisikkhā | Three Trainings |
| Tứ Niệm Xứ | Satipaṭṭhāna | Four Foundations of Mindfulness |
| Thất Giác Chi | Bojjhaṅga | Seven Factors of Enlightenment |
| Ngũ Uẩn | Pañcakkhandha | Five Aggregates |
| Thập Nhị Nhân Duyên | Paṭiccasamuppāda | Dependent Origination |
| Niết Bàn | Nibbāna | Nirvana |

### 3. Spelling and Capitalization
- Capitalize proper nouns and formal Buddhist terms
- Use Vietnamese diacritical marks correctly
- Be consistent with hyphenation

## Citations and References

### 1. Sutta Citations
- Include the name of the sutta in both Vietnamese and Pali
- Provide specific chapter and verse numbers when available
- Use this format: "Kinh [Vietnamese Name] ([Pali Name]), [Chapter].[Verse]"
- Example: "Kinh Chuyển Pháp Luân (Dhammacakkappavattana Sutta), SN 56.11"

### 2. Quotations
- Use blockquote format (`>`) for direct quotes from suttas
- Provide source immediately after the quote
- For longer quotes, consider breaking into paragraphs

Example:
```
> "Này các Tỳ kheo, đây là Khổ Thánh đế: Sinh là khổ, già là khổ, bệnh là khổ, chết là khổ..."

*Kinh Chuyển Pháp Luân (Dhammacakkappavattana Sutta), SN 56.11*
```

### 3. References to Other Concepts
- Link to other concept pages when mentioned
- Use this format: `[Concept Name](/content/concept-file-name/)`
- Example: `[Bát Chánh Đạo](/content/bat-chanh-dao/)`

## Visual Elements

### 1. Lists
- Use bullet points for unordered lists
- Use numbered lists for sequential steps or ranked items
- Keep list items parallel in structure
- Limit nesting to 2 levels for readability

### 2. Tables
- Use tables for comparing concepts or organizing related information
- Include headers for each column
- Keep tables simple and readable

### 3. Diagrams and Images
- Include descriptive alt text for all images
- Reference diagrams in the text
- Ensure diagrams have clear labels
- Use consistent visual style across diagrams
- Ensure diagrams are accessible (e.g., sufficient contrast, not relying solely on color).

### 4. Visual Style Guidelines
- **Color Palette**: Adhere to the website's established color palette (refer to `design-system.md` - *to be created*). Use colors meaningfully (e.g., consistent colors for specific concepts across diagrams).
- **Iconography**: Use icons from the approved set (refer to `design-system.md` - *to be created*). Ensure icons are simple, clear, and culturally appropriate.
- **Typography**: Follow the website's typographic scale and font choices (refer to `design-system.md` - *to be created*). Ensure sufficient line spacing and readable font sizes.
- **Layout**: Maintain consistent spacing and alignment. Use whitespace effectively to improve readability.

## Practice Instructions

### 1. Meditation Instructions
- Provide clear, step-by-step instructions
- Number sequential steps
- Include time recommendations where appropriate
- Address common difficulties and solutions

### 2. Daily Life Applications
- Offer concrete examples
- Include both formal and informal practices
- Provide variations for different circumstances
- Make suggestions practical and achievable

## Content Enhancement Guidelines

### 1. Adding Sutta References
- Include at least 3-5 relevant sutta references per concept
- Prioritize references from the Pali Canon
- Provide context for each reference
- Explain how the reference relates to the concept

### 2. Enhancing Pali/Sanskrit Terminology
- Add pronunciation guides for key terms
- Provide etymological information where helpful
- Explain nuances in meaning
- Compare similar terms to clarify distinctions

### 3. Adding Visual Elements
- Create diagrams for complex relationships
- Use consistent visual language
- Ensure diagrams are self-explanatory
- Include captions explaining the visual

## Quality Assurance

### 1. Accuracy Checklist
- Verify all sutta references
- Check consistency of terminology
- Ensure doctrinal accuracy
- Confirm all links work properly

### 2. Readability Checklist
- Check for clear structure
- Ensure logical flow
- Verify appropriate language level
- Confirm content is accessible to target audience

### 3. Completeness Checklist
- Covers all key aspects of the concept
- Includes both theory and practice
- Provides historical context where relevant
- Offers modern applications

## Content Templates
Refer to the templates provided in the `content-templates/` directory for specific content types:
- `content-templates/concept-template.md`: Standard structure for explaining Buddhist concepts.
- `content-templates/practice-guide-template.md`: Format for step-by-step practice instructions.
- `content-templates/qa-template.md`: Structure for question-and-answer pages.
- `content-templates/modern-application-template.md`: Template for discussing modern relevance.

*Ensure all new content adheres strictly to these templates.*

## Future Enhancements
- **Glossary**: A comprehensive, searchable glossary of Pali/Sanskrit and Vietnamese Buddhist terms will be developed. This will include pronunciation guides and etymological information.
- **Transliteration Standard**: A specific, consistent standard for Pali/Sanskrit transliteration (e.g., IAST or similar) will be formally adopted and applied across the site.
- **Design System**: A `design-system.md` document will be created to formalize visual style guidelines, color palettes, typography, and iconography.
