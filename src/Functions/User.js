export async function LoginUserAsync(formData) {
    const response = await fetch("https://a30168-fd46.u.d-f.pw/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData })
    });

    if (!response.ok) {
        throw new Error("Такого пользователя нет");
    }

    const data = await response.json();
    sessionStorage.setItem("token", data);
}