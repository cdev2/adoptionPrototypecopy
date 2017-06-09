angular.module("app").service("adoptUsService", function(){
    
    this.gallery = [
    {
     image: "https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/11508/11508357/45898326_385x385.jpg",
     name: "Spot",
     age : 2
     },
       
    {
    image:"https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/11508/11508349/45898315_500x750.jpg",
        name: "blackie",
        age: 1
     },
     
    {
    image: "https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/11476/11476178/45749797_385x385.jpg",
    name: "cuddles",
    age: 3
    },
        
    {  image:"https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/11470/11470481/45714198_385x385.jpg",
     name: "Dopey",
     age: 4
    },
  ];
});