let a, b, rest; 

[a,b]=[10,20];
    console.log(a);
    console.log(b);

// deconstruyendo
[a,b, ...rest]=[30,40,50,60,70, 80];

    console.log(a);
    console.log(b);
    console.log(rest);