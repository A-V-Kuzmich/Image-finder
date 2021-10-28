 const BASE


function fetchImg(number) {
    return  fetch(`https://pixabay.com/api/?key=23365918-3471fb87d81c76e5978c01940&q=japan&image_type=photo&per_page=${number}&`)
      .then(response => {
        return response.json();
      })
      .then( json=> {
        const { hits } = json;
        renderImg(hits);
      })
      .catch((err) => {
        console.log('Ошибка загрузки: ' + err.message);
      });   
};