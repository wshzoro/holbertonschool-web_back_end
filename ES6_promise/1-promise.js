export default function getFullResponseFromAPI(sucess) {
  return new Promise((resolve, reject) => {
    if (sucess) {
      resolve({
        status: 200,
        body: 'Sucess',
      });
    } else {
      reject(new Error('The fake APi is not working currently'));
    }
  });
}
