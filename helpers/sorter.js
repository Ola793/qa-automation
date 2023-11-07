export default function sortBySalary(arrayOfDevs) {
    return arrayOfDevs.sort((a, b) => a.salary === b.salary ? a.id - b.id : a.salary - b.salary)
}

