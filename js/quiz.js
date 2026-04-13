/**
 * quiz.js - Quiz rendering and scoring module
 * Exposed globally as window.Quiz
 */

// ─── State ────────────────────────────────────────────────────────────────────

let currentQuiz = null;    // { layerId, containerId, questions, total }
let currentQuestionIndex = 0;
let answers = {};           // { questionId: 'A' }
let showingResult = false;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Fisher-Yates shuffle — returns a new shuffled array.
 * @param {Array} array
 * @returns {Array}
 */
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Get the container DOM element, accepting an id string or an element directly.
 * @param {string|HTMLElement} containerId
 * @returns {HTMLElement|null}
 */
function resolveContainer(containerId) {
  if (typeof containerId === 'string') {
    return document.getElementById(containerId);
  }
  return containerId instanceof HTMLElement ? containerId : null;
}

// ─── Init ─────────────────────────────────────────────────────────────────────

/**
 * Initialize a quiz for a given layer.
 * @param {string}          layerId        e.g. 'layer1'
 * @param {string|HTMLElement} containerId  element id or DOM node to render into
 * @param {number}          [questionCount=10]
 */
function initQuiz(layerId, containerId, questionCount = 10) {
  const data = window.QUIZ_DATA;
  if (!data || !data[layerId]) {
    console.error('[Quiz] QUIZ_DATA not found or layer missing:', layerId);
    return;
  }

  const pool = data[layerId];
  if (!pool.length) {
    const container = resolveContainer(containerId);
    if (container) {
      container.innerHTML = '<p class="text-muted" style="text-align:center;padding:2rem;">Chưa có câu hỏi cho chủ đề này.</p>';
    }
    return;
  }

  const questions = shuffleArray(pool).slice(0, questionCount);

  currentQuiz = { layerId, containerId, questions, total: questions.length };
  currentQuestionIndex = 0;
  answers = {};
  showingResult = false;

  renderQuestion();
}

/**
 * Initialize a quiz with a specific set of question IDs.
 * @param {string}             layerId
 * @param {string|HTMLElement} containerId
 * @param {string[]}           questionIds
 */
function initMiniQuiz(layerId, containerId, questionIds) {
  const data = window.QUIZ_DATA;
  if (!data || !data[layerId]) {
    console.error('[Quiz] QUIZ_DATA not found or layer missing:', layerId);
    return;
  }

  const pool = data[layerId];
  const questions = questionIds
    .map(id => pool.find(q => q.id === id))
    .filter(Boolean);

  if (!questions.length) {
    const container = resolveContainer(containerId);
    if (container) {
      container.innerHTML = '<p class="text-muted" style="text-align:center;padding:2rem;">Không tìm thấy câu hỏi.</p>';
    }
    return;
  }

  currentQuiz = { layerId, containerId, questions, total: questions.length };
  currentQuestionIndex = 0;
  answers = {};
  showingResult = false;

  renderQuestion();
}

// ─── Render ───────────────────────────────────────────────────────────────────

/**
 * Render the current question into the quiz container.
 */
function renderQuestion() {
  if (!currentQuiz) return;

  const container = resolveContainer(currentQuiz.containerId);
  if (!container) {
    console.error('[Quiz] Container not found:', currentQuiz.containerId);
    return;
  }

  showingResult = false;

  const q = currentQuiz.questions[currentQuestionIndex];
  const idx = currentQuestionIndex;
  const total = currentQuiz.total;
  const progressPct = Math.round((idx / total) * 100);
  const selectedAnswer = answers[q.id] || null;
  const isFirst = idx === 0;

  const optionsHtml = q.options.map(opt => {
    const letter = opt.charAt(0); // 'A', 'B', 'C', 'D'
    const selectedClass = selectedAnswer === letter ? ' selected' : '';
    return `
      <button
        class="quiz-option${selectedClass}"
        data-letter="${letter}"
        onclick="Quiz.selectOption('${q.id}', '${letter}')"
      >
        <span class="quiz-option-key">${letter}</span>
        <span>${escapeHtml(opt.slice(3))}</span>
      </button>`;
  }).join('');

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-xs)">
          <span class="quiz-title" style="font-weight:600;font-size:var(--text-sm);color:var(--text-muted)">📝 Quiz</span>
          <span class="quiz-progress" style="font-size:var(--text-sm);color:var(--text-muted)">Câu ${idx + 1}/${total}</span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${progressPct}%"></div>
        </div>
      </div>

      <div class="quiz-question">
        <div class="quiz-question-number">Câu hỏi ${idx + 1}</div>
        <div class="quiz-question-text">${escapeHtml(q.question)}</div>
      </div>

      <div class="quiz-options">
        ${optionsHtml}
      </div>

      <div id="quiz-explanation-${q.id}" class="quiz-explanation hidden">
        <strong id="quiz-explanation-title-${q.id}">✅ Chính xác!</strong>
        <p style="margin-top:var(--space-xs)">${escapeHtml(q.explanation)}</p>
      </div>

      <div class="quiz-actions" style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
        <button
          class="btn btn-secondary${isFirst ? ' hidden' : ''}"
          id="btn-prev"
          onclick="Quiz.prevQuestion()"
        >← Câu trước</button>
        <button
          class="btn btn-primary"
          id="btn-check"
          onclick="Quiz.checkAnswer()"
          style="margin-left:auto"
        >Kiểm tra</button>
        <button
          class="btn btn-primary hidden"
          id="btn-next"
          onclick="Quiz.nextQuestion()"
        >${idx + 1 < total ? 'Câu tiếp →' : 'Xem kết quả →'}</button>
      </div>
    </div>
  `;
}

// ─── Interaction ──────────────────────────────────────────────────────────────

/**
 * Handle option selection.
 * @param {string} questionId
 * @param {string} letter  'A' | 'B' | 'C' | 'D'
 */
function selectOption(questionId, letter) {
  if (showingResult) return;

  answers[questionId] = letter;

  // Update UI: remove .selected from all options, add to chosen one
  const container = resolveContainer(currentQuiz && currentQuiz.containerId);
  if (!container) return;

  container.querySelectorAll('.quiz-option').forEach(el => {
    el.classList.remove('selected');
  });
  const chosen = container.querySelector(`.quiz-option[data-letter="${letter}"]`);
  if (chosen) chosen.classList.add('selected');
}

/**
 * Check the current answer, reveal correct/incorrect states and explanation.
 */
function checkAnswer() {
  if (!currentQuiz) return;

  const q = currentQuiz.questions[currentQuestionIndex];
  const userAnswer = answers[q.id];

  if (!userAnswer) {
    // Subtle shake or alert to prompt selection
    const container = resolveContainer(currentQuiz.containerId);
    if (container) {
      const optionsEl = container.querySelector('.quiz-options');
      if (optionsEl) {
        optionsEl.style.animation = 'none';
        optionsEl.offsetHeight; // reflow
        optionsEl.style.animation = '';
      }
    }
    alert('Vui lòng chọn một đáp án trước khi kiểm tra.');
    return;
  }

  showingResult = true;

  const container = resolveContainer(currentQuiz.containerId);
  if (!container) return;

  // Mark all options as revealed (disable hover/click)
  container.querySelectorAll('.quiz-option').forEach(el => {
    el.classList.add('revealed');
    const letter = el.getAttribute('data-letter');
    if (letter === q.correct) {
      el.classList.add('correct');
    } else if (letter === userAnswer && userAnswer !== q.correct) {
      el.classList.add('incorrect');
    }
  });

  // Show explanation
  const explanationEl = container.querySelector(`#quiz-explanation-${q.id}`);
  const titleEl = container.querySelector(`#quiz-explanation-title-${q.id}`);
  if (explanationEl) {
    explanationEl.classList.remove('hidden');
    if (titleEl) {
      const isCorrect = userAnswer === q.correct;
      titleEl.textContent = isCorrect ? '✅ Chính xác!' : '❌ Chưa đúng!';
      titleEl.style.color = isCorrect ? 'var(--color-completed)' : 'var(--color-error)';
      explanationEl.style.borderLeftColor = isCorrect
        ? 'var(--color-completed)'
        : 'var(--color-error)';
      explanationEl.style.backgroundColor = isCorrect
        ? 'rgba(16, 185, 129, 0.08)'
        : 'rgba(239, 68, 68, 0.08)';
    }
  }

  // Toggle buttons
  const btnCheck = container.querySelector('#btn-check');
  const btnNext = container.querySelector('#btn-next');
  if (btnCheck) btnCheck.classList.add('hidden');
  if (btnNext) btnNext.classList.remove('hidden');
}

/**
 * Advance to the next question or show results if on the last one.
 */
function nextQuestion() {
  if (!currentQuiz) return;

  if (currentQuestionIndex < currentQuiz.total - 1) {
    currentQuestionIndex++;
    showingResult = false;
    renderQuestion();
  } else {
    showResults();
  }
}

/**
 * Go back to the previous question.
 */
function prevQuestion() {
  if (!currentQuiz) return;
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showingResult = false;
    renderQuestion();
  }
}

// ─── Results ──────────────────────────────────────────────────────────────────

/**
 * Calculate score, save it and render the result screen.
 */
function showResults() {
  if (!currentQuiz) return;

  const { layerId, containerId, questions, total } = currentQuiz;

  // Calculate score
  let correct = 0;
  questions.forEach(q => {
    if (answers[q.id] === q.correct) correct++;
  });
  const scorePercent = Math.round((correct / total) * 100);
  const passed = scorePercent >= 70;

  // Persist via Progress module
  if (window.Progress && typeof window.Progress.saveQuizScore === 'function') {
    window.Progress.saveQuizScore(layerId, scorePercent);
  }

  const container = resolveContainer(containerId);
  if (!container) return;

  const passMessage = passed
    ? '<p class="text-success" style="margin-bottom:var(--space-md)">Tuyệt vời! Bạn đã vượt qua bài quiz này. 🎉</p>'
    : '<p class="text-error" style="margin-bottom:var(--space-md)">Bạn cần đạt ít nhất 70% để vượt qua. Hãy ôn lại và thử lại!</p>';

  const reviewRows = questions.map((q, i) => {
    const userAns = answers[q.id] || '—';
    const isCorrect = userAns === q.correct;
    const icon = isCorrect ? '✅' : '❌';
    return `
      <tr>
        <td style="padding:var(--space-xs) var(--space-sm);color:var(--text-muted);font-size:var(--text-xs)">${i + 1}</td>
        <td style="padding:var(--space-xs) var(--space-sm);font-size:var(--text-xs)">${escapeHtml(q.question.slice(0, 60))}…</td>
        <td style="padding:var(--space-xs) var(--space-sm);text-align:center;font-weight:700">${userAns}</td>
        <td style="padding:var(--space-xs) var(--space-sm);text-align:center;font-weight:700;color:var(--color-completed)">${q.correct}</td>
        <td style="padding:var(--space-xs) var(--space-sm);text-align:center">${icon}</td>
      </tr>`;
  }).join('');

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-result">
        <div class="quiz-result-score">${scorePercent}%</div>
        <div class="quiz-result-label">
          ${correct} / ${total} câu đúng &nbsp;·&nbsp;
          ${passed
            ? '<span class="text-success" style="font-weight:700">ĐẠT ✅</span>'
            : '<span class="text-error" style="font-weight:700">CHƯA ĐẠT ❌</span>'}
        </div>
        ${passMessage}

        <details style="text-align:left;margin-bottom:var(--space-lg)">
          <summary style="cursor:pointer;font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--space-sm)">Xem chi tiết từng câu</summary>
          <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse;font-size:var(--text-xs)">
              <thead>
                <tr style="border-bottom:1px solid var(--bg-tertiary)">
                  <th style="padding:var(--space-xs) var(--space-sm);text-align:left">#</th>
                  <th style="padding:var(--space-xs) var(--space-sm);text-align:left">Câu hỏi</th>
                  <th style="padding:var(--space-xs) var(--space-sm);text-align:center">Bạn chọn</th>
                  <th style="padding:var(--space-xs) var(--space-sm);text-align:center">Đáp án</th>
                  <th style="padding:var(--space-xs) var(--space-sm);text-align:center">Kết quả</th>
                </tr>
              </thead>
              <tbody>${reviewRows}</tbody>
            </table>
          </div>
        </details>

        <div style="display:flex;gap:var(--space-sm);justify-content:center;flex-wrap:wrap">
          <button
            class="btn btn-secondary"
            onclick="Quiz.init('${layerId}', '${typeof containerId === 'string' ? containerId : ''}', ${total})"
          >🔄 Làm lại</button>
          <button
            class="btn btn-primary"
            onclick="window.history.back()"
          >📖 Tiếp tục học</button>
        </div>
      </div>
    </div>
  `;
}

// ─── Utility ──────────────────────────────────────────────────────────────────

/**
 * Escape HTML special characters to prevent XSS.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ─── Public API ───────────────────────────────────────────────────────────────

window.Quiz = {
  init:         initQuiz,
  initMini:     initMiniQuiz,
  selectOption,
  checkAnswer,
  nextQuestion,
  prevQuestion
};
