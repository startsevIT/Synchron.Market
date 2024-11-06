export async function LoginUserAsync(formData) {
    const response = await fetch("https://a30411-cd22.u.d-f.pw/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData })
    });
    console.log(response.ok)
    if (!response.ok) {
        alert("Такого пользователя нет");
        throw new Error("Такого пользователя нет");
    }

    const data = await response.json();
    sessionStorage.setItem("token", data);
    window.location.href = "/account";
}

export async function RegisterUserAsync(formData) {
    const response = await fetch("https://a30411-cd22.u.d-f.pw/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({        
                ...formData ,
                infoAd: formData.infoAd === "on" ? true : false,
                personalData: formData.personalData === "on" ? true : false
            })
    });

    if (!response.ok) {
        alert("Ошибка регистрации");
        throw new Error("Ошибка регистрации");
    }
    window.location.href = "/login";
}