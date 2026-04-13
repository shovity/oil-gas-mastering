# Oil & Gas Mastering - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng website học tập offline giúp người mới bắt đầu trở thành analyst chứng khoán ngành dầu khí VN trong 8-10 tuần.

**Architecture:** Static website với HTML/CSS/JS vanilla, chạy local không cần server. Mỗi Lớp kiến thức = 1 file HTML. Progress tracking qua localStorage. Quiz system với 4 loại câu hỏi và ngân hàng ~200 câu.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), JavaScript ES6+ (vanilla, no framework), localStorage API

**Spec:** `docs/superpowers/specs/2026-04-13-oil-gas-learning-website-design.md`

---

## File Structure

```
oil-gas-mastering/
├── index.html                    # Dashboard + Navigation entry
├── css/
│   └── style.css                 # Global styles (dark theme, components)
├── js/
│   ├── app.js                    # Navigation, sidebar, page init
│   ├── quiz.js                   # Quiz rendering, scoring, feedback
│   └── progress.js               # localStorage CRUD, stats
├── lessons/
│   ├── layer-0-basics.html       # Lớp 0: CK cơ bản
│   ├── layer-1-industry.html     # Lớp 1: Hiểu ngành
│   ├── layer-2-metrics.html      # Lớp 2: Đọc số
│   ├── layer-3-cycle.html        # Lớp 3: Chu kỳ
│   ├── layer-4-macro.html        # Lớp 4: Vĩ mô
│   ├── layer-5-valuation.html    # Lớp 5: Định giá
│   ├── layer-6-advisory.html     # Lớp 6: Tư vấn
│   └── layer-7-analyst.html      # Lớp 7: Kỹ năng Analyst
├── cases/
│   ├── case-pvd.html             # Case: PV Drilling
│   ├── case-gas.html             # Case: GAS
│   ├── case-dpm.html             # Case: Đạm Phú Mỹ
│   └── case-bsr.html             # Case: BSR
├── quizzes/
│   └── quiz-data.js              # Quiz bank (~200 questions)
└── assets/
    └── images/                   # Infographics, charts
```

---

## Phase 1: Foundation (Tasks 1-4)

### Task 1: Project Setup & Base CSS

**Files:**
- Create: `css/style.css`
- Create: `index.html` (skeleton only)

- [ ] **Step 1: Create CSS với design system**

```css
/* css/style.css */

/* ========== CSS Variables (Design Tokens) ========== */
:root {
  /* Colors - Dark Theme */
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --border: #334155;
  
  /* Accent Colors */
  --color-completed: #10b981;
  --color-current: #3b82f6;
  --color-quiz: #f59e0b;
  --color-case: #8b5cf6;
  --color-error: #ef4444;
  --color-locked: #64748b;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'SF Mono', Consolas, monospace;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  
  /* Layout */
  --sidebar-width: 280px;
  --header-height: 60px;
  --content-max-width: 900px;
  --border-radius: 8px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
}

/* ========== Reset & Base ========== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  min-height: 100vh;
}

a {
  color: var(--color-current);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: #60a5fa;
}

img {
  max-width: 100%;
  height: auto;
}

/* ========== Typography ========== */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: var(--space-md);
}

h1 { font-size: var(--text-3xl); }
h2 { font-size: var(--text-2xl); }
h3 { font-size: var(--text-xl); }
h4 { font-size: var(--text-lg); }

p {
  margin-bottom: var(--space-md);
}

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--bg-tertiary);
  padding: 0.2em 0.4em;
  border-radius: 4px;
}

pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--bg-secondary);
  padding: var(--space-md);
  border-radius: var(--border-radius);
  overflow-x: auto;
  margin-bottom: var(--space-md);
}

pre code {
  background: none;
  padding: 0;
}

/* ========== Layout: App Shell ========== */
.app {
  display: flex;
  min-height: 100vh;
}

/* ========== Sidebar ========== */
.sidebar {
  width: var(--sidebar-width);
  background: var(--bg-secondary);
  border-right: 1px solid var(--border);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: var(--space-lg);
  border-bottom: 1px solid var(--border);
}

.sidebar-logo {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.sidebar-nav {
  flex: 1;
  padding: var(--space-md);
  overflow-y: auto;
}

.nav-section {
  margin-bottom: var(--space-lg);
}

.nav-section-title {
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: var(--space-sm);
  padding: 0 var(--space-sm);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--border-radius);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
  cursor: pointer;
  font-size: var(--text-sm);
}

.nav-item:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.nav-item.active {
  background: rgba(59, 130, 246, 0.15);
  color: var(--color-current);
}

.nav-item.completed {
  color: var(--color-completed);
}

.nav-item.locked {
  color: var(--text-muted);
  cursor: not-allowed;
  opacity: 0.6;
}

.nav-item-icon {
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}

/* Sidebar Footer - Progress */
.sidebar-footer {
  padding: var(--space-lg);
  border-top: 1px solid var(--border);
}

.progress-label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-sm);
  display: flex;
  justify-content: space-between;
}

.progress-bar {
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-completed), #34d399);
  border-radius: 4px;
  transition: width var(--transition-normal);
}

/* ========== Main Content ========== */
.main {
  flex: 1;
  margin-left: var(--sidebar-width);
  min-height: 100vh;
}

.content {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: var(--space-2xl);
}

/* Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
}

.breadcrumb a {
  color: var(--text-secondary);
}

.breadcrumb-separator {
  color: var(--text-muted);
}

/* ========== Cards ========== */
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.card-title {
  font-size: var(--text-lg);
  font-weight: 600;
  margin: 0;
}

/* ========== Buttons ========== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-primary {
  background: var(--color-current);
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.btn-secondary:hover {
  background: #475569;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
}

.btn-outline:hover {
  border-color: var(--color-current);
  color: var(--color-current);
}

/* ========== Stats Grid ========== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.stat-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  padding: var(--space-lg);
  text-align: center;
}

.stat-value {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.stat-value.completed { color: var(--color-completed); }
.stat-value.current { color: var(--color-current); }
.stat-value.quiz { color: var(--color-quiz); }
.stat-value.case { color: var(--color-case); }

.stat-label {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

/* ========== Checklist ========== */
.checklist {
  list-style: none;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  margin-bottom: var(--space-sm);
  transition: all var(--transition-fast);
}

.checklist-item:hover {
  border-color: var(--color-current);
}

.checklist-item.completed {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
}

.checklist-item.current {
  background: rgba(59, 130, 246, 0.1);
  border-color: var(--color-current);
}

.checklist-checkbox {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.checklist-item.completed .checklist-checkbox {
  background: var(--color-completed);
  border-color: var(--color-completed);
  color: white;
}

.checklist-content {
  flex: 1;
}

.checklist-title {
  font-weight: 500;
  margin-bottom: var(--space-xs);
}

.checklist-item.completed .checklist-title {
  text-decoration: line-through;
  opacity: 0.7;
}

.checklist-meta {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

/* ========== Lesson Content ========== */
.lesson-header {
  margin-bottom: var(--space-2xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border);
}

.lesson-title {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-sm);
}

.lesson-meta {
  display: flex;
  gap: var(--space-lg);
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

.lesson-section {
  margin-bottom: var(--space-2xl);
}

.lesson-section h3 {
  color: var(--color-current);
  margin-bottom: var(--space-md);
}

/* Info boxes */
.info-box {
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--border-radius);
  margin-bottom: var(--space-md);
  border-left: 4px solid;
}

.info-box.tip {
  background: rgba(16, 185, 129, 0.1);
  border-color: var(--color-completed);
}

.info-box.warning {
  background: rgba(245, 158, 11, 0.1);
  border-color: var(--color-quiz);
}

.info-box.important {
  background: rgba(59, 130, 246, 0.1);
  border-color: var(--color-current);
}

.info-box-title {
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

/* Tables */
.table-wrapper {
  overflow-x: auto;
  margin-bottom: var(--space-md);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

th, td {
  padding: var(--space-sm) var(--space-md);
  text-align: left;
  border-bottom: 1px solid var(--border);
}

th {
  background: var(--bg-secondary);
  font-weight: 600;
  color: var(--text-secondary);
}

tr:hover td {
  background: var(--bg-secondary);
}

/* Navigation buttons */
.lesson-nav {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-2xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border);
}

/* ========== Quiz Styles ========== */
.quiz-container {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  padding: var(--space-xl);
  margin: var(--space-xl) 0;
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--border);
}

.quiz-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-quiz);
}

.quiz-progress {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.quiz-question {
  font-size: var(--text-lg);
  font-weight: 500;
  margin-bottom: var(--space-lg);
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--bg-tertiary);
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.quiz-option:hover {
  border-color: var(--color-current);
}

.quiz-option.selected {
  border-color: var(--color-current);
  background: rgba(59, 130, 246, 0.15);
}

.quiz-option.correct {
  border-color: var(--color-completed);
  background: rgba(16, 185, 129, 0.15);
}

.quiz-option.incorrect {
  border-color: var(--color-error);
  background: rgba(239, 68, 68, 0.15);
}

.quiz-option-letter {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: 50%;
  font-weight: 600;
  flex-shrink: 0;
}

.quiz-explanation {
  margin-top: var(--space-lg);
  padding: var(--space-md);
  background: var(--bg-primary);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--color-current);
}

.quiz-explanation-title {
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--color-current);
}

.quiz-actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

.quiz-result {
  text-align: center;
  padding: var(--space-xl);
}

.quiz-result-score {
  font-size: var(--text-3xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.quiz-result-score.pass { color: var(--color-completed); }
.quiz-result-score.fail { color: var(--color-error); }

/* ========== Utilities ========== */
.text-muted { color: var(--text-muted); }
.text-success { color: var(--color-completed); }
.text-warning { color: var(--color-quiz); }
.text-error { color: var(--color-error); }
.text-primary { color: var(--color-current); }

.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }

.hidden { display: none !important; }
```

- [ ] **Step 2: Create index.html skeleton**

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oil & Gas Mastering - Học Chứng Khoán Dầu Khí VN</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="app">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <span>⛽</span>
          <span>Oil & Gas Mastering</span>
        </div>
      </div>
      
      <nav class="sidebar-nav" id="sidebar-nav">
        <!-- Nav items will be generated by JS -->
      </nav>
      
      <div class="sidebar-footer">
        <div class="progress-label">
          <span>Tiến độ</span>
          <span id="progress-percent">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" id="progress-bar" style="width: 0%"></div>
        </div>
      </div>
    </aside>
    
    <!-- Main Content -->
    <main class="main">
      <div class="content" id="main-content">
        <!-- Content loaded dynamically or statically per page -->
      </div>
    </main>
  </div>
  
  <script src="js/progress.js"></script>
  <script src="js/quiz.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

- [ ] **Step 3: Verify by opening in browser**

Open `index.html` in browser. Expected:
- Dark theme background (#0f172a)
- Empty sidebar with logo "Oil & Gas Mastering"
- Progress bar at bottom showing 0%

---

### Task 2: Progress Module (localStorage)

**Files:**
- Create: `js/progress.js`

- [ ] **Step 1: Create progress.js with core functions**

```javascript
// js/progress.js

/**
 * Progress Module - Quản lý tiến độ học tập qua localStorage
 * 
 * Data structure:
 * {
 *   lessons: { "0.1": true, "0.2": true, ... },
 *   quizScores: { "layer0": 85, "layer1": 90, ... },
 *   layerTests: { "layer0": 88, ... },
 *   cases: { "pvd": true, ... },
 *   currentLesson: "1.3",
 *   stats: { totalTime: 720, lastVisit: "2026-04-13", startDate: "2026-04-01" },
 *   finalExam: null
 * }
 */

const STORAGE_KEY = 'oilgas_progress';

// Curriculum structure
const CURRICULUM = {
  layer0: {
    title: 'Lớp 0: Kiến thức CK cơ bản',
    icon: '📚',
    lessons: ['0.1', '0.2', '0.3', '0.4'],
    file: 'lessons/layer-0-basics.html'
  },
  layer1: {
    title: 'Lớp 1: Hiểu ngành dầu khí',
    icon: '🛢️',
    lessons: ['1.1', '1.2', '1.3', '1.4', '1.5'],
    file: 'lessons/layer-1-industry.html'
  },
  layer2: {
    title: 'Lớp 2: Đọc số - Metrics',
    icon: '📊',
    lessons: ['2.1', '2.2', '2.3', '2.4', '2.5'],
    file: 'lessons/layer-2-metrics.html'
  },
  layer3: {
    title: 'Lớp 3: Hiểu chu kỳ',
    icon: '🔄',
    lessons: ['3.1', '3.2', '3.3', '3.4', '3.5'],
    file: 'lessons/layer-3-cycle.html'
  },
  layer4: {
    title: 'Lớp 4: Hiểu vĩ mô',
    icon: '🌍',
    lessons: ['4.1', '4.2', '4.3', '4.4', '4.5'],
    file: 'lessons/layer-4-macro.html'
  },
  layer5: {
    title: 'Lớp 5: Định giá',
    icon: '💰',
    lessons: ['5.1', '5.2', '5.3', '5.4', '5.5'],
    file: 'lessons/layer-5-valuation.html'
  },
  layer6: {
    title: 'Lớp 6: Tư vấn',
    icon: '🎯',
    lessons: ['6.1', '6.2', '6.3', '6.4', '6.5'],
    file: 'lessons/layer-6-advisory.html'
  },
  layer7: {
    title: 'Lớp 7: Kỹ năng Analyst',
    icon: '✍️',
    lessons: ['7.1', '7.2', '7.3', '7.4', '7.5'],
    file: 'lessons/layer-7-analyst.html'
  }
};

const CASES = {
  pvd: { title: 'Case Study: PV Drilling (PVD)', icon: '🔧', file: 'cases/case-pvd.html' },
  gas: { title: 'Case Study: GAS', icon: '🔥', file: 'cases/case-gas.html' },
  dpm: { title: 'Case Study: Đạm Phú Mỹ (DPM)', icon: '🌱', file: 'cases/case-dpm.html' },
  bsr: { title: 'Case Study: BSR', icon: '🏭', file: 'cases/case-bsr.html' }
};

// Get default empty progress
function getDefaultProgress() {
  return {
    lessons: {},
    quizScores: {},
    layerTests: {},
    cases: {},
    currentLesson: '0.1',
    stats: {
      totalTime: 0,
      lastVisit: new Date().toISOString().split('T')[0],
      startDate: new Date().toISOString().split('T')[0]
    },
    finalExam: null
  };
}

// Load progress from localStorage
function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error loading progress:', e);
  }
  return getDefaultProgress();
}

// Save progress to localStorage
function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (e) {
    console.error('Error saving progress:', e);
    return false;
  }
}

// Mark a lesson as completed
function completeLesson(lessonId) {
  const progress = loadProgress();
  progress.lessons[lessonId] = true;
  
  // Update current lesson to next uncompleted
  const nextLesson = findNextLesson(progress);
  if (nextLesson) {
    progress.currentLesson = nextLesson;
  }
  
  saveProgress(progress);
  return progress;
}

// Find next uncompleted lesson
function findNextLesson(progress) {
  for (const layerKey of Object.keys(CURRICULUM)) {
    const layer = CURRICULUM[layerKey];
    for (const lessonId of layer.lessons) {
      if (!progress.lessons[lessonId]) {
        return lessonId;
      }
    }
  }
  return null;
}

// Check if a lesson is completed
function isLessonCompleted(lessonId) {
  const progress = loadProgress();
  return progress.lessons[lessonId] === true;
}

// Save quiz score
function saveQuizScore(quizId, score) {
  const progress = loadProgress();
  progress.quizScores[quizId] = score;
  saveProgress(progress);
  return progress;
}

// Save layer test score
function saveLayerTestScore(layerId, score) {
  const progress = loadProgress();
  progress.layerTests[layerId] = score;
  saveProgress(progress);
  return progress;
}

// Mark case as completed
function completeCase(caseId) {
  const progress = loadProgress();
  progress.cases[caseId] = true;
  saveProgress(progress);
  return progress;
}

// Calculate overall progress percentage
function calculateProgress() {
  const progress = loadProgress();
  let totalItems = 0;
  let completedItems = 0;
  
  // Count lessons
  for (const layerKey of Object.keys(CURRICULUM)) {
    const layer = CURRICULUM[layerKey];
    totalItems += layer.lessons.length;
    for (const lessonId of layer.lessons) {
      if (progress.lessons[lessonId]) {
        completedItems++;
      }
    }
  }
  
  // Count cases
  totalItems += Object.keys(CASES).length;
  completedItems += Object.keys(progress.cases).filter(k => progress.cases[k]).length;
  
  return Math.round((completedItems / totalItems) * 100);
}

// Get layer progress
function getLayerProgress(layerId) {
  const progress = loadProgress();
  const layer = CURRICULUM[layerId];
  if (!layer) return { completed: 0, total: 0, percent: 0 };
  
  const completed = layer.lessons.filter(id => progress.lessons[id]).length;
  const total = layer.lessons.length;
  
  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100)
  };
}

// Get stats
function getStats() {
  const progress = loadProgress();
  const lessonsCompleted = Object.keys(progress.lessons).filter(k => progress.lessons[k]).length;
  const casesCompleted = Object.keys(progress.cases).filter(k => progress.cases[k]).length;
  const quizzesPassed = Object.keys(progress.quizScores).length;
  
  return {
    lessonsCompleted,
    casesCompleted,
    quizzesPassed,
    totalTime: progress.stats.totalTime,
    progressPercent: calculateProgress()
  };
}

// Update visit time
function updateVisitTime(minutes = 0) {
  const progress = loadProgress();
  progress.stats.totalTime += minutes;
  progress.stats.lastVisit = new Date().toISOString().split('T')[0];
  saveProgress(progress);
}

// Export progress to JSON
function exportProgress() {
  const progress = loadProgress();
  const dataStr = JSON.stringify(progress, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `oilgas-progress-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  
  URL.revokeObjectURL(url);
}

// Import progress from JSON
function importProgress(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        // Validate basic structure
        if (data.lessons && data.stats) {
          saveProgress(data);
          resolve(data);
        } else {
          reject(new Error('Invalid progress file format'));
        }
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

// Reset all progress
function resetProgress() {
  const confirmed = confirm('Bạn có chắc muốn xóa toàn bộ tiến độ học tập?');
  if (confirmed) {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  }
  return false;
}

// Export for use in other modules
window.Progress = {
  CURRICULUM,
  CASES,
  load: loadProgress,
  save: saveProgress,
  completeLesson,
  isLessonCompleted,
  saveQuizScore,
  saveLayerTestScore,
  completeCase,
  calculateProgress,
  getLayerProgress,
  getStats,
  updateVisitTime,
  exportProgress,
  importProgress,
  resetProgress,
  findNextLesson
};
```

- [ ] **Step 2: Verify in browser console**

Open `index.html`, press F12, and run in console:
```javascript
// Test save/load
Progress.completeLesson('0.1');
Progress.load(); // Should show lessons: { "0.1": true }

// Test progress calculation
Progress.calculateProgress(); // Should return small percentage

// Test stats
Progress.getStats(); // Should return object with lessonsCompleted: 1
```

Expected: All functions work without errors.

---

### Task 3: App Module (Navigation & Sidebar)

**Files:**
- Create: `js/app.js`

- [ ] **Step 1: Create app.js with sidebar generation**

```javascript
// js/app.js

/**
 * App Module - Navigation, sidebar, page initialization
 */

(function() {
  'use strict';

  // DOM Elements
  const sidebarNav = document.getElementById('sidebar-nav');
  const progressPercent = document.getElementById('progress-percent');
  const progressBar = document.getElementById('progress-bar');
  const mainContent = document.getElementById('main-content');

  // Current page detection
  function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return filename;
  }

  // Generate sidebar navigation
  function renderSidebar() {
    if (!sidebarNav) return;
    
    const progress = Progress.load();
    const currentPage = getCurrentPage();
    let html = '';

    // Lessons section
    html += '<div class="nav-section">';
    html += '<div class="nav-section-title">Lộ trình học</div>';
    
    for (const [layerId, layer] of Object.entries(Progress.CURRICULUM)) {
      const layerProgress = Progress.getLayerProgress(layerId);
      const isActive = currentPage === layer.file.split('/').pop();
      const isCompleted = layerProgress.percent === 100;
      
      let statusClass = '';
      let statusIcon = '○';
      
      if (isCompleted) {
        statusClass = 'completed';
        statusIcon = '✓';
      } else if (layerProgress.completed > 0) {
        statusClass = 'active';
        statusIcon = '►';
      }
      
      if (isActive) {
        statusClass = 'active';
      }

      html += `
        <a href="${layer.file}" class="nav-item ${statusClass}">
          <span class="nav-item-icon">${statusIcon}</span>
          <span>${layer.icon} ${layer.title}</span>
        </a>
      `;
    }
    html += '</div>';

    // Cases section
    html += '<div class="nav-section">';
    html += '<div class="nav-section-title">Case Studies</div>';
    
    for (const [caseId, caseData] of Object.entries(Progress.CASES)) {
      const isCompleted = progress.cases[caseId];
      const isActive = currentPage === caseData.file.split('/').pop();
      
      let statusClass = isCompleted ? 'completed' : '';
      if (isActive) statusClass = 'active';
      const statusIcon = isCompleted ? '✓' : '○';

      html += `
        <a href="${caseData.file}" class="nav-item ${statusClass}">
          <span class="nav-item-icon">${statusIcon}</span>
          <span>${caseData.icon} ${caseData.title.replace('Case Study: ', '')}</span>
        </a>
      `;
    }
    html += '</div>';

    // Tools section
    html += '<div class="nav-section">';
    html += '<div class="nav-section-title">Công cụ</div>';
    html += `
      <a href="index.html" class="nav-item ${currentPage === 'index.html' ? 'active' : ''}">
        <span class="nav-item-icon">📊</span>
        <span>Dashboard</span>
      </a>
      <div class="nav-item" onclick="Progress.exportProgress()">
        <span class="nav-item-icon">💾</span>
        <span>Export Progress</span>
      </div>
      <div class="nav-item" onclick="document.getElementById('import-file').click()">
        <span class="nav-item-icon">📂</span>
        <span>Import Progress</span>
      </div>
    `;
    html += '<input type="file" id="import-file" accept=".json" style="display:none" onchange="handleImport(this)">';
    html += '</div>';

    sidebarNav.innerHTML = html;
  }

  // Update progress bar in sidebar
  function updateProgressBar() {
    const percent = Progress.calculateProgress();
    if (progressPercent) {
      progressPercent.textContent = `${percent}%`;
    }
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }
  }

  // Handle import file
  window.handleImport = async function(input) {
    if (input.files && input.files[0]) {
      try {
        await Progress.importProgress(input.files[0]);
        alert('Import thành công!');
        location.reload();
      } catch (err) {
        alert('Lỗi import: ' + err.message);
      }
    }
  };

  // Render dashboard content (for index.html)
  function renderDashboard() {
    if (getCurrentPage() !== 'index.html' || !mainContent) return;
    
    const stats = Progress.getStats();
    const progress = Progress.load();
    const nextLesson = Progress.findNextLesson(progress);
    
    // Find next lesson info
    let nextLessonInfo = null;
    if (nextLesson) {
      const layerId = 'layer' + nextLesson.split('.')[0];
      const layer = Progress.CURRICULUM[layerId];
      if (layer) {
        nextLessonInfo = {
          id: nextLesson,
          title: layer.title,
          file: layer.file
        };
      }
    }

    let html = `
      <div class="breadcrumb">
        <span>🏠 Dashboard</span>
      </div>
      
      <h1>Chào mừng trở lại!</h1>
      <p class="text-muted">Theo dõi tiến độ và tiếp tục hành trình trở thành chuyên gia phân tích ngành dầu khí.</p>
      
      <!-- Continue Learning Card -->
      ${nextLessonInfo ? `
      <div class="card" style="margin: var(--space-xl) 0; background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));">
        <div class="card-header">
          <div>
            <p class="text-muted" style="margin: 0;">Tiếp tục học</p>
            <h3 style="margin: var(--space-sm) 0 0 0;">${nextLessonInfo.title}</h3>
          </div>
        </div>
        <a href="${nextLessonInfo.file}#${nextLessonInfo.id}" class="btn btn-primary">
          Tiếp tục bài ${nextLessonInfo.id} →
        </a>
      </div>
      ` : `
      <div class="card" style="margin: var(--space-xl) 0; text-align: center;">
        <h3 style="color: var(--color-completed);">🎉 Chúc mừng!</h3>
        <p>Bạn đã hoàn thành toàn bộ bài học!</p>
      </div>
      `}
      
      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value completed">${stats.lessonsCompleted}</div>
          <div class="stat-label">Bài học hoàn thành</div>
        </div>
        <div class="stat-card">
          <div class="stat-value quiz">${stats.quizzesPassed}</div>
          <div class="stat-label">Quiz đã làm</div>
        </div>
        <div class="stat-card">
          <div class="stat-value case">${stats.casesCompleted}</div>
          <div class="stat-label">Case hoàn thành</div>
        </div>
        <div class="stat-card">
          <div class="stat-value current">${Math.round(stats.totalTime / 60)}h</div>
          <div class="stat-label">Giờ học</div>
        </div>
      </div>
      
      <!-- Layer Progress -->
      <h2>Tiến độ theo Lớp</h2>
      <div class="card">
    `;

    for (const [layerId, layer] of Object.entries(Progress.CURRICULUM)) {
      const layerProgress = Progress.getLayerProgress(layerId);
      html += `
        <div style="margin-bottom: var(--space-md);">
          <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-xs);">
            <span>${layer.icon} ${layer.title}</span>
            <span class="text-muted">${layerProgress.completed}/${layerProgress.total}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width: ${layerProgress.percent}%"></div>
          </div>
        </div>
      `;
    }

    html += `
      </div>
      
      <!-- Quick Actions -->
      <h2>Hành động nhanh</h2>
      <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
        <button class="btn btn-secondary" onclick="Progress.exportProgress()">
          💾 Export Progress
        </button>
        <button class="btn btn-outline" onclick="Progress.resetProgress() && location.reload()">
          🗑️ Reset Progress
        </button>
      </div>
    `;

    mainContent.innerHTML = html;
  }

  // Initialize on page load
  function init() {
    renderSidebar();
    updateProgressBar();
    renderDashboard();
    
    // Update visit time (estimate 1 minute per page view)
    Progress.updateVisitTime(1);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for use in lessons
  window.App = {
    renderSidebar,
    updateProgressBar,
    getCurrentPage
  };

})();
```

- [ ] **Step 2: Verify dashboard renders correctly**

Open `index.html` in browser. Expected:
- Sidebar shows all 8 layers + 4 cases + tools
- Dashboard shows welcome message
- Stats grid shows 0s (fresh start)
- Progress bars for each layer
- Export/Import buttons work

---

### Task 4: Quiz Module

**Files:**
- Create: `js/quiz.js`
- Create: `quizzes/quiz-data.js` (starter with sample questions)

- [ ] **Step 1: Create quiz-data.js with sample questions**

```javascript
// quizzes/quiz-data.js

/**
 * Quiz Data - Ngân hàng câu hỏi
 * Cấu trúc: { layerId: [ { id, type, question, options?, correct, explanation } ] }
 */

const QUIZ_DATA = {
  // Layer 0: Kiến thức CK cơ bản
  layer0: [
    {
      id: 'l0q1',
      type: 'multiple-choice',
      question: 'P/E (Price to Earnings) là gì?',
      options: [
        'A. Tỷ lệ giá cổ phiếu chia cho lợi nhuận trên mỗi cổ phiếu',
        'B. Tỷ lệ lợi nhuận chia cho doanh thu',
        'C. Tỷ lệ nợ chia cho vốn chủ sở hữu',
        'D. Tỷ lệ cổ tức chia cho giá cổ phiếu'
      ],
      correct: 'A',
      explanation: 'P/E = Price / EPS. Đây là chỉ số cho biết nhà đầu tư sẵn sàng trả bao nhiêu đồng cho 1 đồng lợi nhuận của công ty. P/E cao có thể nghĩa là kỳ vọng tăng trưởng cao hoặc cổ phiếu đang đắt.'
    },
    {
      id: 'l0q2',
      type: 'multiple-choice',
      question: 'ROE (Return on Equity) đo lường điều gì?',
      options: [
        'A. Khả năng thanh toán nợ ngắn hạn',
        'B. Hiệu quả sử dụng vốn chủ sở hữu để tạo lợi nhuận',
        'C. Tốc độ tăng trưởng doanh thu',
        'D. Tỷ lệ cổ tức chi trả'
      ],
      correct: 'B',
      explanation: 'ROE = Lợi nhuận sau thuế / Vốn chủ sở hữu. ROE cho biết công ty tạo ra bao nhiêu đồng lợi nhuận từ 1 đồng vốn của cổ đông. ROE > 15% thường được coi là tốt.'
    },
    {
      id: 'l0q3',
      type: 'multiple-choice',
      question: 'Báo cáo tài chính nào cho biết công ty có bao nhiêu tiền mặt thực sự?',
      options: [
        'A. Bảng cân đối kế toán',
        'B. Báo cáo kết quả kinh doanh',
        'C. Báo cáo lưu chuyển tiền tệ',
        'D. Thuyết minh báo cáo tài chính'
      ],
      correct: 'C',
      explanation: 'Báo cáo lưu chuyển tiền tệ (Cash Flow Statement) cho thấy dòng tiền thực tế vào/ra công ty. Lợi nhuận kế toán có thể bị "làm đẹp" nhưng tiền mặt thì không.'
    }
  ],

  // Layer 1: Hiểu ngành dầu khí
  layer1: [
    {
      id: 'l1q1',
      type: 'multiple-choice',
      question: 'Upstream trong chuỗi giá trị dầu khí bao gồm hoạt động nào?',
      options: [
        'A. Lọc dầu và sản xuất xăng',
        'B. Thăm dò và khai thác dầu khí',
        'C. Vận chuyển dầu bằng tàu',
        'D. Bán lẻ xăng dầu tại cây xăng'
      ],
      correct: 'B',
      explanation: 'Upstream (thượng nguồn) là giai đoạn đầu tiên: tìm kiếm mỏ dầu/khí và khai thác lên mặt đất. Các công ty như PVD (khoan), PVS (dịch vụ kỹ thuật) thuộc nhóm này.'
    },
    {
      id: 'l1q2',
      type: 'multiple-choice',
      question: 'Giá dầu Brent tăng 20% sẽ ảnh hưởng như thế nào?',
      options: [
        'A. Tất cả công ty dầu khí đều hưởng lợi',
        'B. Upstream hưởng lợi, Downstream có thể bị ảnh hưởng tiêu cực',
        'C. Chỉ có công ty lọc dầu hưởng lợi',
        'D. Không ảnh hưởng đáng kể đến công ty VN'
      ],
      correct: 'B',
      explanation: 'Giá dầu tăng: Upstream (PVD, PVS) hưởng lợi vì bán dầu giá cao hơn. Downstream (PLX, BSR) có thể bị ảnh hưởng vì phải nhập dầu thô đắt hơn, trong khi giá bán lẻ bị kiểm soát.'
    },
    {
      id: 'l1q3',
      type: 'multiple-choice',
      question: 'PVN (Tập đoàn Dầu khí Quốc gia) có vai trò gì?',
      options: [
        'A. Chỉ quản lý giá xăng bán lẻ',
        'B. Công ty mẹ của hầu hết DN dầu khí niêm yết, quyết định CAPEX thăm dò',
        'C. Chỉ xuất khẩu dầu thô',
        'D. Chỉ nhập khẩu xăng dầu thành phẩm'
      ],
      correct: 'B',
      explanation: 'PVN là công ty mẹ sở hữu cổ phần chi phối tại PVD, PVS, GAS, BSR... PVN quyết định kế hoạch CAPEX thăm dò, phân bổ sản lượng - một quyết định của PVN có thể thay đổi triển vọng cả ngành.'
    },
    {
      id: 'l1q4',
      type: 'multiple-choice',
      question: 'Công ty nào thuộc phân khúc Downstream?',
      options: [
        'A. PVD (PV Drilling)',
        'B. GAS',
        'C. PLX (Petrolimex)',
        'D. PVS'
      ],
      correct: 'C',
      explanation: 'PLX (Petrolimex) là công ty bán lẻ xăng dầu - thuộc Downstream (hạ nguồn). PVD và PVS thuộc Upstream (dịch vụ thăm dò/khoan). GAS thuộc Midstream (vận chuyển/phân phối khí).'
    },
    {
      id: 'l1q5',
      type: 'multiple-choice',
      question: 'DPM và DCM sản xuất sản phẩm gì từ khí tự nhiên?',
      options: [
        'A. Xăng RON 95',
        'B. Phân bón urê (đạm)',
        'C. Nhựa đường',
        'D. Dầu diesel'
      ],
      correct: 'B',
      explanation: 'DPM (Đạm Phú Mỹ) và DCM (Đạm Cà Mau) sử dụng khí tự nhiên làm nguyên liệu để sản xuất phân bón urê. Giá khí đầu vào và giá urê thế giới quyết định biên lợi nhuận của họ.'
    }
  ],

  // Layer 2: Đọc số
  layer2: [
    {
      id: 'l2q1',
      type: 'multiple-choice',
      question: 'Crack spread là gì?',
      options: [
        'A. Chênh lệch giá dầu Brent và WTI',
        'B. Chênh lệch giá dầu thô và giá xăng/diesel thành phẩm',
        'C. Chênh lệch giá mua và giá bán cổ phiếu',
        'D. Chi phí vận chuyển dầu'
      ],
      correct: 'B',
      explanation: 'Crack spread = Giá xăng/diesel - Giá dầu thô. Đây là chỉ số quan trọng nhất cho BSR (lọc dầu). Crack spread cao = BSR lời nhiều trên mỗi thùng dầu lọc.'
    },
    {
      id: 'l2q2',
      type: 'multiple-choice',
      question: 'Backlog của PVS, PVD có ý nghĩa gì?',
      options: [
        'A. Số tiền công ty đang nợ',
        'B. Giá trị hợp đồng đã ký nhưng chưa thực hiện',
        'C. Lợi nhuận giữ lại',
        'D. Vốn điều lệ'
      ],
      correct: 'B',
      explanation: 'Backlog = Giá trị hợp đồng đã ký chưa thực hiện. Backlog cao nghĩa là doanh thu tương lai được đảm bảo. Tuy nhiên cần check margin trên backlog - backlog cao nhưng margin thấp thì LN không tăng tương ứng.'
    },
    {
      id: 'l2q3',
      type: 'multiple-choice',
      question: 'Khi BSR báo cáo "lãi kỷ lục", điều đầu tiên cần kiểm tra là gì?',
      options: [
        'A. Doanh thu có tăng không',
        'B. Lãi tồn kho chiếm bao nhiêu trong tổng lợi nhuận',
        'C. Số lượng nhân viên',
        'D. Giá cổ phiếu có tăng không'
      ],
      correct: 'B',
      explanation: 'Lãi tồn kho xảy ra khi BSR mua dầu giá rẻ trước đó, sau đó giá dầu tăng → bán xăng giá mới → lời phần chênh lệch. Đây là khoản lãi 1 lần, không bền vững. Cần tách ra để thấy lợi nhuận core.'
    }
  ],

  // More layers will be added during content creation...
  layer3: [],
  layer4: [],
  layer5: [],
  layer6: [],
  layer7: []
};

// Export
window.QUIZ_DATA = QUIZ_DATA;
```

- [ ] **Step 2: Create quiz.js with rendering and scoring logic**

```javascript
// js/quiz.js

/**
 * Quiz Module - Render quiz, handle answers, calculate scores
 */

(function() {
  'use strict';

  // Quiz state
  let currentQuiz = null;
  let currentQuestionIndex = 0;
  let answers = {};
  let showingResult = false;

  /**
   * Initialize a quiz for a specific layer
   * @param {string} layerId - e.g., 'layer1'
   * @param {string} containerId - DOM element ID to render into
   * @param {number} questionCount - Number of questions to show (0 = all)
   */
  function initQuiz(layerId, containerId, questionCount = 10) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error('Quiz container not found:', containerId);
      return;
    }

    const questions = window.QUIZ_DATA[layerId];
    if (!questions || questions.length === 0) {
      container.innerHTML = '<p class="text-muted">Chưa có câu hỏi cho phần này.</p>';
      return;
    }

    // Shuffle and limit questions
    let selected = shuffleArray([...questions]);
    if (questionCount > 0 && questionCount < selected.length) {
      selected = selected.slice(0, questionCount);
    }

    currentQuiz = {
      layerId,
      containerId,
      questions: selected,
      total: selected.length
    };
    currentQuestionIndex = 0;
    answers = {};
    showingResult = false;

    renderQuestion(container);
  }

  // Shuffle array (Fisher-Yates)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Render current question
  function renderQuestion(container) {
    if (!currentQuiz) return;

    const q = currentQuiz.questions[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    const total = currentQuiz.total;

    let html = `
      <div class="quiz-container">
        <div class="quiz-header">
          <span class="quiz-title">📝 Quiz</span>
          <span class="quiz-progress">Câu ${questionNum}/${total}</span>
        </div>
        
        <div class="quiz-question">${q.question}</div>
        
        <div class="quiz-options">
    `;

    if (q.type === 'multiple-choice' && q.options) {
      for (const option of q.options) {
        const letter = option.charAt(0);
        const text = option.substring(3); // Remove "A. " prefix
        const isSelected = answers[q.id] === letter;
        
        html += `
          <div class="quiz-option ${isSelected ? 'selected' : ''}" 
               data-letter="${letter}"
               onclick="Quiz.selectOption('${q.id}', '${letter}')">
            <span class="quiz-option-letter">${letter}</span>
            <span>${text}</span>
          </div>
        `;
      }
    }

    html += `
        </div>
        
        <div id="quiz-explanation" class="quiz-explanation hidden"></div>
        
        <div class="quiz-actions">
          <button class="btn btn-secondary" onclick="Quiz.prevQuestion()" 
                  ${currentQuestionIndex === 0 ? 'disabled' : ''}>
            ← Câu trước
          </button>
          <button class="btn btn-primary" onclick="Quiz.checkAnswer()" id="btn-check">
            Kiểm tra
          </button>
          <button class="btn btn-primary hidden" onclick="Quiz.nextQuestion()" id="btn-next">
            Câu tiếp →
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  // Select an option
  function selectOption(questionId, letter) {
    if (showingResult) return; // Don't allow changing after checking
    
    answers[questionId] = letter;
    
    // Update UI
    document.querySelectorAll('.quiz-option').forEach(el => {
      el.classList.remove('selected');
      if (el.dataset.letter === letter) {
        el.classList.add('selected');
      }
    });
  }

  // Check current answer
  function checkAnswer() {
    if (!currentQuiz) return;
    
    const q = currentQuiz.questions[currentQuestionIndex];
    const userAnswer = answers[q.id];
    
    if (!userAnswer) {
      alert('Vui lòng chọn một đáp án!');
      return;
    }

    showingResult = true;
    const isCorrect = userAnswer === q.correct;

    // Highlight correct/incorrect
    document.querySelectorAll('.quiz-option').forEach(el => {
      const letter = el.dataset.letter;
      if (letter === q.correct) {
        el.classList.add('correct');
      } else if (letter === userAnswer && !isCorrect) {
        el.classList.add('incorrect');
      }
    });

    // Show explanation
    const explanationEl = document.getElementById('quiz-explanation');
    if (explanationEl) {
      explanationEl.innerHTML = `
        <div class="quiz-explanation-title">
          ${isCorrect ? '✅ Chính xác!' : '❌ Chưa đúng. Đáp án đúng là ' + q.correct}
        </div>
        <p>${q.explanation}</p>
      `;
      explanationEl.classList.remove('hidden');
    }

    // Toggle buttons
    document.getElementById('btn-check').classList.add('hidden');
    document.getElementById('btn-next').classList.remove('hidden');
  }

  // Go to next question
  function nextQuestion() {
    if (!currentQuiz) return;
    
    if (currentQuestionIndex < currentQuiz.total - 1) {
      currentQuestionIndex++;
      showingResult = false;
      renderQuestion(document.getElementById(currentQuiz.containerId));
    } else {
      showResults();
    }
  }

  // Go to previous question
  function prevQuestion() {
    if (!currentQuiz || currentQuestionIndex === 0) return;
    
    currentQuestionIndex--;
    showingResult = false;
    renderQuestion(document.getElementById(currentQuiz.containerId));
  }

  // Show final results
  function showResults() {
    if (!currentQuiz) return;
    
    const container = document.getElementById(currentQuiz.containerId);
    let correct = 0;
    
    for (const q of currentQuiz.questions) {
      if (answers[q.id] === q.correct) {
        correct++;
      }
    }

    const total = currentQuiz.total;
    const percent = Math.round((correct / total) * 100);
    const passed = percent >= 70;

    // Save score
    Progress.saveQuizScore(currentQuiz.layerId, percent);

    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-result">
          <h2>Kết quả Quiz</h2>
          <div class="quiz-result-score ${passed ? 'pass' : 'fail'}">
            ${correct}/${total} (${percent}%)
          </div>
          <p class="text-muted">
            ${passed 
              ? '🎉 Chúc mừng! Bạn đã vượt qua bài quiz này.' 
              : '💪 Cố gắng thêm nhé! Cần đạt ít nhất 70% để pass.'}
          </p>
          <div style="margin-top: var(--space-xl); display: flex; gap: var(--space-md); justify-content: center;">
            <button class="btn btn-secondary" onclick="Quiz.init('${currentQuiz.layerId}', '${currentQuiz.containerId}', ${currentQuiz.total})">
              🔄 Làm lại
            </button>
            <button class="btn btn-primary" onclick="location.reload()">
              Tiếp tục học →
            </button>
          </div>
        </div>
      </div>
    `;

    // Update sidebar progress
    if (window.App) {
      App.updateProgressBar();
    }
  }

  // Mini quiz for end of lesson section (fewer questions, inline)
  function initMiniQuiz(layerId, containerId, questionIds) {
    // Similar to initQuiz but with specific question IDs
    const container = document.getElementById(containerId);
    if (!container) return;

    const allQuestions = window.QUIZ_DATA[layerId] || [];
    const questions = questionIds 
      ? allQuestions.filter(q => questionIds.includes(q.id))
      : allQuestions.slice(0, 3);

    if (questions.length === 0) {
      container.innerHTML = '<p class="text-muted">Chưa có câu hỏi.</p>';
      return;
    }

    currentQuiz = {
      layerId,
      containerId,
      questions,
      total: questions.length
    };
    currentQuestionIndex = 0;
    answers = {};
    showingResult = false;

    renderQuestion(container);
  }

  // Export
  window.Quiz = {
    init: initQuiz,
    initMini: initMiniQuiz,
    selectOption,
    checkAnswer,
    nextQuestion,
    prevQuestion
  };

})();
```

- [ ] **Step 3: Update index.html to include quiz-data.js**

Add before other scripts in `index.html`:
```html
<script src="quizzes/quiz-data.js"></script>
<script src="js/progress.js"></script>
<script src="js/quiz.js"></script>
<script src="js/app.js"></script>
```

- [ ] **Step 4: Verify quiz works**

Open browser console and run:
```javascript
Quiz.init('layer1', 'main-content', 3);
```

Expected: Quiz renders with 3 questions from Layer 1, can select answers, check, see explanation, navigate.

---

## Phase 2: Content Creation (Tasks 5-12)

### Task 5: Layer 0 - Kiến thức CK cơ bản

**Files:**
- Create: `lessons/layer-0-basics.html`

- [ ] **Step 1: Create layer-0-basics.html**

```html
<!-- lessons/layer-0-basics.html -->
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lớp 0: Kiến thức Chứng khoán Cơ bản | Oil & Gas Mastering</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <div class="app">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <a href="../index.html" class="sidebar-logo">
          <span>⛽</span>
          <span>Oil & Gas Mastering</span>
        </a>
      </div>
      <nav class="sidebar-nav" id="sidebar-nav"></nav>
      <div class="sidebar-footer">
        <div class="progress-label">
          <span>Tiến độ</span>
          <span id="progress-percent">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" id="progress-bar" style="width: 0%"></div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main">
      <div class="content">
        <div class="breadcrumb">
          <a href="../index.html">🏠 Dashboard</a>
          <span class="breadcrumb-separator">›</span>
          <span>Lớp 0: Kiến thức CK cơ bản</span>
        </div>

        <div class="lesson-header">
          <h1 class="lesson-title">📚 Lớp 0: Kiến thức Chứng khoán Cơ bản</h1>
          <div class="lesson-meta">
            <span>⏱️ ~2-3 giờ</span>
            <span>📖 4 bài học</span>
            <span>📝 1 quiz</span>
          </div>
        </div>

        <!-- Checklist -->
        <div class="card">
          <h3>📋 Checklist bài học</h3>
          <ul class="checklist" id="lesson-checklist">
            <li class="checklist-item" data-lesson="0.1">
              <div class="checklist-checkbox" onclick="toggleLesson('0.1')"></div>
              <div class="checklist-content">
                <div class="checklist-title">0.1 Chứng khoán là gì?</div>
                <div class="checklist-meta">Thị trường hoạt động như thế nào</div>
              </div>
            </li>
            <li class="checklist-item" data-lesson="0.2">
              <div class="checklist-checkbox" onclick="toggleLesson('0.2')"></div>
              <div class="checklist-content">
                <div class="checklist-title">0.2 Đọc báo cáo tài chính</div>
                <div class="checklist-meta">CĐKT, KQKD, LCTT</div>
              </div>
            </li>
            <li class="checklist-item" data-lesson="0.3">
              <div class="checklist-checkbox" onclick="toggleLesson('0.3')"></div>
              <div class="checklist-content">
                <div class="checklist-title">0.3 Các chỉ số tài chính</div>
                <div class="checklist-meta">P/E, P/B, ROE, EPS...</div>
              </div>
            </li>
            <li class="checklist-item" data-lesson="0.4">
              <div class="checklist-checkbox" onclick="toggleLesson('0.4')"></div>
              <div class="checklist-content">
                <div class="checklist-title">0.4 Cách đặt lệnh</div>
                <div class="checklist-meta">Các loại lệnh mua/bán</div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Lesson 0.1 -->
        <section class="lesson-section" id="0.1">
          <h2>0.1 Chứng khoán là gì? Thị trường hoạt động như thế nào?</h2>
          
          <h3>Khái niệm cơ bản</h3>
          <p><strong>Chứng khoán (Securities)</strong> là các công cụ tài chính có thể giao dịch được, bao gồm:</p>
          <ul>
            <li><strong>Cổ phiếu (Stock/Equity):</strong> Phần sở hữu trong một công ty. Khi mua cổ phiếu, bạn trở thành cổ đông.</li>
            <li><strong>Trái phiếu (Bond):</strong> Khoản vay bạn cho công ty hoặc chính phủ, được trả lãi định kỳ.</li>
            <li><strong>Chứng chỉ quỹ (ETF, Fund):</strong> Rổ cổ phiếu được quản lý chuyên nghiệp.</li>
          </ul>

          <div class="info-box tip">
            <div class="info-box-title">💡 Tại sao công ty phát hành cổ phiếu?</div>
            <p>Để huy động vốn mà không cần vay ngân hàng. Đổi lại, cổ đông được chia sẻ lợi nhuận (cổ tức) và tăng giá cổ phiếu.</p>
          </div>

          <h3>Thị trường chứng khoán Việt Nam</h3>
          <p>Việt Nam có 3 sàn giao dịch chính:</p>
          
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Sàn</th>
                  <th>Ký hiệu</th>
                  <th>Đặc điểm</th>
                  <th>Ví dụ mã</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>HOSE</strong></td>
                  <td>Sàn TP.HCM</td>
                  <td>Lớn nhất, các công ty blue-chip</td>
                  <td>VNM, VIC, GAS, PVD</td>
                </tr>
                <tr>
                  <td><strong>HNX</strong></td>
                  <td>Sàn Hà Nội</td>
                  <td>Công ty vừa và nhỏ</td>
                  <td>PVS, SHS</td>
                </tr>
                <tr>
                  <td><strong>UPCOM</strong></td>
                  <td>Sàn OTC đăng ký</td>
                  <td>Công ty chưa niêm yết chính thức</td>
                  <td>BSR, OIL</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Phiên giao dịch</h3>
          <ul>
            <li><strong>Sáng:</strong> 9:00 - 11:30</li>
            <li><strong>Chiều:</strong> 13:00 - 14:45 (HOSE), 15:00 (HNX)</li>
            <li><strong>ATC:</strong> Phiên khớp lệnh cuối ngày (đóng cửa)</li>
          </ul>

          <div class="info-box important">
            <div class="info-box-title">📌 Lưu ý quan trọng</div>
            <p>Cổ phiếu dầu khí như GAS, PVD giao dịch trên HOSE. Một số như PVS, BSR trên HNX hoặc UPCOM. Khi phân tích, cần biết cổ phiếu giao dịch ở đâu vì thanh khoản khác nhau.</p>
          </div>

          <h3>Tham khảo thêm</h3>
          <ul>
            <li><a href="https://www.hsx.vn" target="_blank">HOSE - Sở Giao dịch TP.HCM</a></li>
            <li><a href="https://www.hnx.vn" target="_blank">HNX - Sở Giao dịch Hà Nội</a></li>
            <li><a href="https://cafef.vn" target="_blank">CafeF - Tin tức tài chính</a></li>
          </ul>

          <button class="btn btn-primary mt-lg" onclick="toggleLesson('0.1'); scrollToSection('0.2')">
            Hoàn thành → Bài tiếp
          </button>
        </section>

        <!-- Lesson 0.2 -->
        <section class="lesson-section" id="0.2">
          <h2>0.2 Đọc hiểu Báo cáo Tài chính</h2>
          
          <p>Mỗi quý, công ty niêm yết phải công bố 3 báo cáo tài chính chính:</p>

          <h3>1. Bảng Cân đối Kế toán (Balance Sheet)</h3>
          <p>Cho biết công ty <strong>có gì</strong> và <strong>nợ gì</strong> tại một thời điểm.</p>
          
          <pre><code>TÀI SẢN = NỢ PHẢI TRẢ + VỐN CHỦ SỞ HỮU

Tài sản (Assets):
├── Tài sản ngắn hạn (tiền, hàng tồn kho, phải thu)
└── Tài sản dài hạn (nhà xưởng, máy móc)

Nguồn vốn:
├── Nợ phải trả (vay ngân hàng, phải trả nhà cung cấp)
└── Vốn chủ sở hữu (vốn cổ đông bỏ vào + lợi nhuận giữ lại)</code></pre>

          <div class="info-box tip">
            <div class="info-box-title">💡 Với công ty dầu khí</div>
            <p>Chú ý <strong>Tài sản cố định</strong> (giàn khoan, nhà máy lọc dầu) và <strong>Hàng tồn kho</strong> (dầu thô, xăng). BSR có thể lãi/lỗ lớn từ chênh lệch giá tồn kho.</p>
          </div>

          <h3>2. Báo cáo Kết quả Kinh doanh (Income Statement)</h3>
          <p>Cho biết công ty <strong>kiếm được bao nhiêu</strong> và <strong>tiêu bao nhiêu</strong> trong kỳ.</p>

          <pre><code>Doanh thu thuần
- Giá vốn hàng bán
= LỢI NHUẬN GỘP

- Chi phí bán hàng
- Chi phí quản lý
- Chi phí tài chính (lãi vay)
+ Thu nhập khác
= LỢI NHUẬN TRƯỚC THUẾ

- Thuế TNDN
= LỢI NHUẬN SAU THUẾ (Net Income)</code></pre>

          <h3>3. Báo cáo Lưu chuyển Tiền tệ (Cash Flow Statement)</h3>
          <p>Cho biết <strong>tiền thực tế</strong> vào/ra công ty.</p>

          <pre><code>Dòng tiền từ HOẠT ĐỘNG KINH DOANH
  (Tiền thu từ bán hàng, trả cho nhà cung cấp...)

Dòng tiền từ ĐẦU TƯ
  (Mua/bán tài sản, đầu tư dự án mới...)

Dòng tiền từ TÀI CHÍNH
  (Vay/trả nợ, phát hành cổ phiếu, trả cổ tức...)

= THAY ĐỔI TIỀN THUẦN trong kỳ</code></pre>

          <div class="info-box warning">
            <div class="info-box-title">⚠️ Bẫy thường gặp</div>
            <p><strong>Lợi nhuận cao ≠ Tiền mặt nhiều.</strong> Công ty có thể "lãi trên giấy" nhưng tiền mặt cạn kiệt vì bị khách hàng nợ hoặc đầu tư quá nhiều. Luôn check dòng tiền kinh doanh!</p>
          </div>

          <h3>Tham khảo thêm</h3>
          <ul>
            <li><a href="https://finance.vietstock.vn" target="_blank">VietstockFinance - Tra cứu BCTC</a></li>
            <li><a href="https://s.cafef.vn" target="_blank">CafeF Stock - Dữ liệu tài chính</a></li>
          </ul>

          <button class="btn btn-primary mt-lg" onclick="toggleLesson('0.2'); scrollToSection('0.3')">
            Hoàn thành → Bài tiếp
          </button>
        </section>

        <!-- Lesson 0.3 -->
        <section class="lesson-section" id="0.3">
          <h2>0.3 Các Chỉ số Tài chính Quan trọng</h2>

          <h3>Nhóm 1: Định giá (Valuation)</h3>
          
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Chỉ số</th>
                  <th>Công thức</th>
                  <th>Ý nghĩa</th>
                  <th>Benchmark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>P/E</strong></td>
                  <td>Giá / EPS</td>
                  <td>Trả bao nhiêu cho 1đ lợi nhuận</td>
                  <td>10-15x: hợp lý, >20x: cao</td>
                </tr>
                <tr>
                  <td><strong>P/B</strong></td>
                  <td>Giá / Book Value</td>
                  <td>Trả bao nhiêu cho 1đ giá trị sổ sách</td>
                  <td><1: rẻ, >3: đắt</td>
                </tr>
                <tr>
                  <td><strong>EV/EBITDA</strong></td>
                  <td>(Vốn hóa + Nợ - Tiền) / EBITDA</td>
                  <td>Định giá toàn doanh nghiệp</td>
                  <td>Dầu khí: 4-8x</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Nhóm 2: Hiệu quả (Profitability)</h3>
          
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Chỉ số</th>
                  <th>Công thức</th>
                  <th>Ý nghĩa</th>
                  <th>Benchmark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ROE</strong></td>
                  <td>LN sau thuế / VCSH</td>
                  <td>Sinh lời trên vốn cổ đông</td>
                  <td>>15%: tốt</td>
                </tr>
                <tr>
                  <td><strong>ROA</strong></td>
                  <td>LN sau thuế / Tổng TS</td>
                  <td>Sinh lời trên tổng tài sản</td>
                  <td>>5%: tốt</td>
                </tr>
                <tr>
                  <td><strong>Biên LN gộp</strong></td>
                  <td>LN gộp / Doanh thu</td>
                  <td>Khả năng sinh lời cơ bản</td>
                  <td>Tùy ngành</td>
                </tr>
                <tr>
                  <td><strong>Biên LN ròng</strong></td>
                  <td>LN sau thuế / Doanh thu</td>
                  <td>Cuối cùng giữ được bao nhiêu</td>
                  <td>>10%: tốt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Nhóm 3: Cổ tức (Dividend)</h3>
          
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Chỉ số</th>
                  <th>Công thức</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Dividend Yield</strong></td>
                  <td>Cổ tức / Giá CP</td>
                  <td>Tỷ suất cổ tức</td>
                </tr>
                <tr>
                  <td><strong>Payout Ratio</strong></td>
                  <td>Cổ tức / EPS</td>
                  <td>Chia bao nhiêu % lợi nhuận</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="info-box important">
            <div class="info-box-title">📌 Với ngành dầu khí</div>
            <p>P/E của ngành chu kỳ như dầu khí <strong>PHẢN TRỰC GIÁC</strong>: P/E thấp có thể là đỉnh chu kỳ (lợi nhuận đang cao nhất), P/E cao có thể là đáy (lợi nhuận đang thấp nhất). Sẽ học kỹ ở Lớp 5.</p>
          </div>

          <button class="btn btn-primary mt-lg" onclick="toggleLesson('0.3'); scrollToSection('0.4')">
            Hoàn thành → Bài tiếp
          </button>
        </section>

        <!-- Lesson 0.4 -->
        <section class="lesson-section" id="0.4">
          <h2>0.4 Cách đặt lệnh Mua/Bán</h2>

          <h3>Các loại lệnh cơ bản</h3>
          
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Loại lệnh</th>
                  <th>Cách hoạt động</th>
                  <th>Khi nào dùng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>LO (Limit Order)</strong></td>
                  <td>Đặt giá cụ thể, chỉ khớp khi có đối ứng</td>
                  <td>Muốn mua/bán ở giá mong muốn</td>
                </tr>
                <tr>
                  <td><strong>MP (Market Price)</strong></td>
                  <td>Khớp ngay với giá tốt nhất hiện có</td>
                  <td>Cần mua/bán gấp</td>
                </tr>
                <tr>
                  <td><strong>ATO</strong></td>
                  <td>Khớp ở phiên mở cửa (9:00)</td>
                  <td>Muốn vào ngay đầu phiên</td>
                </tr>
                <tr>
                  <td><strong>ATC</strong></td>
                  <td>Khớp ở phiên đóng cửa</td>
                  <td>Muốn khớp ở giá đóng cửa</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Biên độ dao động giá</h3>
          <ul>
            <li><strong>HOSE:</strong> ±7% so với giá tham chiếu</li>
            <li><strong>HNX:</strong> ±10%</li>
            <li><strong>UPCOM:</strong> ±15%</li>
          </ul>

          <h3>Đơn vị giao dịch</h3>
          <ul>
            <li><strong>Lô chẵn:</strong> 100 cổ phiếu (giao dịch thông thường)</li>
            <li><strong>Lô lẻ:</strong> 1-99 cổ phiếu (giao dịch riêng, thanh khoản thấp)</li>
          </ul>

          <div class="info-box tip">
            <div class="info-box-title">💡 Mẹo cho người mới</div>
            <p>Bắt đầu với lệnh LO để kiểm soát giá mua/bán. Tránh dùng MP khi cổ phiếu thanh khoản thấp vì có thể bị khớp ở giá xấu.</p>
          </div>

          <button class="btn btn-primary mt-lg" onclick="toggleLesson('0.4'); scrollToSection('quiz-section')">
            Hoàn thành → Làm Quiz
          </button>
        </section>

        <!-- Quiz Section -->
        <section class="lesson-section" id="quiz-section">
          <h2>📝 Quiz: Kiểm tra kiến thức Lớp 0</h2>
          <p>Trả lời các câu hỏi sau để kiểm tra mức độ hiểu bài. Cần đạt 70% để pass.</p>
          
          <div id="layer0-quiz"></div>
        </section>

        <!-- Navigation -->
        <div class="lesson-nav">
          <a href="../index.html" class="btn btn-secondary">← Dashboard</a>
          <a href="layer-1-industry.html" class="btn btn-primary">Lớp 1: Hiểu ngành →</a>
        </div>

      </div>
    </main>
  </div>

  <script src="../quizzes/quiz-data.js"></script>
  <script src="../js/progress.js"></script>
  <script src="../js/quiz.js"></script>
  <script src="../js/app.js"></script>
  <script>
    // Initialize quiz
    Quiz.init('layer0', 'layer0-quiz', 5);

    // Update checklist UI based on progress
    function updateChecklist() {
      document.querySelectorAll('.checklist-item').forEach(item => {
        const lessonId = item.dataset.lesson;
        if (Progress.isLessonCompleted(lessonId)) {
          item.classList.add('completed');
          item.querySelector('.checklist-checkbox').innerHTML = '✓';
        }
      });
    }

    // Toggle lesson completion
    function toggleLesson(lessonId) {
      Progress.completeLesson(lessonId);
      updateChecklist();
      App.updateProgressBar();
      App.renderSidebar();
    }

    // Scroll to section
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Initial update
    updateChecklist();
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify layer-0-basics.html works**

Open `lessons/layer-0-basics.html` in browser. Expected:
- Sidebar shows all layers, Layer 0 is active
- Checklist shows 4 lessons
- Can click through each lesson section
- Can mark lessons as complete
- Quiz renders and works at bottom
- Progress updates in sidebar

---

### Task 6-12: Remaining Lesson Files

> **Note:** Tasks 6-12 follow the same pattern as Task 5. Each creates a lesson HTML file with:
> - Sidebar navigation
> - Checklist of sub-lessons
> - Content sections based on knowledge.md + research
> - Quiz at the end
> - Navigation to next layer

**Files to create:**
- Task 6: `lessons/layer-1-industry.html` - Hiểu ngành dầu khí
- Task 7: `lessons/layer-2-metrics.html` - Đọc số
- Task 8: `lessons/layer-3-cycle.html` - Hiểu chu kỳ
- Task 9: `lessons/layer-4-macro.html` - Hiểu vĩ mô
- Task 10: `lessons/layer-5-valuation.html` - Định giá
- Task 11: `lessons/layer-6-advisory.html` - Tư vấn
- Task 12: `lessons/layer-7-analyst.html` - Kỹ năng Analyst

For each task:
- [ ] Copy structure from layer-0-basics.html
- [ ] Update breadcrumb, title, navigation
- [ ] Add content from knowledge.md for that layer
- [ ] Research and add examples, real data, external links
- [ ] Add quiz questions to quiz-data.js
- [ ] Test in browser

---

## Phase 3: Case Studies (Tasks 13-16)

### Task 13: Case Study - PVD

**Files:**
- Create: `cases/case-pvd.html`

- [ ] **Step 1: Create case-pvd.html**

Follow same HTML structure as lessons, but content is:
1. Giới thiệu PV Drilling
2. Phân tích cơ bản (BCTC gần nhất)
3. Phân tích chu kỳ (giá dầu, rig count)
4. Yếu tố vĩ mô
5. Định giá
6. Kết luận

- [ ] **Step 2: Research real PVD data**

Use WebSearch to get:
- PVD latest financials from CafeF/Vietstock
- Current oil prices
- PVD backlog data
- Recent news

- [ ] **Step 3: Test case page works**

---

### Tasks 14-16: Remaining Case Studies

- Task 14: `cases/case-gas.html`
- Task 15: `cases/case-dpm.html`
- Task 16: `cases/case-bsr.html`

Same pattern as Task 13.

---

## Phase 4: Polish & Complete (Tasks 17-19)

### Task 17: Complete Quiz Bank

**Files:**
- Modify: `quizzes/quiz-data.js`

- [ ] **Step 1: Add remaining questions for all layers**

Target: ~200 questions total (~25 per layer)

Question types to include:
- Multiple choice (most common)
- Scenario-based (for layers 3, 4, 6)
- Calculation (for layers 2, 5)

- [ ] **Step 2: Verify all quizzes work**

Test quiz for each layer.

---

### Task 18: Add Infographics/Images

**Files:**
- Create: `assets/images/` folder with images

- [ ] **Step 1: Create/find key infographics**

Priority images:
1. Oil & Gas value chain diagram
2. Company classification chart
3. Cycle phases diagram
4. Impact matrix visualization

- [ ] **Step 2: Embed in lesson files**

Update HTML files to reference images.

---

### Task 19: Final Testing & Polish

- [ ] **Step 1: Test all navigation flows**
- [ ] **Step 2: Test progress persistence (clear localStorage, restart)**
- [ ] **Step 3: Test export/import**
- [ ] **Step 4: Fix any CSS/layout issues**
- [ ] **Step 5: Verify all links work**

---

## Summary

| Phase | Tasks | Files | Est. Time |
|-------|-------|-------|-----------|
| 1. Foundation | 1-4 | CSS, JS core, Quiz system | 2-3 hours |
| 2. Content | 5-12 | 8 lesson HTML files | 8-12 hours |
| 3. Cases | 13-16 | 4 case study files | 4-6 hours |
| 4. Polish | 17-19 | Quiz bank, images, testing | 2-3 hours |

**Total estimated: 16-24 hours of implementation**
