const appTitle = "Random Generator";

export const getHome = async (req, res) => {

    try{ 
        const data = await fetchdata();

        res.render("home", {
            title: appTitle,
            data: data
        });
    }catch(error){
        res.status(500).send('An error occurred while generating.');
    }    
    
};

export const getRandomData = async (req, res) => {    
    try{
        const data = await fetchdata();

        res.render("home", {
            title: appTitle,
            data: data
        });
    }catch(error) {
        res.status(500).send('An error occurred while generating.');
    }
};

async function fetchdata(){
    var data = {};

    // Fetch a random quote
    const res = await fetch('https://dummyjson.com/quotes/random');
    const result = await res.json();
    data.quote = result.quote;

    // Fetch a random image
    const imageData = await fetch('https://picsum.photos/350', {
        method: 'GET',
        redirect: 'manual'  
    });

    data.image = imageData.headers.get('Location');

    return data;
}