// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const swiperTitle = document.getElementById('swiper-title');
const titleText = 'スライド' + swiper.realIndex + 'を表示しています。';
let titleElement = document.createTextNode(titleText);
swiperTitle.appendChild(titleElement);

swiper.on('slideChange', function () {
  console.log('slide changed');

  if(titleElement){
    titleElement.remove();
  }

  const titleText = 'スライド' + swiper.realIndex + 'を表示しています。';
  titleElement = document.createTextNode(titleText);

  swiperTitle.appendChild(titleElement);
});

//

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: ',swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.seiper-scrollbar',
  },
});

const titleList = [
  '1つ目のタイトル',
  '２つ目のタイトル',
  '３つ目のタイトル',
  '４つ目のタイトル',
];

const swiperTitle2 = document.getElementById('swiper-title');
const titleText2 = titleList[swiper.realIndex];
let titleElement2 = document.createTextNode(titleText);
swiperTitle2.appendChild(titleElement2);

swiper2.on('slideChange', function () {
  console.log('slide changed');

  if(titleElement2){
    titleElement2.remove();
  }

  const titleText = 'スライド' + swiper2.realIndex + 'を表示しています。';
  titleElement2 = document.createTextNode(titleText);

  swiperTitle2.appendChild(titleElement2);
});

import JustValidate from 'just-validate';
const validator = new JustValidate(document.querySelector('#basic_form'));

validator
  .addField(document.querySelector('#basic_name'), [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '15文字以下で入力してください。',
    },
  ])
  .addField(document.querySelector('#basic_email'), [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'email',
      errorMessage: '正しいメールアドレスを入力してください。',
    },
  ])
  .addField(document.querySelector('#basic_password'), [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
      errorMessage: 'パスワードを入力してください。',
    },
  ])
  .addField(document.querySelector('#basic_age'), [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '正しい年齢を入力してください。',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '正しい年齢を入力してください。',
    },
  ])
  .addField(document.querySelector('#basic_address'), [
	{
	  rule: 'required',
    errorMessage: '必須入力項目です。',
	},
  ])
  .onSuccess(onSuccess);

  function onSuccess(event) {
    let formDate = new FormData(event.target);
    console.log(formDate.get("name"));
    console.log(formDate.get("email"));
    console.log(formDate.get("password"));
    console.log(formDate.get("age"));
    console.log(formDate.get("address"));
  }