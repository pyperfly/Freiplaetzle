export async function fetchPlaces() {
    const res = await fetch('http://localhost:5000/Places')
    const data = await res.json()
    return data
  }