# FinLite App - Color Theme Documentation

**Last Updated:** November 3, 2025  
**Version:** 1.0

## Overview

FinLite app uses a comprehensive color theming system supporting both **Light Mode** and **Dark Mode** across iOS and Android platforms. Colors are defined in RGB format and converted to hex values for reference.

---

## Color System Architecture

### File Structure
- **Theme Definition:** `finlite-app/theme/colors.ts` (Platform-specific RGB colors)
- **Theme Variables:** `finlite-app/global.css` (CSS variables and dark mode overrides)
- **Tailwind Config:** `finlite-app/tailwind.config.js` (Tailwind class mappings)
- **Theme Hook:** `finlite-app/lib/useThemeColors.ts` (Programmatic color access)
- **Theme Store:** `finlite-app/store/themeStore.ts` (Theme state management)

---

## Color Palette

### 1. Primary Colors

#### Light Mode (iOS)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Primary | rgb(0, 123, 254) | `#007BFE` | Buttons, links, primary CTA |
| Primary Foreground | rgb(255, 255, 255) | `#FFFFFF` | Text on primary background |

#### Light Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Primary | rgb(0, 112, 233) | `#0070E9` | Buttons, links, primary CTA |
| Primary Foreground | rgb(255, 255, 255) | `#FFFFFF` | Text on primary background |

#### Dark Mode (iOS/Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Primary | rgb(3, 133, 255) | `#0385FF` | Buttons, links, primary CTA |
| Primary Foreground | rgb(255, 255, 255) | `#FFFFFF` | Text on primary background |

---

### 2. Background & Surface Colors

#### Light Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Background | rgb(255, 255, 255) | `#FFFFFF` | `bg-background` | Main screen background |
| Card | rgb(255, 255, 255) | `#FFFFFF` | `bg-card` | Card containers |
| Surface | rgb(255, 255, 255) | `#FFFFFF` | `bg-surface` | Surface areas |
| Surface Secondary | rgb(249, 250, 251) | `#F9FAFB` | `bg-surface-secondary` | Secondary surfaces |
| Surface Tertiary | rgb(243, 244, 246) | `#F3F4F6` | `bg-surface-tertiary` | Tertiary surfaces |

#### Dark Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Background | rgb(0, 0, 0) | `#000000` | `dark:bg-background` | Main screen background |
| Card | rgb(24, 24, 27) | `#181A1B` | `dark:bg-card` | Card containers |
| Surface | rgb(24, 24, 27) | `#181A1B` | `dark:bg-surface` | Surface areas |
| Surface Secondary | rgb(39, 39, 42) | `#27272A` | `dark:bg-surface-secondary` | Secondary surfaces |
| Surface Tertiary | rgb(63, 63, 70) | `#3F3F46` | `dark:bg-surface-tertiary` | Tertiary surfaces |

#### Android Dark Mode (Additional)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Card | rgb(16, 19, 27) | `#10131B` | Card containers |
| Surface | rgb(16, 19, 27) | `#10131B` | Surface areas |

---

### 3. Text & Foreground Colors

#### Light Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Foreground | rgb(0, 0, 0) | `#000000` | `text-foreground` | Primary text |
| Card Foreground | rgb(8, 28, 30) | `#081C1E` | `text-card-foreground` | Text in cards |

#### Dark Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Foreground | rgb(255, 255, 255) | `#FFFFFF` | `dark:text-foreground` | Primary text |
| Card Foreground | rgb(255, 255, 255) | `#FFFFFF` | `dark:text-card-foreground` | Text in cards |

---

### 4. Semantic Status Colors

#### Success
| Mode | RGB | HEX | CSS Class | Usage |
|------|-----|-----|-----------|-------|
| Light | rgb(34, 197, 94) | `#22C55E` | `text-success` / `bg-success` | Success states, confirmations |
| Dark | rgb(34, 197, 94) | `#22C55E` | `dark:text-success` | Same across modes |

#### Error/Destructive
| Mode | RGB | HEX | CSS Class | Usage |
|------|-----|-----|-----------|-------|
| Light | rgb(220, 38, 38) | `#DC2626` | `text-destructive` / `bg-destructive` | Errors, deletions, alerts |
| Dark | rgb(239, 68, 68) | `#EF4444` | `dark:text-destructive` | Errors, deletions, alerts |

#### Warning
| Mode | RGB | HEX | CSS Class | Usage |
|------|-----|-----|-----------|-------|
| Light | rgb(245, 158, 11) | `#F59E0B` | `text-warning` / `bg-warning` | Warnings, cautions |
| Dark | rgb(253, 224, 71) | `#FDE047` | `dark:text-warning` | Warnings, cautions |

#### Info
| Mode | RGB | HEX | CSS Class | Usage |
|------|-----|-----|-----------|-------|
| Light | rgb(59, 130, 246) | `#3B82F6` | `text-info` / `bg-info` | Information, hints |
| Dark | rgb(147, 197, 253) | `#93C5FD` | `dark:text-info` | Information, hints |

---

### 5. Secondary Colors

#### Light Mode (iOS)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Secondary | rgb(45, 175, 231) | `#2DAFE7` | Alternative primary actions |
| Secondary Foreground | rgb(255, 255, 255) | `#FFFFFF` | Text on secondary background |

#### Light Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Secondary | rgb(176, 201, 255) | `#B0C9FF` | Alternative primary actions |
| Secondary Foreground | rgb(20, 55, 108) | `#14376C` | Text on secondary background |

#### Dark Mode
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Secondary | rgb(100, 211, 254) | `#64D3FE` | Alternative primary actions |
| Secondary Foreground | rgb(255, 255, 255) | `#FFFFFF` | Text on secondary background |

#### Android Dark Mode
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Secondary | rgb(28, 60, 114) | `#1C3C72` | Alternative primary actions |
| Secondary Foreground | rgb(189, 209, 255) | `#BDD1FF` | Text on secondary background |

---

### 6. Accent Colors

#### Light Mode (iOS)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Accent | rgb(255, 40, 84) | `#FF2854` | Highlights, emphasis |
| Accent Foreground | rgb(255, 255, 255) | `#FFFFFF` | Text on accent background |

#### Light Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Accent | rgb(169, 73, 204) | `#A949CC` | Highlights, emphasis |
| Accent Foreground | rgb(255, 255, 255) | `#FFFFFF` | Text on accent background |

#### Dark Mode (iOS)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Accent | rgb(255, 52, 95) | `#FF345F` | Highlights, emphasis |
| Accent Foreground | rgb(255, 255, 255) | `#FFFFFF` | Text on accent background |

#### Dark Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Accent | rgb(83, 0, 111) | `#53006F` | Highlights, emphasis |
| Accent Foreground | rgb(238, 177, 255) | `#EEB1FF` | Text on accent background |

---

### 7. Neutral/Grey Colors

#### Light Mode (iOS)
| Shade | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Grey (muted) | rgb(142, 142, 147) | `#8E8E93` | Disabled text, placeholders |
| Grey2 | rgb(175, 176, 180) | `#AFAEB4` | Secondary text |
| Grey3 | rgb(199, 199, 204) | `#C7C7CC` | Dividers, borders |
| Grey4 | rgb(210, 210, 215) | `#D2D2D7` | Light borders |
| Grey5 | rgb(230, 230, 235) | `#E6E6EB` | Very light backgrounds |
| Grey6 | rgb(242, 242, 247) | `#F2F2F7` | Lightest backgrounds |

#### Light Mode (Android)
| Shade | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Grey (muted) | rgb(24, 28, 35) | `#181C23` | Disabled text, placeholders |
| Grey2 | rgb(65, 71, 84) | `#414754` | Secondary text |
| Grey3 | rgb(113, 119, 134) | `#717786` | Dividers, borders |
| Grey4 | rgb(193, 198, 215) | `#C1C6D7` | Light borders |
| Grey5 | rgb(215, 217, 228) | `#D7D9E4` | Very light backgrounds |
| Grey6 | rgb(249, 249, 255) | `#F9F9FF` | Lightest backgrounds |

#### Dark Mode (iOS)
| Shade | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Grey (muted) | rgb(142, 142, 147) | `#8E8E93` | Disabled text, placeholders |
| Grey2 | rgb(99, 99, 102) | `#636366` | Secondary text |
| Grey3 | rgb(70, 70, 73) | `#464649` | Dividers, borders |
| Grey4 | rgb(55, 55, 57) | `#373739` | Light borders |
| Grey5 | rgb(40, 40, 42) | `#282A2A` | Very light backgrounds |
| Grey6 | rgb(21, 21, 24) | `#151518` | Darkest backgrounds |

#### Dark Mode (Android)
| Shade | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Grey (muted) | rgb(193, 198, 215) | `#C1C6D7` | Disabled text, placeholders |
| Grey2 | rgb(139, 144, 160) | `#8B90A0` | Secondary text |
| Grey3 | rgb(54, 57, 66) | `#363942` | Dividers, borders |
| Grey4 | rgb(49, 53, 61) | `#31353D` | Light borders |
| Grey5 | rgb(39, 42, 50) | `#272A32` | Very light backgrounds |
| Grey6 | rgb(16, 19, 27) | `#10131B` | Darkest backgrounds |

---

### 8. Input & Border Colors

#### Light Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Border | rgb(230, 230, 235) | `#E6E6EB` | `border-border` | Input borders, dividers |
| Input | rgb(210, 210, 215) | `#D2D2D7` | `bg-input` | Input field backgrounds |
| Ring | rgb(230, 230, 235) | `#E6E6EB` | `ring-ring` | Focus ring (iOS) |

#### Light Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Border | rgb(215, 217, 228) | `#D7D9E4` | Input borders, dividers |
| Input | rgb(210, 210, 215) | `#D2D2D7` | Input field backgrounds |
| Ring | rgb(215, 217, 228) | `#D7D9E4` | Focus ring |

#### Dark Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Border | rgb(40, 40, 42) | `#282A2A` | `dark:border-border` | Input borders, dividers |
| Input | rgb(55, 55, 57) | `#373739` | `dark:bg-input` | Input field backgrounds |
| Ring | rgb(40, 40, 42) | `#282A2A` | `dark:ring-ring` | Focus ring |

#### Dark Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Border | rgb(39, 42, 50) | `#272A32` | Input borders, dividers |
| Input | rgb(55, 55, 57) | `#373739` | Input field backgrounds |
| Ring | rgb(39, 42, 50) | `#272A32` | Focus ring |

---

### 9. Popover Colors

#### Light Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Popover | rgb(230, 230, 235) | `#E6E6EB` | `bg-popover` | Popover, menu backgrounds |
| Popover Foreground | rgb(0, 0, 0) | `#000000` | `text-popover-foreground` | Popover text |

#### Light Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Popover | rgb(215, 217, 228) | `#D7D9E4` | Popover, menu backgrounds |
| Popover Foreground | rgb(0, 0, 0) | `#000000` | Popover text |

#### Dark Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Popover | rgb(40, 40, 42) | `#282A2A` | `dark:bg-popover` | Popover, menu backgrounds |
| Popover Foreground | rgb(255, 255, 255) | `#FFFFFF` | `dark:text-popover-foreground` | Popover text |

#### Dark Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Popover | rgb(39, 42, 50) | `#272A32` | Popover, menu backgrounds |
| Popover Foreground | rgb(224, 226, 237) | `#E0E2ED` | Popover text |

---

### 10. Muted Colors

#### Light Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Muted | rgb(175, 176, 180) | `#AFAEB4` | `bg-muted` | Muted backgrounds |
| Muted Foreground | rgb(142, 142, 147) | `#8E8E93` | `text-muted-foreground` | Muted text |

#### Light Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Muted | rgb(193, 198, 215) | `#C1C6D7` | Muted backgrounds |
| Muted Foreground | rgb(65, 71, 84) | `#414754` | Muted text |

#### Dark Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Muted | rgb(70, 70, 73) | `#464649` | `dark:bg-muted` | Muted backgrounds |
| Muted Foreground | rgb(142, 142, 147) | `#8E8E93` | `dark:text-muted-foreground` | Muted text |

#### Dark Mode (Android)
| Color | RGB | HEX | Usage |
|-------|-----|-----|-------|
| Muted | rgb(216, 226, 255) | `#D8E2FF` | Muted backgrounds |
| Muted Foreground | rgb(139, 144, 160) | `#8B90A0` | Muted text |

---

### 11. Icon Colors

#### Light Mode
| Icon Type | RGB | HEX | CSS Class | Usage |
|-----------|-----|-----|-----------|-------|
| Primary | rgb(0, 123, 254) | `#007BFE` | `icon-primary` | Main action icons |
| Secondary | rgb(107, 114, 128) | `#6B7280` | `icon-secondary` | Secondary icons |
| Success | rgb(34, 197, 94) | `#22C55E` | `icon-success` | Success indicators |
| Error | rgb(220, 38, 38) | `#DC2626` | `icon-error` | Error indicators |
| Warning | rgb(245, 158, 11) | `#F59E0B` | `icon-warning` | Warning indicators |
| Info | rgb(59, 130, 246) | `#3B82F6` | `icon-info` | Info indicators |
| Muted | rgb(156, 163, 175) | `#9CA3AF` | `icon-muted` | Disabled icons |

#### Light Mode (Android)
| Icon Type | RGB | HEX | Usage |
|-----------|-----|-----|-------|
| Primary | rgb(0, 112, 233) | `#0070E9` | Main action icons |
| Secondary | rgb(107, 114, 128) | `#6B7280` | Secondary icons |

#### Dark Mode
| Icon Type | RGB | HEX | CSS Class | Usage |
|-----------|-----|-----|-----------|-------|
| Primary | rgb(96, 165, 250) | `#60A5FA` | `dark:icon-primary` | Main action icons |
| Secondary | rgb(161, 161, 170) | `#A1A1AA` | `dark:icon-secondary` | Secondary icons |
| Success | rgb(34, 197, 94) | `#22C55E` | `dark:icon-success` | Success indicators |
| Error | rgb(239, 68, 68) | `#EF4444` | `dark:icon-error` | Error indicators |
| Warning | rgb(253, 224, 71) | `#FDE047` | `dark:icon-warning` | Warning indicators |
| Info | rgb(147, 197, 253) | `#93C5FD` | `dark:icon-info` | Info indicators |
| Muted | rgb(107, 114, 128) | `#6B7280` | `dark:icon-muted` | Disabled icons |

#### Dark Mode (Android)
| Icon Type | RGB | HEX | Usage |
|-----------|-----|-----|-------|
| Primary | rgb(96, 165, 250) | `#60A5FA` | Main action icons |
| Secondary | rgb(161, 161, 170) | `#A1A1AA` | Secondary icons |

---

### 12. Badge/Pill Colors

#### Success Badge

| Mode | Type | RGB | HEX | CSS Class |
|------|------|-----|-----|-----------|
| Light | Background | rgb(209, 250, 229) | `#D1FAE5` | `bg-badge-success-bg` |
| Light | Foreground | rgb(22, 163, 74) | `#16A34A` | `text-badge-success-fg` |
| Dark | Background | rgb(20, 83, 45) | `#14532D` | `dark:bg-badge-success-bg` |
| Dark | Foreground | rgb(16, 185, 129) | `#10B981` | `dark:text-badge-success-fg` |

#### Error Badge

| Mode | Type | RGB | HEX | CSS Class |
|------|------|-----|-----|-----------|
| Light | Background | rgb(254, 226, 226) | `#FEE2E2` | `bg-badge-error-bg` |
| Light | Foreground | rgb(220, 38, 38) | `#DC2626` | `text-badge-error-fg` |
| Dark | Background | rgb(76, 29, 29) | `#4C1D1D` | `dark:bg-badge-error-bg` |
| Dark | Foreground | rgb(239, 68, 68) | `#EF4444` | `dark:text-badge-error-fg` |

#### Info Badge

| Mode | Type | RGB | HEX | CSS Class |
|------|------|-----|-----|-----------|
| Light | Background | rgb(219, 234, 254) | `#DBEAFE` | `bg-badge-info-bg` |
| Light | Foreground | rgb(37, 99, 235) | `#2563EB` | `text-badge-info-fg` |
| Dark | Background | rgb(30, 58, 138) | `#1E3A8A` | `dark:bg-badge-info-bg` |
| Dark | Foreground | rgb(147, 197, 253) | `#93C5FD` | `dark:text-badge-info-fg` |

#### Warning Badge

| Mode | Type | RGB | HEX | CSS Class |
|------|------|-----|-----|-----------|
| Light | Background | rgb(254, 243, 199) | `#FEF3C7` | `bg-badge-warning-bg` |
| Light | Foreground | rgb(180, 83, 9) | `#B45309` | `text-badge-warning-fg` |
| Dark | Background | rgb(113, 63, 18) | `#713F12` | `dark:bg-badge-warning-bg` |
| Dark | Foreground | rgb(253, 224, 71) | `#FDE047` | `dark:text-badge-warning-fg` |

---

### 13. Tier/Achievement Colors (Universal - same in light & dark)

| Tier | RGB | HEX | CSS Class | Usage |
|------|-----|-----|-----------|-------|
| Bronze | rgb(205, 127, 50) | `#CD7F32` | `text-bronze` | Bronze achievement tier |
| Silver | rgb(192, 192, 192) | `#C0C0C0` | `text-silver` | Silver achievement tier |
| Gold | rgb(255, 215, 0) | `#FFD700` | `text-gold` | Gold achievement tier |
| Platinum | rgb(229, 228, 226) | `#E5E4E2` | `text-platinum` | Platinum achievement tier |
| Diamond | rgb(185, 242, 255) | `#B9F2FF` | `text-diamond` | Diamond achievement tier |

---

### 14. Additional Semantic Colors

#### Light Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Purple | rgb(124, 58, 237) | `#7C3AED` | `text-purple` | Accent highlights |
| Pink | rgb(219, 39, 119) | `#DB2777` | `text-pink` | Accent highlights |
| White | rgb(255, 255, 255) | `#FFFFFF` | `text-white` | Contrast text |
| Primary Muted | rgb(219, 234, 254) | `#DBEAFE` | `bg-primary-muted` | Muted primary backgrounds |

#### Dark Mode
| Color | RGB | HEX | CSS Class | Usage |
|-------|-----|-----|-----------|-------|
| Purple | rgb(139, 92, 246) | `#8B5CF6` | `dark:text-purple` | Accent highlights |
| Pink | rgb(236, 72, 153) | `#EC4899` | `dark:text-pink` | Accent highlights |
| White | rgb(255, 255, 255) | `#FFFFFF` | `dark:text-white` | Contrast text |
| Primary Muted | rgb(30, 58, 138) | `#1E3A8A` | `dark:bg-primary-muted` | Muted primary backgrounds |

---

## Screen Color Usage Guide

### Authentication Screens

#### Login Screen
- **Background:** `bg-background` (#FFFFFF light / #000000 dark)
- **Card:** `bg-card` (#FFFFFF light / #181A1B dark)
- **Primary Button:** `bg-primary` (#007BFE light / #0385FF dark)
- **Input Fields:** `bg-input` (#D2D2D7 light / #373739 dark)
- **Input Borders:** `border-border` (#E6E6EB light / #282A2A dark)
- **Text:** `text-foreground` (#000000 light / #FFFFFF dark)
- **Helper Text:** `text-muted-foreground` (#8E8E93)

#### Signup Screen
- **Same as Login Screen**
- **Secondary Elements:** `text-secondary` (#2DAFE7 light / #64D3FE dark)
- **Links:** `text-primary` (#007BFE light / #0385FF dark)

#### Forgot Password / Reset Password
- **Background:** `bg-background`
- **Card:** `bg-card`
- **Success Message:** `text-success` (#22C55E)
- **Error Message:** `text-destructive` (#DC2626 light / #EF4444 dark)
- **Info Text:** `text-info` (#3B82F6 light / #93C5FD dark)

---

### Main App Screens

#### Dashboard/Home Screen
- **Screen Background:** `bg-background`
- **Main Cards:** `bg-card`
- **Card Title:** `text-card-foreground`
- **Secondary Surface:** `bg-surface-secondary` (#F9FAFB light / #27272A dark)
- **Stats Value:** `text-primary` or `text-foreground`
- **Stats Label:** `text-muted-foreground`
- **Icon Primary:** `icon-primary` (#007BFE light / #60A5FA dark)

#### Transactions Screen
- **Screen Background:** `bg-background`
- **Transaction Items:** `bg-card`
- **Item Text:** `text-card-foreground`
- **Amount (Income):** `text-success` (#22C55E)
- **Amount (Expense):** `text-destructive` (#DC2626 light / #EF4444 dark)
- **Date/Category:** `text-muted-foreground`
- **Filter Button:** `border-border` (#E6E6EB light / #282A2A dark)
- **Divider:** `border-border`

#### Budget Screen
- **Screen Background:** `bg-background`
- **Budget Cards:** `bg-card`
- **Progress Bar (Complete):** `bg-success` (#22C55E)
- **Progress Bar (Warning):** `bg-warning` (#F59E0B light / #FDE047 dark)
- **Progress Bar (Over):** `bg-destructive` (#DC2626 light / #EF4444 dark)
- **Budget Name:** `text-card-foreground`
- **Spent Amount:** `text-foreground`
- **Remaining Amount:** `text-muted-foreground`

#### Categories Screen
- **Screen Background:** `bg-background`
- **Category Items:** `bg-card`
- **Category Name:** `text-card-foreground`
- **Category Count:** `text-muted-foreground`
- **Edit Button:** `border-border`
- **Delete Button:** `text-destructive`

#### Profile/Settings Screen
- **Screen Background:** `bg-background`
- **Setting Items:** `bg-card`
- **Setting Label:** `text-card-foreground`
- **Setting Value:** `text-muted-foreground`
- **Theme Toggle:** 
  - Active: `bg-primary` (#007BFE light / #0385FF dark)
  - Inactive: `bg-muted` (#AFAEB4 light / #464649 dark)
- **Destructive Actions (Logout):** `text-destructive`

#### Insights/Analytics Screen
- **Screen Background:** `bg-background`
- **Chart Container:** `bg-card`
- **Chart Background:** `bg-surface-secondary`
- **Trend Up Indicator:** `text-success` (#22C55E)
- **Trend Down Indicator:** `text-destructive` (#DC2626 light / #EF4444 dark)
- **Section Title:** `text-card-foreground`
- **Section Subtitle:** `text-muted-foreground`

#### Progress/Goals Screen
- **Screen Background:** `bg-background`
- **Goal Cards:** `bg-card`
- **Goal Title:** `text-card-foreground`
- **Goal Progress Bar:** `bg-primary` (#007BFE light / #0385FF dark)
- **Goal Completed:** `text-success` (#22C55E)
- **Badge Background (Tier):** 
  - Gold: `bg-gold` (#FFD700)
  - Silver: `bg-silver` (#C0C0C0)
  - Bronze: `bg-bronze` (#CD7F32)
- **XP Toast:** `bg-primary` with `text-white`

---

### Receipt Scan Screen

- **Screen Background:** `bg-background`
- **Camera Frame Border:** `border-border` (#E6E6EB light / #282A2A dark)
- **Scan Button:** `bg-primary` (#007BFE light / #0385FF dark)
- **Loading Indicator:** `text-primary`
- **Error Message:** `text-destructive` (#DC2626 light / #EF4444 dark)
- **Success Indicator:** `text-success` (#22C55E)

---

### Modal & Dialog Components

#### Confirmation Modal
- **Background:** `bg-card` (#FFFFFF light / #181A1B dark)
- **Title:** `text-card-foreground`
- **Message:** `text-muted-foreground`
- **Cancel Button:** `border-border`
- **Confirm Button:** `bg-primary` (#007BFE light / #0385FF dark)

#### Error Modal
- **Background:** `bg-card`
- **Title:** `text-destructive` (#DC2626 light / #EF4444 dark)
- **Error Icon:** `text-destructive`
- **Error Message:** `text-muted-foreground`
- **Action Button:** `bg-destructive`

#### Success Modal
- **Background:** `bg-card`
- **Title:** `text-success` (#22C55E)
- **Success Icon:** `text-success`
- **Message:** `text-muted-foreground`
- **Action Button:** `bg-success` (#22C55E)

#### Goal Completion Modal
- **Background:** `bg-card`
- **Badge (Tier):** 
  - Gold: `text-gold`, `bg-gold-bg`
  - Silver: `text-silver`, `bg-silver-bg`
- **Completion Message:** `text-card-foreground`
- **XP Earned:** `text-primary` with badge `bg-primary-muted`
- **Continue Button:** `bg-primary`

#### Badge Celebration Modal
- **Background:** `bg-card`
- **Badge Icon:** Platform-specific color (gold/silver/bronze/platinum/diamond)
- **Achievement Text:** `text-card-foreground`
- **Description:** `text-muted-foreground`
- **Action Button:** `bg-primary`

---

### Input & Form Components

#### Text Input (Normal State)
- **Background:** `bg-input` (#D2D2D7 light / #373739 dark)
- **Border:** `border-border` (#E6E6EB light / #282A2A dark)
- **Text:** `text-foreground`
- **Placeholder:** `text-muted-foreground`

#### Text Input (Focus State)
- **Border:** `ring-primary` / `ring-ring`
- **Ring Color:** `ring-primary` (#007BFE light / #0385FF dark)

#### Text Input (Error State)
- **Border:** `border-destructive` (#DC2626 light / #EF4444 dark)
- **Text:** `text-destructive`

#### Dropdown/Picker
- **Background:** `bg-card` (#FFFFFF light / #181A1B dark)
- **Option Background:** `bg-surface-secondary` (#F9FAFB light / #27272A dark)
- **Option Hover:** `bg-surface-tertiary` (#F3F4F6 light / #3F3F46 dark)
- **Selected Option:** `bg-primary` (#007BFE light / #0385FF dark) with `text-white`
- **Text:** `text-card-foreground`

#### Toggle/Switch
- **Active State:** `bg-primary` (#007BFE light / #0385FF dark)
- **Inactive State:** `bg-muted` (#AFAEB4 light / #464649 dark)
- **Toggle Thumb:** `text-white`

#### Slider/Progress Indicator
- **Track Background:** `bg-muted` (#AFAEB4 light / #464649 dark)
- **Progress Fill:** `bg-primary` (#007BFE light / #0385FF dark)
- **Thumb:** `bg-primary`

---

### Tab & Navigation Components

#### Tab Bar (Bottom Navigation)
- **Background:** `bg-card` (#FFFFFF light / #181A1B dark)
- **Inactive Tab Icon:** `icon-secondary` (#6B7280 light / #A1A1AA dark)
- **Inactive Tab Label:** `text-muted-foreground`
- **Active Tab Icon:** `icon-primary` (#007BFE light / #60A5FA dark)
- **Active Tab Label:** `text-primary` (#007BFE light / #0385FF dark)
- **Active Tab Indicator:** `bg-primary` (optional underline/dot)

#### Header
- **Background:** `bg-card` (#FFFFFF light / #181A1B dark)
- **Title:** `text-card-foreground`
- **Subtitle:** `text-muted-foreground`
- **Header Buttons:** `icon-primary`

#### Drawer/Sidebar Menu
- **Background:** `bg-card` (#FFFFFF light / #181A1B dark)
- **Menu Item Background:** `bg-surface-secondary` (#F9FAFB light / #27272A dark)
- **Menu Item Hover:** `bg-surface-tertiary` (#F3F4F6 light / #3F3F46 dark)
- **Selected Item Background:** `bg-primary-muted` (#DBEAFE light / #1E3A8A dark)
- **Selected Item Text:** `text-primary` (#007BFE light / #0385FF dark)
- **Menu Text:** `text-card-foreground`
- **Menu Icon:** `icon-secondary`

---

### Alert & Banner Components

#### Success Alert/Banner
- **Background:** `bg-success` / 20% opacity → `bg-badge-success-bg` (#D1FAE5 light / #14532D dark)
- **Border Left:** `border-success` (#22C55E)
- **Icon:** `text-success` (#22C55E)
- **Title:** `text-success` or `text-card-foreground`
- **Message:** `text-muted-foreground`

#### Error Alert/Banner
- **Background:** `bg-destructive` / 20% opacity → `bg-badge-error-bg` (#FEE2E2 light / #4C1D1D dark)
- **Border Left:** `border-destructive` (#DC2626 light / #EF4444 dark)
- **Icon:** `text-destructive`
- **Title:** `text-destructive`
- **Message:** `text-muted-foreground`

#### Warning Alert/Banner
- **Background:** `bg-warning` / 20% opacity → `bg-badge-warning-bg` (#FEF3C7 light / #713F12 dark)
- **Border Left:** `border-warning` (#F59E0B light / #FDE047 dark)
- **Icon:** `text-warning` (#F59E0B light / #FDE047 dark)
- **Title:** `text-warning`
- **Message:** `text-muted-foreground`

#### Info Alert/Banner
- **Background:** `bg-info` / 20% opacity → `bg-badge-info-bg` (#DBEAFE light / #1E3A8A dark)
- **Border Left:** `border-info` (#3B82F6 light / #93C5FD dark)
- **Icon:** `text-info` (#3B82F6 light / #93C5FD dark)
- **Title:** `text-info`
- **Message:** `text-muted-foreground`

---

### Button Variants

#### Primary Button
- **Background:** `bg-primary` (#007BFE light / #0385FF dark)
- **Text:** `text-white` (#FFFFFF)
- **Border:** `bg-primary`
- **Disabled Background:** `bg-muted` (#AFAEB4 light / #464649 dark)
- **Disabled Text:** `text-muted-foreground`

#### Secondary Button
- **Background:** `bg-secondary` (#2DAFE7 light iOS / #B0C9FF light Android / #64D3FE dark iOS / #1C3C72 dark Android)
- **Text:** `text-secondary-foreground` (#FFFFFF light iOS / #14376C light Android / #FFFFFF dark iOS / #BDD1FF dark Android)

#### Outline Button
- **Background:** `bg-background` (transparent)
- **Border:** `border-border` (#E6E6EB light / #282A2A dark)
- **Text:** `text-primary` (#007BFE light / #0385FF dark)
- **Hover Background:** `bg-muted` (light opacity)

#### Ghost Button
- **Background:** transparent
- **Text:** `text-primary` (#007BFE light / #0385FF dark)
- **Hover Background:** `bg-surface-secondary` (#F9FAFB light / #27272A dark)

#### Destructive Button
- **Background:** `bg-destructive` (#DC2626 light / #EF4444 dark)
- **Text:** `text-white` (#FFFFFF)
- **Border:** `bg-destructive`

---

## Implementation Guidelines

### Using Tailwind Classes
```tsx
// Light mode examples (automatically apply)
<View className="bg-background text-foreground">
  <Text className="text-primary font-bold">Primary Text</Text>
</View>

// Dark mode using dark: prefix
<View className="dark:bg-background dark:text-foreground">
  <Text className="dark:text-primary">Primary Text</Text>
</View>

// Combined
<View className="bg-card dark:bg-card">
  <Text className="text-card-foreground dark:text-card-foreground">
    Card Text
  </Text>
</View>
```

### Using useThemeColors Hook
```tsx
import { useThemeColors } from '~/lib/useThemeColors';

export function MyComponent() {
  const colors = useThemeColors();
  
  return (
    <View style={{ backgroundColor: colors.primary }}>
      <Text style={{ color: colors.primaryForeground }}>
        Hello World
      </Text>
    </View>
  );
}
```

### Creating Custom Components with Theme Support
```tsx
interface ThemedProps {
  isDark?: boolean;
  variant?: 'primary' | 'secondary' | 'destructive';
}

export function ThemedButton({ isDark, variant = 'primary' }: ThemedProps) {
  const colors = useThemeColors();
  
  const bgColor = {
    primary: colors.primary,
    secondary: colors.secondary,
    destructive: colors.destructive,
  }[variant];
  
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: colors.primaryForeground }}>
        Click Me
      </Text>
    </TouchableOpacity>
  );
}
```

---

## Color Accessibility

### Contrast Ratios
- **Text on Background:** Primary text meets WCAG AAA standards (7:1+)
- **Text on Cards:** Foreground colors maintain minimum 4.5:1 contrast ratio
- **Icon Colors:** Status icons (success/error/warning) are distinguishable for colorblind users
- **Interactive Elements:** Primary actions have sufficient contrast for visibility

### Dark Mode Considerations
- Dark mode colors are designed to reduce eye strain in low-light environments
- Success, warning, and error colors are adjusted for better visibility in dark mode
- Icon colors are adjusted to maintain consistency with surrounding interface

### Semantic Color Usage
- **Status colors should never be the only indicator** - always pair with text or icons
- **Color blindness:** Green/red combinations include additional visual cues (icons, text)

---

## Platform-Specific Notes

### iOS
- Uses iOS system-compatible colors when possible
- Respects user's system appearance preference
- Custom accent colors align with iOS design guidelines

### Android
- Android-specific color adjustments for Material Design compliance
- Colors optimized for Android's larger display density variations
- Accessibility focus on Material 3 design patterns

---

## Color Conversion Reference

### RGB to HEX Conversion Formula
```
HEX = #RRGGBB
Where RR, GG, BB are the hexadecimal values of R, G, B components
```

### Example Conversion
```
rgb(0, 123, 254)
R: 0    = 00 (hex)
G: 123  = 7B (hex)
B: 254  = FE (hex)
Result: #007BFE
```

---

## Color Theme Testing Checklist

- [ ] All screens tested in Light Mode
- [ ] All screens tested in Dark Mode
- [ ] All screens tested on iOS
- [ ] All screens tested on Android
- [ ] Color contrast verified for accessibility
- [ ] Status colors clearly distinguishable
- [ ] Interactive elements have sufficient visual feedback
- [ ] Theme toggle works correctly
- [ ] Theme persists across app sessions
- [ ] System appearance changes are respected

---

## Updating the Color Theme

### To Add a New Color
1. Define RGB values in `theme/colors.ts`
2. Add CSS variables in `global.css` (both light and dark)
3. Add Tailwind config in `tailwind.config.js` (if using classes)
4. Add to `useThemeColors()` hook for programmatic access
5. Update this documentation

### To Modify Existing Colors
1. Update values in all above files
2. Search for usage of the color in components
3. Test all affected screens
4. Update this documentation

---

## Related Files

- `finlite-app/theme/colors.ts` - Platform-specific color definitions
- `finlite-app/theme/index.ts` - Navigation theme setup
- `finlite-app/global.css` - CSS variables and dark mode overrides
- `finlite-app/tailwind.config.js` - Tailwind color mappings
- `finlite-app/lib/useThemeColors.ts` - Programmatic color hook
- `finlite-app/lib/useColorScheme.tsx` - Color scheme detection
- `finlite-app/store/themeStore.ts` - Theme state management

---

**Document Version:** 1.0  
**Last Updated:** November 3, 2025  
**Maintained by:** FinLite Development Team
