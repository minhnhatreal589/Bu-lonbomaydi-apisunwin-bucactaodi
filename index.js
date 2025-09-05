// file: index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Ước Bị Bú Api haizzzz tội mấy bé nghèo đéo có tiền mua api xài quá haizzzz 😂😂😅🤣😆🤣😊🥲☺️🤗😗🤗😗🥰🙃🥲🙃🤗😗🤑🤪😚🤪😊🤔😙🥲🙃🥰😜😙🤔🤑🤔😙🤭🤔🤨🤔🤐🤔🤐🥰🤪!');
});

// === ENDPOINT 1: API DỰ ĐOÁN (CÁI CŨ) ===
app.get('/hitclubmd5', async (req, res) => {
    try {
        const TARGET_API_URL = 'https://api-hitclub-aipro-vannhat.onrender.com/api/taixiumd5';
        const apiResponse = await axios.get(TARGET_API_URL);
        res.json(apiResponse.data);
    } catch (error) {
        console.error('Lỗi API dự đoán:', error.message);
        res.status(500).json({ message: 'Lỗi kết nối API dự đoán' });
    }
});

// === ENDPOINT 2: API LẤY THÔNG TIN NGƯỜI DÙNG (CÁI MỚI) ===
app.get('/hitclub', async (req, res) => {
    try {
        // Thay bằng URL API thực tế của bạn
        const TARGET_API_URL = 'https://api-hitclub-aipro-vannhat.onrender.com/api/taixiu'; 
        const apiResponse = await axios.get(TARGET_API_URL);
        res.json(apiResponse.data);
    } catch (error) {
        console.error('Lỗi API người dùng:', error.message);
        res.status(500).json({ message: 'Lỗi kết nối API người dùng' });
    }
});

// === ENDPOINT 3: API LẤY TIN TỨC GAME (CÁI MỚI) ===
app.get('/lc79md5', async (req, res) => {
    try {
        // Thay bằng URL API thực tế của bạn
        const TARGET_API_URL = 'https://api-lc79-md5-win.onrender.com/api/taixiu/predict';
        const apiResponse = await axios.get(TARGET_API_URL);
        res.json(apiResponse.data);
    } catch (error) {
        console.error('Lỗi API tin tức:', error.message);
        res.status(500).json({ message: 'Lỗi kết nối API tin tức' });
    }
});
// === ENDPOINT 3: API LẤY TIN TỨC GAME (CÁI MỚI) ===
app.get('/sunwin', async (req, res) => {
    try {
        // Thay bằng URL API thực tế của bạn
        const TARGET_API_URL = 'https://api-sunwin-prolayer.onrender.com/predict_vip';
        const apiResponse = await axios.get(TARGET_API_URL);
        res.json(apiResponse.data);
    } catch (error) {
        console.error('Lỗi API tin tức:', error.message);
        res.status(500).json({ message: 'Lỗi kết nối API tin tức' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
