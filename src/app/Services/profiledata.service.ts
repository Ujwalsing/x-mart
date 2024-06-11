
export class ProfileDataService{
    allProfiles:{id:number, name: string,image:string,linkedin: string, designation: string}[] = [
        {id:1, name: 'Ujwal Singh',image:'/assets/image/ujwal.jpeg',designation:'INFULENCER',linkedin:'https://www.linkedin.com/in/ujwal747/'},
        {id:2, name: 'Pankaj Sharma',image: '/assets/image/pankaj.jpeg',designation:'OWNER 2000CC DAVID PUTRA',linkedin: null},
        {id:3, name: 'Mihir Shinde',image: '/assets/image/mihir.jpg',designation:'PRIME MINISTER',linkedin:'https://www.linkedin.com/in/mihir2403/'},
        {id:4, name: 'Shubham Pawar',image: '/assets/image/shubhamfinal.jpeg',designation:'INVENTOR OF CYPRESS',linkedin:'https://www.linkedin.com/in/shubham-pawar-62a79623b/'},
        {id:5, name: 'Mahesh K.',image: '/assets/image/mahesh.jpeg',designation:'CEO OF VODKA | MARBOLO',linkedin:'https://www.linkedin.com/in/mahesh-kaliyaperumal-603bab25a/'},
        {id:6, name: 'Jitesh Shankhpal',image: '/assets/image/jitesh.jpg',designation:"'I am on leave today,not feeling well'",linkedin:'https://www.linkedin.com/in/jitesh-shankhpal-3146b21b0/'}
      ];

      getAllProfiles(): any{
        const productList = new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve(this.allProfiles);
         }, 2000)
        });
        return productList;
     }
    }