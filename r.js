
const array = ['abul', 'babul', 'cabul', 'dabul', 'eabul', 'fabul', 'gabul', 'abul', 'babul', 'dabul', 'eabul', 'fabul', 'babul', 'cabul'];

function delete_duplicate_item(name) {

    let array1 = [];

    for (let i = 0; i < name.length; i++) {
        let element = name[i];

        if (array1.includes(element) == false) {
            array1.push(element);
        }
    }
    return array1;

}

let unique = delete_duplicate_item(array);
console.log(unique);
