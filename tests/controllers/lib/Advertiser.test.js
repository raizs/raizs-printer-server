import sinon from "sinon";

import statusCode from "../../../server/status_code";
import Advertiser from "../../../controllers/lib/Advertiser";
import { BaseRepository } from "../../../db/index";
import advertiserSample from "../../assets/controllers/lib/Advertiser";
import publisherSample from "../../assets/controllers/lib/Publisher";
import S3DataSource from "../../../db/S3DataSource";
import { GoogleMerchant } from "../../../helper";


const {
	DUPLICATED_EMAIL,
	WRONG_PASSWORD,
	MONGO_ACCESS_ERROR,
	OK,
	USER_NOT_FOUND,
	MONGO_UPDATE_ERROR,
	S3_ACCESS_ERROR,
	JSON_PARSE_ERROR,
	GMERCHANT_FETCH_ERROR,
	GMERCHANT_TOKEN_ERROR,
	INVALID_SCHEMA
} = statusCode;

const { MONGO_SAMPLE_ADVERTISER } = advertiserSample;
const { MONGO_SAMPLE_PUBLISHER } = publisherSample;

const TEST_NAME = "ADVERTISER";

const advertiserRepo = new BaseRepository();
const publisherRepo = new BaseRepository();
const S3Source = new S3DataSource();

const advertiser = new Advertiser(advertiserRepo, "www.google.com", publisherRepo, "senha", S3Source);

let sandbox, mongoUpdateAdvertiserStub, mongoGetAdvertiserStub, mongoGetPublisherStub, mongoCreateAdvertiserStub, mongoGetAllAdvertisersStub;
let S3Stub, GMgenerateToken, GMfetchAllProducts;
beforeEach(() => {
	sandbox = sinon.sandbox.create();
	mongoUpdateAdvertiserStub = sandbox.stub(advertiserRepo, 'findAndUpdate');
	mongoGetAdvertiserStub = sandbox.stub(advertiserRepo, 'getOne');
	mongoGetAllAdvertisersStub = sandbox.stub(advertiserRepo, 'getAll');
	mongoGetPublisherStub = sandbox.stub(publisherRepo, 'getOne');
	mongoCreateAdvertiserStub = sandbox.stub(advertiserRepo, 'create');
	S3Stub = sandbox.stub(S3Source, 'getObject');
	GMgenerateToken = sandbox.stub(GoogleMerchant, 'generateAccessToken');
	GMfetchAllProducts = sandbox.stub(GoogleMerchant, 'fetchAllProducts');
});

afterEach(() => {
	sandbox.restore();
});



//GET ALL ADVERTISERS

test(`${TEST_NAME} - GET ALL ADVERTISERS SUCCESS`, async () => {
	mongoGetAllAdvertisersStub.returns({ result: [MONGO_SAMPLE_ADVERTISER] });
	const response = await advertiser.getAll();
	expect(response).toMatchObject({
		success: true,
		status: OK,
		data: [MONGO_SAMPLE_ADVERTISER] });
});

test(`${TEST_NAME} - GET ALL ADVERTISERS ERROR - MONGO_ACCESS_ERROR`, async () => {
	mongoGetAllAdvertisersStub.returns({ error:true });
	const response = await advertiser.getAll();
	expect(response).toMatchObject({
		success: false,
		status: MONGO_ACCESS_ERROR,
		data: undefined });
});


//UPDATE ADVERTISER

test(`${TEST_NAME} - UPDATE ADVERTISER SUCCESS`, async () => {
	mongoUpdateAdvertiserStub.returns({ result: MONGO_SAMPLE_ADVERTISER });
	const response = await advertiser.updateAdvertiser({id:"5ab16466f43dac7509b6468a", name:"Outro nome"});
	expect(response).toMatchObject({
		success: true,
		status: OK,
		data: expect.stringMatching(/.*/) });
});

test(`${TEST_NAME} - UPDATE ADVERTISER ERROR - INVALID_SCHEMA`, async () => {
	const response = await advertiser.updateAdvertiser({});
	expect(response).toMatchObject({
		success: false,
		status: {
			code:INVALID_SCHEMA.code,
			msg: expect.stringMatching(/.*/)
		},
		data: undefined });
});

test(`${TEST_NAME} - UPDATE ADVERTISER ERROR - MONGO_ACCESS_ERROR`, async () => {
	mongoUpdateAdvertiserStub.returns({ error: true });
	const response = await advertiser.updateAdvertiser({id:"5ab16466f43dac7509b6468a", name:"Outro nome"});
	expect(response).toMatchObject({
		success: false,
		status: MONGO_ACCESS_ERROR,
		data: undefined });
});

test(`${TEST_NAME} - UPDATE ADVERTISER ERROR - MONGO_ACCESS_ERROR`, async () => {
	mongoUpdateAdvertiserStub.returns({ error: true });
	const response = await advertiser.updateAdvertiser({id:"5ab16466f43dac7509b6468a", name:"Outro nome"});
	expect(response).toMatchObject({
		success: false,
		status: MONGO_ACCESS_ERROR,
		data: undefined });
});

test(`${TEST_NAME} - UPDATE ADVERTISER ERROR - USER_NOT_FOUND`, async () => {
	mongoUpdateAdvertiserStub.returns({ result:null });
	const response = await advertiser.updateAdvertiser({id:"5ab16466f43dac7509b6468a", name:"Outro nome"});
	expect(response).toMatchObject({
		success: false,
		status: USER_NOT_FOUND,
		data: undefined });
});


//UPDATE ADVERTISER PASSWORD

test(`${TEST_NAME} - UPDATE ADVERTISER PASSWORD SUCCESS`, async () => {
	mongoGetAdvertiserStub.returns({ result:MONGO_SAMPLE_ADVERTISER });
	mongoUpdateAdvertiserStub.returns({result:MONGO_SAMPLE_ADVERTISER});
	const response = await advertiser.updateAdvertiserPassword({id:"5ab16466f43dac7509b6468a", password:"nova_senha", old_password:"morales123"});
	expect(response).toMatchObject({
		success: true,
		status: OK,
		data: expect.stringMatching(/.*/) });
});

test(`${TEST_NAME} - UPDATE ADVERTISER PASSWORD ERROR - INVALID_SCHEMA`, async () => {
	const response = await advertiser.updateAdvertiserPassword({});
	expect(response).toMatchObject({
		success: false,
		status: {
			code:INVALID_SCHEMA.code,
			msg: expect.stringMatching(/.*/)
		},
		data: undefined });
});

test(`${TEST_NAME} - UPDATE ADVERTISER PASSWORD ERROR - MONGO_ACCESS_ERROR(GET)`, async () => {
	mongoGetAdvertiserStub.returns({ error:true });
	const response = await advertiser.updateAdvertiserPassword({id:"5ab16466f43dac7509b6468a", password:"nova_senha", old_password:"morales123"});
	expect(response).toMatchObject({
		success: false,
		status: MONGO_ACCESS_ERROR,
		data: undefined });
});

test(`${TEST_NAME} - UPDATE ADVERTISER PASSWORD ERROR - USER_NOT_FOUND(GET)`, async () => {
	mongoGetAdvertiserStub.returns({ result:null });
	const response = await advertiser.updateAdvertiserPassword({id:"5ab16466f43dac7509b6468a", password:"nova_senha", old_password:"morales123"});
	expect(response).toMatchObject({
		success: false,
		status: USER_NOT_FOUND,
		data: undefined });
});

test(`${TEST_NAME} - UPDATE ADVERTISER PASSWORD ERROR - WRONG_PASSWORD`, async () => {
	mongoGetAdvertiserStub.returns({ result:MONGO_SAMPLE_ADVERTISER });
	const response = await advertiser.updateAdvertiserPassword({id:"5ab16466f43dac7509b6468a", password:"nova_senha", old_password:"morales1234"});
	expect(response).toMatchObject({
		success: false,
		status: WRONG_PASSWORD,
		data: undefined });
});

test(`${TEST_NAME} - UPDATE ADVERTISER PASSWORD ERROR - MONGO_ACCESS_ERROR(UPDATE)`, async () => {
	mongoGetAdvertiserStub.returns({ result:MONGO_SAMPLE_ADVERTISER });
	mongoUpdateAdvertiserStub.returns({error:true});
	const response = await advertiser.updateAdvertiserPassword({id:"5ab16466f43dac7509b6468a", password:"nova_senha", old_password:"morales123"});
	expect(response).toMatchObject({
		success: false,
		status: MONGO_ACCESS_ERROR,
		data: undefined });
});

test(`${TEST_NAME} - UPDATE ADVERTISER PASSWORD ERROR - USER_NOT_FOUND(UPDATE)`, async () => {
	mongoGetAdvertiserStub.returns({ result:MONGO_SAMPLE_ADVERTISER });
	mongoUpdateAdvertiserStub.returns({result:null});
	const response = await advertiser.updateAdvertiserPassword({id:"5ab16466f43dac7509b6468a", password:"nova_senha", old_password:"morales123"});
	expect(response).toMatchObject({
		success: false,
		status: USER_NOT_FOUND,
		data: undefined });
});


//CREATE ADVERTISER
const advertiserBody = { email: 'teste@tv.com47',
	name: 'Teste',
	password: 'teste123',
	confirm_password: 'teste123',
	url: 'www.google.com',
	companyName: 'Loja',
	tradeName: 'Marca',
	cnpj: '12334455667787',
	phone: '11999983808',
	city: 'São Paulo',
	state: 'SP',
	address: 'Rua que não existe, infinito'
};

test(`${TEST_NAME} - CREATE ADVERTISER ERROR - INVALID_SCHEMA`, async () => {
	const response = await advertiser.createAdvertiser({});
	expect(response).toMatchObject({
		success: false,
		status: {
			code: INVALID_SCHEMA.code,
			msg:expect.stringMatching(/.*/)
		},
		data: undefined });
});


test(`${TEST_NAME} - CREATE ADVERTISER ERROR - DUPLICATED_EMAIL(ADVERTISER)`, async () => {
	mongoGetAdvertiserStub.returns({ result:MONGO_SAMPLE_ADVERTISER });
	const response = await advertiser.createAdvertiser(advertiserBody);
	expect(response).toMatchObject({
		success: false,
		status: DUPLICATED_EMAIL,
		data: undefined });
});

test(`${TEST_NAME} - CREATE ADVERTISER ERROR - DUPLICATED_EMAIL(PUBLISHER)`, async () => {
	mongoGetAdvertiserStub.returns({ result: null });
	mongoGetPublisherStub.returns({ result: MONGO_SAMPLE_PUBLISHER });
	const response = await advertiser.createAdvertiser(advertiserBody);
	expect(response).toMatchObject({
		success: false,
		status: DUPLICATED_EMAIL,
		data: undefined });
});

test(`${TEST_NAME} - CREATE ADVERTISER ERROR - MONGO_ACCESS_ERROR(ADVERTISER)`, async () => {
	mongoGetAdvertiserStub.returns({ error:true });
	const response = await advertiser.createAdvertiser(advertiserBody);
	expect(response).toMatchObject({
		success: false,
		status: MONGO_ACCESS_ERROR,
		data: undefined });
});

test(`${TEST_NAME} - CREATE ADVERTISER ERROR - MONGO_ACCESS_ERROR(PUBLISHER)`, async () => {
	mongoGetAdvertiserStub.returns({ result: null });
	mongoGetPublisherStub.returns({ error: true });
	const response = await advertiser.createAdvertiser(advertiserBody);
	expect(response).toMatchObject({
		success: false,
		status: MONGO_ACCESS_ERROR,
		data: undefined });
});

test(`${TEST_NAME} - CREATE ADVERTISER ERROR - MONGO_ACCESS_ERROR(CREATE)`, async () => {
	mongoGetAdvertiserStub.returns({ result: null });
	mongoGetPublisherStub.returns({ result: null });
	mongoCreateAdvertiserStub.returns({ error:true });
	const response = await advertiser.createAdvertiser(advertiserBody);
	expect(response).toMatchObject({
		success: false,
		status: MONGO_ACCESS_ERROR,
		data: undefined });
});

//inserting method to Object
const mongoObject = {
	toObject: function(){ return {}; }
};

test(`${TEST_NAME} - CREATE ADVERTISER SUCCESS`, async () => {
	mongoGetAdvertiserStub.returns({ result: null });
	mongoGetPublisherStub.returns({ result: null });
	mongoCreateAdvertiserStub.returns({ result: mongoObject });
	const response = await advertiser.createAdvertiser(advertiserBody);
	expect(response).toMatchObject({
		success: true,
		status: OK,
		data: expect.stringMatching(/.*/) });
});


//VALIDATE GOOGLE MERCHANT
const objToValidate = {
	advertiser_id:"advertiser_id",
	merchant_id: "merchant_id"
};

test(`${TEST_NAME} - VALIDATE GOOGLE MERCHANT ERROR - INVALID_SCHEMA`, async () => {
	const response = await advertiser.validateGoogleMerchant({});
	expect(response).toMatchObject({
		success: false,
		status: {
			code:INVALID_SCHEMA.code,
			msg:expect.stringMatching(/.*/)
		},
		data: undefined });
});

test(`${TEST_NAME} - VALIDATE GOOGLE MERCHANT ERROR - MONGO_UPDATE_ERROR`, async () => {
	mongoUpdateAdvertiserStub.returns({ error:true });
	const response = await advertiser.validateGoogleMerchant(objToValidate);
	expect(response).toMatchObject({
		success: false,
		status: {
			code:MONGO_UPDATE_ERROR.code,
			msg:expect.stringMatching(/.*/)
		},
		data: undefined  });
});

test(`${TEST_NAME} - VALIDATE GOOGLE MERCHANT ERROR - S3_ACCESS_ERROR`, async () => {
	mongoUpdateAdvertiserStub.returns({ result: MONGO_SAMPLE_ADVERTISER });
	S3Stub.returns({error:true});
	const response = await advertiser.validateGoogleMerchant(objToValidate);
	expect(response).toMatchObject({
		success: false,
		status: {
			code:S3_ACCESS_ERROR.code,
			msg:expect.stringMatching(/.*/)
		},
		data: undefined  });
});

test(`${TEST_NAME} - VALIDATE GOOGLE MERCHANT ERROR - JSON_PARSE_ERROR`, async () => {
	mongoUpdateAdvertiserStub.returns({ result: MONGO_SAMPLE_ADVERTISER });
	S3Stub.returns({result:"Não é um Objeto"});
	const response = await advertiser.validateGoogleMerchant(objToValidate);
	expect(response).toMatchObject({
		success: false,
		status: {
			code:JSON_PARSE_ERROR.code,
			msg:expect.stringMatching(/.*/)
		},
		data: undefined  });
});


test(`${TEST_NAME} - VALIDATE GOOGLE MERCHANT ERROR - GMERCHANT_TOKEN_ERROR`, async () => {
	mongoUpdateAdvertiserStub.returns({ result: MONGO_SAMPLE_ADVERTISER });
	S3Stub.returns({result:'{"key":"value"}'});
	GMgenerateToken.returns("");
	const response = await advertiser.validateGoogleMerchant(objToValidate);
	expect(response).toMatchObject({
		success: false,
		status: GMERCHANT_TOKEN_ERROR,
		data: undefined  });
});

test(`${TEST_NAME} - VALIDATE GOOGLE MERCHANT ERROR - GMERCHANT_FETCH_ERROR`, async () => {
	mongoUpdateAdvertiserStub.returns({ result: MONGO_SAMPLE_ADVERTISER });
	S3Stub.returns({result:'{"key":"value"}'});
	GMgenerateToken.returns("token");
	GMfetchAllProducts.returns("");
	const response = await advertiser.validateGoogleMerchant(objToValidate);
	expect(response).toMatchObject({
		success: false,
		status: GMERCHANT_FETCH_ERROR,
		data: undefined  });
});

test(`${TEST_NAME} - VALIDATE GOOGLE MERCHANT SUCCESS`, async () => {
	mongoUpdateAdvertiserStub.returns({ result: MONGO_SAMPLE_ADVERTISER });
	S3Stub.returns({result:'{"key":"value"}'});
	GMgenerateToken.returns("token");
	GMfetchAllProducts.returns("products");
	const response = await advertiser.validateGoogleMerchant(objToValidate);
	expect(response).toMatchObject({
		success: true,
		status: OK,
		data: expect.stringMatching(/.*/)  });
});
