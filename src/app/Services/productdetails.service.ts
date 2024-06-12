
export class product{
    allProducts = [
        {id:1, name: 'Fully Automatic AC ',price: '$199',status: 'Available',image:'/assets/image/tv.jpg'},
        {id:2, name: 'LG Washing Machine',price: '$1,999',status: 'Available',image: '/assets/image/laptop.jpg'},
        {id:3, name: 'Headphone',price: '$1,999',status: 'Available',image: '/assets/image/headphone.jpg'},
        {id:4, name: 'Smart Fridge',price: '$2,999',status: 'Available',image: '/assets/image/fir.jpg'},
        {id:5, name: 'All Round Oven',price: '$999',status: 'Available',image: '/assets/image/oven.webp'},
        {id:6, name: 'Nom Cooler',price: '$4,999',status: 'Available',image: '/assets/image/cooler.jpg'},
        {id:7, name: 'Lenovo I5 13th Gen',price: '$7,999',status:  'Coming Soon...',image: '/assets/image/wash.jpg'},
        {id:8, name: 'Auto Dishwasher',price: '$2,999',status:'Available',image: '/assets/image/dish.jpg'}
      ];

      getAllProducts(): any{
         const productList = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.allProducts);
          }, 2000)
         });
         return productList;
      }
    }