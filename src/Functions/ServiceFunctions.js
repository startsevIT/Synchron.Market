export async function GetDirections() {
let directions = await fetch("https://a30411-cd22.u.d-f.pw/directions")
    .then(response => response.json());
return directions;
}