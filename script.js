document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const ratingSection = document.getElementById('rating-section');
    const happySection = document.getElementById('happy-feedback-section');
    const unhappySection = document.getElementById('unhappy-feedback-section');

    stars.forEach(star => {
        star.addEventListener('mouseover', function () {
            const value = this.dataset.value;
            highlightStars(value);
        });

        star.addEventListener('mouseout', function () {
            const selectedStar = document.querySelector('.star.selected');
            if (!selectedStar) {
                resetStars();
            }
        });
        
        star.addEventListener('click', function () {
            const rating = this.dataset.value;
            
            // Đánh dấu sao đã chọn
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');

            // Ẩn phần đánh giá
            ratingSection.classList.add('hidden');

            // Hiển thị phần tương ứng
            if (rating >= 4) {
                happySection.classList.remove('hidden');
            } else {
                unhappySection.classList.remove('hidden');
            }
        });
    });

    function highlightStars(value) {
        stars.forEach(star => {
            if (star.dataset.value <= value) {
                star.style.color = '#f39c12';
            } else {
                star.style.color = '#ddd';
            }
        });
    }

    function resetStars() {
        stars.forEach(star => {
            star.style.color = '#ddd';
        });
    }

    // Xử lý việc gửi form
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn trang tải lại
        // Ở bước tiếp theo, chúng ta sẽ kết nối form này với Google Form
        alert('Cảm ơn bạn đã gửi phản hồi!');
        feedbackForm.reset();
        unhappySection.innerHTML = '<h2>Cảm ơn bạn!</h2><p>Phản hồi của bạn đã được ghi nhận. Chúng tôi sẽ xem xét cẩn thận để cải thiện dịch vụ.</p>';
    });
});