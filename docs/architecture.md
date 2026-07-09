# VetCalc PRO Architecture

## Overview

VetCalc PRO is a client-side PWA veterinary calculation tool.

## Structure

- HTML: UI layer
- app_main.js: application control
- app_ui.js: UI components
- drugs_main.js: drug database
- JSON/XLSX: clinical data resources
- sw.js: offline cache

## Data Flow

User Input
 ↓
Calculation Logic
 ↓
Result Rendering

## Design Principles

- No server dependency
- Offline capable
- Data and logic separation
- Easy maintenance by AI-assisted development
