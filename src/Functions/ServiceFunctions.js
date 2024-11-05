export async function GetDirections() {
let directions = await fetch("https://a30168-fd46.u.d-f.pw/directions")
    .then(response => response.json());
return directions;
}