# Marketing Team Review: Issues Report

Annotations by **tiffanymacsherry** extracted from the PDF review documents.
Compared against the local new-website-v3 codebase and live taiko.xyz.

---

## 1. About Gwyneth Page (`/gwyneth`)

### Issue 1.1: Key Features missing icons
- **PDF:** "About Gwyneth.pdf" — Pages 2-3
- **Comment:** "Icon?" on each of the 4 features (Synchronously Composable, Built to Unite, Boosted, Forever Based)
- **Is it correct?** Yes. The features component (`src/widgets/product-page-screens/ui/features/index.tsx`) only renders a number (1.0, 2.0, etc.), title, and text. There is no icon field in the `FeatureItem` type and no icon rendering in the component.
- **Suggested fix:** Add an optional `icon` field to the `FeatureItem` type in `src/content/types/index.ts`. Update the `Features` component to render an icon image when provided. Add icon assets for each feature to `/public/img/gwyneth/`. Populate the `features_list` in `src/content/pages/gwyneth.ts` with the icon paths.

### Issue 1.2: Explore banner section missing suptitle text
- **PDF:** "About Gwyneth.pdf" — Page 4
- **Comment:** "A PURIST APPROACH TO ETHEREUM'S FUTURE"
- **Is it correct?** Yes. The `explore_suptitle` field in `src/content/pages/gwyneth.ts:74` is currently an empty string `""`. The Explore component supports suptitle text (renders it via `dangerouslySetInnerHTML` when non-empty), but no text is provided.
- **Suggested fix:** Update `explore_suptitle` in `src/content/pages/gwyneth.ts` to `"A PURIST APPROACH TO ETHEREUM'S FUTURE"`.

### Issue 1.3: Bottom cards should say "coming soon" instead of linking to docs
- **PDF:** "About Gwyneth.pdf" — Page 5
- **Comment:** "Links to docs should just say 'coming soon'" (3 annotations on Documentation, Join Testnet, and Community cards)
- **Is it correct?** Yes. Currently in `src/content/pages/gwyneth.ts`:
  - "Documentation" links to `https://docs.taiko.xyz/` (line 45)
  - "Join Testnet" links to `https://docs.taiko.xyz/` (line 53)
  - "Community" links to `https://discord.gg/taikoxyz` (line 69)

  All 3 cards have `disabled: false` and active links. The "Discover the Ecosystem" card links to `/ecosystem` and was NOT annotated, so that one should remain as-is.
- **Suggested fix:** For the 3 annotated cards, set `disabled: true` and either clear the `href` or change the text/UI to show "Coming soon". The Cards component (`src/widgets/product-page-screens/ui/cards/index.tsx`) already supports a `disabled` state — verify that it renders a "coming soon" label or add one.

---

## 2. Explore Gwyneth Ecosystem Page (`/gwyneth/apps`)

### Issue 2.1: Hero missing background image and "Taiko Gwyneth" not styled
- **PDF:** "Explore Gwynteh Ecosystem.pdf" — Page 1
- **Comment:** "Missing image and text needs to be centered with 'Taiko Gwyneth' in Pink"
- **Is it correct?** Yes. The hero section in `src/app/gwyneth/apps/page.tsx:20-24` only renders a plain `<h1>` with no background image. The title "Explore the Taiko Gwyneth Ecosystem" has no special color treatment for "Taiko Gwyneth". On the live taiko.xyz, the hero also appears the same way, so this is a design improvement request.
- **Suggested fix:** Add a background image/gradient to the `.hero` section in `gwyneth-apps.module.scss`. Wrap "Taiko Gwyneth" in a `<span>` with a pink color class (matching `$kColorPink`), or split the title into parts in the data to allow targeted styling. Center the title text.

### Issue 2.2: "About ecosystem" label should be removed
- **PDF:** "Explore Gwynteh Ecosystem.pdf" — Page 1
- **Comment:** "Remove" on the "About ecosystem" label
- **Is it correct?** Yes. The `<Label>` component renders `hero_about_suptitle` ("About ecosystem") in `src/app/gwyneth/apps/page.tsx:31`. The label appears above the description text with a left border.
- **Suggested fix:** Remove the `<Label>` element from the component, or set `hero_about_suptitle` to an empty string and add a conditional render check.

### Issue 2.3: "Submit your project" button too large
- **PDF:** "Explore Gwynteh Ecosystem.pdf" — Page 1
- **Comment:** "Smaller button"
- **Is it correct?** Yes. The button uses the `primary` variant via `WrapperButton`, which renders a full-width pink CTA button with an arrow. Compared to the rest of the section, it's visually dominant.
- **Suggested fix:** Change the button `variant` from `"primary"` to a smaller variant (e.g., `"secondary"` or `"outline"`) in `src/content/pages/gwyneth-apps.ts:14`. Alternatively, add a size modifier class to constrain its width.

### Issue 2.4: 90+ DAPPS counter not centered
- **PDF:** "Explore Gwynteh Ecosystem.pdf" — Page 1
- **Comment:** "Centered"
- **Is it correct?** Yes. The `.about` section uses `display: flex; align-items: flex-start;` in `gwyneth-apps.module.scss:23-25`, which left-aligns the stat block. The stat block sits beside the text content in a row layout.
- **Suggested fix:** Either center the `.about_stat` block by adding `margin: 0 auto` or restructuring the layout, or move the stat block to its own centered row below the about text.

### Issue 2.5: Disclaimer toggle questioned
- **PDF:** "Explore Gwynteh Ecosystem.pdf" — Page 1
- **Comment:** "Why Toggle?"
- **Is it correct?** Valid concern. The disclaimer is rendered as a toggle-able section (`src/app/gwyneth/apps/page.tsx:57-79`) with a pink toggle switch. It defaults to showing the text (`disclaimer_active: true`). The toggle interaction pattern is unusual for a disclaimer — disclaimers are typically always visible.
- **Suggested fix:** Remove the toggle and always show the disclaimer text. Simplify the disclaimer section to a static card with title and text. Remove the `disclaimerActive` state and toggle button from the component.

### Issue 2.6: Ecosystem project cards should show "coming soon" and be more blurred
- **PDF:** "Explore Gwynteh Ecosystem.pdf" — Page 2
- **Comment:** "Should all have 'coming soon' over blocks and more blurred"
- **Is it correct?** Yes. Currently inactive apps (`active: false`) in the cards get `opacity: 0.4` and `pointer-events: none` via `app_card_inactive` class in `gwyneth-apps.module.scss:156-159`. All current apps have `active: false`. There is no "coming soon" overlay text or blur filter.
- **Suggested fix:** Add a CSS `filter: blur(2px)` to `.app_card_inactive` and add a `::after` pseudo-element or overlay `<div>` with "Coming soon" text centered over the card. Example:
  ```scss
  .app_card_inactive {
      opacity: 0.5;
      pointer-events: none;
      filter: blur(2px);
      position: relative;
      &::after {
          content: 'Coming soon';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #333;
          filter: blur(0); // unblur the text
      }
  }
  ```
  Note: CSS `::after` on the card won't be unblurred if the parent has blur. A better approach is to add a sibling overlay `<div>` in the `AppCard` component when `!app.active`.

### Issue 2.7: Missing "Stay updated!" newsletter section
- **PDF:** "Explore Gwynteh Ecosystem.pdf" — Page 2
- **Comment:** "Stay updated! button here"
- **Is it correct?** Yes. The Gwyneth apps page (`src/app/gwyneth/apps/page.tsx`) does NOT include a `<FooterSubscribe />` component. The DAO page and other pages do include it. There is no newsletter section before the footer.
- **Suggested fix:** Add `<FooterSubscribe />` at the bottom of the `gap` div in `src/app/gwyneth/apps/page.tsx`, just before `</DefaultLayout>`. Import it from `@/features/footer-subscribe`.

---

## 3. Learn Taiko DAO Page (`/dao`)

### Issue 3.1: DAO features missing icons
- **PDF:** "Learn Taiko DAO.pdf" — Pages 2-3
- **Comment:** "Icon" on each of the 5 features (Security Council, Delegation, Propose, Voting, Approval)
- **Is it correct?** Yes. The DAO page (`src/app/dao/page.tsx:49-62`) renders features with only a number, title, and text — no icons. The `about_features` array in `src/content/pages/dao.ts` has no icon field, and the DAO feature type doesn't include one.
- **Suggested fix:** Same approach as Issue 1.1 — add an optional `icon` field to the feature type used by the DAO page. Update the DAO page component to render icons. Create or source appropriate icon assets for each governance step (Security Council, Delegation, Propose, Voting, Approval).

### Issue 3.2: "Stay updated" newsletter button doesn't expand to show email input
- **PDF:** "Learn Taiko DAO.pdf" — Page 4
- **Comment:** "This button doesn't extend to allow users to enter email address"
- **Is it correct?** Yes, likely a bug. The `FooterSubscribe` component (`src/features/footer-subscribe/index.tsx`) uses a CSS animation to expand the form from `68px` to `500px` width. The animation is triggered by an `--animate` CSS class, which is meant to be added by the `aos` (animate on scroll) logic when the element scrolls into view (via `data-aos-offset="210px"` on line 39). If the AOS library isn't properly initialized or the scroll offset doesn't trigger, the form stays collapsed at `68px` — showing only the subscribe button with no visible email input.
- **Suggested fix:** Debug the AOS integration. Check that:
  1. The `aos` class and `--animate` class are being applied when the element scrolls into view
  2. The `data-aos-offset` value isn't too large for the page layout
  3. As a fallback, consider starting the form in an expanded state (remove the `width: 68px` initial state) or adding a click-to-expand interaction instead of relying solely on scroll-based animation.

---

## 4. Taiko DAO App (`dao.taiko.xyz`)

### Issue 4.1: Remove social media posts section
- **PDF:** "Taiko DAO App.pdf" — Page 3
- **Comment:** "Remove" (on the "Latest posts from @taikoxyz" X/Twitter feed section)
- **Is it correct?** Yes, but this is **NOT in our codebase**. The DAO App at `dao.taiko.xyz` is an external Aragon-based governance application. Our new-website-v3 only links to it (`https://dao.taiko.xyz/`). The Twitter/X feed section with skeleton-loading posts is part of the Aragon DAO app UI.
- **Suggested fix:** This needs to be addressed in the **dao.taiko.xyz** deployment/configuration, not in new-website-v3. Coordinate with whoever manages the Aragon DAO app to remove the social feed widget. If this is configurable via Aragon's settings, look for the X/Twitter feed plugin or widget configuration.

---

---

## 5. Content Divergence: Live taiko.xyz vs Local (Beyond PDF Annotations)

The browser agent checked the live site's source (from the `taikoxyz/website-v4` SvelteKit repo on GitHub) and found the live Gwyneth page has **diverged significantly** from our local copy. These are not from the PDF annotations but are critical to address before replacing taiko.xyz.

### 5.1: Gwyneth hero description text differs
- **Live:** "A multi-chain execution system with atomic transactions across EVM chains and no centralized sequencer"
- **Local:** "Gwyneth is a network of identical based Ethereum rollups that synchronously compose with each other and the L1."
- **Action:** Update `hero_text` in `src/content/pages/gwyneth.ts` to match live.

### 5.2: Gwyneth about section text differs
- **Live about_text:** "Multi-chain composability on Ethereum"
- **Local about_text:** "Gwyneth uses Ethereum for publishing blocks, data availability, sequencing transactions, and proof verification."
- **Live about_subtext:** "Ownerless, permissionless, decentralized"
- **Local about_subtext:** "Making synchronous composability a reality."
- **Action:** Update both fields in `src/content/pages/gwyneth.ts` to match live.

### 5.3: Live site has 3 features (not 4) with different content
- **Live features:**
  1. "Synchronously Composable" — "Execute atomic transactions across multiple chains, including the L1, in a single operation."
  2. "Validated on Ethereum" — "All cross-chain transactions are sequenced and confirmed by Ethereum validators for security and reliability."
  3. "Forever Based" — "Gwyneth inherits Ethereum's sequencing and finality guarantees, keeping it fully aligned with the base layer."
- **Local features:** 4 items (Synchronously Composable, Built to Unite, Boosted, Forever Based) with different descriptions.
- **Live site uses Font Awesome icons** (link, shield, anchor) on feature cards. Local uses numbered labels (1.0, 2.0, etc.).
- **Action:** Update `features_list` in `src/content/pages/gwyneth.ts` to 3 features matching live content. Add icon support per Issue 1.1.

### 5.4: Explore/CTA banner section doesn't exist on live site
- The live `/gwyneth` page has **no Explore/banner section** between Features and Cards. It goes straight from features to the bottom cards.
- Our local version renders an Explore section with background image and CTA text.
- **Action:** Clarify with marketing whether to keep this section (with the "A PURIST APPROACH TO ETHEREUM'S FUTURE" suptitle per Issue 1.2) or remove it to match live. The PDF annotation adding a suptitle suggests they want to keep it.

### 5.5: Card text and links differ from live
- **Live "Documentation"** links to `https://docs.taiko.xyz/start-here/getting-started/` (more specific)
- **Live "Join Testnet"** is already **disabled/"Coming soon"** (matches the PDF annotation)
- **Live "Discover the Ecosystem"** is already **disabled/"Coming soon"** (matches the PDF annotation)
- **Live "Community"** links to `https://x.com/gwyneth_taiko` (Twitter), not Discord
- **Action:** Update card content in `src/content/pages/gwyneth.ts` to match live text, links, and disabled states.

### 5.6: FAQ subtitle text differs
- **Live:** "Learn more about Gwyneth"
- **Local:** "Read answers to the most common questions about Gwyneth."
- **Action:** Update `faq_text` in `src/content/pages/gwyneth.ts`.

---

## Summary Table

| # | Page | Issue | Valid? | Priority | In Our Codebase? |
|---|------|-------|--------|----------|-------------------|
| 1.1 | /gwyneth | Features missing icons | Yes | Medium | Yes |
| 1.2 | /gwyneth | Explore suptitle missing | Yes | Low | Yes |
| 1.3 | /gwyneth | Cards should say "coming soon" | Yes | High | Yes |
| 2.1 | /gwyneth/apps | Hero missing image + pink styling | Yes | Medium | Yes |
| 2.2 | /gwyneth/apps | Remove "About ecosystem" label | Yes | Low | Yes |
| 2.3 | /gwyneth/apps | Button too large | Yes | Low | Yes |
| 2.4 | /gwyneth/apps | DAPPS counter not centered | Yes | Low | Yes |
| 2.5 | /gwyneth/apps | Disclaimer toggle unnecessary | Yes | Low | Yes |
| 2.6 | /gwyneth/apps | Cards need "coming soon" + blur | Yes | High | Yes |
| 2.7 | /gwyneth/apps | Missing newsletter section | Yes | Medium | Yes |
| 3.1 | /dao | Features missing icons | Yes | Medium | Yes |
| 3.2 | /dao | Newsletter button doesn't expand | Yes (bug) | High | Yes |
| 4.1 | dao.taiko.xyz | Remove Twitter feed | Yes | Medium | No (external) |
| 5.1 | /gwyneth | Hero text differs from live | N/A | High | Yes |
| 5.2 | /gwyneth | About text differs from live | N/A | High | Yes |
| 5.3 | /gwyneth | Live has 3 features (not 4), different content + icons | N/A | High | Yes |
| 5.4 | /gwyneth | Explore banner doesn't exist on live | N/A | Medium | Yes |
| 5.5 | /gwyneth | Card text/links/disabled states differ | N/A | High | Yes |
| 5.6 | /gwyneth | FAQ subtitle text differs | N/A | Low | Yes |
