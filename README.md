# Child Learning Centre (CLC) - React Web Application

Modern, responsive, multipage React.js web application for **Child Learning Centre (CLC)** — Pediatric Development & Clinical Therapy Clinics across Maharashtra (Nerul, Thane, Chembur, Vashi, Nagpur, Nashik).

## 🚀 Features

- **Multipage Architecture with React Router**:
  - `/` — Flagship Home page (Hero, Stats, Services preview, Journey, How it works, Videos, Centres preview, Reviews, WhatsApp booking).
  - `/about` — About Us, clinical leadership & philosophy, multidisciplinary team, and sensory gym facilities.
  - `/therapies` (or `/services`) — Comprehensive pediatric therapies breakdown (Occupational Therapy, Sensory Integration, Speech Therapy, ADHD Support) with direct consultation triggers.
  - `/how-it-works` — The 4-step evaluation roadmap, "Growing Together" journey, and video demonstrations.
  - `/centres` — Interactive directory of all 6 clinical locations with area filtering (Navi Mumbai, Mumbai/Thane, Other), Google Maps directions, and direct calling.
  - `/reviews` — Testimonials, Google 4.8/5 rating showcases, and parent milestone stories.
  - `/contact` — Dedicated booking & contact page with full interactive WhatsApp booking form.
- **Global Modals & State Management**:
  - `ModalContext` enables triggering the **Booking Modal** or **YouTube Video Player Modal** from any page, button, or card with one click, including automatic pre-selection of the requested therapy!
- **Interactive WhatsApp Enquiry Generator**:
  - Live 10-digit mobile number validation and sanitization.
  - Real-time character counter (0/300) for notes.
  - Pre-fills a clean, formatted inquiry message directly into WhatsApp with parent name, child name/age, selected centre, concerns, and preferred calling hours.
  - Animated completion screen with options to re-open or dial directly.
- **Responsive & Accessible**:
  - Desktop TopBar, sticky responsive Header with scroll shrinking.
  - Offcanvas drawer navigation for mobile tablets and phones.
  - Fixed mobile quick actions bar (`Call`, `WhatsApp`, `Book`).
  - Animated number count-up stats on viewport intersection.
  - Scroll progress bar and smooth scroll-to-top floating button.

---

## 📁 Project Structure

```text
Clc-Website/
├── public/
│   └── assets/                     # Static assets (centre, logo, services, team images)
├── src/
│   ├── assets/                     # Modular assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── BookingModal.jsx    # Pop-up consultation modal
│   │   │   ├── VideoModal.jsx      # Video player modal
│   │   │   ├── ScrollProgress.jsx  # Top reading progress indicator
│   │   │   ├── ScrollToTop.jsx     # Route change scroll reset
│   │   │   └── ToTopButton.jsx     # Floating back to top button
│   │   ├── forms/
│   │   │   └── BookingForm.jsx     # Full WhatsApp evaluation booking form
│   │   ├── layout/
│   │   │   ├── TopBar.jsx          # Hours, phone, and WhatsApp top ribbon
│   │   │   ├── Header.jsx          # Brand logo & responsive desktop navigation
│   │   │   ├── MobileMenu.jsx      # Offcanvas mobile navigation drawer
│   │   │   ├── MobileActionBar.jsx # Bottom mobile navigation (Call / WhatsApp / Book)
│   │   │   └── Footer.jsx          # Multi-column footer with links and contact info
│   │   └── ui/
│   │       ├── CentreCard.jsx      # Location card with map directions & calling
│   │       ├── JourneyCard.jsx     # "Growing Together" 4-step card
│   │       ├── ReviewCard.jsx      # Star ratings & parent quotes
│   │       ├── ServiceCard.jsx     # Therapy program card with consultation trigger
│   │       ├── StatsCounter.jsx    # Animated count-up component
│   │       └── TeamCard.jsx        # Clinical therapist profile card
│   ├── context/
│   │   └── ModalContext.jsx        # Global modal state provider
│   ├── data/
│   │   ├── centresData.js          # Clinic locations, addresses, coordinates
│   │   ├── journeyData.js          # Journey & evaluation step descriptions
│   │   ├── reviewsData.js          # Parent testimonials and stats
│   │   ├── servicesData.js         # Therapy programs, benefits, and concerns
│   │   └── teamData.js             # Clinical leadership team profiles
│   ├── pages/
│   │   ├── AboutPage.jsx           # /about
│   │   ├── CentresPage.jsx         # /centres
│   │   ├── ContactPage.jsx         # /contact
│   │   ├── HomePage.jsx            # /
│   │   ├── HowItWorksPage.jsx      # /how-it-works
│   │   ├── ReviewsPage.jsx         # /reviews
│   │   └── ServicesPage.jsx        # /therapies
│   ├── styles/
│   │   └── index.css               # Main responsive styles & design tokens
│   ├── App.jsx                     # Route registry and modal provider
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML shell with Google fonts, meta, JSON-LD schema
├── package.json                    # Project metadata & dependencies
├── vite.config.js                  # Vite configuration
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready build in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```
