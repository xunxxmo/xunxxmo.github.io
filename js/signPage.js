function isValidUsername(username){
  const regex = /^[a-zA-Z0-9_]{3,16}$/;
  const spanElement = document.querySelector('.hint-container-username');
  const spanElement2 = document.querySelector('.right-operation-username');
  const inputElement = document.querySelector('.input-username');
  if(!regex.test(username)){
    spanElement.innerHTML = '请输入3至16位，仅包含字母，数字和_的用户名';
    spanElement2.innerHTML = '';
    inputElement.classList.add('js-input-username');
    return false;
  }

  spanElement.innerHTML = '';
  inputElement.classList.remove('js-input-username');

  spanElement2.innerHTML='<svg t="1701956368674" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7720" width="200" height="200"><path d="M428.551598 624.442817L282.872342 508.465156l-65.060639 43.491623 247.5133 254.231518s145.325666-318.231385 341.214762-472.043221l-21.922606-28.994415s-304.794949 217.811703-355.71197 318.231384m83.447341 326.717556A439.159311 439.159311 0 1 1 951.15825 512.001061 439.866492 439.866492 0 0 1 511.998939 951.160372m0-951.15825A511.998939 511.998939 0 1 0 1025.41224 512.001061 511.998939 511.998939 0 0 0 511.998939 0.002122" fill="#1afa29" p-id="7721"></path></svg>';

  return true;
}

function isValidPw(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  const spanElement = document.querySelector('.hint-container-pw');
  const spanElement2 = document.querySelector('.right-operation-pw');
  const inputElement = document.querySelector('.input-pw');
  if(!regex.test(password)){
    spanElement.innerHTML = '请输入至少8位，至少包含字母，数字的密码';
    spanElement2.innerHTML = '';
    inputElement.classList.add('js-input-pw');
    return false;
  }
  spanElement.innerHTML = '';
  inputElement.classList.remove('js-input-pw');
  spanElement2.innerHTML='<svg t="1701956368674" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7720" width="200" height="200"><path d="M428.551598 624.442817L282.872342 508.465156l-65.060639 43.491623 247.5133 254.231518s145.325666-318.231385 341.214762-472.043221l-21.922606-28.994415s-304.794949 217.811703-355.71197 318.231384m83.447341 326.717556A439.159311 439.159311 0 1 1 951.15825 512.001061 439.866492 439.866492 0 0 1 511.998939 951.160372m0-951.15825A511.998939 511.998939 0 1 0 1025.41224 512.001061 511.998939 511.998939 0 0 0 511.998939 0.002122" fill="#1afa29" p-id="7721"></path></svg>';

  return true;
}

function isSamePw(){
  const inputElement = document.querySelector('.input-repw');
  const pw = document.querySelector('.input-pw').value;
  const repw = document.querySelector('.input-repw').value;
  const spanElement2 = document.querySelector('.right-operation-repw');
  const spanElement = document.querySelector('.hint-container-repw');
  if(!(pw === repw)){
    spanElement.innerHTML = '两次输入密码不一致，请确认后输入';
    inputElement.classList.add('js-input-repw');
    spanElement2.innerHTML = '';
    return false;
  }
  if(repw){
    inputElement.classList.remove('js-input-repw');
    spanElement.innerHTML = '';
    spanElement2.innerHTML='<svg t="1701956368674" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7720" width="200" height="200"><path d="M428.551598 624.442817L282.872342 508.465156l-65.060639 43.491623 247.5133 254.231518s145.325666-318.231385 341.214762-472.043221l-21.922606-28.994415s-304.794949 217.811703-355.71197 318.231384m83.447341 326.717556A439.159311 439.159311 0 1 1 951.15825 512.001061 439.866492 439.866492 0 0 1 511.998939 951.160372m0-951.15825A511.998939 511.998939 0 1 0 1025.41224 512.001061 511.998939 511.998939 0 0 0 511.998939 0.002122" fill="#1afa29" p-id="7721"></path></svg>';
  }
}

function isValidEmail(value){
  const inputElement = document.querySelector('.input-email');
  const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
  const spanElement = document.querySelector('.hint-container-email');
  const spanElement2 = document.querySelector('.right-operation-email');

  if(!regex.test(value)){
    spanElement.innerHTML = '请输入有效的邮箱地址';
    spanElement2.innerHTML = '';
    inputElement.classList.add('js-input-email');
    return false;
  }
  inputElement.classList.remove('js-input-email');
  spanElement.innerHTML = '';
  spanElement2.innerHTML='<svg t="1701956368674" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7720" width="200" height="200"><path d="M428.551598 624.442817L282.872342 508.465156l-65.060639 43.491623 247.5133 254.231518s145.325666-318.231385 341.214762-472.043221l-21.922606-28.994415s-304.794949 217.811703-355.71197 318.231384m83.447341 326.717556A439.159311 439.159311 0 1 1 951.15825 512.001061 439.866492 439.866492 0 0 1 511.998939 951.160372m0-951.15825A511.998939 511.998939 0 1 0 1025.41224 512.001061 511.998939 511.998939 0 0 0 511.998939 0.002122" fill="#1afa29" p-id="7721"></path></svg>';

}

