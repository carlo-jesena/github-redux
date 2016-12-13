export const ADD_REPO = 'ADD_REPO';
export const RATE_REPO = 'RATE_REPO';

const uuid = (function () {
	var id = 0;
	return () => id++;
})();

export const addRepo = (repo) => ({
	type: ADD_REPO,
	repo,
	id: uuid()
});

export const rateRepo = (id, rating) => ({
	type: RATE_REPO,
	id,
	rating
});
