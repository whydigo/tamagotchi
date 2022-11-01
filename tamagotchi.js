const tamagotchi = {
    name: 'Пум-пурум',
    meal: 1,
    energy: 2,
    mood: 1,
    muscles: 0,
}
tamagotchi.getStatus = function () {
    let meal = ''
    let energy = ''
    let mood = ''
    let muscles = ''
    if (tamagotchi.meal === 0) {
        return console.log('YOU DIED')
    } else if (tamagotchi.meal > 3) {
        meal = `Еда: Я не голоден (${tamagotchi.meal}), `
    } else {
        meal = `Еда: Я голоден (${tamagotchi.meal}), `
    }
    if (tamagotchi.energy === 0) {
        return console.log('YOU DIED')
    } else if (tamagotchi.energy > 3) {
        energy = `Энергия: Я не хочу спать (${tamagotchi.energy}), `
    } else {
        energy = `Энергия: Я хочу спать (${tamagotchi.energy}), `
    }
    if (tamagotchi.mood === 0) {
        return console.log('YOU DIED')
    } else if (tamagotchi.mood > 3) {
        mood = `Настроение: Я полон сил (${tamagotchi.mood}), `
    } else {
        mood = `Настроение: Я устал (${tamagotchi.mood}), `
    }
    if (tamagotchi.muscles === 0) {
        return console.log('YOU WEAK!!!')
    } else if (tamagotchi.muscles === 1) {
        muscles = `Альфасамцовость: Я никчемность! (${tamagotchi.muscles}).`
    } else if (tamagotchi.muscles === 2) {
        muscles = `Альфасамцовость: Я неуверенный в себе задрот. (${tamagotchi.muscles}).`
    } else if (tamagotchi.muscles === 3) {
        muscles = `Альфасамцовость: Мне кажется, что могу попросить у нее номер. (${tamagotchi.muscles}).`
    } else if (tamagotchi.muscles === 4) {
        muscles = `Альфасамцовость: Пойду попрошу у нее номер. (${tamagotchi.muscles}).`
    }
    else {
        muscles = `Альфасамцовость: Я никогда не выйду из зала. В моих венах течет протеин. Воины спарты не знают слабостей. (${tamagotchi.muscles}).`
    }
    return console.log(`${meal}${energy}${mood}${muscles}`)
}
tamagotchi.setName = function (newName) {
    return tamagotchi.name = newName
}
tamagotchi.letsEat = function () {
    if (tamagotchi.meal < 5) {
        tamagotchi.meal++
    }
    tamagotchi.mood--
}
tamagotchi.letsSleep = function () {
    if (tamagotchi.energy < 5) {
        tamagotchi.energy++
    }
    tamagotchi.meal--
}
tamagotchi.letsPlay = function () {
    if (tamagotchi.mood < 5) {
        tamagotchi.mood++
    }
    tamagotchi.energy--
}
tamagotchi.letsGoToGYM = function () {
    if (tamagotchi.muscles < 5) {
        tamagotchi.muscles++
    }
    tamagotchi.energy--
}
tamagotchi.setName('Rock')
tamagotchi.getStatus()

