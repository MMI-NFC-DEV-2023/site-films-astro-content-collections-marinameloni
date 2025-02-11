const formatter = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Europe/Paris",
    hour12: false,
    });


export function formatDate(date: Date) {
    return formatter.format(date);
}