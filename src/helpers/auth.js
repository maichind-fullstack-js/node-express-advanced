import 'dotenv/config';
import jsonWebToken from 'jsonwebtoken';

export function generateToken(payload) {
	const token = jsonWebToken.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
	return token;
}

export function verifyToken(req, res, next) {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({ message: "No token provided" });
	}
	const token = authHeader.split(' ')[1];
	jsonWebToken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: "Invalid token" });
		}
		req.user = decoded;
		next();
	});
}
