fetch("./index.json")
.then((res) => res.json())
.then((obj) => {console.log(obj)
    // koppla ihop json med js


    const workexperience = document.querySelector("#workexperience");
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
 







    const education = document.querySelector("#education");

    for (let educationCv of obj.education){
        console.log(education);

        const titleElement = document.createElement("li");
        titleElement.innerHTML = "<strong>" + educationCv.title + "</strong>" + "&nbsp; " + educationCv.year;
        education.append(titleElement);
//loop för education
       for (let description of educationCv.description){
        
         const descriptionElement = document.createElement("li");
         descriptionElement.innerHTML = description;
            education.append(descriptionElement);

       }
//loop för description
    }
 
    

});








