async function usersAsinfron() {
    try {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        const user = data.results[0];

        const profile = document.querySelector(".profile-pic");
        const vita = document.querySelectorAll(".content p");

        profile.src = user.picture.large;
        document.querySelector(".content h2").textContent = `${user.name.first} ${user.name.last}`;
        vita[0].innerHTML = `<strong>Phone:</strong> ${user.phone}`;
        vita[1].innerHTML = `<strong>Manzil:</strong> ${user.location.city}, ${user.location.country}`;
        vita[2].innerHTML = `<strong>Yosh:</strong> ${user.dob.age}`;
        vita[3].innerHTML = `<strong>Email:</strong> ${user.email}`;
    } catch (error) {
        console.log('Xatolik bor:', error);
    }
}

document.querySelector(".btn").addEventListener("click", () => {
    const btn = document.querySelector(".btn");
    btn.disabled = true; 

    setTimeout(async () => {
        await usersAsinfron();
        btn.disabled = false;
    }, 10); 
});
