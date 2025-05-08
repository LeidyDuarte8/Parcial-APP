const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nombre, correo, contraseña, rol } = req.body;
    const userExist = await User.findOne({ correo });
    if (userExist) return res.status(400).json({ msg: 'Usuario ya existe' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contraseña, salt);

    const newUser = new User({ nombre, correo, contraseña: hashedPassword, rol });
    await newUser.save();

    res.status(201).json({ msg: 'Usuario creado' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const user = await User.findOne({ correo });
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!isMatch) return res.status(400).json({ msg: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user._id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
