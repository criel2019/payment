import { RestClient } from "@bootpay/server-rest-client"

RestClient.setConfig(
	"604ec053d8c1bd002bf4c3bb",
	"8fJ2AmXFW9K5ZvuTJV70IToKh6ZrIZZ0L/Z7258fllk="
);

RestClient.getAccessToken().then(function (response) {
	if (response.status === 200) {
		console.log(response.data.token);
	}
});