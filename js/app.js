/**
 * app.js - Navigation, sidebar rendering, and dashboard content
 * Depends on window.Progress (progress.js)
 * Exposed globally as window.App
 */

// ─── Page Detection ───────────────────────────────────────────────────────────

/**
 * Extract filename from window.location.pathname.
 * Returns 'index.html' as default for root paths.
 * Handles URLs with or without .html extension.
 * @returns {string}
 */
function getCurrentPage() {
  const pathname = window.location.pathname;
  const parts = pathname.split('/');
  const filename = parts[parts.length - 1];
  // Treat empty string or root paths as index.html
  if (!filename || filename === '') {
    return 'index.html';
  }
  // If no extension, append .html (e.g., /pvs-timeline -> pvs-timeline.html)
  if (!filename.includes('.')) {
    return filename + '.html';
  }
  return filename;
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

/**
 * Determine the nav-item status icon for a layer.
 * ○ = not started, ► = in progress, ✓ = completed
 * @param {string} layerId  e.g. "layer0"
 * @returns {{ icon: string, cssClass: string }}
 */
function getLayerStatus(layerId) {
  const { completed, total } = Progress.getLayerProgress(layerId);
  if (completed === 0) {
    return { icon: '○', cssClass: '' };
  }
  if (completed >= total) {
    return { icon: '✓', cssClass: 'completed' };
  }
  return { icon: '►', cssClass: 'in-progress' };
}

/**
 * Determine nav-item status for a case study.
 * @param {string} caseId  e.g. "pvd"
 * @returns {{ icon: string, cssClass: string }}
 */
function getCaseStatus(caseId) {
  const progress = Progress.loadProgress();
  if (progress.cases[caseId]) {
    return { icon: '✓', cssClass: 'completed' };
  }
  return { icon: '○', cssClass: '' };
}

/**
 * Build and inject the sidebar navigation.
 * Sections: Layers 0-7, Case Studies, Tools
 */
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;

  const currentPage = getCurrentPage();
  const html = [];

  // ── Curriculum layers ────────────────────────────────────────────────────
  html.push('<div class="nav-section">');
  html.push('<div class="nav-section-title">Chương trình học</div>');

  Object.entries(Progress.CURRICULUM).forEach(([layerId, layer]) => {
    const { icon: statusIcon, cssClass } = getLayerStatus(layerId);
    const isActive = currentPage === layer.file.split('/').pop();
    const activeClass = isActive ? ' active' : '';
    const statusClass = cssClass ? ` ${cssClass}` : '';

    html.push(
      `<a href="${layer.file}" class="nav-item${activeClass}${statusClass}">` +
        `<span class="nav-item-status">${statusIcon}</span>` +
        `<span class="nav-item-text">${layer.icon} ${layer.title}</span>` +
      `</a>`
    );
  });

  html.push('</div>');

  // ── Case studies ─────────────────────────────────────────────────────────
  html.push('<div class="nav-section">');
  html.push('<div class="nav-section-title">Case Studies</div>');

  Object.entries(Progress.CASES).forEach(([caseId, cs]) => {
    const { icon: statusIcon, cssClass } = getCaseStatus(caseId);
    const isActive = currentPage === cs.file.split('/').pop();
    const activeClass = isActive ? ' active' : '';
    const statusClass = cssClass ? ` ${cssClass}` : '';

    html.push(
      `<a href="${cs.file}" class="nav-item${activeClass}${statusClass}">` +
        `<span class="nav-item-status">${statusIcon}</span>` +
        `<span class="nav-item-text">${cs.icon} ${cs.title}</span>` +
      `</a>`
    );
  });

  html.push('</div>');

  // ── Analysis Tools ─────────────────────────────────────────────────────────
  html.push('<div class="nav-section">');
  html.push('<div class="nav-section-title">Phân tích</div>');

  // PVS Timeline link
  const isPVSTimeline = currentPage === 'pvs-timeline.html';
  html.push(
    `<a href="/pvs-timeline.html" class="nav-item${isPVSTimeline ? ' active' : ''}">` +
      `<span class="nav-item-status">📈</span>` +
      `<span class="nav-item-text">PVS Timeline</span>` +
    `</a>`
  );

  html.push('</div>');

  // ── Tools ─────────────────────────────────────────────────────────────────
  html.push('<div class="nav-section">');
  html.push('<div class="nav-section-title">Công cụ</div>');

  // Dashboard link
  const isDashboard = currentPage === 'index.html';
  html.push(
    `<a href="/index.html" class="nav-item${isDashboard ? ' active' : ''}">` +
      `<span class="nav-item-status">🏠</span>` +
      `<span class="nav-item-text">Dashboard</span>` +
    `</a>`
  );

  // Export Progress
  html.push(
    `<a href="#" class="nav-item" onclick="Progress.exportProgress(); return false;">` +
      `<span class="nav-item-status">⬇</span>` +
      `<span class="nav-item-text">Export Tiến độ</span>` +
    `</a>`
  );

  // Import Progress (hidden file input + label)
  html.push(
    `<label class="nav-item" style="cursor:pointer;">` +
      `<span class="nav-item-status">⬆</span>` +
      `<span class="nav-item-text">Import Tiến độ</span>` +
      `<input type="file" accept=".json,application/json" style="display:none;" onchange="handleImport(this)">` +
    `</label>`
  );

  html.push('</div>');

  nav.innerHTML = html.join('');
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

/**
 * Update the sidebar footer progress bar and label with overall completion %.
 */
function updateProgressBar() {
  const percent = Progress.calculateProgress();

  const textEl = document.getElementById('progress-text');
  if (textEl) {
    textEl.textContent = `${percent}%`;
  }

  const fillEl = document.getElementById('progress-bar-fill');
  if (fillEl) {
    fillEl.style.width = `${percent}%`;
  }
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

/**
 * Render the dashboard content into #main-content.
 * Only executes when the current page is index.html.
 */
function renderDashboard() {
  if (getCurrentPage() !== 'index.html') return;

  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const stats = Progress.getStats();
  const nextLesson = Progress.findNextLesson();

  // ── Continue Learning card ───────────────────────────────────────────────
  let continueLearningHtml = '';
  if (nextLesson) {
    // Find which layer this lesson belongs to
    let nextLayerTitle = '';
    let nextLayerFile = '#';
    Object.entries(Progress.CURRICULUM).forEach(([, layer]) => {
      if (layer.lessons.includes(nextLesson)) {
        nextLayerTitle = layer.title;
        nextLayerFile = layer.file;
      }
    });
    continueLearningHtml = `
      <div class="card continue-card">
        <div class="card-header">
          <span class="card-icon">▶</span>
          <h3 class="card-title">Tiếp tục học</h3>
        </div>
        <div class="card-body">
          <p class="continue-lesson">Bài tiếp theo: <strong>${nextLesson}</strong></p>
          <p class="continue-layer">${nextLayerTitle}</p>
          <a href="${nextLayerFile}" class="btn btn-primary">Học ngay →</a>
        </div>
      </div>`;
  } else {
    continueLearningHtml = `
      <div class="card continue-card">
        <div class="card-header">
          <span class="card-icon">🎉</span>
          <h3 class="card-title">Hoàn thành!</h3>
        </div>
        <div class="card-body">
          <p>Bạn đã hoàn thành toàn bộ chương trình học!</p>
        </div>
      </div>`;
  }

  // ── Stats grid ───────────────────────────────────────────────────────────
  const statsHtml = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${stats.lessonsCompleted}</div>
        <div class="stat-label">Bài học hoàn thành</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.quizzesPassed}</div>
        <div class="stat-label">Quiz đạt yêu cầu</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.casesCompleted}</div>
        <div class="stat-label">Case Studies xong</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.totalTime}h</div>
        <div class="stat-label">Tổng thời gian</div>
      </div>
    </div>`;

  // ── Layer progress bars ───────────────────────────────────────────────────
  const layerBarsHtml = Object.entries(Progress.CURRICULUM).map(([layerId, layer]) => {
    const { completed, total, percent } = Progress.getLayerProgress(layerId);
    return `
      <div class="layer-progress-item">
        <div class="layer-progress-header">
          <span class="layer-progress-title">${layer.icon} ${layer.title}</span>
          <span class="layer-progress-count">${completed}/${total}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${percent}%"></div>
        </div>
      </div>`;
  }).join('');

  // ── Quick actions ─────────────────────────────────────────────────────────
  const actionsHtml = `
    <div class="quick-actions">
      <button class="btn btn-secondary" onclick="Progress.exportProgress()">⬇ Export Tiến độ</button>
      <button class="btn btn-danger" onclick="if(Progress.resetProgress()) location.reload();">🗑 Reset Tiến độ</button>
    </div>`;

  // ── Assemble ──────────────────────────────────────────────────────────────
  mainContent.innerHTML = `
    <div class="dashboard">
      <div class="dashboard-header">
        <h1 class="dashboard-title">Oil &amp; Gas Mastering</h1>
        <p class="dashboard-subtitle">Chào mừng bạn trở lại! Hãy tiếp tục hành trình chinh phục thị trường dầu khí.</p>
      </div>

      ${continueLearningHtml}

      <section class="dashboard-section">
        <h2 class="section-title">Tổng quan tiến độ</h2>
        ${statsHtml}
      </section>

      <section class="dashboard-section">
        <h2 class="section-title">Tiến độ từng lớp</h2>
        <div class="layer-progress-list">
          ${layerBarsHtml}
        </div>
      </section>

      <section class="dashboard-section">
        <h2 class="section-title">Công cụ</h2>
        ${actionsHtml}
      </section>
    </div>`;
}

// ─── Import Handler ───────────────────────────────────────────────────────────

/**
 * Handle import file input change event.
 * Reads the selected JSON file and imports it via Progress.importProgress().
 * @param {HTMLInputElement} input
 */
function handleImport(input) {
  const file = input.files && input.files[0];
  if (!file) return;

  Progress.importProgress(file)
    .then(() => {
      alert('Import thành công! Trang sẽ được tải lại.');
      location.reload();
    })
    .catch((err) => {
      alert('Import thất bại: ' + err.message);
      // Reset the input so the same file can be re-selected
      input.value = '';
    });
}

// Make available globally (required by inline onclick in renderSidebar)
window.handleImport = handleImport;

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  updateProgressBar();
  renderDashboard();
  Progress.updateVisitTime(1);
});

// ─── Public API ───────────────────────────────────────────────────────────────

window.App = {
  renderSidebar,
  updateProgressBar,
  getCurrentPage
};
