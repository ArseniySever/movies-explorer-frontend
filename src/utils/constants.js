import logo from "../images/avatar.jpg"
const initialCards = [
    {
      name: '33 слова о дизайне',
      link: 'https://s457vla.storage.yandex.net/rdisk/df189cc8ecf8414ea848181c7047c0602582f3b4518a808555b9fa2ff394334a/64d404cd/vPfFAcQXKbhvEyv63sPU9vZCFXs27dknTfCCZE06WfT90dngR5C8B725kWrHGBkMKx9ZWFEQ6gC8Qp_P7dCAQA==?uid=236056490&filename=pic__COLOR_pic-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=64249&hid=1452281011c527f378b536ea18881d12&media_type=image&tknv=v2&etag=4b098c2dbc232b049f76ea428495c1d2&rtoken=g1D32dmHknmg&force_default=yes&ycrid=na-f6468015106dd809b1cc9bb912add4c6-downloader7h&ts=6028426410d40&s=9031173d4a654402f077debd21d9413a17fcc5b1b59506c0358bc390899f718f&pb=U2FsdGVkX19k351JPD9v9l3htZy6ZH3ABa0nFWCaca7l9FdnjhSJQkD6yG38IrkBUgan-mFE8-aUqgzD-cZqz6aV-ZsGAHVaRMVF6Va0FgA',
    },
    {
      name: "Киноальманах «100 лет дизайна»",
      link: "https://s322vlx.storage.yandex.net/rdisk/9fab7881837421454b84fbd84f9e8f75d10aca494d789a2dd9cef6a37e14acb4/64d40518/vPfFAcQXKbhvEyv63sPU9ombCVJkrok3Am9_tkzQ-kq5OMJvG9pu-43aJUmj8163V46PQcFvEiLBh-NFWG6z2A==?uid=236056490&filename=pic__COLOR_pic%20%281%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=50950&hid=9e05c7673a1897305e0b904553c4d113&media_type=image&tknv=v2&etag=8ade4575b93570c734d7af383595369b&rtoken=JO5ApVzzay40&force_default=yes&ycrid=na-cfa650c32b3532ec1e339e8e910b78da-downloader7h&ts=602842ab97600&s=20ddc652750d13de0cca36be4e098cc0ccb870aca3fd4f3d4c60c5ba7f34d44c&pb=U2FsdGVkX1-5TE1Ft_cthwzeuuWeVi450Nb8B8iMdyBHzqzxJUQcuZtxTMGUmNZ3qa1ojJdWTeJu1E26VZFxv-mLZFKKKtyJ-9j-CirH4fY",
    },
    {
      name: "В погоне за Бенкси",
      link: "https://s115vlx.storage.yandex.net/rdisk/c958f91bce1445c368aaafd7624d565bb671a86a77bbebca7bf341e8fd317fd2/64d40564/vPfFAcQXKbhvEyv63sPU9p3SJ6cs3ewjibh3onIh2ohZlXg7EUn9ZXMyroosXPN1Gk0rNWL9kOajh2gGi_NCgA==?uid=236056490&filename=pic__COLOR_pic%20%282%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=61199&hid=36817015c8cbde9fba1d40116199c519&media_type=image&tknv=v2&etag=bea3bccdc54b18aeffa801709aaecc72&rtoken=h0aaRfS3aL0h&force_default=yes&ycrid=na-4a62b11bc8db2507e73e857da26d8dc6-downloader7h&ts=602842f412100&s=762618b3086997db544352427ded23cd28c38e22dfcce27a5922210537e78262&pb=U2FsdGVkX1-vohFW1qjx_PXIDznwFLPQTYjzZGwpSbeJUDqCD1DDbLzeA71N9bYM1t28JQ8WAzaaIV5gnweFbt58G4Rjh2lqWl_K9I5cyJE",
    },
    {
      name: "Баския: Взрыв реальности",
      link: "https://s15vlx.storage.yandex.net/rdisk/0536fc0748f09054353e946edbe977427b4803923d7f2d0c60dc2858914cff37/64d3d2b1/vPfFAcQXKbhvEyv63sPU9sksf9YMkjEKqMpiTjQk8m3Yb9OV7Cgyt8Lg6mkejq-ECF7MdlXlSpFk1p0QltZHZA==?uid=236056490&filename=photo_2023-08-06_08-38-40-min.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=236056490&fsize=14100&hid=c6070cb9c32b15eaaac19be5d963be02&media_type=image&tknv=v2&etag=6f1fdebfb466a9951c8833edd4d8c117&rtoken=enQJuQ7MTH1q&force_default=yes&ycrid=na-6f304cc2ee271ea1ef257f51a2604305-downloader9h&ts=6028129a54e40&s=44d51a59a6bd7c236580e8b75aa569802423f808ba2818a13b707fb9153353e4&pb=U2FsdGVkX19qa-IYPUyUlUFg8x3mNGtWOl44eQSLmbTsoUGku1DQJcrzoZAjWFpBgGRTlCSzNv5bnSiAnsmNKBvBBgd0IkKH5pkeFU3qLdk",
    },
    {
      name: "Бег это свобода",
      link: "https://s210vlx.storage.yandex.net/rdisk/cdd2c60789226baf98f3f0dc26c24bf0d5099136344893eae7cf8b09d01405c5/64d3d2d4/vPfFAcQXKbhvEyv63sPU9h781YE7lip75V8vGTBTubsKTWW4exkUS37x4usMqYQtcor66jxtuNWUjZPkKalwhg==?uid=236056490&filename=pic__COLOR_pic%20%283%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=49534&hid=ca3b06dbc79cc47fdaa78d32f94c78e0&media_type=image&tknv=v2&etag=279ec348aaf0decf8e2510fdf7b614da&rtoken=AzgFmeZVy1cl&force_default=yes&ycrid=na-9aa2cc9c7c3dd00ada822a7be9e50963-downloader9h&ts=602812bbb5d00&s=16fca0421c776329dcdf56ea02fb6bcfc35954ea0c93b88bfa57612437a5e2d9&pb=U2FsdGVkX1-7rE7SjXwOK5sr7_0PN3znLsEFp6bmjZss2Qd_5WQ3uNu14H2LW-j27QxHORsDpB_J5u-z1oplBSO3B8TQWZWDN8UT2kMpaJo",
    },
    {
      name: "Книготорговцы",
      link: "https://s67vlx.storage.yandex.net/rdisk/e2445f0ffd95450e084c86065c83c7deffc60efff91125a9c4cfb884a916f54b/64d3d2f1/vPfFAcQXKbhvEyv63sPU9hyswrd-2wJxlvcv1qCQZvarBXnK7O7WcdQ1PhMNGJ4KiVej9LM4G6_EGVpjxb7-NQ==?uid=236056490&filename=pic__COLOR_pic%20%284%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=50182&hid=04a4ef130d085104b6da82411537bbf7&media_type=image&tknv=v2&etag=f4e7e526465af196d3ac8a35a881f14d&rtoken=d3a7Sz8Z0yeE&force_default=yes&ycrid=na-c60d2bbd770bfd7c476a067fd019fd91-downloader9h&ts=602812d75de40&s=dd3dde986a58dee28e69d4fffb8b7c1459408f2ec34b118adde02cc56c42b076&pb=U2FsdGVkX18bos62Q5JD6R-dXynIXefPORU2R6-9u1MmsXr4qlNAXqPYI-crVqYpNw2xVEUlbgqTaMmJTWmmO_PbTPJxRQynB3PWFkTQYk8",
    },
    {
      name: "Когда я думаю о Германии ночью",
      link: "https://s138vla.storage.yandex.net/rdisk/82ebd5dcc00b36e77c0b6e9c8e788bd7617399aae9e06606d7e95665923bd3d8/64d3d310/vPfFAcQXKbhvEyv63sPU9u8L4jSHPQx7f-5SZEJ_5ZlAs8FcV8JBUVohM2PqphRN6lBFgEO0IyaTeC3BvwDzqg==?uid=236056490&filename=pic__COLOR_pic%20%285%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=57899&hid=8be599127cac26834ca8caf37544881f&media_type=image&tknv=v2&etag=4502af9794711cce0357ac72ead7db81&rtoken=3NmtvsloB7h1&force_default=yes&ycrid=na-ef2cc3bfe1af7fa35233d85f39af8ad3-downloader9h&ts=602812f4ee400&s=3298cc9d0a2676f3245e4524921ffc2b73c0c8e0be00c050af656ff592d9d4f9&pb=U2FsdGVkX1_Suj6CDLdhp7SmFMq4juhzAf_yDClwH60ieY46gct11L_1h5PrO-vimHI5TwJ8QqQxAYjVB5rmXrx5K7BLfOTRy-pabDKNk58",
    },
    {
      name: "Gimme Danger: История Игги и The Stooges",
      link: "https://s273vlx.storage.yandex.net/rdisk/82f058021bbadbf6626d36098ff22b199c5f64a064df4d2783828b8dc7c7302b/64d3d32b/vPfFAcQXKbhvEyv63sPU9oJ2ON8YL8iCkuIzHt4Rq4O46h4LHBZmhY6rALImM9Yyd0Snbud_e_epTsCoTQErXg==?uid=236056490&filename=pic__COLOR_pic%20%286%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=52402&hid=ba9791a3441f4683f3a7da5894e2fb98&media_type=image&tknv=v2&etag=b57d116e19e9c9cf85ef3695e488ccc5&rtoken=dbdEL1f5XizB&force_default=yes&ycrid=na-c030b38ce9138718bae7b8d944cb7ca7-downloader9h&ts=6028130eae0c0&s=84a83297ec1369b9a33fa9ceb38ee97462e3e19a7046d9a2a47a663e2044b0a0&pb=U2FsdGVkX19mgiBRA81-2GKUZ06LTr1eFCb1B-KQ7yrMZPJJW-nNwe2j4BDDbUW6Q178k6qGUaVu38Akb74jyqJrBv57J7nSX46Qr1BweeU",
    },
    {
      name: "Дженис: Маленькая девочка грустит",
      link: "https://s198vla.storage.yandex.net/rdisk/989f84c32cf4c2ad2d7f87c9cdd1f6dda68d782d95b3aa795238ff87919cbb1b/64d3d344/vPfFAcQXKbhvEyv63sPU9pkbiYFhfQrHwdPzXpFSCG1PCwH9ZuZv-jmpHfca3gxgfZxVh9QUlSV9mj0iFk5LLg==?uid=236056490&filename=pic__COLOR_pic%20%287%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=62530&hid=871782f91c72160485ac8f8f4b180b50&media_type=image&tknv=v2&etag=3921b68ae81739fabac9063bcd3b4f69&rtoken=aE814C5VLUc1&force_default=yes&ycrid=na-807757d23822da5d9be3292c99f15040-downloader9h&ts=6028132685900&s=d5502c2aae1b1901f8d2abd302b9e7e1d5cec9947ba7ffeb5a8c186f494c366c&pb=U2FsdGVkX1_AB9wZWc3oh-bcgC4YIgmCmLrni1UNB7TNcTINeBbykR9ii15K2lE_0TSX0fBysuOPJw1tnppdhvKP1nL-ofkS-0Eb5uVex5c",
    },
    {
      name: "Соберись перед прыжком",
      link: "https://s261vla.storage.yandex.net/rdisk/24ea234689e44de659e63d41f4959dcae6965d38405a8ae3ad48f77fa1facff7/64d3d35d/vPfFAcQXKbhvEyv63sPU9qE3vZLif11kIr0ecIeeaC7bA4wXFqfgI_2LEDIyLBbhftVL_lcImrajWZThJvd0Ug==?uid=236056490&filename=pic__COLOR_pic%20%288%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=53904&hid=01fa2a982da80d70a66a487690fc1f19&media_type=image&tknv=v2&etag=1784a76208ad56c33c36c3caa2a22c35&rtoken=Ot8UMdOLogiO&force_default=yes&ycrid=na-0bc7d0753a0fa0b5aa779d690f6cf536-downloader9h&ts=6028133e5d140&s=fa1d8e1a7edcc47be2abfaccaefe7a5c07aa87c3b7f0a68a3a7e8f8b51098e67&pb=U2FsdGVkX1-Lufpun3xId-JqmKApp7Bn7KQvuH_rS5onY6byk-DU5k9yeuoFukwY8jGXAuEg9f-p4IYFCEL8b2u9-aZ68cIUVoDc7KWFu7Y",
    },
    {
      name: "Пи Джей Харви: A dog called money",
      link: "https://s311vla.storage.yandex.net/rdisk/071c50a596f8829dc99bf7bbae0c1fc58edf6c1699ad330de66125ce306da8f5/64d3d37d/vPfFAcQXKbhvEyv63sPU9sjoVHFDJNgV-4cuXhnvs_9W9s2DUWvZEFRTI3AYqirbznVk6lla8-6fJlGFSukAOA==?uid=236056490&filename=pic__COLOR_pic%20%289%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=37884&hid=e3013e721392015202080e3798452b41&media_type=image&tknv=v2&etag=724c48aa0b6837dc247805f67337c4ac&rtoken=TqQmwS1hmJnk&force_default=yes&ycrid=na-efd2cdf3c3cf518241d9bdd666b3cd89-downloader9h&ts=6028135ce1940&s=71501ad3b2fc582b3bb0edd467979b560188c5e9483b2803d594da9a28bd3936&pb=U2FsdGVkX1-sZ49hYDhITGcxRVArbAdWg3b-q_Z4l3_aX9GWhCKm78wGcmMWZhLuZXRqaIp7u6U2a_AVVaseIeQZTfiYvN1bYtUY3VlctM4",
    },
    {
      name: "По волнам: Искусство звука в кино",
      link: "https://s357vla.storage.yandex.net/rdisk/034403e2e9f1855a888252d23f778acdf6a59c31c6ef5b04e729a325f317c294/64d3d39a/vPfFAcQXKbhvEyv63sPU9obmUp5PckfzzGpGDTRFFd_c_-LagXO5EcWoJ03fwtTzvDvLRLDfWJthXY5JSqNOzg==?uid=236056490&filename=pic__COLOR_pic%20%2810%29-min.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=236056490&fsize=45880&hid=86e6ed6f531141b9d779bc01491f9459&media_type=image&tknv=v2&etag=46f3f417eef9c2ea99516e24fc08d9ba&rtoken=ZniKAjP5tE1i&force_default=yes&ycrid=na-984a879dd3f488ad369abd6777779dc7-downloader9h&ts=6028137889a80&s=65d9d1a4addeaa426a139490f0ba01db720deca2734b1c903fd0af4968afecfa&pb=U2FsdGVkX1_pYIytCtTK6csRVJ2vIIDQcLbejerBLmuGmd8ape1QwcsLfWXaDsYCBGscLrISWkSNBI6gaFIjF9ufCtLE9z1RlviiTBIy3IM",
    },
  ];
  export default initialCards;