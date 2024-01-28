alert('hi')
      
      
      const products = [
        {
            id: 'Ambuluvava',
            sinhala_name:'අම්බුළුවාව',
            place:'Central Province',

        },
        {
            
            id: 'Sigiriya',
            sinhala_name:'සීගිරිය',
            place:'Street, Sigiriya, Central',

        },
        {
            id: 'Nuvara eliya',
            sinhala_name:'නුවර එළිය',
            place:'Nuwara Eliya, Central Province, Sri Lanka',


        },
        {
            id: 'sinharaja rain forest',
            sinhala_name:'සිංහරාජ වන රක්ෂිතය',
            place:'Sabaragamuwa and Southern Provinces, Sri Lanka',


        },
      ];

     // console.log(products)

     const chartBox = document.getElementById
     ('products');

     console.log(products);

   
            products.forEach((product,id) => {

            let itemHR = document.createElement('HR')

            let itemp = document.createElement('p');

            let itempText = document.createTextNode(`${product.sinhala_name}: Rs${product.place} `);

            itemp.appendChild(itempText);


            

          
    //console.log('ID: '+ product.brand) 
})

    

 



