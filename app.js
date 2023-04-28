function getCountryInfo(country){

let countries = document.querySelector('.countries');

let xhr =  new XMLHttpRequest ();

xhr.open('GET', 'https://restcountries.com/v3.1/name/' + country, true);

xhr.send();

  
xhr.addEventListener('load',function(){

let [data] = JSON.parse(xhr.responseText)
    console.log(data);
   

const html = `<article class="country">
<img src="${data.flags.svg}" alt="country-flag" class="country__image"/>
<div class="country__data">
<h3 class="country__name">${data.name.official}</h3> 
<p class="country__row"><span>&#127758;</span>${data.continents}</p> 
<p class="country__row"><span>&#x1F467;</span>${data.population}</p>
<p class="country__row"><span>&#x1F3E2;</span>${data.capital}</p>
<p class="country__row"><span>&#9200;</span>${data.timezones}</p>
<div>
</article>`;

countries.insertAdjacentHTML('beforeend', html);

})
}
getCountryInfo('Zambia');
getCountryInfo('Spain');
getCountryInfo('Nauru');
getCountryInfo('Kyrgyzstan');
getCountryInfo('Latvia');
getCountryInfo('Belize');
getCountryInfo('Thailand');
getCountryInfo('Jamaica');













// let countries = document.querySelector('.countries');

// let xhr =  new XMLHttpRequest ();

// xhr.open('GET', 'https://restcountries.com/v3.1/name/germany');

// xhr.send();

  
// xhr.addEventListener('load',function(){

// let [data] = JSON.parse(xhr.responseText)
//     console.log(data);
   

// const html = `<article class="country">
// <img src="${data.flags.svg}" width="100px" height="100px" alt="country-flag" class="countr__image"/>
// <div class="country__data">
// <h3 class="country__name">${data.name.common}</h3>  
// <p class="country__row"><span>&#x1F467;</span>${data.population}</p>
// <p class="country__row"><span>&#x1F4AC;</span>${data.languages.deu}</p>
// <p class="country__row"><span>&#x1F3E2;</span>${data.capital}</p>
// <p class="country__row"><span>&#x1F4B5;</span>${data.currencies}</p>
// </div>
// </article>`;

// countries.insertAdjacentHTML('beforeend', html);

// })



// // let resolve = document.getElementById('resolve');
// // console.log(resolve);

// // resolve.addEventListener('click', ()=>{
// //    let xhr =  new XMLHttpRequest ();
// //    xhr.open('POST', 'https://restcountries.com/v3.1/all', true);

// //    xhr.onprogress=function(){
// //    //open file in Live Server otherwise will
// //     // get errors and message won't be displayed.

// //    }
// //    xhr.onreadystatechange=function(){
// //     console.log("Ready State is" + xhr.readyState);

// //    }

// //    xhr.onload=function(){
// //     if(this.status===200){
// //             console.log(this.responseText);
// //     }else{
// //         console.log('Error 404 Page Not Found');
// //     }
// //     data = {title:'Ajax project'}


// //    }
// // xhr.send(resolve);
// // console.log('i am the last line in a code.');
// // })

