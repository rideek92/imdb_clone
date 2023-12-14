import ItemsMovie from "@/app/Components/Movies/ItemsMovie";

const API_KEY = process.env.API_KEY || null

export default async function Home({searchParams}) {

    const genre = searchParams.genre

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    const movies =  []

    const res = await fetch(`https://api.themoviedb.org/3/trending/${genre}/week?language=pl-PL`, options , {next : { revalidate: 10000}} )
        .then(response => response.json())
        .then(response => movies.push(response.results) )
        .catch(err => console.error(err));



  return (
    <main className="" >
        <ItemsMovie data={movies[0]} />
    </main>
  )
}
