const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

const start = document.getElementById('start')
const result = document.getElementById('result')
const Alert = document.querySelector('.alert')
start.addEventListener('click',()=>{
    recognition.start();
    console.log('speech recognition has started')
})
recognition.onstart = (event)=>{
    Alert.classList.add('show__alert')
    Alert.innerText = 'You can start speaking'
    setTimeout(()=>{
        Alert.classList.remove('show__alert')
    },500)
}
recognition.onend = (event)=>{
    Alert.classList.add('show__alert')
    Alert.innerText = 'Recording has stopped'
    setTimeout(()=>{
        Alert.classList.remove('show__alert')
    },500)
}
    recognition.onresult = (event)=>{
        result.innerText = event.results[0][0].transcript;
    }