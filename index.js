fetch("./index.json")
.then((res) => res.json())
.then((obj) => {console.log(obj)
    // koppla ihop json med js


    const workexperience = document.querySelector(".ul-cv");
    for (let experience of obj.workexperience){
        console.log(experience);

        const titleElement = document.createElement("li");
        titleElement.innerHTML = "<strong>" + experience.title + "</strong>" + "&nbsp; " + experience.year;
        workexperience.append(titleElement);
//loop för workexxperience

       for (let description of experience.description){
        const descriptionElement = document.createElement("li");
        descriptionElement.innerHTML = description;
        workexperience.append(descriptionElement);
        console.log(description);
        console.log(experience.description);

       }
//loop för description
    }
 







    const education = document.querySelector(".ul-cv");
    for (let education of obj.education){
        console.log(education);

        const titleElement = document.createElement("li");
        titleElement.innerHTML = "<strong>" + education.title + "</strong>" + "&nbsp; " + education.year;
        education.append(titleElement);
//loop för education

       for (let description of obj.description){
        const descriptionElement = document.createElement("li");
        descriptionElement.innerHTML = description;
        description.append(description.Element);

        console.log(description);
        console.log(education.description);

       }
//loop för description
    }
 
    

});








