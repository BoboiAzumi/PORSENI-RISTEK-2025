import jwt from 'jsonwebtoken';

export class JWT {
	static sign(id) {
		const token = jwt.sign({ id }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '24h' });

		return token;
	}

	/**
	 *
	 * @param {string} token
	 */
	static verify(token) {
		const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');

		return decoded;
	}
}