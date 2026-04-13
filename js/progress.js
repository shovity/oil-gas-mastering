/**
 * progress.js - Learning progress management via localStorage
 * Exposed globally as window.Progress
 */

const STORAGE_KEY = 'oilgas_progress';

const CURRICULUM = {
  layer0: { title: 'Lớp 0: Kiến thức CK cơ bản', icon: '📚', lessons: ['0.1', '0.2', '0.3', '0.4'], file: '/lessons/layer-0-basics.html' },
  layer1: { title: 'Lớp 1: Hiểu ngành dầu khí', icon: '🛢️', lessons: ['1.1', '1.2', '1.3', '1.4', '1.5'], file: '/lessons/layer-1-industry.html' },
  layer2: { title: 'Lớp 2: Đọc số - Metrics', icon: '📊', lessons: ['2.1', '2.2', '2.3', '2.4', '2.5'], file: '/lessons/layer-2-metrics.html' },
  layer3: { title: 'Lớp 3: Hiểu chu kỳ', icon: '🔄', lessons: ['3.1', '3.2', '3.3', '3.4', '3.5'], file: '/lessons/layer-3-cycle.html' },
  layer4: { title: 'Lớp 4: Hiểu vĩ mô', icon: '🌍', lessons: ['4.1', '4.2', '4.3', '4.4', '4.5'], file: '/lessons/layer-4-macro.html' },
  layer5: { title: 'Lớp 5: Định giá', icon: '💰', lessons: ['5.1', '5.2', '5.3', '5.4', '5.5'], file: '/lessons/layer-5-valuation.html' },
  layer6: { title: 'Lớp 6: Tư vấn', icon: '🎯', lessons: ['6.1', '6.2', '6.3', '6.4', '6.5'], file: '/lessons/layer-6-advisory.html' },
  layer7: { title: 'Lớp 7: Kỹ năng Analyst', icon: '✍️', lessons: ['7.1', '7.2', '7.3', '7.4', '7.5'], file: '/lessons/layer-7-analyst.html' }
};

const CASES = {
  pvd: { title: 'Case Study: PV Drilling (PVD)', icon: '🔧', file: '/cases/case-pvd.html' },
  gas: { title: 'Case Study: GAS', icon: '🔥', file: '/cases/case-gas.html' },
  dpm: { title: 'Case Study: Đạm Phú Mỹ (DPM)', icon: '🌱', file: '/cases/case-dpm.html' },
  bsr: { title: 'Case Study: BSR', icon: '🏭', file: '/cases/case-bsr.html' }
};

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Return today's date as YYYY-MM-DD */
function todayString() {
  return new Date().toISOString().slice(0, 10);
}

/** Collect every lesson id from CURRICULUM in order */
function allLessonIds() {
  return Object.values(CURRICULUM).flatMap(layer => layer.lessons);
}

/** Collect every case id from CASES */
function allCaseIds() {
  return Object.keys(CASES);
}

// ─── Core Progress Functions ─────────────────────────────────────────────────

/**
 * Returns a fresh, empty progress object.
 */
function getDefaultProgress() {
  return {
    lessons: {},
    quizScores: {},
    layerTests: {},
    cases: {},
    currentLesson: allLessonIds()[0] || null,
    stats: {
      totalTime: 0,
      lastVisit: todayString(),
      startDate: todayString()
    },
    finalExam: null
  };
}

/**
 * Load progress from localStorage. Returns default if nothing is stored or
 * if the stored value cannot be parsed.
 */
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw);
    // Merge with default to ensure all keys exist (handles older saved data)
    const defaults = getDefaultProgress();
    return {
      lessons:       parsed.lessons       || defaults.lessons,
      quizScores:    parsed.quizScores    || defaults.quizScores,
      layerTests:    parsed.layerTests    || defaults.layerTests,
      cases:         parsed.cases         || defaults.cases,
      currentLesson: parsed.currentLesson !== undefined ? parsed.currentLesson : defaults.currentLesson,
      stats: {
        totalTime:  (parsed.stats && parsed.stats.totalTime  != null) ? parsed.stats.totalTime  : 0,
        lastVisit:  (parsed.stats && parsed.stats.lastVisit)           ? parsed.stats.lastVisit  : todayString(),
        startDate:  (parsed.stats && parsed.stats.startDate)           ? parsed.stats.startDate  : todayString()
      },
      finalExam: parsed.finalExam !== undefined ? parsed.finalExam : null
    };
  } catch (e) {
    console.error('[Progress] Failed to load progress:', e);
    return getDefaultProgress();
  }
}

/**
 * Persist a progress object to localStorage.
 * @param {object} progress
 */
function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('[Progress] Failed to save progress:', e);
  }
}

// ─── Lesson Functions ────────────────────────────────────────────────────────

/**
 * Mark a lesson as complete and advance currentLesson to the next uncompleted one.
 * @param {string} lessonId  e.g. "1.3"
 */
function completeLesson(lessonId) {
  const progress = loadProgress();
  progress.lessons[lessonId] = true;
  progress.currentLesson = findNextLesson(progress);
  saveProgress(progress);
  return progress;
}

/**
 * Find the first lesson not yet completed across all layers, in order.
 * Returns null when all lessons are done.
 * @param {object} [progress]  optional, loads from storage if omitted
 * @returns {string|null}
 */
function findNextLesson(progress) {
  const p = progress || loadProgress();
  const ids = allLessonIds();
  for (const id of ids) {
    if (!p.lessons[id]) return id;
  }
  return null; // all done
}

/**
 * Check whether a specific lesson has been completed.
 * @param {string} lessonId
 * @returns {boolean}
 */
function isLessonCompleted(lessonId) {
  const progress = loadProgress();
  return !!progress.lessons[lessonId];
}

// ─── Quiz / Test Score Functions ─────────────────────────────────────────────

/**
 * Save (or update) a quiz score.
 * @param {string} quizId  e.g. "layer0"
 * @param {number} score   0-100
 */
function saveQuizScore(quizId, score) {
  const progress = loadProgress();
  progress.quizScores[quizId] = score;
  saveProgress(progress);
  return progress;
}

/**
 * Save (or update) a layer test score.
 * @param {string} layerId  e.g. "layer0"
 * @param {number} score    0-100
 */
function saveLayerTestScore(layerId, score) {
  const progress = loadProgress();
  progress.layerTests[layerId] = score;
  saveProgress(progress);
  return progress;
}

// ─── Case Functions ──────────────────────────────────────────────────────────

/**
 * Mark a case study as complete.
 * @param {string} caseId  e.g. "pvd"
 */
function completeCase(caseId) {
  const progress = loadProgress();
  progress.cases[caseId] = true;
  saveProgress(progress);
  return progress;
}

// ─── Progress Calculation ─────────────────────────────────────────────────────

/**
 * Calculate overall completion percentage across lessons and cases.
 * @returns {number} 0–100 (rounded to one decimal)
 */
function calculateProgress() {
  const progress = loadProgress();
  const lessonIds = allLessonIds();
  const caseIds = allCaseIds();
  const total = lessonIds.length + caseIds.length;
  if (total === 0) return 0;

  const completedLessons = lessonIds.filter(id => progress.lessons[id]).length;
  const completedCases   = caseIds.filter(id => progress.cases[id]).length;
  const done = completedLessons + completedCases;

  return Math.round((done / total) * 1000) / 10; // one decimal
}

/**
 * Return progress details for a single layer.
 * @param {string} layerId  e.g. "layer1"
 * @returns {{ completed: number, total: number, percent: number }}
 */
function getLayerProgress(layerId) {
  const layer = CURRICULUM[layerId];
  if (!layer) return { completed: 0, total: 0, percent: 0 };

  const progress = loadProgress();
  const total = layer.lessons.length;
  const completed = layer.lessons.filter(id => progress.lessons[id]).length;
  const percent = total > 0 ? Math.round((completed / total) * 1000) / 10 : 0;
  return { completed, total, percent };
}

/**
 * Return a summary stats object.
 * @returns {{
 *   lessonsCompleted: number,
 *   casesCompleted: number,
 *   quizzesPassed: number,
 *   totalTime: number,
 *   progressPercent: number
 * }}
 */
function getStats() {
  const progress = loadProgress();
  const lessonsCompleted = Object.values(progress.lessons).filter(Boolean).length;
  const casesCompleted   = Object.values(progress.cases).filter(Boolean).length;
  const quizzesPassed    = Object.values(progress.quizScores).filter(s => s >= 70).length;
  return {
    lessonsCompleted,
    casesCompleted,
    quizzesPassed,
    totalTime:       progress.stats.totalTime,
    progressPercent: calculateProgress()
  };
}

// ─── Time Tracking ────────────────────────────────────────────────────────────

/**
 * Add minutes to totalTime and refresh lastVisit.
 * @param {number} minutes
 */
function updateVisitTime(minutes) {
  const progress = loadProgress();
  progress.stats.totalTime  = (progress.stats.totalTime || 0) + (minutes || 0);
  progress.stats.lastVisit  = todayString();
  saveProgress(progress);
  return progress;
}

// ─── Import / Export ──────────────────────────────────────────────────────────

/**
 * Trigger a browser download of the current progress as a JSON file.
 */
function exportProgress() {
  const progress = loadProgress();
  const json = JSON.stringify(progress, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `oilgas-progress-${todayString()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Read an uploaded JSON file, validate it, and save to localStorage.
 * @param {File} file
 * @returns {Promise<object>} the imported progress object
 */
function importProgress(file) {
  return new Promise((resolve, reject) => {
    if (!file || file.type !== 'application/json') {
      reject(new Error('Invalid file: please upload a JSON file.'));
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        // Basic structural validation
        if (
          typeof parsed !== 'object' || parsed === null ||
          !('lessons' in parsed) ||
          !('stats' in parsed)
        ) {
          reject(new Error('Invalid progress file: missing required fields.'));
          return;
        }
        // Merge with defaults so any missing keys are filled in
        const defaults = getDefaultProgress();
        const imported = {
          lessons:       parsed.lessons       || defaults.lessons,
          quizScores:    parsed.quizScores    || defaults.quizScores,
          layerTests:    parsed.layerTests    || defaults.layerTests,
          cases:         parsed.cases         || defaults.cases,
          currentLesson: parsed.currentLesson !== undefined ? parsed.currentLesson : defaults.currentLesson,
          stats: {
            totalTime: (parsed.stats && parsed.stats.totalTime  != null) ? parsed.stats.totalTime  : 0,
            lastVisit:  (parsed.stats && parsed.stats.lastVisit)          ? parsed.stats.lastVisit  : todayString(),
            startDate:  (parsed.stats && parsed.stats.startDate)          ? parsed.stats.startDate  : todayString()
          },
          finalExam: parsed.finalExam !== undefined ? parsed.finalExam : null
        };
        saveProgress(imported);
        resolve(imported);
      } catch (e) {
        reject(new Error('Failed to parse JSON: ' + e.message));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsText(file);
  });
}

// ─── Reset ────────────────────────────────────────────────────────────────────

/**
 * Show a confirmation dialog and, if confirmed, wipe all progress from
 * localStorage and return a fresh default progress object.
 * @returns {object|null} fresh progress if reset was confirmed, null otherwise
 */
function resetProgress() {
  const confirmed = window.confirm(
    'Bạn có chắc muốn xóa toàn bộ tiến độ học? Hành động này không thể hoàn tác.'
  );
  if (!confirmed) return null;
  localStorage.removeItem(STORAGE_KEY);
  const fresh = getDefaultProgress();
  saveProgress(fresh);
  return fresh;
}

// ─── Public API ───────────────────────────────────────────────────────────────

window.Progress = {
  // Constants (read-only references)
  STORAGE_KEY,
  CURRICULUM,
  CASES,

  // Core
  getDefaultProgress,
  loadProgress,
  saveProgress,

  // Lessons
  completeLesson,
  findNextLesson,
  isLessonCompleted,

  // Scores
  saveQuizScore,
  saveLayerTestScore,

  // Cases
  completeCase,

  // Stats & calculation
  calculateProgress,
  getLayerProgress,
  getStats,

  // Time
  updateVisitTime,

  // Import / Export / Reset
  exportProgress,
  importProgress,
  resetProgress
};
