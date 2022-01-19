const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + ">")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
   if (answers.length < questions.length) {
       ask(answers.length)
   } else {
       process.exit()
   }
})

process.on('exit', () => {
    console.log(`
    Bacana Nicole!

    O que aprendi hoje:
    ${answers[0]}

    O que me deixou aborreceu e posso melhorar:
    ${answers[1]} 
    
    O que me deixou feliz hoje:
    ${answers[2]}

   Você ajudou ${answers[3]} pessoas hoje!
    

    Volte amanhã para novas reflexões hein!
    `)
})

