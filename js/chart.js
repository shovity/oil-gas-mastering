/**
 * chart.js - PVS Timeline Chart with events
 * Uses Chart.js + chartjs-plugin-annotation
 */

(function() {
  'use strict';

  let chartInstance = null;
  let currentEventIndex = -1;

  /**
   * Determine prediction accuracy from reality text
   * Returns: 'correct' | 'partial' | 'incorrect' | 'pending' | null
   */
  function getPredictionResult(event) {
    if (!event.analysis || !event.analysis.reality) return null;

    const reality = event.analysis.reality.toUpperCase();

    // Check for explicit assessment keywords
    if (reality.includes('ĐANG THEO DÕI') || reality.includes('CHƯA CÓ KẾT QUẢ')) {
      return 'pending';
    }
    if (reality.includes('RẤT CHÍNH XÁC') ||
        (reality.includes('CHÍNH XÁC') && !reality.includes('ĐÚNG MỘT PHẦN') && !reality.includes('SAI'))) {
      return 'correct';
    }
    if (reality.includes('ĐÚNG MỘT PHẦN') ||
        reality.includes('ĐÚNG HƯỚNG') ||
        reality.includes('ĐÚNG VỀ NGẮN HẠN') ||
        reality.includes('SAI VỀ THỜI GIAN, ĐÚNG VỀ HƯỚNG')) {
      return 'partial';
    }
    if (reality.includes('SAI -') || reality.includes('SAI:') ||
        (reality.includes('SAI') && !reality.includes('ĐÚNG'))) {
      return 'incorrect';
    }

    return null;
  }

  /**
   * Get icon for prediction result
   */
  function getPredictionIcon(result) {
    const icons = {
      correct: '✓',
      partial: '~',
      incorrect: '✗',
      pending: '?'
    };
    return icons[result] || '';
  }

  /**
   * Calculate prediction statistics
   */
  function calculatePredictionStats(events) {
    const stats = { correct: 0, partial: 0, incorrect: 0, pending: 0, total: 0 };

    events.forEach(event => {
      const result = getPredictionResult(event);
      if (result) {
        stats[result]++;
        stats.total++;
      }
    });

    // Calculate accuracy rate (correct + partial*0.5) / total
    const accuracyRate = stats.total > 0
      ? ((stats.correct + stats.partial * 0.5) / stats.total * 100).toFixed(1)
      : 0;

    return { ...stats, accuracyRate };
  }

  /**
   * Initialize and render the timeline chart
   */
  function initChart() {
    const ctx = document.getElementById('pvs-chart');
    if (!ctx || !window.PVSData) return;

    const data = window.PVSData;

    // Prepare labels and datasets
    const labels = data.prices.map(p => formatLabel(p.date));
    const priceData = data.prices.map(p => p.price);
    const brentData = data.prices.map(p => p.brent * 500); // Scale Brent to match PVS range
    const usdvndData = data.prices.map(p => p.usdvnd); // USD/VND on secondary axis

    // Create event annotations
    const annotations = createEventAnnotations(data);

    // Destroy existing chart if any
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Set chart-inner width based on data points for horizontal scrolling
    const chartWidth = Math.max(data.prices.length * 50, 3200);
    const chartInner = ctx.closest('.chart-inner');
    if (chartInner) {
      chartInner.style.width = chartWidth + 'px';
    }
    ctx.width = chartWidth;
    ctx.height = 550;

    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'PVS (VND)',
            data: priceData,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointBackgroundColor: '#3b82f6',
            yAxisID: 'y'
          },
          {
            label: 'Brent ($/thùng x500)',
            data: brentData,
            borderColor: '#f59e0b',
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 4,
            yAxisID: 'y'
          },
          {
            label: 'USD/VND',
            data: usdvndData,
            borderColor: '#10b981',
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderDash: [8, 4],
            fill: false,
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 4,
            yAxisID: 'y2'
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#1e293b',
            titleColor: '#f1f5f9',
            bodyColor: '#94a3b8',
            borderColor: '#334155',
            borderWidth: 1,
            padding: 12,
            callbacks: {
              label: function(context) {
                if (context.dataset.label.includes('Brent')) {
                  const realValue = (context.raw / 500).toFixed(1);
                  return `Brent: $${realValue}/thùng`;
                }
                if (context.dataset.label.includes('USD')) {
                  return `USD/VND: ${context.raw.toLocaleString('vi-VN')}`;
                }
                return `PVS: ${context.raw.toLocaleString('vi-VN')}đ`;
              },
              afterBody: function(tooltipItems) {
                const index = tooltipItems[0].dataIndex;
                const date = window.PVSData.prices[index].date;
                const events = window.PVSData.events.filter(e => e.date === date);
                if (events.length > 0) {
                  return ['', '📌 Sự kiện:', ...events.map(e => `• ${e.title}`)];
                }
                return [];
              }
            }
          },
          annotation: {
            annotations: annotations
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(51, 65, 85, 0.5)',
              drawBorder: false
            },
            ticks: {
              color: '#64748b',
              font: { size: 11 },
              maxRotation: 45,
              minRotation: 45
            }
          },
          y: {
            position: 'left',
            grid: {
              color: 'rgba(51, 65, 85, 0.5)',
              drawBorder: false
            },
            ticks: {
              color: '#64748b',
              font: { size: 11 },
              stepSize: 10000,
              callback: function(value) {
                if (value > 56000) return ''; // Hide labels in annotation zone
                return value.toLocaleString('vi-VN');
              }
            },
            min: 0,
            max: 75000
          },
          y2: {
            position: 'right',
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              color: '#10b981',
              font: { size: 11 },
              callback: function(value) {
                return value.toLocaleString('vi-VN');
              }
            },
            min: 22000,
            max: 27000,
            title: {
              display: true,
              text: 'USD/VND',
              color: '#10b981',
              font: { size: 11 }
            }
          }
        },
        onClick: handleChartClick
      }
    });

    // Setup filter buttons
    setupFilters();

    // Update prediction stats display
    updatePredictionStats(data.events);
  }

  /**
   * Update prediction stats in the UI
   */
  function updatePredictionStats(events) {
    const stats = calculatePredictionStats(events);

    // Update stats in DOM if elements exist
    const correctEl = document.getElementById('stat-correct');
    const partialEl = document.getElementById('stat-partial');
    const incorrectEl = document.getElementById('stat-incorrect');
    const rateEl = document.getElementById('stat-rate');

    if (correctEl) correctEl.textContent = stats.correct;
    if (partialEl) partialEl.textContent = stats.partial;
    if (incorrectEl) incorrectEl.textContent = stats.incorrect;
    if (rateEl) rateEl.textContent = stats.accuracyRate + '%';
  }

  /**
   * Create annotation objects for events with visible labels
   */
  function createEventAnnotations(data) {
    const annotations = {};

    // Brent price zones (scaled x500)
    const brent80 = 80 * 500; // $80 = 40000
    const brent65 = 65 * 500; // $65 = 32500

    // Vùng xấu: trên $80 (fill nhẹ màu đỏ)
    annotations['zone-bad'] = {
      type: 'box',
      yMin: brent80,
      yMax: 55000,
      backgroundColor: 'rgba(239, 68, 68, 0.08)',
      borderWidth: 0,
      z: 0
    };

    // Vùng tốt: dưới $65 (fill nhẹ màu xanh)
    annotations['zone-good'] = {
      type: 'box',
      yMin: 0,
      yMax: brent65,
      backgroundColor: 'rgba(34, 197, 94, 0.08)',
      borderWidth: 0,
      z: 0
    };

    // Đường $80 Brent (đỏ - vùng xấu)
    annotations['brent-80'] = {
      type: 'line',
      yMin: brent80,
      yMax: brent80,
      borderColor: 'rgba(239, 68, 68, 0.7)',
      borderWidth: 2,
      borderDash: [8, 4],
      label: {
        display: true,
        content: 'Brent $80',
        position: 'start',
        backgroundColor: 'rgba(239, 68, 68, 0.9)',
        color: '#fff',
        font: { size: 10, weight: 'bold' },
        padding: 4
      },
      z: 1
    };

    // Đường $65 Brent (xanh - vùng tốt)
    annotations['brent-65'] = {
      type: 'line',
      yMin: brent65,
      yMax: brent65,
      borderColor: 'rgba(34, 197, 94, 0.7)',
      borderWidth: 2,
      borderDash: [8, 4],
      label: {
        display: true,
        content: 'Brent $65',
        position: 'start',
        backgroundColor: 'rgba(34, 197, 94, 0.9)',
        color: '#fff',
        font: { size: 10, weight: 'bold' },
        padding: 4
      },
      z: 1
    };

    // Calculate label Y positions with better distribution
    const labelLevels = [68000, 64000, 60000, 56000];
    let levelIndex = 0;

    data.events.forEach((event, idx) => {
      const priceIndex = data.prices.findIndex(p => p.date === event.date);
      if (priceIndex === -1) return;

      const price = data.prices[priceIndex].price;
      const color = data.impactColors[event.impact] || '#64748b';

      // Cycle through label levels to avoid overlap
      const yPosition = labelLevels[levelIndex % labelLevels.length];
      levelIndex++;

      // Vertical line from price point to label
      annotations[`line-${idx}`] = {
        type: 'line',
        xMin: priceIndex,
        xMax: priceIndex,
        yMin: price + 500,
        yMax: yPosition - 1500,
        borderColor: color,
        borderWidth: 1.5,
        borderDash: [4, 4],
        z: 5
      };

      // Point annotation at price
      annotations[`point-${idx}`] = {
        type: 'point',
        xValue: priceIndex,
        yValue: price,
        backgroundColor: color,
        borderColor: '#0f172a',
        borderWidth: 2,
        radius: 7,
        z: 15
      };

      // Label box annotation - always visible (with icon prefix and prediction result)
      const labelContent = splitLabel(event.title, 20);
      const predictionResult = getPredictionResult(event);
      const predictionIcon = getPredictionIcon(predictionResult);
      const predictionColor = {
        correct: '#10b981',
        partial: '#f59e0b',
        incorrect: '#ef4444',
        pending: '#64748b'
      }[predictionResult] || null;

      // Build label content with prediction icon
      const firstLine = getEventIcon(event.type) + ' ' + labelContent[0];
      const lastLine = labelContent.length > 1 ? labelContent[labelContent.length - 1] : labelContent[0];
      const contentLines = labelContent.length > 1
        ? [firstLine, ...labelContent.slice(1, -1), lastLine + (predictionIcon ? ' ' + predictionIcon : '')]
        : [firstLine + (predictionIcon ? ' ' + predictionIcon : '')];

      annotations[`label-${idx}`] = {
        type: 'label',
        xValue: priceIndex,
        yValue: yPosition,
        content: contentLines,
        backgroundColor: '#1e293b',
        borderColor: predictionColor || color,
        borderWidth: 2,
        borderRadius: 6,
        color: '#f1f5f9',
        font: {
          size: 10,
          weight: '600',
          lineHeight: 1.4
        },
        padding: { top: 6, bottom: 6, left: 8, right: 8 },
        textAlign: 'center',
        z: 20
      };
    });

    return annotations;
  }

  /**
   * Split label text into multiple lines
   */
  function splitLabel(text, maxLen) {
    if (text.length <= maxLen) return [text];

    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + ' ' + word).trim().length <= maxLen) {
        currentLine = (currentLine + ' ' + word).trim();
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);

    // Limit to 2 lines
    if (lines.length > 2) {
      lines[1] = lines[1].substring(0, maxLen - 2) + '..';
      lines.length = 2;
    }

    return lines;
  }

  /**
   * Get icon for event type
   */
  function getEventIcon(type) {
    const icons = {
      macro: '🌍',
      company: '🏢',
      industry: '⛽'
    };
    return icons[type] || '📌';
  }

  /**
   * Format date label
   */
  function formatLabel(dateStr) {
    const [year, month] = dateStr.split('-');
    const monthNames = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
    return `${monthNames[parseInt(month) - 1]}/${year.slice(-2)}`;
  }

  /**
   * Handle chart click to show event details
   */
  function handleChartClick(evt, elements) {
    if (!elements || elements.length === 0) return;

    const index = elements[0].index;
    const date = window.PVSData.prices[index].date;
    const events = window.PVSData.events.filter(e => e.date === date);

    if (events.length > 0) {
      showEventModal(events);
    }
  }

  /**
   * Render the event list sidebar
   */
  function renderEventList(events) {
    const container = document.getElementById('event-list');
    if (!container) return;

    const html = events.map((event, idx) => {
      const color = window.PVSData.impactColors[event.impact];
      const icon = getEventIcon(event.type);
      const typeLabel = { macro: 'Vĩ mô', company: 'Công ty', industry: 'Ngành' }[event.type] || '';

      return `
        <div class="event-item" data-index="${idx}" onclick="PVSChart.scrollToEvent(${idx})">
          <div class="event-header">
            <span class="event-icon">${icon}</span>
            <span class="event-date">${formatDateDisplay(event.date)}</span>
            <span class="event-badge" style="background-color: ${color}20; color: ${color}">${typeLabel}</span>
          </div>
          <div class="event-title">${event.title}</div>
          <div class="event-desc">${event.description}</div>
        </div>
      `;
    }).join('');

    container.innerHTML = html;
  }

  /**
   * Format date for display
   */
  function formatDateDisplay(dateStr) {
    const [year, month] = dateStr.split('-');
    return `${month}/${year}`;
  }

  /**
   * Scroll chart to specific event
   */
  function scrollToEvent(eventIndex) {
    if (!chartInstance || !window.PVSData) return;

    const event = window.PVSData.events[eventIndex];
    const priceIndex = window.PVSData.prices.findIndex(p => p.date === event.date);

    if (priceIndex === -1) return;

    // Highlight the event in the list
    document.querySelectorAll('.event-item').forEach(el => el.classList.remove('active'));
    document.querySelector(`.event-item[data-index="${eventIndex}"]`)?.classList.add('active');

    // Update annotation to highlight selected event
    const color = window.PVSData.impactColors[event.impact];

    // Flash effect on chart point
    const meta = chartInstance.getDatasetMeta(0);
    if (meta.data[priceIndex]) {
      const point = meta.data[priceIndex];
      const originalRadius = point.options.radius;

      point.options.radius = 12;
      point.options.backgroundColor = color;
      chartInstance.update('none');

      setTimeout(() => {
        point.options.radius = originalRadius;
        point.options.backgroundColor = '#3b82f6';
        chartInstance.update('none');
      }, 1000);
    }

    // Show modal with event details
    showEventModal([event]);

    currentEventIndex = eventIndex;
  }

  /**
   * Show event modal
   */
  function showEventModal(events) {
    const modal = document.getElementById('event-modal');
    const content = document.getElementById('event-modal-content');

    if (!modal || !content) return;

    const html = events.map(event => {
      const color = window.PVSData.impactColors[event.impact];
      const icon = getEventIcon(event.type);
      const impactLabel = { positive: 'Tích cực', negative: 'Tiêu cực', neutral: 'Trung tính' }[event.impact];

      // Get price data at event date
      const priceData = window.PVSData.prices.find(p => p.date === event.date);
      const priceInfo = priceData ? `
        <div class="modal-price-info">
          <div class="price-item">
            <span class="price-label">PVS</span>
            <span class="price-value">${priceData.price.toLocaleString('vi-VN')}đ</span>
          </div>
          <div class="price-item">
            <span class="price-label">Brent</span>
            <span class="price-value">$${priceData.brent}/thùng</span>
          </div>
          <div class="price-item">
            <span class="price-label">USD/VND</span>
            <span class="price-value">${priceData.usdvnd.toLocaleString('vi-VN')}</span>
          </div>
        </div>
      ` : '';

      // Check if analysis exists
      const hasAnalysis = event.analysis && event.analysis.explanation && event.analysis.prediction;

      // Get prediction result
      const predResult = getPredictionResult(event);
      const predResultLabel = {
        correct: '✓ CHÍNH XÁC',
        partial: '~ ĐÚNG MỘT PHẦN',
        incorrect: '✗ SAI',
        pending: '? ĐANG THEO DÕI'
      }[predResult] || '';
      const predResultClass = {
        correct: 'prediction-correct',
        partial: 'prediction-partial',
        incorrect: 'prediction-incorrect',
        pending: 'prediction-pending'
      }[predResult] || '';

      const realitySection = hasAnalysis && event.analysis.reality ? `
          <div class="analysis-section reality">
            <h4 class="analysis-title">
              ✅ Thực tế
              ${predResultLabel ? `<span class="prediction-badge ${predResultClass}">${predResultLabel}</span>` : ''}
            </h4>
            <div class="analysis-content">${event.analysis.reality}</div>
          </div>
      ` : '';

      const analysisSection = hasAnalysis ? `
        <div class="modal-analysis">
          <div class="analysis-section">
            <h4 class="analysis-title">📊 Phân tích sự kiện</h4>
            <div class="analysis-content">${event.analysis.explanation}</div>
          </div>
          <div class="analysis-section prediction">
            <h4 class="analysis-title">🔮 Dự đoán giá PVS</h4>
            <div class="analysis-content">${event.analysis.prediction}</div>
          </div>
          ${realitySection}
        </div>
      ` : '';

      return `
        <div class="modal-event">
          <div class="modal-event-header">
            <span class="modal-event-icon">${icon}</span>
            <span class="modal-event-date">${formatDateDisplay(event.date)}</span>
            <span class="modal-event-impact" style="background-color: ${color}20; color: ${color}">
              ${impactLabel}
            </span>
          </div>
          <h3 class="modal-event-title">${event.title}</h3>
          <p class="modal-event-desc">${event.description}</p>
          ${priceInfo}
          ${analysisSection}
        </div>
      `;
    }).join('');

    content.innerHTML = html;
    modal.classList.add('show');
  }

  /**
   * Close event modal
   */
  function closeModal() {
    const modal = document.getElementById('event-modal');
    if (modal) {
      modal.classList.remove('show');
    }
  }

  /**
   * Setup filter buttons
   */
  function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        filterEvents(filter);
      });
    });
  }

  // Track which prediction results are visible
  const visiblePredictions = { correct: true, partial: true, incorrect: true, pending: true };

  /**
   * Setup legend toggle functionality
   */
  function setupLegendToggle() {
    const legendItems = document.querySelectorAll('.legend-item.clickable');

    legendItems.forEach(item => {
      item.addEventListener('click', () => {
        const toggleType = item.dataset.toggle;

        if (toggleType === 'dataset') {
          // Toggle dataset visibility
          const datasetIndex = parseInt(item.dataset.index);
          toggleDataset(datasetIndex, item);
        } else if (toggleType === 'prediction') {
          // Toggle prediction result visibility
          const result = item.dataset.result;
          togglePrediction(result, item);
        } else if (toggleType === 'zone') {
          // Toggle zone visibility
          const zone = item.dataset.zone;
          toggleZone(zone, item);
        }
      });
    });
  }

  /**
   * Toggle dataset visibility
   */
  function toggleDataset(index, legendItem) {
    if (!chartInstance) return;

    const meta = chartInstance.getDatasetMeta(index);
    meta.hidden = !meta.hidden;

    legendItem.classList.toggle('active', !meta.hidden);
    chartInstance.update('none');
  }

  /**
   * Toggle prediction result visibility
   */
  function togglePrediction(result, legendItem) {
    if (!chartInstance || !window.PVSData) return;

    visiblePredictions[result] = !visiblePredictions[result];
    legendItem.classList.toggle('active', visiblePredictions[result]);

    const data = window.PVSData;
    const annotations = chartInstance.options.plugins.annotation.annotations;

    data.events.forEach((event, idx) => {
      const predResult = getPredictionResult(event);

      // Check if this event should be visible based on prediction filter
      const shouldShow = predResult ? visiblePredictions[predResult] : true;

      const lineKey = `line-${idx}`;
      const pointKey = `point-${idx}`;
      const labelKey = `label-${idx}`;

      if (annotations[lineKey]) {
        annotations[lineKey].display = shouldShow;
      }
      if (annotations[pointKey]) {
        annotations[pointKey].display = shouldShow;
      }
      if (annotations[labelKey]) {
        annotations[labelKey].display = shouldShow;
      }
    });

    chartInstance.update('none');
  }

  /**
   * Toggle Brent zone visibility
   */
  function toggleZone(zone, legendItem) {
    if (!chartInstance) return;

    const annotations = chartInstance.options.plugins.annotation.annotations;
    const isActive = legendItem.classList.contains('active');
    const newState = !isActive;

    legendItem.classList.toggle('active', newState);

    if (zone === 'brent') {
      if (annotations['zone-good']) annotations['zone-good'].display = newState;
      if (annotations['zone-bad']) annotations['zone-bad'].display = newState;
      if (annotations['brent-80']) annotations['brent-80'].display = newState;
      if (annotations['brent-65']) annotations['brent-65'].display = newState;
    }

    chartInstance.update('none');
  }

  /**
   * Filter events by type - updates chart annotations
   */
  function filterEvents(filter) {
    if (!chartInstance || !window.PVSData) return;

    const data = window.PVSData;
    const annotations = chartInstance.options.plugins.annotation.annotations;

    data.events.forEach((event, idx) => {
      const matchesFilter = filter === 'all' ||
                            event.type === filter ||
                            event.impact === filter;

      // Show/hide line, point, and label annotations for this event
      const lineKey = `line-${idx}`;
      const pointKey = `point-${idx}`;
      const labelKey = `label-${idx}`;

      if (annotations[lineKey]) {
        annotations[lineKey].display = matchesFilter;
      }
      if (annotations[pointKey]) {
        annotations[pointKey].display = matchesFilter;
      }
      if (annotations[labelKey]) {
        annotations[labelKey].display = matchesFilter;
      }
    });

    chartInstance.update('none');
  }

  /**
   * Navigate to previous/next event
   */
  function navigateEvent(direction) {
    const events = window.PVSData.events;
    const newIndex = currentEventIndex + direction;

    if (newIndex >= 0 && newIndex < events.length) {
      scrollToEvent(newIndex);
    }
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initChart();
    setupLegendToggle();

    // Hide scroll hint after user scrolls
    const chartWrapper = document.querySelector('.chart-wrapper');
    const scrollHint = document.querySelector('.chart-scroll-hint');
    if (chartWrapper && scrollHint) {
      chartWrapper.addEventListener('scroll', function() {
        scrollHint.style.display = 'none';
      }, { once: true });
    }
  });

  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateEvent(-1);
    if (e.key === 'ArrowRight') navigateEvent(1);
  });

  // Public API
  window.PVSChart = {
    init: initChart,
    scrollToEvent: scrollToEvent,
    closeModal: closeModal,
    navigateEvent: navigateEvent
  };

})();
