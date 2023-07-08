import Chance from "chance";

// getting dummy data from Chance..
const chance = Chance();

export const fakeUserData = () => {
    return `${chance.name()}, ${chance.country({ full: true })}`;
}