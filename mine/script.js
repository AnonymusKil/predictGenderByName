const input = document.getElementById("name")
const btn = document.getElementById("Predict")
const holder = document.getElementById("content")

async function predictGender(params) {
    const getGender = input.value.trim()
    holder.innerHTML = "<i>Processing pls wait</i>"
    if (!getGender) {
        holder.innerHTML = "<i>Word not Found</i>"
    }else{
        const response = await fetch(`https://api.genderize.io?name=${getGender}`)
        const result = await response.json()
        if (!result) {
    holder.innerHTML = "<i>Word not Found</i>"
        }else if(result.gender === "female"){
          const htmlTemplate = ` <p>${getGender}</p>
               <img src="/image/female.svg" alt="">
            <h2>${result.gender}</h2>
            <p>Probability:${result.probability}</p>`;
            holder.innerHTML = htmlTemplate;
            holder.style.backgroundColor = "pink"
        }else if(result.gender === "male"){
            const htmlTemplate = ` <p>${getGender}</p>
              <img src="/image/male.svg" alt="">
                <h2>${result.gender}</h2>
               <p>Probability:${result.probability}</p> `;
               holder.innerHTML = htmlTemplate;
                 holder.style.backgroundColor = "lightblue"
        }else{
     holder.innerHTML = "<i>Gender Not found for this name </i>"
        }
    }
}
btn.addEventListener("click", predictGender)