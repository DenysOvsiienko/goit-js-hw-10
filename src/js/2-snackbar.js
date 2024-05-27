import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const formElem = document.querySelector('.form');
formElem.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(formElem.delay.value);
  const stateValue = formElem.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(
          iziToast.success({
            iconUrl:
              'https://raw.githubusercontent.com/GHUserNameDO/goit-js-hw-10/01fc6f6cdb4758e8b4a4cbd9864f88987c63d52c/src/img/successSvg.svg',
            message: `Fulfilled promise in ${delay}ms`,
            messageColor: '#ffffff',
            backgroundColor: '#59A10D',
            progressBar: true,
            progressBarColor: '#326101',
            progressBarEasing: 'linear',
            pauseOnHover: true,
            position: 'topRight',
          })
        );
      } else {
        reject(
          iziToast.error({
            iconUrl:
              'https://raw.githubusercontent.com/GHUserNameDO/goit-js-hw-10/01fc6f6cdb4758e8b4a4cbd9864f88987c63d52c/src/img/errorSvg.svg',
            message: `Rejected promise in ${delay}ms`,
            messageColor: '#ffffff',
            backgroundColor: '#EF4040',
            progressBar: true,
            progressBarColor: '#B51B1B',
            progressBarEasing: 'linear',
            pauseOnHover: true,
            position: 'topRight',
          })
        );
      }
    }, delay);
  });
  formElem.reset();
});
