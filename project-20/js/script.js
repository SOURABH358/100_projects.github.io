const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

const start = document.getElementById('start')
const result = document.getElementById('result')
const Alert = document.querySelector('.alert')
const Copy = document.getElementById('copy')

start.addEventListener('click',()=>{
    recognition.start();
    console.log('speech recognition has started')
})
recognition.onstart = (event)=>{
    Alert.classList.add('show__alert')
    Alert.innerText = 'You can start speaking'
    setTimeout(()=>{
        Alert.classList.remove('show__alert')
    },1500)
}
recognition.onend = (event)=>{
    Alert.classList.add('show__alert')
    Alert.innerText = 'Recording has stopped'
    setTimeout(()=>{
        Alert.classList.remove('show__alert')
    },1500)
}
    recognition.onresult = (event)=>{
        result.innerText = event.results[0][0].transcript;
    }

    Copy.addEventListener('click',()=>{
        if(result.innerText === 'Click the button to start recording')
            navigator.clipboard.writeText('')
        else
            navigator.clipboard.writeText(result.innerText)

            Alert.classList.add('show__alert')
            Alert.innerText = 'Copied to Clipboard!'
            setTimeout(()=>{
                Alert.classList.remove('show__alert')
            },1500)
    })