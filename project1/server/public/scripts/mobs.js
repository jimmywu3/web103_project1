const renderMobs= async () => {
    const response = await fetch('/mobs')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if(data){
        data.map(mob => {
            const card = document.createElement('article')
            card.classList.add("card")
            card.style.display = "flex"
            card.style.gap = "5px"

            const section1 = document.createElement("div")
            
            const name = document.createElement('h3')
            name.textContent = mob.name
            section1.appendChild(name)

            const img_url = document.createElement("img")
            img_url.src = mob.img_url
            img_url.style.maxWidth = "100px"
            section1.appendChild(img_url)

            const section2 = document.createElement("div")
            section2.style.display = "flex"
            section2.style.flexDirection = "column"
            section2.style.alignItems = "center"
            section2.style.justifyContent = "center"

            const description = document.createElement("p")
            description.textContent = mob.description

            const more = document.createElement("a")
            more.textContent = "Learn More >"
            more.href = `/mobs/${mob.id}`

            section2.appendChild(description)
            section2.appendChild(more)

            card.appendChild(section1)
            card.appendChild(section2)

            mainContent.appendChild(card)
        })  
    }else{
        const message = document.createElement('h2')
        message.textContent = 'No Mobs Available 😞'
        mainContent.appendChild(message)
    }

}

renderMobs()

