const renderMob = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/mobs')
    const data = await response.json()

    const mobContent = document.getElementById('mob-content')

    let mob = data.find(mob => mob.id === requestedID)

    if(mob){
        document.getElementById('image').src = mob.img_url
        document.getElementById('name').textContent = mob.name
        document.getElementById('health').textContent = 'Health: ' + mob.health
        document.getElementById('type').textContent = 'Type: ' + mob.type
        document.getElementById('color').textContent = 'Color: ' + mob.color
        document.getElementById('spawn').textContent = "Spawn: " + mob.spawn
        document.getElementById('description').textContent = mob.description
    }else{
        const message = document.createElement('h2')
        message.textContent = 'No Mob Available 😞'
        mobContent.appendChild(message)
    }

}

renderMob()