import { RestClient } from "@bootpay/server-rest-client"

var price = 100; 

RestClient.setConfig(
    "604ec053d8c1bd002bf4c3bb",
	"8fJ2AmXFW9K5ZvuTJV70IToKh6ZrIZZ0L/Z7258fllk="
);

RestClient.getAccessToken().then(function (response) {
	// Access Token을 발급 받았을 때
	if (response.status === 200 && response.data.token !== undefined) {
        RestClient.verify('604f0f200d681b0037bfa4f7').then(function (_response) {
			// 검증 결과를 제대로 가져왔을 때
            console.log('ok');
			if (_response.status === 200) {
				// 원래 주문했던 금액이 일치하는가?
				// 그리고 결제 상태가 완료 상태인가?
                console.log('Are you sure?')
				if (_response.data.price === price && _response.data.status === 1) {
					// TODO: 이곳이 상품 지급 혹은 결제 완료 처리를 하는 로직으로 사용하면 됩니다.
                    console.log('you earn it');
				}
			}
		});
	}
});