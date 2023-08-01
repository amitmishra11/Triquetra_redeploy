var box = document.querySelector(".bot-container");
//console.log(box);
const closeBot = ()=>{
console.log(box.style.display);
box.style.display = "none";
}
    
var botui = new BotUI('my-botui-app');
// Start Bot
// First Messages
botui.message.bot({
    content: 'Hi there! 👋',
    loading: true,
    delay: 2000,
}).then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "I'm  Mr SIMP,your guide.",
    });
})

.then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Are you facing any of the below problems ? I will solve all for you.",
    });
}).then(function () {
  return botui.action.button({
        delay: 1500,
        loading: true,
        addMessage: true,
        action: [{
            text: 'Yes! My check the hospital beds availability feature is not working',
            value: 'yes'
        }, {
            text: 'Yes! Give me guide to your website ',
            value: 'no'
        },{
            text: 'No!!. i Dont need you.',
            value: 'no'
        }]
    })
}).then(function (res) {
  if (res.value == 'yes') {
     return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "The check the hospital beds availability feature will  not work if you are not logged in",
            }).then(function(){
                return botui.message.bot({
        loading: true,
        delay: 1000,
        content: "So please login with simple step",
            })
       }).then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: "  Have a good day.",
            })
       })
       .then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: " TDFG",
            })
       })
    }     
  else {
    return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "Alright .I am always here to help you.",
            });
  }
}).then(function () {
  return botui.message.bot({
                loading: true,
                delay: 1000,
                content: "Bye.",
            });
})