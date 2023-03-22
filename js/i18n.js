setTimeout(() => {
const lngs = {
    vn: {
        nativeName: 'VietNam'
    },
    en: {
        nativeName: 'English'
    },
    tw: {
        nativeName: 'Taiwan'
    }
};
 // Hello các bạn
const rerender = () => {
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
    $('title').text($.t('head.title'))
    $('meta[name=description]').attr('text', $.t('head.description'))
}



$(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    i18next
        // detect user language
        // learn more: https://github.com/i18next/i18next-browser-languageDetector
        .use(i18nextBrowserLanguageDetector)
        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init({
            debug: true,
            fallbackLng: 'en',
            resources: {

                // -------------------------------------------------------------------- Taiwan --------------------------------------------------------------------------------------------------
                vn: {
                    translation: {
                        head: {
                            title: 'Công ty TNHH Tài Nguyên CHC Việt Nam',
                            description: 'Công ty TNHH Tài Nguyên CHC Việt Nam'
                        },
                        //----------------------------- Menu Navigation ------------------------------
                        menu: {
                            information: 'Thông tin CHCV1',
                            information_sub1: 'Lịch sử hình thành2',
                            information_sub2: 'Năng lực phân phối',
                            information_sub3: 'Năng lực sản xuất',
                            information_sub4: 'Quản lý chất lượng',
                            information_sub5: 'Video giới thiệu công ty',
                            information_sub6: 'Kết luận',
                            intro: 'Giới thiệu GGBFS',
                            product: 'Sản phẩm',
                            policy: 'Chính sách',
                            environment: 'Môi trường',
                            environment_sub1: 'Giấy phép môi trường',
                            environment_sub2: 'Quan trắc',
                            contact: 'Thông tin liên hệ',
                            contact_sub1: 'Thông tin liên hệ',
                            contact_sub2: 'Gửi email',
                            contact_sub3: 'Gửi khảo sát',
                            service: 'Dịch vụ',
                            service_sub1: 'ES0000 - Khách hàng',
                            service_sub2: 'ES1000 - Người dùng',
                            service_sub1_1: 'ES0001 - Đăng ký vận chuyển',
                            service_sub1_2: 'ES0002 - Theo dõi vận chuyển',
                            service_sub1_3: 'ES0003 - Theo dõi đơn hàng',
                            service_sub1_4: 'ES0004 - Đổi mật khẩu',
                            service_sub2_1: 'ES1001 - Báo cáo sản lượng',
                            service_sub3:'Tài liệu hướng dẫn sử dụng',
                        },

                        slider: {
                            text1: 'Tiếp tục cải tiến chất lượng, nâng cao sự hài lòng của khách hàng và sử dụng tích cực giá trị tài nguyên.',
                            text2: 'CHC Việt Nam',
                        },

                        //----------------------------- Page Login ------------------------------------
                        login: {
                            text1: 'Đăng nhập',
                            text2: 'Tên đăng nhập',
                            text3: 'Tên đăng nhập không được để trống',
                            text4: 'Mật khẩu',
                            text5: 'Mật khẩu không được để trống',
                            text6: 'Thành công: Bạn đã đăng nhập thành công!',
                            text7: 'Cảnh báo: Tên người dùng hoặc Mật khẩu không hợp lệ!',
                            text8: 'Mã ngẫu nhiên ',
                            text9: 'Mã ngẫu nhiên không được để trống',
                            text10: 'Nhập mã ngẫu nhiên',
                            text11: '*Lưu ý: Mã ngẫu nhiên không phân biệt hoa và thường',
                            text12: 'Thông tin hỗ trợ',
                            text13: 'Tên đăng nhập không đúng',
                            text14: 'Mật khẩu không đúng',
                            text15: 'Mã captcha không đúng',
                            text16: 'Bạn đã nhập sai mật khẩu',
                            text17: 'lần',
                            text18: 'Tài khoản của bạn đã bị khóa đến',
                            text19: 'Đăng nhập',
                            text20: 'Thoát',



                        },

                        //----------------------------- Page Information ------------------------------
                        information: {
                            // Thông tin CHCV
                            text1: 'Giới thiệu',
                            text2: 'Công ty TNHH Tài Nguyên CHC Việt Nam - Chi nhánh Bà Rịa-Vũng Tàu (viết tắt CHCV-BRVT) được thành lập ngày 12.04.2019, có địa chỉ nhà máy tại KCN Mỹ Xuân A2, Phường Mỹ Xuân, thị xã Phú Mỹ, tỉnh BRVT. Chúng tôi được đầu tư bởi Công ty TNHH Tài nguyên CHC Việt Nam (CHCV) thành lập ngày 17/03/2016 địa chỉ tại Nhà tổ hợp, khu hành chính Formosa, phường Kỳ Long, Thị xã Kỳ Anh, tỉnh Hà Tĩnh.',
                            text3: 'Văn phòng tại Bà Rịa Vũng Tàu',
                            text4: 'Chúng tôi đã thiết lập và bố trí quy trình cung cấp hàng thuận tiện, nhanh chóng với sự hướng dẫn tận tình, chu đáo từ các chuyên viên kỹ thuật lành nghề tại nhà máy. Với 4 silo thành phẩm xỉ nghiền có tổng sức chứa hơn 28.000 tấn luôn sẵn sàng phục vụ liên tục 24 giờ/ngày, 365 ngày/năm.',
                            text5: 'Kho GGBFS',
                            text6: 'Nhà máy CHCV-BRVT có thể cung cấp ra thị trường sản lượng xỉ nghiền lên đến 1 triệu tấn/năm với hệ thống bồn chứa 32.000 tấn, và kho bãi luôn sẵn sàng lưu trữ nguyên liệu lên đến 60.000 tấn. Nhà máy được đầu tư dây chuyền sản xuất hiện đại, vận hành,quản lý, kiểm soát và bảo trì bởi các chuyên gia và các kỹ sư lành nghề, đảm bảo quá trình vận hành liên tục với thành phẩm luôn đạt chất lượng theo tiêu chuẩn của Nhà nước Việt Nam. Cùng với kinh nghiệm về lĩnh vực sản xuất và cung cấp xỉ nghiền hơn 30 năm tại Đài Loan, chúng tôi tin rằng hoàn toàn có đủ năng lực để đáp ứng các yêu cầu của Khách hàng.',
                            text7: 'Máy nghiền',
                            text8: 'Chất lượng sản phẩm luôn là mối quan tâm hàng đầu của nhà máy chúng tôi. Phòng kiểm soát chất lượng đã đưa ra quy trình kiểm tra chất lượng chặt chẽ từ nguyên vật liệu đến sản phẩm một cách chi tiết trong từng giai đoạn sản xuất. Đảm bảo chất lượng sản phẩm ổn định, nhất quán trong từng lô hàng đến khi tới các đơn vị sử dụng. Đội ngũ kỹ thuật luôn sẵn sàng tư vấn, nghiên cứu, đưa ra giải pháp tối ưu cho Khách hàng khi sử dụng sản phẩm của công ty.',
                            text9: 'Phòng hóa học',
                            text10: 'Nghiên cứu hóa học',
                            text11: 'Phòng kiểm nghiệm',
                            text12: 'Kiểm tra mẫu vật nghiên cứu',
                            text13: 'Phòng điều khiển',
                            text14: 'Quan sát quá trình nghiên cứu',
                            text15: 'CHC Việt Nam',
                            text16: 'Bằng tâm huyết, kinh nghiệm, quy mô đầu tư tại Nhà máy nghiền CHCV-BRVT,chúng tôi cam kết là một nhà cung cấp uy tín với nguồn hàng ổn định, chất lượng bền vững và dịch vụ chăm sóc khách hàng chu đáo, thân thiện trong lĩnh vực xỉ nghiền tại thị trường Việt Nam, đặc biệt là khu vực phía Nam. Trong tương lai, CHC sẽ mở rộng mạng lưới kinh doanh bằng cách duy trì các nguyên tắc 4R là giảm thiểu, thu hồi, tái chế và tái sử dụng. Công ty cũng sẽ tiếp tục phát huy các nguồn tài nguyên sẵn có như nguồn nhân lực chất lượng cao, máy móc kỹ thuật hiện đại, kiểm soát chặt chẽ chất lượng sản phẩm để tạo sự khác biệt và theo đuổi sự phát triển bền vững và bảo vệ môi trường sinh thái. Đó chính là mục tiêu lâu dài mà công ty đang hướng tới vật liệu xây dựng thân thiện nhất với môi trường.',
                            text17: 'Cổng công ty',

                        },

                        //----------------------------- Page Introduction -----------------------------
                        intro: {
                            // Giới thiệu GGBFS
                            text1: 'Sản phẩm GBFS và GGBFS',
                            text2: 'Xỉ hạt (GBFS - Granulated Blast Furnace Slag) là phụ phẩm trong quá trình luyện gang thép của nhà máy sản xuất thép và được giao đến công ty chúng tôi sau khi được làm nguội bằng nước, sau khi sấy nhiệt, thêm lượng phụ gia thích hợp sẽ đưa đến hệ thống nghiền để nghiền và phân loại, tạo thành xỉ hạt lò cao nghiền mịn (GGBFS - Ground-Granulated Blast Furnace Slag) thành phẩm và đưa đến kho dự trữ.',
                            text3: 'Đặc tính',
                            text4: 'Hàm lượng Cacbon thấp',
                            text5: 'Tính cộng tác',
                            text6: 'Nhiệt thủy hóa thấp',
                            text7: 'Giảm độ co rút',
                            text8: 'Cường độ uốn',
                            text9: 'Chống xâm nhập Ion Clo',
                            text10: 'Chống xâm thực sulfate',
                            text11: 'Không tạo phản ứng kiềm Silic (AAR/ ASR)',
                            text12: 'Một số công trình ứng dụng',
                        },

                        //----------------------------- Page Product ----------------------------------
                        product: {
                            // Sản phẩm
                            text1: '7 ngày ≧ 55%',
                            text2: '28 ngày ≧ 95%',
                            text3: '91 ngày ≧ 95%',
                            text4: '7 ngày ≧ 75%',
                            text5: 'Chỉ tiêu kỹ thuật',
                            text6: 'Sản phẩm của CHCV luôn đạt tiêu chuẩn TCVN 11586. Với các sản phẩm S75 và S95 có chất lượng vượt trội phù hợp với mọi yêu cầu của người tiêu dùng. Chỉ số hoạt tính S75 của CHCV có thể đạt được yêu cầu của S95 theo TCVN và có khả năng làm việc tuyệt vời.',
                            text7: 'Bảng thông số kỹ thuật sản phẩm',
                            text8: 'Chỉ tiêu',
                            text9: 'Chỉ số hoạt tính',
                            text10: 'Hàm lượng mất khi nung ',
                            text11: 'Hàm lượng Ion Clorua',
                            text12: 'Độ ẩm',
                            text13: 'Độ lưu động',
                            text14: 'Độ mịn',
                            text15: 'Phần còn lại sau khi sàng',
                            text16: 'Khối lượng riêng',
                            text17: 'Báo cáo kiểm nghiệm',
                            text18: 'Giấy chứng nhận hợp quy QCVN 16',
                            text19: 'Giấy chứng nhận hợp chuẩn TCVN 11586',
                            text20: 'Ứng Dụng',
                            text21: 'Tài liệu hướng dẫn sử dụng sản phẩm Xỉ hạt lò cao nghiền mịn.',
                            text22: 'Bảng tỉ lệ ứng dụng sản phẩm',
                            text23: 'Tỷ lệ GGBFS (%)',
                            text24: 'Bê tông trộn sẵn',
                            text25: 'Bê tông chống thấm, bê tông cho công trình xử lý môi trường',
                            text26: 'Bê tông sàn nhà công nghiệp',
                            text27: 'Bê tông đúc sẵn (bê tông cốt thép, bê tông dư ứng lực, bê tông không cốt thép, gạch bê tông)',
                            text28: 'Bê tông cường độ cao, tính nâng cao',
                            text29: 'Bê tông chịu nhiệt',
                            text30: 'Bê tông môi trường biển',
                            text31: 'Bê tông khối lớn',
                            text32: 'Bê tông nhẹ',
                            text33: 'Bê tông kết cấu môi trường Sunfat',
                            text34: 'Bê tông đầm lăn',
                            text35: '25-50 cho đường giao thông 50-80 cho đập RCC',
                            text36: 'Vữa xây, vữa rót',
                            text37: 'Bê tông yêu cầu ngăn chặn phản ứng kiềm cốt liệu',
                            text38: 'Bê tông mặt đường và cầu đường giao thông',
                            text39: 'Gia cố đất',
                        },

                        //----------------------------- Page Policy -----------------------------------
                        policy: {
                            //Chính sách
                            text1: 'Chính sách về chất lượng',
                            text2: 'Để đạt được chính sách chất lượng và các yêu cầu mục tiêu, chúng tôi cam kết:',
                            text3: '1. Cải tiến thiết bị quy trình, tăng cường đào tạo nhân sự và ổn định chất lượng sản phẩm.',
                            text4: '2. Thực hiện thái độ phục vụ, đáp ứng cung cầu, nâng cao sự hài lòng của khách hàng.',
                            text5: '3. Sử dụng các nguồn lực hiệu quả để tạo ra giá trị sản phẩm và tăng khả năng cạnh tranh của công ty.',
                        },

                        //----------------------------- Page Environment ------------------------------
                        environment: {},

                        //----------------------------- Page Contact ----------------------------------
                        contact: {
                            //Liên hệ
                            text1: 'Liên hệ với chúng tôi',
                            text2: 'Công ty TNHH Tài Nguyên CHC Việt Nam - Hà Tĩnh',
                            text3: 'Công ty TNHH Tài Nguyên CHC Việt Nam - Bà Rịa Vũng Tàu',
                            text4: 'Số điện thoại: +84(0) 2543952168',
                            text5: 'Địa chỉ email: chcvservice@chcv.com.vn',
                            text6: 'Gủi Email đến chúng tôi',
                            text7: 'Họ và tên',
                            text8: 'Tên công ty',
                            text9: 'Số điện thoại',
                            text10: 'Địa chỉ email',
                            text11: 'Tiêu đề email',
                            text12: 'Nội dung',
                            text13: 'Tôi đồng ý với các thông tin nêu trên.',
                            text14: 'Gửi đi',
                            text15: 'Phiếu khảo sát mức độ hài lòng của khách hàng về sản phẩm xỉ hạt lò cao nghiền mịn',
                            text16: 'Để có thể cung cấp đến quý khách những dịch vụ và sản phẩm tốt hơn, chúng tôi thực hiện khảo sát mức độ hài lòng của khách hàng trong thời gian qua, để có thể hiểu được nhu cầu và mong muốn của khách hàng đối với dịch vụ của công ty, từ đó nâng cao chất lượng dịch vụ.',
                            text17: 'Chuyển tiếp',
                            text18: 'Bảng câu hỏi các bên liên quan',
                            text19: 'Để hiểu như cầu và mong đợi của các bên liên quan, công ty chúng tôi có lập bảng khảo sát nhằm nhận định và đánh giá mức độ quan trọng của các mối quan tâm.',
                            text20: 'Bạn là?',
                            text21: 'Vui lòng chọn một trong các lựa chọn sau',
                            text22: 'Khách hàng',
                            text23: 'Đối tác',
                            text24: 'Cổ đông',
                            text25: 'Ghi nội dung của bạn vào đây.',
                        },

                        //----------------------------- Page Service ----------------------------------
                        service: {
                            // Đăng ký vận chuyển
                            register_text1: 'Ngày',
                            register_text2: 'Biển số xe',
                            register_text3: 'Loại hàng',
                            register_text4: 'Khách hàng',
                            register_text5: 'Từ ngày',
                            register_text6: 'đến ngày',
                            register_text7: 'Hiển thị đơn đã xóa',
                            register_text8: 'Tổng số lượng:',
                            register_text9: 'Bảng theo dõi đăng ký vận chuyển',
                            register_text10: 'Chọn hàng trên mỗi trang',
                            register_text11: 'Trạm',
                            register_text12: 'Vào',
                            register_text13: 'Ra',
                            register_text14: 'Mã phiếu',
                            register_text15: 'Hành động',
                            register_text16: 'Tổng đơn:',
                            register_text17: 'Nhập',
                            register_text18: 'Thông tin hỗ trợ',
                            register_text19: 'Tổng số đơn:',
                            register_text20: 'Id',
                            register_text21: 'Không thể hủy đơn của những ngày trước!',
                            register_text22: 'Không thể hủy đơn đã có xe ra hoặc vào',
                            register_text23: 'Không thể hủy đơn đã có mã phiếu',
                            register_text24: 'Số xe bị trống hoặc không đúng!',
                            register_text25: 'Đơn này đã tồn tại, bạn có muốn tiếp tục không?',
                            register_text26: 'Đã hủy thao tác.',
                            register_text27_1: 'Bạn có muốn hủy đơn số',
                            register_text27_2: 'của ngày',
                            register_text27_3: 'không',
                            register_text28: 'Đã hủy thành công!',
                            register_text29: 'Thất bại',
                            register_text30: 'Ngưng tác vụ.',
                            register_tittle1: 'Lỗi Thao Tác',
                            register_tittle2: 'Nhập lỗi',
                            register_tittle3: 'Dữ liệu bị trùng?',
                            register_tittle4: 'Đang thực thi...',
                            register_tittle5: 'Bạn có chắc?',

                            // Theo doi van chuyen
                            shipping_text1: 'Từ ngày',
                            shipping_text2: 'đến ngày',
                            shipping_text3: 'Khách hàng',
                            shipping_text4: 'Tổng số xe:',
                            shipping_text5: 'Tổng số lượng:',
                            shipping_text6: 'Bảng theo dõi thông tin vận chuyển ',
                            shipping_text7: 'Chọn hàng trên mỗi trang',
                            shipping_text8: 'Ngày xuất phiếu',
                            shipping_text9: 'Biển số xe',
                            shipping_text10: 'Số lượng vận chuyển (MT)',
                            shipping_text11: 'Tên khách hàng',
                            shipping_text12: 'Số phiếu',
                            shipping_text13: 'Mã phiếu',
                            shipping_text14: 'Giờ vào',
                            shipping_text15: 'Giờ ra',
                            shipping_text16: 'Mã niêm phong',

                            // Theo dõi thông tin đơn hàng
                            order_text1: 'Từ ngày',
                            order_text2: 'đến ngày',
                            order_text3: 'Khách hàng',
                            order_text4: 'Tổng số đơn:',
                            order_text5: 'Tổng số lượng đặt hàng:',
                            order_text6: 'Bảng theo dõi thông tin đơn hàng',
                            order_text7: 'Chọn hàng trên mỗi trang',
                            order_text8: 'Khách hàng',
                            order_text9: 'Mã đơn hàng',
                            order_text10: 'Số lượng đặt hàng (MT)',
                            order_text11: 'Số lượng còn lại (MT)',
                            order_text12: 'Từ ngày',
                            order_text13: 'Đến ngày',
                            order_text14: 'Tổng số lượng còn lại:',
                            // Tài khoản
                            accoout_text1: 'Đổi mật khẩu',
                            accoout_text2: 'Mật khẩu cũ',
                            accoout_text3: 'Mật khẩu mới',
                            accoout_text4: 'Xác nhận lại mật khẩu',
                            accoout_text5: 'Cập nhật',
                            accoout_text6: '*Lưu ý: Mật khẩu phải dài từ 7-32 ký tự,có chữ hoa và chữ thường và có ít nhất 1 ký tự đặc biệt.',
                            accoout_text7: 'Mật khẩu mới không trùng khớp với nhau',
                            accoout_text8: 'Mật khẩu bị trống hoặc ít hơn 7 ký tự',
                            accoout_text9: 'Mật khẩu chưa có chữ hoa!',
                            accoout_text10: 'Mật khẩu chưa có kí tự số!',
                            accoout_text11: 'Mật khẩu chưa có kí tự đặc biệt!',
                            accoout_text12: 'Mật khẩu cũ không trùng khớp hoặc có lỗi xảy ra!',
                            accoout_text13: 'Thay đổi mật khẩu thành công',
                            // Báo cáo sản lượng
                            quantity_text1: 'Từ ngày',
                            quantity_text2: 'đến ngày',
                            quantity_text3: 'Nhà máy',
                            quantity_text4: 'Kho',
                            quantity_text5: 'Mã sản phẩm',
                            quantity_text6: 'Bảng theo dõi thông tin sản lượng',
                            quantity_text7: 'Tên sản phẩm',
                            quantity_text8: 'Số lượng trước (MT)',
                            quantity_text9: 'Số lượng vào (MT)',
                            quantity_text10: 'Số lượng ra (MT)',
                            quantity_text11: 'Số lượng hiện tại (MT)',
                            // Báo cáo sản lượng
                            report_text1: 'Ngày giờ: ',
                            report_text2: 'In',



                        },

                        //----------------------------- Footer ----------------------------------------
                        footer: {
                            footer1: 'Vị trí Công ty TNHH Tài Nguyên CHC Chi nhánh tại Bà Rịa Vũng Tàu',
                            footer2: 'Địa chỉ tại Bà Rịa Vũng Tàu',
                            footer3: 'Khu công nghiệp Mỹ Xuân A2, Phường Mỹ Xuân, Thị xã Phú Mỹ, Tỉnh Bà Rịa - Vũng Tàu, Việt Nam',
                            footer4: 'Địa chỉ tại Hà Tĩnh:',
                            footer5: 'Nhà tổ hợp, khu hành chính FORMOSA, Khu kinh tế Vũng Áng, Phường Kỳ Long, Thị xã Kỳ Anh, Tỉnh Hà Tĩnh, Việt Nam'
                        }
                    }
                },

                // -------------------------------------------------------------------- English -------------------------------------------------------------------------------------------------
                en: {
                    translation: {
                        head: {
                            title: 'CHC Viet Nam Resources Limited Liability Company',
                            description: 'CHC Viet Nam Resources Limited Liability Company.'
                        },

                        //----------------------------- Menu Navigation ------------------------------
                        menu: {
                            information: 'Company Profile',
                            information_sub1: 'General infomation',
                            information_sub2: 'Deliverry capacity',
                            information_sub3: 'Production capacity',
                            information_sub4: 'Quality management',
                            information_sub5: 'Company introduction video',
                            information_sub6: 'Conclusion',
                            intro: 'Introduction to GBFS & GGBFS',
                            product: 'Our Product',
                            policy: 'Quality Policy',
                            environment: 'Enviroment Management',
                            environment_sub1: 'Environmental license',
                            environment_sub2: 'Monitoring',
                            contact: 'Contact us',
                            contact_sub1: 'Contact Info',
                            contact_sub2: 'Send Email',
                            contact_sub3: 'Send survey',
                            service: 'E - Service',
                            service_sub1: 'ES0000 - Customer',
                            service_sub2: 'ES1000 - Employees',
                            service_sub1_1: 'ES0001 - Register for shipping',
                            service_sub1_2: 'ES0002 - Shipping information',
                            service_sub1_3: 'ES0003 - Order information',
                            service_sub1_4: 'ES0004 - Change password',
                            service_sub2_1: 'ES1001 - Warehouse Query',
                            service_sub3: 'User Guide',
                        },

                        slider: {
                            text1: 'Continuous improvement in the production process, ensuring stable product quality, enhancing customer satisfaction, and actively using the value of resources.',
                            text2: 'CHC Vietnam',

                        },

                        //----------------------------- Page Login ------------------------------------
                        login: {
                            // Login
                            text1: 'Login',
                            text2: 'Username',
                            text3: "Username can't be blank",
                            text4: 'Password',
                            text5: "Password can't be blank",
                            text6: 'Sucess: You login sucess!',
                            text7: 'Warning: Username or Password is invalid!',
                            text8: 'Captcha',
                            text9: "Captcha can't be blank",
                            text10: 'Enter Captcha',
                            text11: '*Note: Captcha  is not case sensitive',
                            text12: 'Support information',
                            text13: 'Username is incorrect',
                            text14: 'Password is incorrect',
                            text15: 'Captcha is incorrect',
                            text16: 'You have entered the wrong password',
                            text17: 'time',
                            text18: 'Your account has been locked up to',
                            text19: 'Login',
                            text20: 'Logout',

                        },

                        //----------------------------- Page Information ------------------------------
                        information: {
                            // Thông tin CHCV
                            text1: 'Introduction',
                            text2: 'CHC Vietnam Resources Co., Ltd - Ba Ria-Vung Tau Branch (as CHCV-BRVT) was established on April 12, 2019, at My Xuan A2 Industrial Park, My Xuan Ward, Phu My, BRVT province. We are invested by CHC Vietnam Resources Co., Ltd (CHCV) established on March 17, 2016 with address at Formosa administrative Complex Building, Ky Long ward, Ky Anh town, Ky Anh district, Ha Tinh province.',
                            text3: 'Office in Ba Ria Vung Tau',
                            text4: 'We have set up and arranged a convenient and fast delivery layout, carefully instructed by skillful technicians. With a total capacity of more than 32,000 mt of 4 silos, 4 lanes, GGBFS delivery is always well prepared in 24 hours per day, 365 days per year.',
                            text5: 'GGBFS storehouse ',
                            text6: 'Our factory can supply to the market with an output of GGBFS up to 1 million mt/year with 4 silo, 4 lanes capacity 32,000 mt, and the warehouse of raw materials is always ready to store GBFS up to 60,000 mt. \n\n Our grinding mill with modern production lines has been built, operated, managed, controlled and maintained by professional and skillful engineers, who are responsible for keeping all production activities smooth and continuous with qualified GGBFS as TCVN. With more than 30 years of experience in manufacturing and supplying GGBFS in Taiwan, we believe that we can satisfy any customers’ requirement. Vietnam market’s demand',
                            text7: 'Crusher',
                            text8: 'In addition, product quality is our first priority. Our Quality Control Department always carry out all kinds of quality tests on each production stage in order to guarantee a stable and consistent quality in each delivery to each users. Our technical team is always available to advise, provide research and offer the best solutions to customers when using GGBFS.',
                            text9: 'Chemistry room',
                            text10: 'Chemical research',
                            text11: 'Testing room',
                            text12: 'Examination of research specimens',
                            text13: 'Control room',
                            text14: 'Observing the research and production process',
                            text15: 'CHC VietNam',
                            text16: 'With heartful concepts, experience, and investment at CHCV-BRVT grinding mill, we are committed to being a reliable partner with a stable supply, consistent quality, and good service in GGBFS business of Vietnam market. \n \nIn the future, CHC will extend sales network by upholding the 4R principles, namely reduction, recycling, recovery, and reuse. It will continue to promote the value of resources and create its differentiated advantage in order to pursue its sustainability and protection of the ecological environment, which is its long-term goal. The latest and the most environmentally friendly building materials in the engineering industry.',
                            text17: 'Company portal',


                        },

                        //----------------------------- Page Introduction -----------------------------
                        intro: {
                            // Giới thiệu GGBFS
                            text1: 'GBFS and GGBFS products',
                            text2: "Granulated blast furnace slag (GBFS) is a byproduct of a steel factory's steelmaking process after being cooled by the water that is delivered to our company. After being heated and treated with additives, the GBFS will be sent to the vertical mill for grinding and separation, forming the finished GGBFS (ground-granulated blast furnace slag), and sent to the silo for storage .",
                            text3: 'Characteristic',
                            text4: 'Low Carbon text',
                            text5: 'Workability',
                            text6: 'Low hydration heat',
                            text7: 'Reduce shrinkage',
                            text8: 'Flexural strength',
                            text9: 'Avoid Cl-ion penetrate',
                            text10: 'Resistance to sulfate attack',
                            text11: 'Preventing alkaline aggregate reaction',
                            text12: 'Some application works',

                        },

                        //----------------------------- Page Product ----------------------------------
                        product: {
                            // Sản phẩm
                            text1: '7 days ≧ 55%',
                            text2: '28 days ≧ 95%',
                            text3: '91 days ≧ 95%',
                            text4: '7 days ≧ 75%',
                            text5: 'Product specification',
                            text6: "CHCV's product comply with TCVN 11586 standard. CHCV supply premium S75 and S95 for all users. Activity index of CHCV's S75 can reach requirement of S95 and provide excellent workability.",
                            text7: 'Product specification table',
                            text8: 'Items',
                            text9: 'Activity Index',
                            text10: 'Loss on heating',
                            text11: 'Chloride ion content',
                            text12: 'Humidity',
                            text13: 'Mobility',
                            text14: 'Smoothly',
                            text15: 'Remaining after sieving',
                            text16: 'Specific weight',
                            text17: 'Test report',
                            text18: 'Certificate of conformity QCVN 16',
                            text19: 'Certificate of conformity with TCVN 11586',
                            text20: 'Application',
                            text21: 'User manual for finely ground blast furnace slag.',
                            text22: 'Product application rate table',
                            text23: 'Rate of GGBFS (%)',
                            text24: 'Ready-mix concrete',
                            text25: 'Waterproof concrete, concrete for environmental treatment works',
                            text26: 'Industrial concrete floors',
                            text27: 'Precast concrete (reinforced concrete, prestressed concrete, unreinforced concrete, concrete brick)',
                            text28: 'High strength concrete, enhanced properties',
                            text29: 'Heat resistant concrete',
                            text30: 'Marine environmental concrete',
                            text31: 'Massive concrete block',
                            text32: 'Lightweight concrete',
                            text33: 'Sulfate environmental structural concrete',
                            text34: 'Rolled concrete',
                            text35: '25-50 for roads 50-80 for RCC dam',
                            text36: 'Mortars, Mortar pouring',
                            text37: 'Concrete required to prevent alkali reaction of aggregates',
                            text38: 'Concrete pavement and road bridges',
                            text39: 'Soil reinforcement',


                        },

                        //----------------------------- Page Policy -----------------------------------
                        policy: {
                            //Chính sách
                            text1: 'Quality policy',
                            text2: 'To follow the quality policy and achieve the target requirement, we are committed to:',
                            text3: '1. Improve production processes and equipment, provide personnel training, and stabilize product quality.',
                            text4: '2. Improve service attitude, meet supply and demand, and satisfy customer satisfaction.',
                            text5: "3. Use resources efficiently to enhance product value and increase the company's competitiveness.",
                        },

                        //----------------------------- Page Environment ------------------------------
                        environment: {},

                        //----------------------------- Page Contact ----------------------------------
                        contact: {
                            //Liên hệ
                            text1: 'Contact us',
                            text2: 'CHC Vietnam Resources Co., Ltd - Ha Tinh',
                            text3: 'CHC Vietnam Resources Co., Ltd - Ba Ria Vung Tau',
                            text4: 'Phone number: +84(0) 2543952168',
                            text5: 'Email address: chcvservice@chcv.com.vn',
                            text6: 'Email us',
                            text7: 'Full name',
                            text8: 'Company name',
                            text9: 'Phone number',
                            text10: 'Email address',
                            text11: 'Email subject',
                            text12: 'Content',
                            text13: 'I agree with the above information.',
                            text14: 'Send',
                            text15: 'Survey of customer satisfaction about finely milled blast furnace granules',
                            text16: 'In order to be able to provide you with better services and products, we have conducted a customer satisfaction survey in the past time, so that we can understand the needs and desires of our customers. services of the company, thereby improving service quality.',
                            text17: 'Forward',
                            text18: 'Stakeholder Questionnaire',
                            text19: 'In order to understand the needs and expectations of the stakeholders, our company has created a survey to identify and evaluate the importance of the concerns.',
                            text20: 'You are?',
                            text21: 'Please choose one of the following options',
                            text22: 'Customer',
                            text23: 'Partner',
                            text24: 'Shareholder',
                            text25: 'Enter your text here.',

                        },

                        //----------------------------- Page Service ----------------------------------
                        service: {
                            // Đăng ký vận chuyển
                            register_text1: 'Date',
                            register_text2: 'Truck',
                            register_text3: 'Item no',
                            register_text4: 'Customer',
                            register_text5: 'Date',
                            register_text6: 'to',
                            register_text7: 'Show deleted orders',
                            register_text8: 'Total quantity:',
                            register_text9: 'Shipping Registration Query Table',
                            register_text10: 'Select Row Per Pages',
                            register_text11: 'Customer',
                            register_text12: 'Enter time',
                            register_text13: 'Exit time',
                            register_text14: 'Slip Number',
                            register_text15: 'Action',
                            register_text16: 'Total order:',
                            register_text17: 'Enter',
                            register_text18: 'Support Information',
                            register_text19: 'Total order:',
                            register_text20: 'Id',
                            register_text21: "'Can't cancel orders of previous days!",
                            register_text22: 'It is not possible to cancel an order that already has a car coming in or out',
                            register_text23: 'It is not possible to cancel an order with a slip number',
                            register_text24: 'Vehicle number is blank or incorrect!',
                            register_text25: 'This application already exists, do you want to continue?',
                            register_text26: 'Action canceled.',
                            register_text27_1: 'Do you want to cancel order number?',
                            register_text27_2: 'of the day',
                            register_text27_3: 'Are not',
                            register_text28: 'Canceled successfully!',
                            register_text29: 'Faild',
                            register_text30: 'Stop the task.',
                            register_tittle1: 'Procedure error',
                            register_tittle2: 'Enter error',
                            register_tittle3: 'Duplicate data?',
                            register_tittle4: 'Executing...',
                            register_tittle5: 'Are you sure?',

                            // Theo dõi vận chuyển
                            shipping_text1: 'Date',
                            shipping_text2: 'to',
                            shipping_text3: 'Customer',
                            shipping_text4: 'Total trucks:',
                            shipping_text5: 'Total quantity:',
                            shipping_text6: 'Shipping Information Query List',
                            shipping_text7: 'Select Row Per Pages',
                            shipping_text8: 'Slip date',
                            shipping_text9: 'Truck Number',
                            shipping_text10: 'Shipping Quantity (MT)',
                            shipping_text11: 'Customer name',
                            shipping_text12: 'Slip Number',
                            shipping_text13: 'Order Number',
                            shipping_text14: 'Time in',
                            shipping_text15: 'Time out',
                            shipping_text16: 'Seal Number',

                            // Theo dõi thông tin đơn hàng
                            order_text1: 'Date',
                            order_text2: 'to',
                            order_text3: 'Customer',
                            order_text4: 'Total order:',
                            order_text5: 'Total order quantity:',
                            order_text6: 'Order Information Query List',
                            order_text7: 'Select Row Per Pages',
                            order_text8: 'Customer',
                            order_text9: 'Order Number',
                            order_text10: 'Order Quantity (MT)',
                            order_text11: 'Rest Quantity (MT)',
                            order_text12: 'From Date',
                            order_text13: 'End Date',
                            order_text14: 'Total rest quantity:',

                            // Tài khoản
                            accoout_text1: 'Change Password',
                            accoout_text2: 'Old password',
                            accoout_text3: 'New password',
                            accoout_text4: 'Comfirm password',
                            accoout_text5: 'Update',
                            accoout_text6: '*Note: Password must be 7-32 characters long, have uppercase and lowercase letters, and have at least 1 special character.',
                            accoout_text7: 'New password does not match',
                            accoout_text8: 'Password is blank or less than 7 characters',
                            accoout_text9: 'Password has no uppercase!',
                            accoout_text10: 'Password has no numeric characters!',
                            accoout_text11: 'Password has no special characters!',
                            accoout_text12: 'The old password does not match or an error occurred!',
                            accoout_text13: 'Change password successfully',


                            // Báo cáo sản lượng
                            quantity_text1: 'Date',
                            quantity_text2: 'to',
                            quantity_text3: 'Factory',
                            quantity_text4: 'Warehouse',
                            quantity_text5: 'Item_no',
                            quantity_text6: 'Production information query list',
                            quantity_text7: 'Item Name',
                            quantity_text8: 'Last Balance (MT)',
                            quantity_text9: 'Quantity in (MT)',
                            quantity_text10: 'Quantity out (MT)',
                            quantity_text11: 'Now Balance (MT)',
                            // Báo cáo sản lượng
                             report_text1: 'Date time: ',
                             report_text2: 'Print',





                        },

                        //----------------------------- Footer ----------------------------------------
                        footer: {
                            footer1: 'Location CHC Resources Co., Ltd Branch in Ba Ria Vung Tau',
                            footer2: 'Address in Ba Ria Vung Tau:',
                            footer3: 'My Xuan A2 Industrial Park, My Xuan Ward, Phu My Town, Ba Ria - Vung Tau Province, Vietnam',
                            footer4: 'Address in Ha Tinh:',
                            footer5: 'Complex house, FORMOSA administrative area, Vung Ang economic zone, Ky Long ward, Ky Anh town, Ha Tinh province, Vietnam'
                        }
                    }
                },

                // -------------------------------------------------------------------- Taiwan --------------------------------------------------------------------------------------------------
                tw: {
                    translation: {
                        head: {
                            title: 'CHC越南資源有限責任公司',
                            description: 'CHC越南資源有限責任公司.'
                        },

                        //----------------------------- Menu Navigation ------------------------------
                        menu: {
                            information: '公司簡介',
                            information_sub1: '一般信息',
                            information_sub2: '交貨能力',
                            information_sub3: '生產能力',
                            information_sub4: '品質管理',
                            information_sub5: '公司介紹視頻',
                            information_sub6: '結論',
                            intro: 'GBFS & GGBFS簡介',
                            product: '我們的產品',
                            policy: '品質方針',
                            environment: '環境管理',
                            environment_sub1: '環保許可證',
                            environment_sub2: '監控',
                            contact: '聯繫我們',
                            contact_sub1: '聯繫方式',
                            contact_sub2: '發送電子郵件',
                            contact_sub3: '發送調查',
                            service: 'E - 服務',
                            service_sub1: 'ES0000 - 客戶名稱',
                            service_sub2: 'ES1000 - 用戶 ',
                            service_sub1_1: 'ES0001 - 發貨掛號',
                            service_sub1_2: 'ES0002 - 出貨資訊',
                            service_sub1_3: 'ES0003 - 訂單資訊',
                            service_sub1_4: 'ES0004 - 更改密碼',
                            service_sub2_1: 'ES1001 - 庫存查詢',
                            service_sub3: '使用手冊',
                        },

                        slider: {
                            text1: '持續提升品質，提升客戶滿意度，積極利用資源價值.',
                            text2: 'CHC 越南',
                        },

                        //----------------------------- Page Login ------------------------------------
                        login: {
                            // Login
                            text1: '登錄',
                            text2: '用戶名',
                            text3: "用戶名不能為空",
                            text4: '密碼',
                            text5: "密碼不能為空",
                            text6: '成功：您登錄成功！',
                            text7: '警告：用戶名或密碼無效！',
                            text8: '驗證碼',
                            text9: "驗證碼不能為空",
                            text10: '輸入驗證碼',
                            text11: '*注意：驗證碼不區分大小寫',
                            text12: '服務信箱',
                            text13: '用戶名不正確',
                            text14: '密碼不正確',
                            text15: '驗證碼不正確',
                            text16: '您輸入了錯誤的密碼',
                            text17: '次',
                            text18: '您的帳戶已被鎖定至',
                            text19: '登入',
                            text20: '登出 ',

                        },

                        //----------------------------- Page Information ------------------------------
                        information: {
                            // Thông tin CHCV
                            text1: '介紹',
                            text2: 'CHC Vietnam Resources Co., Ltd - Ba Ria-Vung Tau Branch (as CHCV-BRVT) 於 2019 年 4 月 12 日在 BRVT 省 Phu My My Xuan Ward My Xuan A2 工業園成立. 我們由CHC Vietnam Resources Co., Ltd (CHCV)投資成立於2016年3月17日，地址位於河靜省Ky Anh區Ky Anh鎮Ky Long區Formosa行政綜合樓.',
                            text3: '巴地頭頓辦事處',
                            text4: '我們已經建立並安排了方便快捷的交貨佈局，並由熟練的技術人員精心指導. 總容量超過32,000 公噸的4 個筒倉，4 個車道，GGBFS 每天24 小時，每年365 天，隨時準備好交付.',
                            text5: 'GGBFS庫',
                            text6: '我們的工廠可以向市場提供高達 100 萬噸/年的 GGBFS 產量，4 個筒倉，4 車道容量 32,000 噸，原材料倉庫隨時準備存儲高達 60,000 噸的 GBFS. \n\n 我們擁有現代化生產線的研磨機由專業和熟練的工程師建造、運營、管理、控制和維護，他們負責保持所有生產活動的順利和連續，並使用合格的 GGBFS 作為 TCVN.         09 憑藉在台灣製造和供應 GGBFS 超過 30 年的經驗，我們相信我們可以滿足任何客戶的要求. 越南市場需求.',
                            text7: '破碎機',
                            text8: '此外，產品品質是我們的首要任務. 我們的品質控制部門始終在每個生產階段進行各種品質測試，以保證每一次交付給每個用戶的穩定和一致的品質. 在使用 GGBFS 時，我們的技術團隊隨時可以為客戶提供建議、研究並提供最佳解決方案.',
                            text9: '化學室',
                            text10: '化學研究',
                            text11: '檢測室',
                            text12: '研究標本檢查',
                            text13: '控制室',
                            text14: '觀察研究和生產過程',
                            text15: 'CHC 越南',
                            text16: '憑藉對CHCV-BRVT磨粉機的熱情理念、經驗和投資，我們致力於成為越南市場GGBFS業務中穩定供應、一致品質和良好服務的可靠合作夥伴. \n \n未來，CHC將堅持4R原則，即減量化、再循環、回收、再利用，擴大銷售網絡. 持續提升資源價值，打造差異化優勢，以追求可持續發展和保護生態環境為長遠目標. 工程行業最新最環保的建材.',
                            text17: '公司門戶',
                            text18: '控制室',

                        },

                        //----------------------------- Page Introduction -----------------------------
                        intro: {
                            // Giới thiệu GGBFS
                            text1: 'GBFS 和 GGBFS 產品',
                            text2: "粒化高爐礦渣 (GBFS) 是鋼鐵廠煉鋼過程中經輸送至我公司的水冷卻後的副產品. GBFS經過加熱和添加劑處理後，將被送入立磨進行粉磨分離，形成成品GGBFS（磨細高爐礦渣），送入料倉儲存.",
                            text3: '特徵',
                            text4: '低碳量',
                            text5: '加工性',
                            text6: '低水化熱',
                            text7: '減少收縮',
                            text8: '抗彎強度',
                            text9: '避免氯離子滲透',
                            text10: '抗硫酸鹽侵蝕',
                            text11: '防止鹼骨料反應',
                            text12: '部分應用作品',


                        },

                        //----------------------------- Page Product ----------------------------------
                        product: {
                            // Sản phẩm
                            text1: '7 天 ≧ 55%',
                            text2: '28 天 ≧ 95%',
                            text3: '91 天 ≧ 95%',
                            text4: '7 天 ≧ 75%',
                            text5: '產品規格',
                            text6: "CHCV的產品符合TCVN 11586標準. CHCV 為所有用戶提供優質的 S75 和 S95. CHCV的S75的活性指標可以達到S95的要求，提供優良的可加工性.",
                            text7: '產品規格表',
                            text8: '項目',
                            text9: '活動指數',
                            text10: '加熱損失',
                            text11: '氯離子含量',
                            text12: '濕度',
                            text13: '機動性',
                            text14: '順利',
                            text15: '篩分後剩餘',
                            text16: '特定的重量',
                            text17: '測試報告',
                            text18: '合格證書 QCVN 16',
                            text19: '符合 TCVN 11586 的證書',
                            text20: '應用',
                            text21: '細磨高爐礦渣使用說明.',
                            text22: '產品應用率表',
                            text23: 'GGBFS率%',
                            text24: '預拌混凝土',
                            text25: '防水混凝土、環保處理工程用混凝土',
                            text26: '工業混凝土地坪',
                            text27: '預製混凝土（鋼筋混凝土,預應力混凝土,無鋼筋混凝土,混凝土磚）',
                            text28: '高強度混凝土，性能增強',
                            text29: '耐熱混凝土',
                            text30: '海洋環保混凝土',
                            text31: '大塊混凝土砌塊',
                            text32: '輕質混凝土',
                            text33: '硫酸鹽環保結構混凝土',
                            text34: '軋製混凝土',
                            text35: '道路 25-50 碾壓混凝土壩 50-80',
                            text36: '砂漿、砂漿澆注',
                            text37: '防止骨料發生鹼反應所需的混凝土',
                            text38: '混凝土路面和公路橋樑',
                            text39: '土壤加固',

                        },

                        //----------------------------- Page Policy -----------------------------------
                        policy: {
                            //Chính sách
                            text1: '品質方針',
                            text2: '為實現我們的品質政策和目標要求，我們承諾：',
                            text3: '1. 改進工藝裝備，加強人員培訓，穩定產品品質.',
                            text4: '2. 落實服務態度，滿足供需，提高客戶滿意度.',
                            text5: '3. 有效利用資源，創造產品價值，提高公司競爭力.',

                        },

                        //----------------------------- Page Environment ------------------------------
                        environment: {},

                        //----------------------------- Page Contact ----------------------------------
                        contact: {
                            //Liên hệ
                            text1: '聯繫我們',
                            text2: 'CHC Vietnam Resources Co., Ltd - 河靜',
                            text3: 'CHC Vietnam Resources Co., Ltd - 巴地頭頓',
                            text4: '電話號碼：+84(0) 2543952168',
                            text5: '電子郵件地址chcvservice@chcv.com.vn',
                            text6: '給我們發電子郵件',
                            text7: '名字和姓氏',
                            text8: '公司名稱',
                            text9: '電話號碼',
                            text10: '電子郵件地址',
                            text11: '電子郵件主題',
                            text12: '內容',
                            text13: '我同意上述信息.',
                            text14: '發送',
                            text15: '高爐細磨顆粒客戶滿意度調查.',
                            text16: '為了能夠為您提供更好的服務和產品，我們在過去的時間裡進行了客戶滿意度調查，以便我們了解客戶的需求和願望. 公司的服務，從而提高服務品質.',
                            text17: '向前',
                            text18: '利益相關者問卷',
                            text19: '為了了解利益相關者的需求和期望，我們公司創建了一項調查來識別和評估問題的重要性.',
                            text20: '我是?',
                            text21: '請選擇以下選項之一',
                            text22: '客戶名稱',
                            text23: '夥伴',
                            text24: '股東',
                            text25: '在此處輸入您的內容.',

                        },

                        //----------------------------- Page Service ----------------------------------
                        service: {
                            // Đăng ký vận chuyển
                            register_text1: '日期',
                            register_text2: '卡車',
                            register_text3: '品號',
                            register_text4: '客戶名稱',
                            register_text5: '日期',
                            register_text6: '日期',
                            register_text7: '顯示已刪除的訂單',
                            register_text8: '總量：',
                            register_text9: '出貨掛號查詢表',
                            register_text10: '選擇每頁行',
                            register_text11: '客戶名稱',
                            register_text12: '入廠時間',
                            register_text13: '出廠時間',
                            register_text14: '出貨單號',
                            register_text15: '刪除碼',
                            register_text16: '總訂單:',
                            register_text17: '輸入',
                            register_text18: '支持信息',
                            register_text19: '總訂單：',
                            register_text20: 'Id',
                            register_text21: '',
                            register_text21: "'无法取消之前日期的订单！",
                            register_text22: '无法取消已经有车辆进出的订单.',
                            register_text23: '無法使用單號取消訂單',
                            register_text24: '車牌號碼為空或不正確！',
                            register_text25: '此應用程序已存在,要繼續嗎？',
                            register_text26: '操作已取消.',
                            register_text27_1: '您要取消訂單號嗎？',
                            register_text27_2: '當天',
                            register_text27_3: '不是',
                            register_text28: '取消成功！',
                            register_text29: '失敗的',
                            register_text30: '停止任務.',
                            register_tittle1: '程序錯誤',
                            register_tittle2: '輸入錯誤',
                            register_tittle3: '重複數據?',
                            register_tittle4: '執行中...',
                            register_tittle5: '你確定嗎?',

                            // Theo dõi vận chuyển
                            shipping_text1: '日期',
                            shipping_text2: '到',
                            shipping_text3: '客戶名稱',
                            shipping_text4: '車輛總數：',
                            shipping_text5: '總量:',
                            shipping_text6: '出貨資訊查詢一覽表',
                            shipping_text7: '選擇每頁行',
                            shipping_text8: '出貨日期',
                            shipping_text9: '卡車',
                            shipping_text10: '發貨數量 (MT)',
                            shipping_text11: '客戶簡稱',
                            shipping_text12: '出貨單號',
                            shipping_text13: '單號',
                            shipping_text14: '入廠時間',
                            shipping_text15: '出廠時間',
                            shipping_text16: '封條號碼',
                            // Theo dõi thông tin đơn hàng
                            order_text1: '日期',
                            order_text2: '到',
                            order_text3: '客戶名稱',
                            order_text4: '總訂單:',
                            order_text5: '總訂貨量:',
                            order_text6: '訂單資訊查詢一覽表',
                            order_text7: '選擇每頁行',
                            order_text8: '客戶名稱',
                            order_text9: '訂單號',
                            order_text10: '訂單數量 (MT)',
                            order_text11: '剩餘數量 (MT)',
                            order_text12: '啟始日期',
                            order_text13: '結束日期',
                            order_text14: '剩餘總數量:',
                            // Tài khoản
                            accoout_text1: '更改密碼',
                            accoout_text2: '舊密碼',
                            accoout_text3: '新密碼',
                            accoout_text4: '確認密碼',
                            accoout_text5: '更新',
                            accoout_text6: '*注意：密碼長度必須為7-32個字符，有大小寫字母，至少有1個特殊字符',
                            accoout_text7: '新密碼不匹配',
                            accoout_text8: '密碼為空或少於 7 個字符',
                            accoout_text9: '密碼沒有大寫！',
                            accoout_text10: '密碼沒有數字字符！',
                            accoout_text11: '密碼沒有特殊字符！',
                            accoout_text12: '舊密碼不匹配或發生錯誤！',
                            accoout_text13: '修改密碼成功',
                            // Báo cáo sản lượng
                            quantity_text1: '日期',
                            quantity_text2: '到',
                            quantity_text3: '工廠',
                            quantity_text4: '倉號',
                            quantity_text5: '品號',
                            quantity_text6: '庫存訊查詢一覽表',
                            quantity_text7: '品名',
                            quantity_text8: '期初庫存 (MT)',
                            quantity_text9: '入庫量 (MT)',
                            quantity_text10: '出貨量 (MT)',
                            quantity_text11: '期末庫存 (MT)',
                            // Báo cáo sản lượng
                            report_text1: '日期时间: ',
                            report_text2: '列印',


                        },

                        //----------------------------- Footer ----------------------------------------
                        footer: {
                            footer1: '地點 CHC Resources Co., Ltd 巴地頭頓分公司',
                            footer2: '巴地頭頓地址',
                            footer3: 'My Xuan A2 Industrial Park, My Xuan Ward, Phu My Town, Ba Ria - Vung Tau Province, 越南',
                            footer4: '河靜地址：',
                            footer5: '越南河靜省 Ky Anh 鎮 Ky Long 區 Vung Ang 經濟區 FORMOSA 行政區綜合樓'
                        }
                    }
                }
            }
        }, (err, t) => {
            if (err) return console.error(err);

            // for options see
            // https://github.com/i18next/jquery-i18next#initialize-the-plugin
            jqueryI18next.init(i18next, $, {
                useOptionsAttr: true
            });

            // fill language switcher

            Object.keys(lngs).map((lng) => {
                const opt = new Option(lngs[lng].nativeName, lng);
                if (lng === i18next.resolvedLanguage) {
                    opt.setAttribute("selected", "selected");
                }
                $('#languageSwitcher').append(opt);

            });


            $('#languageSwitcher').change((a, b, c) => {
                const chosenLng = $(this).find("option:selected").attr('value');

                if (chosenLng == "en") {
                    $('#flagicon').attr('class', 'flag-icon flag-icon-usa');
                } else if (chosenLng == "vn") {
                    $('#flagicon').attr('class', 'flag-icon flag-icon-vnm');
                } else {
                    $('#flagicon').attr('class', 'flag-icon flag-icon-twn');
                }

                i18next.changeLanguage(chosenLng, () => {
                    rerender();
                });
            });

            rerender();
        });
});
    
 }, 1000);
