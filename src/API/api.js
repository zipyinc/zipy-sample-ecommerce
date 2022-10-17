export async function fetchProduct () {

    const product = await fetch('https://ecommerce.com/fetch-products?itype="goods"&limit="10"', {
       headers: {
           'Content-type': 'application/json',
           "token": "kjbdfhdvvdvhvhdh.ncjdooeoks.ccd"
        }
   })


   return product
}

export async function buyProduct () {

    try {
      const response = await fetch('https://ecommerce.com/buy-products?count="10"&price="premium"', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                "token": "kjbdfhdvvdvhvhdh.djbr.scrff"
            }
        })

        return response
    } catch(e) {
        console.error(e)
    }
  }
    
    export async function incrementProduct () {
        try {
          const data = JSON.stringify({
              query: ` {
                users  {
                    id
                    email
                    name
                }
            }`
            });
            const response =   fetch('https://api.mocki.io/v2/c4d7a195/graphql',
              {
                method: 'post',
                body: data,
                headers: {
                  'Content-Type': 'application/json',
                  'Content-Length': data.length
                },
              }
            );
           return response
        } catch(e) {
        console.error(e)
        }
    }

