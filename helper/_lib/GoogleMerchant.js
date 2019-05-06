import { EncryptionUtility } from "../index";
import axios from "axios";
import querystring from 'querystring';
import { access } from "fs";

export class GoogleMerchant {

	static async fetchProduct(productId, merchantId, accessToken) {
		try {
			const response = await axios.get(`https://www.googleapis.com/content/v2/${merchantId}/products/${productId}?access_token=${accessToken}`);
			return response.data;
		} catch(e) {
			e = e.response && e.response.data ? e.response.data : e;
			console.log("FETCH PRODUCT", e);
			return null;
		}
	}

	static async generateAccessToken(info) {
		const now = new Date()/1000;
		const exp = now + 3600;
		const payload = {
			iss: info.client_email,
			scope: "https://www.googleapis.com/auth/content",
			aud: "https://www.googleapis.com/oauth2/v4/token",
			iat: now,
			exp
		};

		const requestToken = EncryptionUtility.generateToken(payload, info.private_key, { algorithm: "RS256" });

		console.log(requestToken);

		let response;
		try {
			response = await axios.post(
				'https://www.googleapis.com/oauth2/v4/token',
				querystring.stringify({ "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer", "assertion": requestToken }),
				{ headers: { "Content-Type": "application/x-www-form-urlencoded" }});
		} catch(e) {
			e = e.response && e.response.data ? e.response.data : e;
			console.log("GENERATE ACCESS TOKEN", e);
			return null;
		}

		console.log("generate access token", response.data.access_token);

		if(response && response.data)
			return response.data.access_token;


	}

	static async fetchAllProducts(merchantId, accessToken) {
		try {
			const response = await axios.get(`https://www.googleapis.com/content/v2/${merchantId}/products?access_token=${accessToken}`);
			return response.data.resources;
		} catch(e) {
			e = e.response && e.response.data ? e.response.data : e;
			console.log("FETCH ALL PRODUCTS", e);
			return null;
		}
	}
}