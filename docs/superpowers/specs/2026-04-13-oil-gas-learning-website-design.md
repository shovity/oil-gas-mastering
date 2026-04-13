# Oil & Gas Mastering - Website Học Tập Ngành Dầu Khí VN

> **Ngày tạo:** 2026-04-13
> **Mục đích:** Thiết kế website học tập giúp người dùng trở thành chuyên gia phân tích chứng khoán ngành dầu khí Việt Nam
> **Trạng thái:** Đã phê duyệt, sẵn sàng implement

---

## 1. Tổng quan

### 1.1 Mục tiêu
Xây dựng website học tập offline (chạy local) giúp người mới bắt đầu trở thành analyst/tư vấn chuyên nghiệp về chứng khoán ngành dầu khí Việt Nam trong 8-10 tuần.

### 1.2 Đối tượng người dùng
- **Trình độ:** Mới bắt đầu, chưa có kinh nghiệm đầu tư và chưa biết về ngành dầu khí
- **Mục tiêu:** Trở thành analyst/tư vấn chuyên nghiệp
- **Thời gian cam kết:** 15+ giờ/tuần (intensive)
- **Thiết bị:** Desktop/Laptop

### 1.3 Yêu cầu kỹ thuật
- HTML/CSS/JavaScript thuần (vanilla)
- Chạy local, mở file trực tiếp trong browser
- Không cần server, không cần đăng nhập
- Lưu tiến độ bằng localStorage

---

## 2. Kiến trúc

### 2.1 Phương án đã chọn: Hybrid
Mỗi Lớp kiến thức (Layer) = 1 file HTML riêng biệt, cân bằng giữa tổ chức rõ ràng và số lượng file hợp lý.

### 2.2 Cấu trúc thư mục

```
oil-gas-mastering/
├── index.html                    # Trang chủ + Dashboard
├── css/
│   └── style.css                 # CSS chung (dark theme)
├── js/
│   ├── app.js                    # Logic điều hướng, sidebar
│   ├── quiz.js                   # Hệ thống quiz
│   └── progress.js               # Tracking tiến độ (localStorage)
├── lessons/
│   ├── layer-0-basics.html       # Lớp 0: Kiến thức CK cơ bản
│   ├── layer-1-industry.html     # Lớp 1: Hiểu ngành
│   ├── layer-2-metrics.html      # Lớp 2: Đọc số
│   ├── layer-3-cycle.html        # Lớp 3: Hiểu chu kỳ
│   ├── layer-4-macro.html        # Lớp 4: Hiểu vĩ mô
│   ├── layer-5-valuation.html    # Lớp 5: Định giá
│   ├── layer-6-advisory.html     # Lớp 6: Tư vấn
│   └── layer-7-analyst.html      # Lớp 7: Kỹ năng Analyst
├── quizzes/
│   └── quiz-data.js              # Ngân hàng ~200 câu hỏi
├── cases/
│   ├── case-pvd.html             # Case study: PV Drilling (Upstream)
│   ├── case-gas.html             # Case study: GAS (Midstream)
│   ├── case-dpm.html             # Case study: Đạm Phú Mỹ (Phân bón)
│   └── case-bsr.html             # Case study: BSR (Lọc dầu)
├── assets/
│   └── images/                   # Infographic, biểu đồ
├── docs/                         # Tài liệu thiết kế
└── knowledge.md                  # Tài liệu gốc (reference)
```

**Tổng số files:** ~15-20 files

---

## 3. Giao diện (UI/UX)

### 3.1 Layout: Sidebar cố định

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] Oil & Gas Mastering                                 │
├──────────────┬──────────────────────────────────────────────┤
│              │                                              │
│  SIDEBAR     │              CONTENT AREA                    │
│  (250px)     │                                              │
│              │  ┌────────────────────────────────────────┐  │
│  - Lộ trình  │  │  Breadcrumb: Lớp 2 > 2.3 Đọc số       │  │
│  - Progress  │  │                                        │  │
│  - Quiz      │  │  [Nội dung bài học]                    │  │
│  - Cases     │  │                                        │  │
│              │  │  [Quiz section]                        │  │
│  ──────────  │  │                                        │  │
│  Tiến độ:    │  │  [← Bài trước]  [Bài tiếp →]          │  │
│  ████░░ 35%  │  └────────────────────────────────────────┘  │
│              │                                              │
└──────────────┴──────────────────────────────────────────────┘
```

### 3.2 Theme: Dark Mode

```css
/* Màu chính */
--bg-primary: #0f172a;      /* Nền chính */
--bg-secondary: #1e293b;    /* Nền card, sidebar */
--text-primary: #f1f5f9;    /* Text chính */
--text-secondary: #94a3b8;  /* Text phụ */
--border: #334155;          /* Viền */

/* Màu accent theo trạng thái */
--color-completed: #10b981; /* Xanh lá - Hoàn thành */
--color-current: #3b82f6;   /* Xanh dương - Đang học */
--color-quiz: #f59e0b;      /* Cam - Quiz/Test */
--color-case: #8b5cf6;      /* Tím - Case Study */
--color-locked: #64748b;    /* Xám - Chưa mở khóa */
```

### 3.3 Responsive
- Tối ưu cho màn hình >= 1024px
- Sidebar có thể collapse trên màn hình nhỏ hơn (optional)

---

## 4. Lộ trình học tập

### 4.1 Tổng quan (8-10 tuần)

| Giai đoạn | Tuần | Lớp | Nội dung | Mục tiêu |
|-----------|------|-----|----------|----------|
| **1. Nền tảng** | 1-2 | 0, 1 | CK cơ bản + Hiểu ngành | Nắm được bức tranh tổng quan |
| **2. Phân tích** | 3-5 | 2, 3 | Đọc số + Hiểu chu kỳ | Biết đọc và phân tích BCTC |
| **3. Vĩ mô** | 6-7 | 4, 5 | Vĩ mô + Định giá | Hiểu tác động vĩ mô, định giá |
| **4. Tư vấn** | 8-10 | 6, 7 | Tư vấn + Kỹ năng Analyst | Có thể tư vấn và viết báo cáo |

### 4.2 Chi tiết từng Lớp

#### Lớp 0: Kiến thức chứng khoán cơ bản (Bổ sung)
> *Dành cho người mới bắt đầu, chưa biết gì về chứng khoán*

- 0.1 Chứng khoán là gì? Thị trường hoạt động như thế nào?
- 0.2 Đọc hiểu báo cáo tài chính cơ bản (Bảng CĐKT, KQKD, LCTT)
- 0.3 Các chỉ số tài chính quan trọng (P/E, P/B, ROE, EPS, Dividend Yield...)
- 0.4 Cách đặt lệnh mua/bán, các loại lệnh
- **Quiz:** Kiểm tra nền tảng (15 câu)

#### Lớp 1: Hiểu ngành dầu khí
> *Nguồn: knowledge.md Lớp 1 + Research bổ sung*

- 1.1 Chuỗi giá trị: Upstream → Midstream → Downstream
- 1.2 Phân loại doanh nghiệp (PVD, PVS, GAS, BSR, PLX, DPM, DCM...)
- 1.3 Ai quyết định luật chơi (PVN, Bộ Công Thương, OPEC+)
- 1.4 Đặc thù ngành dầu khí Việt Nam
- 1.5 Mùa vụ của từng phân khúc
- **Quiz:** 20 câu + Bài tập phân loại 10 mã cổ phiếu

#### Lớp 2: Đọc số - Metrics & BCTC
> *Nguồn: knowledge.md Lớp 2 + Research bổ sung*

- 2.1 Metrics Tier 1: Giá dầu Brent, sản lượng, crack spread, giá khí, giá urê
- 2.2 Metrics Tier 2 & 3: Backlog, CAPEX, freight rate, GRM, tỷ giá
- 2.3 Cách đọc số KHÁC NHAU cho từng phân khúc
- 2.4 Bẫy phổ biến khi đọc BCTC dầu khí
- 2.5 Checklist đánh giá BCTC dầu khí
- **Quiz:** 25 câu + Thực hành phân tích BCTC thật

#### Lớp 3: Hiểu chu kỳ
> *Nguồn: knowledge.md Lớp 3 + Research bổ sung*

- 3.1 Nguyên tắc cốt lõi: Dầu khí là ngành chu kỳ
- 3.2 Chu kỳ giá dầu ↔ Chu kỳ cổ phiếu (upstream vs downstream)
- 3.3 Bốn giai đoạn chu kỳ Upstream (Đáy → Hồi phục → Tăng trưởng → Đỉnh)
- 3.4 Tín hiệu sớm nhận biết đáy/đỉnh
- 3.5 Chu kỳ đặc thù phân bón (DPM, DCM)
- **Quiz:** 20 câu + Case nhận diện giai đoạn chu kỳ

#### Lớp 4: Hiểu vĩ mô
> *Nguồn: knowledge.md Lớp 4 + Research bổ sung*

- 4.1 Các yếu tố vĩ mô ảnh hưởng ngành dầu khí
- 4.2 Ma trận ảnh hưởng: Ai được/mất khi X xảy ra
- 4.3 Động lực tăng trưởng (cấu trúc & chu kỳ)
- 4.4 Rủi ro (cấu trúc & chu kỳ)
- 4.5 Câu hỏi agent phải trả lời được
- **Quiz:** 20 câu + Bài tập phân tích kịch bản

#### Lớp 5: Định giá
> *Nguồn: knowledge.md Lớp 5 + Research bổ sung*

- 5.1 Bẫy P/E với ngành chu kỳ (P/E thấp ≠ rẻ)
- 5.2 Phương pháp định giá theo từng phân khúc
- 5.3 Normalized P/E: Cách tính và áp dụng
- 5.4 Dividend Yield cho phân bón (DPM, DCM)
- 5.5 Backlog/Market Cap cho dịch vụ (PVS, PVD)
- **Quiz:** 20 câu + Thực hành định giá 3 mã cổ phiếu

#### Lớp 6: Tư vấn
> *Nguồn: knowledge.md Lớp 6 + Research bổ sung*

- 6.1 Phân biệt loại rủi ro: Biến động vs Chu kỳ vs Cấu trúc
- 6.2 Tư vấn theo profile NĐT (dài hạn, trung hạn, ngắn hạn)
- 6.3 Khi nào VÀO / THOÁT Upstream (tín hiệu)
- 6.4 Ngôn ngữ cho NĐT ít kinh nghiệm (dịch thuật ngữ)
- 6.5 Các câu đánh giá mẫu
- **Quiz:** 20 câu + Role-play tư vấn 3 profile khác nhau

#### Lớp 7: Kỹ năng Analyst (Bổ sung)
> *Dành cho mục tiêu làm analyst chuyên nghiệp*

- 7.1 Cách viết báo cáo phân tích chuyên nghiệp
- 7.2 Cấu trúc báo cáo chuẩn (Executive Summary, Thesis, Valuation...)
- 7.3 Nguồn dữ liệu: Lấy số liệu ở đâu? (CafeF, VietstockFinance, EIA...)
- 7.4 Cập nhật tin tức ngành (nguồn tin, cách filter)
- 7.5 Đạo đức nghề nghiệp
- **Final Project:** Viết báo cáo phân tích hoàn chỉnh cho 1 mã cổ phiếu

### 4.3 Nguồn nội dung

Mỗi bài học sẽ được xây dựng từ:

1. **knowledge.md** - Làm khung sườn chính
2. **Research bổ sung** - Tìm kiếm thêm từ internet:
   - Ví dụ thực tế, số liệu mới nhất
   - Case study từ tin tức, sự kiện thực
   - Báo cáo phân tích từ các CTCK
   - Dữ liệu từ CafeF, VietstockFinance, PVN...
3. **Tham khảo thêm** - Mỗi bài có section link hữu ích

---

## 5. Hệ thống Quiz & Test

### 5.1 Loại câu hỏi

| Loại | Mô tả | Ví dụ |
|------|-------|-------|
| **Trắc nghiệm** | Chọn 1 đáp án đúng trong 4 | "Giá dầu tăng ảnh hưởng thế nào...?" |
| **Phân loại** | Kéo thả/matching items | "Phân loại các mã vào Upstream/Downstream" |
| **Tình huống** | Đọc scenario, viết phân tích | "OPEC+ cắt giảm, bạn tư vấn gì?" |
| **Tính toán** | Điền số, tính metrics | "Normalized P/E của DPM là bao nhiêu?" |

### 5.2 Cấp độ kiểm tra

| Cấp độ | Khi nào | Số câu | Điểm đạt |
|--------|---------|--------|----------|
| **Mini Quiz** | Sau mỗi bài | 5-10 câu | 70% |
| **Layer Test** | Cuối mỗi Lớp | 20-30 câu | 75% |
| **Final Exam** | Cuối khóa | 50 câu + 1 case | 80% |

### 5.3 Tính năng Quiz

- **Giải thích đáp án:** Sau mỗi câu hiển thị giải thích chi tiết
- **Làm lại:** Có thể làm lại quiz bất kỳ lúc nào
- **Lịch sử điểm:** Lưu điểm các lần làm
- **Random:** Câu hỏi được random từ ngân hàng ~200 câu

### 5.4 Cấu trúc dữ liệu Quiz

```javascript
// quizzes/quiz-data.js
const quizData = {
  layer1: [
    {
      id: "l1q1",
      type: "multiple-choice",
      question: "Upstream trong chuỗi giá trị dầu khí bao gồm?",
      options: [
        "A. Thăm dò và khai thác",
        "B. Vận chuyển và lưu trữ",
        "C. Lọc dầu và phân phối",
        "D. Bán lẻ xăng dầu"
      ],
      correct: "A",
      explanation: "Upstream (thượng nguồn) là giai đoạn đầu tiên..."
    },
    // ... more questions
  ],
  // ... more layers
};
```

---

## 6. Case Studies

### 6.1 Danh sách Case

| Case | Công ty | Phân khúc | Mục đích học |
|------|---------|-----------|--------------|
| Case 1 | **PVD** (PV Drilling) | Upstream | Phân tích DN khoan, phụ thuộc giá dầu |
| Case 2 | **GAS** | Midstream | Phân tích DN khí, hợp đồng dài hạn |
| Case 3 | **DPM** (Đạm Phú Mỹ) | Phân bón | Phân tích DN phân bón, chu kỳ riêng |
| Case 4 | **BSR** | Downstream | Phân tích lọc dầu, crack spread |

### 6.2 Cấu trúc mỗi Case

1. **Giới thiệu công ty** - Lịch sử, ngành nghề, vị thế
2. **Phân tích cơ bản** - BCTC, metrics quan trọng
3. **Phân tích chu kỳ** - Đang ở giai đoạn nào
4. **Yếu tố vĩ mô** - Ảnh hưởng thế nào
5. **Định giá** - Áp dụng phương pháp phù hợp
6. **Kết luận & Khuyến nghị** - Tổng hợp

---

## 7. Progress Tracking

### 7.1 Tính năng

| Tính năng | Mô tả |
|-----------|-------|
| **Dashboard** | Tổng quan tiến độ, nút "Tiếp tục học" |
| **Checklist** | Đánh dấu từng bài đã học |
| **Progress bar** | Hiển thị % hoàn thành tổng và từng Lớp |
| **Điểm Quiz** | Lưu và hiển thị điểm các bài quiz |
| **Thời gian học** | Ước tính thời gian đã học |
| **Export/Import** | Backup progress ra file JSON |

### 7.2 Cấu trúc localStorage

```javascript
// Key: "oilgas_progress"
{
  "progress": {
    "layer0": { 
      "completed": ["0.1", "0.2", "0.3"], 
      "quizScores": { "0.1": 8, "0.2": 9 },
      "layerTest": 85
    },
    "layer1": { 
      "completed": ["1.1", "1.2"], 
      "current": "1.3",
      "quizScores": { "1.1": 10, "1.2": 7 }
    }
    // ... more layers
  },
  "cases": {
    "pvd": { "completed": true, "notes": "..." },
    "gas": { "completed": false }
  },
  "stats": {
    "totalTime": 720,           // phút
    "lastVisit": "2026-04-13",
    "startDate": "2026-04-01"
  },
  "finalExam": {
    "completed": false,
    "score": null
  }
}
```

### 7.3 Export/Import

```javascript
// Export
function exportProgress() {
  const data = localStorage.getItem('oilgas_progress');
  const blob = new Blob([data], { type: 'application/json' });
  // Download file
}

// Import
function importProgress(file) {
  // Read file, validate, save to localStorage
}
```

---

## 8. Tổng kết files cần tạo

| # | File | Mô tả | Ước tính |
|---|------|-------|----------|
| 1 | `index.html` | Dashboard + Navigation | 200 lines |
| 2 | `css/style.css` | Styles chung | 500 lines |
| 3 | `js/app.js` | Logic chính | 300 lines |
| 4 | `js/quiz.js` | Hệ thống quiz | 400 lines |
| 5 | `js/progress.js` | Tracking | 200 lines |
| 6-13 | `lessons/layer-*.html` | 8 file bài học | 500-800 lines mỗi file |
| 14-17 | `cases/case-*.html` | 4 case studies | 400-600 lines mỗi file |
| 18 | `quizzes/quiz-data.js` | Ngân hàng câu hỏi | 1000+ lines |

**Tổng ước tính:** ~10,000-15,000 lines code

---

## 9. Ghi chú implementation

### 9.1 Nguyên tắc nội dung
- Dùng `knowledge.md` làm khung sườn
- Research thêm ví dụ, số liệu, case study từ internet
- Mỗi bài có section "Tham khảo thêm" với links
- Ngôn ngữ đơn giản, dễ hiểu cho người mới

### 9.2 Quy ước code
- HTML semantic, accessible
- CSS BEM naming hoặc utility classes
- JS vanilla, ES6+, no framework
- Comment đầy đủ cho maintainability

### 9.3 Testing
- Test trên Chrome, Firefox, Edge
- Test localStorage persistence
- Test quiz scoring logic
- Test navigation flow

---

## 10. Changelog

| Ngày | Thay đổi |
|------|----------|
| 2026-04-13 | Tạo spec ban đầu |
| 2026-04-13 | Bỏ tính năng Streak theo yêu cầu |
| 2026-04-13 | Thêm yêu cầu research bổ sung từ internet |
