
let resume = [{
  "firstName" : "Gopi",
  "lastName"  : "Vellingiri",
  "age"       : "28",
  "gender"    : "male",
  "location"  : "coimbator",
  "designation": "Graphic Designer",
  "experience"  : "4 years",
  "organization"   : "Gekx Tech",
  "maritalStatus": "Single",
  "languagesKnown": "Tamil and English",
  "codingExperience": ["basic","HTML","css","javascript","bootstrap"],
  "hobbies" :["watching Anime", "reading books", "Playing chess"]
  
}];
for(let i = 0; i < resume.length; i++){
  console.log(resume[i]);
}


for(let index in resume){
  console.log(resume[index])
}

for(let index of resume){
  console.log(index)
} 

let resume1 = [{
obj1 : { "firstName" : "Gopi",
  "lastName"  : "Vellingiri"},

 obj2:{ "age"       : "28",
  "gender"    : "male",
  "location"  : "coimbator",
  "designation": "Graphic Designer",},
  obj3:{"experience"  : "4 years",
  "organization"   : "Gekx Tech",
  "maritalStatus": "Single",},
  obj4:{"languagesKnown": "Tamil and English",
  "codingExperience": ["basic","HTML","css","javascript","bootstrap"],
  "hobbies" :["watching Anime", "reading books", "Playing chess"]}
  
}]

for(let i = 0; i < resume1.length; i++){
  console.log(resume1[i].obj1)
}
for(let i = 0; i < resume1.length; i++){
  console.log(resume1[i].obj4)
}
for(let index in resume1){
  console.log(resume1[index])
}
for(let index of resume1){
  console.log(index)
} 
