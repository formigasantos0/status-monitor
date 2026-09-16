const services = document.querySelectorAll(".service");
const onlineCount = document.getElementById("online-count");
const lastUpdate = document.getElementById("last-update");

function updateTime() {
    lastUpdate.textContent = new Date().toLocaleTimeString("pt-BR");
}

function updateCounter() {
    const online = document.querySelectorAll(
        '.service[data-status="online"]'
    ).length;

    onlineCount.textContent = online;
}

function setStatus(status) {

    // Primeiro deixa todos online
    services.forEach(service => {
        service.dataset.status = "online";
        service.querySelector(".status").textContent = "Online";
    });

    if (status === "warning") {
        services[2].dataset.status = "warning";
        services[2].querySelector(".status").textContent = "Degradado";
    }

    if (status === "offline") {
        services[3].dataset.status = "offline";
        services[3].querySelector(".status").textContent = "Offline";
    }

    updateCounter();
    updateTime();
}

updateCounter();
updateTime();