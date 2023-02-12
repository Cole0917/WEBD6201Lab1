/* 
Names: Cole Biglang-awa (100825831) & Nathan Mcquaid
Date: 2023-02-12
*/

(function () {

    function DisplayHome() {
        
        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")

        // bottom navbar (implemented for every other display function as well)
        

        document.getElementById("projects").innerHTML = "Projects";
        
        // another way to access body
        documentBody = document.body

        let mainParagraph = document.createElement("h3")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        let firstString = "Welcome to our Lab 1 Website for WEBD6201-01! The content of this lab will touch upon DOM Manipulation."

        mainParagraph.textContent = firstString


        // add after(append)
        mainContent.appendChild(mainParagraph) 
    }

    function DisplayProjects() {

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        
        document.getElementById("projects").innerHTML = "Projects";
        
        // another way to access body
        documentBody = document.body

        

        let mainParagraph = document.createElement("h4")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        let secondaryParagraph = document.createElement("h5")
        secondaryParagraph.setAttribute("id", "SecondaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

        let tertiaryParagraph = document.createElement("h5")
        secondaryParagraph.setAttribute("id", "TertiaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

        let quaternaryParagraph = document.createElement("h5")
        secondaryParagraph.setAttribute("id", "TertiaryParagraph")
        secondaryParagraph.setAttribute("class", "mt-3 container")

 
        let firstString = "Three Favorite Projects: "
        let secondString = "1. JavaFX BMI Calculator"
        let thirdString = "2. C++ Text Prompt Checker"
        let fourthString = "3. C++ OOP Deck of Cards"

        mainParagraph.textContent = firstString
        secondaryParagraph.textContent = secondString
        tertiaryParagraph.textContent = thirdString
        quaternaryParagraph.textContent = fourthString
        

        // add after(append)
        mainContent.appendChild(mainParagraph)
        mainContent.appendChild(secondaryParagraph)
        mainContent.appendChild(tertiaryParagraph)
        mainContent.appendChild(quaternaryParagraph)
    }

    function DisplayServices() {
        document.getElementById("projects").innerHTML = "Projects";
    }

    function DisplayAboutUs() {
        document.getElementById("projects").innerHTML = "Projects";
    }

    function DisplayContactUs() {
        document.getElementById("projects").innerHTML = "Projects";
    }


    function Start() {
        console.log("App Started Successfully!")

        switch (document.title) {
            case "Home - WEBD6201 Lab 1":
                DisplayHome()
                break
            case "Products - WEBD6201 Lab 1":
                DisplayProjects()
                break
            case "Services - WEBD6201 Lab 1":
                DisplayServices()
                break
            case "About Us - WEBD6201 Lab 1":
                DisplayAboutUs()
                break
            case "Contact Us - WEBD6201 Lab 1":
                DisplayContactUs()
                break
        }
    }
    window.addEventListener("load", Start)
})()