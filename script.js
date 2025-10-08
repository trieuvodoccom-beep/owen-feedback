document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const ratingSection = document.getElementById('rating-section');
    const happySection = document.getElementById('happy-feedback-section');
    const unhappySection = document.getElementById('unhappy-feedback-section');
    const feedbackForm = document.getElementById('feedback-form');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = this.dataset.value;
            ratingSection.classList.add('hidden');
            if (rating >= 4) {
                happySection.classList.remove('hidden');
            } else {
                unhappySection.classList.remove('hidden');
            }
        });
    });

    // Xử lý việc gửi form đến Google Form (ĐÃ CẬP NHẬT)
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Ngăn hành vi mặc định của form

        const formData = new FormData(feedbackForm);
        const formAction = "https://docs.google.com/forms/d/e/1FAIpQLSfLraU_WrValaCQR2BVCcA54r5YbnaUs0hGN56NNDdoj70COA/formResponse";

        // Gửi dữ liệu trong nền
        fetch(formAction, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Quan trọng: để tránh lỗi CORS với Google Form
        }).then(() => {
            // Hiển thị thông báo cảm ơn
            unhappySection.innerHTML = '<h2>Cảm ơn bạn!</h2><p>Phản hồi của bạn đã được ghi nhận. Chúng tôi sẽ xem xét cẩn thận để cải thiện dịch vụ.</p>';
        }).catch(error => {
            console.error('Error:', error);
            alert('Đã có lỗi xảy ra, vui lòng thử lại.');
        });
    });
});
