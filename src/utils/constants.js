import logo from "../images/avatar.jpg"
const initialCards = [
    {
      name: '33 слова о дизайне',
      link: "https://4.downloader.disk.yandex.ru/preview/0e974189291c12b5cd3fa1ef5538147fa1faf6618e7511c1ebb1fef0148475f4/inf/7sTHyZ3R7yk45r9iUMOupkKjI2woSNJKvf0_hNKDp3pFdGR-xk-a89awWOnjDepBailBWIw2jNJNLXktbey3gA%3D%3D?uid=236056490&filename=photo_2023-08-06_08-38-40.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Киноальманах «100 лет дизайна»",
      link: "https://2.downloader.disk.yandex.ru/preview/b5ede7e60e3d8b6342c50fd86ad0aa13e570c0e6693c7c5ca48ef8d5b9ce39ed/inf/V-WVMIQqXhW4n1MmJVWTo0ey6w4xoKuqlOfgW0dkUtoTGZLWxLHUxJVgQO3d_DXKyn18xrVjNirsUIec3A5ggA%3D%3D?uid=236056490&filename=pic__COLOR_pic%20%281%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "В погоне за Бенкси",
      link: "https://3.downloader.disk.yandex.ru/preview/d9fdcff9734fea8c36e1e44da0e47093912b0f5763ad01bc48a50ede21882996/inf/80er7gcLwRy50UoXD7O7TTl5t7B53Qh6cSde9xLHIkidFiq594KkCm_IlvJcaiHuvT02CfmIc2EF7Y_HTGItyQ%3D%3D?uid=236056490&filename=pic__COLOR_pic%20%282%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Баския: Взрыв реальности",
      link: "https://1.downloader.disk.yandex.ru/preview/e57ad45beaca654df7c44f791767ecb4f023c5fe190d4b2a25d1fa9b8c855f61/inf/4pDQGzzv7Q2ZpXRd06ZUHu5yFpOmTeReTy5EnIXUzTNjwsgkmjVppuMebPV6WA28tEpVG2pdHVoaBE104a4Fag%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-45.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Бег это свобода",
      link: "https://4.downloader.disk.yandex.ru/preview/6c4ebcd8536b5258cc2304a74a61e724b489527f63bb101481f45b41491bee39/inf/EF3--vHbOjLH3nlqXQhnmTU0vIhiHCCm8KzzVIlqOPwpYzSQDY6d6G2Xq1BI2xRoVGkX5T0g7s49hwBOq7Bx0g%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-40.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Книготорговцы",
      link: "https://1.downloader.disk.yandex.ru/preview/6965aac4058d56862b05862d2a0c840b4e366e9654ff298a049f1de9857c0c32/inf/4asgME0LI1N7RgZo9lfM2kKjI2woSNJKvf0_hNKDp3q09kXNfoGE7vCY2TGlHNh2Rhkz3J5Ppu7vf8R-fOv5zQ%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-35.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Когда я думаю о Германии ночью",
      link: "https://4.downloader.disk.yandex.ru/preview/3e42f2d01283136b843e0131aa18931a02e233188e5c4dd8c59dbf3e78b6466c/inf/So3AqrfwXeG8NSjFO5afcoUJKL5MxWa0JuETZZRztaLMe2L6y35YQrlOFRUd4IG_Pua5E38c6JT0kuujxoknFg%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-25.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Gimme Danger: История Игги и The Stooges",
      link: "https://1.downloader.disk.yandex.ru/preview/eba36da0729861efab3d71189d72a7b2faad98a7a825bcf3512a3e3b4ed1ad06/inf/I7rKtSW8_wURIHFqLzmmdy9qNuSgfkYcDqKhvAOJRG-AN5hKlnuZS1OxpwDAhmLxmKYb0Vj-NbhF4U66mZpkWA%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-28.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Дженис: Маленькая девочка грустит",
      link: "https://2.downloader.disk.yandex.ru/preview/0d1b9490203881d52214be4e722f1eaea1899ea4a71b51e8b121e145cfec1ea8/inf/z4X3PSuRvxRRaGpJvR-sLUKjI2woSNJKvf0_hNKDp3rP1jFp_JUcj-oy2BXAM1kAY9C5VxSfkDnYQlzygUidhQ%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-32.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Соберись перед прыжком",
      link: "https://1.downloader.disk.yandex.ru/preview/f5a94baf4d8375ca38e9d8d23265f534d53dd59b1def956d57db0e9789f6d66d/inf/dYP6YfLGj2s--6rp-IZyM7fNv43AGl2eG48xGhBmkyMNW1N42q6LJDFPoTM5Hknkv-fC_cySVRCZBHO_55z8ow%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-21.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "Пи Джей Харви: A dog called money",
      link: "https://1.downloader.disk.yandex.ru/preview/221411b2403e71d59084730df3ab78d763df67c5eb6d59caa2e48d69b55d52e5/inf/P6OTEW9VOzv2fGUiVQX9wkKjI2woSNJKvf0_hNKDp3r2K_Gu4FLhUMiqVhAtGe_l_ZCgDQjeiPU9I86D7d6GpA%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-17.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
    {
      name: "По волнам: Искусство звука в кино",
      link: "https://2.downloader.disk.yandex.ru/preview/c33e984a12863e184d8bc5f9988a10a87cddbbeb30127625fc285b1fba6efcee/inf/kRojyabmrIY1DDwU_1OhmS9qNuSgfkYcDqKhvAOJRG9b2eDzZ5WjukotpVTOXjtDsoSwG25fwNT2f3bSxOBfLQ%3D%3D?uid=236056490&filename=photo_2023-08-06_08-39-12.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&tknv=v2&size=1535x784",
    },
  ];
  export default initialCards;