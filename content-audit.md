# Content Audit - Initial Findings (Phase 1, Month 1)

This document records the initial findings of the content audit based on the file structure and the `plan-tracking-v2.md`.

## 1. File Structure & Naming Conventions

*   **Observation**: Numerous duplicate or variant filenames exist for the same concepts within `src/content/`. This suggests inconsistent naming conventions (use of diacritics, hyphens) and potential content duplication.
*   **Examples**:
    *   `tu-dieu-de.md` / `tudieuđe.md`
    *   `bat-chanh-dao.md` / `batchanhđao.md`
    *   `tam-hoc.md` / `tamhoc.md`
    *   `tu-niem-xu.md` / `tuniemxu.md`
    *   `thay-minh-tue.md` / `thayminhue.md`
    *   Individual truths of Tứ Diệu Đế (e.g., `kho-de.md` / `khođe.md`)
*   **Action Required**: Investigate these pairs/groups. Consolidate content into a single file per concept using a consistent naming convention (e.g., hyphenated, no diacritics in filename, as per most existing files). Implement redirects if necessary. Update internal links.

## 2. Priority Concepts for Enhancement (Phase 1, Months 2-3)

Based on `plan-tracking-v2.md`, the following concepts/guides are priorities for initial enhancement rounds (adding sutta references, diagrams, detailed instructions):

### Core Concepts (Sutta Refs & Diagrams)
*   Tứ Diệu Đế (Four Noble Truths) - Target file: `tu-dieu-de.md` (after consolidation)
*   Bát Chánh Đạo (Noble Eightfold Path) - Target file: `bat-chanh-dao.md` (after consolidation)
*   Tứ Niệm Xứ (Four Foundations of Mindfulness) - Target file: `tu-niem-xu.md` (after consolidation)
*   Thập Nhị Nhân Duyên (Dependent Origination) - Target file: `thap-nhi-nhan-duyen.md`
*   Ngũ Uẩn (Five Aggregates) - Target file: `ngu-uan.md`

### Practice Guides (Detailed Instructions)
*   Ānāpānasati (Mindfulness of Breathing) - Target file: `anapanasati.md`
*   Mettā Bhāvanā (Loving-kindness Meditation) - Target file: `metta-meditation.md`
*   Body Scanning Meditation - Target file: `body-scanning.md`
*   Walking Meditation - Target file: `walking-meditation.md`

## 3. Content Gaps (Initial Assessment)

*   While many individual concept files exist, dedicated sections outlined in the plan (e.g., "Buddhism in Daily Life", "Buddhism and Science", Q&A) need structured creation in later phases.
*   Existing files like `buddhist-daily-life.md` might serve as starting points but likely don't fulfill the comprehensive scope planned.

## Next Steps (Audit)

1.  Consolidate duplicate/variant files identified above.
2.  Perform a deeper audit of the *content* within the priority files against the `style-guide.md` and enhancement goals (sutta refs, diagrams, practice details).
3.  Update `plan-tracking-v2.md` to reflect the completion of the initial audit step.
