export const dataFetcher = (url:any)=>{
  const response:any = fetch(url)
   .then(res=> res.json())
   .then(res => res);

   return response;
}