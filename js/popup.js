document.addEventListener('DOMContentLoaded', function () {
  const firstPopup = document.querySelector('.confirmation__first-popup');
  const secondPopup = document.querySelector('.confirmation__second-popup');
  const thirdPopup = document.querySelector('.confirmation__third-popup');
  const fourthPopup = document.querySelector('.confirmation__fourth-popup');
  const yesButton = document.querySelector('.confirmation__btn-yes');
  const closeButtons = document.querySelectorAll('.confirmation__btn-close');
  const nextButtons = document.querySelectorAll('.confirmation__btn-next');
  const confirmationSection = document.querySelector('.confirmation');

  const REDIRECT_URL = 'https://www.pfizerprofi.ru/';
  const CORRECT_ANSWERS = { 1: 1, 2: 1, 3: 2 };
  const userAnswers = {};

  const COOKIE_NAME = 'hcp_confirmed';
  const COOKIE_DAYS = 30;

  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/; SameSite=Lax';
  }

  function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      const pair = cookieArr[i].trim().split('=');
      if (pair[0] === name) {
        return decodeURIComponent(pair[1] || '');
      }
    }
    return null;
  }

  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  const existingResult = getCookie(COOKIE_NAME);
  if (existingResult === 'yes') {
    if (confirmationSection) {
      confirmationSection.style.display = 'none';
    }
    return;
  }

  function getQuestionNumber(popup) {
    if (popup.classList.contains('confirmation__second-popup')) return 1;
    if (popup.classList.contains('confirmation__third-popup')) return 2;
    if (popup.classList.contains('confirmation__fourth-popup')) return 3;
    return null;
  }

  function getSelectedAnswerIndex(popup) {
    const answers = popup.querySelectorAll('.confirmation__answer-popup-answer');
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].classList.contains('confirmation__answer-popup-answer--selected')) {
        return i + 1;
      }
    }
    return null;
  }

  function saveAnswerFromPopup(popup) {
    const questionNumber = getQuestionNumber(popup);
    const answerIndex = getSelectedAnswerIndex(popup);
    if (questionNumber && answerIndex) {
      userAnswers[questionNumber] = answerIndex;
    }
  }

  function areAllAnswersCorrect() {
    return Object.keys(CORRECT_ANSWERS).every(
      (questionNumber) => userAnswers[questionNumber] === CORRECT_ANSWERS[questionNumber],
    );
  }

  const allPopups = [secondPopup, thirdPopup, fourthPopup];
  allPopups.forEach((popup) => {
    if (popup) {
      popup.style.display = 'none';
    }
  });

  if (confirmationSection) {
    confirmationSection.addEventListener('click', function (event) {
      const answerBlock = event.target.closest('.confirmation__answer-popup-answer');
      if (!answerBlock) return;

      const answersContainer = answerBlock.closest('.confirmation__answer-popup-answers');
      if (!answersContainer) return;

      answersContainer.querySelectorAll('.confirmation__answer-popup-answer').forEach((answer) => {
        answer.classList.remove('confirmation__answer-popup-answer--selected');
      });
      answerBlock.classList.add('confirmation__answer-popup-answer--selected');

      const popup = answerBlock.closest('.confirmation__answer-popup');
      if (popup) {
        saveAnswerFromPopup(popup);
      }
    });
  }

  if (yesButton && firstPopup && secondPopup) {
    yesButton.addEventListener('click', function () {
      firstPopup.style.display = 'none';
      secondPopup.style.display = 'block';
    });
  }

  if (nextButtons.length > 0) {
    nextButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const currentPopup = button.closest('.confirmation__answer-popup');
        if (!currentPopup) return;

        saveAnswerFromPopup(currentPopup);

        if (!getSelectedAnswerIndex(currentPopup)) {
          return;
        }

        if (currentPopup.classList.contains('confirmation__fourth-popup')) {
          if (areAllAnswersCorrect()) {
            // Тест пройден успешно — сохраняем результат в куки
            setCookie(COOKIE_NAME, 'yes', COOKIE_DAYS);
            confirmationSection.style.display = 'none';
          } else {
            // Тест не пройден — отмечаем это и уводим со страницы
            setCookie(COOKIE_NAME, 'no', COOKIE_DAYS);
            window.location.href = REDIRECT_URL;
          }
          return;
        }

        currentPopup.style.display = 'none';

        if (currentPopup.classList.contains('confirmation__second-popup')) {
          if (thirdPopup) thirdPopup.style.display = 'block';
        } else if (currentPopup.classList.contains('confirmation__third-popup')) {
          if (fourthPopup) fourthPopup.style.display = 'block';
        }
      });
    });
  }

  closeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      if (confirmationSection) {
        confirmationSection.style.display = 'none';
      }
    });
  });
});
