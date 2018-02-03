import * as handler from '../handler';

// Teste de acesso para verificar se o painel esta ONLINE
test('hello', async () => {
	const event = 'event';
	const context = 'context';
	const callback = (error, response) => {
		expect(response.statusCode).toEqual(200);
		expect(typeof repsnse.body).toBe("string");
	}

	await handler.init(event, context, callback);
});
