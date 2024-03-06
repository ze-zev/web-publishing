const bestul = document.querySelector(".best_list");
const newul = document.querySelector(".new_list");
const shopul = document.querySelector(".shop_list");

let bestMenu = [
  {
    id: 0,
    name: `우유 생크림 도넛`,
    price: `3,900원`,
    url: `images/donut/Milk whipped cream Donut.jpg`,
  },
  {
    id: 0,
    name: `클래식 바닐라 도넛`,
    price: `3,500원`,
    url: `images/donut/Classic Vanilla Donut.jpg`,
  },
  {
    id: 0,
    name: `초코푸딩 도넛`,
    price: `3,900원`,
    url: `images/donut/Chocolate pudding Donut.jpg`,
  },
  {
    id: 0,
    name: `얼그레이 도넛`,
    price: `3,500원`,
    url: `images/donut/Earl Grey Donut.jpg`,
  },
  {
    id: 0,
    name: `스트로베리 크림 도넛`,
    price: `3,900원`,
    url: `images/donut/Strawberry cream Donut.png`,
  },
  {
    id: 0,
    name: `카야버터 도넛`,
    price: `3,900원`,
    url: `images/donut/Kaya butter Donut.jpg`,
  },
  {
    id: 0,
    name: `레몬 슈가 도넛`,
    price: `3,900원`,
    url: `images/donut/Lemon sugar Donut.jpg`,
  },
  {
    id: 0,
    name: `민트초콜릿 크림 도넛`,
    price: `3,900원`,
    url: `images/donut/Mint chocolate cream Donut.jpg`,
  },
];
let newMenu = [
  {
    id: 0,
    name: `스노우 레드벨벳 도넛`,
    price: `4,400원`,
    url: `images/donut/Snow red velvet Donut.png`,
  },
  {
    id: 0,
    name: `피스타치오 리스 도넛`,
    price: `3,900원`,
    url: `images/donut/Pistachio wreath Donut.png`,
  },
  {
    id: 0,
    name: `루돌프 초코 생크림 도넛`,
    price: `4,400원`,
    url: `images/donut/Rudolph chocolate whipped cream Donut.png`,
  },
  {
    id: 0,
    name: `마스카포네 슈노우맨 도넛`,
    price: `5,900원`,
    url: `images/donut/Mascarpone snowman Donut.png`,
  },
  {
    id: 0,
    name: `인절미 크림 도넛`,
    price: `4,200원`,
    url: `images/donut/Injeolmi cream Donut.png`,
  },
  {
    id: 0,
    name: `찰떡 쑥 크림 도넛`,
    price: `3,900원`,
    url: `images/donut/Rice cake mugwort cream Donut.png`,
  },
  {
    id: 0,
    name: `우도 땅콩크림 도넛`,
    price: `3,900원`,
    url: `images/donut/Udo peanut cream Donut.jpg`,
  },
  {
    id: 0,
    name: `제주 청귤 도넛`,
    price: `3,900원`,
    url: `images/donut/Jeju green tangerine Donut.jpg`,
  },
];
let shopMenu = [
  {
    id: 0,
    name: `하트 체리 바닐라빈 케이크`,
    price: `28,000원`,
    url: `images/shop/Heart cherry vanilla bean Cake.jpg`,
  },
  {
    id: 0,
    name: `핑크 스마일 초콜릿 케이크`,
    price: `39,000원`,
    url: `images/shop/Pink smile chocolate Cake.jpg`,
  },
  {
    id: 0,
    name: `시그니처 옐로우 스마일 케이크`,
    price: `28,000원`,
    url: `images/shop/Signature yellow smile Cake.jpg`,
  },
  {
    id: 0,
    name: `레인보우 수첩`,
    price: `6,500원`,
    url: `images/shop/Rainbow Handbook.jpg`,
  },
  {
    id: 0,
    name: `플러피 민트 하트 침구 세트`,
    price: `135,000원`,
    url: `images/shop/Fluffy mint heart bedding set.jpg`,
  },
  {
    id: 0,
    name: `플러피 레드 체리 침구 세트`,
    price: `135,000원`,
    url: `images/shop/Fluffy red cherry bedding set.jpg`,
  },
  {
    id: 0,
    name: `스마일 키링`,
    price: `5,000원`,
    url: `images/shop/Smile key ring.jpg`,
  },
  {
    id: 0,
    name: `밀키팜 카라멜 틴케이스 세트 (체크)`,
    price: `10,900원`,
    url: `images/shop/Milky Farm Caramel Teen Case Set (checkered).jpg`,
  },
  {
    id: 0,
    name: `밀키팜 카라멜 틴케이스 세트 (핑크)`,
    price: `10,900원`,
    url: `images/shop/Milky Farm Caramel Teen Case Set (pink).jpg`,
  },
  {
    id: 0,
    name: `밀키팜 카라멜 틴케이스 세트 (민트)`,
    price: `10,900원`,
    url: `images/shop/Milky Farm Caramel Teen Case Set (mint).jpg`,
  },
  {
    id: 0,
    name: `밀키팜 카라멜 틴케이스 세트 (옐로우)`,
    price: `10,900원`,
    url: `images/shop/Milky Farm Caramel Teen Case Set (yellow).jpg`,
  },
  {
    id: 0,
    name: `레인보우 목쿠션`,
    price: `34,000원`,
    url: `images/shop/Rainbow Neck Cushion.jpg`,
  },
  {
    id: 0,
    name: `크림버니 위클리 플래너`,
    price: `10,500원`,
    url: `images/shop/Cream Bunny Weekly Planner.jpg`,
  },
  {
    id: 0,
    name: `스마일 위클리 플래너`,
    price: `10,500원`,
    url: `images/shop/Smile Weekly Planner.jpg`,
  },
  {
    id: 0,
    name: `슈가베어 케이크 캔들`,
    price: `4,800원`,
    url: `images/shop/Sugar Bear Cake Candle.jpg`,
  },
];
function bestList() {
  let htmlempty = ``;
  for (let i = 0; i < bestMenu.length; i++) {
    htmlempty += `<li>
        <a href="javascript:void(0)"><img src="./${bestMenu[i].url}" alt="${bestMenu[i].name}">
                        <div class="product">
                            <p class="product_name">${bestMenu[i].name}</p>
                            <p class="product_price">${bestMenu[i].price}</p>
                        </div>
                        </a>
                    </li>`;
    bestul.innerHTML = htmlempty;
  }
}
function newList() {
  let htmlempty = ``;
  for (let i = 0; i < newMenu.length; i++) {
    htmlempty += `<li>
          <a href="javascript:void(0)"><img src="./${newMenu[i].url}" alt="${newMenu[i].name}">
                          <div class="product">
                              <p class="product_name">${newMenu[i].name}</p>
                              <p class="product_price">${newMenu[i].price}</p>
                          </div>
                          </a>
                      </li>`;
    newul.innerHTML = htmlempty;
  }
}
function shopList() {
  let htmlempty = ``;
  for (let i = 0; i < shopMenu.length; i++) {
    htmlempty += `<li>
            <a href="javascript:void(0)"><img src="./${shopMenu[i].url}" alt="${shopMenu[i].name}">
                            <div class="product">
                                <p class="product_name">${shopMenu[i].name}</p>
                                <p class="product_price">${shopMenu[i].price}</p>
                            </div>
                            </a>
                        </li>`;
    shopul.innerHTML = htmlempty;
  }
}

bestList();
newList();
shopList();
