import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';  // Mô hình User đã được định nghĩa trong MongoDB
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    // Kiểm tra thông tin đã được gửi hay chưa
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
    }

    // Kết nối đến MongoDB
    await dbConnect();

    // Kiểm tra xem email đã tồn tại chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email đã tồn tại.' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 12);

    // Tạo người dùng mới
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    try {
      // Lưu người dùng vào MongoDB
      await user.save();

      // Tạo JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      // Gửi token cho người dùng
      res.status(201).json({ message: 'Đăng ký thành công', token });
    } catch (error) {
      res.status(500).json({ message: 'Đã có lỗi xảy ra. Vui lòng thử lại.' });
    }
  } else {
    res.status(405).json({ message: 'Phương thức không hợp lệ.' });
  }
}
