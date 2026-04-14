/**
 * pvs-data.js - Dữ liệu cổ phiếu PVS và các sự kiện (2018-2026)
 */

window.PVSData = {
  // Dữ liệu giá theo tháng (lấy giá trung bình của khoảng)
  prices: [
    // 2018
    { date: '2018-01', price: 23000, brent: 69.0, usdvnd: 22450 },
    { date: '2018-02', price: 22000, brent: 65.0, usdvnd: 22470 },
    { date: '2018-03', price: 21000, brent: 66.0, usdvnd: 22480 },
    { date: '2018-04', price: 20000, brent: 72.0, usdvnd: 22500 },
    { date: '2018-05', price: 19000, brent: 77.0, usdvnd: 22690 },
    { date: '2018-06', price: 18000, brent: 74.0, usdvnd: 22930 },
    { date: '2018-07', price: 19000, brent: 74.0, usdvnd: 23100 },
    { date: '2018-08', price: 20000, brent: 73.0, usdvnd: 23270 },
    { date: '2018-09', price: 21000, brent: 79.0, usdvnd: 23330 },
    { date: '2018-10', price: 23000, brent: 81.0, usdvnd: 23340 },
    { date: '2018-11', price: 19500, brent: 65.0, usdvnd: 23300 },
    { date: '2018-12', price: 16500, brent: 57.0, usdvnd: 23175 },
    // 2019
    { date: '2019-01', price: 15500, brent: 59.0, usdvnd: 23175 },
    { date: '2019-02', price: 16000, brent: 64.0, usdvnd: 23200 },
    { date: '2019-03', price: 16500, brent: 67.0, usdvnd: 23220 },
    { date: '2019-04', price: 17500, brent: 71.0, usdvnd: 23250 },
    { date: '2019-05', price: 16750, brent: 70.0, usdvnd: 23437 },
    { date: '2019-06', price: 16250, brent: 63.0, usdvnd: 23380 },
    { date: '2019-07', price: 15750, brent: 64.0, usdvnd: 23280 },
    { date: '2019-08', price: 15250, brent: 59.0, usdvnd: 23260 },
    { date: '2019-09', price: 14750, brent: 62.0, usdvnd: 23200 },
    { date: '2019-10', price: 15250, brent: 59.0, usdvnd: 23180 },
    { date: '2019-11', price: 14750, brent: 63.0, usdvnd: 23175 },
    { date: '2019-12', price: 14250, brent: 67.0, usdvnd: 23165 },
    // 2020
    { date: '2020-01', price: 14000, brent: 63.0, usdvnd: 23175 },
    { date: '2020-02', price: 13500, brent: 55.0, usdvnd: 23200 },
    { date: '2020-03', price: 10500, brent: 33.0, usdvnd: 23400 },
    { date: '2020-04', price: 9000, brent: 26.0, usdvnd: 23650 },
    { date: '2020-05', price: 10500, brent: 30.0, usdvnd: 23500 },
    { date: '2020-06', price: 11500, brent: 41.0, usdvnd: 23300 },
    { date: '2020-07', price: 11000, brent: 43.0, usdvnd: 23200 },
    { date: '2020-08', price: 11500, brent: 45.0, usdvnd: 23200 },
    { date: '2020-09', price: 11000, brent: 41.0, usdvnd: 23200 },
    { date: '2020-10', price: 10500, brent: 40.0, usdvnd: 23200 },
    { date: '2020-11', price: 12000, brent: 43.0, usdvnd: 23150 },
    { date: '2020-12', price: 13000, brent: 50.0, usdvnd: 23100 },
    // 2021
    { date: '2021-01', price: 13000, brent: 55.0, usdvnd: 23050 },
    { date: '2021-02', price: 16000, brent: 62.0, usdvnd: 23000 },
    { date: '2021-03', price: 18500, brent: 64.5, usdvnd: 23010 },
    { date: '2021-04', price: 20500, brent: 65.0, usdvnd: 23020 },
    { date: '2021-05', price: 22500, brent: 68.0, usdvnd: 23050 },
    { date: '2021-06', price: 23500, brent: 73.0, usdvnd: 22950 },
    { date: '2021-07', price: 24500, brent: 75.0, usdvnd: 22920 },
    { date: '2021-08', price: 23000, brent: 71.0, usdvnd: 22850 },
    { date: '2021-09', price: 23000, brent: 75.0, usdvnd: 22770 },
    { date: '2021-10', price: 25000, brent: 84.0, usdvnd: 22750 },
    { date: '2021-11', price: 26000, brent: 81.0, usdvnd: 22720 },
    { date: '2021-12', price: 27000, brent: 74.0, usdvnd: 22800 },
    // 2022
    { date: '2022-01', price: 27000, brent: 87.0, usdvnd: 22650 },
    { date: '2022-02', price: 28500, brent: 95.0, usdvnd: 22700 },
    { date: '2022-03', price: 30000, brent: 117.0, usdvnd: 22800 },
    { date: '2022-04', price: 29000, brent: 105.0, usdvnd: 22850 },
    { date: '2022-05', price: 27500, brent: 110.0, usdvnd: 23100 },
    { date: '2022-06', price: 26500, brent: 115.0, usdvnd: 23250 },
    { date: '2022-07', price: 25500, brent: 105.0, usdvnd: 23300 },
    { date: '2022-08', price: 24500, brent: 97.0, usdvnd: 23400 },
    { date: '2022-09', price: 23500, brent: 90.0, usdvnd: 23700 },
    { date: '2022-10', price: 22500, brent: 93.0, usdvnd: 24500 },
    { date: '2022-11', price: 21500, brent: 90.0, usdvnd: 24800 },
    { date: '2022-12', price: 23500, brent: 81.0, usdvnd: 24700 },
    // 2023
    { date: '2023-01', price: 25000, brent: 83.0, usdvnd: 23500 },
    { date: '2023-02', price: 26000, brent: 83.5, usdvnd: 23450 },
    { date: '2023-03', price: 27000, brent: 78.0, usdvnd: 23500 },
    { date: '2023-04', price: 28000, brent: 82.0, usdvnd: 23450 },
    { date: '2023-05', price: 29000, brent: 76.0, usdvnd: 23500 },
    { date: '2023-06', price: 30500, brent: 75.0, usdvnd: 23550 },
    { date: '2023-07', price: 32500, brent: 80.0, usdvnd: 23600 },
    { date: '2023-08', price: 34500, brent: 86.0, usdvnd: 23800 },
    { date: '2023-09', price: 36500, brent: 94.0, usdvnd: 24100 },
    { date: '2023-10', price: 37500, brent: 90.0, usdvnd: 24300 },
    { date: '2023-11', price: 38500, brent: 82.0, usdvnd: 24200 },
    { date: '2023-12', price: 39500, brent: 78.0, usdvnd: 24100 },
    // 2024
    { date: '2024-01', price: 39500, brent: 78.0, usdvnd: 24300 },
    { date: '2024-02', price: 41500, brent: 82.0, usdvnd: 24400 },
    { date: '2024-03', price: 42500, brent: 85.0, usdvnd: 24500 },
    { date: '2024-04', price: 43500, brent: 87.0, usdvnd: 25000 },
    { date: '2024-05', price: 44500, brent: 83.0, usdvnd: 25200 },
    { date: '2024-06', price: 45500, brent: 82.0, usdvnd: 25300 },
    { date: '2024-07', price: 44500, brent: 85.0, usdvnd: 25400 },
    { date: '2024-08', price: 43500, brent: 79.0, usdvnd: 25350 },
    { date: '2024-09', price: 44500, brent: 73.0, usdvnd: 25300 },
    { date: '2024-10', price: 43000, brent: 75.0, usdvnd: 25200 },
    { date: '2024-11', price: 42000, brent: 73.0, usdvnd: 25300 },
    { date: '2024-12', price: 41000, brent: 74.0, usdvnd: 25400 },
    // 2025
    { date: '2025-01', price: 43500, brent: 77.0, usdvnd: 25100 },
    { date: '2025-02', price: 45500, brent: 75.0, usdvnd: 25200 },
    { date: '2025-03', price: 46500, brent: 72.0, usdvnd: 25400 },
    { date: '2025-04', price: 47500, brent: 68.0, usdvnd: 25600 },
    { date: '2025-05', price: 45500, brent: 55.0, usdvnd: 25800 },
    { date: '2025-06', price: 46500, brent: 65.0, usdvnd: 26000 },
    { date: '2025-07', price: 47500, brent: 70.0, usdvnd: 26100 },
    { date: '2025-08', price: 48500, brent: 68.0, usdvnd: 26200 },
    { date: '2025-09', price: 49500, brent: 72.0, usdvnd: 26300 },
    { date: '2025-10', price: 47500, brent: 70.0, usdvnd: 26400 },
    { date: '2025-11', price: 46500, brent: 68.0, usdvnd: 26300 },
    { date: '2025-12', price: 45500, brent: 72.0, usdvnd: 26200 },
    // 2026
    { date: '2026-01', price: 50000, brent: 70.0, usdvnd: 25800 },
    { date: '2026-02', price: 53500, brent: 72.0, usdvnd: 25700 },
    { date: '2026-03', price: 55200, brent: 75.0, usdvnd: 25600 },
    { date: '2026-04', price: 42000, brent: 70.0, usdvnd: 25500 }
  ],

  // Các sự kiện quan trọng
  events: [
    // 2018
    {
      date: '2018-02',
      type: 'contract',
      title: 'Ký hợp đồng Sao Vàng - Đại Nguyệt EPCIC',
      description: 'PTSC M&C ký hợp đồng EPCIC giàn CPP Sao Vàng + WHP Đại Nguyệt với Idemitsu Kosan, trị giá ~$300M',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Dự án Sao Vàng - Đại Nguyệt là dự án phát triển mỏ khí lô 05-1b&c, cách Vũng Tàu ~350km về phía Đông Nam, do Idemitsu Kosan (Nhật Bản) làm chủ đầu tư. PTSC M&C được giao hợp đồng EPCIC (Engineering, Procurement, Construction, Installation, Commissioning) bao gồm: giàn xử lý trung tâm Sao Vàng CPP (jacket 12,600 tấn), giàn khai thác Đại Nguyệt WHP, và các công tác lắp đặt ngoài khơi.

<strong>Tác động đến PVS:</strong> Đây là hợp đồng lớn, đảm bảo backlog M&C cho giai đoạn 2018-2021. Với giá dầu Brent ~$65/thùng - dưới ngưỡng $70 nhưng đang phục hồi từ đáy 2016, các dự án nội địa bắt đầu được triển khai trở lại. Hợp đồng này củng cố vị thế PTSC trong lĩnh vực EPCIC nội địa.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Hợp đồng lớn, tạo backlog ổn định nhiều năm
<strong>Xu hướng:</strong> Trung hạn (2-3 năm thực hiện hợp đồng)`,
        prediction: `<strong>Ngắn hạn (1-3 tháng):</strong> Tác động tích cực nhưng HẠNCHẾ. Thị trường thường không phản ứng mạnh với hợp đồng mới vì giá trị sẽ được ghi nhận dần qua nhiều năm, không phải ngay lập tức.

<strong>Trung hạn (2019-2021):</strong> Backlog M&C được đảm bảo → doanh thu ổn định → giảm rủi ro kinh doanh. Giai đoạn cao điểm chế tạo (2019) và lắp đặt (2020-2021) sẽ ghi nhận doanh thu lớn.

<strong>Rủi ro:</strong> Biến động giá dầu có thể ảnh hưởng tiến độ dự án. Nếu Brent giảm mạnh dưới $50, chủ đầu tư có thể review lại kế hoạch.

<strong>Mức độ tự tin:</strong> CAO - Hợp đồng đã ký, backlog đảm bảo`,
        reality: `<strong>Kết quả thực tế:</strong> Dự án được triển khai đúng tiến độ:
- 10/04/2018: Khởi công chế tạo jacket Sao Vàng CPP
- 30/07/2019: Hạ thủy jacket CPP (12,500 tấn) - rút ngắn thời gian từ 10-11 tháng xuống còn ~5 tháng
- 04/10/2019: Lắp đặt jacket CPP ngoài khơi
- 2020-2021: Hoàn thiện và đưa vào vận hành

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Hợp đồng đã tạo backlog ổn định, góp phần giúp doanh thu 2019 tăng 11.4% và LNST tăng 41% so với 2018. Năng lực EPCIC của PTSC M&C được khẳng định qua việc rút ngắn tiến độ chế tạo.

<strong>Bài học:</strong> Với ngành dịch vụ dầu khí, hợp đồng EPCIC lớn từ các đối tác uy tín (như Nhật Bản) mang lại sự ổn định cao. Cần theo dõi backlog và tiến độ thực hiện để đánh giá doanh thu tương lai.`
      }
    },
    {
      date: '2018-02',
      type: 'contract',
      title: 'Hợp đồng Gallaf Phase 2 (Qatar) $320M',
      description: 'PTSC M&C ký hợp đồng EPCI với North Oil Company (Qatar) cho dự án Gallaf Phase 2, trị giá ~$320M',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Đây là hợp đồng quốc tế LỚN NHẤT của PTSC M&C tại thời điểm đó. Dự án Gallaf (Al Shaheen) Field Development Phase 2 bao gồm: thiết kế, mua sắm, chế tạo 3 topside modules và 3 cầu nối (bridges), nâng cấp giàn hiện hữu, vận chuyển và lắp đặt ngoài khơi Qatar.

<strong>Tác động đến PVS:</strong> Hợp đồng này có ý nghĩa chiến lược:
- Khẳng định năng lực EPCI của PTSC M&C tại thị trường Trung Đông
- Mở rộng thị trường ngoài Việt Nam, giảm phụ thuộc PVN
- Tích lũy kinh nghiệm với tiêu chuẩn quốc tế khắt khe

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Đột phá chiến lược, mở rộng thị trường quốc tế
<strong>Xu hướng:</strong> Dài hạn (thay đổi cấu trúc doanh thu)`,
        prediction: `<strong>Ngắn hạn:</strong> Tin tích cực nhưng tác động giá không mạnh ngay. Thị trường VN thường phản ứng chậm với các hợp đồng quốc tế do khó đánh giá.

<strong>Trung hạn:</strong> Backlog tăng ~$320M - con số lớn với PTSC M&C. Doanh thu sẽ được ghi nhận trong 2-3 năm tới. Quan trọng hơn, nếu thực hiện tốt, đây là cơ sở để mở rộng thị trường Trung Đông.

<strong>Dài hạn:</strong> Chiến lược "quốc tế hóa" của PTSC có thể giúp giảm phụ thuộc vào CAPEX của PVN - vốn là rủi ro lớn nhất của upstream VN.

<strong>Rủi ro:</strong> Hợp đồng quốc tế thường có biên lợi nhuận thấp hơn, chi phí quản lý cao hơn. Rủi ro tỷ giá và logistics.`,
        reality: `<strong>Kết quả thực tế:</strong> PTSC M&C hoàn thành dự án Gallaf Phase 2 đúng tiến độ và chất lượng. Kinh nghiệm từ dự án này giúp PTSC M&C tiếp tục mở rộng ra thị trường quốc tế trong những năm sau. Đến 2023-2024, tỷ trọng doanh thu quốc tế của PTSC M&C đã tăng đáng kể.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Dự án hoàn thành tốt, mở đường cho chiến lược quốc tế hóa. Biên lợi nhuận hợp đồng quốc tế thấp hơn nội địa nhưng bù lại bằng quy mô lớn và ổn định.

<strong>Bài học:</strong> Các hợp đồng quốc tế lớn có giá trị chiến lược vượt xa giá trị tài chính. Thị trường VN thường undervalue các hợp đồng này vì khó đánh giá. Đây có thể là cơ hội nếu nhà đầu tư hiểu được tầm quan trọng chiến lược.`
      }
    },
    {
      date: '2018-05',
      type: 'macro',
      title: 'Trump rút khỏi thỏa thuận hạt nhân Iran',
      description: 'Mỹ rút khỏi thỏa thuận hạt nhân Iran (JCPOA), tái áp lệnh trừng phạt, đe dọa nguồn cung dầu từ Iran',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Ngày 08/05/2018, Tổng thống Trump tuyên bố Mỹ rút khỏi thỏa thuận hạt nhân Iran (JCPOA) và tái áp lệnh trừng phạt. Iran là nhà sản xuất dầu lớn thứ 5 thế giới (~4 triệu thùng/ngày). Lệnh trừng phạt sẽ cắt giảm xuất khẩu dầu Iran, tạo thiếu hụt nguồn cung toàn cầu.

<strong>Tác động đến PVS:</strong> Sự kiện này đẩy giá Brent tăng mạnh: từ ~$72/thùng (04/2018) lên $77/thùng (05/2018). Giá dầu vượt ngưỡng $70 là tín hiệu TÍCH CỰC cho upstream - theo knowledge, khi Brent >$70, các dự án E&P khả thi về kinh tế và PVN có xu hướng tăng CAPEX.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Sự kiện địa chính trị lớn, tác động nguồn cung dầu toàn cầu
<strong>Xu hướng:</strong> Trung hạn (6-12 tháng tùy diễn biến trừng phạt)`,
        prediction: `<strong>Ngắn hạn:</strong> Giá dầu nhiều khả năng tiếp tục tăng khi thị trường phản ứng với lo ngại thiếu hụt nguồn cung. Brent có thể test vùng $80-85/thùng.

<strong>Trung hạn:</strong> Nếu trừng phạt được thực thi nghiêm ngặt, giá dầu có thể duy trì mức cao ($75-90). PVS sẽ hưởng lợi từ:
- Tâm lý tích cực với cổ phiếu dầu khí
- Khả năng PVN tăng CAPEX khi giá dầu cao

<strong>Rủi ro:</strong>
- OPEC+ có thể tăng sản lượng bù đắp
- Mỹ có thể cấp miễn trừ cho các khách hàng lớn của Iran
- Kinh tế toàn cầu chậm lại → nhu cầu giảm

<strong>Mức độ tự tin:</strong> TRUNG BÌNH - Diễn biến địa chính trị khó dự đoán`,
        reality: `<strong>Kết quả thực tế:</strong> Giá dầu tăng mạnh sau sự kiện, Brent đạt đỉnh $86/thùng vào 03/10/2018. Tuy nhiên, Mỹ cấp miễn trừ 6 tháng cho 8 khách hàng lớn của Iran (11/2018), giảm bớt áp lực nguồn cung. Kết hợp với chiến tranh thương mại Mỹ-Trung, giá dầu sụp đổ 30% trong Q4/2018 (từ $86 xuống $50).

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN - Đúng hướng ngắn hạn (Brent tăng lên $86). Nhưng dự đoán trung hạn CHƯA TÍNH ĐẾN kịch bản miễn trừ + chiến tranh thương mại → giá sụp đổ Q4.

<strong>Bài học:</strong> Sự kiện địa chính trị thường có nhiều biến số không lường trước (miễn trừ, đàm phán, phản ứng OPEC+). Không nên dự đoán quá xa với các sự kiện này. Quan trọng hơn: theo dõi các BIỆN PHÁP THỰC TẾ được thực thi, không chỉ tuyên bố.`
      }
    },
    {
      date: '2018-09',
      type: 'macro',
      title: 'Chiến tranh thương mại Mỹ-Trung bắt đầu',
      description: '24/09: Mỹ áp thuế $200B hàng TQ, Trung Quốc trả đũa. Chiến tranh thương mại chính thức bắt đầu',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Ngày 24/09/2018, Mỹ chính thức áp thuế 10% (sau tăng lên 25%) lên $200 tỷ hàng hóa Trung Quốc. Trung Quốc trả đũa bằng thuế lên $60 tỷ hàng Mỹ. Đây là sự leo thang lớn nhất trong cuộc chiến thương mại, đánh dấu xung đột kinh tế nghiêm trọng giữa 2 nền kinh tế lớn nhất thế giới.

<strong>Tác động đến PVS:</strong> Chiến tranh thương mại ảnh hưởng PVS qua 2 kênh:
1. TRỰC TIẾP: Lo ngại kinh tế toàn cầu chậm lại → nhu cầu dầu giảm → giá dầu giảm
2. GIÁN TIẾP: Đồng NDT mất giá → tâm lý risk-off → dòng tiền rút khỏi EM và cổ phiếu chu kỳ

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Sự kiện hệ thống, ảnh hưởng nền kinh tế toàn cầu
<strong>Xu hướng:</strong> Trung hạn (6-18 tháng tùy diễn biến đàm phán)`,
        prediction: `<strong>Ngắn hạn:</strong> Thị trường đang ở vùng cao (Brent ~$79, PVS ~21,000đ). Chiến tranh thương mại tạo rủi ro giảm giá đáng kể. Tuy nhiên, ngay lập tức có thể không giảm mạnh vì:
- Trừng phạt Iran vẫn đang hỗ trợ giá dầu
- Nhu cầu dầu chưa suy yếu ngay

<strong>Trung hạn:</strong> Rủi ro cao hơn. Nếu chiến tranh thương mại kéo dài:
- Kinh tế TQ chậm lại → TQ là nước nhập khẩu dầu lớn nhất → nhu cầu dầu giảm
- Giá dầu có thể điều chỉnh về vùng $65-75
- PVS có thể về test vùng hỗ trợ 18,000-19,000đ

<strong>Khuyến nghị:</strong> Thận trọng với vị thế mua mới. Giữ tiền mặt để mua vào khi thị trường điều chỉnh.`,
        reality: `<strong>Kết quả thực tế:</strong> Dự đoán CHÍNH XÁC về hướng, nhưng mức giảm MẠNH HƠN dự kiến:
- Brent: từ $79 (09/2018) → $86 đỉnh (10/2018) → $50 đáy (24/12/2018) - giảm 42% trong 2.5 tháng
- PVS: từ 21,000đ (09/2018) → 23,000đ (10/2018) → 16,500đ (12/2018) - giảm 28%

<strong>Nguyên nhân giảm mạnh hơn:</strong> Chiến tranh thương mại CỘNG HƯỞNG với:
- Mỹ cấp miễn trừ Iran (11/2018) → giảm lo ngại nguồn cung
- Fed tăng lãi suất → USD mạnh → EM và commodities yếu
- Lo ngại suy thoái toàn cầu gia tăng

<strong>Bài học:</strong> Khi nhiều yếu tố tiêu cực CỘNG HƯỞNG, mức giảm có thể vượt xa dự đoán. Chiến tranh thương mại không chỉ ảnh hưởng qua kênh nhu cầu dầu mà còn qua tâm lý risk-off toàn thị trường. Cần xem xét TẤT CẢ các yếu tố vĩ mô đang tác động, không chỉ sự kiện đơn lẻ.`
      }
    },
    {
      date: '2018-10',
      type: 'macro',
      title: 'Brent đạt đỉnh $86/thùng',
      description: '03/10: Giá dầu Brent đạt đỉnh $86/thùng - cao nhất trong 4 năm, trước khi sụp đổ 30% trong Q4',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Ngày 03/10/2018, giá dầu Brent đạt $86/thùng - mức cao nhất kể từ năm 2014. Nguyên nhân: trừng phạt Iran sắp có hiệu lực (05/11/2018), tồn kho dầu thấp, Venezuela sản lượng giảm. Tuy nhiên, đây hóa ra là ĐỈNH của chu kỳ tăng - chỉ 2.5 tháng sau, giá sụp đổ về $50.

<strong>Tác động đến PVS:</strong> Giá dầu $86 là mức RẤT TỐT cho upstream. Theo knowledge, khi Brent >$70, PVN có xu hướng tăng CAPEX. Tại $86, tất cả các dự án E&P đều khả thi về kinh tế. Tuy nhiên, đây cũng là tín hiệu CẦN THẬN TRỌNG - giá dầu cao kích thích shale oil Mỹ tăng sản lượng.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Đỉnh chu kỳ, cần đánh giá rủi ro đảo chiều
<strong>Xu hướng:</strong> Không rõ - có thể là đỉnh hoặc tiếp tục lên $100`,
        prediction: `<strong>Kịch bản 1 - Tiếp tục tăng (40%):</strong> Nếu trừng phạt Iran nghiêm ngặt, giá có thể lên $90-100. PVS sẽ được hưởng lợi tiếp.

<strong>Kịch bản 2 - Đạt đỉnh và điều chỉnh (60%):</strong> Giá $86 đã phản ánh nhiều tin tốt (Iran, OPEC cắt giảm). Rủi ro từ:
- Mỹ có thể cấp miễn trừ Iran
- Shale oil Mỹ đang tăng sản lượng kỷ lục (11.4 triệu thùng/ngày)
- Chiến tranh thương mại → nhu cầu TQ yếu

<strong>Khuyến nghị:</strong> Đây là thời điểm nên CHỐT LỜI một phần hoặc đặt stop-loss chặt. Không nên mua đuổi ở vùng giá cao này.

<strong>Mục tiêu giảm nếu đảo chiều:</strong> $70-75 (hỗ trợ mạnh), $60 (nếu panic)`,
        reality: `<strong>Kết quả thực tế:</strong> Kịch bản 2 xảy ra với mức độ NGHIÊM TRỌNG hơn dự đoán:
- Brent: $86 → $50 trong 2.5 tháng (-42%), phá cả vùng hỗ trợ $60
- PVS: 23,000đ → 16,500đ (-28%)
- Nguyên nhân: Mỹ cấp miễn trừ Iran + chiến tranh thương mại + Fed hawkish + shale oil tăng mạnh

<strong>Đánh giá dự đoán:</strong> ĐÚNG HƯỚNG - Đánh giá đúng rủi ro đảo chiều (xác suất 60%), đúng các yếu tố rủi ro. Tuy nhiên, mức giảm VÀ tốc độ giảm vượt xa dự đoán ($50 vs $60-75 dự kiến).

<strong>Bài học quan trọng:</strong>
1. Khi giá dầu ở vùng cao ($85+), rủi ro đảo chiều CAO - nhiều yếu tố tiêu cực có thể cộng hưởng
2. Shale oil Mỹ tạo "trần" cho giá dầu - khi giá cao, họ tăng sản lượng rất nhanh
3. Tại đỉnh chu kỳ, nên chốt lời hoặc có stop-loss chặt - đừng tham lam
4. Knowledge cần bổ sung: ngưỡng $85-90 là vùng shale oil Mỹ tăng mạnh sản lượng → tạo áp lực giảm giá`
      }
    },
    {
      date: '2018-12',
      type: 'macro',
      title: 'Giá dầu sụp đổ - Brent về $50',
      description: '24/12: Brent chạm đáy $50/thùng, giảm 42% từ đỉnh $86 chỉ trong 2.5 tháng',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Q4/2018 chứng kiến một trong những đợt sụp đổ giá dầu nhanh nhất lịch sử. Brent giảm từ $86 (03/10) xuống $50 (24/12) - mất 42% trong chưa đầy 3 tháng. Nguyên nhân:
- Mỹ cấp miễn trừ trừng phạt Iran cho 8 nước (05/11/2018)
- Shale oil Mỹ đạt kỷ lục 11.4 triệu thùng/ngày
- Chiến tranh thương mại leo thang → lo ngại nhu cầu
- Tồn kho dầu Mỹ tăng mạnh
- Fed tăng lãi suất, thị trường tài chính toàn cầu bị bán tháo

<strong>Tác động đến PVS:</strong> Đây là cú sốc lớn cho upstream. Với Brent $50 - dưới xa ngưỡng $60 (vùng xấu theo knowledge), các dự án E&P mới sẽ bị hoãn/hủy. PVN chắc chắn sẽ review CAPEX. PVS chịu áp lực kép: giá cổ phiếu giảm + triển vọng kinh doanh xấu đi.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Sự kiện đánh dấu kết thúc chu kỳ tăng, bắt đầu giai đoạn suy giảm
<strong>Xu hướng:</strong> Trung hạn - phụ thuộc phản ứng của OPEC+`,
        prediction: `<strong>Ngắn hạn (Q1/2019):</strong> Giá dầu có thể ổn định hoặc hồi phục nhẹ nếu OPEC+ cắt giảm sản lượng mạnh (họ vừa họp 06/12/2018 và đồng ý cắt 1.2 triệu thùng/ngày).

<strong>Trung hạn (2019):</strong> Nếu OPEC+ tuân thủ cắt giảm, Brent có thể hồi phục về vùng $60-70. Tuy nhiên:
- Shale oil Mỹ vẫn là áp lực lớn
- Chiến tranh thương mại chưa có hồi kết
- Kinh tế toàn cầu chậm lại

<strong>Dự báo PVS:</strong> Đáy ngắn hạn có thể quanh vùng 15,000-16,000đ. Nếu Brent ổn định trên $55-60, PVS có thể hồi phục dần. Nhưng đừng kỳ vọng quay lại đỉnh 23,000đ trong năm 2019.

<strong>Chiến lược:</strong> Đây là vùng có thể TÍCH LŨY DẦN nếu có tầm nhìn dài hạn. Không mua một lần mà chia làm nhiều đợt.`,
        reality: `<strong>Kết quả thực tế:</strong> Dự đoán khá CHÍNH XÁC:
- Brent: Hồi phục từ $50 (12/2018) lên $55-59 (Q1/2019), sau đó dao động $59-71 cả năm 2019 - đúng vùng dự báo $60-70
- PVS: Đáy ~15,500đ (01/2019), hồi phục lên 17,500đ (04/2019), sau đó điều chỉnh về 14,250đ (12/2019)

<strong>Đánh giá:</strong>
- Đúng về đáy ngắn hạn PVS (15,000-16,000đ)
- Đúng về vùng hồi phục Brent ($60-70)
- Đúng về việc không quay lại đỉnh cũ trong 2019

<strong>Bài học:</strong>
1. OPEC+ vẫn là yếu tố quan trọng để ổn định giá dầu - cần theo dõi cam kết cắt giảm
2. Sau cú sụp đổ, giá thường dao động (không V-shape) vì các yếu tố tiêu cực cần thời gian để giải quyết
3. Vùng Brent $50-55 là đáy vì nhiều dự án dầu khí không khả thi dưới mức này → cung tự nhiên giảm
4. Chiến lược tích lũy dần ở vùng đáy đúng - không cần bắt chính xác đáy`
      }
    },

    // 2019
    {
      date: '2019-04',
      type: 'macro',
      title: 'Mỹ chấm dứt miễn trừ trừng phạt Iran',
      description: 'Mỹ tuyên bố không gia hạn miễn trừ trừng phạt Iran cho 8 nước, có hiệu lực từ 02/05',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Ngày 22/04/2019, chính quyền Trump tuyên bố sẽ không gia hạn miễn trừ trừng phạt Iran cho 8 quốc gia (Trung Quốc, Ấn Độ, Nhật, Hàn Quốc, Thổ Nhĩ Kỳ, Đài Loan, Ý, Hy Lạp) kể từ 02/05/2019. Mục tiêu: đưa xuất khẩu dầu Iran về 0.

<strong>Tác động đến PVS:</strong> Giá Brent tăng từ $67 (03/2019) lên $71 (04/2019), vượt ngưỡng $70 - mức tốt cho upstream theo knowledge. Nếu Iran thực sự bị cắt khỏi thị trường (~1.5-2 triệu thùng/ngày), giá dầu có thể tiếp tục tăng.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐ (3/5) - Sự kiện quan trọng nhưng thị trường đã có kinh nghiệm với Iran từ 2018
<strong>Xu hướng:</strong> Ngắn-Trung hạn (3-6 tháng)`,
        prediction: `<strong>Ngắn hạn:</strong> Giá dầu nhiều khả năng tăng tiếp, Brent có thể test $75-80. PVS hưởng lợi từ tâm lý tích cực.

<strong>Rủi ro:</strong>
- Trung Quốc có thể tiếp tục mua dầu Iran bất chấp trừng phạt
- OPEC+ có thể nới lỏng cắt giảm để bù đắp
- Kinh tế toàn cầu vẫn chịu áp lực từ chiến tranh thương mại

<strong>Dự báo PVS:</strong> Có thể test vùng 18,000-19,000đ nếu giá dầu duy trì trên $70. Tuy nhiên, chiến tranh thương mại là rủi ro lớn đang treo trên đầu.

<strong>Mức độ tự tin:</strong> TRUNG BÌNH - Yếu tố địa chính trị khó dự đoán`,
        reality: `<strong>Kết quả thực tế:</strong>
- Brent: Đạt đỉnh $75 cuối tháng 4/2019, sau đó giảm dần về $59-64 trong H2/2019
- PVS: Đạt 17,500đ (04/2019) - đúng vùng dự báo 18,000-19,000đ (sai số 3-8%)

<strong>Tại sao không tiếp tục tăng:</strong>
- Chiến tranh thương mại Mỹ-Trung leo thang mạnh từ tháng 5/2019 (thuế 25%)
- Trung Quốc vẫn mua dầu Iran qua các kênh không chính thức
- OPEC+ nới lỏng cắt giảm
- Lo ngại suy thoái gia tăng

<strong>Đánh giá dự đoán:</strong> ĐÚNG VỀ NGẮN HẠN - Giá tăng đúng như dự báo. Tuy nhiên, đúng về rủi ro: chiến tranh thương mại đã lấn át hiệu ứng Iran.

<strong>Bài học:</strong> Khi có nhiều yếu tố tác động ngược chiều (Iran bullish vs chiến tranh thương mại bearish), yếu tố nào LỚN HƠN sẽ thắng. Năm 2019, chiến tranh thương mại (ảnh hưởng nhu cầu toàn cầu) mạnh hơn Iran (chỉ ảnh hưởng 1-2% nguồn cung).`
      }
    },
    {
      date: '2019-05',
      type: 'macro',
      title: 'Chiến tranh thương mại Mỹ-Trung leo thang',
      description: 'Mỹ tăng thuế từ 10% lên 25% cho $200B hàng TQ. TQ trả đũa. NDT mất giá vượt ngưỡng 7',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Tháng 05/2019 đánh dấu sự leo thang nghiêm trọng trong chiến tranh thương mại Mỹ-Trung:
- 10/05: Mỹ tăng thuế từ 10% lên 25% cho $200B hàng TQ
- 13/05: TQ trả đũa với thuế lên $60B hàng Mỹ
- Đàm phán đổ vỡ, hai bên không đạt được thỏa thuận

Đồng NDT mất giá mạnh, vượt ngưỡng tâm lý 7 CNY/USD vào tháng 8/2019 - lần đầu tiên kể từ 2008.

<strong>Tác động đến PVS:</strong> Chiến tranh thương mại tiếp tục là yếu tố CHI PHỐI thị trường. Nó tác động PVS qua:
1. Lo ngại kinh tế TQ chậm lại → nhu cầu dầu giảm → giá dầu yếu
2. Risk-off toàn cầu → vốn rút khỏi EM và cổ phiếu chu kỳ
3. Tâm lý bi quan lan rộng

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Sự kiện hệ thống, ảnh hưởng dài hạn
<strong>Xu hướng:</strong> Trung hạn (6-12 tháng tùy diễn biến đàm phán)`,
        prediction: `<strong>Ngắn hạn:</strong> Áp lực giảm giá rõ ràng. Brent có thể về vùng $60-65. PVS có thể test lại vùng 15,000-16,000đ.

<strong>Trung hạn:</strong> Nếu chiến tranh thương mại kéo dài không có thỏa thuận:
- Kinh tế toàn cầu chậm lại → nhu cầu dầu yếu
- Fed có thể cắt lãi suất để hỗ trợ kinh tế (yếu tố tích cực)
- PVS dao động trong vùng 14,000-17,000đ, khó breakout lên cao

<strong>Chiến lược:</strong> Giữ tỷ trọng thấp, chờ tín hiệu đàm phán tích cực. Không mua đuổi.`,
        reality: `<strong>Kết quả thực tế:</strong>
- Brent: Giảm từ $70 (05/2019) xuống $59 (08/2019), đúng vùng dự báo $60-65
- PVS: Giảm từ 16,750đ (05/2019) xuống 15,250đ (08/2019), sau đó về 14,250đ (12/2019)
- Fed cắt lãi suất 3 lần trong 2019 (07, 09, 10)

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Đúng hướng và đúng vùng giá cho cả Brent và PVS. Đúng về Fed cắt lãi suất.

<strong>Điểm đáng chú ý:</strong>
- Tấn công Saudi Aramco (14/09/2019) làm giá dầu spike 15% trong 1 ngày, nhưng nhanh chóng hạ nhiệt
- Thỏa thuận Phase 1 được công bố 12/2019, nhưng PVS không tăng mạnh vì đã quá muộn trong năm

<strong>Bài học:</strong> Chiến tranh thương mại là yếu tố DOMINANT trong 2019. Các tin tốt khác (Iran, Saudi Aramco) chỉ tạo spike ngắn hạn, không thay đổi xu hướng. Khi có yếu tố vĩ mô lớn chi phối, cần tập trung theo dõi nó thay vì bị phân tâm bởi tin tức ngắn hạn.`
      }
    },
    {
      date: '2019-07',
      type: 'project',
      title: 'Hạ thủy jacket Sao Vàng CPP',
      description: '30/07: PTSC M&C hoàn thành hạ thủy jacket giàn Sao Vàng CPP nặng 12,500 tấn trong 14.5 giờ liên tục',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Ngày 30-31/07/2019, PTSC M&C hoàn thành hạ thủy jacket giàn xử lý trung tâm Sao Vàng CPP - một trong những jacket lớn nhất từng được chế tạo tại Việt Nam:
- Trọng lượng: 12,500 tấn
- Chiều cao: ~120m
- Thời gian hạ thủy: 14.5 giờ liên tục
- Thời gian chế tạo: Rút ngắn từ 10-11 tháng xuống còn ~5 tháng

Đây là cột mốc quan trọng trong dự án Sao Vàng - Đại Nguyệt (ký 02/2018).

<strong>Tác động đến PVS:</strong> Sự kiện này:
1. Xác nhận tiến độ dự án đúng kế hoạch → doanh thu ghi nhận đúng dự kiến
2. Chứng minh năng lực kỹ thuật của PTSC M&C đã được nâng cao (rút ngắn 50% thời gian chế tạo)
3. Tạo uy tín cho các hợp đồng tương lai

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐ (3/5) - Sự kiện quan trọng với PVS nhưng đã được phản ánh phần lớn vào giá
<strong>Xu hướng:</strong> Ngắn hạn (tin tức 1 lần)`,
        prediction: `<strong>Tác động giá:</strong> Hạn chế. Thị trường thường không phản ứng mạnh với các milestone dự án vì:
- Đây là tin XAÁC NHẬN tiến độ, không phải tin MỚI
- Giá trị hợp đồng đã được phản ánh từ khi ký (02/2018)
- Yếu tố vĩ mô (chiến tranh thương mại) đang chi phối thị trường

<strong>Ý nghĩa thực sự:</strong> Quan trọng hơn cho TRUNG-DÀI HẠN:
- Doanh thu Q3-Q4/2019 sẽ tốt (ghi nhận giai đoạn lắp đặt)
- Năng lực rút ngắn tiến độ 50% → lợi thế cạnh tranh
- Reference case cho hợp đồng tương lai

<strong>Theo dõi:</strong> Bước tiếp theo là lắp đặt ngoài khơi (dự kiến 10/2019)`,
        reality: `<strong>Kết quả thực tế:</strong>
- PVS: Không có phản ứng giá đáng kể, tiếp tục xu hướng giảm cùng thị trường (15,750đ → 14,750đ trong Q3/2019)
- Lắp đặt thành công: 04/10/2019 - đúng tiến độ
- LNST Q3/2019: 100 tỷ (giảm 33% YoY do giai đoạn trước ghi nhận nhiều)
- LNST cả năm 2019: 808 tỷ (+41% vs 2018)

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Đúng về việc thị trường không phản ứng mạnh. Đúng về ý nghĩa dài hạn (năng lực được khẳng định).

<strong>Bài học:</strong>
1. Các milestone dự án là "lagging indicators" - thị trường đã phản ánh từ khi ký hợp đồng
2. Trong môi trường vĩ mô xấu (chiến tranh thương mại), tin tốt vi mô bị lu mờ
3. Tuy nhiên, hoàn thành tốt dự án → tích lũy năng lực và uy tín → giá trị dài hạn
4. Cần phân biệt: tin tốt "bất ngờ" vs tin tốt "xác nhận" - chỉ có tin bất ngờ mới tạo phản ứng giá mạnh`
      }
    },
    {
      date: '2019-09',
      type: 'macro',
      title: 'Tấn công drone vào Saudi Aramco',
      description: '14/09: Drone tấn công 2 cơ sở dầu lớn nhất Saudi Arabia, cắt 50% sản lượng (5.7 triệu thùng/ngày)',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Ngày 14/09/2019, drone và tên lửa hành trình (được cho là từ Iran/Houthi) tấn công 2 cơ sở dầu lớn nhất của Saudi Aramco:
- Abqaiq: Nhà máy xử lý dầu lớn nhất thế giới
- Khurais: Mỏ dầu lớn thứ 2 Saudi Arabia

Hậu quả: 5.7 triệu thùng/ngày bị cắt - 50% sản lượng Saudi, 5% nguồn cung toàn cầu. Đây là gián đoạn nguồn cung DẦU LỚN NHẤT trong lịch sử.

<strong>Tác động đến PVS:</strong> Giá dầu spike LỊCH SỬ - Brent tăng 15% trong phiên đầu tuần sau đó (từ $60 lên $69). Đây là mức tăng 1 ngày lớn nhất kể từ 1991 (Chiến tranh Vùng Vịnh).

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Sự kiện địa chính trị lớn nhất năm, gián đoạn nguồn cung kỷ lục
<strong>Xu hướng:</strong> Ngắn hạn - phụ thuộc tốc độ khôi phục sản xuất`,
        prediction: `<strong>Kịch bản 1 - Khôi phục nhanh (60%):</strong>
- Saudi khôi phục sản xuất trong vài tuần
- Giá dầu giảm trở lại sau spike
- PVS hưởng lợi ngắn hạn nhưng không bền

<strong>Kịch bản 2 - Leo thang (30%):</strong>
- Mỹ trả đũa Iran
- Xung đột khu vực lan rộng
- Giá dầu có thể lên $80-100
- PVS tăng mạnh

<strong>Kịch bản 3 - Thiệt hại nghiêm trọng hơn dự kiến (10%):</strong>
- Khôi phục mất nhiều tháng
- Giá dầu duy trì cao

<strong>Khuyến nghị:</strong> KHÔNG mua đuổi sau spike. Chờ xác nhận kịch bản. Nếu khôi phục nhanh → giá sẽ giảm trở lại.`,
        reality: `<strong>Kết quả thực tế:</strong> Kịch bản 1 xảy ra:
- Saudi khôi phục 50% sản lượng trong 2 ngày, 100% trong 2-3 tuần
- Brent: Spike từ $60 lên $69 (+15% ngày 16/09), sau đó giảm về $62 cuối tháng 9, $59 tháng 10
- PVS: Tăng nhẹ từ 14,750đ lên ~15,250đ, sau đó tiếp tục giảm

<strong>Tại sao không leo thang:</strong>
- Mỹ không trả đũa quân sự trực tiếp Iran
- Saudi có tồn kho dự trữ lớn, khách hàng không bị gián đoạn
- Chiến tranh thương mại vẫn là yếu tố chi phối (Phase 1 đang đàm phán)

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Đúng kịch bản chính (khôi phục nhanh), đúng về không mua đuổi.

<strong>Bài học quan trọng:</strong>
1. Sự kiện địa chính trị "shock" thường có phản ứng giá NGẮN HẠN, sau đó mean-revert
2. KHÔNG mua đuổi sau spike - chờ xác nhận diễn biến thực tế
3. Năng lực phục hồi của hạ tầng dầu hiện đại cao hơn dự kiến
4. Trong môi trường có nhiều yếu tố tiêu cực (chiến tranh thương mại), tin tốt ngắn hạn bị nhanh chóng "hấp thụ"`
      }
    },
    {
      date: '2019-12',
      type: 'macro',
      title: 'Thỏa thuận Phase 1 Mỹ-Trung',
      description: 'Mỹ-Trung đạt thỏa thuận Phase 1, hoãn thuế mới, giảm căng thẳng thương mại',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Tháng 12/2019, Mỹ và Trung Quốc đạt thỏa thuận Phase 1 sau gần 2 năm chiến tranh thương mại:
- Mỹ hoãn áp thuế mới dự kiến 15/12
- Giảm thuế từ 15% xuống 7.5% cho một số hàng hóa
- TQ cam kết mua thêm $200B hàng Mỹ trong 2 năm
- Ký chính thức 15/01/2020

Đây là bước đột phá đầu tiên sau nhiều tháng bế tắc.

<strong>Tác động đến PVS:</strong> Thỏa thuận giúp:
1. Giảm lo ngại kinh tế TQ suy thoái → nhu cầu dầu ổn định hơn
2. Tâm lý risk-on quay trở lại → dòng tiền có thể chảy vào EM
3. Brent tăng từ $62 (11/2019) lên $67 (12/2019)

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Sự kiện quan trọng, giảm rủi ro hệ thống
<strong>Xu hướng:</strong> Trung hạn - nhưng cần theo dõi thực thi`,
        prediction: `<strong>Ngắn hạn (Q1/2020):</strong> Kỳ vọng tích cực. Brent có thể tiếp tục lên $70-75. PVS có thể test lại vùng 16,000-17,000đ.

<strong>Rủi ro:</strong>
- Phase 1 chỉ là bước đầu, nhiều vấn đề cốt lõi chưa giải quyết
- TQ có thể không mua đủ $200B như cam kết
- Các yếu tố khác (Iran, OPEC+, kinh tế toàn cầu) vẫn có thể gây biến động

<strong>Lưu ý:</strong> Tin tốt đến khá muộn trong năm, có thể đã được phản ánh một phần. Đừng kỳ vọng rally mạnh ngay.`,
        reality: `<strong>Kết quả thực tế:</strong>
- Brent: Tăng từ $63 (11/2019) lên $67 (12/2019) - đúng hướng dự báo
- PVS: 14,250đ (12/2019) - KHÔNG tăng như dự báo

<strong>Tại sao PVS không tăng:</strong>
- Tin đến cuối năm, nhà đầu tư đã "close book" cho 2019
- Lo ngại Phase 1 chỉ là đình chiến tạm thời
- PVS đã giảm quá sâu trong năm (từ 17,500đ xuống 14,250đ)

<strong>Điều không ai lường trước:</strong> COVID-19 xuất hiện ở Vũ Hán tháng 12/2019, sẽ thay đổi TẤT CẢ vào Q1/2020.

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN về hướng Brent, CHƯA ĐÚNG về PVS ngắn hạn. Tuy nhiên, Q1/2020 COVID đã xóa sạch mọi dự đoán.

<strong>Bài học:</strong>
1. Tin tốt cuối năm thường có phản ứng yếu (window dressing, rebalancing)
2. Sau một năm giảm mạnh, cần nhiều hơn 1 tin tốt để đảo chiều xu hướng
3. "Unknown unknowns" (COVID) có thể thay đổi hoàn toàn cục diện - humility trong dự báo`
      }
    },

    // 2020
    {
      date: '2020-03',
      type: 'macro',
      title: 'COVID-19 & OPEC+ đổ vỡ',
      description: 'COVID lan rộng toàn cầu + Nga-Saudi không đạt thỏa thuận cắt giảm → giá dầu sụp đổ về $33',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Tháng 03/2020 chứng kiến "perfect storm" cho thị trường dầu:
1. COVID-19 lan rộng toàn cầu → lockdown → nhu cầu dầu sụp đổ ~30%
2. 06/03/2020: Đàm phán OPEC+ đổ vỡ - Nga từ chối cắt giảm thêm
3. 08/03/2020: Saudi phát động "chiến tranh giá" - tăng sản lượng và giảm giá bán

Kết quả: Brent từ $55 (02/2020) → $33 (03/2020) → $26 (04/2020) - giảm 53% trong 2 tháng.

<strong>Tác động đến PVS:</strong> Đây là cú sốc NẶNG NỀ NHẤT cho ngành dầu khí kể từ 2014-2015. Với Brent <$30, gần như TẤT CẢ các dự án E&P không khả thi. PVN chắc chắn cắt CAPEX. PVS đối mặt khủng hoảng.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Khủng hoảng lịch sử, tác động hệ thống toàn ngành
<strong>Xu hướng:</strong> Trung hạn - phụ thuộc COVID và phản ứng OPEC+`,
        prediction: `<strong>Ngắn hạn:</strong> Cực kỳ tiêu cực. Chưa thấy đáy. Brent có thể về $20-25 nếu lockdown kéo dài và OPEC+ không thỏa hiệp.

<strong>Trung hạn:</strong> Phụ thuộc vào:
1. COVID: Vaccine/thuốc điều trị khi nào?
2. OPEC+: Nga-Saudi hòa giải không?
3. Hỗ trợ chính phủ: Stimulus package các nước?

<strong>Dự báo PVS:</strong> Có thể về 8,000-10,000đ (P/B ~0.4-0.5x) trong kịch bản xấu. Đây là vùng khủng hoảng, không phải vùng đầu tư an toàn.

<strong>Chiến lược:</strong> ĐỨNG NGOÀI cho đến khi có tín hiệu đáy rõ ràng (OPEC+ đạt thỏa thuận + COVID đỉnh + stimulus lớn). Cash is king.`,
        reality: `<strong>Kết quả thực tế:</strong>
- Brent: Tiếp tục giảm về $26 (04/2020), WTI thậm chí âm (-$37) ngày 20/04
- PVS: Giảm từ 13,500đ (02/2020) → 10,500đ (03/2020) → 9,000đ (04/2020) - đúng vùng dự báo 8,000-10,000đ

<strong>Các sự kiện quan trọng sau đó:</strong>
- 12/04/2020: OPEC+ đạt thỏa thuận cắt giảm kỷ lục 9.7 triệu thùng/ngày
- Các nước tung stimulus packages khổng lồ
- Vaccine bắt đầu được phát triển

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Đúng hướng, đúng vùng giá PVS (9,000đ nằm trong vùng 8,000-10,000đ). Đúng về các yếu tố cần theo dõi (OPEC+, COVID, stimulus).

<strong>Bài học:</strong>
1. Trong khủng hoảng, cash is king - không cố bắt đáy khi chưa có tín hiệu rõ ràng
2. "Perfect storm" (nhiều yếu tố tiêu cực cộng hưởng) tạo ra mức giảm vượt xa dự đoán
3. Tuy nhiên, khủng hoảng cũng tạo cơ hội - ai mua ở 9,000đ (04/2020) đã x3 trong 12 tháng
4. Cần theo dõi PHẢN ỨNG CHÍNH SÁCH (OPEC+, Fed, chính phủ) để xác định đáy`
      }
    },
    {
      date: '2020-04',
      type: 'macro',
      title: 'OPEC+ cắt giảm kỷ lục & WTI âm',
      description: '12/04: OPEC+ cắt giảm 9.7 triệu thùng/ngày. 20/04: WTI lần đầu tiên âm (-$37)',
      impact: 'mixed',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Tháng 04/2020 có 2 sự kiện lịch sử:

1. 12/04/2020: OPEC+ đạt thỏa thuận cắt giảm KỶ LỤC 9.7 triệu thùng/ngày (gần 10% sản lượng toàn cầu). Đây là thỏa thuận cắt giảm lớn nhất lịch sử OPEC.

2. 20/04/2020: Hợp đồng WTI tháng 5 lần đầu tiên trong lịch sử giao dịch ở mức ÂM (-$37/thùng). Lý do: kho chứa Cushing (Oklahoma) sắp đầy, người mua phải trả tiền để người khác nhận dầu.

<strong>Tác động đến PVS:</strong> Hai tín hiệu ngược chiều:
- WTI âm: Cho thấy mức độ nghiêm trọng của khủng hoảng (cung >> cầu)
- OPEC+ cắt giảm: Tín hiệu đáy đang hình thành

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Sự kiện lịch sử, đánh dấu đáy chu kỳ
<strong>Xu hướng:</strong> ĐÁY đang hình thành`,
        prediction: `<strong>Ngắn hạn:</strong> Biến động cực cao. WTI âm là hiện tượng kỹ thuật (hợp đồng hết hạn + kho đầy), không phản ánh giá dầu thực. Brent ~$26 là mức sàn vì chi phí sản xuất nhiều nơi cao hơn.

<strong>Trung hạn:</strong> ĐÁY NHIỀU KHẢ NĂNG ĐÃ HÌNH THÀNH:
- OPEC+ cắt giảm kỷ lục → cung giảm mạnh
- Lockdown sẽ nới lỏng dần → cầu phục hồi
- Nhiều nhà sản xuất shale oil Mỹ phá sản → cung giảm thêm

<strong>Dự báo Brent:</strong> Hồi phục dần về $35-40 trong Q2, có thể $45-50 cuối năm 2020 nếu COVID được kiểm soát.

<strong>Dự báo PVS:</strong> Đáy ~9,000đ (P/B ~0.4x) khó phá. Có thể tích lũy dần với tầm nhìn 12-24 tháng. Mục tiêu: 13,000-15,000đ nếu Brent về $50.

<strong>Chiến lược:</strong> Bắt đầu TÍCH LŨY từ từ, chia làm nhiều đợt. Đây là cơ hội mua vào "giai đoạn đáy" - giá tăng mạnh nhất ở đây theo knowledge.`,
        reality: `<strong>Kết quả thực tế:</strong>
- Brent: Đúng đáy $26 (04/2020), hồi phục lên $41 (06/2020), $43 (07/2020), $50 (12/2020) - chính xác với dự báo
- PVS: Đáy 9,000đ (04/2020), hồi phục lên 11,500đ (06/2020), 13,000đ (12/2020) - vượt mục tiêu

<strong>Đánh giá dự đoán:</strong> RẤT CHÍNH XÁC - Đúng về đáy, đúng về hướng hồi phục, đúng về vùng giá mục tiêu. Chiến lược tích lũy dần đã được thưởng xứng đáng.

<strong>Bài học quan trọng:</strong>
1. Khi OPEC+ hành động quyết liệt (cắt giảm kỷ lục), đó thường là tín hiệu đáy
2. "Giai đoạn đáy" (theo knowledge) là lúc giá cổ phiếu tăng MẠNH NHẤT - từ 9,000đ lên 27,000đ trong 12 tháng (+200%)
3. Cần phân biệt: WTI âm là hiện tượng kỹ thuật, không phải giá dầu thực
4. Trong khủng hoảng, cơ hội lớn nhất dành cho ai có cash và kiên nhẫn chờ tín hiệu đáy`
      }
    },

    // 2021
    {
      date: '2021-01',
      type: 'macro',
      title: 'Biden nhậm chức',
      description: 'Biden nhậm chức, kỳ vọng stimulus package, vaccine COVID triển khai',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Việc Joe Biden nhậm chức Tổng thống Mỹ vào tháng 01/2021 đánh dấu bước ngoặt quan trọng cho nền kinh tế toàn cầu. Đảng Dân chủ kiểm soát cả Nhà Trắng và Quốc hội, mở đường cho gói kích thích kinh tế (stimulus package) hàng nghìn tỷ USD. Song song đó, vaccine COVID-19 bắt đầu được triển khai đại trà.

<strong>Tác động đến PVS:</strong> Gói stimulus sẽ bơm tiền vào nền kinh tế, thúc đẩy tiêu dùng và sản xuất → tăng nhu cầu năng lượng → đẩy giá dầu lên. Với Brent đang ở $55/thùng (dưới ngưỡng $60 - vùng xấu cho upstream), đây là giai đoạn 'từ đáy đi lên' - chính xác là thời điểm cổ phiếu dầu khí thường chạy TRƯỚC giá dầu.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Sự kiện có tác động hệ thống đến toàn ngành
<strong>Xu hướng:</strong> Dài hạn (12-24 tháng)`,
        prediction: `<strong>Ngắn hạn (1-3 tháng):</strong> TĂNG NHẸ ĐẾN TRUNG BÌNH. Thị trường phản ứng tích cực với kỳ vọng stimulus và vaccine. Dự kiến PVS có thể test vùng 14,000-15,000đ.

<strong>Trung hạn (3-12 tháng):</strong> TĂNG MẠNH. Nếu kịch bản vaccine + stimulus diễn ra đúng, giá dầu có thể vượt $60, hướng $70. Đây là "giai đoạn hồi phục" - giá tăng mạnh nhất. PVS có thể hướng đến 18,000-22,000đ.

<strong>Mức độ tự tin:</strong> TRUNG BÌNH - CAO
<strong>Yếu tố theo dõi:</strong> Giá Brent có vượt $60-70 không? Tiến độ stimulus? Tốc độ tiêm vaccine?`,
        reality: `<strong>Kết quả thực tế:</strong> PVS tăng từ 13,000đ (01/2021) lên 16,000đ (02/2021), 18,500đ (03/2021), và đạt 22,500đ (05/2021). Brent vượt $60 từ tháng 2, đạt $73 vào tháng 6. Cuối năm 2021, PVS đạt 27,000đ - vượt xa dự đoán trung hạn 18,000-22,000đ.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Cả hướng đi và vùng giá ngắn hạn đều đúng. Vùng giá trung hạn còn thận trọng hơn thực tế (thực tế +108%, dự đoán +40-70%).

<strong>Bài học:</strong> Knowledge đã giúp dự đoán đúng: (1) Cổ phiếu dầu khí chạy TRƯỚC giá dầu - đây là "giai đoạn hồi phục" khi giá tăng mạnh nhất; (2) Khi Brent vượt $60 hướng $70, PVN tăng CAPEX, PVS hưởng lợi trực tiếp. Có thể bổ sung: trong giai đoạn hồi phục từ đáy COVID, mức tăng có thể vượt 100% nếu giá dầu phục hồi mạnh.`
      }
    },
    {
      date: '2021-03',
      type: 'macro',
      title: 'Tàu Ever Given kẹt kênh Suez',
      description: 'Tàu Ever Given mắc kẹt kênh Suez, gián đoạn chuỗi cung ứng toàn cầu',
      impact: 'neutral',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Ngày 23/03/2021, tàu container Ever Given dài 400m mắc kẹt ngang kênh đào Suez - tuyến hàng hải vận chuyển khoảng 12% thương mại toàn cầu và 10% lượng dầu thô thế giới. Sự cố kéo dài 6 ngày khiến hàng trăm tàu bị ùn tắc.

<strong>Tác động đến PVS:</strong> Sự gián đoạn gây lo ngại về nguồn cung dầu từ Trung Đông sang châu Âu, đẩy giá dầu tăng ngay lập tức. Tuy nhiên với Brent $64.5/thùng - vẫn dưới ngưỡng $70 - tác động chưa đủ mạnh để kích hoạt chu kỳ đầu tư lớn.

<strong>Mức độ quan trọng:</strong> ⭐⭐ (2/5) - Gián đoạn ngắn hạn, không phải thay đổi cấu trúc
<strong>Xu hướng:</strong> Ngắn hạn (vài tuần). Một khi kênh thông, mọi thứ trở lại bình thường.`,
        prediction: `<strong>Ngắn hạn:</strong> Giá PVS nhiều khả năng đi ngang hoặc tăng nhẹ trong 1-2 tuần do tâm lý thị trường. Tuy nhiên mức tăng hạn chế vì Brent $64.5 vẫn dưới ngưỡng $70.

<strong>Vùng giá dự kiến:</strong> 18,000-19,500đ trong 2-4 tuần tới.

<strong>Rủi ro:</strong> Nếu kênh Suez được khơi thông nhanh, giá dầu có thể điều chỉnh giảm, kéo tâm lý cổ phiếu dầu khí đi xuống.

<strong>Khuyến nghị:</strong> Giữ vị thế nếu đã có, không nên mua đuổi theo tin tức này.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS đạt 18,500đ tại thời điểm sự kiện (03/2021), sau đó tăng mạnh lên 20,500đ (04/2021) và 22,500đ (05/2021). Giá VƯỢT vùng dự kiến 18,000-19,500đ và tiếp tục xu hướng tăng. Kênh Suez được khơi thông sau 6 ngày, nhưng giá PVS KHÔNG giảm mà tiếp tục tăng.

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN - Đúng về hướng đi (tăng nhẹ đến trung bình), nhưng QUÁ THẬN TRỌNG. Vùng giá 18,000-19,500đ bị phá vỡ lên trên. Đánh giá "sự kiện ngắn hạn, tác động hạn chế" là SAI - giá tiếp tục tăng mạnh sau đó.

<strong>Bài học:</strong> Knowledge cần bổ sung: Khi đang trong giai đoạn hồi phục (Biden + vaccine + stimulus), các sự kiện ngắn hạn như Suez KHÔNG làm đảo chiều xu hướng chính. Xu hướng lớn (hồi phục hậu COVID) mạnh hơn nhiễu ngắn hạn. Cần phân biệt: (1) Sự kiện LÀM THAY ĐỔI xu hướng vs (2) Sự kiện chỉ gây nhiễu trong xu hướng hiện tại.`
      }
    },
    {
      date: '2021-10',
      type: 'macro',
      title: 'Khủng hoảng năng lượng Châu Âu',
      description: 'Khủng hoảng năng lượng Châu Âu, giá dầu tăng lên $84/thùng',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Khủng hoảng năng lượng Châu Âu bùng phát do nhiều yếu tố cộng hưởng: nhu cầu phục hồi sau COVID, dự trữ khí đốt thấp kỷ lục, căng thẳng địa chính trị với Nga. Giá khí đốt tự nhiên tại Châu Âu tăng vọt hơn 500%, kéo theo giá dầu Brent vượt $84/thùng - mức cao nhất trong 7 năm.

<strong>Tác động đến PVS:</strong> Với giá dầu duy trì trên $70/thùng, các dự án E&P trở nên khả thi về kinh tế. PVN có xu hướng tăng mạnh CAPEX khi giá dầu cao. PVS sẽ hưởng lợi trực tiếp từ làn sóng đầu tư này.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Tác động hệ thống đến cung-cầu năng lượng toàn cầu
<strong>Xu hướng:</strong> Trung hạn (6-12 tháng)`,
        prediction: `<strong>Dự đoán:</strong> Xu hướng TĂNG với các luận điểm:
• PVN nhiều khả năng tăng CAPEX năm 2022
• Các dự án đang hoãn do COVID có thể được tái khởi động
• Tâm lý nhà đầu tư với nhóm dầu khí sẽ cải thiện đáng kể

<strong>Mục tiêu giá:</strong> 28,000-32,000đ trong 6 tháng tới

<strong>Rủi ro:</strong> Nếu khủng hoảng được giải quyết nhanh hoặc OPEC+ tăng sản lượng, giá dầu có thể điều chỉnh.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS từ 25,000đ (10/2021) tăng lên 26,000đ (11/2021), 27,000đ (12/2021), và tiếp tục lên 30,000đ (03/2022). Đạt đúng vùng mục tiêu 28,000-32,000đ trong 6 tháng sau sự kiện. Brent duy trì trên $80 và tăng lên $95-117 đầu 2022.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Cả hướng đi và vùng giá mục tiêu đều đúng. PVS đạt 30,000đ (03/2022), nằm trong vùng dự đoán 28,000-32,000đ. Các luận điểm về tâm lý nhà đầu tư và CAPEX đều đúng.

<strong>Bài học:</strong> Knowledge đã giúp dự đoán đúng: (1) Khi giá dầu duy trì trên $70, các dự án E&P khả thi về kinh tế → PVN tăng CAPEX → PVS hưởng lợi; (2) Khủng hoảng năng lượng là sự kiện "tác động hệ thống", không chỉ ngắn hạn, nên dự đoán trung hạn phù hợp hơn. Ngưỡng $70 Brent là mốc quan trọng cần theo dõi.`
      }
    },
    {
      date: '2021-11',
      type: 'macro',
      title: 'Biến thể Omicron',
      description: 'Biến thể Omicron xuất hiện, gây lo ngại toàn cầu',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Biến thể Omicron được phát hiện tại Nam Phi và nhanh chóng lan rộng toàn cầu, tạo ra làn sóng lo ngại về đại dịch COVID-19. Câu hỏi lớn: Liệu thế giới có quay lại lockdown như năm 2020?

<strong>Tác động đến PVS:</strong> Nếu các quốc gia lockdown, nhu cầu đi lại và vận tải sẽ sụt giảm mạnh → giá dầu lao dốc. Điều này sẽ làm giảm động lực đầu tư CAPEX của PVN, và các dự án offshore có thể bị trì hoãn.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐ (3/5) - Rủi ro hệ thống nhưng chưa chắc chắn
<strong>Xu hướng:</strong> Ngắn hạn (1-2 tháng), phụ thuộc mức độ nghiêm trọng của Omicron`,
        prediction: `<strong>Dự đoán:</strong> Giá PVS chịu áp lực giảm ngắn hạn, có thể test vùng 22,000-24,000đ trong 1-2 tháng tới do:
• Tâm lý risk-off, cổ phiếu chu kỳ như dầu khí bị bán trước
• Giá Brent có thể điều chỉnh về vùng $70-75

<strong>Cơ hội:</strong> Nếu Omicron cho thấy triệu chứng nhẹ hơn và không lockdown diện rộng, đây sẽ là cơ hội mua vào.

<strong>Chiến lược:</strong> Quan sát phản ứng 2-4 tuần, tích lũy dần nếu giá về vùng 22,000-23,000đ.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS từ 26,000đ (11/2021) TĂNG lên 27,000đ (12/2021), rồi tiếp tục tăng mạnh: 27,000đ (01/2022) → 28,500đ (02/2022) → 30,000đ (03/2022). KHÔNG giảm về vùng 22,000-24,000đ như dự đoán. Brent cũng KHÔNG giảm mà tăng từ $81 (11/2021) lên $87 (01/2022) rồi $95-117 (02-03/2022).

<strong>Đánh giá dự đoán:</strong> SAI - Dự đoán giảm về 22,000-24,000đ nhưng thực tế tăng lên 27,000-30,000đ (+15% thay vì -8%). Omicron có triệu chứng nhẹ hơn Delta, KHÔNG gây lockdown diện rộng, và thị trường nhanh chóng nhận ra điều này.

<strong>Bài học:</strong> Knowledge cần bổ sung: (1) Khi đánh giá rủi ro COVID/dịch bệnh, cần xem xét XÁC SUẤT kịch bản xấu xảy ra, không chỉ hậu quả nếu nó xảy ra; (2) Thị trường phản ứng với COVID đã "miễn dịch" dần - mỗi biến thể mới gây lo ngại ít hơn biến thể trước; (3) Nếu xu hướng lớn (khủng hoảng năng lượng) đang mạnh, tin xấu ngắn hạn (Omicron) thường chỉ tạo nhiễu, không đảo chiều.`
      }
    },

    // 2022
    {
      date: '2022-02',
      type: 'macro',
      title: 'Nga xâm lược Ukraine',
      description: '24/02: Nga phát động chiến tranh Ukraine, giá dầu tăng mạnh từ $95 lên $130',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Ngày 24/02/2022 đánh dấu bước ngoặt địa chính trị lớn nhất kể từ Chiến tranh Lạnh. Nga là nhà sản xuất dầu thô lớn thứ 3 thế giới (~10-11 triệu thùng/ngày). Chiến tranh và cấm vận từ phương Tây tạo cú sốc nguồn cung nghiêm trọng. Giá dầu Brent tăng vọt từ $95 lên $130/thùng.

<strong>Tác động đến PVS:</strong> Đây là tín hiệu cực kỳ tích cực cho upstream. Khi giá dầu tăng mạnh, PVN sẽ đẩy mạnh CAPEX để tận dụng chu kỳ giá cao. PVS với vai trò nhà thầu dịch vụ kỹ thuật hàng đầu sẽ được hưởng lợi trực tiếp.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Sự kiện địa chính trị lớn nhất thập kỷ
<strong>Xu hướng:</strong> Trung-dài hạn (chiến tranh có thể kéo dài)`,
        prediction: `<strong>Dự đoán:</strong> PVS có thể TĂNG 30-50% trong 3-6 tháng tới, hướng đến vùng 37,000-43,000đ.

<strong>Lý do:</strong>
• Giá dầu cao kéo dài → PVN tăng CAPEX → backlog PVS dồi dào
• Tâm lý thị trường đẩy định giá cổ phiếu dầu khí lên cao
• KQKD các quý tới sẽ cải thiện

<strong>Rủi ro:</strong> Nếu chiến tranh kết thúc nhanh hoặc đàm phán thành công, giá dầu có thể điều chỉnh mạnh.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS tăng từ 28,500đ (02/2022) lên 30,000đ (03/2022) - chỉ +5.3%, sau đó GIẢM LIÊN TỤC về 21,500đ (11/2022) - mất 28.3% từ đỉnh. KHÔNG đạt mục tiêu 37,000-43,000đ trong 3-6 tháng.

<strong>Đánh giá dự đoán:</strong> SAI - Dự đoán tăng 30-50% nhưng thực tế giảm mạnh. Giá dầu cao (Brent $90-115 suốt 2022) KHÔNG giúp PVS tăng như kỳ vọng vì: (1) Fed tăng lãi suất mạnh khiến dòng tiền rút khỏi EM, (2) Khủng hoảng trái phiếu VN gây bán tháo, (3) USD tăng mạnh tạo áp lực tỷ giá.

<strong>Bài học:</strong> Knowledge cần bổ sung: "Giá dầu cao là điều kiện CẦN nhưng KHÔNG ĐỦ cho cổ phiếu dầu khí tăng. Yếu tố vĩ mô (dòng tiền, lãi suất Fed, sentiment thị trường) có thể override hoàn toàn fundamentals ngành. Trong môi trường risk-off, cổ phiếu chu kỳ như dầu khí thường bị bán TRƯỚC dù giá dầu vẫn cao."`
      }
    },
    {
      date: '2022-03',
      type: 'macro',
      title: 'Brent ATH $139',
      description: '07/03: Giá dầu Brent đạt đỉnh $139/thùng - cao nhất lịch sử',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Giá dầu Brent chạm mốc lịch sử $139/thùng - ATH mọi thời đại. Sự kiện này xảy ra khi thị trường lo ngại nguồn cung từ Nga (~10% sản lượng toàn cầu) bị gián đoạn nghiêm trọng.

<strong>⚠️ CẢNH BÁO QUAN TRỌNG:</strong> Khi Brent vượt $100, các nhà sản xuất dầu đá phiến Mỹ bắt đầu tăng công suất mạnh (breakeven ~$50-60). Shale oil có chu kỳ triển khai ngắn (6-12 tháng), tạo 'trần giá' tự nhiên. Giá $139 là mức KHÔNG BỀN VỮNG.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Đỉnh chu kỳ giá dầu
<strong>Xu hướng:</strong> Đây là GIÁ ĐỈNH, không phải xu hướng mới. P/E trông rẻ nhưng E đang ở đỉnh!`,
        prediction: `<strong>⚠️ CỰC KỲ THẬN TRỌNG với vị thế mua mới!</strong>

Tại mức 30,000đ với Brent $139, PVS đang phản ánh kỳ vọng rất cao. Đây là thời điểm NGUY HIỂM NHẤT để mua vì:
• Giá dầu $139 là spike ngắn hạn, shale oil Mỹ sẽ tăng sản lượng
• Khi giá dầu BẮT ĐẦU giảm từ đỉnh, cổ phiếu thường giảm TRƯỚC và mạnh hơn
• P/E có vẻ rẻ nhưng E đang ở đỉnh chu kỳ

<strong>Dự đoán:</strong> Rủi ro giảm về 22,000-25,000đ trong 6-12 tháng tới nếu Brent điều chỉnh về $80-90.

<strong>Khuyến nghị:</strong> Nhà đầu tư nắm giữ nên CÂN NHẮC CHỐT LỜI một phần.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS từ đỉnh 30,000đ (03/2022) giảm liên tục: 29,000đ (04) → 27,500đ (05) → 26,500đ (06) → 25,500đ (07) → 24,500đ (08) → 23,500đ (09) → 22,500đ (10) → 21,500đ (11/2022). Tổng giảm 28.3% trong 8 tháng, đúng vùng dự báo 22,000-25,000đ.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Cảnh báo "giá $139 không bền vững" và dự đoán giảm về 22,000-25,000đ hoàn toàn đúng. Khuyến nghị chốt lời là quyết định đúng đắn.

<strong>Bài học:</strong> Knowledge đã đúng: "Khi Brent vượt $100, shale oil Mỹ tăng sản lượng tạo trần giá tự nhiên" và "P/E trông rẻ nhưng E đang ở đỉnh chu kỳ - cực kỳ nguy hiểm để mua". Cần ghi nhận thêm: đây là ví dụ kinh điển về việc nhận diện ĐỈNH CHU KỲ và hành động đúng (chốt lời) dù sentiment thị trường đang hưng phấn.`
      }
    },
    {
      date: '2022-06',
      type: 'macro',
      title: 'Fed tăng lãi suất 75bps',
      description: 'Fed tăng lãi suất 75bps, mạnh nhất 28 năm, dòng tiền rút khỏi thị trường mới nổi',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Fed tăng lãi suất 75 điểm cơ bản - mức tăng mạnh nhất trong 28 năm - nhằm kiểm soát lạm phát đang ở mức cao kỷ lục tại Mỹ.

<strong>Tác động đến PVS:</strong> Sự kiện này mang tính hai mặt:
• USD tăng giá lẽ ra có lợi cho mảng upstream (doanh thu USD)
• Giá Brent vẫn cao $115/thùng
• NHƯNG: Dòng vốn ngoại rút khỏi EM để quay về Mỹ → áp lực bán ròng trên TTCK Việt Nam
• Môi trường lãi suất cao khiến chi phí vay vốn tăng, CAPEX có thể bị cắt giảm

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Tác động hệ thống đến dòng tiền toàn cầu
<strong>Xu hướng:</strong> Trung hạn (Fed có thể tiếp tục tăng lãi suất nhiều lần)`,
        prediction: `<strong>Dự đoán:</strong> Giá PVS có thể giảm 10-15% trong 1-2 tháng tới, về vùng 22,000-24,000đ.

<strong>Lý do:</strong> Áp lực không phải từ fundamentals (vẫn ổn định) mà từ yếu tố macro - dòng tiền rút khỏi thị trường.

<strong>Mức hỗ trợ:</strong> Tâm lý quan trọng quanh 23,000đ.

<strong>Chiến lược:</strong> Đây là giai đoạn nên thận trọng, chờ dòng tiền ổn định trở lại mới cân nhắc tích lũy.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS từ 26,500đ (06/2022) giảm xuống 25,500đ (07) → 24,500đ (08) - tổng giảm 7.5% trong 2 tháng, sát với dự đoán 10-15%. Vùng hỗ trợ 23,000đ bị xuyên thủng vào tháng 09/2022 (23,500đ) và tiếp tục giảm.

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN - Dự đoán giảm 10-15% về 22,000-24,000đ khá chính xác về hướng và biên độ ngắn hạn. Tuy nhiên, dự đoán THIẾU: giá tiếp tục giảm sâu hơn nữa (về 21,500đ) do khủng hoảng trái phiếu VN tháng 10-11.

<strong>Bài học:</strong> Knowledge đúng về tác động Fed lên dòng tiền EM. Cần bổ sung: "Khi Fed tăng lãi suất mạnh, chu kỳ thắt chặt thường kéo dài nhiều quý, không nên kỳ vọng phục hồi nhanh. Các cú shock nội địa (như khủng hoảng trái phiếu) có thể cộng hưởng tạo downtrend kéo dài hơn dự kiến."`
      }
    },
    {
      date: '2022-10',
      type: 'macro',
      title: 'Khủng hoảng trái phiếu VN',
      description: 'Khủng hoảng trái phiếu Việt Nam, Vạn Thịnh Phát, dòng tiền rút mạnh',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Khủng hoảng trái phiếu Việt Nam bùng phát từ vụ việc Vạn Thịnh Phát - tập đoàn BĐS lớn bị điều tra về sai phạm trong phát hành trái phiếu. Nhà đầu tư mất niềm tin, đồng loạt rút vốn khỏi các kênh đầu tư rủi ro.

<strong>Tác động đến PVS:</strong>
• Về hoạt động kinh doanh: PVS HOÀN TOÀN KHÔNG liên quan - công ty hoạt động trong lĩnh vực dịch vụ dầu khí với doanh thu từ các hợp đồng EPCI
• Giá dầu Brent vẫn duy trì ở mức cao $93/thùng
• NHƯNG về mặt thị trường: PVS không thể tránh khỏi áp lực bán tháo chung do forced selling

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐ (3/5) - Tác động tâm lý, không phải fundamentals
<strong>Xu hướng:</strong> Ngắn-trung hạn (3-6 tháng để tâm lý ổn định)`,
        prediction: `<strong>Dự đoán:</strong> Giá PVS chịu áp lực giảm ngắn hạn về vùng 18,000-20,000đ trong 1-2 tháng tới do:
• Áp lực bán tháo chung
• Khối ngoại có thể bán ròng để phòng ngừa rủi ro quốc gia
• Margin call từ các nhà đầu tư sử dụng đòn bẩy

<strong>CƠ HỘI:</strong> Đây là cơ hội tích lũy cho NĐT dài hạn vì: giá dầu vẫn cao, backlog PVS vẫn đảm bảo, và công ty không có exposure với trái phiếu DN hay BĐS.

<strong>Kỳ vọng phục hồi:</strong> 3-6 tháng khi tâm lý thị trường ổn định.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS từ 22,500đ (10/2022) giảm về đáy 21,500đ (11/2022), sau đó phục hồi: 23,500đ (12/2022) → 25,000đ (01/2023) → 27,000đ (03/2023) → 30,500đ (06/2023). Đạt đáy tháng 11/2022 rồi tăng mạnh suốt năm 2023, vượt xa vùng dự báo 18,000-20,000đ.

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN - Đúng về hướng ngắn hạn (giảm tiếp), đúng về việc xác định đây là CƠ HỘI tích lũy cho NĐT dài hạn, đúng về thời gian phục hồi (3-6 tháng). SAI về mức đáy: dự đoán 18,000-20,000đ nhưng thực tế đáy 21,500đ (cao hơn 7.5-19%).

<strong>Bài học:</strong> Knowledge đúng: "PVS không có exposure với trái phiếu DN/BĐS nên là cơ hội khi bị bán cùng đám đông". Tuy nhiên cần bổ sung: "Khi khủng hoảng mang tính tâm lý (không liên quan fundamentals), mức giảm thường NGẮN HƠN và ÍT SÂU HƠN dự kiến. Nhà đầu tư không nên quá bi quan với mức đáy vì thị trường có thể nhận ra sai lầm nhanh hơn tưởng."`
      }
    },

    // 2023
    {
      date: '2023-03',
      type: 'macro',
      title: 'SVB sụp đổ',
      description: 'Silicon Valley Bank sụp đổ, khủng hoảng ngân hàng Mỹ',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Silicon Valley Bank (SVB) sụp đổ là vụ phá sản ngân hàng lớn nhất tại Mỹ kể từ 2008. SVB chủ yếu phục vụ các startup công nghệ, khi lãi suất tăng mạnh khiến danh mục trái phiếu mất giá, dẫn đến làn sóng rút tiền ồ ạt và sụp đổ chỉ trong 48 giờ.

<strong>Tác động đến PVS:</strong>
• PVS là doanh nghiệp Việt Nam, KHÔNG có exposure trực tiếp với hệ thống ngân hàng Mỹ
• Doanh thu PVS đến từ các hợp đồng dịch vụ dầu khí dài hạn với PVN
• Giá dầu Brent $78/thùng - mức ổn định
• Tác động chủ yếu qua kênh TÂM LÝ (sentiment) hơn là fundamentals

<strong>Mức độ quan trọng:</strong> ⭐⭐ (2/5) - Tác động gián tiếp, tâm lý ngắn hạn
<strong>Xu hướng:</strong> Ngắn hạn (2-4 tuần nếu khủng hoảng được kiểm soát)`,
        prediction: `<strong>Dự đoán:</strong> Giá PVS chịu áp lực giảm nhẹ 5-8%, về vùng 25,000-25,500đ do tâm lý risk-off chung.

<strong>Tuy nhiên, đây là CƠ HỘI TÍCH LŨY vì:</strong>
• PVS không liên kết trực tiếp với SVB hay hệ thống ngân hàng Mỹ
• Giá dầu Brent $78 vẫn ở mức hỗ trợ tốt
• Các yếu tố nội tại như backlog và kế hoạch phát triển mỏ khí Lô B không thay đổi

<strong>Kịch bản cơ sở:</strong> PVS test vùng hỗ trợ 25,000đ rồi hồi phục khi thị trường nhận ra khủng hoảng SVB được kiểm soát. Thời gian điều chỉnh: 2-4 tuần.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS KHÔNG giảm mà tiếp tục tăng: tháng 03/2023 đạt 27,000đ, tháng 04 lên 28,000đ, tháng 05 đạt 29,000đ. Hoàn toàn ngược với dự đoán giảm 5-8% về 25-25.5k.

<strong>Đánh giá dự đoán:</strong> SAI - Dự đoán thiên lệch quá mức về tâm lý risk-off toàn cầu mà đánh giá thấp fundamentals của PVS. Thực tế cho thấy nhà đầu tư VN nhận ra nhanh chóng rằng SVB không liên quan đến PVS, và các yếu tố nội tại (giá Brent $78, backlog tốt, kỳ vọng Lô B) đã thắng áp lực tâm lý.

<strong>Bài học:</strong> Cần bổ sung knowledge: Với các sự kiện macro KHÔNG liên quan trực tiếp đến doanh nghiệp VN, tác động tâm lý thường rất ngắn (vài ngày, không phải vài tuần). Đặc biệt khi fundamentals vững (giá dầu ổn định, backlog tốt), thị trường VN có khả năng "tự miễn dịch" với tin xấu từ thị trường phát triển.`
      }
    },
    {
      date: '2023-05',
      type: 'company',
      title: 'Ký Greater Changhua $300M',
      description: 'Ký hợp đồng Greater Changhua 2b&4 với Orsted: 33 chân đế jacket, $300M - Dự án điện gió 920MW lớn nhất Châu Á-TBD',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Hợp đồng Greater Changhua 2b&4 với Orsted (Đan Mạch) đánh dấu bước ngoặt chiến lược quan trọng của PVS. Với giá trị $300M (~7,050 tỷ VND), đây là một trong những hợp đồng điện gió offshore lớn nhất mà PVS từng ký kết.

<strong>Ý nghĩa chiến lược:</strong>
• Cung cấp 33 chân đế jacket cho dự án 920MW - lớn nhất Châu Á-TBD
• Khẳng định năng lực kỹ thuật và sản xuất đạt chuẩn quốc tế
• Orsted là tập đoàn năng lượng tái tạo hàng đầu thế giới
• Mở rộng sang mảng điện gió - đa dạng hóa khỏi dầu khí truyền thống

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Hợp đồng lớn, mở ra thị trường mới
<strong>Xu hướng:</strong> Dài hạn (2-3 năm triển khai)`,
        prediction: `<strong>Yếu tố hỗ trợ:</strong>
• Backlog tăng mạnh, đảm bảo doanh thu 2-3 năm tới
• Mở rộng sang mảng điện gió - xu hướng ESG toàn cầu
• Đối tác Orsted uy tín, khả năng có thêm hợp đồng tương lai

<strong>Yếu tố hạn chế:</strong>
• Giá 29,000đ đã phản ánh một phần kỳ vọng
• Thị trường cần thời gian đánh giá biên lợi nhuận mảng mới

<strong>Dự đoán:</strong> Giá có thể test vùng 31,000-33,000đ trong 1-2 tháng tới nếu không có tin xấu từ vĩ mô. Vùng hỗ trợ mạnh: 27,000-28,000đ.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS từ 29,000đ (05/2023) tăng lên 30,500đ (06/2023) rồi 32,500đ (07/2023) - đạt và vượt nhẹ vùng dự đoán 31-33k trong đúng 1-2 tháng như kỳ vọng. Xu hướng tiếp tục tăng sau đó: 34,500đ (08/2023), 36,500đ (09/2023).

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Dự đoán đúng cả hướng (tăng), vùng giá mục tiêu (31-33k), và khung thời gian (1-2 tháng). Vùng hỗ trợ 27-28k không bị test, cho thấy momentum rất mạnh.

<strong>Bài học:</strong> Knowledge đã giúp dự đoán đúng: Hợp đồng lớn với đối tác quốc tế uy tín (Orsted) là catalyst rõ ràng cho cổ phiếu dịch vụ kỹ thuật. Thị trường phản ứng tích cực với việc mở rộng sang mảng năng lượng tái tạo vì đây là xu hướng ESG toàn cầu.`
      }
    },
    {
      date: '2023-07',
      type: 'company',
      title: 'Tín hiệu FID Lô B',
      description: 'Tín hiệu FID dự án Lô B - Ô Môn đang cận kề, kỳ vọng hợp đồng lớn',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Lô B - Ô Môn là dự án khí đốt quy mô lớn nhất Việt Nam trong nhiều thập kỷ, với tổng vốn đầu tư ước tính 10-12 tỷ USD. FID (Final Investment Decision) là cột mốc then chốt đánh dấu việc các bên chính thức cam kết triển khai dự án.

<strong>Tác động đến PVS:</strong>
• Khi FID được thông qua, các hợp đồng EPCI sẽ được ký kết
• PVS là nhà thầu EPCI hàng đầu Việt Nam trong lĩnh vực dầu khí
• Có năng lực thi công các hạng mục offshore như giàn khoan, đường ống ngầm
• Kỳ vọng PVS sẽ giành được các gói thầu trị giá hàng trăm triệu đến cả tỷ USD

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Dự án lớn nhất lịch sử ngành dầu khí VN
<strong>Xu hướng:</strong> Dài hạn (5-7 năm triển khai)`,
        prediction: `<strong>Kịch bản tích cực (60%):</strong> Nếu FID được phê duyệt trong Q3-Q4/2023, giá PVS có thể hướng tới vùng 38,000-42,000đ (+17% đến +29%).

<strong>Kịch bản trung tính (30%):</strong> FID tiếp tục bị trì hoãn thêm 6-12 tháng, giá dao động sideway 30,000-35,000đ.

<strong>Kịch bản tiêu cực (10%):</strong> FID bị hoãn vô thời hạn, giá có thể điều chỉnh về 28,000-30,000đ.

<strong>Chiến lược:</strong> Tích lũy dần ở vùng giá hiện tại, đặt stop-loss quanh 29,000đ, chờ xác nhận FID chính thức để gia tăng vị thế.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS từ 32,500đ (07/2023) tiếp tục tăng: 34,500đ (08/2023), 36,500đ (09/2023), 37,500đ (10/2023), 38,500đ (11/2023), đạt 39,500đ (12/2023). Kịch bản tích cực diễn ra: FID được kỳ vọng mạnh mẽ, giá vượt vùng 38-42k ngay trong Q4/2023.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Kịch bản tích cực (60% xác suất) đã xảy ra. Giá đạt và vượt vùng 38-42k trong Q4/2023. Chiến lược "tích lũy dần" đã đúng, stop-loss 29k không bị chạm.

<strong>Bài học:</strong> Knowledge đã giúp dự đoán đúng: Dự án trọng điểm quốc gia (Lô B) là catalyst cực mạnh cho cổ phiếu dịch vụ dầu khí. Khi có tín hiệu FID cận kề, thị trường sẽ "buy the rumor" - định giá trước cả khi FID chính thức. Việc gán xác suất 60% cho kịch bản tích cực là hợp lý khi có momentum rõ ràng từ chính phủ.`
      }
    },
    {
      date: '2023-08',
      type: 'macro',
      title: 'Saudi cắt giảm 1M thùng/ngày',
      description: 'Saudi Arabia cắt giảm sản lượng 1 triệu thùng/ngày, đẩy giá dầu lên $86',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Saudi Arabia cắt giảm đơn phương 1 triệu thùng/ngày - động thái mạnh mẽ nhất kể từ đại dịch. Đây không phải cắt giảm của cả OPEC+ mà là hành động tự nguyện của riêng Saudi - quốc gia sản xuất dầu lớn nhất khối.

<strong>Ý nghĩa:</strong>
• Saudi sẵn sàng hy sinh thị phần để bảo vệ giá dầu - tín hiệu rất bullish
• 1 triệu thùng/ngày = ~1% nguồn cung toàn cầu - con số có ý nghĩa
• Giá Brent leo lên $86/thùng - mức cao nhất trong nhiều tháng

<strong>Tác động đến PVS:</strong> Giá dầu $86 nằm trong vùng rất thuận lợi cho upstream. Các dự án E&P trở nên có lãi cao, tập đoàn dầu khí sẽ tăng chi tiêu vốn.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Quyết định quan trọng từ leader OPEC
<strong>Xu hướng:</strong> Trung hạn (Saudi cam kết duy trì cắt giảm)`,
        prediction: `<strong>Kỳ vọng ngắn hạn (1-3 tháng):</strong> Giá PVS có thể test vùng 36,000-38,000đ nếu giá dầu duy trì trên $80. Các hợp đồng dịch vụ giàn khoan sẽ được ký với giá tốt hơn.

<strong>Kỳ vọng trung hạn (3-6 tháng):</strong> Nếu Saudi tiếp tục giữ chính sách cắt giảm, PVS có tiềm năng hướng tới 40,000đ.

<strong>Rủi ro chính:</strong>
• Suy thoái kinh tế toàn cầu làm giảm nhu cầu dầu
• Saudi đảo ngược quyết định cắt giảm
• Shale oil Mỹ tăng sản lượng bù đắp`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS từ 34,500đ (08/2023) tăng lên 36,500đ (09/2023) - đạt vùng 36-38k như dự đoán ngắn hạn. Tiếp tục lên 37,500đ (10/2023), 38,500đ (11/2023), 39,500đ (12/2023). Giá dầu Brent: $94 (09/2023), $90 (10/2023), $82 (11/2023) - duy trì trên $80 như điều kiện.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Dự đoán ngắn hạn đúng hoàn toàn (test 36-38k trong 1-3 tháng). Dự đoán trung hạn cũng đúng (hướng tới 40k trong 3-6 tháng, thực tế đạt 39,500đ vào tháng 12). Saudi duy trì cắt giảm suốt năm 2023 như phân tích.

<strong>Bài học:</strong> Knowledge đã giúp dự đoán đúng: Khi Saudi cam kết cắt giảm đơn phương (không phải OPEC+ chung), đây là tín hiệu rất bullish vì thể hiện quyết tâm bảo vệ giá dầu. Với giá Brent >$80, upstream được hưởng lợi trực tiếp và PVS là proxy tốt cho xu hướng này.`
      }
    },

    // 2024
    {
      date: '2024-02',
      type: 'macro',
      title: 'Houthi tấn công Biển Đỏ',
      description: 'Houthi tấn công tàu chở hàng qua Biển Đỏ, gián đoạn thương mại',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Lực lượng Houthi tấn công các tàu chở hàng qua Biển Đỏ - tuyến hàng hải huyết mạch vận chuyển khoảng 12-15% thương mại toàn cầu và đặc biệt quan trọng với dòng chảy dầu mỏ từ vùng Vịnh sang châu Âu.

<strong>Hệ quả:</strong>
• Các hãng vận tải phải chuyển hướng đi vòng qua Mũi Hảo Vọng (châu Phi)
• Hành trình dài thêm 10-14 ngày, chi phí vận chuyển tăng vọt
• Tạo tâm lý lo ngại về nguồn cung dầu mỏ toàn cầu

<strong>Tác động đến PVS:</strong> Khi giá dầu tăng do gián đoạn cung, các tập đoàn dầu khí có động lực đẩy mạnh E&P để tận dụng mức giá cao. PVS sẽ được hưởng lợi từ nhu cầu dịch vụ kỹ thuật tăng.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐ (3/5) - Căng thẳng địa chính trị kéo dài
<strong>Xu hướng:</strong> Trung hạn (Houthi chưa có dấu hiệu dừng tấn công)`,
        prediction: `<strong>Ngắn hạn (1-2 tháng):</strong> PVS có thể test vùng kháng cự 43,000-45,000đ khi thị trường phản ánh kỳ vọng tăng trưởng đơn hàng.

<strong>Trung hạn (3-6 tháng):</strong> Nếu căng thẳng kéo dài và Brent duy trì trên $80, PVS có thể hướng tới vùng 48,000-52,000đ.

<strong>Rủi ro:</strong> Nếu căng thẳng được giải quyết nhanh chóng hoặc có sự can thiệp quân sự quốc tế hiệu quả, giá dầu có thể điều chỉnh và kéo PVS về vùng hỗ trợ 38,000-40,000đ.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS từ 41,500đ (02/2024) tăng lên 43,500đ (04/2024), 44,500đ (05/2024), đạt đỉnh khoảng 45,500đ (06/2024). Vùng 43-45k được test thành công ngay trong 2-4 tháng sau sự kiện.

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN - Dự đoán ngắn hạn test 43-45k đã đúng hoàn toàn. Tuy nhiên, mục tiêu trung hạn 48-52k KHÔNG đạt được - giá đỉnh chỉ khoảng 45-47k rồi điều chỉnh.

<strong>Bài học:</strong> Knowledge đúng ở điểm căng thẳng địa chính trị đẩy giá dầu và hỗ trợ PVS ngắn hạn. Cần bổ sung: (1) Sự kiện địa chính trị thường chỉ tạo hiệu ứng ngắn hạn 2-4 tháng nếu không leo thang thành chiến tranh quy mô lớn; (2) Ngưỡng kháng cự tâm lý quan trọng (45-47k) có thể mạnh hơn động lực từ tin tức vĩ mô.`
      }
    },
    {
      date: '2024-06',
      type: 'company',
      title: 'PVS đạt đỉnh ~47,000đ',
      description: 'PVS đạt đỉnh năm khoảng 47,000đ trước khi chốt lời',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> PVS đạt đỉnh năm khoảng 47,000đ sau đợt rally kéo dài, được hỗ trợ bởi giá dầu Brent $82/thùng và kết quả kinh doanh tích cực của ngành dầu khí.

<strong>⚠️ CẢNH BÁO "BẪY GIÁ TRỊ":</strong>
• Tại mức giá này, P/E có thể trông rẻ - nhưng đây là tín hiệu ĐỈNH chứ không phải ĐÁY
• Lợi nhuận hiện tại phản ánh điều kiện thuận lợi trong QUÁ KHỨ
• Thị trường luôn nhìn về TƯƠNG LAI

<strong>Áp lực chốt lời:</strong> Các quỹ đầu tư và NĐT lớn thường bắt đầu giảm vị thế khi giá đạt vùng kháng cự tâm lý quan trọng. Mức 47,000đ có thể là ngưỡng nhiều người đặt mục tiêu chốt lời từ trước.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐ (3/5) - Đỉnh ngắn hạn
<strong>Xu hướng:</strong> Điều chỉnh kỹ thuật sắp xảy ra`,
        prediction: `<strong>Dự đoán:</strong> Kịch bản có khả năng cao nhất là ĐIỀU CHỈNH ngắn hạn về vùng hỗ trợ 40,000-42,000đ (giảm 10-15% từ đỉnh).

<strong>Yếu tố quyết định:</strong> Diễn biến giá dầu Brent. Nếu giá dầu bắt đầu suy yếu, PVS sẽ phản ứng TRƯỚC khi lợi nhuận thực sự giảm - đây là đặc tính của cổ phiếu chu kỳ.

<strong>Chiến lược:</strong>
• Giảm tỷ trọng PVS, chốt một phần lợi nhuận
• Không nên mua đuổi ở vùng giá cao
• Chờ điều chỉnh về vùng hỗ trợ mạnh`,
        reality: `<strong>Kết quả thực tế:</strong> PVS từ đỉnh ~45,500đ (06/2024) điều chỉnh về 44,500đ (07/2024), 43,500đ (08/2024), và tiếp tục dao động trong vùng 41,000-44,500đ đến cuối năm 2024. Giá chạm 41,000đ vào 12/2024.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Dự đoán điều chỉnh về vùng 40-42k hoàn toàn đúng. Giá thực tế giảm từ đỉnh ~45-47k xuống vùng 41-44k, tương đương giảm 8-13% - nằm trong kịch bản dự kiến (10-15%).

<strong>Bài học:</strong> Knowledge về chu kỳ cổ phiếu dầu khí đã chứng minh hiệu quả: (1) "Bẫy giá trị" - P/E trông rẻ tại đỉnh là tín hiệu bán, không phải mua; (2) Cổ phiếu chu kỳ phản ứng TRƯỚC khi lợi nhuận thực sự giảm; (3) Ngưỡng kháng cự tâm lý quan trọng (45-47k) tạo áp lực chốt lời mạnh.`
      }
    },
    {
      date: '2024-09',
      type: 'company',
      title: 'Ký EPCI Lô B $1.5B',
      description: 'Ký EPCI#1 ($1.1B, phần PVS $550M) + EPCI#2 ($400M) dự án Lô B - Ô Môn. Hợp đồng lớn nhất lịch sử PVS',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Đây là CỘT MỐC LỊCH SỬ của PVS - hợp đồng lớn nhất từ trước đến nay!
• EPCI#1: $1.1B (phần PVS: $550M ≈ 13,915 tỷ VND)
• EPCI#2: $400M (≈ 10,120 tỷ VND)

<strong>Ý nghĩa:</strong>
• Dự án Lô B - Ô Môn là dự án khí lớn nhất Việt Nam
• EPCI = Engineering, Procurement, Construction, Installation - chuỗi giá trị cao nhất ngành
• Với backlog trước đó ~12,749 tỷ, việc bổ sung thêm ~24,000 tỷ đưa tổng backlog lên ~36,000-37,000 tỷ đồng
• Tỷ lệ Backlog/Market Cap đạt trên 1.6x - VƯỢT XA ngưỡng hấp dẫn 1.0x

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Hợp đồng lớn nhất lịch sử công ty
<strong>Xu hướng:</strong> Dài hạn (đảm bảo doanh thu 3-5 năm tới)`,
        prediction: `<strong>Dự đoán:</strong> PVS bước vào giai đoạn tăng trưởng mạnh mẽ nhất lịch sử. Backlog/Market Cap 1.6x cho thấy cổ phiếu đang được định giá HẤP DẪN.

<strong>Mục tiêu giá ngắn hạn (3-6 tháng):</strong> 50,000-55,000đ (+12% đến +24%), dựa trên việc thị trường định giá lại theo backlog mới.

<strong>Lưu ý rủi ro:</strong>
• Tiến độ giải ngân phụ thuộc FID của dự án
• Biên lợi nhuận EPCI thường mỏng (3-5%)
• Áp lực tỷ giá USD/VND nếu đồng USD mạnh lên

<strong>Khuyến nghị:</strong> TÍCH LŨY ở vùng giá 42,000-45,000đ.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS sau khi ký EPCI (09/2024) ở mức 44,500đ, giảm nhẹ về 43,000đ (10/2024), 42,000đ (11/2024), 41,000đ (12/2024). Mục tiêu 50-55k trong 3-6 tháng KHÔNG đạt được. Tuy nhiên, đến Q1/2025, giá hồi phục mạnh lên 43,500đ (01/2025), 45,500đ (02/2025), 46,500đ (03/2025), 47,500đ (04/2025).

<strong>Đánh giá dự đoán:</strong> SAI VỀ THỜI GIAN, ĐÚNG VỀ HƯỚNG - Mục tiêu 50-55k trong 3-6 tháng (đến 03/2025) không đạt - chỉ đạt ~46-47k. Nhưng xu hướng tăng trưởng dài hạn và vùng tích lũy 42-45k hoàn toàn chính xác.

<strong>Bài học:</strong> Cần bổ sung vào knowledge: (1) Hợp đồng EPCI lớn cần 6-12 tháng để thị trường "tiêu hóa" và định giá lại, không phải 3-6 tháng; (2) Biên lợi nhuận EPCI mỏng (3-5%) khiến thị trường thận trọng hơn với mức tăng giá CP; (3) Yếu tố vĩ mô (Fed, giá dầu) có thể làm chậm quá trình re-rating dù tin công ty tốt.`
      }
    },
    {
      date: '2024-11',
      type: 'macro',
      title: 'Fed cắt lãi suất',
      description: 'Fed cắt lãi suất 25bps, bắt đầu chu kỳ nới lỏng',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Fed cắt lãi suất 25 điểm cơ bản, kết thúc chu kỳ thắt chặt kéo dài gần 2 năm. Đây là tín hiệu tích cực cho thị trường mới nổi.

<strong>Tác động đến PVS:</strong>
• Khi lãi suất giảm, chi phí vay của các tập đoàn dầu khí (bao gồm PVN) giảm theo → thuận lợi hơn cho CAPEX
• Dòng tiền quốc tế có thể quay lại thị trường mới nổi
• NHƯNG: USD yếu đi → upstream có thể chịu ảnh hưởng nhẹ (bán dầu USD)
• Giá dầu Brent $73/thùng - mức tạm ổn nhưng chưa đủ cao để kích thích CAPEX tăng mạnh

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐ (3/5) - Bước ngoặt chính sách tiền tệ
<strong>Xu hướng:</strong> Trung-dài hạn (chu kỳ nới lỏng có thể kéo dài)`,
        prediction: `<strong>Dự đoán:</strong> Xu hướng TÍCH CỰC THẬN TRỌNG cho PVS trong 3-6 tháng tới.

<strong>Lý do tăng:</strong>
• Chu kỳ nới lỏng tiền tệ hỗ trợ dòng tiền vào Việt Nam
• Chi phí vốn giảm tạo điều kiện cho PVN tăng CAPEX 2025
• Giá dầu $73 vẫn đủ hấp dẫn để duy trì hoạt động upstream

<strong>Mục tiêu giá:</strong> 44,000-46,000đ nếu Fed tiếp tục nới lỏng và PVN công bố kế hoạch đầu tư tích cực.
<strong>Hỗ trợ quan trọng:</strong> 39,000-40,000đ nếu giá dầu giảm dưới $70.`,
        reality: `<strong>Kết quả thực tế:</strong> PVS từ 42,000đ (11/2024) giảm nhẹ về 41,000đ (12/2024), sau đó hồi phục mạnh lên 43,500đ (01/2025), 45,500đ (02/2025). Vùng hỗ trợ 39-40k KHÔNG bị test. Mục tiêu 44-46k đạt được vào 02-03/2025 (45,500-46,500đ).

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Cả mục tiêu giá (44-46k) và vùng hỗ trợ (39-40k không bị phá) đều đúng. Giá dầu duy trì trên $70 (Brent $72-77 trong giai đoạn này) giúp PVS giữ vững xu hướng tăng.

<strong>Bài học:</strong> Knowledge đã đúng khi: (1) Đánh giá Fed cắt lãi suất là tín hiệu tích cực thận trọng - không quá lạc quan cũng không bi quan; (2) Giá dầu trên $70 là ngưỡng quan trọng duy trì hoạt động upstream; (3) Dòng tiền vào thị trường mới nổi khi Fed nới lỏng đã hỗ trợ cổ phiếu dầu khí VN.`
      }
    },

    // 2025
    {
      date: '2025-01',
      type: 'company',
      title: 'Q4/2024 vượt kỳ vọng',
      description: 'Kết quả Q4/2024 tốt hơn kỳ vọng, doanh thu Q1/2025 ước tăng 60%',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Kết quả Q4/2024 vượt kỳ vọng thị trường là catalyst tích cực quan trọng. Doanh thu Q1/2025 ước tăng 60% YoY cho thấy backlog khổng lồ (~12,749 tỷ) đang được chuyển hóa mạnh mẽ thành doanh thu thực tế.

<strong>Ý nghĩa:</strong>
• Minh chứng cho chu kỳ kinh doanh EPC: các hợp đồng lớn sau khi ký cần thời gian triển khai
• PVS đang bước vào giai đoạn 'thu hoạch' từ những hợp đồng ký trong 2023-2024
• Tăng trưởng 60% YoY là con số ấn tượng, vượt xa trung bình ngành

<strong>Bối cảnh:</strong> Giá dầu Brent $77/thùng vẫn trong vùng thuận lợi. Thông tin được công bố đầu tháng 01/2025 - thời điểm các quỹ tái cơ cấu danh mục đầu năm.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Earnings catalyst mạnh
<strong>Xu hướng:</strong> Tiếp tục tích cực trong năm 2025`,
        prediction: `<strong>Dự đoán:</strong> PVS sẽ tiếp tục được tích lũy và có thể hướng đến vùng 48,000-52,000đ trong ngắn hạn (1-2 tháng).

<strong>Lý do:</strong>
• Momentum earnings tích cực
• Backlog dồi dào đảm bảo KQKD các quý tới
• Các quỹ đầu tư sẽ tái cơ cấu danh mục vào các cổ phiếu có câu chuyện tăng trưởng rõ ràng

<strong>Rủi ro:</strong> Biến động giá dầu nếu Brent giảm dưới $70, tiến độ ghi nhận doanh thu thực tế so với ước tính.

<strong>Chiến lược:</strong> Tích lũy ở các nhịp điều chỉnh về vùng 42,000-43,000đ.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS tăng từ 43,500đ (01/2025) lên 47,500đ (04/2025), đạt +9.2% sau 3 tháng. Mức cao nhất trong giai đoạn này là 47,500đ vào tháng 04/2025.

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN - Dự đoán 48,000-52,000đ trong 1-2 tháng chưa đạt được trong khung thời gian ngắn đó (tháng 02 chỉ 45,500đ, tháng 03: 46,500đ). Tuy nhiên, xu hướng TĂNG là chính xác và giá đã tiến gần vùng dự đoán vào tháng 04 (47,500đ).

<strong>Bài học:</strong> Dự đoán thời gian quá lạc quan - thị trường cần nhiều thời gian hơn để phản ánh fundamentals. Khi earnings tốt nhưng thị trường chung không hỗ trợ mạnh, tốc độ tăng giá sẽ chậm hơn kỳ vọng. Knowledge cần bổ sung: "Earnings catalyst mạnh thường cần 2-4 tháng để phản ánh đầy đủ, không phải 1-2 tháng".`
      }
    },
    {
      date: '2025-05',
      type: 'macro',
      title: 'Brent giảm sâu $55',
      description: 'Giá dầu Brent giảm xuống $55/thùng - đáy 4 năm, PVS điều chỉnh theo',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Giá dầu Brent giảm xuống $55/thùng - mức đáy 4 năm, phản ánh nhiều yếu tố tiêu cực: lo ngại suy thoái kinh tế toàn cầu, nguồn cung dầu dồi dào, nhu cầu tiêu thụ suy yếu tại Trung Quốc.

<strong>⚠️ CẢNH BÁO:</strong> Với giá dầu dưới $60/thùng, đây là vùng giá tiêu cực cho toàn bộ ngành upstream dầu khí.

<strong>Tác động đến PVS:</strong>
• PVN có xu hướng cắt giảm CAPEX khi giá dầu xuống thấp → ít dự án mới được phê duyệt
• Các chủ đầu tư quốc tế cũng thận trọng hơn
• NHƯNG: PVS không phải công ty khai thác dầu, mà là công ty dịch vụ với backlog hợp đồng đã ký. Doanh thu hiện tại đến từ các dự án đang triển khai - không bị ảnh hưởng ngay lập tức.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Giá dầu là yếu tố quyết định
<strong>Xu hướng:</strong> Ngắn hạn nếu là spike down, trung hạn nếu là xu hướng mới`,
        prediction: `<strong>Ngắn hạn (1-3 tháng):</strong> PVS có thể tiếp tục chịu áp lực giảm về vùng 42,000-44,000đ nếu giá dầu duy trì dưới $60.

<strong>TUY NHIÊN, đây có thể là VÙNG TÍCH LŨY HẤP DẪN nếu:</strong>
• Backlog PVS vẫn duy trì trên $3B và không có dự án lớn nào bị hủy
• P/E forward sẽ hấp dẫn khi EPS được bảo vệ bởi hợp đồng đã ký
• Dòng tiền hoạt động vẫn ổn định từ các dự án đang chạy

<strong>Yếu tố theo dõi:</strong> Thông tin về CAPEX của PVN và tiến độ dự án Lô B, Block B. Nếu các dự án này không bị hoãn, mức giá hiện tại là cơ hội tích lũy dài hạn.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS giảm từ 47,500đ (04/2025) xuống 45,500đ (05/2025) khi Brent chạm $55. Tuy nhiên, giá KHÔNG giảm sâu về 42,000-44,000đ như dự đoán mà nhanh chóng phục hồi lên 47,500đ (07/2025) và đạt đỉnh 49,500đ (09/2025).

<strong>Đánh giá dự đoán:</strong> SAI - Dự đoán PVS giảm về 42,000-44,000đ không xảy ra. Thực tế chỉ giảm 4.2% (từ 47,500đ xuống 45,500đ) rồi phục hồi ngay. Phân tích đúng về backlog bảo vệ fundamentals, nhưng đánh giá thấp sức mạnh của yếu tố này.

<strong>Bài học:</strong> Knowledge đã ghi nhận đúng: "PVS là công ty dịch vụ với backlog đã ký, không bị ảnh hưởng ngay lập tức" - nhưng mô hình dự đoán vẫn cho trọng số quá lớn vào giá dầu ngắn hạn. Cần update: "Với backlog >$3B, PVS có khả năng kháng cự giá dầu giảm ngắn hạn tốt hơn nhiều so với các công ty upstream thuần túy".`
      }
    },
    {
      date: '2025-07',
      type: 'company',
      title: 'Ký Baltica 2 + Feng Miao',
      description: 'Ký hợp đồng Baltica 2 (Ba Lan) $200M + Feng Miao (Taiwan) $100M',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> PVS ký kết hai hợp đồng lớn:
• Baltica 2 tại Ba Lan: $200M - dự án điện gió ngoài khơi quy mô lớn tại vùng biển Baltic
• Feng Miao tại Đài Loan: $100M - mở rộng sự hiện diện tại thị trường Đông Á

<strong>Ý nghĩa chiến lược:</strong>
1. <strong>Đa dạng hóa doanh thu:</strong> Giảm phụ thuộc vào PVN và thị trường nội địa
2. <strong>Backlog tăng mạnh:</strong> $300M bổ sung đảm bảo doanh thu 2-3 năm
3. <strong>Định vị mảng tăng trưởng mới:</strong> Điện gió ngoài khơi là xu hướng toàn cầu, PVS đang chuyển đổi từ dầu khí sang năng lượng tái tạo - đúng hướng ESG
4. <strong>Thu ngoại tệ:</strong> Hợp đồng USD giúp hưởng lợi khi VND mất giá

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Mở rộng thị trường quốc tế
<strong>Xu hướng:</strong> Dài hạn (2-3 năm triển khai)`,
        prediction: `<strong>Dự đoán:</strong> Giá PVS có thể TĂNG 10-15% trong ngắn hạn (1-2 tháng), từ 47,500đ lên vùng 52,000-55,000đ.

<strong>Cơ sở:</strong>
• Backlog tăng → EPS forward cải thiện → P/E forward giảm, thu hút dòng tiền
• Tin hợp đồng quốc tế lớn thường được thị trường phản ứng tích cực ngay
• Hợp đồng châu Âu + Đài Loan có thể thu hút quỹ ESG/năng lượng xanh quan tâm

<strong>Rủi ro:</strong> Giá Brent $70 vẫn ở mức thấp, ảnh hưởng mảng dầu khí truyền thống.

<strong>Chiến lược:</strong> Tích lũy thêm ở vùng giá hiện tại, kỳ vọng trung hạn 55,000-58,000đ.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS từ 47,500đ (07/2025) tăng lên 48,500đ (08/2025) và 49,500đ (09/2025), chỉ đạt +4.2% trong 2 tháng - thấp hơn nhiều so với dự đoán 10-15%. Giá cao nhất đạt 49,500đ, không chạm vùng 52,000-55,000đ.

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN - Xu hướng TĂNG đúng, nhưng mức tăng yếu hơn kỳ vọng. Dự đoán 52,000-55,000đ không đạt được, giá đỉnh chỉ 49,500đ (thấp hơn 5-10%).

<strong>Bài học:</strong> Thị trường phản ứng với hợp đồng mới nhưng không mạnh như kỳ vọng, có thể do: (1) Giá dầu Brent vẫn ở mức thấp $68-70 gây tâm lý thận trọng, (2) Thời gian triển khai hợp đồng dài (2-3 năm) nên EPS không tăng ngay. Knowledge cần bổ sung: "Hợp đồng mới với timeline dài (>2 năm) thường chỉ tạo mức tăng giá 5-10%, không phải 10-15%".`
      }
    },
    {
      date: '2025-08',
      type: 'company',
      title: 'Backlog vượt 100,000 tỷ',
      description: 'Backlog M&C vượt 100,000 tỷ VND (~$4B) - kỷ lục lịch sử công ty',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Đây là CỘT MỐC LỊCH SỬ - lần đầu tiên backlog M&C (Mechanical & Construction) vượt ngưỡng 100,000 tỷ VND (~$4 tỷ USD). Con số này phản ánh sự bùng nổ các dự án dầu khí và điện gió.

<strong>Phân tích định giá:</strong>
• Với vốn hóa PVS thời điểm đó khoảng 22,000-25,000 tỷ (giá 48,500đ)
• Tỷ lệ Backlog/Market Cap lên tới 4.0-4.5x - VƯỢT XA ngưỡng "rất hấp dẫn" (>1.0x)
• Thị trường đang định giá PVS THẤP HƠN NHIỀU so với giá trị hợp đồng trong tay

<strong>Ý nghĩa:</strong> Backlog khổng lồ này đồng nghĩa doanh thu của PVS trong 2-3 năm tới đã được "khóa chặt", giảm thiểu rủi ro sụt giảm ngay cả khi giá dầu biến động.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Kỷ lục lịch sử công ty
<strong>Xu hướng:</strong> Đảm bảo tăng trưởng 2-3 năm tới`,
        prediction: `<strong>Kịch bản tích cực (60%):</strong> Nếu các quý tới cho thấy margin trên backlog mới duy trì ở mức 6-8%, giá có thể hướng đến vùng 55,000-60,000đ trong 6-9 tháng (+15-25%).

<strong>Kịch bản trung tính (30%):</strong> Margin thấp hơn kỳ vọng (4-5%) sẽ giới hạn upside, giá dao động 48,000-52,000đ.

<strong>Kịch bản tiêu cực (10%):</strong> Nếu giá dầu giảm dưới $60 hoặc có chậm trễ triển khai dự án lớn, giá có thể test vùng hỗ trợ 42,000-45,000đ.

<strong>Điểm mấu chốt:</strong> Theo dõi biên lợi nhuận gộp trong BCTC quý tới và tiến độ triển khai các dự án lớn.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS từ 48,500đ (08/2025) tăng lên 49,500đ (09/2025), sau đó GIẢM về 45,500đ (12/2025) và chỉ bứt phá mạnh vào Q1/2026 lên 55,200đ (03/2026). Kịch bản tích cực 55,000-60,000đ ĐÚNG nhưng cần 7 tháng thay vì 6-9 tháng như dự đoán.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Dự đoán 55,000-60,000đ trong 6-9 tháng đã đạt được (55,200đ vào tháng 03/2026 = 7 tháng sau). Kịch bản tiêu cực về test 42,000-45,000đ KHÔNG xảy ra.

<strong>Bài học:</strong> Phân tích Backlog/Market Cap ratio (4.0-4.5x) là indicator cực kỳ mạnh cho triển vọng dài hạn. Knowledge đã đúng: "Backlog khổng lồ = doanh thu được khóa chặt". Điểm cải thiện: con đường đi lên không thẳng mà có nhịp điều chỉnh về 45,500đ trước khi bứt phá - cần tính đến "time correction" trong dự đoán.`
      }
    },
    {
      date: '2025-11',
      type: 'company',
      title: 'Vượt 42% kế hoạch DT',
      description: 'Doanh thu năm 2025 vượt 42% kế hoạch, LNST tăng 51% YoY',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> PVS vượt 42% kế hoạch doanh thu năm 2025 là catalyst CỰC KỲ MẠNH!
• Doanh thu 2025: 32,556 tỷ đồng
• LNST tăng 51% YoY - mức tăng trưởng rất cao, VƯỢT XA mức tăng doanh thu

<strong>Ý nghĩa:</strong>
• Backlog khổng lồ từ các dự án lớn đang được chuyển hóa thành doanh thu với tốc độ nhanh hơn dự kiến
• LNST tăng 51% vượt xa DT cho thấy biên lợi nhuận đang được CẢI THIỆN đáng kể
• Nguyên nhân có thể từ: hiệu quả quản lý chi phí, các dự án margin cao được ghi nhận, đòn bẩy hoạt động phát huy tác dụng

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Vượt kỳ vọng lớn
<strong>Xu hướng:</strong> Tích cực, tạo đà cho 2026`,
        prediction: `<strong>Dự đoán:</strong> Với mức giá 46,500đ, PVS đang ở vùng định giá HỢP LÝ khi xét đến P/E forward dựa trên LNST 1,900 tỷ. Sự kiện vượt kế hoạch 42% là catalyst đủ mạnh để thu hút dòng tiền mới.

<strong>Kỳ vọng ngắn hạn (1-3 tháng):</strong> Test vùng 50,000-52,000đ nếu thị trường chung ổn định.
• Các quỹ sẽ phải cơ cấu lại danh mục khi forward EPS được nâng
• Momentum tích cực từ tin tốt
• Backlog vẫn còn lớn hỗ trợ kỳ vọng năm sau

<strong>Rủi ro:</strong> Giá Brent nếu giảm dưới $60 sẽ ảnh hưởng tâm lý. Vùng hỗ trợ: 43,000-44,000đ.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS từ 46,500đ (11/2025) tăng mạnh lên 50,000đ (01/2026), 53,500đ (02/2026) và đạt đỉnh 55,200đ (03/2026). Vùng 50,000-52,000đ được test thành công trong 2 tháng, và vượt xa lên 55,200đ.

<strong>Đánh giá dự đoán:</strong> CHÍNH XÁC - Dự đoán "test vùng 50,000-52,000đ trong 1-3 tháng" hoàn toàn đúng. Catalyst vượt 42% kế hoạch DT và LNST +51% đã tạo momentum rất mạnh, thu hút dòng tiền đúng như phân tích.

<strong>Bài học:</strong> Sự kết hợp giữa (1) Vượt kế hoạch lớn + (2) LNST tăng vượt DT (biên cải thiện) + (3) Backlog còn lớn = công thức hoàn hảo cho re-rating. Knowledge đã đúng về đòn bẩy hoạt động và hiệu quả quản lý chi phí. Đây là mô hình mẫu để đánh giá các catalyst tương tự trong tương lai.`
      }
    },

    // 2026
    {
      date: '2026-02',
      type: 'company',
      title: 'Dòng tiền ESG vào mạnh',
      description: 'Quỹ đầu tư xanh/ESG mua ròng mạnh, kỳ vọng điểm rơi lợi nhuận 2026',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Dòng tiền từ các quỹ đầu tư xanh (ESG - Environmental, Social, Governance) đổ vào PVS đánh dấu bước chuyển quan trọng trong cơ cấu cổ đông.

<strong>Đặc điểm của quỹ ESG:</strong>
• Nắm giữ dài hạn, ít giao dịch lướt sóng
• Tạo nền tảng vững chắc cho giá cổ phiếu
• PVS đáp ứng tiêu chí ESG nhờ mảng điện gió ngoài khơi

<strong>Kỳ vọng điểm rơi lợi nhuận 2026:</strong>
• Các dự án điện gió như Lạc Phong, La Gàn dần đi vào giai đoạn thi công chính
• Hoạt động khoan và dịch vụ dầu khí phục hồi khi giá Brent $72/thùng
• Backlog hợp đồng tích lũy từ 2024-2025 bắt đầu ghi nhận doanh thu

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐ (4/5) - Dòng tiền dài hạn ổn định
<strong>Xu hướng:</strong> Dài hạn (quỹ ESG nắm giữ nhiều năm)`,
        prediction: `<strong>Dự đoán:</strong> Với mức giá 53,500đ và dòng tiền ESG mua ròng mạnh, PVS có nền tảng tăng giá trong trung hạn.

<strong>Mục tiêu giá 3-6 tháng:</strong> 58,000-62,000đ nếu:
• Giá dầu Brent duy trì trên $70
• Tiến độ các dự án điện gió đúng kế hoạch
• Kết quả kinh doanh Q1/2026 khả quan

<strong>Đặc điểm:</strong> Các quỹ ESG thường xây dựng vị thế từ từ, không đẩy giá đột biến nhưng tạo lực cầu ổn định.

<strong>Rủi ro:</strong> Nếu giá dầu giảm mạnh dưới $65 hoặc các dự án năng lượng tái tạo bị chậm tiến độ, dòng tiền ESG có thể chững lại.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS từ 53,500đ (02/2026) tăng lên 55,200đ (03/2026) rồi điều chỉnh mạnh về 42,000đ (04/2026). Mục tiêu 58,000-62,000đ KHÔNG đạt được. Thay vào đó, sau 2 tháng giá giảm 21.5%.

<strong>Đánh giá dự đoán:</strong> SAI - Dự đoán 58,000-62,000đ trong 3-6 tháng hoàn toàn sai. Mặc dù dòng tiền ESG có hỗ trợ (giá tăng từ 50,000đ lên 55,200đ), nhưng không đủ để ngăn đợt chốt lời mạnh sau ATH.

<strong>Bài học:</strong> Dòng tiền ESG tạo nền tảng tốt nhưng KHÔNG miễn nhiễm với áp lực chốt lời kỹ thuật. Khi giá đã tăng +40% trong 6 tháng (từ 39,500đ Q4/2024 lên 55,200đ Q1/2026), áp lực chốt lời sẽ lấn át dòng tiền mới. Knowledge cần bổ sung: "Dòng tiền ESG ổn định nhưng không đủ mạnh để chống lại wave chốt lời sau khi giá tăng >40% trong 6 tháng".`
      }
    },
    {
      date: '2026-03',
      type: 'company',
      title: 'ATH 56,400đ',
      description: '03/03/2026: PVS đạt đỉnh lịch sử 56,400đ - All-Time High. Backlog >$4B, LN 2025 +51%',
      impact: 'positive',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> PVS chạm đỉnh lịch sử 56,400đ (All-Time High) là kết quả của sự hội tụ nhiều yếu tố tích cực:

1. <strong>Backlog vượt $4 tỷ USD:</strong> Lượng hợp đồng kỷ lục, đảm bảo doanh thu nhiều năm tới
2. <strong>Lợi nhuận 2025 tăng 51%:</strong> Mức tăng trưởng ấn tượng, vượt xa kỳ vọng
3. <strong>Giá Brent ổn định $75/thùng:</strong> Môi trường thuận lợi cho ngành dầu khí
4. <strong>Tỷ giá USD/VND 25,600:</strong> Có lợi cho doanh thu USD trong khi chi phí nhân công tính bằng VND

<strong>⚠️ CẢNH BÁO:</strong> Việc phá đỉnh lịch sử thu hút sự chú ý và hiệu ứng FOMO, nhưng cũng là thời điểm nhiều NĐT dài hạn chốt lời sau khi nắm giữ qua chu kỳ tăng giá.

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐⭐⭐ (5/5) - Đỉnh lịch sử
<strong>Xu hướng:</strong> Đỉnh ngắn hạn, có thể điều chỉnh để tích lũy`,
        prediction: `<strong>Dự đoán:</strong> Tại ATH 56,400đ, PVS đang ở vùng định giá CAO với P/E ước tính 12-14x. Mặc dù fundamentals vẫn mạnh (backlog >$4B), nhưng áp lực chốt lời sẽ gia tăng.

<strong>Ngắn hạn (1-3 tháng):</strong> PVS có thể ĐIỀU CHỈNH về vùng hỗ trợ 48,000-52,000đ (giảm 8-15%) trước khi tích lũy lại. Điều này là bình thường trong chu kỳ tăng giá.

<strong>Bản chất:</strong> Đây sẽ là nhịp điều chỉnh KỸ THUẬT chứ không phải đảo chiều xu hướng, nếu không có tin xấu đột biến về giá dầu hoặc backlog.

<strong>Chiến lược:</strong> Chốt lời một phần (30-50%) tại vùng đỉnh và chờ mua lại khi giá về vùng hỗ trợ.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá PVS từ ATH 55,200đ (03/2026) giảm mạnh xuống 42,000đ (04/2026), tương đương -24% trong 1 tháng. Mức điều chỉnh VƯỢT QUÁ dự đoán 48,000-52,000đ (giảm 8-15%), thực tế giảm 24%.

<strong>Đánh giá dự đoán:</strong> ĐÚNG MỘT PHẦN - Dự đoán đúng hướng (điều chỉnh kỹ thuật), nhưng SAI về mức độ. Dự đoán giảm 8-15% về 48,000-52,000đ, thực tế giảm 24% về 42,000đ.

<strong>Bài học:</strong> Khi cổ phiếu phá ATH sau chu kỳ tăng dài, mức điều chỉnh có thể mạnh hơn dự kiến do: (1) Lực chốt lời tích tụ từ nhiều vùng giá, (2) Momentum bán có thể tự cường hóa khi giá phá các vùng hỗ trợ liên tiếp. Knowledge cần update: "Điều chỉnh sau ATH có thể đạt 20-30%, không chỉ 8-15% như các đợt điều chỉnh thông thường".`
      }
    },
    {
      date: '2026-04',
      type: 'company',
      title: 'Điều chỉnh -30%',
      description: 'Điều chỉnh về 39,300đ (-30% từ ATH) do chốt lời và valuation căng',
      impact: 'negative',
      analysis: {
        explanation: `<strong>Bản chất sự kiện:</strong> Sau khi đạt ATH, PVS trải qua đợt điều chỉnh -30% về 39,300đ. Đây là hiện tượng HOÀN TOÀN BÌNH THƯỜNG trong chu kỳ thị trường với những cổ phiếu đã tăng mạnh trong thời gian ngắn.

<strong>Nguyên nhân chính:</strong>
1. <strong>Áp lực chốt lời:</strong> NĐT đã nắm giữ từ vùng giá thấp hiện thực hóa lợi nhuận sau khi tăng 50-70%
2. <strong>Valuation căng:</strong> P/E forward có thể đã lên mức 12-15x, cao hơn đáng kể so với trung bình lịch sử 8-10x của ngành

<strong>ĐIỂM QUAN TRỌNG:</strong> Fundamentals của PVS VẪN HOÀN TOÀN NGUYÊN VẸN!
• Backlog hợp đồng vẫn duy trì trên $4 tỷ USD
• Các dự án trọng điểm như Lô B, Cá Voi Xanh tiếp tục triển khai đúng tiến độ
• Giá dầu Brent $70/thùng vẫn là mức giá thuận lợi

<strong>Mức độ quan trọng:</strong> ⭐⭐⭐ (3/5) - Điều chỉnh kỹ thuật
<strong>Xu hướng:</strong> Đây là "time correction" - giá đi ngang/giảm nhẹ để chờ lợi nhuận bắt kịp kỳ vọng`,
        prediction: `<strong>Kịch bản cơ sở (50%):</strong> Giá dao động sideway trong vùng 38,000-42,000đ trong 2-3 tháng tới, chờ kết quả kinh doanh Q1-Q2/2026 để xác nhận tăng trưởng lợi nhuận.

<strong>Kịch bản tích cực (30%):</strong> Nếu có tin tốt về tiến độ dự án hoặc hợp đồng mới, giá có thể phục hồi về vùng 45,000-48,000đ trong 3-6 tháng.

<strong>Kịch bản tiêu cực (20%):</strong> Nếu giá dầu giảm sâu dưới $65 hoặc có trì hoãn dự án, giá có thể test vùng hỗ trợ 35,000-36,000đ.

<strong>🎯 ĐÂY CÓ THỂ LÀ CƠ HỘI TÍCH LŨY cho nhà đầu tư dài hạn, với điều kiện theo dõi sát tiến độ các dự án trọng điểm và kết quả kinh doanh quý tới.`,
        reality: `<strong>Kết quả thực tế:</strong> Giá hiện tại 42,000đ (cập nhật 14/04/2026). Đây là event mới nhất, chưa có đủ thời gian để đánh giá dự đoán sideway 38,000-42,000đ.

<strong>Đánh giá dự đoán:</strong> ĐANG THEO DÕI - Giá hiện tại 42,000đ nằm đúng trong vùng dự đoán (38,000-42,000đ). Cần thêm 2-3 tháng để xác nhận kịch bản sideway hay breakout.

<strong>Các yếu tố cần quan sát:</strong>
1. Kết quả Q1/2026 (dự kiến công bố cuối tháng 4) - catalyst quan trọng nhất
2. Tiến độ dự án Lô B, Cá Voi Xanh - nếu có tin tiến triển tốt sẽ hỗ trợ giá
3. Giá Brent - hiện $70/thùng, nếu giữ trên $65 sẽ duy trì tâm lý tích cực
4. Dòng tiền khối ngoại - theo dõi xem quỹ ESG có tiếp tục mua ở vùng giá thấp không
5. Vùng hỗ trợ 38,000đ - nếu bị phá vỡ cần đánh giá lại kịch bản`
      }
    }
  ],

  // Kết quả kinh doanh theo năm
  financials: [
    { year: 2020, revenue: 13500, profit: 650, backlog: 8000 },
    { year: 2021, revenue: 14300, profit: 750, backlog: 9500 },
    { year: 2022, revenue: 16413, profit: 834, backlog: 10500 },
    { year: 2023, revenue: 19500, profit: 1080, backlog: 11200 },
    { year: 2024, revenue: 24000, profit: 1100, backlog: 12749 },
    { year: 2025, revenue: 32556, profit: 1900, backlog: 21457 },
    { year: 2026, revenue: null, profit: null, backlog: 100000 }
  ],

  // Màu sắc cho các loại sự kiện
  eventColors: {
    macro: '#f59e0b',    // Vàng - sự kiện vĩ mô
    company: '#3b82f6',  // Xanh - sự kiện công ty
    industry: '#8b5cf6'  // Tím - sự kiện ngành
  },

  // Màu sắc cho impact
  impactColors: {
    positive: '#10b981',  // Xanh lá
    negative: '#ef4444',  // Đỏ
    neutral: '#64748b'    // Xám
  }
};
