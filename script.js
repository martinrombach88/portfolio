fetch('assets/skills.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let allCards = document.getElementById("skillsCardCon");
        let arrLen = data.skills.length;
        for (let i = 0; i < arrLen; i++){

            let oneCard = document.createElement("div");
            oneCard.setAttribute("class", "card");

            let image = document.createElement("img");
            image.setAttribute("src", data.skills[i].image_path);
            image.setAttribute("class", "logo");

            let title = document.createElement('h3');
            title.textContent = data.skills[i].title;

            let para = document.createElement('p');
            para.textContent = data.skills[i].text;

            let projects = document.createElement('h4');
            projects.textContent = `Projects: ${data.skills[i].projects}`

            let paraEnd = document.createElement('p');
            paraEnd.innerHTML = `<a href="${data.skills[i].link}"><strong>See More..</strong></a>`
            paraEnd.setAttribute("class", "canPress");
 
            allCards.appendChild(oneCard);
            oneCard.appendChild(image);
            oneCard.appendChild(title);
            oneCard.appendChild(para);
            oneCard.appendChild(projects);
            oneCard.appendChild(paraEnd);
        }

    });

