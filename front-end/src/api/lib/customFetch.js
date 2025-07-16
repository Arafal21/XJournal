export async function customFetch(url, { fetchFunction = fetch, signal, timeout, ...fetchOptions } = {}) {
	const controller = new AbortController();
	const promise = fetchFunction(url, {
		signal: controller.signal,
		...fetchOptions,
	});
	if (signal) signal.addEventListener('abort', () => controller.abort());

	if (timeout === undefined) {
		return promise;
	}

	if (isNaN(timeout) || timeout < 0) {
		throw new Error('Fetch timeout is invalid, got ' + timeout);
	}

	const id = setTimeout(() => controller.abort(), timeout);
	return promise.finally(() => clearTimeout(id));
}
