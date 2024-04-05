
const topics = ["HTML", "CSS", "GIT", "JavaScript"];
const randomTopic = topics[Math.floor(Math.random()*topics.length)];

function listTopics() {
  for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
}




function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let study CSS! ");
  } else if (randomTopic === "GIT") {
    console.log("Let study GIT! ");
  } else if (randomTopic === "JavaScript") {
    console.log("Let study JavaScript! ");
  } else {
    console.log("Please try again! ");
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();