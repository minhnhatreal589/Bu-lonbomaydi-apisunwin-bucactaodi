// file: index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
// Render sẽ tự động cung cấp một biến môi trường PORT.
// Nếu chạy local, nó sẽ dùng cổng 3000.
const PORT = process.env.PORT || 3000;

// Sử dụng middleware cors để cho phép yêu cầu từ mọi nguồn gốc
app.use(cors());

// Route chính để kiểm tra server có hoạt động không
app.get('/', (req, res) => {
    res.send('Có cái đàu cu bố may nè bú không con 🤣😂.');
});

// Endpoint để frontend gọi vào, lấy dữ liệu dự đoán
app.get('/bomaylavuakaka', async (req, res) => {
    try {
        console.log('Received request, forwarding to the target API...');
        
        const TARGET_API_URL = 'https://api-sunwin-prolayer.onrender.com/predict_vip';

        const apiResponse = await axios.get(TARGET_API_URL);

        console.log('Successfully fetched data, sending back to client.');
        // Gửi dữ liệu nhận được từ API gốc về lại cho frontend
        res.json(apiResponse.data);

    } catch (error) {
        // Ghi lại lỗi chi tiết hơn trên server log
        console.error('Error while fetching from target API:', error.message);
        res.status(500).json({ 
            message: 'Error connecting to the prediction API.',
            error: error.message 
        });
    }
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
