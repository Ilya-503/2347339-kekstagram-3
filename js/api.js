const loadPhotos = (onSuccess, onFail) => {
  const URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
  fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw 'Невозможно получить данные. Попробуйте повторить попытку позже.';
    })
    .then((photos) => {
      onSuccess(photos);
    })
    .catch((err) => {
      onFail(err);
    });
};

const sendData = (onSuccess, onFail, body) => {
  const URL = 'https://27.javascript.pages.academy/kekstagram-simple';
  fetch(URL,
    {
      method: 'POST',
      body: body
    })
    .then((response) => {
      if (!response.ok) {
        throw 'Bad response';
      }
      onSuccess();
    })
    .catch((err) => {
      onFail(err);
    });
};

export{loadPhotos, sendData};
