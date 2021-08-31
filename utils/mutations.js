const Mutations = {
	mutate(state, payload) {
		if (!Mutations.hasPropertyAndWith(payload)) {
			console.error(payload, 'Must have atributes property and with');
			return false;
		}

		state[payload.property] = payload.with;
	},
	mutateMultiple(state, payloads) {
		if (!Array.isArray(payloads)) {
			console.error(payloads, 'Must be an array');
			return false;
		}

		payloads.forEach((payload) => {
			Mutations.mutate(state, payload);
		});
	},
	hasPropertyAndWith(payload) {
		return Object.prototype.hasOwnProperty.call(payload, 'property') &&
		Object.prototype.hasOwnProperty.call(payload, 'with');
	},
};

export default Mutations;
