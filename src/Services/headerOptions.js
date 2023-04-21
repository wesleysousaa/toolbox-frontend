export const options = {
    "Content-Type": "application/json",
}

export const optionsWithToken = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("TOKEN")
}