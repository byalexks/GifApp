export const getGifs = async(cater)=>{
    const key = "ZGlHbxjfafMqbuv1SsYZHgVy7eicsjRC";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cater)}&limit=10&api_key=${key}`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

const gifs = data.map (img =>{
    return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }
})

  return gifs;
}