fetch('assets/projects.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let allCards = document.getElementById("jsCardCon");
        let arrLen = data.projects.length;
        for (let i = 0; i < arrLen; i++){

            let oneCard = document.createElement("div");
            oneCard.setAttribute("class", "card");

            let image = document.createElement("img");
            image.setAttribute("src", data.projects[i].image_path);
            image.setAttribute("class", "projectLogo");

            let title = document.createElement('h3');
            title.textContent = data.projects[i].title;

            let para = document.createElement('p');
            para.textContent = data.projects[i].text;

            let innerDiv = document.createElement('div');
            innerDiv.setAttribute("class", "innerDiv")

            let websiteP = document.createElement('p');
            let website = document.createElement('a');
            website.setAttribute("href", data.projects[i].website);
            website.setAttribute("class", "canPress");
            website.textContent = "Website";
            
            let codeP = document.createElement('p');
            let code = document.createElement('a');
            code.setAttribute("href", data.projects[i].code);
            code.setAttribute("class", "canPress");
            code.textContent = "Code";

            allCards.appendChild(oneCard);
            oneCard.appendChild(image);
            oneCard.appendChild(title);
            oneCard.appendChild(para);
            oneCard.appendChild(innerDiv);
            innerDiv.appendChild(websiteP);
            innerDiv.appendChild(codeP);
            websiteP.appendChild(website);
            codeP.appendChild(code);
            
        }

    });

