import {
  Users,
  Auth,
  ResPartnerController,
	ProductBrandsController,
	ProductController,
	CategoriesController,
	UnitsOfMeasureController,
	UserAddressesController,
  PaymentController,
  PrinterController
} from ".";

export default class ControllersFactory {

	constructor(app, postgres, firebase) {
    const mpHeader = app.get('mundipaggHeader');

    this.auth = new Auth(firebase);
		this.users = new Users(postgres);

		this.resPartner = new ResPartnerController({ firebase, mpHeader });
		this.payment = new PaymentController({ mpHeader });
		this.userAddresses = new UserAddressesController();
		this.printerController = new PrinterController();
	}

	postControllers(url) {
    // Auth
    if(/^(\/api\/v1\/signUpWithEmailAndPassword)/.test(url))
      return this.auth.signUpWithEmailAndPassword;
    if(/^(\/api\/v1\/signInWithEmailAndPassword)/.test(url))
      return this.auth.signInWithEmailAndPassword;


  // PRINTING
    if(/^(\/api\/v1\/print)/.test(url))
		return this.printerController.print;

    // Payment
    if(/^(\/api\/v1\/payment\/createCreditCard)/.test(url))
      return this.payment.createCreditCard;
      
    if(/^(\/api\/v1\/payment\/createOrder)/.test(url))
			return this.payment.createOrder;

    // ResPartner
    if(/^(\/api\/v1\/resPartner\/create)/.test(url))
			return this.resPartner.create;      
			
		if(/^(\/api\/v1\/resPartner\/updateFirebaseUser)/.test(url))
			return this.resPartner.updateFirebaseUser;
		if(/^(\/api\/v1\/resPartner\/completeSignup)/.test(url))
			return this.resPartner.update;

		// UserAddresses
    if(/^(\/api\/v1\/userAddresses\/create)/.test(url))
			return this.userAddresses.create;

    return this.notFound;
	}

	getControllers(url) {

		// ResPartner
		if(/^(\/api\/v1\/resPartner)/.test(url))
			return this.resPartner.get; 
		if(/^(\/api\/v1\/children)/.test(url))
			return this.resPartner.getChildren; 
			
    // Categories
    if(/^(\/api\/v1\/categories)/.test(url)) return CategoriesController.fetch;
    
    // Payment
		if(/^(\/api\/v1\/payment\/creditCards)/.test(url)) return this.payment.listCreditCards;
    
    // Product
		if(/^(\/api\/v1\/products)/.test(url)) return ProductController.fetch;
    
    // Product Brand
		if(/^(\/api\/v1\/product-brands)/.test(url)) return ProductBrandsController.fetch;
		
		// Units of Measure
		if(/^(\/api\/v1\/uom)/.test(url)) return UnitsOfMeasureController.fetch;
		
		// User Addresses
		if(/^(\/api\/v1\/userAddresses)/.test(url)) return UserAddressesController.list;

		return this.notFound;
	}

	putControllers(url) {
		if(/^(\/api\/v1\/userAddresses\/update)/.test(url))
			return this.userAddresses.update;
		if(/^(\/api\/v1\/resPartner)/.test(url))
			return this.resPartner.update;

		return this.notFound;
	}

	deleteControllers(url) {
		return this.notFound;
	}

	notFound(){
		return 404;
	}

}
