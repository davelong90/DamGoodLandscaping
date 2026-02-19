---
afterImages:
- /images/projects/project-name/after1.jpg
- /images/projects/project-name/after2.jpg
beforeImages:
- /images/projects/project-name/before1.jpg
- /images/projects/project-name/before2.jpg
date: 2026-02-15
featured: true
location: City, State
services:
- Mulching
- Bed Edging
thumbnail: /images/projects/project-name/thumb.jpg
title: Front Yard Mulch & Bed Redesign
---

# Freelance Landscaping Portfolio Website

Project Specification -- v1

------------------------------------------------------------------------

## 1. Project Overview

Build a mobile-first portfolio website for a solo freelance landscaper
who is currently taking on side jobs and building a documented
portfolio.

The primary goal is to generate local leads and establish credibility
through documented before/after projects.

The site must be simple, fast, and easy to update with new projects
using Markdown.

------------------------------------------------------------------------

## 2. Primary Objectives

1.  Generate inbound quote requests.
2.  Make phone/text contact frictionless.
3.  Showcase before/after transformations.
4.  Be easy to expand as the business grows.
5.  Be easy to update with new projects.

------------------------------------------------------------------------

## 3. Target Audience

-   Local homeowners within a defined service radius.
-   Small property owners / landlords.
-   Mobile-first users searching for landscaping services.

------------------------------------------------------------------------

## 4. Technology Requirements

Preferred stack: - Static-first framework (Astro, Next.js, or
Eleventy) - Markdown-based content for projects - Hosted on Vercel /
Netlify / Cloudflare Pages - Simple form handling (Netlify Forms,
Formspree, or serverless endpoint)

Performance goals: - Lighthouse Performance: 85+ mobile - Fully
responsive - Fast load times - Lazy-loaded images

------------------------------------------------------------------------

## 5. Site Architecture

### Required Pages

### 5.1 Home (`/`)

Sections: - Hero (clear value statement + service area) - Primary CTAs
(Call, Text, Request Quote) - Services Overview (cards) - Featured
Projects (3--6) - How It Works (3 simple steps) - Testimonials (optional
if available) - Final CTA section

------------------------------------------------------------------------

### 5.2 Services (`/services`)

-   List of services offered
-   Short description for each
-   Clear CTA at top and bottom

Example services: - Lawn Maintenance - Mulching - Bed Edging - Shrub
Trimming - Yard Cleanups - Seasonal Work

------------------------------------------------------------------------

### 5.3 Portfolio (`/portfolio`)

-   Grid of projects
-   Each card includes:
    -   Title
    -   Location (City)
    -   Service tags
    -   Thumbnail image
-   Clicking opens project detail page

------------------------------------------------------------------------

### 5.4 Project Detail Page (`/portfolio/[slug]`)

Template-driven via Markdown.

Includes: - Title - Location - Date - Before/After gallery - Problem →
Solution → Result narrative - Services used - CTA section

------------------------------------------------------------------------

### 5.5 About (`/about`)

-   Short story of the landscaper
-   Work ethic and values
-   Service area
-   Optional image

------------------------------------------------------------------------

### 5.6 Contact (`/contact`)

Includes: - Contact form - Click-to-call button - Click-to-text button -
Email link - Service area reminder - Business hours

------------------------------------------------------------------------

## 6. Core Calls-To-Action

Must include: - Sticky mobile footer with: - Call - Text - Request
Quote - CTA blocks throughout the site

Click-to-call format: tel:+1234567890

Click-to-text format: sms:+1234567890

------------------------------------------------------------------------

## 7. Contact Form Requirements

Fields: - Name (required) - Phone (required) - Email (optional but
recommended) - ZIP Code (required) - Service Type (dropdown) - Project
Description (required) - Preferred Contact Method - Optional Photo
Upload

Behavior: - Client-side validation - Success confirmation message - Send
submission to business email

Spam protection: - Honeypot field

------------------------------------------------------------------------

## 8. Portfolio Content Model

Projects must be stored as Markdown files.

### Folder Structure

/content/projects/ project-name.md

------------------------------------------------------------------------

### Project Markdown Template

## The Problem

Brief description of the yard before the work.

## The Solution

What was done and how it was approached.

## The Result

Describe the outcome and transformation.

------------------------------------------------------------------------

## 9. Design Requirements

Design should communicate: - Trust - Professionalism - Clean work -
Local reliability

Style: - Mobile-first - Prominent photography - Earthy/green neutral
color palette - Clean sans-serif typography - Clear spacing - Minimal
clutter

------------------------------------------------------------------------

## 10. SEO Requirements

Each page must include: - Unique title tag - Meta description - Open
Graph tags - Structured LocalBusiness JSON-LD - Image alt text -
Sitemap - Robots.txt

Local SEO focus: - "Landscaping in {City}" - Service area mentions
throughout content

------------------------------------------------------------------------

## 11. Analytics

Install: - Google Analytics (GA4) or Plausible

Track: - Click-to-call events - Click-to-text events - Form
submissions - Portfolio page views

------------------------------------------------------------------------

## 12. Accessibility

-   Proper form labels
-   Keyboard navigable
-   Accessible contrast ratios
-   Semantic HTML

------------------------------------------------------------------------

## 13. Admin Workflow

Adding a new project should require: 1. Creating a new Markdown file 2.
Adding images to project folder 3. Updating frontmatter 4. Deploying

No CMS required for v1.

------------------------------------------------------------------------

## 14. Definition of Done

Site is complete when:

-   Fully responsive
-   Contact form works
-   Sticky mobile CTA implemented
-   Portfolio grid works
-   At least 3 sample project entries
-   SEO metadata present
-   Lighthouse score ≥ 85 mobile
-   Hosted live on production URL

------------------------------------------------------------------------

## 15. Out of Scope (v1)

-   Online booking
-   Payment processing
-   Customer login portal
-   Advanced filtering system
-   Blog content system

------------------------------------------------------------------------

## 16. Future Expansion (v2 Ideas)

-   Reviews page
-   Seasonal landing pages
-   Online booking
-   CRM integration
-   Automated follow-up emails
-   SMS notifications
-   Blog / Lawn care tips
-   Local service pages for multiple cities
