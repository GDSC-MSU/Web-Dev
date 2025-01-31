console.log(1);
console.log("GDG");


// function multiply(a, b) {
//     return a * b;
// }



// console.log(multiply(2, 4));

nums = [1, 2, 3, 4];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
        console.log(nums[i]);
    }
}

let index = 0;

while (index < nums.length) {
    if (nums[index] % 2) {
        console.log(nums[index]);
    }

    index++;
}

index = 0;

do {
    if (nums[index] % 2) {
        console.log(nums[index]);
    }

    index++;
} while(index < nums.length);

