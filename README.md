# Oil & Gas Mastering

Ứng dụng học về ngành dầu khí Việt Nam trên thị trường chứng khoán.

## Nội dung khóa học

### Bài học (8 layers)

| Layer | Chủ đề |
|-------|--------|
| 0 | Kiến thức cơ bản |
| 1 | Hiểu ngành - Chuỗi giá trị dầu khí |
| 2 | Đọc số - Metrics quan trọng |
| 3 | Chu kỳ ngành |
| 4 | Yếu tố vĩ mô |
| 5 | Định giá cổ phiếu |
| 6 | Tư vấn đầu tư |
| 7 | Phân tích chuyên sâu |

### Case Studies

- **PVD** - Khoan dầu khí (Upstream)
- **GAS** - Phân phối khí
- **BSR** - Lọc dầu Dung Quất
- **DPM** - Đạm Phú Mỹ (Phân bón)

### Quiz

Bài test kiến thức sau mỗi bài học.

## Cài đặt & Chạy

```bash
# Cài dependencies
yarn install

# Chạy development server
yarn start
```

Mở trình duyệt tại `http://localhost:3000`

## Cấu trúc

```
oil-gas-mastering/
├── index.html          # Entry point
├── css/                # Stylesheets
├── js/                 # Application logic
│   ├── app.js          # Main app
│   ├── progress.js     # Progress tracking
│   └── quiz.js         # Quiz handling
├── lessons/            # Bài học HTML
├── quizzes/            # Quiz data
├── cases/              # Case studies
├── docs/               # Documentation
└── knowledge.md        # Knowledge base
```

## License

MIT
