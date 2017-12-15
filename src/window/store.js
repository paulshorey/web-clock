// no flow here - incompatible - besides, this already does type checking
/*
	First of all, lets add reliable browser support for Object.Prototype watch
*/
import './lib/Object.prototype.watch';

/*
	1) define default properties
	* optionally define sub-properties, so that we can look back here at any time and see what our global store should contain
	* optionally, add some comments to document each property. Again, this is only to be able to view quickly what each should be. Properties and subproperties are actually validated in step 2
*/
window.store = {
	page: {}
};

/*
	2) optional
	* do type checking and filtering on those properties before the value is changed
	* Proxy takes 2 arguments. First, the store object. Then, the functions (handlers) to run on it: get, set, has, construct, etc
	* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
*/
window.store = new Proxy(window.store, {
	set(store, propertyName, value) {
		var oldValue = store[propertyName] || {};

		// mandatory validation
		// new value must be object!
		if (typeof value !== 'object') {
			(window.log || console.log)(
				'error',
				`window.${propertyName} must be type "object" ... fixing to = {}`,
				['before', oldValue],
				['after', value]
			);
			value = {};
		}

		// custom validation
		switch (propertyName) {
			case 'page':
				// no validations - this is just placeholder
				break;

			default:
				break;
		}

		/*
			debugging
			* only for dev env (if NodeJS process)
		*/
		if (process && process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
			(window.log || console.log)('window.' + propertyName + ' set', ['before', oldValue], ['after', value]);
		}

		/*
			done validating
			* set store value
		*/
		store[propertyName] = value;
		return value;
	},
});

export default {};
