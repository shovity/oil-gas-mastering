/**
 * quiz-data.js - Sample quiz questions for each learning layer
 * Exposed globally as window.QUIZ_DATA
 */

const QUIZ_DATA = {
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
      explanation: 'P/E = Price / EPS. Đây là chỉ số cho biết nhà đầu tư sẵn sàng trả bao nhiêu đồng cho 1 đồng lợi nhuận. P/E càng cao nghĩa là thị trường kỳ vọng tăng trưởng cao hoặc cổ phiếu đang đắt.'
    },
    {
      id: 'l0q2',
      type: 'multiple-choice',
      question: 'EPS (Earnings Per Share) là gì?',
      options: [
        'A. Tổng tài sản chia cho số cổ phiếu lưu hành',
        'B. Lợi nhuận sau thuế chia cho số cổ phiếu lưu hành',
        'C. Doanh thu chia cho số cổ phiếu lưu hành',
        'D. Vốn chủ sở hữu chia cho số cổ phiếu lưu hành'
      ],
      correct: 'B',
      explanation: 'EPS = Lợi nhuận sau thuế / Số cổ phiếu lưu hành bình quân. EPS cho biết mỗi cổ phiếu tạo ra bao nhiêu đồng lợi nhuận, là nền tảng để tính P/E và định giá cổ phiếu.'
    },
    {
      id: 'l0q3',
      type: 'multiple-choice',
      question: 'ROE (Return on Equity) đo lường điều gì?',
      options: [
        'A. Hiệu quả sử dụng tổng tài sản để tạo ra lợi nhuận',
        'B. Tỷ lệ lợi nhuận trên mỗi đồng doanh thu',
        'C. Hiệu quả sử dụng vốn chủ sở hữu để tạo ra lợi nhuận',
        'D. Tỷ lệ nợ so với vốn chủ sở hữu'
      ],
      correct: 'C',
      explanation: 'ROE = Lợi nhuận sau thuế / Vốn chủ sở hữu bình quân. ROE cho biết mỗi 100 đồng vốn cổ đông tạo ra bao nhiêu đồng lợi nhuận. ROE > 15% thường được coi là tốt.'
    },
    {
      id: 'l0q4',
      type: 'multiple-choice',
      question: 'Vốn hóa thị trường (Market Cap) được tính như thế nào?',
      options: [
        'A. Tổng tài sản - Tổng nợ',
        'B. Giá cổ phiếu x Số cổ phiếu lưu hành',
        'C. Lợi nhuận x Hệ số P/E',
        'D. Doanh thu x Biên lợi nhuận ròng'
      ],
      correct: 'B',
      explanation: 'Market Cap = Giá cổ phiếu hiện tại x Số cổ phiếu đang lưu hành. Đây là thước đo quy mô của một công ty trên thị trường chứng khoán, phản ánh kỳ vọng của nhà đầu tư.'
    },
    {
      id: 'l0q5',
      type: 'multiple-choice',
      question: 'Sàn HOSE (Ho Chi Minh Stock Exchange) và HNX khác nhau thế nào?',
      options: [
        'A. HOSE dành cho trái phiếu, HNX dành cho cổ phiếu',
        'B. HOSE là sàn của các công ty lớn hơn, HNX là sàn của các công ty vừa và nhỏ hơn',
        'C. HOSE có phiên giao dịch ban ngày, HNX có phiên giao dịch ban đêm',
        'D. HOSE dành cho nhà đầu tư nước ngoài, HNX dành cho nhà đầu tư trong nước'
      ],
      correct: 'B',
      explanation: 'HOSE (TP.HCM) có yêu cầu niêm yết cao hơn về vốn và lợi nhuận, thường là nơi của các công ty lớn như VNM, VIC, GAS. HNX (Hà Nội) có tiêu chí thấp hơn, phù hợp với công ty vừa và nhỏ.'
    }
  ],

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
      explanation: 'Upstream (thượng nguồn) là giai đoạn đầu: tìm kiếm mỏ dầu/khí và khai thác. Đây là phân khúc rủi ro cao nhưng tiềm năng lớn. Công ty như PVD, PVS thuộc nhóm này.'
    },
    {
      id: 'l1q2',
      type: 'multiple-choice',
      question: 'Midstream trong ngành dầu khí đề cập đến hoạt động nào?',
      options: [
        'A. Thăm dò và khoan giếng',
        'B. Sản xuất hóa chất từ dầu mỏ',
        'C. Vận chuyển, lưu trữ và xử lý dầu khí',
        'D. Bán lẻ các sản phẩm xăng dầu'
      ],
      correct: 'C',
      explanation: 'Midstream (trung nguồn) kết nối upstream và downstream: vận chuyển dầu thô/khí qua đường ống, tàu bồn; lưu trữ tại kho cảng; xử lý khí tự nhiên. GAS (PetroVietnam Gas) là ví dụ điển hình.'
    },
    {
      id: 'l1q3',
      type: 'multiple-choice',
      question: 'Công ty nào sau đây thuộc nhóm Downstream trong chuỗi dầu khí Việt Nam?',
      options: [
        'A. PVD (PV Drilling)',
        'B. PVS (PetroVietnam Technical Services)',
        'C. BSR (Binh Son Refining)',
        'D. GAS (PetroVietnam Gas)'
      ],
      correct: 'C',
      explanation: 'BSR (Lọc hóa dầu Bình Sơn) vận hành nhà máy lọc dầu Dung Quất, chuyển đổi dầu thô thành các sản phẩm như xăng, diesel, LPG. Đây là hoạt động downstream điển hình.'
    },
    {
      id: 'l1q4',
      type: 'multiple-choice',
      question: 'Giá dầu Brent và WTI khác nhau chủ yếu ở điểm nào?',
      options: [
        'A. Brent là dầu nặng, WTI là dầu nhẹ',
        'B. Brent là chuẩn dầu Bắc Hải (châu Âu), WTI là chuẩn dầu Mỹ',
        'C. Brent dùng cho xăng, WTI dùng cho dầu diesel',
        'D. WTI luôn có giá cao hơn Brent'
      ],
      correct: 'B',
      explanation: 'Brent Crude là chuẩn dầu quốc tế, khai thác từ Biển Bắc (Anh/Na Uy), dùng định giá ~2/3 lượng dầu giao dịch toàn cầu. WTI (West Texas Intermediate) là chuẩn dầu Mỹ. Dầu Việt Nam thường tham chiếu giá Brent.'
    },
    {
      id: 'l1q5',
      type: 'multiple-choice',
      question: 'PSC (Production Sharing Contract) trong dầu khí là gì?',
      options: [
        'A. Hợp đồng mua bán dầu thô giữa các quốc gia',
        'B. Hợp đồng chia sản phẩm giữa nhà nước và công ty khai thác',
        'C. Hợp đồng bảo hiểm rủi ro khai thác dầu',
        'D. Hợp đồng vận chuyển dầu quốc tế'
      ],
      correct: 'B',
      explanation: 'PSC (Hợp đồng chia sản phẩm) là mô hình phổ biến ở Việt Nam: nhà thầu bỏ vốn tìm kiếm, khai thác; nếu có dầu thì chia sản lượng với nhà nước theo tỷ lệ thỏa thuận. PVN thường đại diện nhà nước ký PSC với các công ty như Shell, Total.'
    },
    {
      id: 'l1q6',
      type: 'multiple-choice',
      question: 'Day rate trong ngành dịch vụ dầu khí là gì?',
      options: [
        'A. Giá dầu tăng trong ngày',
        'B. Chi phí thuê giàn khoan hoặc tàu dịch vụ theo ngày',
        'C. Tỷ lệ chiết khấu hàng ngày trong hợp đồng',
        'D. Số thùng dầu khai thác được trong một ngày'
      ],
      correct: 'B',
      explanation: 'Day rate là giá thuê thiết bị khoan (giàn khoan, tàu địa vật lý...) theo ngày, thường tính bằng USD/ngày. Đây là chỉ số quan trọng với PVD - khi day rate tăng thì doanh thu và lợi nhuận PVD tăng theo.'
    },
    {
      id: 'l1q7',
      type: 'multiple-choice',
      question: 'OPEC+ quyết định cắt giảm sản lượng dầu sẽ ảnh hưởng như thế nào đến cổ phiếu dầu khí Việt Nam?',
      options: [
        'A. Không ảnh hưởng vì Việt Nam không phải thành viên OPEC',
        'B. Thường tích cực vì giá dầu tăng làm tăng doanh thu các công ty khai thác',
        'C. Tiêu cực vì Việt Nam phải nhập khẩu nhiều dầu hơn',
        'D. Chỉ ảnh hưởng đến BSR vì cần mua dầu thô đắt hơn'
      ],
      correct: 'B',
      explanation: 'Khi OPEC+ cắt giảm nguồn cung, giá dầu thế giới thường tăng. Điều này lợi cho các công ty khai thác như PVN, PVD (doanh thu tăng) và tổng thể ngành upstream. Tuy nhiên BSR có thể bị ảnh hưởng ngược chiều do chi phí dầu thô đầu vào tăng.'
    }
  ],

  layer2: [
    {
      id: 'l2q1',
      type: 'multiple-choice',
      question: 'Crack spread là gì và ai cần quan tâm nhất đến chỉ số này?',
      options: [
        'A. Chênh lệch giá dầu Brent và WTI - quan trọng với PVD',
        'B. Chênh lệch giá dầu thô và giá xăng/diesel - quan trọng với BSR',
        'C. Biên lợi nhuận của công ty khoan - quan trọng với PVS',
        'D. Chênh lệch giá khí đầu vào và phân bón - quan trọng với DPM'
      ],
      correct: 'B',
      explanation: 'Crack spread = Giá xăng/diesel - Giá dầu thô. Đây là chỉ số quan trọng nhất với BSR (lọc dầu Bình Sơn). Crack spread cao → BSR lời nhiều trên mỗi thùng lọc. Crack spread thấp/âm → BSR có thể lỗ.'
    },
    {
      id: 'l2q2',
      type: 'multiple-choice',
      question: 'GRM (Gross Refining Margin) $5/thùng có nghĩa là gì?',
      options: [
        'A. Chi phí lọc dầu là 5 USD mỗi thùng',
        'B. Lợi nhuận gộp trên mỗi thùng dầu lọc ra xăng là 5 USD',
        'C. Giá dầu thô cao hơn giá xăng 5 USD mỗi thùng',
        'D. Thuế xuất khẩu xăng là 5 USD mỗi thùng'
      ],
      correct: 'B',
      explanation: 'GRM (Gross Refining Margin) = doanh thu sản phẩm lọc dầu - chi phí dầu thô đầu vào. GRM $5/thùng nghĩa là mỗi thùng dầu thô đưa vào lọc, BSR lời 5 USD trước khi trừ chi phí vận hành. GRM càng cao, BSR càng có lợi.'
    },
    {
      id: 'l2q3',
      type: 'multiple-choice',
      question: 'Backlog của PVS và PVD là gì? Tại sao nó quan trọng?',
      options: [
        'A. Tổng tài sản của công ty - quan trọng để tính P/B',
        'B. Giá trị hợp đồng đã ký nhưng chưa thực hiện - dùng dự báo doanh thu tương lai',
        'C. Số lượng đơn hàng hủy trong kỳ - chỉ số rủi ro',
        'D. Lợi nhuận tích lũy chưa chia cổ tức - nguồn trả nợ'
      ],
      correct: 'B',
      explanation: 'Backlog = giá trị hợp đồng đã ký nhưng chưa thực hiện. Backlog cao → doanh thu được đảm bảo trong tương lai. Backlog thấp → cần ký thêm hợp đồng mới. Đây là chỉ số Tier 2 quan trọng để đánh giá PVS, PVD.'
    },
    {
      id: 'l2q4',
      type: 'multiple-choice',
      question: 'Khi phân tích BSR, ngoài crack spread cần kiểm tra thêm chỉ số nào?',
      options: [
        'A. Day rate và rig count',
        'B. Utilization rate nhà máy lọc dầu và lãi/lỗ tồn kho',
        'C. Giá ure thế giới và mùa vụ nông nghiệp',
        'D. Backlog hợp đồng và CAPEX PVN'
      ],
      correct: 'B',
      explanation: 'Với BSR cần kiểm tra: (1) Utilization rate - nhà máy chạy >90% là tốt, <80% có thể đang bảo trì; (2) Lãi/lỗ tồn kho - mua dầu rẻ trước, bán xăng giá mới → lời thêm. Ngược lại mua đắt mà dầu giảm → lỗ tồn kho.'
    },
    {
      id: 'l2q5',
      type: 'multiple-choice',
      question: 'Bẫy "BSR lãi kỷ lục" phổ biến là gì?',
      options: [
        'A. Lãi kỷ lục do mở rộng công suất - không bền vững',
        'B. Lãi kỷ lục có thể do lãi tồn kho một lần - không phản ánh lợi nhuận cốt lõi',
        'C. Lãi kỷ lục do crack spread cao liên tục 5 năm',
        'D. Lãi kỷ lục vì BSR tăng giá bán xăng vượt quy định'
      ],
      correct: 'B',
      explanation: 'Bẫy phổ biến: BSR lãi kỷ lục có thể do lãi tồn kho (mua dầu rẻ, bán xăng giá mới) - đây là khoản lời 1 lần, không lặp lại. Cần tách: LN lõi từ hoạt động lọc dầu là bao nhiêu, lãi tồn kho là bao nhiêu. Nếu phần lớn là lãi tồn kho → không bền.'
    },
    {
      id: 'l2q6',
      type: 'multiple-choice',
      question: 'Khi đọc BCTC DPM, chỉ số nào quan trọng nhất?',
      options: [
        'A. Crack spread và utilization rate nhà máy',
        'B. Giá ure thế giới và giá khí đầu vào PVN cấp',
        'C. Day rate giàn khoan và backlog hợp đồng',
        'D. Giá dầu Brent và CAPEX PVN'
      ],
      correct: 'B',
      explanation: 'Với DPM (phân bón): Biên LN = Giá bán ure - Giá khí đầu vào. Khi giá ure tăng nhanh hơn giá khí → biên tăng mạnh. Khi giá khí tăng nhanh hơn ure → biên bị nén. Đây là 2 biến số quyết định lợi nhuận DPM.'
    },
    {
      id: 'l2q7',
      type: 'multiple-choice',
      question: 'PLX (Petrolimex) doanh thu tăng 30% nhưng điều này có thực sự tốt không?',
      options: [
        'A. Tốt vì doanh thu tăng luôn phản ánh tăng trưởng thực',
        'B. Chưa chắc - cần kiểm tra sản lượng tiêu thụ (tấn/lít), không chỉ doanh thu tiền',
        'C. Tốt vì biên lợi nhuận PLX linh hoạt theo thị trường',
        'D. Chưa chắc - cần kiểm tra crack spread có tăng không'
      ],
      correct: 'B',
      explanation: 'Bẫy PLX: Doanh thu tăng 30% có thể do giá xăng tăng, KHÔNG phải sản lượng tăng. Biên PLX cố định ~300-500đ/lít, nên LN phụ thuộc sản lượng bán, không phải giá. Cần check sản lượng tiêu thụ (tấn), không chỉ doanh thu (tiền).'
    },
    {
      id: 'l2q8',
      type: 'multiple-choice',
      question: 'Utilization rate của nhà máy lọc dầu BSR dưới 80% thường có nghĩa là gì?',
      options: [
        'A. Nhà máy đang hoạt động hiệu quả cao',
        'B. Nhà máy đang bảo trì hoặc gặp sự cố kỹ thuật',
        'C. Crack spread quá cao nên hạn chế sản xuất',
        'D. BSR đang chuẩn bị mở rộng công suất'
      ],
      correct: 'B',
      explanation: 'Utilization rate <80% thường báo hiệu bảo trì định kỳ hoặc sự cố kỹ thuật → sản lượng giảm → doanh thu giảm trong kỳ đó. Mức >90% là tốt. Cần check lịch bảo trì để biết đây là tạm thời hay dài hạn.'
    },
    {
      id: 'l2q9',
      type: 'multiple-choice',
      question: 'Khi phân tích PVD, "day rate" tăng từ $80,000 lên $100,000/ngày ảnh hưởng như thế nào?',
      options: [
        'A. Không ảnh hưởng vì PVD thu phí theo dự án, không theo ngày',
        'B. Doanh thu và lợi nhuận PVD tăng trực tiếp vì đây là giá thuê giàn khoan theo ngày',
        'C. Chi phí PVD tăng vì phải thuê giàn khoan với giá cao hơn',
        'D. Chỉ ảnh hưởng đến GAS, không ảnh hưởng PVD'
      ],
      correct: 'B',
      explanation: 'Day rate là giá PVD thu được khi cho thuê giàn khoan theo ngày. Day rate tăng → doanh thu PVD tăng trực tiếp. Đây là chỉ số Tier 1 quan trọng nhất khi phân tích PVD.'
    },
    {
      id: 'l2q10',
      type: 'multiple-choice',
      question: 'Bẫy "backlog cao nhưng margin thấp" với PVS có nghĩa là gì?',
      options: [
        'A. Backlog lớn nhưng hợp đồng ký với giá thấp do cạnh tranh → doanh thu cao mà lợi nhuận không tăng',
        'B. Backlog cao vì ký hợp đồng tương lai giá tốt → lợi nhuận sắp tăng',
        'C. Backlog thấp nhưng margin cao → tốt hơn backlog cao margin thấp',
        'D. Backlog và margin không liên quan đến nhau'
      ],
      correct: 'A',
      explanation: 'Bẫy: Nhìn thấy backlog kỷ lục → hào hứng. Nhưng nếu hợp đồng mới được ký với biên lợi nhuận thấp (cạnh tranh giá), doanh thu tăng mà LN không tăng tương ứng. Luôn check biên LN trên backlog mới, không chỉ nhìn giá trị tuyệt đối.'
    },
    {
      id: 'l2q11',
      type: 'multiple-choice',
      question: 'Giá dầu Brent và WTI khác nhau chủ yếu ở điểm gì khi phân tích công ty dầu khí Việt Nam?',
      options: [
        'A. Brent dùng cho dầu nặng, WTI dùng cho dầu nhẹ',
        'B. Brent là chuẩn quốc tế, dầu Việt Nam tham chiếu Brent; WTI là chuẩn Mỹ',
        'C. WTI luôn cao hơn Brent nên tốt hơn để định giá',
        'D. Brent dùng cho xăng, WTI dùng cho diesel'
      ],
      correct: 'B',
      explanation: 'Brent Crude (Biển Bắc) là chuẩn quốc tế, định giá ~2/3 lượng dầu giao dịch toàn cầu. Dầu Việt Nam tham chiếu giá Brent. WTI (West Texas Intermediate) là chuẩn của Mỹ. Khi phân tích cổ phiếu dầu khí Việt Nam, luôn theo dõi Brent.'
    },
    {
      id: 'l2q12',
      type: 'multiple-choice',
      question: 'Tỷ giá USD/VND tăng (USD mạnh hơn) ảnh hưởng như thế nào đến các công ty dầu khí?',
      options: [
        'A. Tốt cho tất cả vì dầu giao dịch bằng USD',
        'B. Tốt cho upstream (bán dầu USD), xấu cho downstream (nhập dầu thô bằng USD)',
        'C. Xấu cho tất cả vì chi phí nhập khẩu tăng',
        'D. Không ảnh hưởng vì Nhà nước kiểm soát giá'
      ],
      correct: 'B',
      explanation: 'USD tăng → upstream (PVD, PVS) được hưởng lợi vì bán dầu/dịch vụ bằng USD, quy về VND nhiều hơn. Downstream như PLX, BSR phải nhập dầu thô bằng USD → chi phí tăng khi USD mạnh. Ma trận: Upstream XANH, Downstream ĐỎ khi USD tăng.'
    },
    {
      id: 'l2q13',
      type: 'multiple-choice',
      question: 'Mùa vụ nông nghiệp ảnh hưởng như thế nào đến DPM và DCM?',
      options: [
        'A. Không ảnh hưởng vì phân bón bán quanh năm',
        'B. Vụ Hè Thu (Q2-Q3) là mùa nhu cầu phân bón cao nhất trong năm',
        'C. Vụ Đông Xuân (Q4-Q1) là mùa cao điểm duy nhất',
        'D. Chỉ ảnh hưởng đến xuất khẩu, không ảnh hưởng nội địa'
      ],
      correct: 'B',
      explanation: 'Vụ Hè Thu (tháng 4-8) là mùa nhu cầu phân bón cao nhất → DPM, DCM bán được nhiều nhất Q2-Q3. Vụ Đông Xuân (tháng 11-2) là trung bình. Biết mùa vụ giúp không ngạc nhiên khi LN Q4 thấp hơn Q2.'
    },
    {
      id: 'l2q14',
      type: 'multiple-choice',
      question: 'Khi đọc BCTC GAS (PetroVietnam Gas), đặc điểm nổi bật là gì?',
      options: [
        'A. LN biến động mạnh theo giá dầu như PVD',
        'B. LN ổn định nhờ hợp đồng dài hạn nhưng không kỳ vọng tăng trưởng cao',
        'C. GRM cao khi giá dầu tăng',
        'D. Backlog kỷ lục phản ánh tăng trưởng mạnh'
      ],
      correct: 'B',
      explanation: 'GAS có hợp đồng cung cấp khí dài hạn → LN ổn định, dự đoán được. Tuy nhiên đây cũng là giới hạn: LN khó tăng mạnh vì đã được "lock" trong hợp đồng. Không dùng kỳ vọng tăng trưởng cao từ GAS.'
    },
    {
      id: 'l2q15',
      type: 'multiple-choice',
      question: 'CAPEX của PVN (Tập đoàn Dầu khí Việt Nam) ảnh hưởng trực tiếp nhất đến công ty nào?',
      options: [
        'A. BSR và PLX',
        'B. DPM và DCM',
        'C. PVD và PVS',
        'D. GAS và PVT'
      ],
      correct: 'C',
      explanation: 'PVN tăng CAPEX thăm dò → thuê nhiều giàn khoan → PVD có việc, day rate tăng. Thuê nhiều dịch vụ kỹ thuật → PVS có hợp đồng, backlog tăng. PVD và PVS phụ thuộc trực tiếp vào quyết định đầu tư thăm dò của PVN.'
    },
    {
      id: 'l2q16',
      type: 'multiple-choice',
      question: 'Trong các metrics Tier 1, chỉ số nào thị trường phản ứng ngay trong ngày?',
      options: [
        'A. Backlog hợp đồng PVS',
        'B. CAPEX thăm dò của PVN',
        'C. Giá dầu Brent và crack spread',
        'D. Tiến độ dự án LNG'
      ],
      correct: 'C',
      explanation: 'Tier 1 - thị trường phản ứng ngay: Giá dầu Brent, sản lượng khai thác, crack spread, giá khí đầu vào, giá phân bón ure, utilization rate. Backlog và CAPEX PVN là Tier 2 - quan trọng nhưng phản ứng chậm hơn.'
    },
    {
      id: 'l2q17',
      type: 'multiple-choice',
      question: 'Khi so sánh tốc độ tăng của giá ure và giá khí để đánh giá DPM, kết luận nào đúng?',
      options: [
        'A. Giá ure tăng nhanh hơn giá khí → biên lợi nhuận DPM bị nén',
        'B. Giá khí tăng nhanh hơn giá ure → biên lợi nhuận DPM tăng',
        'C. Giá ure tăng nhanh hơn giá khí → biên lợi nhuận DPM tăng',
        'D. Tốc độ tăng của 2 loại giá không ảnh hưởng đến biên LN'
      ],
      correct: 'C',
      explanation: 'Biên LN DPM = Giá bán ure - Giá khí đầu vào. Nếu ure tăng nhanh hơn khí → chênh lệch giãn ra → biên tăng → LN tốt. Nếu khí tăng nhanh hơn ure → chi phí tăng nhanh hơn doanh thu → biên bị nén → LN giảm.'
    },
    {
      id: 'l2q18',
      type: 'multiple-choice',
      question: '"Gia dầu $80 = tốt cho tất cả dầu khí" là nhận định đúng hay sai?',
      options: [
        'A. Đúng - giá dầu cao luôn tốt cho toàn ngành',
        'B. Sai - tốt cho upstream/GAS, nhưng có thể xấu cho BSR (nhập dầu đắt) và DPM (khí đầu vào đắt)',
        'C. Đúng - vì tất cả công ty đều được lợi từ giá dầu cao',
        'D. Sai - chỉ tốt cho PLX và OIL vì họ bán lẻ xăng dầu'
      ],
      correct: 'B',
      explanation: 'Đây là bẫy phổ biến nhất. Giá dầu tăng tốt cho upstream (PVD, PVS, GAS) nhưng xấu cho BSR (phải nhập dầu thô đắt hơn) và DPM/DCM (khí đầu vào theo giá dầu tăng → chi phí tăng). Luôn phân biệt upstream vs downstream.'
    },
    {
      id: 'l2q19',
      type: 'multiple-choice',
      question: 'Rig count (số giàn khoan hoạt động) là chỉ số quan trọng khi phân tích công ty nào?',
      options: [
        'A. BSR và PLX',
        'B. DPM và DCM',
        'C. PVD và PVS',
        'D. GAS và PVT'
      ],
      correct: 'C',
      explanation: 'Rig count toàn cầu (Baker Hughes công bố hàng tuần) phản ánh nhu cầu khoan thăm dò. Rig count tăng → nhiều giàn khoan cần thuê → PVD có việc, day rate tăng. Rig count giảm → PVD và PVS ít việc. Đây là chỉ số dẫn dắt quan trọng cho dịch vụ thượng nguồn.'
    },
    {
      id: 'l2q20',
      type: 'multiple-choice',
      question: 'Freight rate (giá cước vận tải) quan trọng nhất với công ty nào trong ngành dầu khí?',
      options: [
        'A. PVD (PV Drilling)',
        'B. PVT (PetroVietnam Transportation)',
        'C. BSR (Binh Son Refining)',
        'D. DPM (Đạm Phú Mỹ)'
      ],
      correct: 'B',
      explanation: 'Freight rate (giá cước vận tải dầu/khí bằng tàu) là chỉ số Tier 2 quan trọng nhất với PVT - công ty vận tải dầu khí. Freight rate cao → doanh thu và lợi nhuận PVT tăng. Freight rate phụ thuộc vào nhu cầu vận chuyển dầu toàn cầu.'
    }
  ],
  layer3: [
    {
      id: 'l3q1',
      type: 'multiple-choice',
      question: 'Ngành dầu khí có đặc điểm chu kỳ như thế nào so với gia cổ phiếu?',
      options: [
        'A. Cổ phiếu tăng cùng lúc với kết quả kinh doanh',
        'B. Cổ phiếu chạy TRƯỚC giá dầu và kết quả kinh doanh',
        'C. Kết quả kinh doanh luôn dẫn dắt giá cổ phiếu',
        'D. Giá dầu và cổ phiếu luôn đồng bộ hoàn toàn'
      ],
      correct: 'B',
      explanation: 'Quy tắc vàng: Cổ phiếu dầu khí chạy TRƯỚC giá dầu và BCTC. Giá CP tăng khi giá dầu bắt đầu hồi phục - dù LN vẫn xấu. Giá CP giảm khi giá dầu bắt đầu giảm - dù LN vẫn tốt. Khi BCTC đẹp nhất → thường là lúc CP đã tăng xong rồi.'
    },
    {
      id: 'l3q2',
      type: 'multiple-choice',
      question: 'Chu kỳ upstream có mấy giai đoạn chính?',
      options: [
        'A. 2 giai đoạn: tăng và giảm',
        'B. 3 giai đoạn: đáy, đỉnh, và hồi phục',
        'C. 4 giai đoạn: đáy, hồi phục, tăng trưởng, đỉnh → suy giảm',
        'D. 5 giai đoạn như chu kỳ kinh tế chuẩn'
      ],
      correct: 'C',
      explanation: '4 giai đoạn chu kỳ upstream: (1) Đáy - giá dầu thấp, LN giảm/lỗ; (2) Hồi phục - giá dầu tăng, CP tăng mạnh nhất; (3) Tăng trưởng - giá dầu cao, LN ổn định, CP đi ngang; (4) Đỉnh → Suy giảm - giá dầu bắt đầu giảm, CP giảm dù LN vẫn tốt.'
    },
    {
      id: 'l3q3',
      type: 'multiple-choice',
      question: 'Thời điểm tốt nhất để mua cổ phiếu upstream là khi nào?',
      options: [
        'A. Khi BCTC đẹp nhất, lợi nhuận cao kỷ lục',
        'B. Khi giá dầu đang ở mức cao nhất $100+',
        'C. Cuối giai đoạn đáy khi giá dầu bắt đầu ổn định và có tín hiệu hồi phục',
        'D. Khi tất cả nhà đầu tư đều hào hứng mua vào'
      ],
      correct: 'C',
      explanation: 'Thời điểm tốt nhất là cuối giai đoạn 1 (đáy) và đầu giai đoạn 2 (hồi phục). Lúc này BCTC vẫn xấu, nhiều người còn sợ, nhưng giá dầu đã ngừng giảm và có tín hiệu hồi phục. Giai đoạn 2 là lúc CP tăng mạnh nhất.'
    },
    {
      id: 'l3q4',
      type: 'multiple-choice',
      question: 'Khi giá dầu tăng, phân khúc nào trong dầu khí thường được hưởng lợi?',
      options: [
        'A. Upstream (PVD, PVS) và GAS',
        'B. Downstream (PLX, BSR) và phân bón (DPM)',
        'C. Tất cả phân khúc đều được hưởng lợi như nhau',
        'D. Chỉ có BSR và PLX hưởng lợi'
      ],
      correct: 'A',
      explanation: 'Khi giá dầu tăng: Upstream (PVD, PVS) XANH - doanh thu tăng mạnh; GAS XANH - giá khí bán theo giá dầu. Ngược lại BSR VÀNG (phụ thuộc crack spread), DPM ĐỎ (khí đầu vào đắt). Phân biệt rõ upstream vs downstream.'
    },
    {
      id: 'l3q5',
      type: 'multiple-choice',
      question: 'Khi giá dầu giảm, phân khúc nào có thể hưởng lợi?',
      options: [
        'A. PVD và PVS vì CAPEX tăng',
        'B. DPM và DCM vì khí đầu vào rẻ hơn',
        'C. GAS vì ký hợp đồng giá cao hơn',
        'D. PVT vì vận chuyển nhiều dầu hơn'
      ],
      correct: 'B',
      explanation: 'Khi giá dầu giảm: DPM, DCM XANH vì giá khí đầu vào (liên động với giá dầu) giảm → biên LN tăng. Tuy nhiên nếu giá ure cũng giảm nhanh hơn giá khí → DPM vẫn lỗ. Upstream (PVD, PVS) ĐỎ vì PVN cắt CAPEX.'
    },
    {
      id: 'l3q6',
      type: 'multiple-choice',
      question: 'Trong giai đoạn đáy chu kỳ upstream, dấu hiệu nào cho thấy đáy đang hình thành?',
      options: [
        'A. BCTC các quý tiếp theo ngày càng xấu hơn',
        'B. OPEC+ cắt giảm sản lượng mạnh và giá dầu ổn định 2-3 tháng',
        'C. Nhà đầu tư ồ ạt bán tháo cổ phiếu dầu khí',
        'D. Giá dầu vẫn tiếp tục giảm nhưng chậm lại'
      ],
      correct: 'B',
      explanation: 'Tín hiệu đáy: OPEC+ cắt giảm mạnh + giá dầu ổn định 2-3 tháng không giảm thêm + rig count chạm đáy + PVN chuẩn bị tăng CAPEX + tồn kho dầu thế giới bắt đầu giảm. Khi tin xấu nhiều nhất và không ai muốn mua → thường là lúc gần đáy.'
    },
    {
      id: 'l3q7',
      type: 'multiple-choice',
      question: 'Trong giai đoạn đỉnh chu kỳ upstream, dấu hiệu nguy hiểm nào cần chú ý?',
      options: [
        'A. BCTC rất đẹp và tất cả đều lạc quan',
        'B. OPEC+ bất đồng + tồn kho dầu thế giới tăng + giá dầu >$100 kích thích shale oil Mỹ',
        'C. Insider đang mua thêm cổ phiếu',
        'D. PVN vừa công bố tăng CAPEX thăm dò'
      ],
      correct: 'B',
      explanation: 'Tín hiệu đỉnh nguy hiểm: OPEC+ bất đồng, một số nước tăng sản lượng + tồn kho dầu thế giới tăng 3 tuần liên tiếp + giá dầu >$100 kích thích sản xuất shale oil Mỹ + PVN bắt đầu review dự án. Lúc tin tốt nhất, ai cũng hào hứng → thường là gần đỉnh.'
    },
    {
      id: 'l3q8',
      type: 'multiple-choice',
      question: 'Baker Hughes rig count giảm liên tục 3 tháng là tín hiệu gì?',
      options: [
        'A. Tín hiệu đáy đang hình thành - ít hoạt động khoan mới',
        'B. Tín hiệu đỉnh - ngành đang quá nóng',
        'C. Không có ý nghĩa gì đặc biệt',
        'D. Tín hiệu ngành đang tăng trưởng mạnh'
      ],
      correct: 'A',
      explanation: 'Rig count giảm = ít giàn khoan hoạt động = ít đầu tư thăm dò = thường xảy ra khi giá dầu thấp (giai đoạn đáy). Rig count chạm đáy thường là tín hiệu cung sắp thiếu hụt trong tương lai → giá dầu có thể hồi phục. Đây là chỉ số dẫn dắt quan trọng.'
    },
    {
      id: 'l3q9',
      type: 'multiple-choice',
      question: 'Chu kỳ phân bón (DPM, DCM) khác chu kỳ dầu như thế nào?',
      options: [
        'A. Hoàn toàn giống nhau vì phân bón dùng khí từ dầu',
        'B. Chu kỳ phân bón phụ thuộc chênh lệch giá ure và giá khí, không hoàn toàn theo giá dầu',
        'C. Chu kỳ phân bón ngắn hơn chu kỳ dầu 2 lần',
        'D. Chu kỳ phân bón không liên quan gì đến dầu khí'
      ],
      correct: 'B',
      explanation: 'Phân bón có chu kỳ RIÊNG: phụ thuộc vào (1) giá ure thế giới và (2) giá khí đầu vào. Có thể giá dầu tăng mà DPM vẫn lợi (nếu giá ure tăng nhanh hơn giá khí). Ngược lại, giá dầu giảm mà DPM vẫn lỗ (nếu giá ure giảm nhanh hơn giá khí).'
    },
    {
      id: 'l3q10',
      type: 'multiple-choice',
      question: 'Trung Quốc hạn chế xuất khẩu ure ảnh hưởng như thế nào đến DPM?',
      options: [
        'A. Xấu vì Việt Nam phụ thuộc vào ure Trung Quốc',
        'B. Tốt vì nguồn cung ure thế giới giảm → giá ure tăng → biên LN DPM tăng',
        'C. Không ảnh hưởng vì DPM tự sản xuất ure',
        'D. Xấu vì DPM xuất khẩu ure sang Trung Quốc'
      ],
      correct: 'B',
      explanation: 'Trung Quốc là nhà xuất khẩu ure lớn nhất thế giới. Khi TQ hạn chế xuất khẩu → nguồn cung ure thế giới giảm → giá ure tăng. Đây là tin tốt cho DPM, DCM vì giá bán sản phẩm tăng (nếu giá khí đầu vào tăng chậm hơn).'
    },
    {
      id: 'l3q11',
      type: 'multiple-choice',
      question: 'Hiện tượng La Niña tác động như thế nào đến chu kỳ phân bón?',
      options: [
        'A. La Niña gây hạn hán → nhu cầu phân bón giảm → xấu cho DPM',
        'B. La Niña gây mưa nhiều → mùa vụ tốt → nhu cầu phân bón tăng → tốt cho DPM',
        'C. La Niña không ảnh hưởng đến nhu cầu phân bón',
        'D. La Niña làm giá khí tăng → xấu cho DPM'
      ],
      correct: 'B',
      explanation: 'La Niña thường mang mưa nhiều hơn ở Đông Nam Á → điều kiện canh tác tốt → nông dân tăng sử dụng phân bón → nhu cầu DPM, DCM tăng. El Niño thường gây hạn hán → nhu cầu phân bón giảm. Theo dõi dự báo thời tiết nông nghiệp khi phân tích phân bón.'
    },
    {
      id: 'l3q12',
      type: 'multiple-choice',
      question: 'Nhà đầu tư nội bộ (insider) bán cổ phiếu dầu khí là tín hiệu gì?',
      options: [
        'A. Không có ý nghĩa gì, họ chỉ cần tiền mặt',
        'B. Tín hiệu đỉnh chu kỳ - người trong cuộc biết đỉnh rồi nên chốt lời',
        'C. Tín hiệu đáy chu kỳ - cổ phiếu đang rẻ',
        'D. Tín hiệu trung tính'
      ],
      correct: 'B',
      explanation: 'Insider bán CP là một trong 6 tín hiệu đỉnh chu kỳ. Những người trong công ty thường hiểu rõ triển vọng kinh doanh hơn nhà đầu tư bên ngoài. Khi nhiều insider đồng loạt bán → cần thận trọng. Ngược lại, insider mua khi CP giảm → tín hiệu đáy.'
    },
    {
      id: 'l3q13',
      type: 'multiple-choice',
      question: 'Trong giai đoạn tăng trưởng (giai đoạn 3) chu kỳ upstream, giá cổ phiếu thường như thế nào?',
      options: [
        'A. Tăng mạnh nhất vì LN đang ở mức cao',
        'B. Tăng chậm hoặc đi ngang dù LN tốt - vì giá dầu đã phản ánh vào giá CP rồi',
        'C. Giảm mạnh vì chu kỳ sắp đến đỉnh',
        'D. Biến động rất lớn, không dự đoán được'
      ],
      correct: 'B',
      explanation: 'Nghịch lý: Giai đoạn 3 - giá dầu cao, LN tốt, BCTC đẹp → nhưng CP lại tăng chậm hoặc đi ngang. Vì thị trường đã kỳ vọng trước (CP đã tăng mạnh ở giai đoạn 2). Khi "tin tốt" đã được giá, CP không có nhiều động lực tăng tiếp.'
    },
    {
      id: 'l3q14',
      type: 'multiple-choice',
      question: 'EIA Weekly Inventory (tồn kho dầu Mỹ hàng tuần) quan trọng như thế nào?',
      options: [
        'A. Chỉ quan trọng với nhà đầu tư Mỹ',
        'B. Là chỉ số dẫn dắt quan trọng - tồn kho giảm là tín hiệu đáy, tồn kho tăng là tín hiệu đỉnh',
        'C. Không liên quan đến dầu khí Việt Nam',
        'D. Chỉ ảnh hưởng đến giá WTI, không ảnh hưởng Brent'
      ],
      correct: 'B',
      explanation: 'EIA công bố số liệu tồn kho dầu Mỹ mỗi thứ Tư (21:30 VN). Tồn kho giảm liên tục → cung giảm → giá dầu có thể tăng → tín hiệu đáy. Tồn kho tăng liên tục → cung dư thừa → giá dầu có thể giảm → tín hiệu đỉnh. Đây là nguồn dữ liệu thực thời quan trọng.'
    },
    {
      id: 'l3q15',
      type: 'multiple-choice',
      question: 'PVN cắt CAPEX thăm dò ảnh hưởng như thế nào đến chu kỳ PVD?',
      options: [
        'A. PVD không bị ảnh hưởng vì có hợp đồng quốc tế',
        'B. PVD mất hợp đồng → backlog giảm → doanh thu tương lai giảm → giai đoạn đáy bắt đầu',
        'C. PVD hưởng lợi vì cần ít giàn khoan hơn',
        'D. Chỉ ảnh hưởng trong ngắn hạn 1 quý'
      ],
      correct: 'B',
      explanation: 'PVN là khách hàng lớn nhất của PVD. Khi PVN cắt CAPEX thăm dò → ít hợp đồng thuê giàn khoan → PVD backlog giảm → doanh thu tương lai giảm. Đây là tín hiệu đỉnh chu kỳ và khởi đầu cho giai đoạn suy giảm của PVD.'
    },
    {
      id: 'l3q16',
      type: 'multiple-choice',
      question: 'Sai lầm phổ biến nhất khi đánh giá cổ phiếu dầu khí theo chu kỳ là gì?',
      options: [
        'A. Bỏ qua chỉ số P/E',
        'B. Mua khi BCTC đẹp nhất (đỉnh chu kỳ) và bán khi BCTC xấu nhất (đáy chu kỳ)',
        'C. Không theo dõi giá dầu Brent hàng ngày',
        'D. Không đọc báo cáo thường niên'
      ],
      correct: 'B',
      explanation: 'Sai lầm điển hình: Thấy BCTC đẹp, tin tức tốt → mua vào (thực ra đang ở đỉnh). Thấy BCTC xấu, tin tức tiêu cực → bán tháo (thực ra đang ở đáy). Vì CP chạy TRƯỚC BCTC, nên khi BCTC đẹp nhất → CP đã tăng xong, khi BCTC xấu nhất → CP đã giảm xong.'
    },
    {
      id: 'l3q17',
      type: 'multiple-choice',
      question: 'Tồn kho dầu thế giới tăng 3 tuần liên tiếp kết hợp với OPEC+ bất đồng là tín hiệu gì?',
      options: [
        'A. Tín hiệu đáy - cần mua vào',
        'B. Tín hiệu đỉnh - cần thận trọng, xem xét thoát upstream',
        'C. Tín hiệu trung tính',
        'D. Tín hiệu tốt cho downstream'
      ],
      correct: 'B',
      explanation: 'Tổ hợp nguy hiểm: Tồn kho tăng (cung dư) + OPEC+ bất đồng (không ai kiểm soát sản lượng) → giá dầu có nguy cơ giảm mạnh → tín hiệu đỉnh. Đây là lúc cần xem xét giảm tỷ trọng upstream theo checklist 6 tín hiệu thoát.'
    },
    {
      id: 'l3q18',
      type: 'multiple-choice',
      question: 'Chu kỳ upstream thường kéo dài bao lâu ở giai đoạn hồi phục (giai đoạn 2)?',
      options: [
        'A. 1-2 tuần',
        'B. 1-2 tháng',
        'C. 4-6 quý (1-1.5 năm)',
        'D. 5-10 năm'
      ],
      correct: 'C',
      explanation: 'Giai đoạn 2 (hồi phục) thường kéo dài 4-6 quý - đây là giai đoạn CP tăng mạnh nhất. Giá dầu hồi phục $60-80, PVN tăng CAPEX, backlog tăng, LN chuyển dương. Hiểu được thời gian này giúp nhà đầu tư trung hạn nắm giữ đủ lâu để hưởng lợi.'
    }
  ],
  layer4: [
    {
      id: 'l4q1',
      type: 'multiple-choice',
      question: 'Yếu tố vĩ mô nào quan trọng nhất, quyết định 70% câu chuyện của toàn ngành dầu khí?',
      options: [
        'A. Tỷ giá USD/VND',
        'B. Giá dầu Brent',
        'C. Chính sách năng lượng Việt Nam',
        'D. Giá phân bón ure thế giới'
      ],
      correct: 'B',
      explanation: 'Giá dầu Brent là yếu tố số 1, quyết định 70% câu chuyện của toàn ngành dầu khí. Khi phân tích vĩ mô, luôn bắt đầu từ giá dầu và xu hướng của nó. Các yếu tố khác quan trọng nhưng đều xoay quanh và bị ảnh hưởng bởi giá dầu.'
    },
    {
      id: 'l4q2',
      type: 'multiple-choice',
      question: 'OPEC+ quyết định cắt giảm sản lượng tổng 2 triệu thùng/ngày ảnh hưởng như thế nào?',
      options: [
        'A. Xấu cho tất cả vì nguồn cung giảm',
        'B. Tốt cho upstream (giá dầu tăng), xấu cho BSR và PLX (nhập dầu đắt hơn)',
        'C. Chỉ ảnh hưởng đến Trung Đông, không ảnh hưởng Việt Nam',
        'D. Tốt cho DPM vì khí đầu vào giảm'
      ],
      correct: 'B',
      explanation: 'OPEC+ cắt giảm → nguồn cung giảm → giá dầu tăng. Theo ma trận vĩ mô: Upstream XANH (PVD, PVS, GAS hưởng lợi), BSR ĐỎ (dầu thô đầu vào đắt hơn), PLX ĐỎ. Tra ma trận ảnh hưởng để biết phân khúc nào được/mất.'
    },
    {
      id: 'l4q3',
      type: 'multiple-choice',
      question: 'Trung Quốc chiếm bao nhiêu phần trăm nhu cầu dầu toàn cầu cùng với Mỹ và EU?',
      options: [
        'A. ~30% tổng nhu cầu',
        'B. ~60% tổng nhu cầu',
        'C. ~80% tổng nhu cầu',
        'D. ~45% tổng nhu cầu'
      ],
      correct: 'B',
      explanation: 'Trung Quốc + Mỹ + EU chiếm khoảng 60% nhu cầu dầu toàn cầu. Vì vậy khi Trung Quốc mở cửa/đóng cửa, kinh tế Mỹ suy thoái hay EU yếu → ảnh hưởng lớn đến nhu cầu dầu và giá dầu toàn cầu. Đây là lý do theo dõi kinh tế vĩ mô 3 nền kinh tế lớn rất quan trọng.'
    },
    {
      id: 'l4q4',
      type: 'multiple-choice',
      question: 'Khi USD tăng mạnh, công ty nào trong dầu khí bị ảnh hưởng xấu nhất?',
      options: [
        'A. PVD vì phải trả lương bằng USD',
        'B. BSR và PLX vì phải nhập dầu thô bằng USD',
        'C. GAS vì khí thiên nhiên định giá bằng USD',
        'D. DPM vì phân bón ure định giá bằng USD'
      ],
      correct: 'B',
      explanation: 'USD tăng → BSR và PLX phải trả nhiều VND hơn để mua dầu thô đầu vào (thanh toán bằng USD) → chi phí tăng → biên LN giảm. Trong khi đó PVD/PVS được hưởng lợi vì bán dịch vụ bằng USD, khi quy về VND được nhiều hơn.'
    },
    {
      id: 'l4q5',
      type: 'multiple-choice',
      question: 'Shale oil Mỹ có vai trò gì trong thị trường dầu toàn cầu?',
      options: [
        'A. Không đáng kể, Mỹ sản xuất ít dầu',
        'B. Tạo "trần" giá dầu khoảng $80-90 - khi giá cao hơn, shale oil Mỹ tăng sản xuất làm giá giảm lại',
        'C. Chỉ ảnh hưởng đến WTI, không ảnh hưởng Brent',
        'D. Giúp giá dầu ổn định ở mức $50-60'
      ],
      correct: 'B',
      explanation: 'Shale oil Mỹ là rủi ro cấu trúc: Khi giá dầu >$70-80, sản xuất shale oil Mỹ có lời → tăng khai thác → tăng cung → kéo giá dầu xuống. Điều này tạo "trần tự nhiên" ~$80-90 cho giá dầu toàn cầu, hạn chế upside của upstream dài hạn.'
    },
    {
      id: 'l4q6',
      type: 'multiple-choice',
      question: 'Dự án LNG (Khí thiên nhiên hóa lỏng) ảnh hưởng như thế nào đến GAS trong dài hạn?',
      options: [
        'A. Xấu vì LNG cạnh tranh với khí tự nhiên trong nước',
        'B. Tốt vì GAS sẽ vận hành terminal LNG và hưởng phí vận chuyển/phân phối',
        'C. Không ảnh hưởng vì GAS không tham gia LNG',
        'D. Tốt ngắn hạn nhưng xấu dài hạn'
      ],
      correct: 'B',
      explanation: 'Chuyển dịch sang LNG nhập khẩu là động lực cấu trúc dài hạn cho GAS: GAS sẽ vận hành terminal nhập LNG và phân phối → doanh thu và LN tăng dài hạn. Đây là lý do GAS được ưa thích cho nhà đầu tư dài hạn.'
    },
    {
      id: 'l4q7',
      type: 'multiple-choice',
      question: 'Rủi ro cấu trúc dài hạn lớn nhất của ngành dầu khí là gì?',
      options: [
        'A. OPEC+ tăng sản lượng đột ngột',
        'B. Chuyển dịch năng lượng xanh (xe điện, solar, wind) làm giảm nhu cầu dầu dài hạn',
        'C. Trung Quốc mở cửa xuất khẩu ure',
        'D. Tỷ giá USD/VND biến động'
      ],
      correct: 'B',
      explanation: 'Rủi ro cấu trúc lớn nhất: Trong 10-20 năm tới, xe điện, năng lượng mặt trời, gió sẽ dần thay thế nhiên liệu hóa thạch → nhu cầu dầu giảm dài hạn. Đây là rủi ro cần tính đến khi đầu tư dài hạn vào ngành dầu khí.'
    },
    {
      id: 'l4q8',
      type: 'multiple-choice',
      question: 'Địa chính trị như chiến tranh Trung Đông, xung đột Nga-Ukraine ảnh hưởng như thế nào?',
      options: [
        'A. Thường làm giá dầu giảm do thiệt hại kinh tế',
        'B. Thường làm giá dầu tăng đột biến do gián đoạn nguồn cung',
        'C. Chỉ ảnh hưởng khu vực, không ảnh hưởng giá dầu toàn cầu',
        'D. Ảnh hưởng đến gas nhưng không ảnh hưởng dầu'
      ],
      correct: 'B',
      explanation: 'Địa chính trị (chiến tranh Trung Đông, xung đột Nga-Ukraine) thường gây gián đoạn nguồn cung dầu → giá dầu tăng đột biến. Tuy nhiên đây thường là tăng ngắn hạn. Trung Đông chiếm ~30% sản lượng dầu toàn cầu nên xung đột khu vực này ảnh hưởng rất lớn.'
    },
    {
      id: 'l4q9',
      type: 'multiple-choice',
      question: 'Động lực cấu trúc nào giúp PVS hưởng lợi dài hạn ngoài giá dầu?',
      options: [
        'A. Tăng trưởng tiêu thụ xăng dầu trong nước',
        'B. Chuyển dịch sang LNG nhập khẩu - PVS sẽ xây lắp terminal LNG',
        'C. Giá phân bón ure tăng',
        'D. Crack spread ngày càng cao'
      ],
      correct: 'B',
      explanation: 'PVS (PTSC) hưởng lợi từ 2 động lực cấu trúc: (1) Mỏ khí mới (Cá Voi Xanh, Lô B) cần xây dựng cơ sở hạ tầng → PVS có hợp đồng EPC; (2) Terminal LNG nhập khẩu cần xây lắp → PVS là nhà thầu. Đây là lý do PVS được xem xét cho đầu tư dài hạn.'
    },
    {
      id: 'l4q10',
      type: 'multiple-choice',
      question: 'Khi phân tích vĩ mô, câu hỏi nào phải trả lời ĐẦU TIÊN?',
      options: [
        'A. Crack spread đang ở đâu?',
        'B. PVN có thay đổi CAPEX không?',
        'C. Giá dầu đang ở đâu và xu hướng? OPEC+ đang làm gì?',
        'D. Giá ure thế giới xu hướng thế nào?'
      ],
      correct: 'C',
      explanation: 'Câu hỏi vĩ mô đầu tiên bắt buộc: Giá dầu Brent đang ở $XX, xu hướng tăng/giảm/đi ngang. OPEC+ vừa quyết định cắt/tăng/giữ nguyên sản lượng. Đây là nền tảng, sau đó mới phân tích các yếu tố khác như crack spread, giá ure, CAPEX PVN.'
    },
    {
      id: 'l4q11',
      type: 'multiple-choice',
      question: 'An ninh năng lượng Việt Nam ảnh hưởng như thế nào đến khai thác dầu nội địa?',
      options: [
        'A. Không ảnh hưởng vì Việt Nam ưu tiên nhập khẩu dầu rẻ',
        'B. An ninh năng lượng → Việt Nam vẫn cần khai thác nội địa → hỗ trợ upstream dù mỏ cũ cạn',
        'C. Chỉ ảnh hưởng đến GAS, không ảnh hưởng upstream',
        'D. An ninh năng lượng làm tăng CAPEX BSR, không phải PVD'
      ],
      correct: 'B',
      explanation: 'An ninh năng lượng là động lực cấu trúc: Việt Nam cần tự chủ nguồn năng lượng → tiếp tục đầu tư khai thác dầu khí nội địa dù mỏ cũ cạn dần. Điều này hỗ trợ PVD, PVS trong dài hạn cho dù xu hướng chuyển dịch xanh đang diễn ra.'
    },
    {
      id: 'l4q12',
      type: 'multiple-choice',
      question: 'Quy hoạch Điện 8 (QHĐ8) có lợi nhất cho công ty nào trong ngành dầu khí?',
      options: [
        'A. BSR và PLX',
        'B. PVD và PVS',
        'C. GAS và PVT',
        'D. DPM và DCM'
      ],
      correct: 'C',
      explanation: 'QHĐ8 tăng tỷ trọng điện khí → cần nhiều khí tự nhiên hơn → GAS hưởng lợi từ phân phối khí cho nhà máy điện. PVT cũng hưởng lợi từ vận chuyển LNG. Đây là động lực cấu trúc dài hạn mà nhà đầu tư dài hạn cần chú ý.'
    },
    {
      id: 'l4q13',
      type: 'multiple-choice',
      question: 'Rủi ro "mỏ cũ cạn, mỏ mới không đủ bù" ảnh hưởng dài hạn đến ai?',
      options: [
        'A. Chỉ ảnh hưởng đến BSR vì thiếu dầu thô',
        'B. PVD, PVS, GAS vì nền tảng kinh doanh là khai thác nội địa',
        'C. DPM vì thiếu khí đầu vào',
        'D. PLX vì ít xăng để bán'
      ],
      correct: 'B',
      explanation: 'Rủi ro cấu trúc: Các mỏ dầu khí của Việt Nam đang già và cạn dần. Nếu mỏ mới (Cá Voi Xanh, Lô B) chậm triển khai → PVD, PVS ít việc, GAS ít khí để phân phối. Đây là rủi ro dài hạn cần theo dõi tiến độ dự án mỏ mới.'
    },
    {
      id: 'l4q14',
      type: 'multiple-choice',
      question: 'Khi nhu cầu dầu toàn cầu yếu (Trung Quốc, EU suy thoái), ai bị ảnh hưởng xấu nhất?',
      options: [
        'A. PLX và OIL vì bán lẻ ít đi',
        'B. Toàn ngành, đặc biệt upstream và khai thác',
        'C. Chỉ BSR vì lọc dầu ít đi',
        'D. DPM vì xuất khẩu phân bón giảm'
      ],
      correct: 'B',
      explanation: 'Nhu cầu toàn cầu yếu → giá dầu giảm → ảnh hưởng toàn ngành. Đặc biệt: PVD, PVS ĐỎ (CAPEX bị cắt), GAS ĐỎ (giá khí giảm), BSR ĐỎ, DPM ĐỎ (xuất khẩu phân bón giảm). Ma trận vĩ mô: "TQ nhu cầu yếu" → toàn hàng ĐỎ.'
    },
    {
      id: 'l4q15',
      type: 'multiple-choice',
      question: 'Nguồn thông tin nào để theo dõi tồn kho dầu Mỹ hàng tuần?',
      options: [
        'A. OPEC.org',
        'B. EIA.gov (Energy Information Administration)',
        'C. Baker Hughes',
        'D. CafeF.vn'
      ],
      correct: 'B',
      explanation: 'EIA (Cơ quan Thông tin Năng lượng Mỹ) công bố báo cáo tồn kho dầu hàng tuần vào thứ Tư (21:30 giờ Việt Nam). Đây là dữ liệu quan trọng nhất trong tuần về cân bằng cung-cầu dầu. Tồn kho giảm → cung thiếu → giá có thể tăng.'
    },
    {
      id: 'l4q16',
      type: 'multiple-choice',
      question: 'Phân biệt "động lực cấu trúc" và "động lực chu kỳ" - cái nào kéo dài lâu hơn?',
      options: [
        'A. Chu kỳ dài hơn - thường kéo dài 5-10 năm',
        'B. Cấu trúc dài hơn - kéo dài nhiều năm; chu kỳ thường 1-3 năm',
        'C. Hai loại kéo dài như nhau',
        'D. Tùy thuộc vào từng công ty'
      ],
      correct: 'B',
      explanation: 'Động lực cấu trúc (LNG, điện khí, mỏ mới) kéo dài nhiều năm → chọn cổ phiếu nắm dài hạn. Động lực chu kỳ (OPEC+ cắt giảm, TQ mở cửa) kéo dài vài quý đến 1-2 năm → tính thời điểm mua/bán. Phân biệt 2 loại giúp xây dựng chiến lược đầu tư phù hợp.'
    },
    {
      id: 'l4q17',
      type: 'multiple-choice',
      question: 'Giá khí Henry Hub (Mỹ) và TTF (châu Âu) ảnh hưởng đến công ty Việt Nam nào?',
      options: [
        'A. PVD và PVS',
        'B. BSR và PLX',
        'C. GAS, DPM và DCM',
        'D. PVT và OIL'
      ],
      correct: 'C',
      explanation: 'Giá khí thiên nhiên thế giới (Henry Hub, TTF) ảnh hưởng đến: (1) GAS - tham chiếu định giá khí nội địa; (2) DPM, DCM - giá khí EU cao → sản xuất ure ở EU đắt → cung ure giảm → giá ure thế giới tăng → lợi cho DPM. Chuỗi tác động phức tạp nhưng quan trọng.'
    },
    {
      id: 'l4q18',
      type: 'multiple-choice',
      question: 'Có dự án mới sắp vận hành (LNG terminal, mỏ khí mới) ảnh hưởng như thế nào khi phân tích?',
      options: [
        'A. Không quan trọng vì dự án thường bị trễ',
        'B. Quan trọng - cần biết ai hưởng lợi và khi nào để tính vào định giá',
        'C. Chỉ quan trọng với BSR và PLX',
        'D. Chỉ quan trọng trong năm đầu vận hành'
      ],
      correct: 'B',
      explanation: 'Câu hỏi vĩ mô số 5 (trong 6 câu bắt buộc): Có dự án mới nào sắp vận hành? Ai hưởng lợi: GAS/PVS/PVD? Khi nào? Dự án mới tạo catalyst cho cổ phiếu. Tuy nhiên cần điều chỉnh cho rủi ro trễ tiến độ - rất phổ biến trong ngành dầu khí.'
    }
  ],
  layer5: [
    {
      id: 'l5q1',
      type: 'multiple-choice',
      question: 'Tại sao P/E thấp của cổ phiếu dầu khí có thể là bẫy nguy hiểm?',
      options: [
        'A. Vì P/E thấp luôn nghĩa là cổ phiếu rẻ',
        'B. Vì P/E thấp nhất thường xảy ra ở đỉnh chu kỳ khi LN cao nhất - LN sắp giảm',
        'C. Vì P/E thấp nghĩa là công ty không tăng trưởng',
        'D. Vì P/E thấp hơn P/B là dấu hiệu xấu'
      ],
      correct: 'B',
      explanation: 'Nghịch lý P/E ngành chu kỳ: P/E thấp nhất (vd: 6-8x) thường xảy ra khi LN ở đỉnh chu kỳ. Đây là lúc nguy hiểm nhất để mua vì sau đó giá dầu giảm, LN giảm → P/E sẽ tăng lên. Ngược lại, P/E cao hoặc âm thường là đáy chu kỳ - cơ hội tốt.'
    },
    {
      id: 'l5q2',
      type: 'multiple-choice',
      question: 'Normalized P/E tính như thế nào?',
      options: [
        'A. P/E của quý gần nhất',
        'B. Giá hiện tại / EPS trung bình 5-7 năm (qua cả đỉnh lẫn đáy chu kỳ)',
        'C. P/E cao nhất trong 5 năm qua',
        'D. P/E thấp nhất trong chu kỳ gần nhất'
      ],
      correct: 'B',
      explanation: 'Normalized P/E = Giá hiện tại / EPS trung bình 5-7 năm. Lấy EPS của 5-7 năm gần nhất (bao gồm cả năm tốt lẫn năm xấu), tính trung bình → Normalized EPS. Chia giá hiện tại cho Normalized EPS. Mức 10-15x là hợp lý cho dầu khí Việt Nam.'
    },
    {
      id: 'l5q3',
      type: 'multiple-choice',
      question: 'EV/EBITDA tốt hơn P/E để định giá upstream vì lý do gì?',
      options: [
        'A. Vì EV/EBITDA dễ tính hơn P/E',
        'B. Vì nó tính cả nợ vay và loại bỏ ảnh hưởng của khấu hao - phù hợp ngành vốn nặng',
        'C. Vì P/E không áp dụng được cho dầu khí',
        'D. Vì EV/EBITDA cao hơn P/E nên an toàn hơn'
      ],
      correct: 'B',
      explanation: 'EV = Vốn hóa + Nợ ròng; EBITDA = LN trước lãi vay, thuế, khấu hao. EV/EBITDA tốt hơn P/E cho ngành vốn nặng (nhiều tài sản, nợ lớn) vì: (1) Tính cả nợ vay, không chỉ vốn chủ; (2) Loại bỏ ảnh hưởng khấu hao - khác nhau giữa các công ty.'
    },
    {
      id: 'l5q4',
      type: 'multiple-choice',
      question: 'Với cổ phiếu phân bón (DPM, DCM), Dividend Yield >10% có nghĩa là gì?',
      options: [
        'A. Công ty đang trả cổ tức bền vững, nên mua ngay',
        'B. Có thể hấp dẫn nhưng cần kiểm tra - có thể là năm đỉnh chu kỳ ure, cổ tức sẽ giảm năm sau',
        'C. Công ty đang gặp khó khăn tài chính',
        'D. Cổ phiếu đang quá rẻ, nên mua gấp'
      ],
      correct: 'B',
      explanation: 'Dividend Yield >10% với phân bón: Hấp dẫn nhưng cần kiểm tra bền vững. Cổ tức phân bón biến động theo giá ure. Năm ure cao → cổ tức cao → yield 14% trông hấp dẫn. Nhưng năm sau ure giảm → cổ tức giảm → yield thực chỉ còn 5%. Luôn dùng cổ tức trung bình 3-5 năm.'
    },
    {
      id: 'l5q5',
      type: 'multiple-choice',
      question: 'Backlog/Market Cap >1.5x với PVS có nghĩa là gì?',
      options: [
        'A. Công ty đang gặp khó khăn vì nợ quá nhiều hợp đồng',
        'B. Giá trị hợp đồng đã ký gấp 1.5 lần vốn hóa - rất hấp dẫn',
        'C. PVS đang định giá quá cao',
        'D. Backlog cao nhưng không phản ánh lợi nhuận'
      ],
      correct: 'B',
      explanation: 'Backlog/MCap > 1.5x = rất hấp dẫn: giá trị hợp đồng đã ký lớn hơn nhiều so với vốn hóa thị trường → doanh thu được đảm bảo. Mức 1.0-1.5x là hấp dẫn; 0.5-1.0x là hợp lý; <0.5x cần thận trọng. Nhưng luôn check thêm biên LN trên backlog mới.'
    },
    {
      id: 'l5q6',
      type: 'multiple-choice',
      question: 'Phương pháp định giá nào phù hợp nhất với GAS (PetroVietnam Gas)?',
      options: [
        'A. Backlog/Market Cap vì GAS ký nhiều hợp đồng',
        'B. Dividend Yield vì GAS trả cổ tức rất cao',
        'C. P/E + DCF vì hợp đồng dài hạn, dòng tiền dự đoán được',
        'D. EV/EBITDA normalized vì GAS biến động như upstream'
      ],
      correct: 'C',
      explanation: 'GAS có hợp đồng cung cấp khí dài hạn → dòng tiền ổn định và dự đoán được → DCF (Discounted Cash Flow) phù hợp. Kết hợp P/E để so sánh với peers. Không dùng Backlog/MCap (đó cho dịch vụ) hay Dividend Yield (đó cho phân bón biến động cao).'
    },
    {
      id: 'l5q7',
      type: 'multiple-choice',
      question: 'Khi nào P/E của cổ phiếu dầu khí ở mức âm và ý nghĩa là gì?',
      options: [
        'A. Khi công ty phá sản - không bao giờ mua',
        'B. Khi công ty lỗ (E âm) - thường là đáy chu kỳ, EPS sắp phục hồi',
        'C. Khi giá cổ phiếu bằng 0',
        'D. Khi công ty không chia cổ tức'
      ],
      correct: 'B',
      explanation: 'P/E âm = công ty đang lỗ (EPS âm). Với ngành chu kỳ, đây thường là đáy chu kỳ - thời điểm TIỀM NĂNG nhất để mua (nếu có tín hiệu hồi phục). Giá dầu ở $40-50, PVD lỗ, P/E âm → nhìn thì sợ, nhưng đây có thể là cơ hội vì EPS sắp phục hồi khi giá dầu tăng.'
    },
    {
      id: 'l5q8',
      type: 'multiple-choice',
      question: 'Để tính Normalized P/E cho PVD, bạn lấy EPS của bao nhiêu năm?',
      options: [
        'A. Chỉ EPS năm gần nhất',
        'B. EPS trung bình 2 năm',
        'C. EPS trung bình 5-7 năm, bao gồm cả năm tốt và năm xấu',
        'D. EPS của năm đỉnh chu kỳ gần nhất'
      ],
      correct: 'C',
      explanation: 'Normalized EPS = Trung bình EPS 5-7 năm, PHẢI bao gồm cả năm giá dầu cao (EPS cao) và năm giá dầu thấp (EPS thấp/âm). Nếu chỉ lấy 2-3 năm tốt → EPS bị inflate → Normalized P/E trông rẻ nhưng thực ra đắt.'
    },
    {
      id: 'l5q9',
      type: 'multiple-choice',
      question: 'Phương pháp định giá nào phù hợp với PLX (Petrolimex)?',
      options: [
        'A. EV/EBITDA normalized vì biên động mạnh',
        'B. P/E truyền thống vì biên lợi nhuận tương đối ổn định',
        'C. Backlog/MCap vì PLX có nhiều hợp đồng cung cấp xăng',
        'D. DCF vì dòng tiền PLX rất dễ dự đoán'
      ],
      correct: 'B',
      explanation: 'PLX có biên cố định ~300-500đ/lít, LN phụ thuộc sản lượng tiêu thụ (tương đối ổn định). Vì vậy P/E truyền thống hoạt động tốt hơn cho PLX. Không dùng EV/EBITDA (dành cho ngành vốn nặng biến động) hay Backlog/MCap (dành cho dịch vụ).'
    },
    {
      id: 'l5q10',
      type: 'multiple-choice',
      question: 'Dividend Yield trung bình 3-5 năm của DPM là 8.2%. Năm nay cổ tức cao bất thường (yield 14.3%). Nên dùng con số nào để đánh giá?',
      options: [
        'A. 14.3% vì đó là yield thực tế hiện tại',
        'B. 8.2% (trung bình 3-5 năm) vì cổ tức biến động theo chu kỳ ure',
        'C. Bình quân 14.3% và 8.2% = 11.25%',
        'D. Con số thấp nhất để an toàn'
      ],
      correct: 'B',
      explanation: 'Luôn dùng cổ tức trung bình 3-5 năm để tính Dividend Yield. Năm yield 14.3% là khi ure ở đỉnh - không bền vững. Dùng yield trung bình 8.2% cho định giá chính xác hơn. Đây là lý do bẫy Dividend Yield xảy ra khi nhà đầu tư dùng cổ tức 1 năm để định giá.'
    },
    {
      id: 'l5q11',
      type: 'multiple-choice',
      question: 'Khi đánh giá backlog PVS, ngoài giá trị tuyệt đối cần kiểm tra thêm gì?',
      options: [
        'A. Số lượng nhân viên PVS hiện có',
        'B. Biên lợi nhuận trên backlog mới và thời gian thực hiện backlog',
        'C. Tỷ lệ sở hữu nước ngoài của PVS',
        'D. Giá dầu Brent trung bình trong quý'
      ],
      correct: 'B',
      explanation: '3 điều cần kiểm tra về backlog PVS: (1) Backlog bao nhiêu; (2) Biên LN trên backlog MỚI là bao nhiêu (backlog cũ biên tốt nhưng backlog mới có thể biên thấp); (3) Thời gian thực hiện backlog bao lâu. Backlog cao + biên thấp + thời gian dài = không hấp dẫn như thoạt nhìn.'
    },
    {
      id: 'l5q12',
      type: 'multiple-choice',
      question: 'Mức Normalized P/E nào được coi là "hợp lý" cho cổ phiếu dầu khí Việt Nam?',
      options: [
        'A. 5-8x',
        'B. 10-15x',
        'C. 20-25x',
        'D. 30-40x'
      ],
      correct: 'B',
      explanation: 'Tham khảo Normalized P/E cho dầu khí Việt Nam: <10x = có thể rẻ; 10-15x = hợp lý; >20x = có thể đắt. Tuy nhiên cần kết hợp với phân tích chu kỳ và vĩ mô để quyết định. Normalized P/E 15x ở đáy chu kỳ vẫn tốt hơn P/E 8x ở đỉnh chu kỳ.'
    },
    {
      id: 'l5q13',
      type: 'multiple-choice',
      question: '"P/E 30x nhưng giá dầu vừa chạm đáy" - nhận định đúng là?',
      options: [
        'A. Cổ phiếu đang đắt, nên tránh',
        'B. Có thể là cơ hội tốt vì EPS đang ở đáy và sắp phục hồi',
        'C. P/E 30x là quá cao, không hợp lý',
        'D. Cần đợi P/E về 10x mới mua'
      ],
      correct: 'B',
      explanation: 'P/E 30x thoạt nhìn đắt, nhưng nếu giá dầu vừa chạm đáy và bắt đầu hồi phục → EPS đang ở mức thấp nhất và sắp tăng. Khi EPS tăng gấp đôi, P/E tự nhiên về 15x dù giá CP không đổi. Đây là lý do không dùng P/E tại 1 thời điểm để định giá ngành chu kỳ.'
    },
    {
      id: 'l5q14',
      type: 'multiple-choice',
      question: 'BSR nên được định giá bằng phương pháp nào?',
      options: [
        'A. Dividend Yield vì BSR trả cổ tức cao',
        'B. Backlog/MCap vì BSR có nhiều hợp đồng lọc dầu',
        'C. EV/EBITDA kết hợp so sánh GRM với peer khu vực',
        'D. P/E normalized 10 năm'
      ],
      correct: 'C',
      explanation: 'BSR: EV/EBITDA + so sánh GRM với các nhà máy lọc dầu khu vực (Singapore, Thái Lan). Biên động lớn nên cần normalize. GRM ($/thùng) là chỉ số so sánh tốt nhất trong ngành lọc dầu. Không dùng Dividend Yield (BSR không có chính sách cổ tức ổn định) hay Backlog (không phù hợp với lọc dầu).'
    },
    {
      id: 'l5q15',
      type: 'multiple-choice',
      question: 'Khi nào Dividend Yield của DPM phản ánh sai giá trị thực?',
      options: [
        'A. Khi tính bằng cổ tức trung bình 3-5 năm',
        'B. Khi dùng cổ tức của năm đỉnh chu kỳ ure để tính yield cho năm bình thường',
        'C. Khi cổ phiếu đang ở giá thấp',
        'D. Khi ure đang ở mức giá trung bình'
      ],
      correct: 'B',
      explanation: 'Bẫy Dividend Yield: Năm ure đỉnh, DPM trả cổ tức 5,000đ/CP → yield 14% ở giá 35,000đ. Nhà đầu tư thấy 14% "rẻ". Nhưng năm sau ure giảm, cổ tức chỉ còn 2,000đ → yield thực 5.7%. Cổ phiếu thực ra không rẻ như nghĩ. Phải dùng cổ tức trung bình nhiều năm.'
    },
    {
      id: 'l5q16',
      type: 'multiple-choice',
      question: 'Tại sao PVD P/E 8x trong năm giá dầu $100 là dấu hiệu nguy hiểm?',
      options: [
        'A. P/E 8x là quá thấp, công ty đang gặp vấn đề',
        'B. Giá dầu $100 là đỉnh chu kỳ → EPS đang cao nhất → sắp giảm → P/E thực tế sẽ tăng lên',
        'C. P/E 8x phù hợp với ngành vốn nặng',
        'D. Đây là cơ hội mua vì P/E rất thấp'
      ],
      correct: 'B',
      explanation: 'Đây là bẫy điển hình: PVD P/E 8x trong môi trường giá dầu $100 (đỉnh chu kỳ). EPS đang ở mức cao nhất. Khi giá dầu giảm về $60, EPS sẽ giảm 70-80% → P/E tự nhiên tăng lên 30-40x dù giá CP không đổi. Mua lúc này là mua ở đỉnh chu kỳ.'
    },
    {
      id: 'l5q17',
      type: 'multiple-choice',
      question: 'Phương pháp định giá "EV/EBITDA + Backlog/Market Cap" phù hợp với phân khúc nào?',
      options: [
        'A. Bán lẻ xăng dầu (PLX)',
        'B. Dịch vụ dầu khí (PVS)',
        'C. Phân bón (DPM)',
        'D. Khí (GAS)'
      ],
      correct: 'B',
      explanation: 'PVS (dịch vụ kỹ thuật dầu khí) được định giá bằng EV/EBITDA + Backlog/Market Cap. Backlog phản ánh doanh thu tương lai được đảm bảo. EV/EBITDA phản ánh khả năng sinh lời trên tổng vốn. Hai chỉ số này kết hợp cho cái nhìn đầy đủ về giá trị PVS.'
    }
  ],
  layer6: [
    {
      id: 'l6q1',
      type: 'multiple-choice',
      question: 'BSR bảo trì nhà máy 1 quý làm lợi nhuận giảm mạnh. Đây là loại rủi ro gì?',
      options: [
        'A. Rủi ro cấu trúc - cần đánh giá lại đầu tư',
        'B. Rủi ro sự kiện (tạm thời) - xảy ra 1 lần, quý sau sẽ hồi phục',
        'C. Rủi ro chu kỳ - liên quan đến giá dầu',
        'D. Rủi ro mùa vụ - lặp lại mỗi năm'
      ],
      correct: 'B',
      explanation: 'Bảo trì nhà máy BSR là rủi ro SỰ KIỆN - xảy ra 1 lần, ảnh hưởng 1-2 quý, sau đó hồi phục bình thường. Không cần lo lắng quá mức. Phân biệt: Sự kiện (1 lần) vs Chu kỳ (nhiều quý) vs Cấu trúc (thay đổi dài hạn mô hình kinh doanh).'
    },
    {
      id: 'l6q2',
      type: 'multiple-choice',
      question: 'Giá dầu giảm 30% trong 3 tháng. Đây là loại rủi ro gì và phản ứng thế nào?',
      options: [
        'A. Sự kiện - bình thường, không cần lo',
        'B. Chu kỳ đảo chiều - xem xét giảm tỷ trọng upstream',
        'C. Cấu trúc - bán hết cổ phiếu dầu khí ngay',
        'D. Mùa vụ - đợi qua mùa là hồi phục'
      ],
      correct: 'B',
      explanation: 'Giá dầu giảm 30% trong 3 tháng = chu kỳ đảo chiều. Phản ứng đúng: xem xét giảm tỷ trọng upstream (PVD, PVS), không bán tháo hoảng loạn nhưng cũng không giữ nguyên. Theo dõi OPEC+ phản ứng thế nào. Nếu giá dầu giảm thêm và OPEC+ không hành động → rủi ro cao hơn.'
    },
    {
      id: 'l6q3',
      type: 'multiple-choice',
      question: 'PVN cắt CAPEX thăm dò dài hạn do chính sách năng lượng xanh. Đây là rủi ro gì?',
      options: [
        'A. Rủi ro sự kiện - 1 năm rồi phục hồi',
        'B. Rủi ro cấu trúc - ảnh hưởng dài hạn đến mô hình kinh doanh PVD, PVS',
        'C. Rủi ro chu kỳ - đợi giá dầu tăng là CAPEX tăng lại',
        'D. Rủi ro mùa vụ - lặp lại định kỳ'
      ],
      correct: 'B',
      explanation: 'PVN cắt CAPEX dài hạn do chuyển dịch năng lượng = rủi ro CẤU TRÚC. Không giống chu kỳ (CAPEX cắt vì giá dầu thấp, rồi tăng lại khi giá dầu cao), đây là thay đổi chiến lược dài hạn. Ảnh hưởng đến mô hình kinh doanh PVD, PVS → cần đánh giá lại.'
    },
    {
      id: 'l6q4',
      type: 'multiple-choice',
      question: 'DPM lợi nhuận giảm Q4 so với Q2. Đây là loại rủi ro gì?',
      options: [
        'A. Rủi ro chu kỳ - ure đang giảm',
        'B. Rủi ro mùa vụ - Q4 là mùa thấp điểm phân bón, bình thường',
        'C. Rủi ro cấu trúc - DPM mất thị phần',
        'D. Rủi ro sự kiện - bảo trì nhà máy'
      ],
      correct: 'B',
      explanation: 'DPM LN giảm Q4 so Q2 = rủi ro MÙA VỤ - lặp lại mỗi năm, dự đoán được. Vụ Hè Thu (Q2-Q3) là cao điểm, Q4 thấp hơn là bình thường. Không lo lắng quá mức. Chỉ lo khi Q4 năm này thấp hơn Q4 năm trước (so sánh cùng kỳ).'
    },
    {
      id: 'l6q5',
      type: 'multiple-choice',
      question: 'Khi tư vấn nhà đầu tư dài hạn (>1 năm), cổ phiếu nào trong dầu khí nên ưu tiên?',
      options: [
        'A. PVD vì biến động mạnh, cơ hội lớn',
        'B. GAS và PVS vì có động lực cấu trúc dài hạn (LNG, mỏ mới)',
        'C. PLX vì doanh thu ổn định',
        'D. DPM vì cổ tức cao nhất'
      ],
      correct: 'B',
      explanation: 'NDT dài hạn >1 năm: Ưu tiên GAS (ổn định + hưởng lợi LNG) và PVS (backlog mạnh + dự án mới). Tránh PVD (quá phụ thuộc giá dầu), PLX (biên mỏng, không tăng trưởng). DPM có thể xem xét nếu yield >8% trung bình 3 năm.'
    },
    {
      id: 'l6q6',
      type: 'multiple-choice',
      question: 'Khi nào nên VÀO cổ phiếu upstream? Cần đủ bao nhiêu tín hiệu?',
      options: [
        'A. Khi BCTC đẹp nhất - cần 1 tín hiệu đủ',
        'B. Khi có 2-3/6 tín hiệu vào: giá dầu chạm đáy, OPEC+ cắt giảm, tồn kho giảm...',
        'C. Khi giá cổ phiếu đã tăng 20% - xác nhận xu hướng',
        'D. Khi tin tức tích cực nhiều nhất về ngành'
      ],
      correct: 'B',
      explanation: 'Checklist 6 tín hiệu VÀO upstream: (1) Giá dầu chạm đáy ổn định 2-3 tháng; (2) OPEC+ cắt giảm mạnh; (3) Tồn kho dầu thế giới giảm; (4) PVN công bố tăng CAPEX; (5) Rig count chạm đáy; (6) Insider mua CP. Cần ít nhất 2-3/6 tín hiệu. Mạnh nhất: Giá dầu đáy + OPEC+ siết cung + PVN tăng CAPEX.'
    },
    {
      id: 'l6q7',
      type: 'multiple-choice',
      question: 'Khi nào nên THOÁT cổ phiếu upstream?',
      options: [
        'A. Khi giá cổ phiếu đã tăng 50% - chốt lời ngay',
        'B. Khi có 2-3/6 tín hiệu thoát: giá dầu >$100, OPEC+ bất đồng, tồn kho tăng...',
        'C. Khi BCTC xấu đi',
        'D. Khi giá dầu giảm 5%'
      ],
      correct: 'B',
      explanation: 'Checklist 6 tín hiệu THOÁT upstream: (1) Giá dầu >$100 kéo dài (kích thích shale oil); (2) OPEC+ bất đồng, một số nước tăng sản lượng; (3) Tồn kho dầu tăng 3 tuần liên tiếp; (4) Nhu cầu toàn cầu chậm lại; (5) PVN review/hoãn dự án; (6) Insider bán CP. Cần 2-3/6 tín hiệu.'
    },
    {
      id: 'l6q8',
      type: 'multiple-choice',
      question: 'Cách giải thích "crack spread cao" cho nhà đầu tư ít kinh nghiệm là gì?',
      options: [
        'A. "Crack spread là chênh lệch giá dầu Brent và WTI"',
        'B. "Chênh lệch giữa giá dầu thô và giá xăng lớn - nhà máy lọc dầu lời nhiều trên mỗi thùng"',
        'C. "Crack spread là rủi ro địa chất khi khoan dầu"',
        'D. "Đây là chỉ số kỹ thuật phức tạp, không cần hiểu"'
      ],
      correct: 'B',
      explanation: 'Nguyên tắc giao tiếp: Tránh thuật ngữ, dùng từ đơn giản. "Crack spread cao" = "chênh lệch giữa giá dầu thô và giá xăng lớn → nhà máy lọc dầu lời nhiều trên mỗi thùng lọc ra xăng". Luôn giải thích TẠI SAO, không chỉ nêu kết quả.'
    },
    {
      id: 'l6q9',
      type: 'multiple-choice',
      question: 'Cách giải thích đúng về "backlog kỷ lục PVS" cho nhà đầu tư retail?',
      options: [
        'A. "Backlog kỷ lục nghĩa là lợi nhuận sẽ tăng gấp đôi ngay quý sau"',
        'B. "Công ty đã ký được nhiều hợp đồng, đảm bảo doanh thu thời gian tới - nhưng cần kiểm tra lợi nhuận thực trên từng hợp đồng"',
        'C. "Backlog là chỉ số kỹ thuật, không quan trọng với retail"',
        'D. "Backlog cao = mua ngay vì cổ phiếu sắp tăng"'
      ],
      correct: 'B',
      explanation: 'Giải thích đúng: "Công ty đã ký được nhiều hợp đồng, đảm bảo doanh thu trong tương lai - điều này tốt. Nhưng cần kiểm tra: hợp đồng này lợi nhuận có tốt không? Một số hợp đồng doanh thu lớn nhưng lợi nhuận mỏng." Trung thực về cả tích cực lẫn rủi ro.'
    },
    {
      id: 'l6q10',
      type: 'multiple-choice',
      question: 'Nhà đầu tư ngắn hạn (<3 tháng) nên theo dõi catalyst nào trong dầu khí?',
      options: [
        'A. Kế hoạch CAPEX PVN 5 năm',
        'B. Tiến độ dự án LNG dài hạn',
        'C. OPEC+ họp, EIA inventory, BCTC quý, PVN công bố kế hoạch ngắn hạn',
        'D. Xu hướng năng lượng tái tạo toàn cầu'
      ],
      correct: 'C',
      explanation: 'NDT ngắn hạn <3 tháng cần catalyst rõ ràng, gần: (1) Họp OPEC+ (thường tháng 3, 6, 9, 12); (2) EIA inventory hàng tuần; (3) BCTC quý (20-30 ngày sau kết thúc quý); (4) PVN công bố kế hoạch. Tránh dầu khí nếu sợ rủi ro - biến động 30-50% không hiếm.'
    },
    {
      id: 'l6q11',
      type: 'multiple-choice',
      question: 'Giải thích đúng khi BSR lợi nhuận kỷ lục cho nhà đầu tư ít kinh nghiệm là gì?',
      options: [
        'A. "BSR rất tốt, mua ngay để hưởng đà tăng"',
        'B. "BSR lãi 2,000 tỷ nhưng ~800 tỷ là lãi tồn kho 1 lần. Lợi nhuận cốt lõi thấp hơn, quý sau chưa chắc lặp lại"',
        'C. "Lợi nhuận kỷ lục là tín hiệu mua mạnh"',
        'D. "Không quan trọng, chỉ nhìn P/E là đủ"'
      ],
      correct: 'B',
      explanation: 'Giải thích trung thực: Tách lãi tồn kho (1 lần) khỏi lợi nhuận lõi. Nếu 40% LN là lãi tồn kho → LN cốt lõi thấp hơn nhiều. Canh báo rõ về rủi ro không lặp lại. Đây là nguyên tắc: gải thích TẠI SAO, nhấn mạnh rủi ro trước, cơ hội sau.'
    },
    {
      id: 'l6q12',
      type: 'multiple-choice',
      question: 'Khi tư vấn NĐT trung hạn (3-12 tháng), thời điểm VÀO phân bón là khi nào?',
      options: [
        'A. Khi giá ure đang ở đỉnh và cổ tức cao nhất',
        'B. Khi giá ure chạm đáy + Trung Quốc hạn chế xuất khẩu + mùa vụ sắp đến',
        'C. Khi BCTC DPM đẹp nhất',
        'D. Khi giá dầu thấp (khí đầu vào rẻ)'
      ],
      correct: 'B',
      explanation: 'Thời điểm VÀO phân bón cho NĐT trung hạn: Giá ure chạm đáy + TQ hạn chế xuất khẩu (cung giảm) + mùa vụ nông nghiệp sắp tới (cầu tăng). Tổ hợp này tạo catalyst tốt. Tránh vào khi ure đang ở đỉnh dù cổ tức trông hấp dẫn.'
    },
    {
      id: 'l6q13',
      type: 'multiple-choice',
      question: 'Cổ phiếu dầu khí có mức biến động thế nào? Phù hợp với nhà đầu tư nào?',
      options: [
        'A. Biến động 5-10% - phù hợp với mọi NĐT',
        'B. Biến động 30-50% trong vài tháng - chỉ phù hợp NĐT chấp nhận được rủi ro cao',
        'C. Ổn định như cổ phiếu ngân hàng',
        'D. Chỉ biến động khi có tin OPEC+'
      ],
      correct: 'B',
      explanation: 'Cổ phiếu dầu khí biến động rất mạnh - 30-50% trong vài tháng không hiếm. Không phù hợp NĐT sợ rủi ro. Nếu NĐT không chấp nhận được mức biến động này → chọn ngành khác ổn định hơn, hoặc chỉ phân bổ phần nhỏ danh mục vào dầu khí.'
    },
    {
      id: 'l6q14',
      type: 'multiple-choice',
      question: 'Giải thích "OPEC+ cắt giảm sản lượng" cho nhà đầu tư không rành thuật ngữ:',
      options: [
        'A. "OPEC+ là chỉ số kỹ thuật quan trọng"',
        'B. "Các nước xuất khẩu dầu lớn đồng ý bán ít dầu hơn → nguồn cung giảm → giá dầu có thể tăng"',
        'C. "OPEC+ tăng thuế xuất khẩu dầu"',
        'D. "OPEC+ là tổ chức kiểm soát giá xăng trong nước"'
      ],
      correct: 'B',
      explanation: 'Dịch thuật ngữ cho retail: "OPEC+ cắt giảm sản lượng" = "Các nước xuất khẩu dầu lớn (Saudi Arabia, Nga...) đồng ý bán ít dầu hơn → nguồn cung toàn cầu giảm → cung < cầu → giá dầu có xu hướng tăng." Dùng ngôn ngữ kinh tế cơ bản: cung-cầu.'
    },
    {
      id: 'l6q15',
      type: 'multiple-choice',
      question: 'Phân biệt cách tư vấn "PVD P/E thấp = rẻ" khác với tư vấn đúng như thế nào?',
      options: [
        'A. Không khác gì, P/E thấp luôn nghĩa là rẻ',
        'B. Tư vấn đúng: "PVD trông rẻ vì LN đang cao. Nhưng dầu khí rẻ nhất khi LN cao nhất - vì sau đó LN sẽ giảm. Cần đánh giá giá dầu có bền không."',
        'C. Tư vấn đúng chỉ là thêm cảnh báo "có thể rủi ro"',
        'D. Không có sự khác biệt thực chất'
      ],
      correct: 'B',
      explanation: 'Tư vấn đúng phải giải thích nghịch lý chu kỳ: "PVD P/E 8x trông rẻ. Nhưng trong ngành dầu khí, P/E thấp nhất thường là lúc nguy hiểm nhất để mua - vì đó là lúc LN đang ở đỉnh chu kỳ. Cần xem giá dầu có bền ở mức cao không hay sắp giảm." Giải thích cơ chế, không chỉ đưa kết luận.'
    },
    {
      id: 'l6q16',
      type: 'multiple-choice',
      question: 'Khi tư vấn NĐT dài hạn, tại sao nên tránh PLX?',
      options: [
        'A. PLX quá rủi ro, giá biến động mạnh',
        'B. PLX biên lợi nhuận mỏng cố định, không có động lực tăng trưởng, không phù hợp NĐT cần tăng trưởng',
        'C. PLX không trả cổ tức',
        'D. PLX sắp phá sản'
      ],
      correct: 'B',
      explanation: 'PLX: Biên cố định ~300-500đ/lít → LN phụ thuộc sản lượng (ổn định). Thiếu catalyst tăng trưởng mạnh dài hạn. Phù hợp NĐT muốn ổn định + cổ tức. Không phù hợp NĐT dài hạn tìm tăng trưởng vốn. GAS và PVS có câu chuyện tăng trưởng dài hạn rõ ràng hơn.'
    },
    {
      id: 'l6q17',
      type: 'multiple-choice',
      question: 'Nguyên tắc "nhấn mạnh rủi ro trước, cơ hội sau" trong tư vấn có nghĩa là gì?',
      options: [
        'A. Luôn nói xấu cổ phiếu dầu khí để an toàn',
        'B. Giúp NĐT hiểu rõ downside trước khi quyết định - tránh mua vì kỳ vọng mà không hiểu rủi ro',
        'C. Chỉ tư vấn những cổ phiếu không có rủi ro',
        'D. Không đề xuất mua bất kỳ cổ phiếu dầu khí nào'
      ],
      correct: 'B',
      explanation: 'Nguyên tắc: NĐT cần hiểu họ có thể mất bao nhiêu trước khi biết họ có thể được bao nhiêu. "Cổ phiếu này có thể giảm 30-40% nếu giá dầu giảm. Nếu bạn chấp nhận được điều đó, đây là cơ hội tốt vì..." Trung thực về rủi ro giúp NĐT ra quyết định có trách nhiệm.'
    }
  ],
  layer7: [
    {
      id: 'l7q1',
      type: 'multiple-choice',
      question: 'Cấu trúc báo cáo phân tích cổ phiếu dầu khí chuẩn gồm mấy phần chính?',
      options: [
        'A. 3 phần: Tóm tắt, Phân tích, Khuyến nghị',
        'B. 7 phần: Tóm tắt, Thông tin cơ bản, Phân tích ngành, Phân tích DN, Định giá, Rủi ro, Phụ lục',
        'C. 5 phần: Giới thiệu, Phân tích tài chính, Định giá, Rủi ro, Kết luận',
        'D. 2 phần: Khuyến nghị và Giá mục tiêu'
      ],
      correct: 'B',
      explanation: 'Báo cáo chuẩn 7 phần: (1) Tóm tắt khuyến nghị; (2) Thông tin cơ bản công ty; (3) Phân tích ngành + vị trí trong chuỗi; (4) Phân tích doanh nghiệp; (5) Định giá; (6) Rủi ro; (7) Phụ lục (bảng tài chính, biểu đồ, nguồn). Người đọc thường chỉ đọc phần 1 - tóm tắt phải chuẩn xác.'
    },
    {
      id: 'l7q2',
      type: 'multiple-choice',
      question: 'Phần Tóm tắt khuyến nghị (Executive Summary) cần trả lời những gì?',
      options: [
        'A. Chỉ cần nêu khuyến nghị MUA/BÁN/GIỮ',
        'B. Khuyến nghị + Giá mục tiêu + Thời gian + 3 lý do chính + 2 rủi ro chính',
        'C. Lịch sử giá cổ phiếu 5 năm',
        'D. Toàn bộ nội dung báo cáo rút gọn thành 1 trang'
      ],
      correct: 'B',
      explanation: 'Tóm tắt chuẩn: (1) Khuyến nghị MUA/GIỮ/BÁN; (2) Giá mục tiêu XXX đồng (+X%); (3) Thời gian 6-12 tháng; (4) 3 bullet point lý do chính; (5) 2 bullet point rủi ro chính. Viết tóm tắt TRƯỚC, rồi mới viết chi tiết. Tóm tắt phải đứng độc lập - người chỉ đọc tóm tắt vẫn hiểu đủ.'
    },
    {
      id: 'l7q3',
      type: 'multiple-choice',
      question: 'Nguyên tắc "dựa trên dữ liệu" khi viết báo cáo có nghĩa là gì?',
      options: [
        'A. Luôn dùng số liệu từ nhiều năm trước',
        'B. Mọi nhận định phải có số liệu cụ thể - không nói "giá dầu sẽ tăng" mà phải nói tại sao với dữ liệu',
        'C. Chỉ dùng số liệu từ báo cáo tài chính chính thức',
        'D. Không cần số liệu nếu phân tích định tính tốt'
      ],
      correct: 'B',
      explanation: 'Nguyên tắc: SAI - "Giá dầu sẽ tăng". ĐÚNG - "Giá dầu Brent đã tăng 15% trong 2 tháng, từ $65 lên $75, sau khi OPEC+ cắt 2 triệu thùng/ngày và tồn kho EIA giảm 5 tuần liên tiếp." Mọi luận điểm cần số liệu cụ thể, nguồn rõ ràng.'
    },
    {
      id: 'l7q4',
      type: 'multiple-choice',
      question: 'Nguồn dữ liệu nào để lấy số liệu tồn kho dầu Mỹ hàng tuần?',
      options: [
        'A. OPEC.org',
        'B. EIA.gov - Energy Information Administration',
        'C. CafeF.vn',
        'D. Vietstock Finance'
      ],
      correct: 'B',
      explanation: 'EIA (eia.gov) công bố báo cáo tồn kho dầu hàng tuần vào thứ Tư. Đây là nguồn dữ liệu thực thời quan trọng nhất về cân bằng cung-cầu dầu. Cần bookmark và check định kỳ. Kết hợp với API (American Petroleum Institute, công bố tối thứ 3) để có dữ liệu sớm hơn 1 ngày.'
    },
    {
      id: 'l7q5',
      type: 'multiple-choice',
      question: 'Nguồn dữ liệu nào để lấy quyết định sản lượng của OPEC+?',
      options: [
        'A. EIA.gov',
        'B. Baker Hughes',
        'C. OPEC.org và Reuters/Bloomberg',
        'D. Vietstock Finance'
      ],
      correct: 'C',
      explanation: 'OPEC.org là nguồn chính thức cho quyết định sản lượng, Monthly Oil Market Report (MOMR). Reuters và Bloomberg cung cấp tin tức real-time về họp OPEC+. Đặt Google Alert "OPEC" để không bỏ lỡ quyết định quan trọng ảnh hưởng ngay đến giá dầu và cổ phiếu.'
    },
    {
      id: 'l7q6',
      type: 'multiple-choice',
      question: 'Baker Hughes rig count được công bố khi nào và dùng để làm gì?',
      options: [
        'A. Hàng tháng - đánh giá mức độ ô nhiễm ngành dầu khí',
        'B. Hàng tuần (thứ 6) - theo dõi hoạt động khoan thăm dò toàn cầu, dự báo cung dầu tương lai',
        'C. Hàng quý - theo dõi kết quả kinh doanh PVD',
        'D. Hàng năm - lập kế hoạch đầu tư dài hạn'
      ],
      correct: 'B',
      explanation: 'Baker Hughes Rig Count công bố hàng tuần (thứ 6), tại rigcount.bakerhughes.com. Số giàn khoan hoạt động toàn cầu phản ánh mức độ đầu tư thăm dò. Rig count tăng → cung dầu tương lai tăng → áp lực giá. Rig count giảm → cung sắp thiếu → giá có thể tăng.'
    },
    {
      id: 'l7q7',
      type: 'multiple-choice',
      question: 'Để lấy BCTC chi tiết và dữ liệu lịch sử của cổ phiếu dầu khí Việt Nam, dùng nguồn nào?',
      options: [
        'A. EIA.gov và IEA.org',
        'B. OPEC.org và Baker Hughes',
        'C. Vietstock Finance (finance.vietstock.vn) và Stockbiz (stockbiz.vn)',
        'D. Trading Economics và Index Mundi'
      ],
      correct: 'C',
      explanation: 'Cho dữ liệu tài chính Việt Nam: Vietstock Finance (BCTC chi tiết, dữ liệu lịch sử, phân tích) và Stockbiz (dữ liệu tài chính, cổ đông, giao dịch nội bộ). HOSE/HNX là nguồn thông báo chính thức, BCTC gốc. CafeF.vn tốt cho tin tức và phân tích nhanh.'
    },
    {
      id: 'l7q8',
      type: 'multiple-choice',
      question: 'Nguyên tắc đạo đức "Công khai xung đột lợi ích" yêu cầu analyst phải làm gì?',
      options: [
        'A. Không cần công khai nếu sở hữu ít cổ phiếu',
        'B. Nêu rõ nếu bản thân/tổ chức sở hữu cổ phiếu đang phân tích hoặc nhận tiền từ công ty đó',
        'C. Chỉ công khai khi có quyết định mua/bán lớn',
        'D. Công khai sau khi phát hành báo cáo'
      ],
      correct: 'B',
      explanation: 'Đạo đức nghề nghiệp: Luôn công khai xung đột lợi ích - nếu bản thân/tổ chức sở hữu cổ phiếu đang phân tích, nhận tư vấn phí từ công ty, hoặc có quan hệ kinh doanh. Disclosure thường ở cuối báo cáo: "Tại thời điểm viết, tác giả/tổ chức sở hữu/không sở hữu cổ phiếu XYZ."'
    },
    {
      id: 'l7q9',
      type: 'multiple-choice',
      question: 'Báo cáo phân tích cổ phiếu thường có hiệu lực trong bao lâu?',
      options: [
        'A. 1 tuần',
        'B. 1-3 tháng, cần cập nhật khi có tin quan trọng',
        'C. 2-3 năm',
        'D. Vô thời hạn'
      ],
      correct: 'B',
      explanation: 'Báo cáo cổ phiếu: hiệu lực 1-3 tháng. Báo cáo ngành: 3-6 tháng. Cần cập nhật ngay khi có tin quan trọng (OPEC+ họp, PVN thay đổi CAPEX, BCTC quý mới). Báo cáo phải có ngày viết và ghi rõ "hiệu lực đến..." để người đọc biết độ mới.'
    },
    {
      id: 'l7q10',
      type: 'multiple-choice',
      question: 'Nguyên tắc "rõ ràng" trong báo cáo phân tích có nghĩa là gì?',
      options: [
        'A. Dùng nhiều thuật ngữ chuyên ngành để thể hiện chuyên môn',
        'B. Nói thẳng khuyến nghị với giá mục tiêu cụ thể - tránh nước đôi như "có thể tăng hoặc giảm"',
        'C. Viết báo cáo ngắn nhất có thể',
        'D. Tránh đưa ra khuyến nghị cụ thể để an toàn'
      ],
      correct: 'B',
      explanation: 'SAI: "Cổ phiếu có thể tăng hoặc giảm tùy tình hình." ĐÚNG: "Khuyến nghị MUA với giá mục tiêu 45,000đ (+20%), thời gian 12 tháng." Rõ ràng giúp người đọc ra quyết định. Nước đôi không có giá trị. Nếu không đủ dữ liệu để đưa khuyến nghị → nói thẳng là "chưa đủ dữ liệu".'
    },
    {
      id: 'l7q11',
      type: 'multiple-choice',
      question: 'Lịch theo dõi quan trọng nhất hàng tuần cho analyst dầu khí là gì?',
      options: [
        'A. Thứ 2: đọc báo tổng hợp; Thứ 6: check giá dầu',
        'B. Thứ 3: API inventory; Thứ 4: EIA inventory; Thứ 6: Baker Hughes rig count',
        'C. Chỉ cần check khi có tin OPEC+',
        'D. Hàng ngày check BCTC các công ty'
      ],
      correct: 'B',
      explanation: 'Lịch tuần analyst dầu khí: Thứ 3 tối - API Inventory (báo trước); Thứ 4 (21:30 VN) - EIA Weekly Inventory chính thức; Thứ 6 - Baker Hughes Rig Count; Cuối tuần - báo cáo tuần CTCK. Check 15-20 phút/ngày là đủ để không bỏ lỡ sự kiện quan trọng.'
    },
    {
      id: 'l7q12',
      type: 'multiple-choice',
      question: 'Nguyên tắc đạo đức "Không sử dụng thông tin nội bộ" áp dụng như thế nào?',
      options: [
        'A. Chỉ áp dụng cho giao dịch cổ phiếu lớn',
        'B. Không giao dịch hoặc tiết lộ thông tin trọng yếu chưa công bố - vi phạm pháp luật và đạo đức nghề',
        'C. Được phép dùng thông tin nội bộ nếu không kiếm lời',
        'D. Chỉ áp dụng cho nhân viên công ty, không áp dụng cho analyst bên ngoài'
      ],
      correct: 'B',
      explanation: 'Thông tin nội bộ (kết quả quý chưa công bố, thương vụ M&A đang đàm phán...) không được dùng để giao dịch hoặc tiết lộ. Vi phạm có thể bị phạt tiền, tù giam và mất giấy phép hành nghề. Ngay cả khi vô tình có được thông tin nội bộ - phải báo cáo, không giao dịch.'
    },
    {
      id: 'l7q13',
      type: 'multiple-choice',
      question: 'Nguồn nào để tìm giá ure thế giới (benchmark cho DPM, DCM)?',
      options: [
        'A. EIA.gov',
        'B. Index Mundi (indexmundi.com) và Trading Economics',
        'C. Baker Hughes',
        'D. PVN.vn'
      ],
      correct: 'B',
      explanation: 'Giá ure thế giới: Index Mundi (indexmundi.com) cung cấp lịch sử giá ure Yuzhnyy (Ukraine) - benchmark quan trọng. Trading Economics cung cấp giá hàng hóa real-time. Benchmark ure Yuzhnyy và Trung Đông là 2 điểm tham chiếu quan trọng nhất cho phân tích DPM, DCM.'
    },
    {
      id: 'l7q14',
      type: 'multiple-choice',
      question: 'Khi nào cần cập nhật ngay báo cáo phân tích đã phát hành?',
      options: [
        'A. Mỗi tháng theo lịch cố định',
        'B. Khi có sự kiện quan trọng thay đổi luận điểm: OPEC+ quyết định lớn, BCTC mới, PVN thay đổi CAPEX...',
        'C. Chỉ khi giá cổ phiếu thay đổi >10%',
        'D. Chỉ khi khách hàng yêu cầu'
      ],
      correct: 'B',
      explanation: 'Cập nhật ngay khi có tin quan trọng: OPEC+ quyết định cắt/tăng sản lượng lớn, PVN thay đổi CAPEX, BCTC quý mới ra, dự án quan trọng được/mất, thay đổi CEO lớn. Không cần cập nhật khi tin không ảnh hưởng đến luận điểm chính. Luôn ghi ngày cập nhật.'
    },
    {
      id: 'l7q15',
      type: 'multiple-choice',
      question: 'Trong báo cáo chuẩn, phần phân tích ngành cần đề cập gì?',
      options: [
        'A. Chỉ cần giới thiệu tên công ty và lịch sử thành lập',
        'B. Vị trí trong chuỗi giá trị, giá dầu và xu hướng, các yếu tố vĩ mô, so sánh với peer',
        'C. Chỉ cần liệt kê các đối thủ cạnh tranh',
        'D. Lịch sử giá cổ phiếu 10 năm'
      ],
      correct: 'B',
      explanation: 'Phần phân tích ngành (1 trang): (1) Vị trí công ty trong chuỗi giá trị dầu khí (upstream/midstream/downstream); (2) Giá dầu hiện tại và xu hướng; (3) Các yếu tố vĩ mô ảnh hưởng (OPEC+, tỷ giá, nhu cầu...); (4) So sánh với peers (các công ty cùng ngành trong khu vực).'
    },
    {
      id: 'l7q16',
      type: 'multiple-choice',
      question: 'Thông tin nào nên có trong phần "Thông tin cơ bản" của báo cáo cổ phiếu dầu khí?',
      options: [
        'A. Chỉ cần tên công ty và mã cổ phiếu',
        'B. Tên, mã, sàn, ngành, phân khúc chuỗi dầu khí, vốn hóa, giá, P/E, P/B, cổ đông lớn, tỷ lệ NĐTNN',
        'C. Chỉ các chỉ số tài chính quan trọng',
        'D. Chỉ cần cơ cấu cổ đông'
      ],
      correct: 'B',
      explanation: 'Thông tin cơ bản cần có: Tên công ty, mã cổ phiếu, sàn giao dịch (HOSE/HNX), ngành nghề, vị trí trong chuỗi dầu khí, vốn hóa thị trường, giá hiện tại, P/E, P/B, cổ đông lớn, tỷ lệ sở hữu nước ngoài. Đây là snapshot nhanh giúp người đọc định vị công ty.'
    },
    {
      id: 'l7q17',
      type: 'multiple-choice',
      question: 'Nguyên tắc "Trách nhiệm với người đọc" trong đạo đức nghề analyst là gì?',
      options: [
        'A. Luôn khuyến nghị MUA để tạo cảm giác tích cực',
        'B. Viết để người đọc hiểu và ra quyết định tốt - cảnh báo rủi ro rõ, cập nhật khi thay đổi, không giấu thông tin bất lợi',
        'C. Chỉ viết cho khách hàng VIP, không cho retail',
        'D. Đảm bảo dự báo giá mục tiêu luôn chính xác'
      ],
      correct: 'B',
      explanation: 'Trách nhiệm với người đọc: (1) Viết để họ HIỂU, không để khoe chuyên môn; (2) Cảnh báo rủi ro rõ ràng; (3) Cập nhật khi có thay đổi quan trọng; (4) Không giấu thông tin bất lợi để "bán" cổ phiếu. Người đọc tin tưởng và ra quyết định đầu tư dựa trên báo cáo của bạn - đó là trách nhiệm lớn.'
    },
    {
      id: 'l7q18',
      type: 'multiple-choice',
      question: 'World Energy Outlook của IEA được công bố khi nào và dùng để làm gì?',
      options: [
        'A. Hàng tuần - theo dõi tồn kho dầu',
        'B. Hàng năm (tháng 10) - bức tranh dài hạn về nhu cầu/cung năng lượng toàn cầu cho 20-30 năm tới',
        'C. Hàng tháng - cập nhật dự báo giá dầu ngắn hạn',
        'D. Hàng quý - so sánh sản lượng OPEC'
      ],
      correct: 'B',
      explanation: 'IEA World Energy Outlook: Công bố hàng năm vào tháng 10, là báo cáo toàn diện nhất về xu hướng năng lượng toàn cầu 20-30 năm tới. Quan trọng cho phân tích dài hạn: Nhu cầu dầu toàn cầu sẽ đạt đỉnh khi nào? Vai trò năng lượng tái tạo tăng như thế nào? Ảnh hưởng đến dầu khí dài hạn.'
    },
    {
      id: 'l7q19',
      type: 'multiple-choice',
      question: 'Khi dự báo giá mục tiêu, analyst cần làm gì để đảm bảo tính minh bạch?',
      options: [
        'A. Chỉ cần nêu con số giá mục tiêu',
        'B. Nêu rõ giả định (assumption) đằng sau dự báo và cập nhật khi giả định thay đổi',
        'C. Dùng phương pháp phức tạp để tăng độ tin cậy',
        'D. Đảm bảo giá mục tiêu luôn cao hơn giá hiện tại 20%'
      ],
      correct: 'B',
      explanation: 'Minh bạch trong dự báo: Nêu rõ các giả định - "Giá mục tiêu 45,000đ dựa trên: Giá dầu Brent trung bình $75/thùng, Normalized P/E 14x, EPS dự báo 3,200đ." Khi giả định thay đổi (vd: giá dầu về $60) → cần cập nhật giá mục tiêu và thông báo. Dự báo là ý kiến có cơ sở, không phải sự thật.'
    },
    {
      id: 'l7q20',
      type: 'multiple-choice',
      question: 'Đặt Google Alert cho các từ khóa nào để không bỏ lỡ tin quan trọng ngành dầu khí?',
      options: [
        'A. Chỉ cần "OPEC" và "giá dầu"',
        'B. "OPEC", "gia dau", "PVN", "PVD", "BSR", "DPM", "GAS" - theo dõi toàn diện',
        'C. Chỉ các mã cổ phiếu đang nắm giữ',
        'D. "Bitcoin" và "vàng" để so sánh'
      ],
      correct: 'B',
      explanation: 'Google Alert thiết lập cho: "OPEC", "giá dầu", "PVN" (kế hoạch CAPEX), và các mã cổ phiếu quan tâm (PVD, PVS, BSR, GAS, DPM). Alert gửi email khi có tin mới → không bỏ lỡ sự kiện quan trọng. Kết hợp với lịch theo dõi hàng tuần (EIA thứ 4, Rig count thứ 6).'
    }
  ]
};

window.QUIZ_DATA = QUIZ_DATA;
