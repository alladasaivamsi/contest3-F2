var object = [
    {"id":1 , "question": "What is a dog" , "answer": "Dog is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":2 , "question": "What is a cat" , "answer": "Cat is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":3 , "question": "What is a cow" , "answer": "Cow is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":4 , "question": "What is a donkey" , "answer": "Donkey is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":5 , "question": "What is a lion" , "answer": "Lion is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":6 , "question": "What is a fox" , "answer": "Fox is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":7 , "question": "What is a tiger" , "answer": "Tiger is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":8 , "question": "What is a leapord" , "answer": "Leapord is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":9 , "question": "What is a sheep" , "answer": "Sheep is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {"id":10 , "question": "What is a beer" , "answer": "Beer is a animal with 4 legs", "imageLink" : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
]


function getData(){
    let name = document.getElementById("name").value;
    let answer = document.getElementById("answer");
    let image = document.getElementById("image");

    for(var i = 0;i<object.length;i++){
        var row = `
            <p id="answer">${object[i].answer}</p>
            <img src=${object[i].imageLink} alt="" id="image">
        `
        data.innerHTML += row;
    }
}
// document.write(object[0].answer);

