export const RegisterDTO = [
    {
        name: "companyName",
        placeholder: "Название компании",
        required: true
    },
    {
        name: "inn",
        placeholder: "ИНН",
        required: true,
    },
    {
        name: "firstName",
        placeholder: "Фамилия",
        required: true
    },
    {
        name: "name",
        placeholder: "Имя",
        required: true,
    },
    {
        name: "patronymic",
        placeholder: "Отчество",
        required: true
    },
    {
        name: "email",
        placeholder: "E-mail",
        required: true,
        type: "email",
    },
    {
        name: "phone",
        placeholder: "Номер телефона",
        required: true,
        type: "tel"
    },
    {
        name: "password",
        placeholder: "Пароль",
        required: true,
        type: "password",
        minLength: 8
    },
    {
        name: "personalData",
        placeholder: "Согласие на обработку персональных данных",
        required: true,
        type: "checkbox"
    },
    {
        name: "infoAd",
        placeholder: "Согласие на рассылку рекламных сообщений",
        required: true,
        type: "checkbox"
    }
]